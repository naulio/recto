/* Recto · Bac blanc.
   1. Un moteur de tirage, indépendant de l'interface (testé par tests/verifier.js) :
      il ne propose que des sujets dont TOUTES les notions ont été choisies.
   2. L'écran « Bac blanc » du tronc commun : choix des notions et du format, tirage, sujet à travailler.
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

  /* =========================================================
     Écran du tronc commun
     ========================================================= */
  const C = Recto.core;
  if (!C || typeof document === "undefined") return;
  const { $, $$, esc, toast, store, X } = C;
  const K = "recto.bac.tc";
  const ST = Object.assign({ sel: [], fmt: "epreuve", draw: null, recent: [], done: {}, drafts: {}, qres: {}, timer: null, n: 0 }, store.get(K) || {});
  const saveST = () => store.set(K, ST);
  let BANK = null, SUBJ = null, LOADING = false, QUIET = false, JUMP = false;
  const refresh = () => { QUIET = true; C.rerender(); };
  const WAITERS = [];

  /* Chargement : la banque de sujets, puis les contenus du tronc commun dont elle dépend */
  Recto.bacLoaded = function () { BANK = window.RECTO_BAC_TC; };
  function ensure(cb) {
    if (SUBJ) return cb();
    WAITERS.push(cb);
    if (LOADING) return;
    LOADING = true;
    const done = () => { LOADING = false; SUBJ = Engine.build(BANK, C.BOOKS); WAITERS.splice(0).forEach(f => f()); };
    const books = () => {
      const ids = [...new Set(BANK.notions.flatMap(n => n.src.map(s => s.b)))].filter(id => C.LIB.some(m => m.id === id));
      let left = ids.length; if (!left) return done();
      ids.forEach(id => C.loadBook(id, () => { if (!--left) done(); }));
    };
    if (BANK) return books();
    const s = document.createElement("script");
    s.src = "contenus/bac/tronc-commun.js?v=" + C.V;
    s.onload = () => { BANK = window.RECTO_BAC_TC; books(); };
    s.onerror = () => { LOADING = false; WAITERS.length = 0; toast("Impossible de charger le bac blanc."); };
    document.head.appendChild(s);
  }

  const NOT = id => BANK.notions.find(n => n.id === id);
  const nTitle = id => (NOT(id) || { title: id }).title;
  const byId = id => SUBJ.find(s => s.id === id);
  const KIND_LABEL = { diss: "Dissertation", expl: "Explication de texte", quest: "Question de réflexion" };
  const refTitle = ([b, n]) => { const x = C.notion(b, n); return x ? x.title : n; };
  const bookShort = b => ({ "le-langage": "Le langage", "l-art": "L'art", "discours-de-la-methode": "Discours" })[b] || ((C.LIB.find(m => m.id === b) || {}).title || b);
  const SELF = [["ok", "J'avais l'essentiel"], ["mid", "En partie"], ["ko", "À retravailler"]];

  /* Une dissertation, une explication ou une question, avec les notions qu'elle mobilise */
  const nsTags = s => s.ns.map(n => `<span class="tag ghost">${esc(nTitle(n))}</span>`).join("");
  const doneBadge = s => { const d = ST.done[s.id]; return d ? `<span class="bac-done ${d.r}">${esc((SELF.find(x => x[0] === d.r) || [])[1] || "")}</span>` : ""; };

  C.VIEWS.tcbac = function (root, prm) {
    root.innerHTML = `<section class="view bac"><div class="card bac-pick"><div class="eyebrow accent">Bac blanc · Philosophie</div><h1>Choisis tes notions</h1><div class="sk-lines"><i></i><i></i><i></i></div></div><div class="card bac-main"></div></section>`;
    ensure(() => { if (C.view() === "tcbac") draw(root, prm); });
  };

  function draw(root, prm) {
    const sel = ST.sel.filter(id => NOT(id));
    ST.sel = sel;
    const cnt = Engine.counts(SUBJ, sel);
    const F = FORMATS[ST.fmt] ? ST.fmt : "epreuve";
    const subj = prm.s && byId(prm.s);
    root.innerHTML = `
    <section class="view bac">
      <aside class="card bac-pick">
        <div class="eyebrow accent">Bac blanc · Philosophie, tronc commun</div>
        <h1>Choisis tes notions</h1>
        <div class="bac-quick"><button class="btn ghost sm" id="bAll">Toutes</button><button class="btn ghost gray sm" id="bNone">Aucune</button><span class="bac-count">${sel.length} / ${BANK.notions.length}</span></div>
        <div class="bac-notions" role="group" aria-label="Notions">${BANK.notions.map(n => {
          const on = sel.includes(n.id), c = Engine.counts(SUBJ, [n.id]);
          return `<button class="bac-n ${on ? "on" : ""}" data-n="${n.id}" aria-pressed="${on}"><span class="bx">${C.ICON.check}</span><span class="bt"><b>${esc(n.title)}</b><small>${esc(n.src.map(s => bookShort(s.b) + " · " + s.label).join(" — "))}</small></span><span class="bc tabnum" title="Sujets de dissertation et textes portant sur cette seule notion">${c.diss + c.expl}</span></button>`;
        }).join("")}</div>
        <p class="bac-hlp">« L'éducation » et « La recherche de soi » sont des intitulés de ta spécialité HLP, pas des notions du tronc commun. <a href="#/hlp/bac">Bac blanc HLP</a></p>
        <div class="bac-sec">Format</div>
        <div class="bac-fmts">${Object.keys(FORMATS).map(k => `<button class="bac-f ${k === F ? "on" : ""}" data-f="${k}"><b>${esc(FORMATS[k].label)}</b><small>${esc(FORMATS[k].sub)}</small></button>`).join("")}</div>
        <div class="bac-go">
          <p class="note" id="bSum">${sel.length ? `Sur ${esc(sel.map(nTitle).join(", "))} : ${cnt.diss} dissertation${cnt.diss > 1 ? "s" : ""}, ${cnt.expl} texte${cnt.expl > 1 ? "s" : ""}, ${cnt.quest} questions.` : "Choisis au moins une notion."}</p>
          <button class="btn primary lg" id="bGen" ${sel.length ? "" : "disabled"}>${ST.draw ? "Nouveau sujet" : "Générer le sujet"}</button>
        </div>
      </aside>
      <div class="card bac-main" id="bMain"></div>
    </section>`;
    $$(".bac-n", root).forEach(b => b.onclick = () => { const id = b.dataset.n; ST.sel = ST.sel.includes(id) ? ST.sel.filter(x => x !== id) : BANK.notions.map(n => n.id).filter(x => x === id || ST.sel.includes(x)); saveST(); refresh(); });
    $("#bAll", root).onclick = () => { ST.sel = BANK.notions.map(n => n.id); saveST(); refresh(); };
    $("#bNone", root).onclick = () => { ST.sel = []; saveST(); refresh(); };
    $$(".bac-f", root).forEach(b => b.onclick = () => { ST.fmt = b.dataset.f; saveST(); refresh(); });
    $("#bGen", root).onclick = e => generate(root, e.currentTarget);
    const main = $("#bMain", root);
    $(".bac", root).classList.toggle("ws-open", !!subj);
    if (subj) workspace(main, subj);
    else sheet(main, root);
    /* Sur téléphone, le sujet est sous le choix des notions : on y descend après un tirage */
    if (JUMP && window.matchMedia && matchMedia("(max-width: 1080px)").matches) setTimeout(() => {
      const top = Math.max(0, main.getBoundingClientRect().top + window.scrollY - 64);
      window.scrollTo({ top, behavior: "smooth" });
      setTimeout(() => { if (Math.abs(window.scrollY - top) > 40) window.scrollTo(0, top); }, 700);
    }, 60);
    JUMP = false;
    if (!QUIET) X.stagger($$(".bac-n", root), { y: 6, step: 30 });
    QUIET = false;
  }

  function generate(root, btn) {
    if (!ST.sel.length) return toast("Choisis au moins une notion.");
    const d = Engine.draw(SUBJ, ST.sel, ST.fmt, ST.recent);
    const ids = d.diss.concat(d.expl, d.quest).map(s => s.id);
    if (!ids.length) return toast("Aucun sujet pour cette sélection.");
    ST.n = (ST.n || 0) + 1;
    ST.draw = { sel: ST.sel.slice(), fmt: ST.fmt, ids, at: Date.now(), n: ST.n };
    ST.recent = ids.concat(ST.recent).slice(0, 24);
    ST.timer = null; ST.qres = {};
    saveST();
    JUMP = true;
    if (btn) { X.pop(btn); X.burst(btn, { count: 10 }); }
    if (location.hash !== "#/tronc-commun/bac-blanc") location.hash = "#/tronc-commun/bac-blanc";
    else C.rerender();
  }

  /* ---------- La feuille de sujets ---------- */
  function sheet(main, root) {
    const D = ST.draw;
    if (!D) {
      main.innerHTML = `<div class="bac-empty"><div class="bac-empty-in"><div class="eyebrow">Comme le jour de l'épreuve</div><h2>Ton sujet apparaîtra ici</h2>
        <p>Choisis une ou plusieurs notions, puis un format. Le sujet ne porte que sur les notions cochées : avec une seule notion, il n'en sort pas ; avec plusieurs, au moins un sujet les fait se rencontrer.</p>
        <ol class="bac-how"><li><b>Épreuve complète</b><span>Deux sujets de dissertation et un texte à expliquer, au choix, comme au bac (4 h).</span></li><li><b>Travailler un sujet</b><span>Analyse, problématique, plan, références du cours et pièges, à découvrir étape par étape.</span></li><li><b>Questions de réflexion</b><span>Pour vérifier que les notions sont comprises, avant de se lancer.</span></li></ol></div></div>`;
      return;
    }
    const list = D.ids.map(byId).filter(Boolean);
    const F = FORMATS[D.fmt] || FORMATS.epreuve;
    const mixed = D.sel.join() !== ST.sel.join() || D.fmt !== ST.fmt;
    const dated = new Date(D.at).toLocaleDateString("fr-FR", { day: "numeric", month: "long" });
    const quests = list.filter(s => s.kind === "quest"), others = list.filter(s => s.kind !== "quest");
    main.innerHTML = `
      <header class="bac-sheet-h">
        <div><div class="eyebrow">Bac blanc n° ${D.n || 1} · ${esc(dated)} · ${esc(F.label)}</div>
          <h2>${others.length ? (others.length > 1 ? "Tu traites un sujet au choix" : "Ton sujet") : "Questions de réflexion"}</h2>
          <div class="bac-tags">${D.sel.map(n => `<span class="tag">${esc(nTitle(n))}</span>`).join("")}<span class="tag ghost">${F.minutes >= 60 ? F.minutes / 60 + " heures" : F.minutes + " min"}</span></div></div>
        ${timerHTML()}
      </header>
      ${mixed ? `<p class="note bac-mixed">Ta sélection a changé depuis ce tirage : clique « Nouveau sujet » pour en tenir compte.</p>` : ""}
      <div class="bac-list scroll">
        ${others.map((s, i) => `<button class="bac-s ${s.kind}" data-s="${esc(s.id)}"><span class="bac-s-k">Sujet ${i + 1} · ${KIND_LABEL[s.kind]}${s.kind === "expl" ? " · " + esc(s.author) : ""}</span><span class="bac-s-q">${esc(s.kind === "expl" ? "Expliquez le texte suivant : " + s.src : s.q)}</span>${s.kind === "expl" ? `<span class="bac-s-x">« ${esc(C.clip(s.text, 150))} »</span>` : ""}<span class="bac-s-f">${nsTags(s)}${doneBadge(s)}<span class="bac-s-go">Travailler ce sujet ${C.ICON.chev}</span></span></button>`).join("")}
        ${quests.length ? `<div class="bac-qs">${quests.map((s, i) => questHTML(s, i)).join("")}</div><p class="note bac-qsum" id="qSum"></p>` : ""}
      </div>`;
    $$(".bac-s", main).forEach(b => b.onclick = () => { location.hash = "#/tronc-commun/bac-blanc?s=" + encodeURIComponent(b.dataset.s); });
    bindTimer(main);
    bindQuests(main);
    if (!QUIET) X.stagger($$(".bac-s, .bac-q", main), { y: 10, step: 70 });
  }

  function questHTML(s, i) {
    const r = ST.qres[s.id];
    return `<div class="bac-q ${r ? "shown" : ""}" data-q="${esc(s.id)}">
      <div class="bac-q-h"><span class="bac-q-n">${i + 1}</span><b>${esc(s.q)}</b></div>
      <div class="bac-q-tags">${nsTags(s)}<span class="tag ghost">${(C.LIB.find(m => m.id === s.from) || {}).type === "livre" ? "Livre" : "Cours"} · ${esc(bookShort(s.from))}</span></div>
      <div class="bac-q-a" ${r ? "" : "hidden"}><p>${esc(s.a || "")}</p>${s.plan && s.plan.length ? `<ol>${s.plan.map(p => `<li>${esc(p)}</li>`).join("")}</ol>` : ""}
        <div class="bac-q-refs">${(s.refs || []).filter(r => C.notion(r[0], r[1])).map(r => `<button class="chip" data-ref="${r[0]}|${r[1]}">${esc(refTitle(r))}</button>`).join("")}</div>
        <div class="bac-self">${SELF.map(([k, l]) => `<button class="btn sm ${r === k ? "secondary on" : "ghost gray"}" data-r="${k}">${esc(l)}</button>`).join("")}</div></div>
      ${r ? "" : `<button class="btn secondary sm bac-q-show">Réfléchis, puis vois les éléments attendus</button>`}
    </div>`;
  }
  function bindQuests(main) {
    const upd = () => { const el = $("#qSum", main); if (!el) return; const v = Object.values(ST.qres); el.textContent = v.length ? `${v.filter(x => x === "ok").length} acquise${v.filter(x => x === "ok").length > 1 ? "s" : ""}, ${v.filter(x => x === "mid").length} en partie, ${v.filter(x => x === "ko").length} à retravailler.` : "Réponds de tête ou par écrit, puis compare avec les éléments attendus."; };
    $$(".bac-q", main).forEach(q => {
      const sh = $(".bac-q-show", q);
      if (sh) sh.onclick = () => { $(".bac-q-a", q).hidden = false; sh.remove(); q.classList.add("shown"); };
      $$("[data-r]", q).forEach(b => b.onclick = () => { ST.qres[q.dataset.q] = b.dataset.r; saveST(); $$("[data-r]", q).forEach(x => { x.className = "btn sm " + (x === b ? "secondary on" : "ghost gray"); }); if (b.dataset.r === "ok") X.pop(b); upd(); });
    });
    bindRefs(main);
    upd();
  }
  function bindRefs(el) {
    $$("[data-ref]", el).forEach(b => b.onclick = e => { e.stopPropagation(); const [bk, n] = b.dataset.ref.split("|"); C.ficheIn(bk, n); });
  }

  /* ---------- Chronomètre de l'épreuve ---------- */
  function timerHTML() {
    const t = ST.timer;
    if (!t) return `<button class="btn secondary sm bac-timer" id="tStart">Lancer le chrono</button>`;
    return `<div class="bac-clock"><span class="tabnum" id="tLeft"></span><small>restant</small><button class="btn ghost gray sm" id="tStop">Arrêter</button></div>`;
  }
  function bindTimer(main) {
    const st = $("#tStart", main);
    if (st) st.onclick = () => { const F = FORMATS[(ST.draw || {}).fmt] || FORMATS.epreuve; ST.timer = { start: Date.now(), min: F.minutes }; saveST(); refresh(); };
    const sp = $("#tStop", main);
    if (sp) sp.onclick = () => { ST.timer = null; saveST(); refresh(); };
    const left = $("#tLeft", main);
    if (!left || !ST.timer) return;
    const tick = () => { const ms = ST.timer.start + ST.timer.min * 60000 - Date.now(); left.textContent = ms > 0 ? C.fmtHMS(ms) : "Temps écoulé"; left.classList.toggle("late", ms <= 0); };
    tick();
    const iv = setInterval(tick, 1000);
    C.onClean(() => clearInterval(iv));
  }

  /* ---------- Travailler un sujet ---------- */
  function step(k, title, body, open) {
    return `<section class="bac-step ${open ? "open" : ""}" data-k="${k}"><header><span class="bac-step-n">${k}</span><h4>${esc(title)}</h4>${open ? "" : `<button class="btn ghost sm" data-open>Afficher</button>`}</header><div class="bac-step-b" ${open ? "" : "hidden"}>${body}</div></section>`;
  }
  function workspace(main, s) {
    const back = `<button class="btn ghost sm bac-back" id="wBack">${C.ICON.back} Retour au sujet</button>`;
    const refs = (s.refs || []).filter(r => C.notion(r[0], r[1]));
    const refsHTML = refs.length ? `<div class="bac-refs">${refs.map(r => `<button class="chip" data-ref="${r[0]}|${r[1]}"><span class="bk">${esc(bookShort(r[0]))}</span>${esc(refTitle(r))}</button>`).join("")}</div><p class="note">Touche une référence pour ouvrir la fiche du cours.</p>` : `<p class="note">Pas de référence liée.</p>`;
    const draft = `<label class="bac-draft"><span>Ton brouillon (gardé sur cet appareil)</span><textarea id="wDraft" rows="4" placeholder="${s.kind === "expl" ? "La thèse, le problème, les étapes du texte…" : "Tes définitions, ta problématique, tes idées de plan…"}">${esc(ST.drafts[s.id] || "")}</textarea></label>`;
    const selfHTML = `<div class="bac-self-end"><span>Bilan de ce sujet</span>${SELF.map(([k, l]) => `<button class="btn sm ${ST.done[s.id] && ST.done[s.id].r === k ? "secondary on" : "ghost gray"}" data-r="${k}">${esc(l)}</button>`).join("")}</div>`;
    if (s.kind === "expl") {
      main.innerHTML = `
        <header class="bac-ws-h">${back}<div class="eyebrow">Explication de texte · ${esc(s.author)}</div><div class="bac-tags">${nsTags(s)}${doneBadge(s)}</div>${timerHTML()}</header>
        <div class="bac-ws two">
          <article class="bac-text scroll"><p class="bac-consigne">Expliquez le texte suivant :</p><blockquote>${esc(s.text)}</blockquote><p class="bac-src">${esc(s.src)}</p>${s.notes && s.notes.length ? `<ul class="bac-notes">${s.notes.map(n => `<li>${esc(n)}</li>`).join("")}</ul>` : ""}</article>
          <div class="bac-guide scroll">
            ${draft}
            ${step(1, "Le problème", `<p>${esc(s.probleme)}</p>`)}
            ${step(2, "La thèse", `<p>${esc(s.these)}</p>`)}
            ${step(3, "Le mouvement du texte", `<ol class="bac-mvt">${s.mouvement.map(m => `<li><b>« ${esc(m.from)} »</b><span>${esc(m.t)}</span></li>`).join("")}</ol>`)}
            ${step(4, "L'enjeu", `<p>${esc(s.enjeux)}</p>`)}
            ${step(5, "Questions pour expliquer", `<ul>${s.questions.map(q => `<li>${esc(q)}</li>`).join("")}</ul>`)}
            ${step(6, "Références du cours", refsHTML)}
            ${step(7, "Le piège", `<p>${esc(s.piege)}</p>`)}
            ${selfHTML}
          </div>
        </div>`;
    } else {
      const ex = s.ex && C.BOOKS[s.ex.b];
      main.innerHTML = `
        <header class="bac-ws-h">${back}<div class="eyebrow">Dissertation${s.from ? " · sujet du cours « " + esc(bookShort(s.from)) + " »" : ""}</div><div class="bac-tags">${nsTags(s)}${doneBadge(s)}</div>${timerHTML()}</header>
        <div class="bac-ws">
          <h2 class="bac-ws-q">${esc(s.q)}</h2>
          <div class="bac-guide scroll">
            ${draft}
            ${step(1, "Analyser le sujet", s.termes ? `<ul>${s.termes.map(t => `<li>${esc(t)}</li>`).join("")}</ul>` : `<p>Définis chaque mot du sujet, repère ce que la question suppose, puis reformule-la. Ensuite seulement, compare avec la problématique proposée.</p>`)}
            ${step(2, "Une problématique", `<p>${esc(s.prob || "")}</p>`)}
            ${step(3, "Un plan possible", `<ol class="bac-plan">${(s.plan || []).map(p => `<li>${esc(p)}</li>`).join("")}</ol>${s.cit ? `<p class="bac-cit">Citation clé : « ${esc(s.cit)} »</p>` : ""}`)}
            ${step(4, "Références du cours", refsHTML)}
            ${step(5, "Pièges à éviter", s.pieges && s.pieges.length ? `<ul>${s.pieges.map(p => `<li>${esc(p)}</li>`).join("")}</ul>` : `<p>${esc(s.piege || "")}</p>`)}
            ${ex ? `<div class="bac-train"><div><b>S'entraîner au plan</b><span>Choisis les arguments qui répondent au sujet, puis compare au plan modèle (exercice du cours).</span></div><button class="btn secondary sm" id="wTrain">Lancer</button></div>` : ""}
            ${selfHTML}
          </div>
        </div>`;
      const tr = $("#wTrain", main);
      if (tr) tr.onclick = () => C.startIn(s.ex.b, { title: "Sujet de dissertation", ids: [s.ex.id], from: "reflexion", back: location.hash });
    }
    $("#wBack", main).onclick = () => { location.hash = "#/tronc-commun/bac-blanc"; };
    $$(".bac-step", main).forEach(sec => { const b = $("[data-open]", sec); if (b) b.onclick = () => { sec.classList.add("open"); $(".bac-step-b", sec).hidden = false; b.remove(); X.stagger([$(".bac-step-b", sec)], { y: 6 }); }; });
    const ta = $("#wDraft", main);
    if (ta) ta.addEventListener("input", () => { ST.drafts[s.id] = ta.value.slice(0, 6000); saveST(); });
    $$(".bac-self-end [data-r]", main).forEach(b => b.onclick = () => { ST.done[s.id] = { r: b.dataset.r, at: Date.now() }; saveST(); $$(".bac-self-end [data-r]", main).forEach(x => { x.className = "btn sm " + (x === b ? "secondary on" : "ghost gray"); }); if (b.dataset.r === "ok") { X.pop(b); X.burst(b, { count: 12 }); } toast("Noté. Il apparaîtra sur la feuille de sujets."); });
    bindRefs(main);
    bindTimer(main);
  }
})();
