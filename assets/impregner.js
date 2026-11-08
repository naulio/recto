/* Recto · S'imprégner d'un texte, retenir une citation (spécialité HLP).
   Une visite guidée : le plan reste caché, seul « Étape suivante » est visible. But : retenir l'idée
   d'un texte, son auteur, son époque, et ses citations mot pour mot. Chaque visite tire des méthodes
   différentes dans une réserve (mémoire du temps, de l'ordre, des mots, de l'usage), puis des rappels
   espacés (1, 3, 7, 21 jours). Tout est tiré des fiches de contenus/hlp/hlp.js.
   Vues : #/hlp/impregner/<texte> (visite ; ?r=1 rappel), #/hlp/citation/<texte>?i=<n> (citations),
   #/hlp/jour (« Les 3 du jour »). */
(function () {
  "use strict";
  const C = Recto.core, { $, $$, esc, store, X, ICON } = C;
  const K = "recto.hlp.imp", KQ = "recto.hlp.cit", KD = "recto.hlp.jour", KB = "recto.hlp.blitz";
  const DAY = 864e5, GAPS = [1, 3, 7, 21];
  const all = () => store.get(K) || {};
  const rec = id => all()[id] || null;
  const put = (id, r) => { const A = all(); A[id] = r; store.set(K, A); };
  const due = id => { const r = rec(id); return !!(r && r.next && r.next <= Date.now()); };
  const qall = () => store.get(KQ) || {};
  const qkey = (t, i) => t.id + "#" + i;
  const qrec = k => qall()[k] || null;
  const qput = (k, r) => { const A = qall(); A[k] = r; store.set(KQ, A); };
  const schedule = (r, ok) => { r.n = ok ? (r.n || 0) + 1 : 1; r.last = Date.now(); r.next = Date.now() + GAPS[Math.min(r.n, GAPS.length) - 1] * DAY; return r; };
  const fold = s => String(s == null ? "" : s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[’']/g, "'");
  const md = s => esc(s).replace(/\*(.+?)\*/g, "<i>$1</i>");
  const dayFR = ts => new Date(ts).toLocaleDateString("fr-FR", { weekday: "long", day: "numeric", month: "long" });
  const dkey = d => { const x = new Date(d); return x.getFullYear() + "-" + String(x.getMonth() + 1).padStart(2, "0") + "-" + String(x.getDate()).padStart(2, "0"); };
  const ROMAN = { 15: "XV", 16: "XVI", 17: "XVII", 18: "XVIII", 19: "XIX", 20: "XX", 21: "XXI" };
  const pickN = (a, n) => C.shuffle(a).slice(0, n);
  const shuffled = (a, keep) => { let s; let n = 0; do { s = C.shuffle(a); n++; } while (keep && a.length > 2 && n < 8 && s.every((x, i) => x === a[i])); return s; };
  const chapOf = (t, H) => H.texts.filter(x => x.chapter === t.chapter);

  /* ---------- Repère personnel : huit symboles au trait ---------- */
  const SYM = {
    cle: ["La clé", '<circle cx="8" cy="8" r="4"/><path d="M11 11l9 9M16 16l2-2M18.5 18.5l2-2"/>'],
    chaine: ["La chaîne", '<path d="M10 14a4 4 0 0 1 0-5.66l2.83-2.83a4 4 0 0 1 5.66 5.66L17 12.6"/><path d="M14 10a4 4 0 0 1 0 5.66l-2.83 2.83a4 4 0 0 1-5.66-5.66L7 11.4"/>'],
    oiseau: ["L'oiseau", '<path d="M3 14c3.5 0 5.5-3.5 9-3.5 2.5 0 3.5 1.5 5.5 1.5 1.6 0 3-1 3.5-1.5-.5 4-3.5 7-9 7-4 0-7-1.5-9-3.5z"/><path d="M12 10.5C12 7 14 4.5 17 4"/>'],
    lampe: ["La lampe", '<path d="M9 18h6M10 21h4"/><path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z"/>'],
    livre: ["Le livre", '<path d="M4 5.5A2.5 2.5 0 0 1 6.5 3H20v15H6.5A2.5 2.5 0 0 0 4 20.5z"/><path d="M4 20.5V5.5M8 7h8"/>'],
    porte: ["La porte", '<path d="M6 21V4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v17M4 21h16"/><circle cx="14.5" cy="12" r=".9"/>'],
    balance: ["La balance", '<path d="M12 4v16M8 20h8M5 7h14"/><path d="M5 7l-3 6a3 3 0 0 0 6 0zM19 7l-3 6a3 3 0 0 0 6 0z"/>'],
    graine: ["La pousse", '<path d="M12 21v-8"/><path d="M12 13c0-4-3-6-7-6 0 4 3 6 7 6zM12 11c0-3 2.5-5 6-5 0 3.5-2.5 5-6 5z"/>']
  };
  const symSVG = (id, cls) => SYM[id] ? `<svg class="${cls || "imp-sym"}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-label="${esc(SYM[id][0])}">${SYM[id][1]}</svg>` : "";

  /* ---------- Frise : le texte parmi ceux du chapitre ---------- */
  function frise(list, cur, links) {
    const L = list.slice().sort((a, b) => a.yearN - b.yearN || (a === cur) - (b === cur)), n = L.length;
    const pos = i => n < 2 ? 50 : 3 + i * 94 / (n - 1);
    const ci = L.indexOf(cur);
    const cents = [];
    L.forEach((x, i) => { const c = Math.floor((x.yearN - 1) / 100) + 1; if (!cents.some(o => o.c === c)) cents.push({ c, i }); });
    const dot = (x, i) => links
      ? `<a class="fr-dot ${x === cur ? "on" : ""}" href="#/hlp/texte/${x.id}" style="left:${pos(i)}%" title="${esc(x.a.short)} · ${esc(x.year)}" aria-label="${esc(x.a.short)}, ${esc(x.year)}"></a>`
      : `<span class="fr-dot ${x === cur ? "on" : ""}" style="left:${pos(i)}%" title="${esc(x.a.short)} · ${esc(x.year)}"></span>`;
    const lab = pos(ci), side = lab < 18 ? "l" : lab > 82 ? "r" : "";
    return `<div class="tfrise" role="img" aria-label="${esc(cur.a.short)}, ${esc(cur.year)}, parmi les textes du chapitre">
      <div class="fr-line"></div>${L.map(dot).join("")}
      <div class="fr-cur ${side}" style="left:${lab}%"><b>${esc(cur.year)}</b><span>${esc(cur.a.short)}</span></div>
      ${cents.map(o => `<span class="fr-c" style="left:${pos(o.i)}%">${ROMAN[o.c] || o.c}<sup>e</sup></span>`).join("")}
    </div>`;
  }

  /* ---------- Mots à toucher : notes du manuel et définitions du cours ---------- */
  function glossary(t) {
    const g = [];
    ((t.manuel && t.manuel.notes) || []).forEach(nt => {
      const m = /^\s*\d+\s*[.)]?\s*([^:]{2,40}?)\s*:\s*(.+)$/.exec(nt);
      if (m) g.push({ w: m[1].replace(/[«»"]/g, "").trim(), d: m[2].trim(), note: true });
    });
    const cb = C.BOOKS["hlp-ch1-education"];
    if (cb && cb.course) cb.course.forEach(p => (p.side || []).forEach(s => {
      if (s.k === "def" && s.w && s.t && !g.some(x => fold(x.w) === fold(s.w))) g.push({ w: s.w, d: s.t });
    }));
    return g;
  }
  function linkify(str, g) {
    let segs = [{ s: String(str) }];
    g.slice().sort((a, b) => b.w.length - a.w.length).forEach(x => {
      const re = new RegExp("(^|[^\\p{L}])(" + x.w.replace(/[.*+?^${}()|[\]\\]/g, "\\$&") + ")(?![\\p{L}])", "iu");
      for (let k = 0; k < segs.length; k++) {
        const sg = segs[k]; if (sg.w) continue;
        const m = re.exec(sg.s); if (!m) continue;
        const at = m.index + m[1].length;
        segs.splice(k, 1, { s: sg.s.slice(0, at) }, { s: m[2], w: x.w, d: x.d }, { s: sg.s.slice(at + m[2].length) });
        break;
      }
    });
    return segs.map(sg => sg.w ? `<button class="imp-w" data-w="${esc(sg.w)}" data-d="${esc(sg.d)}">${esc(sg.s)}</button>` : md(sg.s)).join("");
  }
  function bindWords(el) {
    const box = $(".imp-defbox", el);
    $$(".imp-w", el).forEach(b => b.onclick = () => {
      if (!box) return;
      box.hidden = false; box.innerHTML = `<b>${esc(b.dataset.w)}</b> ${esc(b.dataset.d)}`;
      b.classList.add("seen"); X.pop(box, 1.02);
    });
  }

  /* =========================================================
     Étapes du texte. Chacune : eye, html, bind(el, api), gate, hint
     ========================================================= */
  function stMeet(t, H) {
    const a = t.a, death = +((/(\d{4})\s*$/.exec(a.dates || "") || [])[1] || 0), age = a.year && t.yearN ? t.yearN - a.year : 0;
    const sure = !/v\.|\bou\b|\?/.test(a.dates || "");
    const when = death && t.yearN > death ? "Publié après sa mort." : sure && age > 12 && age < 100 ? `En ${t.year}, ${a.short} a ${age} ans.` : "";
    return {
      eye: "Rencontre",
      html: `<div class="imp-meet">
        <h2 class="imp-big">${esc(a.name)}</h2>
        <p class="imp-sub">${esc(a.dates)} · ${esc(a.epoque)}</p>
        ${frise(chapOf(t, H), t, false)}
        <p class="imp-p">${md(a.presentation)}</p>
        <p class="imp-work"><i>${esc(t.work)}</i>${t.ref ? ", " + esc(t.ref) : ""} · ${esc(t.year)}${when ? `<span class="imp-age">${esc(when)}</span>` : ""}</p>
      </div>`,
      bind(el) { X.stagger($$(".fr-dot", el), { y: 0, scale: .3, step: 28 }); const on = $(".fr-dot.on", el); if (on) setTimeout(() => X.pop(on, 1.8), 650); }
    };
  }
  function stBet(t, H, recall) {
    const pool = (t.oppositions || []).map(o => H.T[o.to]).concat(H.texts.filter(x => x.discipline === t.discipline))
      .filter((x, i, A) => x && x !== t && x.author !== t.author && A.indexOf(x) === i);
    const opts = shuffled([t].concat(pool.slice(0, 2)));
    const anc = (rec(t.id) || {}).anchor;
    return {
      eye: recall ? "Rappel" : "Avant de lire", gate: true,
      html: `${recall && anc ? `<div class="imp-anchor-r">${symSVG(anc)}</div>` : ""}<h2 class="imp-q">${recall ? "Que défend ce texte ?" : "D'après son titre, que défend ce texte ?"}</h2>
        <p class="imp-title">« ${esc(t.title)} » · ${esc(t.a.short)}</p>
        <div class="imp-opts">${opts.map(o => `<button class="imp-opt" data-ok="${o === t ? 1 : 0}">${esc(o.short)}</button>`).join("")}</div>
        <p class="imp-fb" hidden></p>`,
      bind(el, api) {
        $$(".imp-opt", el).forEach(b => b.onclick = () => {
          if (el.dataset.done) return; el.dataset.done = "1";
          const ok = b.dataset.ok === "1";
          $$(".imp-opt", el).forEach(x => { x.disabled = true; if (x.dataset.ok === "1") x.classList.add("right"); });
          if (ok) { X.pop(b); X.glow(b); } else { b.classList.add("wrong"); X.shake(b); }
          const fb = $(".imp-fb", el); fb.hidden = false; fb.textContent = ok ? "Bien vu." : "La bonne réponse est en vert.";
          api.done(ok);
        });
      }
    };
  }
  function stThesis(t) {
    const g = glossary(t), th = linkify(t.these, g);
    const extra = g.filter(x => x.note && !th.includes(`data-w="${esc(x.w)}"`)).slice(0, 6);
    return {
      eye: "La thèse",
      html: `<p class="imp-ask">${md(t.problematique)}</p>
        <p class="imp-these">${th}</p>
        ${extra.length ? `<div class="imp-words"><span>Mots du texte</span>${extra.map(x => `<button class="imp-w chip" data-w="${esc(x.w)}" data-d="${esc(x.d)}">${esc(x.w)}</button>`).join("")}</div>` : ""}
        <div class="imp-defbox" hidden></div>`,
      bind(el) { bindWords(el); X.stagger([$(".imp-these", el)], { y: 12, duration: 640 }); }
    };
  }
  function stThread(t) {
    return {
      eye: "Le fil du texte", gate: true, hint: "Dérouler les idées",
      html: `<ol class="imp-thread"></ol><button class="btn secondary" id="impMore">Première idée</button>`,
      bind(el, api) {
        let k = 0; const ol = $("ol", el), b = $("#impMore", el);
        b.onclick = () => {
          const li = document.createElement("li"); li.innerHTML = md(t.idees[k]); ol.appendChild(li);
          X.stagger([li], { y: 8 }); k++;
          if (k >= t.idees.length) { b.hidden = true; api.done(); } else b.textContent = "Idée suivante";
        };
      }
    };
  }
  function stOrder(t) {
    const items = t.idees.slice(0, 4).map((x, i) => ({ x, i }));
    return {
      eye: "Dans l'ordre", gate: true,
      html: `<h2 class="imp-q">Remettre le fil dans l'ordre</h2><p class="imp-sub2">Toucher les idées dans l'ordre du texte.</p>
        <ol class="imp-placed"></ol>
        <div class="imp-pool">${shuffled(items, true).map(o => `<button class="imp-piece" data-i="${o.i}">${md(o.x)}</button>`).join("")}</div>
        <p class="imp-fb" hidden></p>`,
      bind(el, api) {
        let nx = 0, errs = 0; const ol = $(".imp-placed", el);
        $$(".imp-piece", el).forEach(b => b.onclick = () => {
          if (+b.dataset.i !== nx) { errs++; X.shake(b); return; }
          const li = document.createElement("li"); li.innerHTML = b.innerHTML; ol.appendChild(li); b.remove(); X.pop(li, 1.02); nx++;
          if (nx === items.length) { const fb = $(".imp-fb", el); fb.hidden = false; fb.textContent = errs ? "Le fil est en place." : "Sans une erreur."; api.done(errs === 0); }
        });
      }
    };
  }
  /* Situer dans le temps : le siècle suffit (pas l'année). Le repère glisse du siècle choisi jusqu'à la vraie place */
  const ROMAN_C = { 16: "XVI", 17: "XVII", 18: "XVIII", 19: "XIX", 20: "XX", 21: "XXI" };
  function stTime(t) {
    const Y0 = 1500, Y1 = 2100, pct = y => ((Math.min(Y1, Math.max(Y0, y)) - Y0) / (Y1 - Y0) * 100).toFixed(2) + "%";
    const cs = [16, 17, 18, 19, 20, 21], y = t.yearN;
    /* 1900 est au XIXᵉ siècle, mais on l'entend souvent comme le début du XXᵉ : les deux sont acceptés */
    const good = [Math.floor((y - 1) / 100) + 1, Math.floor(y / 100) + 1];
    return {
      eye: "Situer dans le temps", gate: true, hint: "Choisir le siècle",
      html: `<h2 class="imp-q">Quel siècle ?</h2>
        <div class="imp-time">
          <div class="imp-tl"><div class="fr-line"></div><span class="imp-mk truth" hidden></span></div>
          <div class="imp-cents">${cs.map(c => `<button class="imp-cent" data-c="${c}">${ROMAN_C[c]}<sup>e</sup></button>`).join("")}</div>
          <div class="imp-row"><span class="imp-delta" hidden></span></div>
        </div>`,
      bind(el, api) {
        const tr = $(".imp-mk.truth", el);
        $$(".imp-cent", el).forEach(b => b.onclick = () => {
          if (el.dataset.done) return; el.dataset.done = "1";
          const c = +b.dataset.c, ok = good.includes(c), real = ok ? c : good[0];
          $$(".imp-cent", el).forEach(x => { x.disabled = true; x.classList.toggle("ok", +x.dataset.c === real); });
          if (!ok) b.classList.add("ko");
          tr.hidden = false; X.glide(tr, pct((c - 1) * 100 + 50), pct(y));
          const dl = $(".imp-delta", el); dl.hidden = false; dl.textContent = ROMAN_C[real] + "ᵉ siècle"; dl.classList.toggle("far", !ok);
          X.pop(dl, 1.06);
          api.done(ok);
        });
      }
    };
  }
  /* Qui dirait cela ? deux auteurs, des phrases à rendre à leur auteur */
  function rival(t, H) {
    const o = (t.oppositions || []).map(l => H.T[l.to]).find(x => x && x.author !== t.author && x.idees.length >= 2);
    return o || C.shuffle(H.texts.filter(x => x.author !== t.author && x.chapter === t.chapter && x.idees.length >= 2))[0];
  }
  function stDuel(t, H) {
    const o = rival(t, H);
    const items = C.shuffle(pickN(t.idees, 2).map(s => ({ s, w: 0 })).concat(pickN(o.idees, 2).map(s => ({ s, w: 1 }))));
    return {
      eye: "Qui dirait cela ?", gate: true,
      html: `<div class="imp-duel">
          <div class="imp-col" data-w="0"><b>${esc(t.a.short)}</b><div class="imp-colin"></div></div>
          <div class="imp-col" data-w="1"><b>${esc(o.a.short)}</b><div class="imp-colin"></div></div>
        </div>
        <div class="imp-card-s" id="impDuelCard"></div>
        <div class="imp-row center"><button class="btn secondary" data-pick="0">${esc(t.a.short)}</button><button class="btn secondary" data-pick="1">${esc(o.a.short)}</button></div>`,
      bind(el, api) {
        let k = 0, good = 0; const card = $("#impDuelCard", el);
        const show = () => { card.innerHTML = `<p>${md(items[k].s)}</p>`; X.stagger([card], { y: 8 }); };
        $$("[data-pick]", el).forEach(b => b.onclick = () => {
          if (k >= items.length || el.dataset.wait) return;
          const it = items[k], ok = +b.dataset.pick === it.w;
          const chip = document.createElement("div"); chip.className = "imp-dchip " + (ok ? "ok" : "ko"); chip.innerHTML = md(it.s);
          const col = $(`.imp-col[data-w="${it.w}"] .imp-colin`, el);
          if (X.toColumn) X.toColumn(chip, col, card); else X.fly(chip, col);
          card.style.visibility = "hidden";
          if (ok) good++; else X.shake(b);
          k++;
          el.dataset.wait = "1";
          setTimeout(() => {
            delete el.dataset.wait;
            if (k < items.length) { card.style.visibility = ""; show(); return; }
            card.hidden = true; $$("[data-pick]", el).forEach(x => x.disabled = true); api.done(good >= items.length - 1 ? true : good / items.length);
          }, 520);
        });
        show();
      }
    };
  }
  /* Une seule est fausse */
  function stLie(t, H) {
    const vfF = (t.vf || []).find(v => !v.a), vfT = (t.vf || []).filter(v => v.a).map(v => v.s);
    const o = rival(t, H);
    const lie = vfF ? { s: vfF.s, why: vfF.explain } : { s: o.idees[0], why: `C'est une idée de ${o.a.short}.` };
    const truths = pickN(vfT.concat(t.idees), 2);
    const cards = C.shuffle(truths.map(s => ({ s, lie: false })).concat({ s: lie.s, lie: true }));
    return {
      eye: "Une seule est fausse", gate: true,
      html: `<h2 class="imp-q">Pour ${esc(t.a.short)}, laquelle est fausse ?</h2>
        <div class="imp-opts">${cards.map((c, i) => `<button class="imp-opt" data-i="${i}">${md(c.s)}</button>`).join("")}</div>
        <p class="imp-why" hidden>${md(lie.why || "")}</p>`,
      bind(el, api) {
        $$(".imp-opt", el).forEach(b => b.onclick = () => {
          if (el.dataset.done) return; el.dataset.done = "1";
          const i = +b.dataset.i, ok = cards[i].lie, li = $$(".imp-opt", el)[cards.findIndex(c => c.lie)];
          $$(".imp-opt", el).forEach(x => x.disabled = true);
          if (!ok) X.shake(b);
          X.flipOut(li);
          $$(".imp-opt", el).forEach((x, j) => { if (!cards[j].lie) x.classList.add("right"); });
          const w = $(".imp-why", el); if (w.textContent.trim()) w.hidden = false;
          api.done(ok);
        });
      }
    };
  }
  /* Le schéma : classer chaque élément, puis voir l'argumentation se dessiner */
  function stMap(t, H) {
    const o = rival(t, H);
    const args = t.arguments.slice(0, 2).map(s => ({ s, k: "arg" })), ex = (t.exemples || []).slice(0, 1).map(s => ({ s, k: "ex" }));
    const intrus = o && o.arguments.length ? [{ s: o.arguments[0], k: "out" }] : [];
    const items = C.shuffle(args.concat(ex, intrus));
    const LAB = { arg: "Argument", ex: "Exemple", out: "Pas dans ce texte" };
    return {
      eye: "Le schéma", gate: true,
      html: `<div class="imp-map-q"><p class="imp-sub2">Ranger chaque élément.</p><div class="imp-card-s" id="impMapCard"></div>
          <div class="imp-row center">${Object.keys(LAB).map(k => `<button class="btn secondary" data-k="${k}">${LAB[k]}</button>`).join("")}</div></div>
        <div class="imp-map" hidden><svg class="imp-map-svg" aria-hidden="true"></svg>
          <div class="imp-node th">${md(t.short)}</div>
          <div class="imp-map-row">${args.map(a => `<div class="imp-node">${md(a.s)}</div>`).join("")}</div>
          ${ex.length ? `<div class="imp-map-row"><div class="imp-node ex">${md(ex[0].s)}</div></div>` : ""}</div>
        <p class="imp-fb" hidden></p>`,
      bind(el, api) {
        let k = 0, good = 0; const card = $("#impMapCard", el);
        const show = () => { card.innerHTML = `<p>${md(items[k].s)}</p>`; X.stagger([card], { y: 8 }); };
        const draw = () => {
          const box = $(".imp-map", el), svg = $(".imp-map-svg", el), R0 = box.getBoundingClientRect();
          const ctr = n => { const r = n.getBoundingClientRect(); return { x: r.left - R0.left + r.width / 2, top: r.top - R0.top, bot: r.bottom - R0.top }; };
          const th = ctr($(".imp-node.th", el)), rows = $$(".imp-map-row", el);
          const argN = rows[0] ? $$(".imp-node", rows[0]).map(ctr) : [], exN = rows[1] ? $$(".imp-node", rows[1]).map(ctr) : [];
          const path = (a, b) => `<path d="M${a.x},${a.bot} C${a.x},${(a.bot + b.top) / 2} ${b.x},${(a.bot + b.top) / 2} ${b.x},${b.top}"/>`;
          svg.setAttribute("viewBox", `0 0 ${R0.width} ${R0.height}`);
          svg.innerHTML = argN.map(n => path(th, n)).join("") + (exN[0] ? argN.map(n => path(n, exN[0])).join("") : "");
          /* Les traits restent cachés jusqu'à leur tour (sans animation, ils s'affichent tout de suite) */
          const anim = X.can && X.can("soft") && !(X.reduced && X.reduced());
          $$("path", svg).forEach((p, i) => { if (anim) { const L = p.getTotalLength(); p.style.strokeDasharray = L; p.style.strokeDashoffset = L; } setTimeout(() => X.drawLine(p), i * 140); });
        };
        $$("[data-k]", el).forEach(b => b.onclick = () => {
          if (k >= items.length || el.dataset.wait) return;
          const ok = b.dataset.k === items[k].k;
          if (ok) { good++; X.pop(card, 1.02); } else { X.shake(card); card.insertAdjacentHTML("beforeend", `<small class="imp-fix">${LAB[items[k].k]}</small>`); }
          k++; el.dataset.wait = "1";
          setTimeout(() => {
            delete el.dataset.wait;
            if (k < items.length) { show(); return; }
            $(".imp-map-q", el).hidden = true; $(".imp-map", el).hidden = false;
            X.stagger($$(".imp-node", el), { y: 8, step: 90 }); setTimeout(draw, 60);
            const fb = $(".imp-fb", el); fb.hidden = false; fb.textContent = good === items.length ? "Tout est à sa place." : `${good} sur ${items.length} bien rangés.`;
            api.done(good === items.length ? true : good / items.length);
          }, ok ? 280 : 900);
        });
        show();
      }
    };
  }
  function stTrap(t) {
    return {
      eye: "Le contresens à éviter", gate: true, hint: "Retourner la carte",
      html: `<button class="imp-flip" id="impFlip" aria-label="Retourner la carte"><span class="imp-face f"><b>Un contresens fréquent</b><small>Toucher pour retourner</small></span><span class="imp-face b">${md(t.piege)}</span></button>`,
      bind(el, api) { const f = $("#impFlip", el); f.onclick = () => { if (f.classList.contains("on")) return; f.classList.add("on"); api.done(); }; }
    };
  }
  function stLinks(t, H) {
    const L = C.shuffle(t.liens.map(l => ({ l, v: 1 })).concat(t.oppositions.map(l => ({ l, v: 0 }))).filter(o => H.T[o.l.to])).slice(0, 3);
    return {
      eye: "Avec ou contre ?", gate: true,
      html: `<p class="imp-sub2">Ces textes vont-ils dans le même sens que ${esc(t.a.short)} ?</p>
        <div class="imp-links">${L.map((o, i) => { const x = H.T[o.l.to]; return `<div class="imp-link" data-i="${i}"><div class="imp-lw"><b>${esc(x.a.short)}</b> « ${esc(x.title)} »</div><div class="imp-row"><button class="imp-opt sm" data-v="1">Même sens</button><button class="imp-opt sm" data-v="0">S'y oppose</button></div><p class="imp-why" hidden>${md(o.l.t)}</p></div>`; }).join("")}</div>`,
      bind(el, api) {
        let n = 0, good = 0;
        $$(".imp-link", el).forEach(box => {
          const o = L[+box.dataset.i];
          $$("[data-v]", box).forEach(b => b.onclick = () => {
            if (box.dataset.done) return; box.dataset.done = "1";
            const ok = +b.dataset.v === o.v;
            $$("[data-v]", box).forEach(x => { x.disabled = true; if (+x.dataset.v === o.v) x.classList.add("right"); });
            if (ok) { good++; X.pop(b); } else { b.classList.add("wrong"); X.shake(b); }
            $(".imp-why", box).hidden = false;
            if (++n === L.length) api.done(good === L.length);
          });
        });
      }
    };
  }
  function stVF(t) {
    const L = (t.vf || []).slice(0, 2);
    return {
      eye: "Vrai ou faux", gate: true,
      html: `<div class="imp-vfs">${L.map((v, i) => `<div class="imp-vf" data-i="${i}"><p>${md(v.s)}</p><div class="imp-row"><button class="imp-opt sm" data-v="1">Vrai</button><button class="imp-opt sm" data-v="0">Faux</button></div><p class="imp-why" hidden>${md(v.explain || "")}</p></div>`).join("")}</div>`,
      bind(el, api) {
        let n = 0, good = 0;
        $$(".imp-vf", el).forEach(box => {
          const v = L[+box.dataset.i];
          $$("[data-v]", box).forEach(b => b.onclick = () => {
            if (box.dataset.done) return; box.dataset.done = "1";
            const ok = (b.dataset.v === "1") === !!v.a;
            $$("[data-v]", box).forEach(x => { x.disabled = true; if ((x.dataset.v === "1") === !!v.a) x.classList.add("right"); });
            if (ok) { good++; X.pop(b); } else { b.classList.add("wrong"); X.shake(b); }
            const w = $(".imp-why", box); if (w.textContent.trim()) w.hidden = false;
            if (++n === L.length) api.done(good === L.length);
          });
        });
      }
    };
  }
  function stPhrase(t, recall) {
    const prev = (rec(t.id) || {}).phrase || "";
    return {
      eye: recall ? "Rappel" : "En une phrase", gate: true, hint: "Écrire, comparer, puis juger",
      html: `<h2 class="imp-q">La thèse en une phrase, sans regarder</h2>
        <textarea class="imp-ta" rows="3" placeholder="Pour ${esc(t.a.short)}, …"></textarea>
        <div class="imp-row"><button class="btn secondary" id="impCmp">Comparer</button></div>
        <div class="imp-cmp" hidden>
          <div class="imp-model"><span>Le texte</span>${md(t.these)}</div>
          ${prev ? `<div class="imp-model prev"><span>La dernière fois</span>${esc(prev)}</div>` : ""}
          <div class="imp-rate"><span>Sa propre phrase est…</span><button class="imp-opt sm" data-r="1">Proche</button><button class="imp-opt sm" data-r="0.5">En partie</button><button class="imp-opt sm" data-r="0">À revoir</button></div>
        </div>`,
      bind(el, api) {
        const ta = $(".imp-ta", el);
        ta.addEventListener("keydown", e => { if (e.key === "Enter") e.stopPropagation(); });
        $("#impCmp", el).onclick = () => {
          const v = ta.value.trim();
          if (v) { const r = rec(t.id) || { n: 0 }; r.phrase = v; put(t.id, r); }
          ta.readOnly = true; $("#impCmp", el).hidden = true; $(".imp-cmp", el).hidden = false;
          X.stagger($$(".imp-model, .imp-rate", el), { y: 8 });
        };
        $$("[data-r]", el).forEach(b => b.onclick = () => {
          if (el.dataset.done) return; el.dataset.done = "1";
          $$("[data-r]", el).forEach(x => { x.disabled = true; }); b.classList.add("right"); X.pop(b);
          api.done(+b.dataset.r);
        });
      }
    };
  }
  function stBac(t, c) {
    return {
      eye: "Le jour du bac", gate: true, hint: "Afficher la réponse",
      html: `<p class="imp-sub2">La question du chapitre</p>
        <h2 class="imp-big2">${esc(t.ch.question)}</h2>
        <button class="btn secondary" id="impRev">Ce que répond le texte</button>
        <div class="imp-ans" hidden><p>${md(t.neutre)}</p>${c && c.usage ? `<p class="imp-use"><span>Dans un essai</span>« ${esc(c.t)} » : ${md(c.usage)}</p>` : ""}</div>`,
      bind(el, api) { $("#impRev", el).onclick = () => { $("#impRev", el).hidden = true; const a = $(".imp-ans", el); a.hidden = false; X.stagger($$(".imp-ans p", el), { y: 8 }); api.done(); }; }
    };
  }
  /* Repère personnel : un symbole choisi, qui revient à chaque rappel */
  function stAnchor(t) {
    const cur = (rec(t.id) || {}).anchor;
    return {
      eye: "Un repère", gate: true, hint: "Choisir un symbole",
      html: `<h2 class="imp-q">Quel symbole pour ce texte ?</h2><p class="imp-sub2">Il reviendra à chaque rappel.</p>
        <div class="imp-syms">${Object.keys(SYM).map(k => `<button class="imp-symb ${k === cur ? "on" : ""}" data-s="${k}" title="${esc(SYM[k][0])}">${symSVG(k)}</button>`).join("")}</div>
        <div class="imp-anchor-card"><div class="imp-anchor-slot"></div><div><b>${esc(t.a.short)}</b><span>${md(t.short)}</span></div></div>`,
      bind(el, api) {
        const slot = $(".imp-anchor-slot", el);
        const pick = k => { $$(".imp-symb", el).forEach(b => b.classList.toggle("on", b.dataset.s === k)); slot.innerHTML = symSVG(k); X.settle($("svg", slot)); const r = rec(t.id) || { n: 0 }; r.anchor = k; put(t.id, r); api.done(); };
        $$(".imp-symb", el).forEach(b => b.onclick = () => pick(b.dataset.s));
        if (cur) { slot.innerHTML = symSVG(cur); api.done(); }
      }
    };
  }
  /* Bilan éclair : 45 secondes de questions mêlées (auteur d'une citation, vrai ou faux) */
  function blitzItems(t, H) {
    const chap = chapOf(t, H), authors = [...new Set(chap.map(x => x.a.short))];
    const mk = x => {
      const out = [];
      if (NQ()) out.push({ q: x.short, k: "Qui le soutient ?", ok: x.a.short, opts: C.shuffle([x.a.short].concat(pickN(authors.filter(a => a !== x.a.short), 3))) });
      else x.citations.forEach(c => { const ok = c.who || x.a.short; out.push({ q: "« " + c.t + " »", k: "Qui l'a écrit ?", ok, opts: C.shuffle([ok].concat(pickN(authors.filter(a => a !== ok), 3))) }); });
      (x.vf || []).forEach(v => out.push({ q: v.s, k: "Vrai ou faux ?", ok: v.a ? "Vrai" : "Faux", opts: ["Vrai", "Faux"] }));
      return out;
    };
    return C.shuffle(mk(t)).concat(C.shuffle(chap.filter(x => x !== t).flatMap(mk))).slice(0, 14);
  }
  function stBlitz(t, H) {
    const items = blitzItems(t, H), SEC = 45;
    return {
      eye: "Bilan éclair", gate: true, hint: "45 secondes",
      html: `<div class="imp-blitz"><div class="mx-time"><i></i></div>
          <div class="imp-bz-go"><p class="imp-sub2">45 secondes de questions mêlées sur le chapitre.</p><button class="btn primary" id="impBzGo">Commencer</button></div>
          <div class="imp-bz-q" hidden><span class="imp-bz-k"></span><p class="imp-bz-t"></p><div class="imp-bz-o"></div></div>
          <div class="imp-bz-end" hidden><b class="imp-bz-n tabnum">0</b><span></span></div></div>`,
      bind(el, api) {
        let k = 0, ok = 0, ans = 0, over = false, timer = 0, anim = null;
        const best = (store.get(KB) || {})[t.chapter] || 0;
        const end = () => {
          if (over) return; over = true; clearTimeout(timer); if (anim) anim.cancel();
          $(".imp-bz-q", el).hidden = true; const e = $(".imp-bz-end", el); e.hidden = false;
          X.countUp($(".imp-bz-n", e), ok, { duration: 900 });
          const B = store.get(KB) || {}, up = ok > (B[t.chapter] || 0); if (up) { B[t.chapter] = ok; store.set(KB, B); }
          $("span", e).textContent = `juste${ok > 1 ? "s" : ""} sur ${ans}` + (up && best ? " · meilleur résultat" : best ? ` · meilleur : ${best}` : "");
          api.done(ans ? ok / ans : false);
        };
        const show = () => {
          if (over) return;
          if (k >= items.length) { end(); return; }
          const it = items[k];
          $(".imp-bz-k", el).textContent = it.k; $(".imp-bz-t", el).innerHTML = md(it.q);
          $(".imp-bz-o", el).innerHTML = it.opts.map(o => `<button class="imp-opt sm" data-o="${esc(o)}">${esc(o)}</button>`).join("");
          $$(".imp-bz-o button", el).forEach(b => b.onclick = () => {
            if (over || b.disabled) return;
            $$(".imp-bz-o button", el).forEach(x => { x.disabled = true; if (x.dataset.o === it.ok) x.classList.add("right"); });
            ans++; if (b.dataset.o === it.ok) { ok++; X.pop(b); } else { b.classList.add("wrong"); X.shake(b); }
            k++; setTimeout(show, 420);
          });
        };
        $("#impBzGo", el).onclick = () => {
          $(".imp-bz-go", el).hidden = true; $(".imp-bz-q", el).hidden = false;
          anim = X.timebar($(".mx-time i", el), SEC * 1000); timer = setTimeout(end, SEC * 1000);
          C.onClean(() => clearTimeout(timer));
          show();
        };
      }
    };
  }

  /* =========================================================
     Méthodes de citation : les exercices du moteur, affichés dans une étape
     ========================================================= */
  const QLABEL = { fade: "Effacement", initials: "Initiales", words: "Reconstituer", intrus: "Le mot intrus", dictee: "Dictée de mémoire", voix: "À voix haute", suite: "La suite", situation: "En situation" };
  function quoteEx(kind, c, t, H) {
    const a = (c.who || t.a.short) + (c.where ? " · " + c.where : "");
    const others = chapOf(t, H).flatMap(x => x.citations.map(q => ({ q, x }))).filter(o => o.q !== c);
    if (kind === "intrus") { const z = C.makeIntrus ? C.makeIntrus(c.t) : null; return z ? { type: "intrus", t: c.t, a, bad: z.bad, wrong: z.wrong, explain: c.sens } : null; }
    if (kind === "words") return { type: "words", t: c.t, a, hide: .55, explain: c.sens };
    if (kind === "suite") {
      if (c.t.split(/\s+/).length < 6) return null;
      const cut = s => { const w = s.split(/\s+/); const k = Math.max(2, Math.round(w.length * .45)); return [w.slice(0, k).join(" "), w.slice(k).join(" ")]; };
      const [h1, h2] = cut(c.t);
      const opts = C.shuffle([h2].concat(pickN(others.map(o => cut(o.q.t)[1]).filter(s => s && s !== h2), 2)));
      return { type: "qcm", label: "La suite", q: "Comment se termine la citation ?", passage: h1 + " …", src: a, options: opts, answer: opts.indexOf(h2), explain: "« " + c.t + " »" };
    }
    if (kind === "situation") {
      if (!c.usage) return null;
      const lab = q => "« " + (q.t.length > 70 ? q.t.slice(0, 68) + "… »" : q.t + " »");
      const pool = pickN(others, 2).map(o => o.q), opts = C.shuffle([c].concat(pool));
      return { type: "qcm", label: "En situation", q: "Quelle citation sert cet argument ?", passage: c.usage, src: "Dans un essai", options: opts.map(lab), answer: opts.indexOf(c), explain: "« " + c.t + " » " + (c.sens || "") };
    }
    return { type: kind, t: c.t, a, explain: c.sens };
  }
  function stQuote(kind, c, t, H) {
    const ex = quoteEx(kind, c, t, H);
    if (!ex || !C.exRender) return null;
    return {
      eye: QLABEL[kind] || "Citation", gate: true, hint: "Terminer l'exercice",
      html: `<div class="imp-ex"></div><div class="imp-row"><button class="btn primary" id="impVerif" hidden disabled>Vérifier</button></div><p class="imp-fb" hidden></p>`,
      bind(el, api) {
        const v = $("#impVerif", el), fb = $(".imp-fb", el);
        const r = C.exRender(ex, $(".imp-ex", el), {
          ready: ok => { v.disabled = !ok; },
          selfRated: () => { v.hidden = true; },
          done: res => {
            v.hidden = true;
            const s = Math.max(0, Math.min(1, +res.score || 0));
            fb.hidden = false; fb.innerHTML = s >= .99 ? "Juste." : ex.explain ? md(ex.explain) : esc(res.expected || "");
            api.done(s >= .99 ? true : s > 0 ? s : false);
          }
        });
        el._ctrl = r.ctrl || null;   /* raccourcis clavier de l'exercice (Espace, 1 2 3, flèches) */
        if (!r.selfCheck) { v.hidden = false; v.onclick = () => r.check(); }
      }
    };
  }
  /* « Sans citations » en spécialité (désactivé par défaut) : les visites ne gardent que les méthodes sur le texte */
  const NQ = () => !!(C.noQ && C.noQ(true));
  /* Le choix des méthodes de citation selon le niveau de la citation (rappels réussis) */
  function quoteKinds(level) {
    const speak = C.speechOK && Math.random() < .34 ? "voix" : "dictee";
    if (!level) return [C.shuffle(["fade", "initials"])[0], "words"];
    if (level === 1) return [C.shuffle(["intrus", "initials", "suite"])[0], C.shuffle(["words", "situation"])[0]];
    return [speak, C.shuffle(["suite", "situation", "intrus"])[0]];
  }
  /* Une étape de citation dont le résultat nourrit les rappels de la citation */
  function trackQuote(st, k, per) {
    if (!st) return null;
    const b0 = st.bind;
    st.bind = (el, api) => b0(el, { done: r => { per[k] = (per[k] || []).concat(r === true ? 1 : r === false ? 0 : +r || 0); api.done(r); } });
    return st;
  }
  const settleQuotes = per => Object.keys(per).forEach(k => { const a = per[k], m = a.reduce((x, y) => x + y, 0) / a.length; qput(k, schedule(qrec(k) || {}, m >= .7)); });

  /* =========================================================
     Le déroulé d'une visite : un tronc commun, puis des méthodes tirées au sort
     ========================================================= */
  function stEnd(t, c, recall, score, opts, H, per) {
    return {
      eye: "À retenir", last: true,
      html: () => {
        const r = rec(t.id) || {};
        return `<div class="imp-card" id="impMem">
          <div class="imp-mem-h">${r.anchor ? symSVG(r.anchor, "imp-sym sm") : ""}<b>${esc(t.a.short)}</b><span>${esc(t.year)} · <i>${esc(t.work)}</i></span></div>
          <p class="imp-mem-t">${md(t.short)}</p>
          ${c ? `<blockquote>« ${esc(c.t)} »</blockquote>` : ""}
          ${t.piege ? `<p class="imp-mem-p"><span>Piège</span>${md(t.piege)}</p>` : ""}
        </div>
        <p class="imp-next">${score.tot ? `${score.ok} réponse${score.ok > 1 ? "s" : ""} juste${score.ok > 1 ? "s" : ""} sur ${score.tot}. ` : ""}Prochain rappel : ${esc(dayFR(r.next || Date.now() + DAY))}.</p>
        <div class="imp-row center"><a class="imp-gal" href="#/hlp/textes?m=auteurs" id="impGal">Auteurs retenus <b class="tabnum">${gallery(H).length}</b> / ${H.authors.length}</a></div>
        <div class="imp-row center"><button class="btn primary" id="impTrain">S'entraîner sur ce texte</button>${c ? `<a class="btn secondary" href="#/hlp/citation/${t.id}">Retenir les citations</a>` : ""}</div>`;
      },
      enter() {
        const r = rec(t.id) || { n: 0 }, weak = score.tot && score.ok / score.tot < .5;
        schedule(r, !(weak && recall)); put(t.id, r);
        settleQuotes(per); logDay();
      },
      bind(el) {
        const card = $("#impMem", el);
        if (card) X.pop(card, 1.02);
        if (!recall && card) setTimeout(() => X.toShelf(card, $("#impGal", el)), 500);
        $("#impTrain", el).onclick = () => opts.train(t);
      }
    };
  }
  function build(t, H, recall, score, opts) {
    const nq = NQ(), cite = nq ? null : t.citations.find(c => c.fill) || t.citations[0];
    const ci = t.citations.indexOf(cite), qk = cite ? qkey(t, ci) : null, level = qk ? (qrec(qk) || {}).n || 0 : 0, per = {};
    const textPool = [
      t.idees.length >= 3 ? () => stOrder(t) : null,
      () => stTime(t),
      rival(t, H) ? () => stDuel(t, H) : null,
      () => stLie(t, H),
      t.arguments.length >= 2 && rival(t, H) ? () => stMap(t, H) : null,
      t.piege ? () => stTrap(t) : null,
      t.liens.length + t.oppositions.length ? () => stLinks(t, H) : null,
      (t.vf || []).length ? () => stVF(t) : null,
      () => stBac(t, cite)
    ].filter(Boolean);
    const qSteps = cite ? quoteKinds(level).map(k => trackQuote(stQuote(k, cite, t, H), qk, per)).filter(Boolean) : [];
    const S = [];
    if (!recall) {
      S.push(stMeet(t, H), stBet(t, H, false), stThesis(t));
      if (t.idees.length) S.push(stThread(t));
      S.push(...C.shuffle(pickN(textPool, nq ? 6 : 4).map(f => f()).concat(qSteps)));
      S.push(stPhrase(t, false));
      if (!(rec(t.id) || {}).anchor) S.push(stAnchor(t));
      S.push(stBlitz(t, H));
    } else {
      S.push(stBet(t, H, true));
      const tm = pickN([() => stLie(t, H), () => stTime(t), rival(t, H) ? () => stDuel(t, H) : null, nq && (t.vf || []).length ? () => stVF(t) : null].filter(Boolean), nq ? 3 : 1).map(f => f());
      S.push(...C.shuffle(qSteps.concat(tm)));
      S.push(stPhrase(t, true));
    }
    S.push(stEnd(t, cite, recall, score, opts, H, per));
    return S;
  }

  /* =========================================================
     Le cadre commun : une carte, une étape à la fois, « Étape suivante »
     ========================================================= */
  function runSteps(root, o) {
    const S = o.steps; let i = 0;
    root.innerHTML = `
      <section class="view imp" style="--tone:${o.tone}">
        <div class="card imp-shell">
          <header class="imp-top">
            <a class="icon-btn" href="${o.quit}" title="Quitter" aria-label="Quitter">${ICON.close}</a>
            <div class="imp-prog" aria-hidden="true"><i id="impBar"></i></div>
            <span class="imp-who">${esc(o.who)}</span>
          </header>
          <div class="imp-stage scroll" id="impStage"></div>
          <footer class="imp-foot"><span class="imp-hint" id="impHint"></span><button class="btn primary lg" id="impNext">Étape suivante <kbd>Entrée</kbd></button></footer>
        </div>
      </section>`;
    const stage = $("#impStage", root), next = $("#impNext", root), hint = $("#impHint", root), bar = $("#impBar", root);
    const api = {
      done(r) {
        if (r === true || r === false) { o.score.tot++; if (r) o.score.ok++; }
        else if (typeof r === "number") { o.score.tot++; o.score.ok += r >= .99 ? 1 : 0; }
        next.disabled = false; hint.textContent = ""; X.pop(next, 1.03);
      }
    };
    const show = () => {
      const st = S[i];
      if (st.enter) st.enter();
      stage.innerHTML = `<div class="imp-step"><div class="imp-eye">${esc(st.eye)}</div>${typeof st.html === "function" ? st.html() : st.html}</div>`;
      stage.scrollTop = 0;
      delete stage.dataset.done;   /* chaque étape repart de zéro */
      delete stage.dataset.wait;
      stage._ctrl = null;
      bar.style.transform = `scaleX(${((i + 1) / S.length).toFixed(3)})`;
      next.hidden = !!st.last;
      next.disabled = !!st.gate;
      hint.textContent = st.gate ? st.hint || "Répondre pour continuer" : "";
      X.titleIn($(".imp-eye", stage));
      if (st.bind) st.bind(stage, api);
    };
    let busy = false;
    next.onclick = () => { if (busy || next.disabled || i >= S.length - 1) return; busy = true; next.disabled = true; i++; X.swap(stage, () => { busy = false; show(); }, { dx: 14 }); };
    const key = e => {
      if (C.view() !== "hlp" || !document.body.contains(next)) return;
      if (/^(INPUT|TEXTAREA)$/.test((e.target || {}).tagName || "")) return;
      const ct = stage._ctrl;
      if (e.key !== "Enter") {
        if (!ct || e.metaKey || e.ctrlKey || e.altKey) return;
        if (e.key === " " && ct.reveal) { e.preventDefault(); ct.reveal(); return; }
        if (ct.key && ct.key(e.key)) e.preventDefault();
        return;
      }
      if (!next.hidden && !next.disabled) { e.preventDefault(); next.click(); }
    };
    document.addEventListener("keydown", key);
    C.onClean(() => document.removeEventListener("keydown", key));
    show();
  }
  const withCourse = fn => { if (!C.BOOKS["hlp-ch1-education"] && C.loadBook) C.loadBook("hlp-ch1-education", () => fn()); else fn(); };

  function view(root, prm, H, tone, opts) {
    const t = H.T[prm.id];
    if (!t) { location.replace("#/hlp/textes"); return; }
    if (C.live) C.live.page("hlp-textes", t.id);
    const recall = prm.r === "1", score = { ok: 0, tot: 0 };
    withCourse(() => runSteps(root, { tone: tone(t.discipline), who: (recall ? "Rappel" : "S'imprégner") + " · " + t.a.short, quit: "#/hlp/texte/" + t.id, score, steps: build(t, H, recall, score, opts) }));
  }

  /* ---------- Retenir les citations d'un texte (une, ou toutes) ---------- */
  function quoteView(root, prm, H, tone) {
    const t = H.T[prm.id];
    if (!t) { location.replace("#/hlp/textes"); return; }
    const idx = prm.i != null && t.citations[+prm.i] ? [+prm.i] : t.citations.map((_, i) => i);
    const score = { ok: 0, tot: 0 }, per = {}, S = [];
    idx.forEach(i => {
      const c = t.citations[i], k = qkey(t, i), lvl = (qrec(k) || {}).n || 0;
      const kinds = idx.length > 2 ? quoteKinds(lvl) : quoteKinds(lvl).concat(lvl ? ["words"] : ["intrus"]);
      kinds.forEach(kd => { const st = trackQuote(stQuote(kd, c, t, H), k, per); if (st) S.push(st); });
    });
    S.push({
      eye: "À retenir", last: true,
      enter() { settleQuotes(per); logDay(); },
      html: () => `<div class="imp-cites">${idx.map(i => { const r = qrec(qkey(t, i)) || {}; return `<div class="imp-card sm"><blockquote>« ${esc(t.citations[i].t)} »</blockquote><span>${esc(t.citations[i].who || t.a.short)} · rappel ${esc(dayFR(r.next || Date.now()))}</span></div>`; }).join("")}</div>
        <p class="imp-next">${score.ok} réponse${score.ok > 1 ? "s" : ""} juste${score.ok > 1 ? "s" : ""} sur ${score.tot}.</p>
        <div class="imp-row center"><a class="btn secondary" href="#/hlp/texte/${t.id}?tab=citations">Voir les citations</a></div>`,
      bind(el) { X.stagger($$(".imp-card", el), { y: 8, step: 60 }); }
    });
    withCourse(() => runSteps(root, { tone: tone(t.discipline), who: "Citations · " + t.a.short, quit: "#/hlp/texte/" + t.id + "?tab=citations", score, steps: S }));
  }

  /* ---------- Les 3 du jour : un texte et deux citations à revoir ---------- */
  function logDay() { const D = store.get(KD) || { days: [] }; const k = dkey(Date.now()); if (!(D.days || []).includes(k)) { D.days = (D.days || []).concat(k).slice(-60); store.set(KD, D); } }
  function streak() {
    const D = (store.get(KD) || { days: [] }).days || []; let n = 0, d = Date.now();
    if (!D.includes(dkey(d))) d -= DAY;
    for (; D.includes(dkey(d)); d -= DAY) n++;
    return n;
  }
  const doneToday = () => ((store.get(KD) || { days: [] }).days || []).includes(dkey(Date.now()));
  function todayPick(H) {
    const A = all(), now = Date.now();
    const texts = H.texts.filter(t => A[t.id] && A[t.id].next).sort((a, b) => A[a.id].next - A[b.id].next);
    const text = texts[0] || H.texts[0];
    const Q = qall(), cands = [];
    H.texts.forEach(t => t.citations.forEach((c, i) => { const k = qkey(t, i), r = Q[k]; cands.push({ t, i, k, w: r && r.next ? (r.next <= now ? 0 : 2) + r.next / 1e14 : A[t.id] ? 1 + Math.random() / 10 : 3 + Math.random() / 10 }); }));
    if (NQ()) {
      const rest = H.texts.filter(t => t !== text).map(t => ({ t, w: A[t.id] && A[t.id].next ? A[t.id].next : now * 2 + Math.random() })).sort((a, b) => a.w - b.w);
      return { text, quotes: [], more: rest.slice(0, 2).map(o => o.t) };
    }
    const quotes = cands.filter(o => o.t !== text).sort((a, b) => a.w - b.w).slice(0, 2);
    return { text, quotes, more: [] };
  }
  function dayView(root, prm, H, tone) {
    const P = todayPick(H), t = P.text, score = { ok: 0, tot: 0 }, per = {};
    const S = [stBet(t, H, true)];
    const tm = pickN([() => stLie(t, H), () => stTime(t), rival(t, H) ? () => stDuel(t, H) : null].filter(Boolean), 1)[0];
    if (tm) S.push(tm());
    P.more.forEach(x => {
      S.push(stBet(x, H, true));
      const f = pickN([() => stLie(x, H), () => stTime(x), rival(x, H) ? () => stDuel(x, H) : null].filter(Boolean), 1)[0];
      if (f) S.push(f());
    });
    P.quotes.forEach(o => {
      const lvl = (qrec(o.k) || {}).n || 0;
      quoteKinds(lvl).forEach(kd => { const st = trackQuote(stQuote(kd, o.t.citations[o.i], o.t, H), o.k, per); if (st) S.push(st); });
    });
    S.push({
      eye: "Fait pour aujourd'hui", last: true,
      enter() {
        [t].concat(P.more).forEach(x => { const r = rec(x.id) || { n: 0 }; schedule(r, !score.tot || score.ok / score.tot >= .5); put(x.id, r); });
        settleQuotes(per); logDay();
      },
      html: () => { const n = streak(); return `<div class="imp-day"><span class="mx-dots big"><i></i><i></i><i></i></span>
        <p class="imp-q">${score.ok} sur ${score.tot}</p><p class="imp-next">${n > 1 ? n + " jours de suite." : "Premier jour de la série."} Demain, trois autres.</p>
        <div class="imp-row center"><a class="btn secondary" href="#/hlp">Accueil HLP</a></div></div>`; },
      bind(el) { X.fillDots($$(".mx-dots i", el)); }
    });
    withCourse(() => runSteps(root, { tone: tone(t.discipline), who: "Les 3 du jour", quit: "#/hlp", score, steps: S }));
  }

  /* ---------- Galerie : les auteurs dont au moins un texte a été visité ---------- */
  function gallery(H) { const A = all(); return [...new Set(H.texts.filter(t => A[t.id] && A[t.id].last).map(t => t.author))]; }
  function dueCount(H) { const now = Date.now(), A = all(), Q = qall(); return H.texts.filter(t => A[t.id] && A[t.id].next <= now).length + (NQ() ? 0 : Object.keys(Q).filter(k => Q[k].next && Q[k].next <= now).length); }

  Recto.impregner = { view, quoteView, dayView, rec, due, frise, GAPS, symSVG, gallery, dueCount, streak, doneToday, qrec, qkey,
    /* pour les tests (tests/methodes.js) */
    _build: build, _quoteEx: quoteEx, _todayPick: todayPick, _blitz: blitzItems, _kinds: quoteKinds };
})();
