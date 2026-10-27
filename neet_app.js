// ============================================================================
// NEET Preparation Portal - Application Logic
// ============================================================================
"use strict";

// --- State ---
const state = {
  currentSection: "home",
  currentSubject: null,
  currentTopic: null,
  courseFilter: "all",
  test: null,            // active test object
  testIndex: 0,          // current question index in test
  answers: {},           // qId -> option index
  flagged: new Set(),    // set of qIds flagged
  startTime: null,
  timerInterval: null,
  timeLeft: 0,
  results: JSON.parse(localStorage.getItem("neet_results") || "[]"),
};

// --- Navigation ---
function navigate(section) {
  // stop any running test timer when leaving
  stopTimer();
  state.currentSection = section;
  updateNavLinks();
  document.querySelectorAll(".section").forEach((s) => s.classList.remove("active"));
  document.getElementById(section).classList.add("active");
  window.scrollTo(0, 0);

  switch (section) {
    case "home":
      renderHome();
      break;
    case "course":
      renderCourse();
      break;
    case "mock":
      renderMockTests();
      break;
    case "result":
      renderResults();
      break;
  }
}

function updateNavLinks() {
  document.querySelectorAll(".nav-link").forEach((a) => {
    a.classList.toggle("active", a.getAttribute("onclick").includes(state.currentSection));
  });
}

function stat(id, value) {
  const el = document.getElementById(id);
  if (el) el.textContent = value;
}

// --- Home ---
function renderHome() {
  const subjGrid = document.getElementById("subject-grid");
  subjGrid.innerHTML = "";
  const totals = { physics: 0, chemistry: 0, biology: 0 };
  for (const subj in NEET_DATA.questionBank) {
    totals[subj] = NEET_DATA.questionBank[subj].length;
  }
  for (const key in NEET_DATA.subjects) {
    const s = NEET_DATA.subjects[key];
    const mat = NEET_DATA.courseMaterial[key] || [];
    const topicCount = mat.reduce((sum, m) => sum + m.topics.length, 0);
    const card = document.createElement("div");
    card.className = "subject-card";
    card.innerHTML = `
      <div class="subject-icon">${s.icon}</div>
      <div class="subject-name">${s.name}</div>
      <div class="subject-desc">${totals[key]} questions &bull; ${topicCount} topics</div>
    `;
    card.onclick = () => openSubject(key);
    subjGrid.appendChild(card);
  }
  stat("stat-subjects", Object.keys(NEET_DATA.subjects).length);
  const topicTotal = Object.values(NEET_DATA.courseMaterial).reduce(
    (sum, mats) => sum + mats.reduce((t, m) => t + m.topics.length, 0), 0);
  stat("stat-topics", topicTotal);
  const qTotal = Object.values(NEET_DATA.questionBank).reduce((sum, arr) => sum + arr.length, 0);
  stat("stat-questions", qTotal + "+");
  stat("stat-tests", "10");
}

function openSubject(key) {
  state.currentSubject = key;
  const s = NEET_DATA.subjects[key];
  const content = document.getElementById("course-content");
  const bread = document.getElementById("course-breadcrumb");
  bread.textContent = `Home &gt; ${s.name}`;
  content.innerHTML = `
    <h2 style="color:var(--primary);margin-top:0">${s.name} - Course Material</h2>
    <p>${NEET_DATA.courseMaterial[key][0].description}</p>
    <div class="topics" id="topic-list"></div>
  `;
  const topicList = document.getElementById("topic-list");
  topicList.innerHTML = "";
  NEET_DATA.courseMaterial[key].forEach((unit) => {
    unit.topics.forEach((topic) => {
      const item = document.createElement("div");
      item.className = "topic-item";
      item.innerHTML = `<span>${topic.name}</span><span class="topic-count">${topic.questions} Q</span>`;
      item.onclick = () => showTopic(key, unit.id, topic.name);
      topicList.appendChild(item);
    });
  });
  navigate("course");
}

