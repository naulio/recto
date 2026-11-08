/* Recto · méthodes de mémorisation de la spécialité (assets/impregner.js).
   Lancer depuis la racine du projet :  node tests/methodes.js
   Pour chaque texte : 40 visites et 40 rappels tirés au hasard, toutes les méthodes de citation,
   « Les 3 du jour » et le bilan éclair. Rien ne doit casser ni afficher « undefined ». */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
let fails = 0, oks = 0;
const ok = (cond, msg) => { if (cond) oks++; else { fails++; if (fails < 40) console.log("  ÉCHEC · " + msg); } };

const win = { BOOKS: {} };
win.window = win;
win.Recto = { add(id, d) { win.BOOKS[id] = d; } };
const ctx = vm.createContext(win);
const load = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
["contenus/bibliotheque.js", "contenus/hlp/hlp.js", "contenus/lecons/hlp-ch1-education.js", "assets/hlp.js"].forEach(load);
const H = win.Recto.hlpData.prepare(win.RECTO_HLP, win.RECTO_LIBRARY.items);

/* Un noyau minimal : pas de DOM, un stockage en mémoire */
const mem = {};
const shuffle = a => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };
win.Recto.core = {
  $: () => null, $$: () => [], ICON: { close: "x" }, shuffle, BOOKS: win.BOOKS, speechOK: true,
  esc: s => String(s == null ? "" : s).replace(/[&<>"]/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c]),
  store: { get: k => (k in mem ? JSON.parse(mem[k]) : null), set: (k, v) => { mem[k] = JSON.stringify(v); } },
  X: new Proxy({}, { get: () => () => {} }),
  exRender: () => ({ selfCheck: true }), makeIntrus: t => (t.split(/\s+/).length > 2 ? { bad: 1, wrong: "autre" } : null)
};
load("assets/impregner.js");
const I = win.Recto.impregner;
const BAD = /undefined|NaN|\[object Object\]|«\s*»|null\b/;

console.log("\nMéthodes de mémorisation (spécialité HLP)");
H.texts.forEach(t => {
  [false, true].forEach(recall => {
    for (let k = 0; k < 40; k++) {
      let S;
      try { S = I._build(t, H, recall, { ok: 0, tot: 0 }, { train() {} }); } catch (e) { ok(false, `${t.id} ${recall ? "rappel" : "visite"} : ${e.message}`); return; }
      ok(S.length >= (recall ? 4 : 9) && S.length <= (recall ? 7 : 14), `${t.id} ${recall ? "rappel" : "visite"} : ${S.length} étapes`);
      ok(S[S.length - 1].last, `${t.id} : la dernière étape est la carte « À retenir »`);
      S.forEach((st, i) => {
        if (st.enter) st.enter();
        const h = typeof st.html === "function" ? st.html() : st.html;
        ok(typeof st.eye === "string" && st.eye.length > 2, `${t.id} étape ${i + 1} : petit titre`);
        ok(typeof h === "string" && h.length > 40 && !BAD.test(h), `${t.id} étape ${i + 1} (${st.eye}) : contenu propre`);
        if (st.gate) ok(typeof st.bind === "function", `${t.id} étape ${i + 1} (${st.eye}) : une action ouvre la suite`);
      });
      if (!recall) ok(new Set(S.map(s => s.eye)).size >= S.length - 1, `${t.id} : pas deux fois la même méthode`);
    }
  });
  /* Toutes les méthodes de citation, sur toutes les citations */
  t.citations.forEach((c, ci) => ["fade", "initials", "words", "intrus", "dictee", "voix", "suite", "situation"].forEach(kd => {
    const ex = I._quoteEx(kd, c, t, H);
    if (!ex) return;
    ok(ex.type && (ex.t || ex.options), `${t.id} citation ${ci + 1} · ${kd} : exercice complet`);
    if (ex.type === "qcm") {
      ok(ex.options.length >= 2 && ex.answer >= 0 && ex.answer < ex.options.length, `${t.id} citation ${ci + 1} · ${kd} : bonne réponse présente`);
      ok(new Set(ex.options).size === ex.options.length, `${t.id} citation ${ci + 1} · ${kd} : propositions distinctes`);
      ok(!ex.options.some(o => BAD.test(o)), `${t.id} citation ${ci + 1} · ${kd} : propositions propres`);
    }
  }));
  /* Bilan éclair */
  const B = I._blitz(t, H);
  ok(B.length >= 8, `${t.id} : bilan éclair de ${B.length} questions`);
  B.forEach(b => ok(b.opts.includes(b.ok) && new Set(b.opts).size === b.opts.length, `${t.id} : question du bilan cohérente (${b.q.slice(0, 30)})`));
});
/* Les 3 du jour */
for (let k = 0; k < 20; k++) {
  const P = I._todayPick(H);
  ok(P.text && P.quotes.length === 2 && P.quotes.every(q => q.t !== P.text), "Les 3 du jour : un texte et deux citations d'autres textes");
}
/* Choix des méthodes selon le niveau */
[0, 1, 2, 3].forEach(l => { const K = I._kinds(l); ok(K.length === 2 && K[0] !== K[1], `niveau ${l} : deux méthodes différentes`); });

/* Situer dans le temps : le siècle, jamais l'année à deviner */
H.texts.forEach(t => {
  for (let k = 0; k < 30; k++) {
    const st = I._build(t, H, false, { ok: 0, tot: 0 }, { train() {} }).find(s => s.eye === "Situer dans le temps");
    if (!st) continue;
    ok(/Quel siècle/.test(st.html) && /imp-cent/.test(st.html) && !/imp-range|En quelle année/.test(st.html), `${t.id} : « Situer dans le temps » demande le siècle`);
    break;
  }
});

/* « Sans citations » en spécialité : plus aucune étape ni question sur une citation */
win.Recto.core.noQ = () => true;
H.texts.forEach(t => {
  [false, true].forEach(recall => {
    for (let k = 0; k < 20; k++) {
      const S = I._build(t, H, recall, { ok: 0, tot: 0 }, { train() {} });
      ok(S.length >= (recall ? 4 : 9), `${t.id} ${recall ? "rappel" : "visite"} sans citations : ${S.length} étapes`);
      const html = S.map(st => typeof st.html === "function" ? st.html() : st.html).join("");
      ok(!/imp-ex|<blockquote|#\/hlp\/citation\//.test(html), `${t.id} ${recall ? "rappel" : "visite"} sans citations : aucune citation à apprendre`);
    }
  });
  ok(I._blitz(t, H).every(b => b.k !== "Qui l'a écrit ?"), `${t.id} : bilan éclair sans citations`);
});
for (let k = 0; k < 10; k++) {
  const P = I._todayPick(H);
  ok(P.quotes.length === 0 && P.more.length === 2 && new Set([P.text].concat(P.more)).size === 3, "Les 3 du jour sans citations : trois textes différents");
}
delete win.Recto.core.noQ;

console.log(`\n${fails ? "ÉCHECS : " + fails : "Tout est bon"} · ${oks} vérifications réussies`);
process.exit(fails ? 1 : 0);
