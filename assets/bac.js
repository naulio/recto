/* Recto · Bac blanc.
   1. Un moteur de tirage, indépendant de l'interface (testé par tests/verifier.js) :
      il ne propose que des sujets dont TOUTES les notions ont été choisies.
   2. Les outils partagés avec la spécialité HLP (méthode, corrigés) et l'écran du tronc commun : fiches, méthode, corrigés, épreuve.
   La banque de sujets est dans contenus/bac/tronc-commun.js ; les sujets des leçons sont repris tels quels. */
(function () {
  "use strict";
  const Recto = window.Recto = window.Recto || {};

  /* =========================================================
     Moteur
     ========================================================= */
  const FORMATS = {
    epreuve: { label: "Épreuve complète", sub: "2 dissertations + 1 texte · 4 h", n: { diss: 2, expl: 1, quest: 0 }, minutes: 240 },
    dissertation: { label: "Dissertations", sub: "3 sujets au choix", n: { diss: 3, expl: 0, quest: 0 }, minutes: 240 },
    explication: { label: "Explications de texte", sub: "2 textes au choix", n: { diss: 0, expl: 2, quest: 0 }, minutes: 240 },
    questions: { label: "Questions de réflexion", sub: "8 questions de compréhension", n: { diss: 0, expl: 0, quest: 8 }, minutes: 30 }
  };
  const Engine = {
    FORMATS,
    /* Toutes les notions du sujet font partie de la sélection */
    fits: (ns, sel) => ns.length > 0 && ns.every(n => sel.includes(n)),
    touches: (ns, sel) => ns.some(n => sel.includes(n)),
    /* Liste unifiée des sujets : leçons (dissertations, cartes mémoire), banque (sujets, textes) */
    build(bank, books) {
      const out = [], map = bank.map || {}, bn = bank.buildNotions || {};
      Object.keys(map).forEach(bid => {
        const bk = books[bid]; if (!bk) return;
        const M = map[bid], tags = n => (M.over && M.over[n]) || M.def || [];
        bk.exercises.forEach(e => {
          if (e.type === "build" && M.def && M.def.length) {
            out.push({ kind: "diss", id: "L-" + bid + "-" + e.id, ns: bn[e.q] || M.def.slice(), q: e.q, prob: e.prob, plan: e.plan || [], cit: e.cit,
              pieges: (e.els || []).filter(x => !x.ok && x.why).map(x => x.t + " : " + x.why), refs: (e.ns || []).map(n => [bid, n]), ex: { b: bid, id: e.id }, from: bid });
          } else if (e.type === "build") {
            /* Questions sur le livre : des questions de réflexion, rattachées à la notion de leur fiche principale */
            const ns = tags((e.ns && e.ns[0]) || e.notion || (e.nlist || [])[0]).slice();
            if (ns.length) out.push({ kind: "quest", id: "Q-" + bid + "-" + e.id, ns, q: e.q, a: e.prob, plan: e.plan || [], refs: (e.nlist || []).map(n => [bid, n]), from: bid });
          } else if (e.type === "flash") {
            const n = e.notion || (e.nlist || [])[0], ns = tags(n);
            if (ns.length) out.push({ kind: "quest", id: "Q-" + bid + "-" + e.id, ns: ns.slice(), q: e.f, a: e.b, refs: [[bid, n]], from: bid });
          }
        });
      });
      (bank.subjects || []).forEach(s => out.push(Object.assign({ kind: "diss" }, s, { id: "S-" + s.id })));
      (bank.texts || []).forEach(t => out.push(Object.assign({ kind: "expl" }, t, { id: "E-" + t.id })));
      return out;
    },
    pool(subjects, kind, sel) {
      return subjects.filter(s => s.kind === kind && (kind === "quest" ? Engine.touches(s.ns, sel) : Engine.fits(s.ns, sel)));
    },
    /* Tirage : favorise les sujets qui croisent plusieurs notions choisies et couvrent toute la sélection */
    draw(subjects, sel, fmt, recent, rnd) {
      rnd = rnd || Math.random; recent = recent || [];
      const F = FORMATS[fmt] || FORMATS.epreuve, covered = new Set(), taken = new Set();
      const score = s => {
        let sc = rnd() * 0.8;
        if (s.kind === "quest") {
          /* Questions : réparties notion par notion, de préférence centrées sur une seule notion choisie */
          if (!Engine.fits(s.ns, sel)) sc -= 1;
          sc -= (s.ns.length - 1) * 0.3;
        } else {
          if (sel.length > 1) sc += (s.ns.length - 1) * 0.9;
          sc += s.ns.filter(n => !covered.has(n)).length * 0.8;
        }
        if (recent.includes(s.id)) sc -= 1.5;
        return sc;
      };
      const pick = (kind, k, notion) => {
        const out = [];
        for (let i = 0; i < k; i++) {
          const cand = Engine.pool(subjects, kind, sel).filter(s => !taken.has(s.id) && (!notion || s.ns.includes(notion)));
          if (!cand.length) break;
          const best = cand.map(s => [s, score(s)]).sort((a, b) => b[1] - a[1])[0][0];
          out.push(best); taken.add(best.id); best.ns.forEach(n => covered.add(n));
        }
        return out;
      };
      const diss = pick("diss", F.n.diss);
      /* Plusieurs notions choisies : au moins un sujet de dissertation qui les croise, s'il en existe */
      if (sel.length > 1 && diss.length && !diss.some(s => s.ns.length > 1)) {
        const cross = Engine.pool(subjects, "diss", sel).filter(s => s.ns.length > 1 && !taken.has(s.id));
        if (cross.length) diss[diss.length - 1] = cross[Math.floor(rnd() * cross.length)];
      }
      const expl = pick("expl", F.n.expl);
      let quest = [];
      for (let i = 0; i < F.n.quest; i++) quest = quest.concat(pick("quest", 1, sel[i % sel.length]));
      if (quest.length < F.n.quest) quest = quest.concat(pick("quest", F.n.quest - quest.length));
      return { diss, expl, quest };
    },
    /* Combien de sujets de chaque sorte pour une sélection */
    counts(subjects, sel) {
      return { diss: Engine.pool(subjects, "diss", sel).length, expl: Engine.pool(subjects, "expl", sel).length, quest: Engine.pool(subjects, "quest", sel).length };
    }
  };
  Recto.bacEngine = Engine;

  /* Calendrier du bac blanc (sans interface, testé par tests/verifier.js) */
  const DAY = 864e5;
  const dKey = d => d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") + "-" + String(d.getDate()).padStart(2, "0");
  const fromKey = k => { const p = String(k || "").split("-").map(Number); return p.length === 3 && p[0] ? new Date(p[0], p[1] - 1, p[2]) : null; };
  const today0 = () => { const d = new Date(); d.setHours(0, 0, 0, 0); return d; };
  const dayLabel = d => d.toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  const DAY_TYPE = {
    learn: "Apprendre et s'entraîner", consolid: "Consolider", sprint: "Tout revoir", mock: "Épreuve blanche",
    "final-mock": "Sujet chronométré et révision finale", final: "Veille : révision finale", exam: "Jour du bac blanc"
  };

  /* Le programme : du jour présent au jour de l'épreuve (sans date : une séance qui couvre tout) */
  function program(units, examKey, now) {
    const t0 = now ? fromKey(now) : today0(), ex = fromKey(examKey);
    const n = ex ? Math.round((ex - t0) / DAY) : null;
    const days = [];
    /* jours civils (et non 24 h) : pas de décalage au changement d'heure */
    const add = (i, type, us) => days.push({ key: dKey(new Date(t0.getFullYear(), t0.getMonth(), t0.getDate() + i)), i, type, units: us || [] });
    if (n == null || n > 45) { add(0, "learn", units); return { n, days }; }
    if (n < 0) return { n, days };
    if (n === 0) add(0, "exam");
    else if (n === 1) { add(0, "sprint", units); add(1, "exam"); }
    else if (n === 2) { add(0, "learn", units); add(1, "final-mock", units); add(2, "exam"); }
    else {
      const L = n - 2;   /* jours d'apprentissage ; puis épreuve blanche (J-2), veille (J-1), épreuve */
      const per = Math.max(1, Math.ceil(units.length / L));
      for (let i = 0; i < L; i++) { const us = units.slice(i * per, i * per + per); add(i, us.length ? "learn" : "consolid", us.length ? us : units); }
      add(n - 2, "mock", units); add(n - 1, "final", units); add(n, "exam");
    }
    return { n, days };
  }
  Recto.bacPlan = { program, dKey, fromKey };

  /* =========================================================
     Outils partagés avec la spécialité HLP : chargement, méthode, corrigés
     ========================================================= */
  const C = Recto.core;
  if (!C || typeof document === "undefined") return;
  const { $, $$, esc, toast, store, X } = C;

  const LOADED = {};
  function loadScripts(list, cb) {
    const todo = list.filter(f => !LOADED[f]);
    let left = todo.length;
    if (!left) return cb();
    todo.forEach(f => { const s = document.createElement("script"); s.src = f + "?v=" + C.V; s.onload = s.onerror = () => { LOADED[f] = true; if (!--left) cb(); }; document.head.appendChild(s); });
  }
  const CORR = () => window.RECTO_CORRIGES || {};
  const fmtMin = m => m >= 60 ? Math.floor(m / 60) + " h" + (m % 60 ? " " + String(m % 60).padStart(2, "0") : "") : m + " min";
  const SELF = [["ok", "Acquis"], ["mid", "En partie"], ["ko", "À retravailler"]];

  function step(k, title, body, open) {
    return `<section class="bac-step ${open ? "open" : ""}" data-k="${k}"><header><span class="bac-step-n">${k}</span><h4>${esc(title)}</h4>${open ? "" : `<button class="btn ghost sm" data-open>Afficher</button>`}</header><div class="bac-step-b" ${open ? "" : "hidden"}>${body}</div></section>`;
  }
  function bindSteps(el) {
    $$(".bac-step", el).forEach(sec => { const b = $("[data-open]", sec); if (b) b.onclick = () => { sec.classList.add("open"); $(".bac-step-b", sec).hidden = false; b.remove(); X.stagger([$(".bac-step-b", sec)], { y: 6 }); }; });
  }
  /* La méthode : étapes minutées et structure de chaque exercice, ce qui compte, le jour J */
  function methodHTML(list, cur, M) {
    const tabs = list.map(m => [m.id, m.title]).concat([["grille", "Ce qui compte"], ["jour", "Jour J"]]);
    const m = list.find(x => x.id === cur);
    let body;
    if (m) body = `<div class="mt-head"><b>${esc(m.title)}</b><span class="tabnum">${esc(m.time)}</span></div>
      <div class="mt-bar">${m.steps.map(s => `<i style="flex-grow:${s.min}" title="${esc(s.t)} · ${fmtMin(s.min)}"></i>`).join("")}</div>
      <ol class="mt-steps">${m.steps.map(s => `<li><span class="mt-min tabnum">${fmtMin(s.min)}</span><div><b>${esc(s.t)}</b><span>${esc(s.d)}</span>${s.ex ? `<em>${esc(s.ex)}</em>` : ""}</div></li>`).join("")}</ol>
      <div class="mt-parts">${m.parts.map(p => `<section><h4>${esc(p.t)}</h4><ul>${p.items.map(i => `<li>${esc(i)}</li>`).join("")}</ul></section>`).join("")}</div>`;
    else if (cur === "grille") body = `<table class="mt-grille"><thead><tr><th></th><th>Valorisé</th><th>Pénalisé</th></tr></thead><tbody>${M.grille.map(g => `<tr><th>${esc(g.t)}</th><td>${esc(g.ok)}</td><td>${esc(g.ko)}</td></tr>`).join("")}</tbody></table><p class="note">Indicatif.</p>`;
    else body = `<ol class="mt-jour">${M.jourJ.map(j => `<li>${esc(j)}</li>`).join("")}</ol>`;
    return `<div class="segmented mt-tabs">${tabs.map(([k, l]) => `<button data-mt="${k}" class="${k === cur ? "on" : ""}">${esc(l)}</button>`).join("")}</div><div class="mt-body scroll">${body}</div>`;
  }
  /* Un corrigé rédigé : introduction, développement, conclusion */
  function corrigeHTML(c, open) {
    if (!c) return `<p class="note">Corrigé rédigé à venir pour ce sujet.</p>`;
    const part = p => `<section class="cg-part"><h5>${esc(p.titre)}</h5>${p.from ? `<p class="cg-from">« ${esc(p.from)} »</p>` : ""}<ul>${p.args.map(a => `<li><span>${esc(a.idee)}</span>${a.ref ? `<small>${esc(a.ref)}</small>` : ""}</li>`).join("")}</ul>${p.transition ? `<p class="cg-tr">${esc(p.transition)}</p>` : ""}</section>`;
    return `<div class="cg">${step("A", "Introduction rédigée", `<p class="cg-txt">${esc(c.intro)}</p>`, open)}${step("B", "Développement", c.parties.map(part).join(""), open)}${step("C", "Conclusion rédigée", `<p class="cg-txt">${esc(c.conclusion)}</p>`, open)}</div>`;
  }
  Recto.bacUI = { loadScripts, methodHTML, corrigeHTML, step, bindSteps, CORR, fmtMin, SELF };
  /* =========================================================
     Plan de révision du bac blanc : date de l'épreuve, programme jour par jour, séance minutée.
     Partagé par le tronc commun et la spécialité ; chaque espace fournit ce qu'il faut apprendre (« unités »)
     et les actions (ouvrir le cours, lancer des exercices, ouvrir un corrigé, lancer l'épreuve).
     ========================================================= */

  function rng(seed) {
    let h = 2166136261;
    for (const c of String(seed)) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
    return () => { h += 0x6D2B79F5; let t = h; t = Math.imul(t ^ (t >>> 15), t | 1); t ^= t + Math.imul(t ^ (t >>> 7), t | 61); return ((t ^ (t >>> 14)) >>> 0) / 4294967296; };
  }
  const pickSeeded = (arr, n, seed) => { const r = rng(seed); return arr.map(x => [r(), x]).sort((a, b) => a[0] - b[0]).slice(0, n).map(x => x[1]); };
  /* Exercices d'un contenu sur des fiches données (tirage stable dans la journée) */
  const QUICK = ["qcm", "vf", "fill", "flash", "match", "order", "sort", "schema", "grid", "part"];
  function exIds(book, fiches, n, seed, build) {
    const bk = C.BOOKS[book]; if (!bk) return [];
    const pool = bk.exercises.filter(e => (build ? e.type === "build" : QUICK.includes(e.type)) && (e.nlist || []).some(x => fiches.includes(x)));
    return pickSeeded(pool.map(e => e.id), n, seed);
  }

  /* Les blocs d'une séance de « min » minutes pour un jour du programme */
  function blocks(day, min, cfg, seed) {
    const out = [], us = day.units, books = [...new Set(us.map(u => u.book))];
    const fichesOf = b => [...new Set(us.filter(u => u.book === b).flatMap(u => u.fiches))];
    const pauses = min >= 150 ? 2 : min >= 75 ? 1 : 0, W = min - pauses * 5;
    const subj = cfg.subjects(us);
    const corr = subj.length ? subj[day.i % subj.length] : null;
    const learn = (share, t, d) => us.length && out.push({ k: "learn", min: Math.round(W * share), t, d, units: us });
    const exos = (share, t) => {
      const m = Math.round(W * share), tot = books.reduce((a, b) => a + fichesOf(b).length, 0) || 1;
      books.forEach(b => { const mb = Math.max(5, Math.round(m * fichesOf(b).length / tot)); const ids = exIds(b, fichesOf(b), Math.max(4, Math.round(mb * 60 / 50)), seed + b, false); if (ids.length) out.push({ k: "exos", min: mb, t: t || "Exercices", d: cfg.bookName(b) + " · " + ids.length + " exercices", book: b, ids }); });
    };
    const build = share => {
      const m = Math.round(W * share); let done = false;
      books.forEach(b => { if (done) return; const ids = exIds(b, fichesOf(b), Math.max(1, Math.round(m / 6)), seed + "b" + b, true); if (ids.length) { done = true; out.push({ k: "build", min: m, t: cfg.buildName || "Plans de dissertation", d: ids.length + " sujet" + (ids.length > 1 ? "s" : "") + " : choisir les arguments, comparer au plan modèle", book: b, ids }); } });
      return done;
    };
    const study = (share, t) => corr && out.push({ k: "corr", min: Math.round(W * share), t: t || "Étudier un corrigé", d: corr.q, id: corr.id });
    const method = (share, tab, t) => out.push({ k: "method", min: Math.max(5, Math.round(W * share)), t: t || "Méthode", d: tab === "jour" ? "Consignes et minutage de l'épreuve" : tab === "grille" ? "Ce qui est valorisé ou pénalisé" : cfg.methodName(tab), tab });
    const pause = () => out.push({ k: "pause", min: 5, t: "Pause", d: "Sans écran." });
    const mtab = cfg.methods[day.i % cfg.methods.length];
    if (day.type === "learn" || day.type === "consolid") {
      if (day.type === "learn") learn(0.3, "Apprendre", "Les fiches et le cours de : " + us.map(u => u.short).join(", "));
      exos(day.type === "learn" ? 0.3 : 0.4);
      if (pauses) pause();
      const hasBuild = build(day.type === "learn" ? 0.15 : 0.2);
      study(hasBuild ? 0.2 : 0.3);
      if (pauses > 1) pause();
      method(0.05, mtab);
    } else if (day.type === "sprint") {
      learn(0.35, "Tout revoir", "« À retenir », citations et pièges de chaque fiche");
      exos(0.25, "Exercices rapides");
      if (pauses) pause();
      study(0.2, "Lire un corrigé en entier");
      method(0.1, "jour", "Le jour J");
    } else if (day.type === "mock" || day.type === "final-mock") {
      const full = day.type === "mock" && min >= 240;
      const sm = full ? 240 : Math.round(W * (day.type === "mock" ? 0.75 : 0.55));
      out.push({ k: "mock", min: sm, t: full ? "Épreuve blanche complète" : "Sujet en temps limité", d: full ? "Conditions réelles, chrono lancé" : "Problématique, plan détaillé, introduction et conclusion rédigées" });
      if (pauses) pause();
      study(day.type === "mock" ? 0.2 : 0.15, "Comparer au corrigé");
      if (day.type === "final-mock") { learn(0.2, "Révision finale", "« À retenir », citations et pièges"); method(0.1, "jour", "Le jour J"); }
    } else if (day.type === "final") {
      learn(0.35, "Révision finale", "« À retenir », citations et pièges, sans nouvelle notion");
      exos(0.25, "Exercices rapides");
      if (pauses) pause();
      method(0.2, "grille", "Ce que le correcteur attend");
      study(0.2, "Relire un corrigé");
    }
    return out;
  }

  /* L'onglet Plan : calendrier, programme, séance du jour */
  function planTab(el, cfg) {
    const P = cfg.state;
    P.done = P.done || {};
    const prog = program(cfg.units, P.date);
    const tk = dKey(today0());
    const sel = prog.days.find(d => d.key === P.sel) || prog.days.find(d => d.key === tk) || prog.days[0];
    const min = Math.min(240, Math.max(30, P.min || 120));
    const bl = sel && sel.type !== "exam" ? blocks(sel, min, cfg, sel.key) : [];
    const doneL = (P.done[sel && sel.key + "|" + min] || []);
    const nDone = doneL.length;
    const count = prog.n == null ? "" : prog.n < 0 ? "Date passée" : prog.n === 0 ? "C'est aujourd'hui" : prog.n === 1 ? "Demain" : "J-" + prog.n;
    let t = 0;
    const exDate = fromKey(P.date);
    el.innerHTML = `
      <div class="bp">
        <section class="bp-cal">
          <label class="bp-date"><span>Date du bac blanc</span><input type="date" id="bpDate" value="${esc(P.date || "")}" min="${tk}"></label>
          <div class="bp-count">${count ? `<b class="tabnum">${esc(count)}</b>` : ""}<span>${exDate ? esc(dayLabel(exDate)) : "Aucune date : une séance qui couvre tout"}</span></div>
          ${prog.days.length > 1 ? `<ol class="bp-days">${prog.days.map(d => {
            const dd = fromKey(d.key), all = blocks(d, min, cfg, d.key).length, dn = (P.done[d.key + "|" + min] || []).length;
            return `<li><button class="bp-day ${d === sel ? "on" : ""} ${d.key === tk ? "today" : ""} ${d.type}" data-day="${d.key}"><span class="bp-d">${esc(dd.toLocaleDateString("fr-FR", { weekday: "short", day: "numeric" }))}</span><span class="bp-t">${esc(DAY_TYPE[d.type])}</span>${d.type === "learn" && d.units.length < cfg.units.length ? `<span class="bp-u">${esc(d.units.map(u => u.short).join(", "))}</span>` : ""}${d.type !== "exam" && all ? `<span class="bp-p tabnum">${dn}/${all}</span>` : ""}</button></li>`;
          }).join("")}</ol>` : ""}
        </section>
        <section class="bp-sess">
          ${sel ? `<header class="bp-h"><div><div class="eyebrow">${sel.key === tk ? "Aujourd'hui" : esc(dayLabel(fromKey(sel.key)))}</div><h3>${esc(DAY_TYPE[sel.type])}</h3></div>${bl.length ? `<span class="bp-prog tabnum">${nDone} / ${bl.length}</span>` : ""}</header>` : ""}
          ${sel && sel.type === "exam" ? `<ol class="mt-jour">${(window.RECTO_METHODE ? window.RECTO_METHODE.jourJ : []).map(j => `<li>${esc(j)}</li>`).join("")}</ol>`
          : sel ? `<div class="bp-slider"><input type="range" id="bpMin" min="30" max="240" step="15" value="${min}" aria-label="Durée de la séance"><b class="tabnum">${fmtMin(min)}</b></div>
          <ol class="bp-blocks">${bl.map((b, i) => { const s = t; t += b.min; const ok = doneL.includes(i);
            return `<li class="bp-b ${b.k} ${ok ? "done" : ""}"><span class="bp-time tabnum">${fmtMin(s)}</span><div class="bp-m"><b>${esc(b.t)}</b><span>${esc(b.d || "")}</span>${b.k === "learn" ? `<div class="bp-units">${b.units.map((u, j) => `<button class="chip" data-unit="${j}">${esc(u.short)}</button>`).join("")}</div>` : ""}</div><span class="bp-dur tabnum">${b.min} min</span><div class="bp-acts">${b.k !== "pause" && b.k !== "learn" ? `<button class="btn secondary sm" data-go="${i}">${b.k === "mock" ? "Lancer" : "Ouvrir"}</button>` : ""}<button class="bp-ck ${ok ? "on" : ""}" data-ck="${i}" aria-label="Fait" title="Fait">${C.ICON.check}</button></div></li>`; }).join("")}</ol>` : `<p class="note">Aucune séance.</p>`}
        </section>
      </div>`;
    const date = $("#bpDate", el);
    date.onchange = () => { P.date = date.value || null; P.sel = null; cfg.save(); cfg.refresh(); };
    $$("[data-day]", el).forEach(b => b.onclick = () => { P.sel = b.dataset.day; cfg.save(); cfg.refresh(); });
    const sl = $("#bpMin", el);
    if (sl) {
      const setP = () => sl.style.setProperty("--p", ((sl.value - 30) / 210 * 100) + "%");
      setP();
      sl.oninput = () => { setP(); $(".bp-slider b", el).textContent = fmtMin(+sl.value); };
      sl.onchange = () => { P.min = +sl.value; cfg.save(); cfg.refresh(); };
    }
    $$("[data-ck]", el).forEach(b => b.onclick = () => {
      const k = sel.key + "|" + min, i = +b.dataset.ck, L = P.done[k] || [];
      P.done[k] = L.includes(i) ? L.filter(x => x !== i) : L.concat(i);
      cfg.save(); if (!L.includes(i)) X.pop(b); cfg.refresh();
    });
    const mark = i => { const k = sel.key + "|" + min, L = P.done[k] || []; if (!L.includes(i)) { P.done[k] = L.concat(i); cfg.save(); } };
    $$("[data-go]", el).forEach(b => b.onclick = () => { const i = +b.dataset.go, bk = bl[i]; mark(i); cfg.act(bk); });
    $$(".bp-b.learn [data-unit]", el).forEach(b => b.onclick = () => { const li = b.closest(".bp-b"), i = [...li.parentNode.children].indexOf(li); mark(i); cfg.open(bl[i].units[+b.dataset.unit]); });
    if (!cfg.quiet()) X.stagger($$(".bp-b", el), { y: 8, step: 40 });
  }
  /* Retour au bac blanc depuis une leçon ouverte par le plan */
  function markBack(label) { try { sessionStorage.setItem("recto.back", JSON.stringify({ h: location.hash, l: label })); } catch (e) { /* stockage indisponible */ } }
  Object.assign(Recto.bacUI, { planTab, program, blocks, markBack, dKey });

  /* =========================================================
     Écran du tronc commun : fiches, méthode, corrigés, épreuve
     ========================================================= */
  const K = "recto.bac.tc";
  const ST = Object.assign({ sel: [], fmt: "epreuve", tab: "plan", mtab: "dissertation", draw: null, recent: [], done: {}, drafts: {}, qres: {}, timer: null, n: 0, plan: {} }, store.get(K) || {});
  if (!ST.planSeen) { ST.tab = "plan"; ST.planSeen = true; }
  ST.plan = ST.plan || {};
  const saveST = () => store.set(K, ST);
  let BANK = null, SUBJ = null, LOADING = false, QUIET = false, JUMP = false;
  const refresh = () => { QUIET = true; C.rerender(); };
  const WAITERS = [];
  const FILES = ["contenus/bac/methode.js", "contenus/bac/corriges-langage.js", "contenus/bac/corriges-art.js", "contenus/bac/corriges-raison.js", "contenus/bac/corriges-explications.js"];
  const TABS = [["plan", "Plan"], ["fiches", "Fiches"], ["methode", "Méthode"], ["corriges", "Corrigés"], ["epreuve", "Épreuve"]];
  const HOME = "#/tronc-commun/bac-blanc";

  /* Chargement : la banque de sujets, les contenus du tronc commun, la méthode et les corrigés */
  Recto.bacLoaded = function () { BANK = window.RECTO_BAC_TC; };
  function ensure(cb) {
    if (SUBJ) return cb();
    WAITERS.push(cb);
    if (LOADING) return;
    LOADING = true;
    const done = () => { LOADING = false; SUBJ = Engine.build(BANK, C.BOOKS); WAITERS.splice(0).forEach(f => f()); };
    const books = () => {
      const ids = [...new Set(BANK.notions.flatMap(n => n.src.map(s => s.b)))].filter(id => C.LIB.some(m => m.id === id));
      let left = ids.length + 1;
      const one = () => { if (!--left) done(); };
      ids.forEach(id => C.loadBook(id, one));
      loadScripts(FILES, one);
    };
    if (BANK) return books();
    loadScripts(["contenus/bac/tronc-commun.js"], () => { BANK = window.RECTO_BAC_TC; if (BANK) books(); else { LOADING = false; WAITERS.length = 0; toast("Bac blanc indisponible."); } });
  }

  const NOT = id => BANK.notions.find(n => n.id === id);
  const nTitle = id => (NOT(id) || { title: id }).title;
  const byId = id => SUBJ.find(s => s.id === id);
  const KIND_LABEL = { diss: "Dissertation", expl: "Explication", quest: "Question" };
  const refTitle = ([b, n]) => { const x = C.notion(b, n); return x ? x.title : n; };
  const bookShort = b => ({ "le-langage": "Le langage", "l-art": "L'art", "discours-de-la-methode": "Discours de la méthode" })[b] || ((C.LIB.find(m => m.id === b) || {}).title || b);
  const nsTags = s => s.ns.map(n => `<span class="tag ghost">${esc(nTitle(n))}</span>`).join("");
  const doneBadge = s => { const d = ST.done[s.id]; return d ? `<span class="bac-done ${d.r}">${esc((SELF.find(x => x[0] === d.r) || [])[1] || "")}</span>` : ""; };
  const empty = t => `<div class="bac-empty"><div class="bac-empty-in"><p>${esc(t)}</p></div></div>`;

  /* Les fiches du cours rattachées à une notion (d'après la banque) */
  function fichesOf(n) {
    const out = [];
    Object.keys(BANK.map || {}).forEach(b => {
      const bk = C.BOOKS[b], M = BANK.map[b]; if (!bk) return;
      Object.keys(bk.notions).forEach(f => { const tags = (M.over && M.over[f]) || M.def || []; if (tags.includes(n)) out.push([b, f]); });
    });
    return out;
  }

  C.VIEWS.tcbac = function (root, prm) {
    root.innerHTML = `<section class="view bac"><div class="card bac-pick"><div class="eyebrow accent">Bac blanc · Tronc commun</div><h1>Notions</h1><div class="sk-lines"><i></i><i></i><i></i></div></div><div class="card bac-main"></div></section>`;
    ensure(() => { if (C.view() === "tcbac") draw(root, prm); });
  };

  function draw(root, prm) {
    const sel = ST.sel.filter(id => NOT(id));
    ST.sel = sel;
    const tab = TABS.some(t => t[0] === ST.tab) ? ST.tab : "plan";
    try { sessionStorage.removeItem("recto.back"); } catch (e) { /* stockage indisponible */ }
    const F = FORMATS[ST.fmt] ? ST.fmt : "epreuve";
    const subj = prm.s && byId(prm.s);
    const cnt = Engine.counts(SUBJ, sel);
    root.innerHTML = `
    <section class="view bac ${subj ? "ws-open" : ""}">
      <aside class="card bac-pick">
        <div class="eyebrow accent">Bac blanc · Tronc commun</div>
        <h1>Notions</h1>
        <div class="bac-quick"><button class="btn ghost sm" id="bAll">Toutes</button><button class="btn ghost gray sm" id="bNone">Aucune</button><span class="bac-count">${sel.length} / ${BANK.notions.length}</span></div>
        <div class="bac-notions" role="group" aria-label="Notions">${BANK.notions.map(n => {
          const on = sel.includes(n.id), c = Engine.counts(SUBJ, [n.id]);
          return `<button class="bac-n ${on ? "on" : ""}" data-n="${n.id}" aria-pressed="${on}"><span class="bx">${C.ICON.check}</span><span class="bt"><b>${esc(n.title)}</b></span><span class="bc tabnum" title="Sujets">${c.diss + c.expl}</span></button>`;
        }).join("")}</div>
        <p class="bac-hlp">« L'éducation », « La recherche de soi » : <a href="#/hlp/bac">spécialité HLP</a>.</p>
        ${tab === "epreuve" ? `<div class="bac-sec">Format</div>
        <div class="bac-fmts">${Object.keys(FORMATS).map(k => `<button class="bac-f ${k === F ? "on" : ""}" data-f="${k}"><b>${esc(FORMATS[k].label)}</b><small>${esc(FORMATS[k].sub)}</small></button>`).join("")}</div>
        <div class="bac-go"><button class="btn primary lg" id="bGen" ${sel.length ? "" : "disabled"}>${ST.draw ? "Nouveau sujet" : "Générer le sujet"}</button></div>`
        : `<div class="bac-go"><p class="note">${sel.length ? `${cnt.diss} dissertation${cnt.diss > 1 ? "s" : ""} · ${cnt.expl} texte${cnt.expl > 1 ? "s" : ""}` : "Aucune notion choisie."}</p></div>`}
      </aside>
      <div class="card bac-main" id="bMain"></div>
    </section>`;
    $$(".bac-n", root).forEach(b => b.onclick = () => { const id = b.dataset.n; ST.sel = ST.sel.includes(id) ? ST.sel.filter(x => x !== id) : BANK.notions.map(n => n.id).filter(x => x === id || ST.sel.includes(x)); saveST(); refresh(); });
    $("#bAll", root).onclick = () => { ST.sel = BANK.notions.map(n => n.id); saveST(); refresh(); };
    $("#bNone", root).onclick = () => { ST.sel = []; saveST(); refresh(); };
    $$(".bac-f", root).forEach(b => b.onclick = () => { ST.fmt = b.dataset.f; saveST(); refresh(); });
    const g = $("#bGen", root); if (g) g.onclick = e => generate(e.currentTarget);
    const main = $("#bMain", root);
    if (subj) workspace(main, subj, !!prm.c);
    else {
      main.innerHTML = `<div class="segmented big bac-tabs" id="bTabs">${TABS.map(([k, l]) => `<button data-tab="${k}" class="${k === tab ? "on" : ""}">${l}</button>`).join("")}</div><div class="bac-tab" id="bTab"></div>`;
      $$("#bTabs button", main).forEach(b => b.onclick = () => { ST.tab = b.dataset.tab; saveST(); refresh(); });
      const el = $("#bTab", main);
      if (tab === "plan") planTC(el, sel);
      else if (tab === "fiches") fiches(el, sel);
      else if (tab === "methode") method(el);
      else if (tab === "corriges") corriges(el, sel);
      else sheet(el);
    }
    if (JUMP && window.matchMedia && matchMedia("(max-width: 1080px)").matches) setTimeout(() => {
      const top = Math.max(0, main.getBoundingClientRect().top + window.scrollY - 64);
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => { if (Math.abs(window.scrollY - top) > 40) window.scrollTo(0, top); }, 700);
    }, 60);
    JUMP = false;
    if (!QUIET) X.stagger($$(".bac-n", root), { y: 6, step: 30 });
    QUIET = false;
  }

  /* ---------- Fiches : tout ce qu'il faut savoir sur les notions choisies ---------- */
  function fiches(el, sel) {
    if (!sel.length) { el.innerHTML = empty("Choisir au moins une notion."); return; }
    el.innerHTML = `<div class="bf scroll">${sel.map(n => {
      const fs = fichesOf(n), books = [...new Set(fs.map(x => x[0]))];
      return `<section class="bf-n"><header><h3>${esc(nTitle(n))}</h3><span class="muted small tabnum">${fs.length} fiches</span></header>${books.map(b => `<div class="bf-src"><span>${esc(bookShort(b))}</span><button class="btn ghost sm" data-open-b="${b}">Cours</button><button class="btn ghost sm" data-train-b="${b}" data-n="${n}">S'entraîner</button></div><div class="bf-list">${fs.filter(x => x[0] === b).map(([b2, f]) => {
        const x = C.notion(b2, f);
        return `<button class="bf-row" data-ref="${b2}|${f}"><b>${esc(x.title)}</b>${x.citation ? `<span>« ${esc(C.clip(x.citation, 120))} »</span>` : x.retenir && x.retenir[0] ? `<span>${esc(C.clip(x.retenir[0], 120))}</span>` : ""}</button>`;
      }).join("")}</div>`).join("")}</section>`;
    }).join("")}</div>`;
    bindRefs(el);
    $$("[data-open-b]", el).forEach(b => b.onclick = () => { Recto.bacUI.markBack("Bac blanc"); location.hash = "#/" + b.dataset.openB + (C.BOOKS[b.dataset.openB].course ? "/cours" : "/carte"); });
    $$("[data-train-b]", el).forEach(b => b.onclick = () => { const bk = b.dataset.trainB, fs2 = fichesOf(b.dataset.n).filter(x => x[0] === bk).map(x => x[1]); C.startIn(bk, { title: nTitle(b.dataset.n) + " · " + bookShort(bk), ids: C.shuffle(C.BOOKS[bk].exercises.filter(e => e.type !== "build" && (e.nlist || []).some(x => fs2.includes(x))).map(e => e.id)).slice(0, 15), back: HOME }); });
    if (!QUIET) X.stagger($$(".bf-row", el).slice(0, 14), { y: 6, step: 25 });
  }

  /* ---------- Plan : date du bac blanc, programme jour par jour, séance minutée ---------- */
  function unitsTC(sel) {
    const map = new Map();
    sel.forEach(n => fichesOf(n).forEach(([b, f]) => {
      const bk = C.BOOKS[b], p = bk.notions[f].part, k = b + "|" + p;
      if (!map.has(k)) { const P = bk.parts[p] || {}; map.set(k, { book: b, part: p, fiches: [], short: bookShort(b) + " " + (P.roman || "intro") }); }
      const u = map.get(k); if (!u.fiches.includes(f)) u.fiches.push(f);
    }));
    return [...map.values()];
  }
  function planTC(el, sel) {
    if (!sel.length) { el.innerHTML = empty("Choisir au moins une notion."); return; }
    const M = window.RECTO_METHODE, mt = id => ((M && M.tc.find(m => m.id === id)) || {}).title || (id === "grille" ? "Ce qui compte" : "Le jour J");
    const pool = Engine.pool(SUBJ, "diss", sel).concat(Engine.pool(SUBJ, "expl", sel)).filter(s => CORR()[s.id]);
    Recto.bacUI.planTab(el, {
      state: ST.plan, save: saveST, refresh, quiet: () => QUIET,
      units: unitsTC(sel), methods: ["dissertation", "explication", "grille"], methodName: mt, bookName: bookShort,
      subjects: us => { const fs2 = us.flatMap(u => u.fiches); const sc = s => (s.refs || []).filter(r => fs2.includes(r[1])).length; const hit = pool.filter(s => sc(s) > 0).sort((a, b) => sc(b) - sc(a)); return (hit.length ? hit : pool).map(s => ({ id: s.id, q: s.kind === "expl" ? "Explication · " + s.src : s.q })); },
      open: u => { Recto.bacUI.markBack("Bac blanc"); location.hash = "#/" + u.book + (C.BOOKS[u.book].course ? "/cours?part=" : "/carte?part=") + u.part; },
      act: b => {
        if (b.k === "exos") C.startIn(b.book, { title: "Bac blanc · " + bookShort(b.book), ids: b.ids, back: HOME });
        else if (b.k === "build") C.startIn(b.book, { title: "Plans de dissertation", ids: b.ids, from: "reflexion", back: HOME });
        else if (b.k === "corr") location.hash = HOME + "?s=" + encodeURIComponent(b.id) + "&c=1";
        else if (b.k === "method") { ST.tab = "methode"; ST.mtab = b.tab; saveST(); refresh(); }
        else if (b.k === "mock") { ST.fmt = b.min >= 240 ? "epreuve" : "dissertation"; generate(null); }
      }
    });
  }

  /* ---------- Méthode ---------- */
  function method(el) {
    const M = window.RECTO_METHODE;
    if (!M) { el.innerHTML = empty("Méthode indisponible."); return; }
    const cur = [...M.tc.map(m => m.id), "grille", "jour"].includes(ST.mtab) ? ST.mtab : "dissertation";
    el.innerHTML = methodHTML(M.tc, cur, M);
    $$("[data-mt]", el).forEach(b => b.onclick = () => { ST.mtab = b.dataset.mt; saveST(); refresh(); });
  }

  /* ---------- Corrigés : chaque sujet de la sélection, rédigé ---------- */
  function corriges(el, sel) {
    if (!sel.length) { el.innerHTML = empty("Choisir au moins une notion."); return; }
    const list = Engine.pool(SUBJ, "diss", sel).concat(Engine.pool(SUBJ, "expl", sel));
    const K2 = CORR();
    el.innerHTML = `<div class="bac-list scroll">${list.map(s => `<button class="bac-s ${s.kind}" data-s="${esc(s.id)}"><span class="bac-s-k">${KIND_LABEL[s.kind]}${s.kind === "expl" ? " · " + esc(s.author) : ""}</span><span class="bac-s-q">${esc(s.kind === "expl" ? s.src : s.q)}</span><span class="bac-s-f">${nsTags(s)}${doneBadge(s)}<span class="bac-s-go">${K2[s.id] ? "Corrigé" : "Plan"} ${C.ICON.chev}</span></span></button>`).join("") || `<p class="note">Aucun sujet.</p>`}</div>`;
    $$(".bac-s", el).forEach(b => b.onclick = () => { location.hash = HOME + "?s=" + encodeURIComponent(b.dataset.s) + "&c=1"; });
    if (!QUIET) X.stagger($$(".bac-s", el).slice(0, 10), { y: 8, step: 40 });
  }

  /* ---------- Épreuve : tirage, feuille de sujets, chrono ---------- */
  function generate(btn) {
    if (!ST.sel.length) return toast("Au moins une notion.");
    const d = Engine.draw(SUBJ, ST.sel, ST.fmt, ST.recent);
    const ids = d.diss.concat(d.expl, d.quest).map(s => s.id);
    if (!ids.length) return toast("Aucun sujet pour cette sélection.");
    ST.n = (ST.n || 0) + 1;
    ST.draw = { sel: ST.sel.slice(), fmt: ST.fmt, ids, at: Date.now(), n: ST.n };
    ST.recent = ids.concat(ST.recent).slice(0, 24);
    ST.timer = null; ST.qres = {}; ST.tab = "epreuve";
    saveST();
    JUMP = true;
    if (btn) { X.pop(btn); X.burst(btn, { count: 10 }); }
    if (location.hash !== HOME) location.hash = HOME; else C.rerender();
  }
  function sheet(el) {
    const D = ST.draw;
    if (!D) { el.innerHTML = empty("Choisir les notions et le format, puis générer le sujet."); return; }
    const list = D.ids.map(byId).filter(Boolean);
    const F = FORMATS[D.fmt] || FORMATS.epreuve;
    const mixed = D.sel.join() !== ST.sel.join() || D.fmt !== ST.fmt;
    const dated = new Date(D.at).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
    const quests = list.filter(s => s.kind === "quest"), others = list.filter(s => s.kind !== "quest");
    el.innerHTML = `
      <header class="bac-sheet-h">
        <div><div class="eyebrow">Bac blanc n° ${D.n || 1} · ${esc(dated)} · ${esc(F.label)}</div>
          <h2>${others.length ? (others.length > 1 ? "Un sujet au choix" : "Sujet") : "Questions de réflexion"}</h2>
          <div class="bac-tags">${D.sel.map(n => `<span class="tag">${esc(nTitle(n))}</span>`).join("")}<span class="tag ghost">${F.minutes >= 60 ? F.minutes / 60 + " h" : F.minutes + " min"}</span></div></div>
        ${timerHTML()}
      </header>
      ${mixed ? `<p class="note bac-mixed">Sélection modifiée depuis ce tirage.</p>` : ""}
      <div class="bac-list scroll">
        ${others.map((s, i) => `<button class="bac-s ${s.kind}" data-s="${esc(s.id)}"><span class="bac-s-k">Sujet ${i + 1} · ${KIND_LABEL[s.kind]}${s.kind === "expl" ? " · " + esc(s.author) : ""}</span><span class="bac-s-q">${esc(s.kind === "expl" ? "Expliquer le texte : " + s.src : s.q)}</span>${s.kind === "expl" ? `<span class="bac-s-x">« ${esc(C.clip(s.text, 150))} »</span>` : ""}<span class="bac-s-f">${nsTags(s)}${doneBadge(s)}<span class="bac-s-go">Traiter ${C.ICON.chev}</span></span></button>`).join("")}
        ${quests.length ? `<div class="bac-qs">${quests.map((s, i) => questHTML(s, i)).join("")}</div><p class="note bac-qsum" id="qSum"></p>` : ""}
      </div>`;
    $$(".bac-s", el).forEach(b => b.onclick = () => { location.hash = HOME + "?s=" + encodeURIComponent(b.dataset.s); });
    bindTimer(el);
    bindQuests(el);
    if (!QUIET) X.stagger($$(".bac-s, .bac-q", el), { y: 10, step: 70 });
  }
  function questHTML(s, i) {
    const r = ST.qres[s.id];
    return `<div class="bac-q ${r ? "shown" : ""}" data-q="${esc(s.id)}">
      <div class="bac-q-h"><span class="bac-q-n">${i + 1}</span><b>${esc(s.q)}</b></div>
      <div class="bac-q-tags">${nsTags(s)}<span class="tag ghost">${esc(bookShort(s.from))}</span></div>
      <div class="bac-q-a" ${r ? "" : "hidden"}><p>${esc(s.a || "")}</p>${s.plan && s.plan.length ? `<ol>${s.plan.map(p => `<li>${esc(p)}</li>`).join("")}</ol>` : ""}
        <div class="bac-q-refs">${(s.refs || []).filter(r2 => C.notion(r2[0], r2[1])).map(r2 => `<button class="chip" data-ref="${r2[0]}|${r2[1]}">${esc(refTitle(r2))}</button>`).join("")}</div>
        <div class="bac-self">${SELF.map(([k, l]) => `<button class="btn sm ${r === k ? "secondary on" : "ghost gray"}" data-r="${k}">${esc(l)}</button>`).join("")}</div></div>
      ${r ? "" : `<button class="btn secondary sm bac-q-show">Voir la réponse attendue</button>`}
    </div>`;
  }
  function bindQuests(el) {
    const upd = () => { const q = $("#qSum", el); if (!q) return; const v = Object.values(ST.qres); q.textContent = v.length ? `${v.filter(x => x === "ok").length} acquise${v.filter(x => x === "ok").length > 1 ? "s" : ""} · ${v.filter(x => x === "mid").length} en partie · ${v.filter(x => x === "ko").length} à retravailler` : ""; };
    $$(".bac-q", el).forEach(q => {
      const sh = $(".bac-q-show", q);
      if (sh) sh.onclick = () => { $(".bac-q-a", q).hidden = false; sh.remove(); q.classList.add("shown"); };
      $$("[data-r]", q).forEach(b => b.onclick = () => { ST.qres[q.dataset.q] = b.dataset.r; saveST(); $$("[data-r]", q).forEach(x => { x.className = "btn sm " + (x === b ? "secondary on" : "ghost gray"); }); if (b.dataset.r === "ok") X.pop(b); upd(); });
    });
    bindRefs(el);
    upd();
  }
  function bindRefs(el) {
    $$("[data-ref]", el).forEach(b => b.onclick = e => { e.stopPropagation(); const [bk, n] = b.dataset.ref.split("|"); C.ficheIn(bk, n); });
  }
  function timerHTML() {
    const t = ST.timer;
    if (!t) return `<button class="btn secondary sm bac-timer" id="tStart">Chrono</button>`;
    return `<div class="bac-clock"><span class="tabnum" id="tLeft"></span><small>restant</small><button class="btn ghost gray sm" id="tStop">Arrêter</button></div>`;
  }
  function bindTimer(el) {
    const st = $("#tStart", el);
    if (st) st.onclick = () => { const F = FORMATS[(ST.draw || {}).fmt] || FORMATS.epreuve; ST.timer = { start: Date.now(), min: F.minutes }; saveST(); refresh(); };
    const sp = $("#tStop", el);
    if (sp) sp.onclick = () => { ST.timer = null; saveST(); refresh(); };
    const left = $("#tLeft", el);
    if (!left || !ST.timer) return;
    const tick = () => { const ms = ST.timer.start + ST.timer.min * 60000 - Date.now(); left.textContent = ms > 0 ? C.fmtHMS(ms) : "Temps écoulé"; left.classList.toggle("late", ms <= 0); };
    tick();
    const iv = setInterval(tick, 1000);
    C.onClean(() => clearInterval(iv));
  }

  /* ---------- Traiter un sujet : préparation guidée, puis corrigé rédigé ---------- */
  function workspace(main, s, showCorr) {
    const back = `<button class="btn ghost sm bac-back" id="wBack">${C.ICON.back} Retour</button>`;
    const refs = (s.refs || []).filter(r => C.notion(r[0], r[1]));
    const refsHTML = refs.length ? `<div class="bac-refs">${refs.map(r => `<button class="chip" data-ref="${r[0]}|${r[1]}"><span class="bk">${esc(bookShort(r[0]))}</span>${esc(refTitle(r))}</button>`).join("")}</div>` : `<p class="note">Aucune.</p>`;
    const draft = `<label class="bac-draft"><span>Brouillon</span><textarea id="wDraft" rows="4" placeholder="${s.kind === "expl" ? "Thèse, problème, étapes du texte…" : "Définitions, problématique, plan…"}">${esc(ST.drafts[s.id] || "")}</textarea></label>`;
    const selfHTML = `<div class="bac-self-end"><span>Bilan</span>${SELF.map(([k, l]) => `<button class="btn sm ${ST.done[s.id] && ST.done[s.id].r === k ? "secondary on" : "ghost gray"}" data-r="${k}">${esc(l)}</button>`).join("")}</div>`;
    const corr = `<div class="bac-corr"><div class="eyebrow accent">Corrigé</div>${corrigeHTML(CORR()[s.id], showCorr)}</div>`;
    if (s.kind === "expl") {
      main.innerHTML = `
        <header class="bac-ws-h">${back}<div class="eyebrow">Explication de texte · ${esc(s.author)}</div><div class="bac-tags">${nsTags(s)}${doneBadge(s)}</div>${timerHTML()}</header>
        <div class="bac-ws two">
          <article class="bac-text scroll"><p class="bac-consigne">Expliquer le texte :</p><blockquote>${esc(s.text)}</blockquote><p class="bac-src">${esc(s.src)}</p>${s.notes && s.notes.length ? `<ul class="bac-notes">${s.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}</article>
          <div class="bac-guide scroll">
            ${showCorr ? corr : draft}
            ${step(1, "Problème", `<p>${esc(s.probleme)}</p>`)}
            ${step(2, "Thèse", `<p>${esc(s.these)}</p>`)}
            ${step(3, "Mouvement", `<ol class="bac-mvt">${s.mouvement.map(m => `<li><b>« ${esc(m.from)} »</b><span>${esc(m.t)}</span></li>`).join("")}</ol>`)}
            ${step(4, "Enjeu", `<p>${esc(s.enjeux)}</p>`)}
            ${step(5, "Questions à se poser", `<ul>${s.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`)}
            ${step(6, "Fiches du cours", refsHTML)}
            ${step(7, "Piège", `<p>${esc(s.piege)}</p>`)}
            ${showCorr ? "" : corr}
            ${selfHTML}
          </div>
        </div>`;
    } else {
      const ex = s.ex && C.BOOKS[s.ex.b];
      main.innerHTML = `
        <header class="bac-ws-h">${back}<div class="eyebrow">Dissertation${s.from ? " · " + esc(bookShort(s.from)) : ""}</div><div class="bac-tags">${nsTags(s)}${doneBadge(s)}</div>${timerHTML()}</header>
        <div class="bac-ws">
          <h2 class="bac-ws-q">${esc(s.q)}</h2>
          <div class="bac-guide scroll">
            ${showCorr ? corr : draft}
            ${step(1, "Analyse du sujet", s.termes ? `<ul>${s.termes.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : `<p>Définir chaque mot du sujet, repérer ce qu'il présuppose.</p>`)}
            ${step(2, "Problématique", `<p>${esc(s.prob || "")}</p>`)}
            ${step(3, "Plan", `<ol class="bac-plan">${(s.plan || []).map(p => `<li>${esc(p)}</li>`).join("")}</ol>${s.cit ? `<p class="bac-cit">« ${esc(s.cit)} »</p>` : ""}`)}
            ${step(4, "Fiches du cours", refsHTML)}
            ${step(5, "Pièges", s.pieges && s.pieges.length ? `<ul>${s.pieges.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : `<p>${esc(s.piege || "")}</p>`)}
            ${showCorr ? "" : corr}
            ${ex ? `<div class="bac-train"><div><b>S'entraîner au plan</b><span>Choisir les arguments, comparer au plan modèle.</span></div><button class="btn secondary sm" id="wTrain">Lancer</button></div>` : ""}
            ${selfHTML}
          </div>
        </div>`;
      const tr = $("#wTrain", main);
      if (tr) tr.onclick = () => C.startIn(s.ex.b, { title: "Sujet de dissertation", ids: [s.ex.id], from: "reflexion", back: location.hash });
    }
    $("#wBack", main).onclick = () => { location.hash = HOME; };
    bindSteps(main);
    const ta = $("#wDraft", main);
    if (ta) ta.addEventListener("input", () => { ST.drafts[s.id] = ta.value.slice(0, 6000); saveST(); });
    $$(".bac-self-end [data-r]", main).forEach(b => b.onclick = () => { ST.done[s.id] = { r: b.dataset.r, at: Date.now() }; saveST(); $$(".bac-self-end [data-r]", main).forEach(x => { x.className = "btn sm " + (x === b ? "secondary on" : "ghost gray"); }); if (b.dataset.r === "ok") { X.pop(b); X.burst(b, { count: 12 }); } toast("Noté."); });
    bindRefs(main);
    bindTimer(main);
  }
})();
