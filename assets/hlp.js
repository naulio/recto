/* Recto · Espace « Spécialité HLP ».
   Cinq sections : Accueil, Littérature, Philosophie, Textes et auteurs, Bac blanc.
   Les données sont dans contenus/hlp/hlp.js (chargées à la demande). Les fiches de textes sont aussi
   transformées en exercices pour le moteur d'entraînement de Recto (contenu « hlp-textes »).
   Les cours de spécialité, une fois fournis, seront des leçons Recto marquées space: "hlp" : elles
   apparaîtront automatiquement dans leur discipline et débloqueront le bac blanc HLP. */
(function () {
  "use strict";
  const Recto = window.Recto = window.Recto || {};
  const C = Recto.core;
  const DISCS = ["litterature", "philosophie"];
  const label = t => `${t.a.short} · « ${t.title} »`;
  /* Préparation des données et génération des exercices : sans interface, testées par tests/verifier.js */
  Recto.hlpData = { prepare, corpusBook, bacPool, bacDraw };
  if (!C) return;
  const { $, $$, esc, toast, store, X, ICON } = C;

  const K = "recto.hlp";
  const ST = Object.assign({ lib: { mode: "textes", disc: "tout", q: "" }, tab: {}, atab: {}, bac: {} }, store.get(K) || {});
  ST.lib = Object.assign({ mode: "textes", disc: "tout", q: "" }, ST.lib);
  ST.bac = Object.assign({ disc: "philosophie", chs: ["ch1"], texts: [], fmt: "epreuve", tab: "plan", draw: null, recent: [], drafts: {}, done: {}, timer: null, n: 0, plan: {} }, ST.bac);
  if (!ST.bac.planSeen) { ST.bac.tab = "plan"; ST.bac.planSeen = true; }
  ST.bac.plan = ST.bac.plan || {};
  const saveST = () => store.set(K, ST);
  let H = null, QUIET = false;
  const refresh = () => { QUIET = true; C.rerender(); };

  const LOCK = '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="5" y="10.5" width="14" height="10" rx="2.2"/><path d="M8.5 10.5V7.8a3.5 3.5 0 0 1 7 0v2.7"/></svg>';
  const SECTIONS = [["accueil", "Accueil", "Accueil"], ["litterature", "Littérature", "Littér."], ["philosophie", "Philosophie", "Philo"], ["textes", "Textes et auteurs", "Textes"], ["bac", "Bac blanc", "Bac blanc"]];

  /* =========================================================
     Données : préparation et exercices
     ========================================================= */
  Recto.hlpLoaded = function () {
    H = prepare(window.RECTO_HLP, C.LIB);
    Recto.add("hlp-textes", corpusBook(H));
  };
  function ensure(cb) {
    if (H) return cb();
    C.loadBook("hlp-textes", err => { if (err || !H) return toast("Impossible de charger la spécialité HLP."); cb(); });
  }
  function prepare(D, lib) {
    const T = {}, A = {}, CH = {};
    D.authors.forEach(a => { A[a.id] = a; a.texts = []; });
    D.chapters.forEach(c => { CH[c.id] = c; });
    /* Ordre de lecture : par chapitre, puis littérature avant philosophie, puis chronologique */
    const chi = id => D.chapters.findIndex(c => c.id === id);
    D.texts.sort((a, b) => chi(a.chapter) - chi(b.chapter) || DISCS.indexOf(a.discipline) - DISCS.indexOf(b.discipline) || a.yearN - b.yearN);
    D.texts.forEach(t => { T[t.id] = t; t.a = A[t.author]; t.a.texts.push(t); t.disc = D.disciplines[t.discipline]; t.ch = CH[t.chapter]; });
    D.authors.forEach(a => { a.texts.sort((x, y) => x.yearN - y.yearN); a.discs = [...new Set(a.texts.map(t => t.discipline))]; });
    const cites = [];
    D.texts.forEach(t => t.citations.forEach((c, i) => cites.push(Object.assign({ text: t, i, who: c.who || t.a.short }, c))));
    const courses = d => (lib || []).filter(m => m.space === "hlp" && m.discipline === d && m.type === "lecon");
    return Object.assign({}, D, { T, A, CH, cites, courses, active: D.chapters.filter(c => !c.planned) });
  }
  const tone = d => (H.disciplines[d] || {}).tone || "#0b7a8a";

  /* Les fiches deviennent des exercices (identifiants stables, aucun hasard à la génération) */
  function corpusBook(H) {
    const parts = [{ n: 0, roman: "", name: "Repères", label: "Repères", title: "Les textes de la spécialité", essence: "" }];
    const partOf = {};
    H.active.forEach(c => DISCS.forEach(d => {
      if (!H.texts.some(t => t.chapter === c.id && t.discipline === d)) return;
      const n = parts.length;
      parts.push({ n, roman: ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII"][n] || String(n), name: H.disciplines[d].title, label: H.disciplines[d].title + " · ch. " + c.n,
        title: H.disciplines[d].title + " · " + c.title, metaphor: c.question, href: "#/hlp/" + d, essence: H.texts.filter(t => t.chapter === c.id && t.discipline === d).map(t => t.a.short).filter((x, i, a) => a.indexOf(x) === i).join(", ") });
      partOf[c.id + "|" + d] = n;
    }));
    const notions = {};
    H.texts.forEach(t => {
      notions[t.id] = { part: partOf[t.chapter + "|" + t.discipline], title: label(t), essentiel: t.these, retenir: t.idees.slice(0, 4),
        citation: t.citations[0] && t.citations[0].t, piege: t.piege, link: "#/hlp/texte/" + t.id };
    });
    const ex = [], push = e => ex.push(e);
    const byDisc = d => H.texts.filter(t => t.discipline === d);
    const others = (t, list, k) => { const i = list.indexOf(t); return list.filter(x => x !== t).sort((a, b) => ((list.indexOf(a) - i + list.length) % list.length) - ((list.indexOf(b) - i + list.length) % list.length)).slice(0, k); };
    const authorsAll = H.authors;
    H.texts.forEach(t => {
      const same = byDisc(t.discipline);
      push({ id: "these-" + t.id, type: "flash", notion: t.id, f: `${t.a.short}, « ${t.title} » : quelle est la thèse ?`, b: t.these });
      push({ id: "qthese-" + t.id, type: "qcm", notion: t.id, q: `Quelle idée résume le texte « ${t.title} » (${t.a.short}) ?`,
        options: [t.short].concat(others(t, same, 3).map(o => o.short)), answer: 0, explain: t.these });
      t.citations.filter(c => !c.who).slice(0, 2).forEach((c, i) => {
        const wrong = others(t.a, authorsAll, authorsAll.length).filter(a => !t.a.texts.some(x => x.author === a.id)).slice(i * 3, i * 3 + 3);
        push({ id: "qui-" + t.id + "-" + i, type: "qcm", cite: true, notion: t.id, q: `Qui a écrit : « ${c.t} » ?`, options: [t.a.name].concat(wrong.map(a => a.name)), answer: 0,
          explain: `${t.a.short}, ${t.work} : ${c.sens}` });
      });
      t.citations.forEach((c, i) => { if (c.fill) push({ id: "fill-" + t.id + "-" + i, type: "fill", notion: t.id, text: c.fill, explain: `${c.who || t.a.short}, ${t.work}. ${c.sens}` }); });
      (t.vf || []).forEach((v, i) => push({ id: "vf-" + t.id + "-" + i, type: "vf", notion: t.id, s: v.s, a: v.a, explain: v.explain }));
      const o = (t.oppositions || [])[0], ot = o && H.T[o.to];
      if (ot) {
        const linked = new Set([t.id, ...t.liens.map(l => l.to), ...t.oppositions.map(l => l.to)]);
        const pool = H.texts.filter(x => !linked.has(x.id) && !(x.liens || []).concat(x.oppositions || []).some(l => l.to === t.id));
        push({ id: "opp-" + t.id, type: "qcm", notion: t.id, ns: [t.id, ot.id], q: `Quel texte peut-on opposer à « ${t.title} » (${t.a.short}) ?`,
          options: [label(ot)].concat(others(t, pool.concat([t]), 3).filter(x => x !== t).map(label)), answer: 0, explain: o.t });
      }
    });
    DISCS.forEach(d => {
      const list = byDisc(d);
      for (let k = 0; k * 5 < list.length; k++) {
        const chunk = list.slice(k * 5, k * 5 + 5);
        if (chunk.length < 3) continue;
        push({ id: "match-" + d + "-" + k, type: "match", part: partOf["ch1|" + d], q: "Associe chaque texte à son idée principale.", pairs: chunk.map(t => ({ l: label(t), r: t.short, n: t.id })) });
      }
      /* Pas d'ordre chronologique à l'année près : l'époque suffit, ce qui compte est l'idée */
      const auth = [...new Set(list.map(t => t.author))].map(id => H.A[id]);
      const B3 = ["XVIe-XVIIIe siècles", "XIXe siècle", "XXe-XXIe siècles"], bk = a => a.century <= 18 ? 0 : a.century === 19 ? 1 : 2;
      const sc = n => ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X", "XI", "XII", "XIII", "XIV", "XV", "XVI", "XVII", "XVIII", "XIX", "XX", "XXI"][n] + "ᵉ";
      if (auth.length >= 4) push({ id: "sort-" + d, type: "sort", part: partOf["ch1|" + d], q: "Classe ces auteurs selon leur époque.", buckets: B3,
        items: auth.map(a => ({ t: a.name, b: bk(a), n: a.texts.find(t => t.discipline === d).id })), explain: auth.map(a => `${a.short} : ${sc(a.century)}`).join(" · ") });
    });
    return {
      unit: { one: "partie", many: "parties", fem: true },
      exam: { kind: "épreuve de spécialité HLP", format: "une interprétation de texte et un essai" },
      plan: { priority: parts.slice(1).map(p => p.n) },
      overview: { title: "Les textes de la spécialité", intro: H.active.map(c => "Chapitre " + c.n + " · " + c.title + " : " + c.question).join(" "), boxes: [
        { t: "Les fiches", b: "Une fiche complète par texte dans Textes et auteurs." },
        { t: "Sans citations", b: "Le mode « sans citations » retire les questions sur les formules exactes. Désactivé par défaut : en spécialité, mieux vaut les garder." }] },
      tips: ["Pour chaque texte, sache dire en une phrase sa thèse et cite une formule exacte.", "Prépare des couples de textes qui s'opposent : ils font les meilleurs plans d'essai."],
      parts, notions, exercises: ex
    };
  }

  /* =========================================================
     Onglets de l'espace
     ========================================================= */
  C.SPACE_NAV.hlp = prm => SECTIONS.map(([k, l, s]) => ({ href: k === "accueil" ? "#/hlp" : "#/hlp/" + k, l, s, on: (["texte", "auteur", "impregner", "citation"].includes(prm.sub) ? "textes" : prm.sub === "jour" ? "accueil" : prm.sub || "accueil") === k }));

  C.VIEWS.hlp = function (root, prm) {
    if (!H) root.innerHTML = `<section class="view hlp-wait"><div class="card"><div class="eyebrow hlp">Spécialité HLP</div><div class="sk-lines"><i></i><i></i><i></i></div></div></section>`;
    ensure(() => {
      if (C.view() !== "hlp") return;
      const sub = prm.sub || "accueil";
      const fn = { accueil: home, litterature: disc, philosophie: disc, textes: library, texte: textPage, auteur: authorPage, bac: bacPage,
        impregner: (r, p) => Recto.impregner ? Recto.impregner.view(r, p, H, tone, { train: trainText }) : textPage(r, p),
        citation: (r, p) => Recto.impregner ? Recto.impregner.quoteView(r, p, H, tone) : textPage(r, p),
        jour: (r, p) => Recto.impregner ? Recto.impregner.dayView(r, p, H, tone) : home(r) }[sub] || home;
      fn(root, prm);
      QUIET = false;
    });
  };

  /* =========================================================
     Accueil HLP
     ========================================================= */
  function home(root) {
    const ch = H.active[0];
    const nd = d => H.texts.filter(t => t.discipline === d).length;
    const allCourses = DISCS.flatMap(d => H.courses(d));
    const bacOpen = DISCS.filter(d => H.courses(d).length).map(d => H.disciplines[d].title.toLowerCase());
    root.innerHTML = `
    <section class="view hlp-home">
      <div class="card hh-hero">
        <div class="eyebrow hlp">Spécialité HLP · ${esc(H.level)}</div>
        <h1 class="hh-t">Humanités, littérature <span class="hl">et philosophie</span></h1>
        <p class="hh-p">Cours, textes en fiches, bac blanc corrigé.</p>
        <div class="hh-facts"><div><b class="cnt" data-v="${H.texts.length}">${H.texts.length}</b><span>textes en fiches</span></div><div><b class="cnt" data-v="${H.authors.length}">${H.authors.length}</b><span>auteurs</span></div><div><b class="cnt" data-v="${H.cites.length}">${H.cites.length}</b><span>citations relevées</span></div></div>
        <div class="hh-acts">${allCourses.length ? `<a class="btn primary lg" href="#/${allCourses[0].id}/cours">Ouvrir le cours</a><a class="btn secondary lg" href="#/hlp/textes">Textes et auteurs</a>` : `<a class="btn primary lg" href="#/hlp/textes">Textes et auteurs</a>`}<a class="btn secondary lg" href="#/hlp-textes/train">S'entraîner sur les textes</a></div>
        ${Recto.impregner ? (() => { const I = Recto.impregner, done = I.doneToday(), st = I.streak(), g = I.gallery(H).length;
          return `<a class="hh-day" href="#/hlp/jour"><span class="mx-dots">${[0, 1, 2].map(() => `<i class="${done ? "on" : ""}"></i>`).join("")}</span><span class="hh-day-t"><b>Les 3 du jour</b><small>${done ? "Fait" : C.noQ(true) ? "Trois textes · 3 min" : "Un texte, deux citations · 3 min"}${st > 1 ? " · " + st + " jours de suite" : ""}</small></span><span class="hh-day-g" title="Auteurs retenus">${g}/${H.authors.length}</span></a>`; })() : ""}
      </div>
      <div class="card hh-chap">
        <div class="eyebrow">${esc((H.objets.find(o => o.id === ch.objet) || {}).title || "")} · ${esc((H.objets.find(o => o.id === ch.objet) || {}).sem || "")}</div>
        <h2>Chapitre ${ch.n} · ${esc(ch.title)}</h2>
        <p class="hh-q">${esc(ch.question)}</p>
        <p class="small muted">${esc(ch.periode)}</p>
        <div class="hh-disc">${DISCS.map(d => `<a class="hh-d" href="#/hlp/${d}" style="--tone:${tone(d)}"><b>${esc(H.disciplines[d].title)}</b><span>${nd(d)} textes · ${H.courses(d).length ? H.courses(d).length + " cours" : "cours à importer"}</span><small>${esc([...new Set(H.texts.filter(t => t.discipline === d && t.chapter === ch.id).sort((a, b) => a.yearN - b.yearN).map(t => t.a.short))].join(", "))}</small></a>`).join("")}</div>
        <div class="hh-foot"><button class="btn ghost sm" id="chPres">Présentation du chapitre</button><span class="small muted">Ensuite : ${esc(H.chapters.filter(c => c.planned).slice(0, 2).map(c => c.title).join(" · "))}…</span></div>
      </div>
      <a class="card hh-bac ${bacOpen.length ? "open" : ""}" href="#/hlp/bac"><span class="hh-lock">${bacOpen.length ? ICON.check : LOCK}</span><div><div class="eyebrow">Bac blanc HLP</div><b>${bacOpen.length ? "Ouvert en " + esc(bacOpen.join(" et en ")) : "Prêt dès l'arrivée de tes cours"}</b><span>${bacOpen.length ? "Interprétation sur tes textes, essai sur ton cours, ou l'épreuve complète." : "Choix de la discipline, des chapitres et des textes : déjà en place."}</span></div>${C.ICON.chev}</a>
    </section>`;
    $("#chPres", root).onclick = () => chapterModal(ch);
    if (!QUIET) { X.wordsIn($(".hh-t", root)); X.stagger($$(".hh-chap, .hh-bac", root), { y: 14, step: 90 }); C.countAll(root); }
  }
  function chapterModal(ch) {
    const studied = new Set(H.texts.filter(t => t.chapter === ch.id).map(t => t.a.short.toLowerCase()));
    const isStudied = b => [...studied].some(a => b.toLowerCase().startsWith(a) || b.toLowerCase().startsWith("j. " + a));
    C.openModal(`<div class="modal-head"><h3>Chapitre ${ch.n} · ${esc(ch.title)}</h3><button class="icon-btn" data-close aria-label="Fermer">${ICON.close}</button></div>
      <div class="ch-modal">
        <p class="hh-q">${esc(ch.question)} <span class="small muted">· ${esc(ch.periode)}</span></p>
        <div class="eyebrow">Présentation du programme (B.O.), résumée</div>
        <ul class="ch-pres">${ch.presentation.map(p => `<li>${esc(p)}</li>`).join("")}</ul>
        <div class="eyebrow">Bibliographie indicative (B.O.) · <span class="ch-mark">en couleur</span> : auteurs étudiés</div>
        <p class="ch-bib">${ch.bibliographie.map(b => `<span class="${isStudied(b) ? "on" : ""}">${esc(b)}</span>`).join(" · ")}</p>
      </div>`, "chapter");
  }

  /* =========================================================
     Littérature / Philosophie
     ========================================================= */
  function disc(root, prm) {
    const d = prm.sub, D = H.disciplines[d];
    const ch = H.CH[prm.ch] && !H.CH[prm.ch].planned ? H.CH[prm.ch] : H.active[0];
    const texts = H.texts.filter(t => t.discipline === d && t.chapter === ch.id).sort((a, b) => a.yearN - b.yearN);
    const authors = [...new Set(texts.map(t => t.author))].map(id => H.A[id]);
    const courses = H.courses(d).filter(m => !m.chapter || m.chapter === ch.id);
    const quotes = texts.map(t => Object.assign({ text: t }, t.citations[0]));
    root.innerHTML = `
    <section class="view hlp-disc" style="--tone:${D.tone}">
      <aside class="card hd-side">
        <div class="eyebrow hlp">Spécialité HLP</div>
        <h1>${esc(D.title)}</h1>
        <p class="hd-p">${esc(D.blurb)}</p>
        ${d === "philosophie" ? `<p class="hd-warn">Distincte du tronc commun.</p>` : ""}
        <div class="hd-sec">Chapitres</div>
        <div class="hd-chs">${H.chapters.map(c => c.planned
          ? `<div class="hd-ch off" title="Programme officiel"><span class="r">·</span><span class="t">${esc(c.title)}</span><span class="s">à venir</span></div>`
          : `<a class="hd-ch ${c === ch ? "on" : ""}" href="#/hlp/${d}?ch=${c.id}"><span class="r">${c.n}</span><span class="t">${esc(c.title)}</span><span class="s">${H.texts.filter(t => t.discipline === d && t.chapter === c.id).length} textes</span></a>`).join("")}</div>
      </aside>
      <div class="card hd-main scroll">
        <header class="hd-head"><div class="eyebrow">Chapitre ${ch.n} · ${esc(D.title)}</div><h2>${esc(ch.title)}</h2><p class="hh-q">${esc(ch.question)}</p></header>
        <section class="hd-block"><h3>Cours</h3>${courses.length
          ? courses.map(m => { const sm = store.get(C.kSum(m.id)) || {}; return `<div class="hd-course big" style="--tone:${m.tone || D.tone}"><div class="hd-c-t"><b>${esc(m.title)}</b>${sm.answered ? `<span class="tabnum">${sm.pct} % maîtrisé</span>` : ""}</div><span>${esc(m.tagline || "")}</span><div class="hd-acts"><a class="btn primary" href="#/${m.id}/cours">Cours</a><a class="btn secondary" href="#/${m.id}/plan">Plan</a><a class="btn secondary" href="#/${m.id}/train">Exercices</a><a class="btn secondary" href="#/${m.id}/reflexion">Sujets</a><a class="btn ghost" href="#/hlp/bac">Bac blanc</a></div></div>`; }).join("")
          : `<div class="hd-empty"><b>Cours à venir.</b><div class="hd-acts"><button class="btn secondary" data-train-texts>S'entraîner sur les textes</button><a class="btn ghost" href="#/hlp/bac">Bac blanc</a></div></div>`}</section>
        <section class="hd-block"><h3>Textes étudiés <span class="n">${texts.length}</span>${texts.length ? `<button class="btn ghost sm hd-h-btn" data-train-texts>S'entraîner</button>` : ""}</h3><div class="tx-list">${texts.map(textRow).join("")}</div></section>
        <section class="hd-block"><h3>${d === "philosophie" ? "Philosophes et penseurs" : "Auteurs"} <span class="n">${authors.length}</span></h3><div class="chips">${authors.map(a => `<a class="chip" href="#/hlp/auteur/${a.id}">${esc(a.name)}</a>`).join("")}</div></section>
        <section class="hd-block"><h3>Une citation par texte</h3><div class="hd-quotes">${quotes.map(q => `<a class="hd-q" href="#/hlp/texte/${q.text.id}?tab=citations"><span>« ${esc(q.t)} »</span><small>${esc(q.who || q.text.a.short)}, ${esc(q.text.title)}</small></a>`).join("")}</div></section>
      </div>
    </section>`;
    $$("[data-train-texts]", root).forEach(b => b.onclick = () => trainTexts(texts.map(t => t.id), D.title + " · textes"));
    if (!QUIET) X.stagger($$(".tx-row", root), { y: 8, step: 40 });
  }
  /* Une série d'exercices sur des textes choisis (exercices générés à partir des fiches) */
  function trainTexts(ids, title, back) {
    const bk = C.BOOKS["hlp-textes"]; if (!bk) return;
    const ex = C.shuffle(bk.exercises.filter(e => (e.nlist || []).some(x => ids.includes(x))).map(e => e.id)).slice(0, 20);
    C.startIn("hlp-textes", { title, ids: ex, back: back || location.hash });
  }
  Recto.hlpTrainTexts = trainTexts;
  function textRow(t) {
    return `<a class="tx-row" href="#/hlp/texte/${t.id}" style="--tone:${tone(t.discipline)}"><span class="tx-y tabnum">${esc(String(t.yearN))}</span><span class="tx-m"><b>${esc(t.title)}</b><small>${esc(t.a.name)} · ${esc(t.work)}</small></span></a>`;
  }

  /* =========================================================
     Textes et auteurs
     ========================================================= */
  function library(root, prm) {
    const L = ST.lib;
    if (prm && prm.m && ["textes", "auteurs", "citations"].includes(prm.m)) L.mode = prm.m;
    const q = C.fold(L.q || "").trim();
    const kept = Recto.impregner ? Recto.impregner.gallery(H) : [];
    const discOk = d => L.disc === "tout" || d === L.disc;
    const match = s => !q || C.fold(s).includes(q);
    const texts = H.texts.filter(t => discOk(t.discipline) && match([t.title, t.a.name, t.work, t.these, t.short].join(" ")));
    const authors = H.authors.filter(a => a.discs.some(discOk) && match([a.name, a.epoque].concat(a.idees).join(" ")));
    const cites = H.cites.filter(c => discOk(c.text.discipline) && match([c.t, c.who, c.text.title, c.sens].join(" ")));
    const modes = [["textes", "Textes", texts.length], ["auteurs", "Auteurs", authors.length], ["citations", "Citations", cites.length]];
    if (!modes.some(m => m[0] === L.mode)) L.mode = "textes";
    let body = "";
    if (L.mode === "auteurs") body = `<div class="hl-grid">${authors.map(a => `<a class="au-card ${kept.includes(a.id) ? "kept" : ""}" href="#/hlp/auteur/${a.id}"><span class="au-ini">${esc(a.short.charAt(0))}</span><span class="au-m"><b>${esc(a.name)}</b><small>${esc(a.dates)} · ${esc(a.epoque)}</small><span class="au-t">${a.texts.map(t => `<i style="--tone:${tone(t.discipline)}">${esc(t.title)}</i>`).join("")}</span></span></a>`).join("") || emptyRes()}</div>`;
    else if (L.mode === "citations") body = `<div class="ci-list2">${cites.map(c => `<a class="ci2" href="#/hlp/texte/${c.text.id}?tab=citations" style="--tone:${tone(c.text.discipline)}"><span class="ci2-q">« ${esc(c.t)} »</span><span class="ci2-s">${esc(c.who)} · ${esc(c.text.title)}${c.where ? " · " + esc(c.where) : ""}</span><span class="ci2-m">${esc(c.sens)}</span></a>`).join("") || emptyRes()}</div>`;
    else body = `<div class="hl-grid">${texts.map(t => `<a class="tx-card" href="#/hlp/texte/${t.id}" style="--tone:${tone(t.discipline)}"><span class="tx-k">${esc(t.disc.title)} · ch. ${t.ch.n}</span><b>${esc(t.title)}</b><span class="tx-a">${esc(t.a.name)}</span><span class="tx-w">${esc(t.work)} · ${esc(t.year)}</span><span class="tx-s">${esc(t.short)}</span><span class="tx-f"><span>${t.citations.length} citations</span></span></a>`).join("") || emptyRes()}</div>`;
    root.innerHTML = `
    <section class="view hlp-lib">
      <div class="hl-head">
        <div><div class="eyebrow hlp">Spécialité HLP</div><h1>Textes et auteurs</h1></div>
        <div class="hl-tools">
          <div class="segmented big" id="hlMode">${modes.map(([k, l, n]) => `<button data-m="${k}" class="${L.mode === k ? "on" : ""}">${l} <span class="n">${n}</span></button>`).join("")}</div>
          <div class="hl-filters"><div class="segmented" id="hlDisc">${[["tout", "Tout"], ["litterature", "Littérature"], ["philosophie", "Philosophie"]].map(([k, l]) => `<button data-d="${k}" class="${L.disc === k ? "on" : ""}">${l}</button>`).join("")}</div>
            <input class="hl-q" id="hlQ" type="search" placeholder="Filtrer : auteur, idée, mot…" value="${esc(L.q || "")}" autocomplete="off" spellcheck="false" aria-label="Filtrer"></div>
        </div>
      </div>
      <div class="hl-body scroll">${body}</div>
    </section>`;
    $$("#hlMode button", root).forEach(b => b.onclick = () => { L.mode = b.dataset.m; saveST(); refresh(); });
    $$("#hlDisc button", root).forEach(b => b.onclick = () => { L.disc = b.dataset.d; saveST(); refresh(); });
    const inp = $("#hlQ", root);
    let tm = 0;
    inp.addEventListener("input", () => { clearTimeout(tm); tm = setTimeout(() => { L.q = inp.value; saveST(); refresh(); const i2 = $("#hlQ"); if (i2) { i2.focus(); i2.setSelectionRange(i2.value.length, i2.value.length); } }, 250); });
    const cp = $("[data-chpres]", root); if (cp) cp.onclick = e => { e.preventDefault(); chapterModal(H.active[0]); };
    if (!QUIET) X.stagger($$(".tx-card, .au-card, .ci2, .doc", root).slice(0, 24), { y: 10, step: 35 });
  }
  const emptyRes = () => `<div class="hl-empty"><b>Rien ne correspond.</b></div>`;

  /* =========================================================
     Fiche d'un texte
     ========================================================= */
  const TABS = [["essentiel", "L'essentiel"], ["arguments", "Arguments"], ["citations", "Citations"], ["essai", "Pour l'essai"], ["liens", "Liens"], ["document", "Manuel"]];
  const TAB_ALIAS = { comprendre: "essentiel", dissertation: "essai" };
  function linkList(list) {
    return `<ul class="tx-links">${list.map(l => { const o = H.T[l.to]; return o ? `<li><a href="#/hlp/texte/${o.id}" style="--tone:${tone(o.discipline)}"><b>${esc(label(o))}</b></a><span>${esc(l.t)}</span></li>` : ""; }).join("")}</ul>`;
  }
  /* Une page, un écran : à gauche le texte en une phrase et l'entrée dans le mode guidé, à droite le détail en onglets */
  function textPage(root, prm) {
    const t = H.T[prm.id];
    if (!t) { location.replace("#/hlp/textes"); return; }
    if (C.live) C.live.page("hlp-textes", t.id);
    const want = TAB_ALIAS[prm.tab] || prm.tab, saved = TAB_ALIAS[ST.tab[t.id]] || ST.tab[t.id];
    const tab = TABS.some(x => x[0] === want) ? want : TABS.some(x => x[0] === saved) ? saved : "essentiel";
    const i = H.texts.indexOf(t), prev = H.texts[i - 1], next = H.texts[i + 1];
    const IMP = Recto.impregner, r = IMP ? IMP.rec(t.id) : null, isDue = !!(IMP && IMP.due(t.id));
    const sec = (title, inner, cls) => inner ? `<section class="tx2-s ${cls || ""}"><h4>${esc(title)}</h4>${inner}</section>` : "";
    const ul = a => a && a.length ? `<ul>${a.map(x => `<li>${esc(x)}</li>`).join("")}</ul>` : "";
    const ol = a => a && a.length ? `<ol class="tx2-ol">${a.map(x => `<li>${esc(x)}</li>`).join("")}</ol>` : "";
    let panel = "";
    if (tab === "essentiel") panel = `${sec("La question", `<p class="tx2-ask">${esc(t.problematique)}</p>`)}${sec("Les idées", ol(t.idees))}${t.piege ? `<p class="tx2-piege"><b>Piège</b>${esc(t.piege)}</p>` : ""}`;
    else if (tab === "arguments") panel = `<div class="tx2-two">${sec(t.discipline === "litterature" ? "Procédés et arguments" : "Arguments", ul(t.arguments))}${sec("Exemples", ul(t.exemples))}</div>`;
    else if (tab === "citations") panel = `${IMP ? `<div class="tx2-cbar"><a class="btn secondary sm" href="#/hlp/citation/${t.id}">Retenir les citations</a></div>` : ""}<div class="tx2-cites">${t.citations.map((c, k) => `<figure class="tx2-c"><blockquote>« ${esc(c.t)} »</blockquote><figcaption>${esc(c.who || t.a.short)}${c.where ? " · " + esc(c.where) : ""}${IMP ? ` · <a href="#/hlp/citation/${t.id}?i=${k}">Retenir</a>` : ""}</figcaption><p>${esc(c.sens)}</p><p class="tx2-use"><b>Essai</b>${esc(c.usage)}</p></figure>`).join("")}</div>`;
    else if (tab === "essai") panel = `${sec(t.ch.question, `<p>${esc(t.neutre)}</p>`)}
        <div class="tx2-two">${sec("Connaissances", ul(t.connaissances))}${sec("Arguments réutilisables", ul(t.dissertation))}</div>
        ${(t.manuel.bac || []).length ? sec("Sujets du manuel", `<ul class="tx-bac">${t.manuel.bac.map(b => `<li><span class="tag ghost">${esc(b.k)}</span>${esc(b.q)}</li>`).join("")}</ul>`) : ""}`;
    else if (tab === "liens") panel = `<div class="tx2-two">${sec("Rapprochements", t.liens.length ? linkList(t.liens) : "")}${sec("Oppositions et nuances", t.oppositions.length ? linkList(t.oppositions) : "")}</div>`;
    else panel = `<div class="tx2-two"><div class="tx2-col">
          ${t.chapeau ? sec("Présentation du manuel", `<p>${esc(t.chapeau)}</p>`) : ""}
          ${t.manuel.notes && t.manuel.notes.length ? sec("Notes du manuel", ul(t.manuel.notes)) : ""}
          ${t.manuel.encadre ? sec("Encadré du manuel", `<p>${esc(t.manuel.encadre)}</p>`) : ""}
          ${t.manuel.saviez ? sec("« Le saviez-vous ? »", `<p>${esc(t.manuel.saviez)}</p>`) : ""}
        </div><div class="tx2-col">
          ${t.manuel.questions && t.manuel.questions.length ? sec("Questions du manuel", ul(t.manuel.questions)) : ""}
          ${t.complement.length ? sec("Pour aller plus loin", ul(t.complement)) : ""}
        </div></div>`;
    /* L'entrée dans le mode guidé : la visite, puis des rappels courts quand ils sont dus */
    const fmtDay = ts => new Date(ts).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
    const cta = !IMP ? `<button class="btn primary" id="txTrain">S'entraîner sur ce texte</button>`
      : !r ? `<a class="btn primary lg" href="#/hlp/impregner/${t.id}">S'imprégner du texte</a><button class="btn secondary" id="txTrain">S'entraîner</button><span class="tx2-cap">Visite guidée, environ 10 minutes : l'idée, l'auteur, son époque.</span>`
      : isDue ? `<a class="btn primary lg" href="#/hlp/impregner/${t.id}?r=1">Rappel · 2 minutes</a><button class="btn secondary" id="txTrain">S'entraîner</button><span class="tx2-cap">Rappel prévu aujourd'hui · <a href="#/hlp/impregner/${t.id}">refaire la visite</a></span>`
      : `<button class="btn primary lg" id="txTrain">S'entraîner sur ce texte</button><a class="btn secondary" href="#/hlp/impregner/${t.id}">Refaire la visite</a><span class="tx2-cap">Prochain rappel : ${esc(fmtDay(r.next))}.</span>`;
    root.innerHTML = `
    <section class="view tx2" style="--tone:${tone(t.discipline)}">
      <div class="card tx2-hero">
        <div class="tx2-top"><a class="btn ghost sm" href="#/hlp/textes">${ICON.back} Textes et auteurs</a><span class="grow"></span>${prev ? `<a class="icon-btn" href="#/hlp/texte/${prev.id}" title="Texte précédent" aria-label="Texte précédent">${ICON.back}</a>` : ""}${next ? `<a class="icon-btn" href="#/hlp/texte/${next.id}" title="Texte suivant" aria-label="Texte suivant">${ICON.chev}</a>` : ""}</div>
        <div class="tx2-id">
          <div class="eyebrow tx-eye">${esc(t.disc.title)} · Chapitre ${t.ch.n}</div>
          <h1>${esc(t.title)}</h1>
          <p class="tx-ref"><a href="#/hlp/auteur/${t.a.id}">${esc(t.a.name)}</a> · <i>${esc(t.work)}</i>${t.ref ? ", " + esc(t.ref) : ""} · ${esc(t.year)}</p>
        </div>
        <div class="tx2-th"><span>Thèse${r && r.anchor ? IMP.symSVG(r.anchor, "imp-sym xs") : ""}</span><p>${esc(t.these)}</p></div>
        <div class="tx2-cta">${cta}</div>
        ${IMP ? `<div class="tx2-fr"><span>Dans le chapitre</span>${IMP.frise(H.texts.filter(x => x.chapter === t.chapter), t, true)}</div>` : ""}
      </div>
      <div class="card tx2-main">
        <div class="segmented tx2-tabs" id="txTabs">${TABS.map(([k, l]) => `<button data-t="${k}" class="${k === tab ? "on" : ""}">${l}${k === "citations" ? ` <span class="n">${t.citations.length}</span>` : ""}</button>`).join("")}</div>
        <div class="tx2-panel scroll">${panel}</div>
      </div>
    </section>`;
    $$("#txTabs button", root).forEach(b => b.onclick = () => { ST.tab[t.id] = b.dataset.t; saveST(); QUIET = true; location.hash = "#/hlp/texte/" + t.id + "?tab=" + b.dataset.t; });
    const tr = $("#txTrain", root); if (tr) tr.onclick = () => trainText(t);
    if (!QUIET) X.stagger($$(".tx2-id, .tx2-th, .tx2-cta, .tx2-fr", root), { y: 8, step: 50 });
    X.stagger($$(".tx2-panel > *", root), { y: 6, step: 35 });
  }
  function trainText(t) {
    const bk = C.BOOKS["hlp-textes"];
    const ids = bk.exercises.filter(e => e.nlist.includes(t.id) && !(C.noQ(true) && e.cite)).map(e => e.id);
    C.startIn("hlp-textes", { title: "Texte · " + t.a.short, ids: C.shuffle(ids).slice(0, 8), back: location.hash });
  }

  /* =========================================================
     Fiche d'un auteur
     ========================================================= */
  const ATABS = [["idees", "Idées et thèses"], ["citations", "Citations"], ["textes", "Textes"], ["liens", "Liens"]];
  function authorPage(root, prm) {
    const a = H.A[prm.id];
    if (!a) { location.replace("#/hlp/textes"); return; }
    const tab = ATABS.some(x => x[0] === prm.tab) ? prm.tab : ST.atab[a.id] || "idees";
    /* Les citations de l'auteur (pas celles d'un encadré attribué à un autre, comme Diderot chez Ferry) */
    const cites = H.cites.filter(c => c.text.author === a.id && c.who.startsWith(a.short));
    const rel = kind => {
      const out = [];
      a.texts.forEach(t => (t[kind] || []).forEach(l => { const o = H.T[l.to]; if (o && o.author !== a.id) out.push({ t, o, txt: l.t }); }));
      H.texts.filter(t => t.author !== a.id).forEach(t => (t[kind] || []).forEach(l => { const o = H.T[l.to]; if (o && o.author === a.id && !out.some(x => x.o === t && x.t === o)) out.push({ t: o, o: t, txt: l.t }); }));
      return out;
    };
    const relHTML = list => list.length ? `<ul class="tx-links">${list.map(x => `<li><a href="#/hlp/auteur/${x.o.author}" style="--tone:${tone(x.o.discipline)}"><b>${esc(x.o.a.name)}</b></a><span>${esc(x.txt)}</span><small>${esc(x.t.title)} ↔ ${esc(x.o.title)}</small></li>`).join("")}</ul>` : `<p class="muted">Aucun lien relevé.</p>`;
    let panel = "";
    if (tab === "idees") panel = `<div class="tx-cols">
        <div><section class="tx-b"><h4>Idées principales</h4><ul>${a.idees.map(x => `<li>${esc(x)}</li>`).join("")}</ul></section>
          <section class="tx-b"><h4>Thèses défendues dans les textes étudiés</h4><ul class="au-theses">${a.texts.map(t => `<li><a href="#/hlp/texte/${t.id}">« ${esc(t.title)} »</a><span>${esc(t.these)}</span></li>`).join("")}</ul></section>
          <section class="tx-b"><h4>Arguments importants</h4><ul>${a.texts.flatMap(t => t.arguments.slice(0, 2)).map(x => `<li>${esc(x)}</li>`).join("")}</ul></section></div>
        <div><section class="tx-b tx-comp"><h4>Présentation <span class="tag ghost">complément</span></h4><p>${esc(a.presentation)}</p></section>
          <section class="tx-b tx-comp"><h4>Époque et contexte <span class="tag ghost">complément</span></h4><p><b>${esc(a.epoque)}.</b> ${esc(a.contexte)}</p></section>
          <section class="tx-b"><h4>Repères</h4><p>${esc(a.dates)}${a.epoque ? " · " + esc(a.epoque) : ""}</p></section></div>
      </div>`;
    else if (tab === "citations") panel = `<div class="tx-cites">${cites.map(c => `<figure class="tx-c"><blockquote>« ${esc(c.t)} »</blockquote><figcaption><a href="#/hlp/texte/${c.text.id}?tab=citations">${esc(c.text.title)}</a>${c.where ? " · " + esc(c.where) : ""}</figcaption><p><b>Sens.</b> ${esc(c.sens)}</p><p><b>Dans un essai.</b> ${esc(c.usage)}</p></figure>`).join("")}</div>`;
    else if (tab === "textes") panel = `<div class="tx-list">${a.texts.map(textRow).join("")}</div>`;
    else panel = `<div class="tx-cols"><div><section class="tx-b"><h4>Rapprochements</h4>${relHTML(rel("liens"))}</section></div><div><section class="tx-b"><h4>Oppositions et nuances</h4>${relHTML(rel("oppositions"))}</section></div></div>`;
    root.innerHTML = `
    <section class="view tx" style="--tone:${tone(a.discs[0])}">
      <header class="card tx-head">
        <div class="tx-top"><a class="btn ghost sm" href="#/hlp/textes">${ICON.back} Textes et auteurs</a></div>
        <div class="eyebrow tx-eye">Auteur · ${a.discs.map(d => esc(H.disciplines[d].title)).join(" et ")} · ${a.texts.length} texte${a.texts.length > 1 ? "s" : ""}</div>
        <h1>${esc(a.name)}</h1>
        <p class="tx-ref">${esc(a.dates)}${a.datesDoc ? "" : " (complément)"} · ${esc(a.epoque)}</p>
        <div class="segmented big tx-tabs" id="auTabs">${ATABS.map(([k, l]) => `<button data-t="${k}" class="${k === tab ? "on" : ""}">${l}${k === "citations" ? ` <span class="n">${cites.length}</span>` : ""}</button>`).join("")}</div>
      </header>
      <div class="card tx-body scroll">${panel}</div>
    </section>`;
    $$("#auTabs button", root).forEach(b => b.onclick = () => { ST.atab[a.id] = b.dataset.t; saveST(); QUIET = true; location.hash = "#/hlp/auteur/" + a.id + "?tab=" + b.dataset.t; });
    if (!QUIET) X.stagger($$(".tx-b, .tx-c, .tx-row", root), { y: 8, step: 40 });
  }

  /* =========================================================
     Bac blanc HLP
     Discipline, chapitres, textes : la sélection est respectée.
     Interprétation : une question sur un texte de la discipline ; essai : un sujet des cours de la discipline.
     Tant qu'aucun cours de la discipline n'est importé, la génération reste verrouillée.
     ========================================================= */
  /* Moteur sans interface (testé par tests/verifier.js) */
  function bacPool(H, books, sel) {
    const d = sel.disc, chs = sel.chs || [], picked = sel.texts || [];
    const other = d === "litterature" ? /philosoph/i : /littéra/i;
    const texts = H.texts.filter(t => t.discipline === d && chs.includes(t.chapter) && (!picked.length || picked.includes(t.id)));
    const interp = texts.map(t => {
      const doc = ((t.manuel && t.manuel.bac) || []).find(b => /interpr/i.test(b.k) && !other.test(b.k));
      return { kind: "interp", id: "I-" + t.id, t: t.id, ch: t.chapter, q: doc ? doc.q : t.problematique, doc: !!doc };
    });
    const essai = [];
    H.courses(d).filter(m => chs.includes(m.chapter) && books[m.id]).forEach(m => books[m.id].exercises.filter(e => e.type === "build").forEach(e => {
      const tx = (e.tx || []).filter(id => H.T[id] && H.T[id].discipline === d);
      essai.push({ kind: "essai", id: "A-" + m.id + "-" + e.id, b: m.id, e: e.id, ch: m.chapter, q: e.q, prob: e.prob || "", plan: e.plan || [], cit: e.cit || "",
        pieges: (e.els || []).filter(x => !x.ok && x.why).map(x => x.t + " : " + x.why), refs: (e.ns || []).map(n => [m.id, n]), tx,
        hit: picked.length ? tx.filter(id => picked.includes(id)).length : 0 });
    }));
    return { interp, essai };
  }
  function bacDraw(H, books, sel, fmt, recent, rnd) {
    rnd = rnd || Math.random; recent = recent || [];
    const N = { epreuve: { interp: 1, essai: 1 }, interpretation: { interp: 2, essai: 0 }, essai: { interp: 0, essai: 3 } }[fmt] || { interp: 1, essai: 1 };
    const P = bacPool(H, books, sel);
    const score = s => rnd() - (recent.includes(s.id) ? 1 : 0) + (s.hit || 0) * 2;
    const take = (list, n) => list.map(s => [score(s), s]).sort((a, b) => b[0] - a[0]).slice(0, n).map(x => x[1]);
    const interp = take(P.interp, N.interp);
    /* Comme à l'épreuve : l'essai prolonge le texte tiré quand un sujet du cours le mobilise */
    const linked = fmt === "epreuve" && interp.length ? P.essai.filter(s => s.tx.includes(interp[0].t)) : [];
    const essai = take(linked.length ? linked : P.essai, N.essai);
    return { interp, essai, pool: { interp: P.interp.length, essai: P.essai.length } };
  }

  const HFMT = {
    epreuve: { label: "Épreuve complète", sub: "Interprétation, puis essai · 4 h", minutes: 240 },
    interpretation: { litterature: "Interprétation littéraire", philosophie: "Interprétation philosophique", sub: "2 au choix · 2 h", minutes: 120 },
    essai: { litterature: "Essai littéraire", philosophie: "Essai philosophique", sub: "3 au choix · 2 h", minutes: 120 }
  };
  const fmtName = (k, d) => (HFMT[k] && (HFMT[k][d] || HFMT[k].label)) || "";
  const UI = () => Recto.bacUI;
  const SELF = [["ok", "Acquis"], ["mid", "En partie"], ["ko", "À retravailler"]];
  const BTABS = [["plan", "Plan"], ["fiches", "Fiches"], ["methode", "Méthode"], ["corriges", "Corrigés"], ["epreuve", "Épreuve"]];
  const BFILES = ["contenus/bac/methode.js", "contenus/bac/corriges-hlp-essais.js", "contenus/bac/corriges-hlp-interpretations.js"];
  let JUMP = false;
  const bacST = () => { const S = ST.bac; S.drafts = S.drafts || {}; S.done = S.done || {}; S.recent = S.recent || []; return S; };
  const doneBadge = s => { const r = bacST().done[s.id]; return r ? `<span class="bac-done ${r.r}">${esc((SELF.find(x => x[0] === r.r) || [])[1] || "")}</span>` : ""; };
  const courseTitle = b => (C.LIB.find(m => m.id === b) || {}).title || b;
  const emptyB = t => `<div class="bac-empty"><div class="bac-empty-in"><p>${esc(t)}</p></div></div>`;
  function loadAll(list, cb) { let left = list.length; if (!left) return cb(); list.forEach(m => C.loadBook(m.id, () => { if (!--left) cb(); })); }

  /* Sujets prêts à afficher : fiches du cours reliées, avec leur titre */
  function makeItems(r, courses) {
    const title = (b, n) => (C.notion(b, n) || {}).title;
    return r.interp.map(x => {
      /* Les fiches du cours utiles pour ce texte : celles des sujets d'essai qui le mobilisent */
      const refs = [], seen = new Set();
      courses.forEach(m => ((C.BOOKS[m.id] || {}).exercises || []).filter(e => e.type === "build" && (e.tx || []).includes(x.t))
        .forEach(e => (e.ns || []).forEach(n => { const k = m.id + "|" + n; if (!seen.has(k) && title(m.id, n)) { seen.add(k); refs.push([m.id, n, title(m.id, n)]); } })));
      return Object.assign({}, x, { refs: refs.slice(0, 8) });
    }).concat(r.essai.map(x => Object.assign({}, x, { refs: x.refs.filter(([b, n]) => title(b, n)).map(([b, n]) => [b, n, title(b, n)]) })));
  }

  function bacPage(root, prm) {
    const S = bacST(), d = DISCS.includes(S.disc) ? S.disc : "philosophie", D = H.disciplines[d];
    const avail = H.active.filter(c => H.texts.some(t => t.chapter === c.id && t.discipline === d) || H.courses(d).some(m => m.chapter === c.id));
    S.chs = S.chs.filter(id => avail.some(c => c.id === id));
    const pool = H.texts.filter(t => t.discipline === d && S.chs.includes(t.chapter));
    S.texts = S.texts.filter(id => pool.some(t => t.id === id));
    const chosen = S.texts.length ? pool.filter(t => S.texts.includes(t.id)) : pool;
    const courses = H.courses(d).filter(m => S.chs.includes(m.chapter));
    const allCourses = H.courses(d);
    const ready = courses.length > 0;
    const fmt = HFMT[S.fmt] ? S.fmt : "epreuve";
    S.fmt = fmt;
    if (prm.tab && BTABS.some(t => t[0] === prm.tab) && !prm.s) { S.tab = prm.tab; saveST(); }
    const tab = BTABS.some(t => t[0] === S.tab) ? S.tab : "plan";
    try { sessionStorage.removeItem("recto.back"); } catch (e) { /* stockage indisponible */ }
    root.innerHTML = `<section class="view bac hlp-bac" style="--tone:${D.tone}"><div class="card bac-pick"><div class="eyebrow hlp">Bac blanc · HLP</div><div class="sk-lines"><i></i><i></i><i></i></div></div><div class="card bac-main"></div></section>`;
    loadAll(allCourses, () => UI().loadScripts(BFILES, () => {
      if (C.view() !== "hlp" || (C.params() || {}).sub !== "bac") return;
      /* Tous les sujets de la discipline, pour retrouver un sujet ouvert depuis les corrigés ou la feuille */
      const every = makeItems(bacPool(H, C.BOOKS, { disc: d, chs: H.active.map(c => c.id), texts: [] }), allCourses);
      const item = prm.s && ((S.draw && S.draw.disc === d && S.draw.items.find(x => x.id === prm.s)) || every.find(x => x.id === prm.s));
      root.innerHTML = `
      <section class="view bac hlp-bac ${item ? "ws-open" : ""}" style="--tone:${D.tone}">
        <aside class="card bac-pick">
          <div class="eyebrow hlp">Bac blanc · HLP</div>
          <div class="segmented big bac-disc" id="hbDisc">${DISCS.map(k => `<button data-d="${k}" class="${k === d ? "on" : ""}">${esc(H.disciplines[k].title)}</button>`).join("")}</div>
          <div class="bac-sec">Chapitres <button class="btn ghost sm" id="hbAllCh">Tous</button></div>
          <div class="chips bac-chips">${H.chapters.map(c => { const ok = avail.includes(c); return `<button class="chip ${S.chs.includes(c.id) ? "on" : ""}" data-ch="${c.id}" ${ok ? "" : "disabled"}>${c.n ? "Ch. " + c.n + " · " : ""}${esc(c.title)}${ok ? "" : " · à venir"}</button>`; }).join("")}</div>
          <div class="bac-sec">Textes <span class="muted">facultatif</span> <button class="btn ghost sm" id="hbAllTx">Tous</button></div>
          <div class="chips bac-chips">${pool.map(t => `<button class="chip ${S.texts.includes(t.id) ? "on" : ""}" data-t="${t.id}">${esc(t.a.short)} · ${esc(C.clip(t.title, 34))}</button>`).join("") || `<span class="muted small">Aucun chapitre choisi.</span>`}</div>
          ${tab === "epreuve" ? `<div class="bac-sec">Exercice</div>
          <div class="bac-fmts">${Object.keys(HFMT).map(k => `<button class="bac-f ${k === fmt ? "on" : ""} ${k === "epreuve" ? "wide" : ""}" data-f="${k}"><b>${esc(fmtName(k, d))}</b><small>${esc(HFMT[k].sub)}</small></button>`).join("")}</div>
          <div class="bac-go">${ready ? "" : `<p class="note">Cours de ${esc(D.title.toLowerCase())} à venir.</p>`}<button class="btn primary lg" id="hbGen" ${ready && S.chs.length ? "" : "disabled"}>${ready ? (S.draw && S.draw.disc === d ? "Nouveau sujet" : "Générer le sujet") : LOCK + " Verrouillé"}</button></div>` : ""}
        </aside>
        <div class="card bac-main" id="hbMain"></div>
      </section>`;
      $$("#hbDisc button", root).forEach(b => b.onclick = () => { S.disc = b.dataset.d; S.texts = []; saveST(); refresh(); });
      $$("[data-ch]", root).forEach(b => b.onclick = () => { const id = b.dataset.ch; S.chs = S.chs.includes(id) ? S.chs.filter(x => x !== id) : S.chs.concat(id); saveST(); refresh(); });
      $("#hbAllCh", root).onclick = () => { S.chs = avail.map(c => c.id); saveST(); refresh(); };
      $$("[data-t]", root).forEach(b => b.onclick = () => { const id = b.dataset.t; S.texts = S.texts.includes(id) ? S.texts.filter(x => x !== id) : S.texts.concat(id); saveST(); refresh(); });
      $("#hbAllTx", root).onclick = () => { S.texts = []; saveST(); refresh(); };
      $$(".bac-f", root).forEach(b => b.onclick = () => { S.fmt = b.dataset.f; saveST(); refresh(); });
      const g = $("#hbGen", root); if (g) g.onclick = e => { if (ready) hGenerate(e.currentTarget, d, courses); };
      const main = $("#hbMain", root);
      if (item) hWorkspace(main, item, d, !!prm.c);
      else {
        main.innerHTML = `<div class="segmented big bac-tabs" id="hbTabs">${BTABS.map(([k, l]) => `<button data-tab="${k}" class="${k === tab ? "on" : ""}">${l}</button>`).join("")}</div><div class="bac-tab" id="hbTab"></div>`;
        $$("#hbTabs button", main).forEach(b => b.onclick = () => { S.tab = b.dataset.tab; saveST(); refresh(); });
        const el = $("#hbTab", main);
        if (tab === "plan") hPlan(el, d, courses, chosen);
        else if (tab === "fiches") hFiches(el, d, courses, chosen);
        else if (tab === "methode") hMethod(el);
        else if (tab === "corriges") hCorriges(el, d, makeItems(bacPool(H, C.BOOKS, { disc: d, chs: S.chs, texts: S.texts }), courses));
        else if (ready) hSheet(el, d);
        else lockHTML(el, d, chosen);
      }
      if (JUMP && window.matchMedia && matchMedia("(max-width: 1080px)").matches) setTimeout(() => {
        const top = Math.max(0, main.getBoundingClientRect().top + window.scrollY - 64);
        window.scrollTo({ top, behavior: "smooth" });
        setTimeout(() => { if (Math.abs(window.scrollY - top) > 40) window.scrollTo(0, top); }, 700);
      }, 60);
      JUMP = false;
      QUIET = false;
    }));
  }

  /* ---------- Fiches : le cours du chapitre et les textes choisis ---------- */
  function hFiches(el, d, courses, chosen) {
    if (!chosen.length && !courses.length) { el.innerHTML = emptyB("Aucun chapitre choisi."); return; }
    el.innerHTML = `<div class="bf scroll">
      ${courses.map(m => { const bk = C.BOOKS[m.id]; if (!bk) return ""; return `<section class="bf-n"><header><h3>${esc(m.title)}</h3><span class="muted small tabnum">${Object.keys(bk.notions).length} fiches</span><a class="btn ghost sm" href="#/${m.id}/cours" data-back>Cours</a><button class="btn ghost sm" data-train-c="${m.id}">S'entraîner</button></header>${bk.parts.filter(p => Object.keys(bk.notions).some(n => bk.notions[n].part === p.n)).map(p => `<div class="bf-src">${esc((p.roman ? p.roman + " · " : "") + p.label)}</div><div class="bf-list">${Object.keys(bk.notions).filter(n => bk.notions[n].part === p.n).map(n => { const x = bk.notions[n]; return `<button class="bf-row" data-ref="${m.id}|${n}"><b>${esc(x.title)}</b>${x.citation ? `<span>« ${esc(C.clip(x.citation, 120))} »</span>` : x.retenir && x.retenir[0] ? `<span>${esc(C.clip(x.retenir[0], 120))}</span>` : ""}</button>`; }).join("")}</div>`).join("")}</section>`; }).join("")}
      ${chosen.length ? `<section class="bf-n"><header><h3>Textes étudiés</h3><span class="muted small tabnum">${chosen.length}</span><button class="btn ghost sm" data-train-t>S'entraîner</button></header><div class="bf-list">${chosen.map(t => `<a class="bf-row" href="#/hlp/texte/${t.id}"><b>${esc(t.a.short)} · ${esc(t.title)}</b><span>${esc(t.short)}</span></a>`).join("")}</div></section>` : ""}
    </div>`;
    $$("[data-ref]", el).forEach(b => b.onclick = () => { const [bk, n] = b.dataset.ref.split("|"); C.ficheIn(bk, n); });
    $$("[data-back]", el).forEach(a => a.addEventListener("click", () => UI().markBack("Bac blanc")));
    $$("[data-train-c]", el).forEach(b => b.onclick = () => { const id = b.dataset.trainC; C.startIn(id, { title: "Bac blanc · " + courseTitle(id), ids: C.shuffle(C.BOOKS[id].exercises.filter(e => e.type !== "build").map(e => e.id)).slice(0, 15), back: "#/hlp/bac" }); });
    $$("[data-train-t]", el).forEach(b => b.onclick = () => trainTexts(chosen.map(t => t.id), "Bac blanc · textes", "#/hlp/bac"));
    if (!QUIET) X.stagger($$(".bf-row", el).slice(0, 14), { y: 6, step: 25 });
  }

  /* ---------- Plan : date du bac blanc, programme jour par jour, séance minutée ---------- */
  function hPlan(el, d, courses, chosen) {
    if (!courses.length && !chosen.length) { el.innerHTML = emptyB("Aucun chapitre choisi."); return; }
    const S = bacST(), M = window.RECTO_METHODE, mt = id => ((M && M.hlp.find(m => m.id === id)) || {}).title || (id === "grille" ? "Ce qui compte" : "Le jour J");
    const units = [];
    courses.forEach(m => { const bk = C.BOOKS[m.id]; if (!bk) return; bk.parts.forEach(p => { const fs2 = Object.keys(bk.notions).filter(k => bk.notions[k].part === p.n); if (fs2.length) units.push({ book: m.id, part: p.n, fiches: fs2, short: "Cours " + (p.roman || "intro") }); }); });
    /* Un texte = un bouton ; un auteur qui a deux textes est départagé par l'année, sinon par le titre */
    chosen.forEach(t => {
      const same = chosen.filter(o => o.author === t.author);
      const tag = same.length < 2 ? "" : same.every(o => o === t || o.yearN !== t.yearN) ? " " + t.year : " · " + (t.title.length > 28 ? t.title.slice(0, 27) + "…" : t.title);
      units.push({ book: "hlp-textes", fiches: [t.id], short: t.a.short + tag });
    });
    const items = makeItems(bacPool(H, C.BOOKS, { disc: d, chs: S.chs, texts: S.texts }), courses).filter(x => UI().CORR()[x.id]);
    UI().planTab(el, {
      state: S.plan, save: saveST, refresh, quiet: () => QUIET, home: "#/hlp/bac", label: "Bac blanc HLP",
      units, buildName: "Plans d'essai", methods: ["interpretation", "essai", "epreuve"], methodName: mt, bookName: b => b === "hlp-textes" ? "Textes étudiés" : courseTitle(b),
      subjects: us => { const fs2 = us.flatMap(u => u.fiches); const sc = x => x.kind === "interp" ? (fs2.includes(x.t) ? 2 : 0) : (x.refs || []).filter(r => fs2.includes(r[1])).length + (x.tx || []).filter(t => fs2.includes(t)).length; const hit = items.filter(x => sc(x) > 0).sort((a, b) => sc(b) - sc(a)); return (hit.length ? hit : items).map(x => ({ id: x.id, q: (x.kind === "interp" ? "Interprétation · " : "Essai · ") + x.q })); },
      open: u => { UI().markBack("Bac blanc"); location.hash = u.book === "hlp-textes" ? "#/hlp/impregner/" + u.fiches[0] : "#/" + u.book + "/cours?part=" + u.part; },
      act: b => {
        if (b.k === "exos" || b.k === "build") C.startIn(b.book, { title: b.k === "build" ? "Plans d'essai" : "Bac blanc · " + (b.book === "hlp-textes" ? "textes" : courseTitle(b.book)), ids: b.ids, from: b.k === "build" ? "reflexion" : undefined, back: "#/hlp/bac" });
        else if (b.k === "corr") location.hash = "#/hlp/bac?s=" + encodeURIComponent(b.id) + "&c=1";
        else if (b.k === "method") { S.tab = "methode"; S.mtab = b.tab === "grille" || b.tab === "jour" ? b.tab : b.tab; saveST(); refresh(); }
        else if (b.k === "mock") { if (!courses.length) { S.tab = "epreuve"; saveST(); refresh(); return; } S.fmt = b.min >= 240 ? "epreuve" : "essai"; hGenerate(null, d, courses); }
      }
    });
  }

  /* ---------- Méthode : l'épreuve, l'interprétation, l'essai ---------- */
  function hMethod(el) {
    const M = window.RECTO_METHODE, S = bacST();
    if (!M) { el.innerHTML = emptyB("Méthode indisponible."); return; }
    const cur = [...M.hlp.map(m => m.id), "grille", "jour"].includes(S.mtab) ? S.mtab : "epreuve";
    el.innerHTML = UI().methodHTML(M.hlp, cur, M);
    $$("[data-mt]", el).forEach(b => b.onclick = () => { S.mtab = b.dataset.mt; saveST(); refresh(); });
  }

  /* ---------- Corrigés : chaque sujet de la sélection, rédigé ---------- */
  function hCorriges(el, d, items) {
    if (!items.length) { el.innerHTML = emptyB(H.courses(d).length ? "Aucun sujet pour cette sélection." : "Corrigés à venir avec le cours de " + H.disciplines[d].title.toLowerCase() + "."); return; }
    const K2 = UI().CORR();
    el.innerHTML = `<div class="bac-list scroll">${items.map(s => { const L = itemLabel(s, d); return `<button class="bac-s ${s.kind === "interp" ? "expl" : "diss"}" data-s="${esc(s.id)}"><span class="bac-s-k">${esc(L.k)}</span><span class="bac-s-q">${esc(s.q)}</span>${L.x ? `<span class="bac-s-x">${esc(L.x)}</span>` : ""}<span class="bac-s-f">${doneBadge(s)}<span class="bac-s-go">${K2[s.id] ? "Corrigé" : "Plan"} ${C.ICON.chev}</span></span></button>`; }).join("")}</div>`;
    $$(".bac-s", el).forEach(b => b.onclick = () => { location.hash = "#/hlp/bac?s=" + encodeURIComponent(b.dataset.s) + "&c=1"; });
    if (!QUIET) X.stagger($$(".bac-s", el).slice(0, 10), { y: 8, step: 40 });
  }

  /* ---------- Épreuve ---------- */
  function lockHTML(el, d, chosen) {
    const D = H.disciplines[d], other = d === "litterature" ? /philosoph/i : /littéra/i;
    const sujets = chosen.flatMap(t => (t.manuel.bac || []).filter(b => !other.test(b.k)).map(b => ({ t, b })));
    el.innerHTML = `<div class="bac-lock">
      <span class="bac-lock-i">${LOCK}</span>
      <h2>Épreuve verrouillée</h2>
      <p>Les sujets viendront du cours de ${esc(D.title.toLowerCase())}, pas encore importé. Fiches et méthode disponibles.</p>
      ${sujets.length ? `<div class="bac-docsuj"><div class="eyebrow">Sujets relevés dans les documents</div><ul>${sujets.map(x => `<li><span class="tag ghost">${esc(x.b.k)}</span>${esc(x.b.q)} <a href="#/hlp/texte/${x.t.id}?tab=dissertation">${esc(x.t.a.short)}</a></li>`).join("")}</ul></div>` : ""}
    </div>`;
  }
  function hGenerate(btn, d, courses) {
    const S = bacST();
    loadAll(courses, () => {
      const items = makeItems(bacDraw(H, C.BOOKS, { disc: d, chs: S.chs, texts: S.texts }, S.fmt, S.recent), courses);
      if (!items.length) return toast("Aucun sujet pour cette sélection.");
      S.n = (S.n || 0) + 1;
      S.draw = { disc: d, chs: S.chs.slice(), texts: S.texts.slice(), fmt: S.fmt, items, at: Date.now(), n: S.n };
      S.recent = items.map(x => x.id).concat(S.recent).slice(0, 24);
      S.timer = null; S.tab = "epreuve";
      saveST();
      JUMP = true;
      if (btn) { X.pop(btn); X.burst(btn, { count: 10 }); }
      if (location.hash !== "#/hlp/bac") location.hash = "#/hlp/bac"; else C.rerender();
    });
  }
  function itemLabel(s, d) {
    if (s.kind === "interp") { const t = H.T[s.t]; return { k: fmtName("interpretation", d) + " · " + t.a.short, x: `${t.a.name}, ${t.work}${t.ref ? ", " + t.ref : ""}` }; }
    return { k: fmtName("essai", d), x: s.tx.length ? "Textes : " + [...new Set(s.tx.map(id => H.T[id].a.short))].join(", ") : "" };
  }
  function hSheet(el, d) {
    const S = bacST(), Dr = S.draw, D = H.disciplines[d];
    if (!Dr || Dr.disc !== d) { el.innerHTML = emptyB("Choisir l'exercice, puis générer le sujet."); return; }
    const F = HFMT[Dr.fmt] || HFMT.epreuve;
    const mixed = Dr.chs.join() !== S.chs.join() || Dr.texts.join() !== S.texts.join() || Dr.fmt !== S.fmt;
    const dated = new Date(Dr.at).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
    const ep = Dr.fmt === "epreuve";
    el.innerHTML = `
      <header class="bac-sheet-h">
        <div><div class="eyebrow">Bac blanc HLP n° ${Dr.n || 1} · ${esc(dated)} · ${esc(fmtName(Dr.fmt, d))}</div>
          <h2>${ep ? "Le texte, puis l'essai" : Dr.items.length > 1 ? "Un sujet au choix" : "Sujet"}</h2>
          <div class="bac-tags"><span class="tag">${esc(D.title)}</span>${Dr.chs.map(id => `<span class="tag ghost">Ch. ${H.CH[id].n}</span>`).join("")}<span class="tag ghost">${F.minutes / 60} h</span></div></div>
        ${timerHTML()}
      </header>
      ${mixed ? `<p class="note bac-mixed">Sélection modifiée depuis ce tirage.</p>` : ""}
      <div class="bac-list scroll">
        ${Dr.items.map((s, i) => { const L = itemLabel(s, d); return `<button class="bac-s ${s.kind === "interp" ? "expl" : "diss"}" data-s="${esc(s.id)}"><span class="bac-s-k">${ep ? "Question " + (i + 1) : "Sujet " + (i + 1)} · ${esc(L.k)}</span><span class="bac-s-q">${esc(s.q)}</span>${L.x ? `<span class="bac-s-x">${esc(L.x)}</span>` : ""}<span class="bac-s-f">${doneBadge(s)}<span class="bac-s-go">Traiter ${C.ICON.chev}</span></span></button>`; }).join("")}
        ${ep ? `<p class="note">À l'épreuve, l'essai porte sur l'autre discipline ; ici, tout reste en ${esc(D.title.toLowerCase())}.</p>` : ""}
      </div>`;
    $$(".bac-s", el).forEach(b => b.onclick = () => { location.hash = "#/hlp/bac?s=" + encodeURIComponent(b.dataset.s); });
    bindTimer(el);
    if (!QUIET) X.stagger($$(".bac-s", el), { y: 10, step: 70 });
  }
  function timerHTML() {
    const t = bacST().timer;
    if (!t) return `<button class="btn secondary sm bac-timer" id="tStart">Chrono</button>`;
    return `<div class="bac-clock"><span class="tabnum" id="tLeft"></span><small>restant</small><button class="btn ghost gray sm" id="tStop">Arrêter</button></div>`;
  }
  function bindTimer(el) {
    const S = bacST();
    const st = $("#tStart", el);
    if (st) st.onclick = () => { S.timer = { start: Date.now(), min: (HFMT[(S.draw || {}).fmt] || HFMT.epreuve).minutes }; saveST(); refresh(); };
    const sp = $("#tStop", el);
    if (sp) sp.onclick = () => { S.timer = null; saveST(); refresh(); };
    const left = $("#tLeft", el);
    if (!left || !S.timer) return;
    const tick = () => { const ms = S.timer.start + S.timer.min * 60000 - Date.now(); left.textContent = ms > 0 ? C.fmtHMS(ms) : "Temps écoulé"; left.classList.toggle("late", ms <= 0); };
    tick();
    const iv = setInterval(tick, 1000);
    C.onClean(() => clearInterval(iv));
  }

  /* ---------- Traiter un sujet : préparation guidée, puis corrigé rédigé ---------- */
  function hWorkspace(main, s, d, showCorr) {
    const S = bacST(), step = UI().step;
    const back = `<button class="btn ghost sm bac-back" id="wBack">${ICON.back} Retour</button>`;
    const refsHTML = s.refs && s.refs.length
      ? `<div class="bac-refs">${s.refs.map(r => `<button class="chip" data-ref="${r[0]}|${r[1]}"><span class="bk">Cours</span>${esc(r[2])}</button>`).join("")}</div>`
      : `<p class="note">Aucune.</p>`;
    const draft = `<label class="bac-draft"><span>Brouillon</span><textarea id="wDraft" rows="4" placeholder="${s.kind === "interp" ? "Ce que le texte affirme, comment, réponse à la question…" : "Définitions, problématique, plan…"}">${esc(S.drafts[s.id] || "")}</textarea></label>`;
    const selfHTML = `<div class="bac-self-end"><span>Bilan</span>${SELF.map(([k, l]) => `<button class="btn sm ${S.done[s.id] && S.done[s.id].r === k ? "secondary on" : "ghost gray"}" data-r="${k}">${esc(l)}</button>`).join("")}</div>`;
    const corr = `<div class="bac-corr"><div class="eyebrow hlp">Corrigé</div>${UI().corrigeHTML(UI().CORR()[s.id], showCorr)}</div>`;
    if (s.kind === "interp") {
      const t = H.T[s.t];
      main.innerHTML = `
        <header class="bac-ws-h">${back}<div class="eyebrow">${esc(fmtName("interpretation", d))} · ${esc(t.a.name)}</div><div class="bac-tags">${doneBadge(s)}</div>${timerHTML()}</header>
        <div class="bac-ws two">
          <article class="bac-text scroll">
            <p class="bac-consigne">${s.doc ? "Question du manuel" : "Question d'interprétation"}</p>
            <h2 class="bac-ws-q">${esc(s.q)}</h2>
            <p class="bac-src">${esc(t.a.name)}, ${esc(t.work)}${t.ref ? ", " + esc(t.ref) : ""} · ${esc(t.year)}</p>
            <div class="eyebrow">Passages clés</div>
            <ul class="bac-notes">${t.citations.slice(0, 4).map(c => `<li>« ${esc(c.t)} »${c.where ? ` <span class="muted">(${esc(c.where)})</span>` : ""}</li>`).join("")}</ul>
            <a class="btn ghost sm" href="#/hlp/texte/${t.id}">Fiche du texte</a>
          </article>
          <div class="bac-guide scroll">
            ${showCorr ? corr : draft}
            ${step(1, "Sujet du texte", `<p>${esc(t.sujet)}</p><p class="note">${esc(t.problematique)}</p>`)}
            ${step(2, "Thèse", `<p>${esc(t.these)}</p>`)}
            ${step(3, "Arguments", `<ol class="bac-plan">${t.arguments.map(a => `<li>${esc(a)}</li>`).join("")}</ol>`)}
            ${step(4, "Citations à exploiter", `<ul>${t.citations.map(c => `<li><b>« ${esc(c.t)} »</b> ${esc(c.sens)}</li>`).join("")}</ul>`)}
            ${step(5, "Fiches du cours", refsHTML)}
            ${step(6, "Piège", `<p>${esc(t.piege || "")}</p>`)}
            ${showCorr ? "" : corr}
            ${selfHTML}
          </div>
        </div>`;
    } else {
      const txHTML = s.tx.length
        ? `<ul class="bac-tx">${s.tx.map(id => { const t = H.T[id]; return `<li><a href="#/hlp/texte/${id}"><b>${esc(t.a.short)}</b> · « ${esc(t.title)} »</a><span>${esc(t.short)}</span></li>`; }).join("")}</ul>`
        : `<p class="note">Aucun.</p>`;
      main.innerHTML = `
        <header class="bac-ws-h">${back}<div class="eyebrow">${esc(fmtName("essai", d))} · ${esc(courseTitle(s.b))}</div><div class="bac-tags">${doneBadge(s)}</div>${timerHTML()}</header>
        <div class="bac-ws">
          <h2 class="bac-ws-q">${esc(s.q)}</h2>
          <div class="bac-guide scroll">
            ${showCorr ? corr : draft}
            ${step(1, "Analyse du sujet", `<p>Définir chaque mot du sujet, repérer ce qu'il présuppose.</p>`)}
            ${step(2, "Problématique", `<p>${esc(s.prob)}</p>`)}
            ${step(3, "Plan", `<ol class="bac-plan">${s.plan.map(p => `<li>${esc(p)}</li>`).join("")}</ol>${s.cit ? `<p class="bac-cit">« ${esc(s.cit)} »</p>` : ""}`)}
            ${step(4, "Fiches du cours", refsHTML)}
            ${step(5, "Textes à mobiliser", txHTML)}
            ${step(6, "Pièges", s.pieges.length ? `<ul>${s.pieges.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : `<p class="note">Aucun.</p>`)}
            ${showCorr ? "" : corr}
            <div class="bac-train"><div><b>S'entraîner au plan</b><span>Choisir les arguments, comparer au plan modèle.</span></div><button class="btn secondary sm" id="wTrain">Lancer</button></div>
            ${selfHTML}
          </div>
        </div>`;
      $("#wTrain", main).onclick = () => C.startIn(s.b, { title: "Sujet d'essai", ids: [s.e], from: "reflexion", back: location.hash });
    }
    $("#wBack", main).onclick = () => { location.hash = "#/hlp/bac"; };
    UI().bindSteps(main);
    const ta = $("#wDraft", main);
    if (ta) ta.addEventListener("input", () => { S.drafts[s.id] = ta.value.slice(0, 6000); saveST(); });
    $$(".bac-self-end [data-r]", main).forEach(b => b.onclick = () => { S.done[s.id] = { r: b.dataset.r, at: Date.now() }; saveST(); $$(".bac-self-end [data-r]", main).forEach(x => { x.className = "btn sm " + (x === b ? "secondary on" : "ghost gray"); }); if (b.dataset.r === "ok") { X.pop(b); X.burst(b, { count: 12 }); } toast("Noté."); });
    $$("[data-ref]", main).forEach(b => b.onclick = e => { e.stopPropagation(); const [bk, n] = b.dataset.ref.split("|"); C.ficheIn(bk, n); });
    bindTimer(main);
  }
})();
