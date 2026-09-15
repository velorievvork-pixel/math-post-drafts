const views = {
  start: document.getElementById("view-start"),
  loading: document.getElementById("view-loading"),
  lesson: document.getElementById("view-lesson"),
  quiz: document.getElementById("view-quiz"),
  results: document.getElementById("view-results"),
};

function showView(name) {
  Object.values(views).forEach((v) => v.classList.add("hidden"));
  views[name].classList.remove("hidden");
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function showLoading(text) {
  document.getElementById("loading-text").textContent = text;
  showView("loading");
}

// Holds state between steps of the flow.
const state = { lesson: null, quizId: null, mcqCount: 0 };

async function apiFetch(url, options) {
  const res = await fetch(url, options);
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    throw new Error(data.error || `Ошибка запроса (${res.status})`);
  }
  return data;
}

function setError(elId, message) {
  const el = document.getElementById(elId);
  if (!message) {
    el.classList.add("hidden");
    el.textContent = "";
  } else {
    el.textContent = message;
    el.classList.remove("hidden");
  }
}

// ---------- Step 1: create lesson ----------

const filesInput = document.getElementById("files");
filesInput.addEventListener("change", () => {
  const box = document.getElementById("file-preview");
  box.innerHTML = "";
  [...filesInput.files].forEach((f) => {
    const chip = document.createElement("span");
    chip.className = "file-chip";
    chip.textContent = f.name;
    box.appendChild(chip);
  });
});

document.getElementById("lesson-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  setError("start-error", "");

  const topic = document.getElementById("topic").value.trim();
  const files = filesInput.files;
  if (!topic && files.length === 0) {
    setError("start-error", "Укажи тему или прикрепи хотя бы один файл.");
    return;
  }

  const formData = new FormData();
  formData.append("topic", topic);
  [...files].forEach((f) => formData.append("files", f));

  showLoading("Разбираю материал и готовлю подробный урок на 30–45 минут — это может занять минуту-другую…");
  try {
    const data = await apiFetch("/api/lesson", { method: "POST", body: formData });
    state.lesson = data.lesson;
    renderLesson(data.lesson);
    showView("lesson");
  } catch (err) {
    setError("start-error", err.message);
    showView("start");
  }
});

function renderLesson(lesson) {
  document.getElementById("lesson-level").textContent = lesson.level || "";
  document.getElementById("lesson-title").textContent = lesson.title || "Урок";
  document.getElementById("lesson-intro").textContent = lesson.intro || "";

  const sectionsBox = document.getElementById("lesson-sections");
  sectionsBox.innerHTML = "";
  (lesson.sections || []).forEach((s) => {
    const div = document.createElement("div");
    div.className = "section-block";
    const h4 = document.createElement("h4");
    h4.textContent = s.heading;
    const p = document.createElement("p");
    p.textContent = s.content;
    div.appendChild(h4);
    div.appendChild(p);
    sectionsBox.appendChild(div);
  });

  const examplesBox = document.getElementById("lesson-examples");
  examplesBox.innerHTML = "";
  const examples = lesson.workedExamples || [];
  document.getElementById("lesson-examples-title").classList.toggle("hidden", !examples.length);
  examples.forEach((ex) => {
    const div = document.createElement("div");
    div.className = "example-block";
    const h4 = document.createElement("h4");
    h4.textContent = ex.title || "Пример";
    const problem = document.createElement("p");
    problem.className = "problem";
    problem.textContent = ex.problem;
    const solution = document.createElement("p");
    solution.className = "solution";
    solution.textContent = ex.solution;
    div.appendChild(h4);
    div.appendChild(problem);
    div.appendChild(solution);
    examplesBox.appendChild(div);
  });

  fillList("lesson-takeaways", lesson.keyTakeaways);
  document
    .getElementById("lesson-takeaways-box")
    .classList.toggle("hidden", !(lesson.keyTakeaways || []).length);

  fillList("lesson-mistakes", lesson.commonMistakes);
  document
    .getElementById("lesson-mistakes-box")
    .classList.toggle("hidden", !(lesson.commonMistakes || []).length);

  const practiceBox = document.getElementById("lesson-practice");
  practiceBox.innerHTML = "";
  const practice = lesson.practiceProblems || [];
  document.getElementById("lesson-practice-title").classList.toggle("hidden", !practice.length);
  document.getElementById("lesson-practice-hint").classList.toggle("hidden", !practice.length);
  practice.forEach((task, i) => {
    const div = document.createElement("div");
    div.className = "practice-block";
    const problem = document.createElement("p");
    problem.className = "problem";
    problem.textContent = `${i + 1}. ${task.problem}`;
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "reveal-btn";
    btn.textContent = "Показать решение";
    const solution = document.createElement("p");
    solution.className = "solution hidden";
    solution.textContent = task.solution;
    btn.addEventListener("click", () => {
      const willShow = solution.classList.contains("hidden");
      solution.classList.toggle("hidden", !willShow);
      btn.textContent = willShow ? "Скрыть решение" : "Показать решение";
    });
    div.appendChild(problem);
    div.appendChild(btn);
    div.appendChild(solution);
    practiceBox.appendChild(div);
  });
}

function fillList(id, items = []) {
  const ul = document.getElementById(id);
  ul.innerHTML = "";
  items.forEach((t) => {
    const li = document.createElement("li");
    li.textContent = t;
    ul.appendChild(li);
  });
}

// ---------- Step 2: quiz ----------

async function startQuiz() {
  setError("quiz-error", "");
  showLoading("Составляю проверочные вопросы…");
  try {
    const data = await apiFetch("/api/quiz", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lesson: state.lesson }),
    });
    state.quizId = data.quizId;
    state.mcqCount = data.mcq.length;
    renderQuiz(data.mcq, data.open);
    showView("quiz");
  } catch (err) {
    setError("quiz-error", err.message);
    showView("lesson");
  }
}

