import "dotenv/config";
import crypto from "crypto";
import path from "path";
import { fileURLToPath } from "url";

import express from "express";
import multer from "multer";

import { generateLesson, generateQuiz, gradeOpenAnswers, reexplain } from "./lib/ai.js";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

if (!process.env.GEMINI_API_KEY) {
  console.warn(
    "[!] GEMINI_API_KEY не задан. Создайте .env на основе .env.example и укажите ключ.",
  );
}

const app = express();
app.use(express.json({ limit: "2mb" }));
app.use(express.static(path.join(__dirname, "public")));

const upload = multer({
  storage: multer.memoryStorage(),
  limits: { fileSize: 10 * 1024 * 1024, files: 5 },
  fileFilter: (req, file, cb) => {
    const ok =
      file.mimetype.startsWith("image/") ||
      file.mimetype === "application/pdf" ||
      file.mimetype.startsWith("text/");
    cb(ok ? null : new Error("Неподдерживаемый тип файла"), ok);
  },
});

// In-memory store of active quizzes so answer keys never reach the client.
const quizzes = new Map();
const QUIZ_TTL_MS = 2 * 60 * 60 * 1000;
setInterval(() => {
  const cutoff = Date.now() - QUIZ_TTL_MS;
  for (const [id, quiz] of quizzes) {
    if (quiz.createdAt < cutoff) quizzes.delete(id);
  }
}, 30 * 60 * 1000).unref();

function handleAsync(fn) {
  return (req, res) => {
    fn(req, res).catch((err) => {
      console.error(err);
      res.status(500).json({ error: err.message || "Внутренняя ошибка сервера" });
    });
  };
}

app.post(
  "/api/lesson",
  upload.array("files", 5),
  handleAsync(async (req, res) => {
    const lesson = await generateLesson({ topic: req.body.topic, files: req.files });
    res.json({ lesson });
  }),
);

app.post(
  "/api/quiz",
  handleAsync(async (req, res) => {
    const { lesson } = req.body;
    if (!lesson) return res.status(400).json({ error: "Не передан урок" });

    const quiz = await generateQuiz({ lesson });
    const quizId = crypto.randomUUID();
    quizzes.set(quizId, { lesson, mcq: quiz.mcq, open: quiz.open, createdAt: Date.now() });

    res.json({
      quizId,
      mcq: quiz.mcq.map((q) => ({ question: q.question, options: q.options })),
      open: quiz.open.map((q) => ({ question: q.question })),
    });
  }),
);

app.post(
  "/api/grade",
  handleAsync(async (req, res) => {
    const { quizId, mcqAnswers = [], openAnswers = [] } = req.body;
    const quiz = quizzes.get(quizId);
    if (!quiz) {
      return res.status(404).json({ error: "Тест не найден или устарел, начните заново" });
    }

    const mcqResults = quiz.mcq.map((q, i) => ({
      question: q.question,
      correct: mcqAnswers[i] === q.correctIndex,
      correctIndex: q.correctIndex,
      chosenIndex: mcqAnswers[i] ?? null,
      explanation: q.explanation,
    }));

    let openResults = [];
    if (quiz.open.length) {
      const graded = await gradeOpenAnswers({
        lesson: quiz.lesson,
        open: quiz.open,
        answers: openAnswers,
      });
      openResults = quiz.open.map((q, i) => ({
        question: q.question,
        answer: openAnswers[i] || "",
        correct: !!graded[i]?.correct,
        score: typeof graded[i]?.score === "number" ? graded[i].score : 0,
        feedback: graded[i]?.feedback || "",
      }));
    }

    const totalItems = mcqResults.length + openResults.length;
    const totalScore =
      mcqResults.filter((r) => r.correct).length +
      openResults.reduce((sum, r) => sum + r.score, 0);
    const percent = totalItems ? Math.round((totalScore / totalItems) * 100) : 0;
    const mastered = percent >= 80;

    const weakPoints = [
      ...mcqResults.filter((r) => !r.correct).map((r) => `${r.question} — ${r.explanation}`),
      ...openResults.filter((r) => r.score < 0.6).map((r) => `${r.question} — ${r.feedback}`),
    ];

    // Quiz is single-use: drop the answer key once graded.
    quizzes.delete(quizId);

    res.json({ percent, mastered, mcqResults, openResults, weakPoints });
  }),
);

app.post(
  "/api/reexplain",
  handleAsync(async (req, res) => {
    const { lesson, weakPoints } = req.body;
    if (!lesson || !Array.isArray(weakPoints) || !weakPoints.length) {
      return res.status(400).json({ error: "Нет данных для повторного объяснения" });
    }
    const result = await reexplain({ lesson, weakPoints });
    res.json(result);
  }),
);

// Multer errors (bad file type, too large, too many files) land here.
app.use((err, req, res, next) => {
  if (err) {
    console.error(err);
    return res.status(400).json({ error: err.message || "Ошибка загрузки файла" });
  }
  next();
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Сайт запущен: http://localhost:${PORT}`);
});