function showTopic(subjectKey, unitId, topicName) {
  const unit = NEET_DATA.courseMaterial[subjectKey].find((u) => u.id === unitId);
  const content = document.getElementById("course-content");
  const bread = document.getElementById("course-breadcrumb");
  bread.textContent = `Home &gt; ${NEET_DATA.subjects[subjectKey].name} &gt; ${topicName}`;
  content.innerHTML = `
    <h2>${topicName}</h2>
    <div style="max-width:700px">${unit.content}</div>
    <div style="margin-top:2rem">
      <button class="btn btn-primary" onclick="startTopicTest('${subjectKey}','${topicName}')">Practice: ${topicName}</button>
      <button class="btn btn-outline" onclick="openSubject('${subjectKey}')">Back to Topics</button>
    </div>
  `;
  navigate("course");
}

function filterCourse(filter) {
  state.courseFilter = filter;
  renderCourse();
}

function renderCourse() {
  const content = document.getElementById("course-content");
  const bread = document.getElementById("course-breadcrumb");
  bread.textContent = "Home &gt; Course Material";
  let html = `<h2 style="margin-top:0">Course Material</h2>
<p>Select a subject and topic to read detailed study notes. Each topic includes practice questions aligned with NEET pattern.</p>`;
  const order = ["physics", "chemistry", "biology"];
  order.forEach((key) => {
    const s = NEET_DATA.subjects[key];
    const mats = NEET_DATA.courseMaterial[key];
    if (!mats) return;
    html += `<div class="card" style="margin-top:1.5rem">
      <div class="card-header"><div class="card-title" style="color:${s.color}">${s.icon} ${s.name}</div></div>
      <div class="topics">`;
    mats.forEach((unit) => {
      unit.topics.forEach((topic) => {
        if (state.courseFilter !== "all" && state.courseFilter !== key) return;
        html += `<div class="topic-item">
          <span>${topic.name}</span>
          <span class="topic-count">${topic.questions} Q</span>
        </div>`;
      });
    });
    html += `</div></div>`;
  });
  content.innerHTML = html;
  navigate("course");
}

// --- Topic practice test ---
function startTopicTest(subjectKey, topicName) {
  const qs = NEET_DATA.questionBank[subjectKey].filter((q) => q.topic === topicName);
  if (qs.length === 0) {
    alert("No practice questions available for this topic yet.");
    return;
  }
  launchTest({
    id: "topic_" + subjectKey + "_" + Date.now(),
    title: `${NEET_DATA.subjects[subjectKey].name} - ${topicName}`,
    subject: subjectKey,
    topic: topicName,
    questions: qs.slice(),
    timeLimit: qs.length * 45, // 45 sec per question
    type: "topic"
  });
}

// --- Mock Tests ---
const MOCK_TESTS = [
  { id: "full1", title: "NEET Full Mock 1", subject: "all", questions: 180, time: 180 * 60, desc: "Full-length NEET mock (Physics+Chemistry+Biology), 3 hours" },
  { id: "p1", title: "Physics Mock Test", subject: "physics", questions: 50, time: 50 * 45, desc: "Physics - 50 questions" },
  { id: "c1", title: "Chemistry Mock Test", subject: "chemistry", questions: 50, time: 50 * 45, desc: "Chemistry - 50 questions" },
  { id: "b1", title: "Biology Mock Test", subject: "biology", questions: 100, time: 100 * 45, desc: "Biology - 100 questions (Botany+Zoology)" },
  { id: "pyq1", title: "Previous Year Style Set", subject: "all", questions: 60, time: 60 * 45, desc: "PYQ-pattern mixed questions" },
  { id: "rev1", title: "Revision Test", subject: "all", questions: 100, time: 100 * 45, desc: "Rapid revision across all subjects" },
  { id: "a1", title: "Assertion-Reason Set", subject: "all", questions: 30, time: 30 * 60, desc: "Assertion & Reasoning based" },
  { id: "m1", title: "Medical Entrance Focus", subject: "biology", questions: 80, time: 80 * 45, desc: "Biology-heavy medical entrance focus" },
  { id: "pc1", title: "Physics + Chemistry", subject: "all", questions: 100, time: 100 * 54, desc: "PC combined sectional test" },
  { id: "fl2", title: "NEET Full Mock 2", subject: "all", questions: 180, time: 180 * 60, desc: "Second full-length NEET mock, 3 hours" }
];