document.getElementById("btn-start-quiz").addEventListener("click", startQuiz);

function renderQuiz(mcq, open) {
  const mcqBox = document.getElementById("quiz-mcq");
  mcqBox.innerHTML = "";
  mcq.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "q-block";
    const title = document.createElement("div");
    title.className = "q-title";
    title.textContent = `${i + 1}. ${q.question}`;
    div.appendChild(title);

    const optsBox = document.createElement("div");
    optsBox.className = "q-options";
    q.options.forEach((opt, j) => {
      const label = document.createElement("label");
      const input = document.createElement("input");
      input.type = "radio";
      input.name = `mcq-${i}`;
      input.value = String(j);
      input.required = true;
      label.appendChild(input);
      label.appendChild(document.createTextNode(opt));
      optsBox.appendChild(label);
    });
    div.appendChild(optsBox);
    mcqBox.appendChild(div);
  });

  const openBox = document.getElementById("quiz-open");
  openBox.innerHTML = "";
  open.forEach((q, i) => {
    const div = document.createElement("div");
    div.className = "q-block q-open";
    const title = document.createElement("div");
    title.className = "q-title";
    title.textContent = `${mcq.length + i + 1}. ${q.question}`;
    const textarea = document.createElement("textarea");
    textarea.name = `open-${i}`;
    textarea.required = true;
    textarea.placeholder = "Твой ответ своими словами…";
    div.appendChild(title);
    div.appendChild(textarea);
    openBox.appendChild(div);
  });
}

document.getElementById("quiz-form").addEventListener("submit", async (e) => {
  e.preventDefault();
  setError("grade-error", "");

  const mcqAnswers = [];
  for (let i = 0; i < state.mcqCount; i++) {
    const checked = document.querySelector(`input[name="mcq-${i}"]:checked`);
    mcqAnswers.push(checked ? Number(checked.value) : null);
  }
  const openAnswers = [...document.querySelectorAll('#quiz-open textarea')].map((t) => t.value);

  showLoading("Проверяю ответы…");
  try {
    const data = await apiFetch("/api/grade", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ quizId: state.quizId, mcqAnswers, openAnswers }),
    });
    renderResults(data);
    showView("results");
  } catch (err) {
    setError("grade-error", err.message);
    showView("quiz");
  }
});

// ---------- Step 3: results ----------

function renderResults(data) {
  const banner = document.getElementById("result-banner");
  banner.className = "result-banner " + (data.mastered ? "good" : "bad");
  banner.textContent = data.mastered
    ? `Отлично! Результат ${data.percent}% — тема усвоена. 🎉`
    : `Результат ${data.percent}% — есть, что повторить.`;

  const details = document.getElementById("result-details");
  details.innerHTML = "";

  data.mcqResults.forEach((r) => {
    const div = document.createElement("div");
    div.className = "result-item " + (r.correct ? "correct" : "incorrect");
    const q = document.createElement("div");
    q.className = "q";
    q.textContent = (r.correct ? "✅ " : "❌ ") + r.question;
    const fb = document.createElement("div");
    fb.className = "fb";
    fb.textContent = r.explanation;
    div.appendChild(q);
    div.appendChild(fb);
    details.appendChild(div);
  });

  data.openResults.forEach((r) => {
    const div = document.createElement("div");
    div.className = "result-item " + (r.correct ? "correct" : "incorrect");
    const q = document.createElement("div");
    q.className = "q";
    q.textContent = (r.correct ? "✅ " : "⚠️ ") + r.question;
    const fb = document.createElement("div");
    fb.className = "fb";
    fb.textContent = r.feedback;
    div.appendChild(q);
    div.appendChild(fb);
    details.appendChild(div);
  });

  const reexplainBtn = document.getElementById("btn-reexplain");
  const retryBtn = document.getElementById("btn-retry-quiz");
  const reexplainBox = document.getElementById("reexplain-box");
  reexplainBox.classList.add("hidden");
  reexplainBox.innerHTML = "";

  if (!data.mastered && data.weakPoints.length) {
    reexplainBtn.classList.remove("hidden");
    retryBtn.classList.remove("hidden");
    reexplainBtn.onclick = async () => {
      reexplainBtn.disabled = true;
      reexplainBtn.textContent = "Готовлю объяснение…";
      try {
        const result = await apiFetch("/api/reexplain", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ lesson: state.lesson, weakPoints: data.weakPoints }),
        });
        reexplainBox.innerHTML = `<h3>${escapeHtml(result.title)}</h3><p>${escapeHtml(result.content)}</p>`;
        reexplainBox.classList.remove("hidden");
      } catch (err) {
        reexplainBox.innerHTML = `<p class="error">${escapeHtml(err.message)}</p>`;
        reexplainBox.classList.remove("hidden");
      } finally {
        reexplainBtn.disabled = false;
        reexplainBtn.textContent = "Объяснить сложные места ещё раз";
      }
    };
    retryBtn.onclick = startQuiz;
  } else {
    reexplainBtn.classList.add("hidden");
    retryBtn.classList.add("hidden");
  }
}

function escapeHtml(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

// ---------- Reset ----------

function resetAll() {
  state.lesson = null;
  state.quizId = null;
  document.getElementById("lesson-form").reset();
  document.getElementById("file-preview").innerHTML = "";
  setError("start-error", "");
  showView("start");
}

document.getElementById("btn-restart-1").addEventListener("click", resetAll);
document.getElementById("btn-restart-2").addEventListener("click", resetAll);
