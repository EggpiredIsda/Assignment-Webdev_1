const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const tutorials = {
  "web-html-basics": {
    kicker: "Web • HTML",
    title: "HTML Basics",
    bodyHtml: `
      <p><strong>What you’ll learn:</strong> build clean page structure using semantic HTML.</p>
      <p><strong>Prereqs:</strong> none</p>
      <h4>Core tags</h4>
      <ul>
        <li><strong>Structure:</strong> <span class="mono">&lt;header&gt;</span>, <span class="mono">&lt;main&gt;</span>, <span class="mono">&lt;footer&gt;</span></li>
        <li><strong>Text:</strong> <span class="mono">&lt;h1&gt;...&lt;h6&gt;</span>, <span class="mono">&lt;p&gt;</span></li>
        <li><strong>Links:</strong> <span class="mono">&lt;a href="..."&gt;</span></li>
        <li><strong>Lists:</strong> <span class="mono">&lt;ul&gt;</span>, <span class="mono">&lt;ol&gt;</span>, <span class="mono">&lt;li&gt;</span></li>
      </ul>
      <h4>Starter page</h4>
      <pre class="code">&lt;main&gt;
  &lt;h1&gt;My Tutorial Site&lt;/h1&gt;
  &lt;p&gt;Today we learn semantic HTML.&lt;/p&gt;
  &lt;ul&gt;
    &lt;li&gt;&lt;a href="#web"&gt;Web Tutorials&lt;/a&gt;&lt;/li&gt;
    &lt;li&gt;&lt;a href="#c"&gt;C Tutorials&lt;/a&gt;&lt;/li&gt;
  &lt;/ul&gt;
&lt;/main&gt;</pre>
      <h4>Try it</h4>
      <ul>
        <li>Add a <span class="mono">&lt;nav&gt;</span> with 3 links.</li>
        <li>Add an image with <span class="mono">&lt;img&gt;</span> + <span class="mono">alt</span> text.</li>
        <li>Create a simple contact form (name + message).</li>
      </ul>
      <p class="muted">Next lesson: CSS Layout (Flexbox & Grid).</p>
    `,
  },

  "web-css-layout": {
    kicker: "Web • CSS",
    title: "Layout: Flexbox & Grid",
    bodyHtml: `
      <p><strong>What you’ll learn:</strong> create responsive layouts using Flexbox and Grid.</p>
      <p class="muted">Tip: Flexbox = 1D (row/column). Grid = 2D (rows + columns).</p>
      <h4>Patterns you’ll use a lot</h4>
      <ul>
        <li><strong>Two columns:</strong> sidebar + content</li>
        <li><strong>Cards:</strong> responsive grid of tutorials</li>
      </ul>
      <h4>Starter CSS</h4>
      <pre class="code">/* Flex row */
.row { display: flex; gap: 12px; align-items: center; }

/* Responsive grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 12px;
}</pre>
      <h4>Try it</h4>
      <ul>
        <li>Make a 2-column layout that becomes 1 column under 720px.</li>
        <li>Create 6 “cards” and let the grid wrap automatically.</li>
      </ul>
      <p class="muted">Next lesson: JavaScript DOM + Events.</p>
    `,
  },

  "web-js-dom": {
    kicker: "Web • JavaScript",
    title: "DOM + Events",
    bodyHtml: `
      <p><strong>What you’ll learn:</strong> make your UI interactive with the DOM and event listeners.</p>
      <h4>Example: button click updates the page</h4>
      <pre class="code">&lt;button id="btn"&gt;Click me&lt;/button&gt;
&lt;p id="msg"&gt;Waiting...&lt;/p&gt;

&lt;script&gt;
  const btn = document.getElementById("btn");
  const msg = document.getElementById("msg");

  btn.addEventListener("click", () =&gt; {
    msg.textContent = "Clicked!";
  });
&lt;/script&gt;</pre>
      <h4>Try it</h4>
      <ul>
        <li>Make a button that toggles dark/light mode (add/remove a class).</li>
        <li>Build a simple “to-do list” with add + delete.</li>
      </ul>
      <p class="muted">Next: forms + fetch() + localStorage.</p>
    `,
  },

  "c-hello": {
    kicker: "C • Fundamentals",
    title: "Hello, C",
    bodyHtml: `
      <p><strong>What you’ll learn:</strong> compile and run a C program, then edit and re-run.</p>
      <p><strong>Prereqs:</strong> install gcc or clang</p>
      <h4>Program</h4>
      <pre class="code">#include &lt;stdio.h&gt;

int main(void) {
  printf("Hello, C!\\n");
  return 0;
}</pre>
      <h4>Compile (examples)</h4>
      <pre class="code"># gcc
gcc main.c -o main

# clang
clang main.c -o main</pre>
      <h4>Try it</h4>
      <ul>
        <li>Print your name and age.</li>
        <li>Add a second printf on a new line.</li>
      </ul>
      <p class="muted">Next lesson: variables, conditions, loops.</p>
    `,
  },

  "c-functions": {
    kicker: "C • Fundamentals",
    title: "Functions",
    bodyHtml: `
      <p><strong>What you’ll learn:</strong> split code into reusable functions.</p>
      <pre class="code">#include &lt;stdio.h&gt;

int add(int a, int b) {
  return a + b;
}

int main(void) {
  printf("%d\\n", add(2, 3));
  return 0;
}</pre>
      <h4>Try it</h4>
      <ul>
        <li>Write a <span class="mono">max(a, b)</span> function.</li>
        <li>Write a function that prints a line of 30 dashes.</li>
      </ul>
      <p class="muted">Next: prototypes + header files + separate compilation.</p>
    `,
  },

  "c-pointers": {
    kicker: "C • Memory",
    title: "Pointers (Intro)",
    bodyHtml: `
      <p><strong>What you’ll learn:</strong> addresses (&amp;) and dereferencing (*)—the basics of memory.</p>
      <p class="muted">Rule of thumb: a pointer stores an address.</p>
      <pre class="code">#include &lt;stdio.h&gt;

int main(void) {
  int x = 42;
  int *p = &x;

  printf("x=%d\\n", x);
  printf("&x=%p\\n", (void*)&x);
  printf("p=%p\\n", (void*)p);
  printf("*p=%d\\n", *p);
  return 0;
}</pre>
      <h4>Try it</h4>
      <ul>
        <li>Change <span class="mono">x</span> using <span class="mono">*p = 99;</span> then print again.</li>
        <li>Create two ints and two pointers, and print all addresses.</li>
      </ul>
      <p class="muted">Next: arrays + pointer arithmetic + malloc/free.</p>
    `,
  },
};

