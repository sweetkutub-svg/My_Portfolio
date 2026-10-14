/* =========================================================
   SK KUTUBUDDIN — portfolio · script.js
   ---------------------------------------------------------
   EDIT YOUR CONTENT in the DATA block below (PROJECTS, SKILLS ...)
   Project images:  assets/projects/<folder>/cover.webp
                    assets/projects/<folder>/preview.webp
   ========================================================= */
(() => {
'use strict';

const $  = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];
const RM = matchMedia('(prefers-reduced-motion: reduce)').matches;
const clamp = (v, a, b) => Math.min(b, Math.max(a, v));
const smooth = (a, b, x) => { const t = clamp((x - a) / (b - a), 0, 1); return t * t * (3 - 2 * t); };
const ic = (n, c = '') => `<svg class="ic ${c}"><use href="#i-${n}"/></svg>`;
const html = document.documentElement, body = document.body;

/* =========================================================
   DATA
   ========================================================= */
const GITHUB = 'https://github.com/sweetkutub-svg';

const PROJECTS = [
  { folder: 'maison-store', title: 'MAISON Store', type: 'E-Commerce',
    tagline: 'A luxury fashion store, built from scratch.',
    desc: 'A luxury fashion e-commerce website with a product catalog, shopping bag, wishlist and size guide, wrapped in an editorial look.',
    points: ['Full shopping cart in vanilla JavaScript with dynamic UI state', '100% mobile responsive with CSS Flexbox and Grid', 'Cross-browser compatible, deployed on GitHub Pages'],
    tags: ['HTML', 'CSS', 'JavaScript'], live: 'https://sweetkutub-svg.github.io/maison-store_E-Commarce/' },
  { folder: 'mondol-restaurant', title: 'Mondol Restaurant', type: 'Restaurant',
    tagline: 'Fine dining in Kolkata, online.',
    desc: 'An elegant restaurant website with a signature menu showcase, chef profile, photo gallery and guest testimonials.',
    points: ['Interactive table reservation with form validation', 'Menu filtering by category', 'Smooth, polished experience across devices'],
    tags: ['HTML', 'CSS', 'JavaScript'], live: 'https://sweetkutub-svg.github.io/MondolRestaurant/' },
  { folder: 'raos-restaurant', title: "Rao's Restaurant", type: 'Restaurant',
    tagline: 'Premium Indian dining with motion throughout.',
    desc: 'A premium dining site with animated counters, signature dish cards, an interactive full menu, photo gallery and patron reviews.',
    points: ['Advanced CSS animations and JavaScript micro-interactions', 'Complete reservation flow from menu to booking', 'Animated counters and gallery'],
    tags: ['HTML', 'CSS', 'JavaScript'], live: 'https://sweetkutub-svg.github.io/Rao-s-Resturent/' },
  { folder: 'imli-mix', title: 'Imli Mix', type: 'Web App',
    tagline: 'Where it all started: my first web project.',
    desc: 'A fully responsive web application with a clean UI/UX, built with modern frontend best practices.',
    points: ['Fully responsive layout', 'Deployed with GitHub Pages and a CI workflow', 'The project that turned curiosity into a habit'],
    tags: ['HTML', 'CSS', 'JavaScript'], live: 'https://sweetkutub-svg.github.io/Imli_mix/' },
  { folder: 'nova-voice-assistant', title: 'Nova', short: 'Nova AI', type: 'Python / AI',
    tagline: 'A personal voice assistant that remembers.',
    desc: 'A full-stack, multi-modal voice assistant in Python with real-time speech recognition, a Flask web backend and an LLM-driven conversational engine.',
    points: ['Real-time speech recognition for natural voice interaction', 'LLM engine (OpenRouter / DeepSeek) with persistent context memory', 'Runs in the command line and in the browser'],
    tags: ['Python', 'Flask', 'LLM'], live: '', repo: GITHUB }
];

const SKILLS = {
  'Languages':      [['Python', 'Automation and AI'], ['Java', 'OOP'], ['C', 'Logic and DSA'], ['JavaScript', 'Vanilla, ES6+'], ['HTML5', 'Semantic markup'], ['CSS3', 'Flex, Grid, motion']],
  'Frontend':       [['Responsive design', 'Mobile first'], ['Frontend development', 'Clean UI'], ['Flexbox and Grid', 'Layouts'], ['Micro-interactions', 'Motion'], ['GitHub Pages', 'Deployment'], ['UI state', 'Carts and forms']],
  'Backend & Data': [['Flask', 'Python web'], ['MySQL', 'Databases'], ['File I/O', 'Python and C'], ['Automation', 'Scripts'], ['LLM APIs', 'OpenRouter'], ['Speech recognition', 'Voice apps']],
  'CS Core':        [['Data structures', 'Diploma'], ['Algorithms', 'Problem solving'], ['OOP', 'Java, Python'], ['DBMS', 'Diploma'], ['Web technologies', 'Diploma'], ['Problem solving', 'Daily']],
  'Tools':          [['GitHub', 'Version control'], ['Git', 'Commits, branches'], ['VS Code', 'Daily editor'], ['CI workflow', 'GitHub Actions'], ['Linux basics', 'Terminal'], ['Debugging', 'Always']]
};

const MOMENTS = [
  { k: '01', t: '10+ Projects',       d: 'Built through hands-on, self-driven learning, not just assignments.' },
  { k: '02', t: 'Self-taught',        d: 'Python, Java, C and JavaScript learned through self-study outside the curriculum.' },
  { k: '03', t: 'Live deployments',   d: 'Four live websites on GitHub Pages. Real links you can click right now.' },
  { k: '04', t: 'Consistent commits', d: 'Strong version-control habits with regular GitHub commits.' },
  { k: '05', t: '3rd year diploma',   d: 'Computer Science and Technology at BIP, Durgapur: DSA, OOP, DBMS, Web.' }
];

const SEASONS = [
  { n: 1, y: '2024', name: 'The Beginning', blurb: 'Diploma starts. First lines of C, first tags of HTML, first project online.',
    eps: [['Diploma begins', 'Enrolled in Computer Science and Technology at Bengal Institute of Polytechnic.'],
          ['Hello, C', 'First contact with programming logic: loops, pointers and a lot of debugging.'],
          ['Imli Mix', 'My first web project. Design and code finally clicked together.']] },
  { n: 2, y: '2025', name: 'Building Real Products', blurb: 'Python and Git enter the picture, and the portfolio fills with live work.',
    eps: [['Python and Git', 'Scripting, automation and the first public push to GitHub.'],
          ['MAISON Store', 'A luxury e-commerce site with a full vanilla JavaScript cart.'],
          ['Two restaurants', "Mondol and Rao's: reservations, menus, galleries and rich animation."]] },
  { n: 3, y: '2026 — Now', name: 'Level Up', blurb: 'Third year of the diploma, deeper CS fundamentals and AI-powered projects.',
    eps: [['3rd year', 'Data Structures, Algorithms, OOP, DBMS and Web Technologies.'],
          ['Nova', 'An AI voice assistant: speech recognition, Flask backend, LLM with memory.'],
          ['Open to work', "Looking for freelance projects and a software internship. Let's build."]] }
];

const MARQUEE = ['HTML5', 'CSS3', 'JavaScript', 'Python', 'Java', 'C', 'Flask', 'MySQL', 'DSA', 'OOP', 'GitHub', 'Responsive design', 'Automation', 'Open to work'];

/* =========================================================
   RENDER
   ========================================================= */
const shot = (p, img, cls) =>
  `<div class="shot ${cls}" data-t="${p.short || p.title}"><img src="assets/projects/${p.folder}/${img}.webp" alt="${p.title} ${p.type} website built by Sk Kutubuddin" loading="lazy" ` +
  `onload="this.parentNode.classList.add('has-img')" onerror="this.remove()"></div>`;

function renderProjects() {
  $('#stack').innerHTML = PROJECTS.map((p, i) => `
    <article class="pcard" style="--i:${i}">
      <div class="pcard-in">
        <div class="p-info">
          <div class="p-top"><span class="p-num">${String(i + 1).padStart(2, '0')} / ${String(PROJECTS.length).padStart(2, '0')}</span><span class="p-type">${p.type}</span></div>
          <h3>${p.title}</h3>
          <p class="p-tag">${p.tagline}</p>
          <p class="p-desc">${p.desc}</p>
          <ul class="p-pts">${p.points.map(x => `<li>${x}</li>`).join('')}</ul>
          <div class="p-tags">${p.tags.map(t => `<span class="chip">${t}</span>`).join('')}</div>
          <div class="p-btns">
            ${p.live ? `<a class="btn btn-solid" href="${p.live}" target="_blank" rel="noopener">View live site${ic('up-right')}</a>` : ''}
            <a class="btn btn-line" href="${p.repo || GITHUB}" target="_blank" rel="noopener">${ic('github')}GitHub</a>
          </div>
        </div>
        <div class="p-media">${shot(p, 'cover', 'main')}${shot(p, 'preview', 'sub')}</div>
      </div>
      <span class="p-dim"></span>
    </article>`).join('');
}

function renderMoments() {
  $('#momentTrack').innerHTML = MOMENTS.map((m, i) =>
    `<article class="moment"><div><small>${m.k}</small></div><div><h3>${m.t}</h3><p>${m.d}</p></div></article>`).join('');
}

function renderSkills() {
  const names = Object.keys(SKILLS), grid = $('#skillGrid'), tabs = $('#skillTabs');
  tabs.innerHTML = names.map((n, i) => `<button class="tab ${i ? '' : 'on'}" role="tab" data-tab="${n}">${n}</button>`).join('');
  const show = name => {
    grid.classList.remove('in');
    grid.innerHTML = SKILLS[name].map(([n, s], i) => `<div class="sk" style="--i:${i}"><b>${n}</b><small>${s}</small></div>`).join('');
    void grid.offsetWidth;
    if (grid.dataset.seen) grid.classList.add('in');
  };
  tabs.addEventListener('click', e => {
    const b = e.target.closest('.tab'); if (!b) return;
    $$('.tab', tabs).forEach(t => t.classList.toggle('on', t === b));
    show(b.dataset.tab);
  });
  show(names[0]);
}

function renderJourney() {
  $('#seasonTrack').innerHTML = SEASONS.map(s => `
    <div class="s-panel">
      <div class="s-head"><span class="s-n">S${s.n}</span><h3>${s.name}</h3><span class="s-y">${s.y}</span><p>${s.blurb}</p></div>
      <div class="s-eps">${s.eps.map(([t, d], k) => `
        <article class="ep"><span class="ep-n">E${k + 1}</span><div><h4>${t}</h4><p>${d}</p></div></article>`).join('')}
      </div>
    </div>`).join('');
}

function renderMarquee() {
  const h = MARQUEE.map(t => `<span>${t}</span>`).join('');
  $('#mq').innerHTML = h + h;
}

function splitLetters(el) {
  const txt = el.textContent; el.textContent = '';
  [...txt].forEach((ch, i) => { const s = document.createElement('span'); s.textContent = ch; s.style.setProperty('--i', i); el.appendChild(s); });
}

/* =========================================================
   SCROLL HELPERS
   ========================================================= */
let lenis = null;
function scrollToY(y, dur = 1.4) {
  if (lenis) lenis.scrollTo(y, { duration: dur, lock: true });
  else scrollTo(0, y);
}

/* =========================================================
   INTRO  ->  GATE  ->  START
   ========================================================= */
const intro = $('#intro');
let introTimers = [];

function lock(on) {
  html.classList.toggle('locked', on); body.classList.toggle('locked', on);
  if (lenis) on ? lenis.stop() : lenis.start();
}

function startIntro() {
  introTimers.forEach(clearTimeout); introTimers = [];
  scrollTo(0, 0); lock(true); body.classList.remove('ready', 'gate-in');
  intro.className = 'overlay on'; void intro.offsetWidth;
  if (RM) return showGate();
  const at = (ms, fn) => introTimers.push(setTimeout(fn, ms));
  at(250,  () => intro.classList.add('s1'));
  at(1000, () => intro.classList.add('s2'));
  at(3300, () => intro.classList.add('s3'));
  at(4100, showGate);
}
function showGate() {
  introTimers.forEach(clearTimeout); introTimers = [];
  intro.classList.remove('on');
  body.classList.add('ready');
  body.classList.remove('gate-in'); void body.offsetWidth; body.classList.add('gate-in');
  lock(false);   // scroll is free right after the intro
}

/* =========================================================
   SCENE ENGINE — portrait + chapters follow the scroll
   ========================================================= */
const scene = $('#home'), portrait = $('#portrait'), disc = $('#disc'), giant = $('#giant'), gate = $('#gate');
const chapters = $$('.chapter'), sdots = $('#sdots'), dotEls = $$('#sdots i');
const WINDOWS = [[.21, .40], [.43, .62], [.65, .82], [.85, 1.02]];
const KF_D = [
  { p: 0,   x: 0,   y: 0, s: 1,   r: 0 },
  { p: .15, x: 0,   y: 0, s: 1,   r: 0 },
  { p: .31, x: 23,  y: 3, s: .84, r: -2 },
  { p: .52, x: -23, y: 3, s: .84, r: 2 },
  { p: .73, x: 23,  y: 3, s: .88, r: -2 },
  { p: .90, x: 0,   y: 6, s: .58, r: 0 },
  { p: 1,   x: 0,   y: 10, s: .54, r: 0 }
];
const KF_M = [
  { p: 0,   x: 0, y: 0, s: 1,   r: 0 },
  { p: .15, x: 0, y: 0, s: 1,   r: 0 },
  { p: .31, x: 0, y: 2, s: .66, r: -1.5 },
  { p: .52, x: 0, y: 2, s: .64, r: 1.5 },
  { p: .73, x: 0, y: 2, s: .66, r: -1.5 },
  { p: .90, x: 0, y: 3, s: .58, r: 0 },
  { p: 1,   x: 0, y: 6, s: .55, r: 0 }
];
let sceneTop = 0, range = 1, vh = innerHeight, mobile = false, countsDone = false;

const hsecs = () => $$('[data-h]');
function measureH() {
  hsecs().forEach(s => {
    const tr = $('.h-track', s), last = tr.lastElementChild;
    const gut = parseFloat(getComputedStyle(tr).paddingLeft) || 0;
    s._dist = Math.max(0, last.offsetLeft + last.offsetWidth + gut - innerWidth);
    s.style.height = (s._dist + innerHeight) + 'px';
  });
}
function updateH() {
  hsecs().forEach(s => {
    const r = s.getBoundingClientRect();
    if (r.bottom < -100 || r.top > innerHeight + 100) return;
    const p = clamp(-r.top / Math.max(1, s.offsetHeight - innerHeight), 0, 1);
    $('.h-track', s).style.transform = `translate3d(${(-p * (s._dist || 0)).toFixed(1)}px,0,0)`;
    $('.h-prog i', s).style.transform = `scaleX(${p.toFixed(4)})`;
  });
}

function measure() {
  measureH();
  vh = innerHeight; mobile = innerWidth <= 900;
  sceneTop = scene.getBoundingClientRect().top + scrollY;
  range = Math.max(1, scene.offsetHeight - vh);
}
function kfAt(kf, p) {
  for (let i = 0; i < kf.length - 1; i++) {
    const a = kf[i], b = kf[i + 1];
    if (p <= b.p) { const t = smooth(a.p, b.p, p); return { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, s: a.s + (b.s - a.s) * t, r: a.r + (b.r - a.r) * t }; }
  }
  return kf[kf.length - 1];
}

function updateScene() {
  const p = clamp((scrollY - sceneTop) / range, 0, 1);
  const k = kfAt(mobile ? KF_M : KF_D, p);
  portrait.style.transform = `translate3d(calc(-50% + ${k.x.toFixed(2)}vw),${k.y.toFixed(2)}vh,0) scale(${k.s.toFixed(3)}) rotate(${k.r.toFixed(2)}deg)`;
  disc.style.transform = `translate3d(calc(-50% + ${(k.x * .7).toFixed(2)}vw),${(k.y * .4).toFixed(2)}vh,0) scale(${(.82 + k.s * .22).toFixed(3)})`;

  const g = smooth(.1, .34, p);
  giant.style.opacity = (1 - .93 * g).toFixed(3);
  giant.style.transform = `translate3d(0,${(-g * 7).toFixed(2)}vh,0) scale(${(1 - .08 * g).toFixed(3)})`;

  const go = 1 - smooth(0, .09, p);
  gate.style.opacity = go.toFixed(3); gate.style.visibility = go < .01 ? 'hidden' : 'visible';

  let active = -1;
  chapters.forEach((c, i) => {
    const [a, b] = WINDOWS[i], last = i === chapters.length - 1;
    const fi = smooth(a, a + .05, p), fo = last ? 0 : smooth(b - .05, b, p);
    const o = fi * (1 - fo);
    const oy = (1 - fi) * 46 - fo * 46;
    c.style.opacity = o.toFixed(3);
    c.style.visibility = o < .01 ? 'hidden' : 'visible';
    c.style.pointerEvents = o > .5 ? 'auto' : 'none';
    c.style.setProperty('--oy', oy.toFixed(1) + 'px');
    c.classList.toggle('show', o > .5);
    if (o > .5) active = i;
  });
  dotEls.forEach((d, i) => d.classList.toggle('on', i === active));
  sdots.classList.toggle('on', p > .17 && p < .97);
  if (!countsDone && active === 2) { countsDone = true; runCounters(); }
}

function runCounters() {
  $$('[data-count]').forEach(el => {
    const to = +el.dataset.count, suf = el.dataset.suffix || '';
    if (RM) { el.textContent = to + suf; return; }
    const t0 = performance.now(), dur = 1400;
    (function tick(now) {
      const k = clamp((now - t0) / dur, 0, 1), e = 1 - Math.pow(1 - k, 4);
      el.textContent = Math.round(to * e) + (k >= 1 ? suf : '');
      if (k < 1) requestAnimationFrame(tick);
    })(t0);
  });
}

/* =========================================================
   STACKING CARDS + OTHER SCROLL EFFECTS
   ========================================================= */
let cards = [];
function updateStack() {
  const h = innerHeight;
  cards.forEach((c, i) => {
    const next = cards[i + 1]; let t = 0;
    if (next) t = clamp((h * .92 - next.getBoundingClientRect().top) / (h * .62), 0, 1);
    c.style.setProperty('--sc', (1 - .05 * t).toFixed(4));
    c.style.setProperty('--dm', (.55 * t).toFixed(3));
    const r = c.getBoundingClientRect();
    const pr = clamp((h - r.top) / (h + r.height), 0, 1);
    c.style.setProperty('--py', ((pr - .5) * -46).toFixed(1) + 'px');
  });
}

const nav = $('#nav'), prog = $('#progress'), tbc = $('#tbc');
let ticking = false;
function onScroll() {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    const y = scrollY, max = document.documentElement.scrollHeight - innerHeight;
    prog.style.transform = `scaleX(${max > 0 ? y / max : 0})`;
    nav.classList.toggle('scrolled', y > 40);
    if (y > sceneTop - vh && y < sceneTop + range + vh) updateScene();
    updateStack(); updateH();
    const r = tbc.getBoundingClientRect();
    tbc.style.setProperty('--p', clamp(1 - (r.top - vh * .25) / (vh * .55), 0, 1).toFixed(3));
    // nav highlight
    let cur = 'home';
    ['projects', 'moments', 'skills', 'journey', 'contact'].forEach(id => { const e = document.getElementById(id); if (e && e.getBoundingClientRect().top < vh * .45) cur = id; });
    $$('#links a').forEach(a => a.classList.toggle('on', a.dataset.go === cur));
  });
}

