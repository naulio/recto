/* Recto · contrôle de la qualité des QCM et des cartes mémoire.
   Usage : node tests/qcm.js [id-du-contenu …]   (sans argument : tous les contenus)
   Signale :
   - un QCM dont la bonne réponse se repère à sa longueur (bien plus longue que les mauvaises),
     ou dont les mauvaises réponses sont trop courtes pour faire douter ;
   - une carte mémoire dont la question n'en est pas une (un nom suivi de « ? »). */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const win = { BOOKS: {} }; win.window = win; win.Recto = { add(id, d) { win.BOOKS[id] = d; } };
vm.createContext(win);
["contenus/lecons/le-langage.js", "contenus/lecons/l-art.js", "contenus/livres/discours-de-la-methode.js", "contenus/lecons/hlp-ch1-education.js"]
  .forEach(f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), win, { filename: f }));
const ids = process.argv.slice(2).length ? process.argv.slice(2) : Object.keys(win.BOOKS);
const words = s => String(s).trim().split(/\s+/).length;
let bad = 0, total = 0;
ids.forEach(id => {
  const B = win.BOOKS[id]; if (!B) return console.log("contenu inconnu : " + id);
  const out = [];
  B.exercises.forEach((e, k) => {
    const exId = e.id || "?";
    if (e.type === "qcm" && Array.isArray(e.options) && typeof e.answer === "number") {
      total++;
      const ok = words(e.options[e.answer]), others = e.options.filter((_, i) => i !== e.answer).map(words);
      const avg = others.reduce((a, b) => a + b, 0) / others.length, max = Math.max(...others);
      /* Trop visible : la bonne réponse dépasse nettement la plus longue des mauvaises */
      if (ok > max + 3 && ok > avg * 1.6) out.push(`${exId} · bonne réponse trop longue (${ok} mots, les autres ${others.join("/")}) · ${e.q}`);
      else if (avg < 3.5 && ok >= 6) out.push(`${exId} · mauvaises réponses trop courtes (${others.join("/")} mots) · ${e.q}`);
    }
    if (e.type === "flash") {
      total++;
      const f = String(e.f).trim();
      if (words(f) <= 3 || /^[^?]{0,30}\s\?$/.test(f) && !/^(Qu|Pourquoi|Comment|Quel|Quelle|Où|Que|Combien|À quoi|De quoi|Qui|Est-ce)/i.test(f)) out.push(`${exId} · question de carte peu claire : « ${f} »`);
    }
  });
  bad += out.length;
  console.log(`\n=== ${id} : ${out.length} à revoir`);
  out.forEach(l => console.log("  " + l));
});
console.log(`\n${bad} à revoir sur ${total} QCM et cartes`);
process.exit(bad ? 1 : 0);