function renderMockTests() {
  const container = document.getElementById("mock-test-list");
  container.innerHTML = "";
  MOCK_TESTS.forEach((t) => {
    const subjLabel = t.subject === "all" ? "All Subjects" : NEET_DATA.subjects[t.subject].name;
    const mins = Math.ceil(t.time / 60);
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="card-header">
        <div class="card-title">${t.title}</div>
        <span class="topic-count" style="background:var(--primary);color:#fff">${mins} min</span>
      </div>
      <div style="color:#6b7b8c;font-size:0.9rem;margin-bottom:0.75rem">${t.desc}</div>
      <div style="display:flex;gap:0.5rem">
        <button class="btn btn-primary btn-sm" onclick="startMock('${t.id}')">Start Test</button>
      </div>
    `;
    container.appendChild(card);
  });
  navigate("mock");
}

function startMock(mockId) {
  const t = MOCK_TESTS.find((m) => m.id === mockId);
  if (!t) return;
  let questions = [];
  if (t.subject === "all") {
    for (const subj in NEET_DATA.questionBank) {
      const pool = NEET_DATA.questionBank[subj];
      const n = Math.floor(t.questions / 3);
      questions.push(...shuffle([...pool]).slice(0, n));
    }
  } else {
    const pool = NEET_DATA.questionBank[t.subject];
    questions = shuffle([...pool]).slice(0, Math.min(t.questions, pool.length));
  }
  questions = shuffle(questions).slice(0, t.questions);
  launchTest({
    id: t.id,
    title: t.title,
    subject: t.subject,
    topic: "Full Mock",
    questions,
    timeLimit: t.time,
    type: "mock",
    mockId: t.id
  });
}

function shuffle(arr) {
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

// --- Launch Test ---
function launchTest(test) {
  state.test = test;
  state.testIndex = 0;
  state.answers = {};
  state.flagged = new Set();
  state.timeLeft = test.timeLimit;
  state.startTime = Date.now();
  if (state.timerInterval) clearInterval(state.timerInterval);
  state.timerInterval = setInterval(tickTimer, 1000);
  renderTestPlayer();
  navigate("mock");
}

function tickTimer() {
  state.timeLeft--;
  if (state.timeLeft <= 0) {
    state.timeLeft = 0;
    submitTest();
    return;
  }
  const el = document.getElementById("timer-display");
  if (el) el.textContent = formatTime(state.timeLeft);
}

function stopTimer() {
  if (state.timerInterval) {
    clearInterval(state.timerInterval);
    state.timerInterval = null;
  }
}

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = sec % 60;
  return `${m.toString().padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
}

// --- Test Player ---
function renderTestPlayer() {
  const container = document.getElementById("test-player");
  const test = state.test;
  if (!test) return;
  const q = test.questions[state.testIndex];
  const answered = state.answers[q.id] !== undefined;
  const isFlagged = state.flagged.has(q.id);

  // question nav buttons
  let navHtml = "";
  test.questions.forEach((_, i) => {
    const ans = state.answers[test.questions[i].id] !== undefined;
    const fl = state.flagged.has(test.questions[i].id);
    const cur = i === state.testIndex;
    let cls = "q-nav-btn ";
    if (cur) cls += "current ";
    else if (ans && fl) cls += "answered flagged ";
    else if (ans) cls += "answered ";
    else if (fl) cls += "flagged ";
    else cls += "notvisited ";
    navHtml += `<button class="${cls}" onclick="goToQuestion(${i})">${i + 1}</button>`;
  });

  container.style.display = "block";
  container.innerHTML = `
    <div class="test-header">
      <div>
        <div style="font-size:0.9rem;color:#6b7b8c">${test.title}</div>
        <div style="font-weight:700;color:var(--dark)">${test.subject === "all" ? "All Subjects" : NEET_DATA.subjects[test.subject].name}</div>
      </div>
      <div class="timer-box" id="timer-display">${formatTime(state.timeLeft)}</div>
    </div>
    <div class="question-card">
      <div class="question-meta">
        <span>Question ${state.testIndex + 1} of ${test.questions.length}</span>
        <span>Difficulty: <strong>${q.difficulty}</strong></span>
      </div>
      <div class="question-text">${q.question}</div>
      <div class="options">
        ${q.options.map((opt, i) => `
          <label class="option-label ${answered && state.answers[q.id] === i ? "selected" : ""} ${isFlagged ? "flagged" : ""}">
            <input type="radio" name="opt" value="${i}" ${answered && state.answers[q.id] === i ? "checked" : ""} onchange="selectOption(${i})">
            ${String.fromCharCode(65 + i)}. ${opt}
          </label>
        `).join("")}
      </div>
      <div style="margin-top:1rem;display:flex;gap:0.5rem">
        <button class="btn btn-outline btn-sm" onclick="toggleFlag()">${isFlagged ? "Unflag" : "Flag"} Question</button>
        <button class="btn btn-outline btn-sm" onclick="clearAnswer()">Clear Answer</button>
      </div>
    </div>
    <div class="question-grid-nav">${navHtml}</div>
    <div class="test-nav">
      <div>
        <button class="btn btn-outline" onclick="goToQuestion(state.testIndex - 1)" ${state.testIndex === 0 ? "disabled" : ""}>Previous</button>
        <button class="btn btn-outline" onclick="goToQuestion(state.testIndex + 1)" ${state.testIndex === test.questions.length - 1 ? "disabled" : ""}>Next</button>
      </div>
      <button class="btn btn-danger btn-sm" onclick="submitTest()">Finish Test</button>
    </div>
  `;
  window.scrollTo(0, 0);
}

function selectOption(idx) {
  const q = state.test.questions[state.testIndex];
  state.answers[q.id] = idx;
  state.flagged.delete(q.id);
  renderTestPlayer();
}

function clearAnswer() {
  const q = state.test.questions[state.testIndex];
  delete state.answers[q.id];
  renderTestPlayer();
}

function toggleFlag() {
  const q = state.test.questions[state.testIndex];
  if (state.flagged.has(q.id)) state.flagged.delete(q.id);
  else state.flagged.add(q.id);
  renderTestPlayer();
}

function goToQuestion(i) {
  const test = state.test;
  if (i < 0) i = 0;
  if (i >= test.questions.length) i = test.questions.length - 1;
  state.testIndex = i;
  renderTestPlayer();
}

// --- Submit Test ---
function submitTest() {
  stopTimer();
  const test = state.test;
  let correct = 0, wrong = 0, unattempted = 0;
  const perSubject = {};
  test.questions.forEach((q) => {
    if (!perSubject[q.subject]) perSubject[q.subject] = { total: 0, correct: 0, wrong: 0, unattempted: 0 };
    perSubject[q.subject].total++;
    const ans = state.answers[q.id];
    if (ans === undefined) {
      unattempted++;
      perSubject[q.subject].unattempted++;
    } else if (ans === q.correct) {
      correct++;
      perSubject[q.subject].correct++;
    } else {
      wrong++;
      perSubject[q.subject].wrong++;
    }
  });
  const total = test.questions.length;
  const score = correct * 4 - wrong * 1; // NEET: +4 correct, -1 wrong
  const percentage = ((score / (total * 4)) * 100).toFixed(1);
  const percentile = Math.min(99, Math.max(1, Math.floor((correct / total) * 100)));

  const result = {
    id: Date.now(),
    testId: test.id,
    title: test.title,
    subject: test.subject,
    type: test.type,
    date: new Date().toISOString(),
    total, correct, wrong, unattempted, score, percentage, percentile,
    perSubject,
    timeSpent: Math.max(0, test.timeLimit - state.timeLeft)
  };
  state.results.push(result);
  localStorage.setItem("neet_results", JSON.stringify(state.results));

  renderResultDetail(result);
  navigate("result");
}

// --- Results ---
function renderResults() {
  const container = document.getElementById("result-content");
  if (state.results.length === 0) {
    container.innerHTML = `
      <div class="card">
        <div style="text-align:center;padding:3rem;color:#6b7b8c">
          <div style="font-size:2.5rem;margin-bottom:1rem">📊</div>
          <h3>No tests taken yet</h3>
          <p>Start a mock test or topic practice to see your results and analysis here.</p>
          <button class="btn btn-primary" onclick="navigate('mock')">Start a Mock Test</button>
        </div>
      </div>`;
    navigate("result");
    return;
  }
  const latest = state.results[state.results.length - 1];
  let rows = "";
  state.results.slice().reverse().forEach((r) => {
    const subjName = r.subject === "all" ? "All Subjects" : NEET_DATA.subjects[r.subject].name;
    rows += `<tr>
      <td>${new Date(r.date).toLocaleDateString()}</td>
      <td>${r.title}</td>
      <td>${subjName}</td>
      <td>${r.score}</td>
      <td>${r.percentage}%</td>
      <td>${r.correct}/${r.total}</td>
      <td>${r.percentile} percentile</td>
    </tr>`;
  });
  container.innerHTML = `
    <div class="result-summary">
      <div class="result-card big">
        <div class="result-value">${latest.percentage}%</div>
        <div class="result-label">Latest Score</div>
        <div class="rank-badge">${latest.percentile} Percentile</div>
      </div>
      <div class="result-card">
        <div class="result-value">${latest.correct}</div>
        <div class="result-label">Correct</div>
      </div>
      <div class="result-card">
        <div class="result-value" style="color:var(--danger)">${latest.wrong}</div>
        <div class="result-label">Wrong</div>
      </div>
      <div class="result-card">
        <div class="result-value">${latest.unattempted}</div>
        <div class="result-label">Unattempted</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Attempt History</div></div>
      <table style="width:100%;border-collapse:collapse;margin-top:1rem">
        <thead><tr style="border-bottom:2px solid var(--border)">
          <th style="text-align:left;padding:0.75rem">Date</th>
          <th style="text-align:left;padding:0.75rem">Test</th>
          <th style="text-align:left;padding:0.75rem">Subject</th>
          <th style="text-align:left;padding:0.75rem">Score</th>
          <th style="text-align:left;padding:0.75rem">%</th>
          <th style="text-align:left;padding:0.75rem">C/W/U</th>
          <th style="text-align:left;padding:0.75rem">Percentile</th>
        </tr></thead>
        <tbody>${rows}</tbody>
      </table>
    </div>
  `;
  navigate("result");
}

function renderResultDetail(result) {
  const container = document.getElementById("result-content");
  const subjName = result.subject === "all" ? "All Subjects" : NEET_DATA.subjects[result.subject].name;
  let subjHtml = "";
  for (const key in result.perSubject) {
    const ps = result.perSubject[key];
    const name = key === "all" ? "All Subjects" : (NEET_DATA.subjects[key] ? NEET_DATA.subjects[key].name : key);
    const pct = ps.total === 0 ? 0 : ((ps.correct * 4 - ps.wrong) / (ps.total * 4) * 100).toFixed(1);
    subjHtml += `<div class="subject-stat">
      <div class="subject-stat-name">${name}</div>
      <div class="progress-bar"><div class="progress-fill" style="width:${pct}%"></div></div>
      <div class="subject-percent">${pct}% &bull; ${ps.correct} correct &bull; ${ps.wrong} wrong</div>
    </div>`;
  }
  // improvement areas: subjects below 60%
  let focusHtml = "";
  let hasFocus = false;
  for (const key in result.perSubject) {
    const ps = result.perSubject[key];
    const name = key === "all" ? "All Subjects" : (NEET_DATA.subjects[key] ? NEET_DATA.subjects[key].name : key);
    const pct = ps.total === 0 ? 0 : (ps.correct / ps.total * 100);
    if (pct < 60 && ps.total > 0) {
      hasFocus = true;
      focusHtml += `<li><strong>${name}:</strong> ${pct.toFixed(0)}% accuracy - needs focus</li>`;
    }
  }
  if (!hasFocus) focusHtml = "<li>Great performance across all subjects! Keep it up.</li>";

  container.innerHTML = `
    <div class="result-summary">
      <div class="result-card big">
        <div class="result-value">${result.score}</div>
        <div class="result-label">Total Score (out of ${result.total * 4})</div>
      </div>
      <div class="result-card">
        <div class="result-value">${result.percentage}%</div>
        <div class="result-label">Percentage</div>
      </div>
      <div class="result-card">
        <div class="result-value">${result.correct}</div>
        <div class="result-label">Correct (+4 each)</div>
      </div>
      <div class="result-card">
        <div class="result-value" style="color:var(--danger)">${result.wrong}</div>
        <div class="result-label">Wrong (-1 each)</div>
      </div>
      <div class="result-card">
        <div class="result-value">${result.unattempted}</div>
        <div class="result-label">Unattempted</div>
      </div>
    </div>
    <div class="card">
      <div class="card-header"><div class="card-title">Subject-wise Breakdown</div></div>
      <div class="subject-stats">${subjHtml}</div>
    </div>
    <div class="card improvement">
      <h3>Area of Improvement / Focus On</h3>
      <ul style="margin-left:1.25rem">${focusHtml}</ul>
      <div style="margin-top:1rem">
        <button class="btn btn-outline btn-sm" onclick="reviewWrong()">Review Wrong Answers</button>
        <button class="btn btn-primary btn-sm" onclick="renderResults()">Back to Results</button>
      </div>
    </div>
  `;
  navigate("result");
  // animate progress bars
  setTimeout(() => {
    document.querySelectorAll(".progress-fill").forEach((el) => {
      const w = el.style.width;
      el.style.width = "0%";
      setTimeout(() => { el.style.width = w; }, 50);
    });
  }, 100);
}

function reviewWrong() {
  const test = state.test;
  const wrongQs = test.questions.filter((q) => {
    const ans = state.answers[q.id];
    return ans !== undefined && ans !== q.correct;
  });
  const container = document.getElementById("result-content");
  if (wrongQs.length === 0) {
    container.innerHTML += `<div class="card"><div style="text-align:center;padding:2rem">No wrong answers to review!</div></div>`;
    return;
  }
  let html = `<h3 style="margin-top:1rem">Review - Wrong Answers</h3>`;
  wrongQs.forEach((q) => {
    const ansIdx = state.answers[q.id];
    html += `<div class="review-question">
      <div class="review-q-text">${q.question}</div>
      <div>Your answer: <span class="wrong">${String.fromCharCode(65 + ansIdx)}. ${q.options[ansIdx]}</span></div>
      <div>Correct answer: <span class="correct">${String.fromCharCode(65 + q.correct)}. ${q.options[q.correct]}</span></div>
      <div style="margin-top:0.5rem;font-size:0.9rem;color:#6b7b8c">${q.explanation}</div>
    </div>`;
  });
  container.innerHTML = html;
  navigate("result");
}

// --- Initialize ---
renderHome();