function setupReveal() {
  const io = new IntersectionObserver(es => es.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in'); e.target.dataset.seen = 1; io.unobserve(e.target);
  }), { threshold: .12, rootMargin: '0px 0px -6% 0px' });
  $$('.rv, .stagger').forEach(el => io.observe(el));
}

/* =========================================================
   THEME, NAV, FORM
   ========================================================= */
function setupTheme() {
  const meta = $('meta[name="theme-color"]');
  const apply = t => { html.setAttribute('data-theme', t); if (meta) meta.content = t === 'light' ? '#f0efeb' : '#0a0a0c'; };
  apply(html.getAttribute('data-theme') || 'dark');
  $('#theme').addEventListener('click', () => {
    const t = html.getAttribute('data-theme') === 'light' ? 'dark' : 'light';
    apply(t); try { localStorage.setItem('theme', t); } catch (e) {}
  });
}

function goTo(id) {
  const el = document.getElementById(id); if (!el) return;
  scrollToY(id === 'home' ? 0 : el.getBoundingClientRect().top + scrollY - (id === 'contact' ? 0 : 20), 1.5);
}

function setupNav() {
  const burger = $('#burger');
  burger.addEventListener('click', () => { burger.classList.toggle('open'); body.classList.toggle('menu'); });
  document.addEventListener('click', e => {
    const a = e.target.closest('[data-go]'); if (!a) return;
    e.preventDefault(); burger.classList.remove('open'); body.classList.remove('menu'); goTo(a.dataset.go);
  });
  $('#skip').addEventListener('click', showGate);
  $('#replay').addEventListener('click', startIntro);
  addEventListener('keydown', e => { if (intro.classList.contains('on') && (e.key === 'Enter' || e.key === 'Escape')) showGate(); });
}

