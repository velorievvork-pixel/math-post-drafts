import { GoogleGenAI } from "@google/genai";

const client = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
const MODEL = process.env.GEMINI_MODEL || "gemini-3.6-flash";

const IMAGE_MEDIA_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]);

/** Fallback for the rare case the model doesn't respect responseMimeType. */
function extractJSON(text) {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced ? fenced[1] : text;
  const start = candidate.search(/[[{]/);
  if (start === -1) throw new Error("Модель не вернула JSON");
  const opener = candidate[start];
  const closer = opener === "{" ? "}" : "]";
  const end = candidate.lastIndexOf(closer);
  if (end === -1 || end < start) throw new Error("Не удалось найти конец JSON");
  return JSON.parse(candidate.slice(start, end + 1));
}

async function callForJSON({ system, parts, maxOutputTokens, schema }) {
  const response = await client.models.generateContent({
    model: MODEL,
    contents: parts,
    config: {
      systemInstruction: system,
      maxOutputTokens,
      responseMimeType: "application/json",
      responseSchema: schema,
    },
  });

  const text = response.text;
  if (!text) {
    const reason = response.promptFeedback?.blockReason;
    throw new Error(
      reason ? `Модель отказалась выполнить запрос (${reason})` : "Пустой ответ модели",
    );
  }

  try {
    return JSON.parse(text);
  } catch {
    return extractJSON(text);
  }
}

/** Converts uploaded files (multer in-memory) into Gemini Part objects,
 * and returns any plain-text file contents to be inlined into the prompt. */
function filesToParts(files = []) {
  const parts = [];
  const inlineTexts = [];
  for (const file of files) {
    if (IMAGE_MEDIA_TYPES.has(file.mimetype) || file.mimetype === "application/pdf") {
      parts.push({
        inlineData: {
          data: file.buffer.toString("base64"),
          mimeType: file.mimetype,
        },
      });
    } else if (file.mimetype.startsWith("text/")) {
      inlineTexts.push(
        `--- Файл "${file.originalname}" ---\n${file.buffer
          .toString("utf8")
          .slice(0, 20000)}`,
      );
    }
  }
  return { parts, inlineTexts };
}

const LESSON_SYSTEM = `Ты — опытный и терпеливый преподаватель, который готовит подробные персональные уроки.
Тебе присылают тему, фотографии (например, фото учебника, конспекта, доски, задачи) и/или файлы.
Разберись, что именно нужно объяснить, и подготовь урок на русском языке для человека, который
видит эту тему как новую или хочет закрепить её основательно, не поверхностно.

ВАЖНОЕ ТРЕБОВАНИЕ К ОБЪЁМУ: урок должен занимать у ученика МИНИМУМ 30 и МАКСИМУМ 45 минут
вдумчивого изучения (это чтение + разбор примеров + решение практических задач, а не беглое
пролистывание). Ориентир по объёму текста — суммарно НЕ МЕНЕЕ 4000-4500 слов по всем полям
вместе (sections + workedExamples + practiceProblems). Это значит: не сокращай, не жалей слов,
раскрывай тему по-настоящему глубоко — с историей вопроса, интуицией "почему это работает",
несколькими способами посмотреть на идею, разбором пограничных случаев и типичных заблуждений.
Урок из 3-4 коротких абзацев — это провал задачи, а не результат.

Структура и требования:
- Объясняй ясным языком, но не искажай факты, определения и формулы.
- Раздели материал на 8-12 содержательных разделов (sections). Каждый раздел — минимум
  250-400 слов, можно с несколькими абзацами (используй "\\n\\n" внутри content для переноса
  абзацев). Веди читателя от базовой интуиции к деталям, не бойся повторить важную мысль другими
  словами для закрепления.
- Добавь 4-6 подробных разобранных примеров (workedExamples) с пошаговым решением —
  показывай ход рассуждений, а не только ответ.
- Добавь 4-6 практических задач (practiceProblems) для самостоятельной проработки, с полным
  решением (ученик сначала попробует сам, потом сверится).
- В конце сформулируй checklist — короткие утверждения о том, что человек должен уметь
  объяснить или сделать после урока (именно на них потом будет опираться проверочный тест).

Отвечай строго по заданной JSON-схеме, без пояснений вне JSON. Поле level — одно из значений:
"начальный", "средний", "продвинутый".`;

const LESSON_SCHEMA = {
  type: "OBJECT",
  properties: {
    title: { type: "STRING", description: "Название темы урока" },
    level: {
      type: "STRING",
      format: "enum",
      enum: ["начальный", "средний", "продвинутый"],
    },
    intro: { type: "STRING", description: "3-6 предложений: зачем это нужно знать" },
    sections: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          heading: { type: "STRING" },
          content: { type: "STRING", description: "минимум 250-400 слов" },
        },
        required: ["heading", "content"],
      },
    },
    workedExamples: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          title: { type: "STRING" },
          problem: { type: "STRING" },
          solution: { type: "STRING", description: "подробное пошаговое решение" },
        },
        required: ["title", "problem", "solution"],
      },
    },
    practiceProblems: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          problem: { type: "STRING" },
          solution: { type: "STRING" },
        },
        required: ["problem", "solution"],
      },
    },
    keyTakeaways: { type: "ARRAY", items: { type: "STRING" } },
    commonMistakes: { type: "ARRAY", items: { type: "STRING" } },
    checklist: { type: "ARRAY", items: { type: "STRING" } },
  },
  required: [
    "title",
    "level",
    "intro",
    "sections",
    "workedExamples",
    "practiceProblems",
    "keyTakeaways",
    "commonMistakes",
    "checklist",
  ],
};