function setActiveNav(target) {
  $$(".nav__btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.target === target);
  });
}

function showPage(target) {
  setActiveNav(target);
  $$("[data-page]").forEach((panel) => {
    panel.classList.toggle("is-hidden", panel.dataset.page !== target);
  });
  const main = $("#main");
  if (main) main.focus();
}

function openTutorial(id) {
  const t = tutorials[id];
  if (!t) return;

  $("#modalKicker").textContent = t.kicker;
  $("#modalTitle").textContent = t.title;
  $("#modalBody").innerHTML = t.bodyHtml;
  $("#tutorialModal").showModal();
}

function filterTutorialCards(query) {
  const q = query.trim().toLowerCase();
  const cards = $$("[data-open-tutorial]");

  cards.forEach((card) => {
    if (!q) {
      card.style.display = "";
      return;
    }

    const hay = [
      card.textContent || "",
      card.getAttribute("data-tags") || "",
      card.getAttribute("data-open-tutorial") || "",
    ]
      .join(" ")
      .toLowerCase();

    card.style.display = hay.includes(q) ? "" : "none";
  });
}

function initNav() {
  $$(".nav__btn").forEach((btn) => {
    btn.addEventListener("click", () => showPage(btn.dataset.target));
  });
}

function initTutorialCards() {
  $$("[data-open-tutorial]").forEach((card) => {
    card.addEventListener("click", () => openTutorial(card.dataset.openTutorial));
  });
}