function setupForm() {
  $('#cform').addEventListener('submit', e => {
    e.preventDefault();
    const f = e.target, n = f.n.value, em = f.e.value, s = f.s.value, m = f.m.value;
    location.href = 'mailto:codewithkutub@gmail.com?subject=' + encodeURIComponent(s || ('Portfolio message from ' + n)) + '&body=' + encodeURIComponent(`Name: ${n}\nEmail: ${em}\n\n${m}`);
    const span = $('#fsub span'); span.textContent = 'Opening your mail app';
    setTimeout(() => { span.textContent = 'Send message'; f.reset(); }, 3500);
  });
}

/* =========================================================
   BOOT
   ========================================================= */
function boot() {
  try { history.scrollRestoration = 'manual'; } catch (e) {}
  scrollTo(0, 0);
  if (window.Lenis && !RM) {
    lenis = new Lenis({ duration: 1.25, easing: t => Math.min(1, 1.001 - Math.pow(2, -10 * t)), smoothWheel: true, wheelMultiplier: 1 });
    lenis.on('scroll', onScroll);
    const raf = t => { lenis.raf(t); requestAnimationFrame(raf); };
    requestAnimationFrame(raf);
  }
  renderProjects(); renderMoments(); renderSkills(); renderJourney(); renderMarquee();
  $$('[data-split]').forEach(splitLetters);
  $$('.ln2 span').forEach((s, i) => s.style.setProperty('--i', i + 2));
  cards = $$('.pcard');
  setupTheme(); setupNav(); setupForm(); setupReveal();
  measure(); updateScene(); updateStack();
  addEventListener('scroll', onScroll, { passive: true });
  addEventListener('resize', () => { measure(); onScroll(); });
  addEventListener('load', () => { measure(); onScroll(); });
  if (/[?&]skip/.test(location.search)) showGate(); else startIntro();
}
boot();
})();
