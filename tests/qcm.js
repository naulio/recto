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
    /* Pas de question d'histoire : aucune réponse ne doit tenir à une année précise */
    /* Un titre n'est pas une date : le roman d'Orwell */
    const YR = /\b(1[0-9]{3}|20[0-2][0-9])\b/, untitled = s => String(s || "").replace(/(roman|dans|Orwell,?)\s+1984/g, "");
    const YEAR = { test: s => YR.test(untitled(s)) }, years = s => (untitled(s).match(/\b(1[0-9]{3}|20[0-2][0-9])\b/g) || []).length;
    const dated =
      e.type === "fill" && /\[\[[^\]]*\b(1[0-9]{3}|20[0-2][0-9])\b/.test(e.text) ? "un trou est une année" :
      e.type === "qcm" && (YEAR.test(e.q) && !e.passage || (e.options || []).some(o => YEAR.test(o))) ? "année dans la question ou les propositions" :
      e.type === "vf" && YEAR.test(e.s) ? "année dans l'affirmation" :
      e.type === "match" && (e.pairs || []).some(p => YEAR.test(p.l) || YEAR.test(p.r)) ? "année à associer" :
      e.type === "order" && (/chronolog|plus ancien|plus récent/i.test(e.q) || years(e.explain) >= 3) ? "ordre chronologique" :
      e.type === "flash" && (YEAR.test(e.f) || /\bdates?\b/i.test(e.f) || years(e.b) >= 3) ? "carte sur des dates" : "";
    if (dated) { total++; out.push(`${exId} · question de date (${dated}) · ${e.q || e.s || e.f || e.text}`); }
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
