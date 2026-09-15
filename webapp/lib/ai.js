import Anthropic from "@anthropic-ai/sdk";

const client = new Anthropic();
const MODEL = process.env.ANTHROPIC_MODEL || "claude-opus-5";

const IMAGE_MEDIA_TYPES = new Set([
  "image/jpeg",
  "image/png",
  "image/gif",
  "image/webp",
]);

/** Pulls the first top-level JSON object/array out of a model response,
 * tolerating ```json fences or stray commentary around it. */
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

async function callForJSON({ system, userContent, maxTokens, effort = "medium", stream = false }) {
  const params = {
    model: MODEL,
    max_tokens: maxTokens,
    system,
    output_config: { effort },
    messages: [{ role: "user", content: userContent }],
  };

  // Long lesson/quiz generations can run past the non-streaming HTTP timeout,
  // so route large-output calls through streaming and just wait for the end.
  const response = stream
    ? await client.messages.stream(params).finalMessage()
    : await client.messages.create(params);

  if (response.stop_reason === "refusal") {
    throw new Error("Модель отказалась выполнить запрос");
  }

  const textBlock = response.content.find((b) => b.type === "text");
  if (!textBlock) throw new Error("Пустой ответ модели");
  return extractJSON(textBlock.text);
}

/** Converts uploaded files (multer in-memory) into Claude content blocks,
 * and returns any plain-text file contents to be inlined into the prompt. */
function filesToBlocks(files = []) {
  const blocks = [];
  const inlineTexts = [];
  for (const file of files) {
    if (IMAGE_MEDIA_TYPES.has(file.mimetype)) {
      blocks.push({
        type: "image",
        source: {
          type: "base64",
          media_type: file.mimetype,
          data: file.buffer.toString("base64"),
        },
      });
    } else if (file.mimetype === "application/pdf") {
      blocks.push({
        type: "document",
        source: {
          type: "base64",
          media_type: "application/pdf",
          data: file.buffer.toString("base64"),
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
  return { blocks, inlineTexts };
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

Отвечай СТРОГО валидным JSON без markdown-разметки, без пояснений до или после, ровно по такой схеме:
{
  "title": "string — название темы урока",
  "level": "начальный | средний | продвинутый",
  "intro": "string — 3-6 предложений: зачем это нужно знать, что зацепит внимание",
  "sections": [
    { "heading": "string", "content": "string, минимум 250-400 слов" }
  ],
  "workedExamples": [
    { "title": "string", "problem": "string — условие", "solution": "string — подробное пошаговое решение" }
  ],
  "practiceProblems": [
    { "problem": "string — условие задачи для самостоятельного решения", "solution": "string — полное решение" }
  ],
  "keyTakeaways": ["string", "..."],
  "commonMistakes": ["string", "..."],
  "checklist": ["string", "..."]
}`;

export async function generateLesson({ topic, files }) {
  const { blocks, inlineTexts } = filesToBlocks(files);

  const pieces = [];
  if (topic && topic.trim()) {
    pieces.push(`Тема/запрос от ученика: "${topic.trim()}"`);
  }
  if (blocks.some((b) => b.type === "image")) {
    pieces.push(
      "К запросу приложены изображения — используй их как основной источник материала (это может быть фото страницы учебника, конспекта, задачи, доски и т.п.).",
    );
  }
  if (blocks.some((b) => b.type === "document")) {
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
    userContent: [{ type: "text", text: pieces.join("\n\n") }, ...blocks],
    maxTokens: 20000,
    effort: "high",
    stream: true,
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

Отвечай СТРОГО валидным JSON без markdown-разметки, ровно по схеме:
{
  "mcq": [
    { "question": "string", "options": ["string","string","string","string"], "correctIndex": 0, "explanation": "string — почему это верный ответ" }
  ],
  "open": [
    { "question": "string", "keyPoints": ["string", "..."] }
  ]
}`;

export async function generateQuiz({ lesson }) {
  return callForJSON({
    system: QUIZ_SYSTEM,
    userContent: [
      {
        type: "text",
        text: `Вот урок в формате JSON:\n${JSON.stringify(lesson)}\n\nСоставь тест по правилам из системной инструкции.`,
      },
    ],
    maxTokens: 6000,
    stream: true,
  });
}

const GRADE_SYSTEM = `Ты проверяешь открытые ответы ученика на вопросы по уроку.
Для каждого вопроса тебе дан сам вопрос, ключевые пункты правильного ответа (keyPoints) и ответ ученика.
Оцени по существу (не придирайся к формулировкам), учитывай, что ответ может быть кратким, но верным по сути.

Отвечай СТРОГО валидным JSON без markdown-разметки, ровно по схеме — массив в том же порядке, что и вопросы:
[
  { "correct": true/false, "score": число от 0 до 1, "feedback": "string — короткая обратная связь ученику, на русском, доброжелательно" }
]`;

export async function gradeOpenAnswers({ lesson, open, answers }) {
  const items = open.map((q, i) => ({
    question: q.question,
    keyPoints: q.keyPoints,
    studentAnswer: (answers[i] || "").trim() || "(пусто)",
  }));

  return callForJSON({
    system: GRADE_SYSTEM,
    userContent: [
      {
        type: "text",
        text: `Контекст урока (тема): "${lesson.title}"\n\nВопросы и ответы ученика:\n${JSON.stringify(items, null, 2)}`,
      },
    ],
    maxTokens: 3000,
  });
}

const REEXPLAIN_SYSTEM = `Ученик прошёл тест по уроку и ошибся в некоторых местах.
Тебе дан исходный урок (JSON) и список слабых мест (конкретные вопросы/темы, где были ошибки).
Напиши короткое, тёплое и по делу дополнительное объяснение именно этих слабых мест —
другими словами, с другим примером, чем в основном уроке, чтобы действительно помочь понять.

Отвечай СТРОГО валидным JSON без markdown-разметки, ровно по схеме:
{ "title": "string — например 'Разбираем то, что вызвало трудности'", "content": "string — 150-350 слов" }`;

export async function reexplain({ lesson, weakPoints }) {
  return callForJSON({
    system: REEXPLAIN_SYSTEM,
    userContent: [
      {
        type: "text",
        text: `Урок:\n${JSON.stringify(lesson)}\n\nСлабые места ученика:\n${weakPoints.map((w) => `- ${w}`).join("\n")}`,
      },
    ],
    maxTokens: 1500,
  });
}
