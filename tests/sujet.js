/* Recto · affiche tout ce que les contenus disent d'un sujet du bac blanc (pour rédiger son corrigé).
   Usage : node tests/sujet.js S-r1 [L-l-art-build-3 …] */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const win = { BOOKS: {} }; win.window = win; win.Recto = { add(id, d) { win.BOOKS[id] = d; } };
vm.createContext(win);
["contenus/bibliotheque.js", "contenus/lecons/le-langage.js", "contenus/lecons/l-art.js", "contenus/livres/discours-de-la-methode.js",
  "contenus/hlp/hlp.js", "contenus/lecons/hlp-ch1-education.js", "contenus/bac/tronc-commun.js", "assets/bac.js", "assets/hlp.js"]
  .forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), win, { filename: f }));
const B = win.BOOKS;
const TC = win.Recto.bacEngine.build(win.RECTO_BAC_TC, B);
const H = win.Recto.hlpData.prepare(win.RECTO_HLP, win.RECTO_LIBRARY.items);
const HP = win.Recto.hlpData.bacPool(H, B, { disc: "philosophie", chs: ["ch1"], texts: [] });
const all = {}; TC.concat(HP.essai, HP.interp).forEach(s => { all[s.id] = s; });
const fiche = (b, n) => { const x = B[b] && B[b].notions[n]; if (!x) return `  [${b}/${n}] (fiche absente)`;
  const pages = (B[b].course || []).filter(p => (p.ns || []).includes(n));
  return `  [${b}/${n}] ${x.title}\n    essentiel : ${x.essentiel}\n    retenir : ${(x.retenir || []).join(" | ")}\n    citation : ${x.citation || "—"}\n    piège : ${x.piege || "—"}`
    + pages.map(p => `\n    page « ${p.title} » : ${[p.lead].concat(p.body.flat()).join(" ").replace(/\*|==/g, "")}\n      encadrés : ${(p.side || []).map(s => `(${s.k}) ${s.w ? s.w + " : " : ""}${s.t}${s.a ? " — " + s.a : ""}`).join(" / ")}`).join("");
};
const texte = id => { const t = H.T[id]; return `  [texte ${id}] ${t.a.name}, ${t.work}${t.ref ? ", " + t.ref : ""} (${t.year}) · ${t.discipline}\n    sujet : ${t.sujet}\n    problématique : ${t.problematique}\n    thèse : ${t.these}\n    idées : ${t.idees.join(" | ")}\n    arguments : ${t.arguments.join(" | ")}\n    exemples : ${t.exemples.join(" | ")}\n    citations : ${t.citations.map(c => "« " + c.t + " » (" + (c.where || "") + ") = " + c.sens).join(" || ")}\n    liens : ${(t.liens || []).map(l => l.to + " : " + l.t).join(" | ")}\n    oppositions : ${(t.oppositions || []).map(l => l.to + " : " + l.t).join(" | ")}\n    piège : ${t.piege || "—"}`; };
process.argv.slice(2).forEach(id => {
  const s = all[id];
  if (!s) return console.log(`${id} : sujet inconnu`);
  console.log(`\n==================== ${id} (${s.kind}) ====================`);
  if (s.kind === "expl") {
    console.log(`Texte : ${s.src}\n${s.text}\nNotes : ${(s.notes || []).join(" | ")}\nThèse : ${s.these}\nProblème : ${s.probleme}\nMouvements (le champ « from » de chaque partie du corrigé doit être recopié tel quel) :\n${s.mouvement.map((m, i) => `  ${i + 1}. from: ${JSON.stringify(m.from)} → ${m.t}`).join("\n")}\nEnjeux : ${s.enjeux}\nQuestions : ${(s.questions || []).join(" | ")}\nPiège : ${s.piege}`);
  } else if (s.kind === "interp") {
    console.log(`Question d'interprétation : ${s.q}`);
    console.log(texte(s.t));
  } else {
    console.log(`Sujet : ${s.q}\nNotions : ${(s.ns || []).join(", ")}\nTermes : ${(s.termes || []).join(" | ") || "—"}\nProblématique (à reprendre) : ${s.prob}\nPlan (à développer) :\n${(s.plan || []).map((p, i) => `  ${i + 1}. ${p}`).join("\n")}\nCitation clé : ${s.cit || "—"}\nPièges : ${(s.pieges || []).concat(s.piege ? [s.piege] : []).join(" | ") || "—"}`);
    if (s.ex) { const e = B[s.ex.b].exercises.find(x => x.id === s.ex.id); console.log(`Éléments du sujet dans le cours :\n${e.els.map(x => `  ${x.ok ? "✓" : "✗"} ${x.t}${x.why ? " (" + x.why + ")" : ""}`).join("\n")}`); }
    if (s.e) { const e = B[s.b].exercises.find(x => x.id === s.e); console.log(`Éléments du sujet dans le cours :\n${e.els.map(x => `  ${x.ok ? "✓" : "✗"} ${x.t}${x.why ? " (" + x.why + ")" : ""}`).join("\n")}`); }
  }
  console.log("Fiches du cours liées :");
  (s.refs || []).forEach(r => console.log(fiche(r[0], r[1])));
  if (s.tx && s.tx.length) { console.log("Textes étudiés à mobiliser :"); s.tx.forEach(id2 => console.log(texte(id2))); }
});