export async function generateLesson({ topic, files }) {
  const { parts: fileParts, inlineTexts } = filesToParts(files);

  const pieces = [];
  if (topic && topic.trim()) {
    pieces.push(`Тема/запрос от ученика: "${topic.trim()}"`);
  }
  if (fileParts.some((p) => IMAGE_MEDIA_TYPES.has(p.inlineData.mimeType))) {
    pieces.push(
      "К запросу приложены изображения — используй их как основной источник материала (это может быть фото страницы учебника, конспекта, задачи, доски и т.п.).",
    );
  }
  if (fileParts.some((p) => p.inlineData.mimeType === "application/pdf")) {
    pieces.push("К запросу приложен PDF-файл — используй его как источник материала.");
  }
  if (inlineTexts.length) {
    pieces.push(...inlineTexts);
  }
  if (!pieces.length) {
    throw new Error("Нужно указать тему или прикрепить файл/фото");
  }

  pieces.push(
    "Подготовь урок по правилам и схеме из системной инструкции. Помни: он должен реально " +
      "занимать 30-45 минут изучения, а не быть кратким конспектом — раскрывай тему подробно.",
  );

  return callForJSON({
    system: LESSON_SYSTEM,
    parts: [{ text: pieces.join("\n\n") }, ...fileParts],
    maxOutputTokens: 24000,
    schema: LESSON_SCHEMA,
  });
}

const QUIZ_SYSTEM = `Ты составляешь проверочный тест по уже готовому подробному уроку (он придёт в виде JSON).
Тест должен реально проверять понимание, а не просто узнавание слов, и должен охватывать
материал из РАЗНЫХ разделов урока (не концентрируйся только на первых разделах).

ВАЖНОЕ ТРЕБОВАНИЕ К ОБЪЁМУ: тест должен занимать у ученика примерно 15 минут вдумчивой работы —
это значит вопросы не должны быть тривиальными ("угадай с одного взгляда"), но и не должны
требовать чрезмерно долгих вычислений. Часть вопросов с вариантами должна требовать применить
идею к новому примеру или посчитать, а не просто вспомнить определение.

Сделай:
- ровно 7 вопросов с вариантами ответа (mcq): по одному правильному варианту из 4, с разумными
  правдоподобными неверными вариантами (не абсурдными);
- ровно 3 открытых вопроса (open), на которые нужно ответить своими словами и по существу
  (например, "объясни, почему...", "приведи свой пример...", "реши и объясни ход решения...");
  для каждого укажи keyPoints — 2-4 пункта, которые обязательно должны быть в хорошем ответе
  (это НЕ увидит ученик, это только для проверки).

Отвечай строго по заданной JSON-схеме, без пояснений вне JSON.`;