function initSearch() {
  const input = $("#searchInput");
  if (!input) return;

  input.addEventListener("input", () => {
    filterTutorialCards(input.value);
  });
}

function initHashRouting() {
  const fromHash = () => {
    const raw = (location.hash || "").replace("#", "").trim();
    if (!raw) return;

    const pages = new Set($$("[data-page]").map((p) => p.dataset.page));
    if (pages.has(raw)) showPage(raw);
  };

  window.addEventListener("hashchange", fromHash);
  fromHash();
}

function pad2(n) {
  return String(n).padStart(2, "0");
}

function formatTime(date, timeZone) {
  const parts = new Intl.DateTimeFormat(undefined, {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
    timeZone,
  }).formatToParts(date);

  const map = Object.fromEntries(parts.map((p) => [p.type, p.value]));
  return `${map.hour}:${map.minute}:${map.second}`;
}

function formatLongDate(date) {
  return new Intl.DateTimeFormat(undefined, {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "2-digit",
  }).format(date);
}

function initClocks() {
  const localEl = $("#clockLocal");
  const utcEl = $("#clockUtc");
  const dateEl = $("#clockDate");
  if (!localEl || !utcEl || !dateEl) return;

  const tick = () => {
    const now = new Date();
    localEl.textContent = formatTime(now, Intl.DateTimeFormat().resolvedOptions().timeZone);
    utcEl.textContent = formatTime(now, "UTC");
    dateEl.textContent = formatLongDate(now);
  };

  tick();
  window.setInterval(tick, 1000);
}

function initCalendar() {
  const titleEl = $("#calTitle");
  const dayEl = $("#calDay");
  const monthEl = $("#calMonth");
  const gridEl = $("#calGrid");
  if (!titleEl || !dayEl || !monthEl || !gridEl) return;

  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth(); // 0-11

  const monthName = new Intl.DateTimeFormat(undefined, { month: "long" }).format(now);
  titleEl.textContent = `${monthName} ${year}`;
  dayEl.textContent = pad2(now.getDate());
  monthEl.textContent = monthName;

  const first = new Date(year, month, 1);
  const firstDow = first.getDay(); // 0=Sun
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const daysInPrev = new Date(year, month, 0).getDate();

  const cells = [];
  // prev month padding
  for (let i = 0; i < firstDow; i++) {
    cells.push({ d: daysInPrev - firstDow + 1 + i, dim: true, today: false });
  }
  // current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ d, dim: false, today: d === now.getDate() });
  }
  // next month padding to complete weeks (42 cells = 6 rows)
  while (cells.length < 42) {
    cells.push({ d: cells.length - (firstDow + daysInMonth) + 1, dim: true, today: false });
  }

  gridEl.innerHTML = "";
  for (const c of cells) {
    const div = document.createElement("div");
    div.className = "cal__cell";
    if (c.dim) div.classList.add("is-dim");
    if (c.today) div.classList.add("is-today");
    div.textContent = String(c.d);
    gridEl.appendChild(div);
  }
}

function initTutorialVideo() {
  const video = $("#tutorialVideo");
  if (!video) return;
  video.muted = true;

  const tryPlay = () => {
    video.play().catch(() => {
      // autoplay might be blocked; do nothing and let user press play
    });
  };

  if (video.readyState >= 2) {
    tryPlay();
  } else {
    video.addEventListener("canplay", tryPlay, { once: true });
  }
}

initNav();
initTutorialCards();
initSearch();
initHashRouting();
initClocks();
initCalendar();
initTutorialVideo();