const QUIZ_SCHEMA = {
  type: "OBJECT",
  properties: {
    mcq: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          question: { type: "STRING" },
          options: { type: "ARRAY", items: { type: "STRING" } },
          correctIndex: { type: "INTEGER" },
          explanation: { type: "STRING" },
        },
        required: ["question", "options", "correctIndex", "explanation"],
      },
    },
    open: {
      type: "ARRAY",
      items: {
        type: "OBJECT",
        properties: {
          question: { type: "STRING" },
          keyPoints: { type: "ARRAY", items: { type: "STRING" } },
        },
        required: ["question", "keyPoints"],
      },
    },
  },
  required: ["mcq", "open"],
};

export async function generateQuiz({ lesson }) {
  return callForJSON({
    system: QUIZ_SYSTEM,
    parts: [
      {
        text: `Вот урок в формате JSON:\n${JSON.stringify(lesson)}\n\nСоставь тест по правилам из системной инструкции.`,
      },
    ],
    maxOutputTokens: 8000,
    schema: QUIZ_SCHEMA,
  });
}

const GRADE_SYSTEM = `Ты проверяешь открытые ответы ученика на вопросы по уроку.
Для каждого вопроса тебе дан сам вопрос, ключевые пункты правильного ответа (keyPoints) и ответ ученика.
Оцени по существу (не придирайся к формулировкам), учитывай, что ответ может быть кратким, но верным по сути.

Отвечай строго по заданной JSON-схеме (массив в том же порядке, что и вопросы), без пояснений вне JSON.`;

const GRADE_SCHEMA = {
  type: "ARRAY",
  items: {
    type: "OBJECT",
    properties: {
      correct: { type: "BOOLEAN" },
      score: { type: "NUMBER", description: "число от 0 до 1" },
      feedback: { type: "STRING", description: "короткая доброжелательная обратная связь" },
    },
    required: ["correct", "score", "feedback"],
  },
};

export async function gradeOpenAnswers({ lesson, open, answers }) {
  const items = open.map((q, i) => ({
    question: q.question,
    keyPoints: q.keyPoints,
    studentAnswer: (answers[i] || "").trim() || "(пусто)",
  }));

  return callForJSON({
    system: GRADE_SYSTEM,
    parts: [
      {
        text: `Контекст урока (тема): "${lesson.title}"\n\nВопросы и ответы ученика:\n${JSON.stringify(items, null, 2)}`,
      },
    ],
    maxOutputTokens: 4000,
    schema: GRADE_SCHEMA,
  });
}

const REEXPLAIN_SYSTEM = `Ученик прошёл тест по уроку и ошибся в некоторых местах.
Тебе дан исходный урок (JSON) и список слабых мест (конкретные вопросы/темы, где были ошибки).
Напиши короткое, тёплое и по делу дополнительное объяснение именно этих слабых мест —
другими словами, с другим примером, чем в основном уроке, чтобы действительно помочь понять.

Отвечай строго по заданной JSON-схеме, без пояснений вне JSON. Поле content — 150-350 слов.`;

const REEXPLAIN_SCHEMA = {
  type: "OBJECT",
  properties: {
    title: { type: "STRING" },
    content: { type: "STRING" },
  },
  required: ["title", "content"],
};

export async function reexplain({ lesson, weakPoints }) {
  return callForJSON({
    system: REEXPLAIN_SYSTEM,
    parts: [
      {
        text: `Урок:\n${JSON.stringify(lesson)}\n\nСлабые места ученика:\n${weakPoints.map((w) => `- ${w}`).join("\n")}`,
      },
    ],
    maxOutputTokens: 2000,
    schema: REEXPLAIN_SCHEMA,
  });
}
