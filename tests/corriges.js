/* Recto · contrôle des corrigés du bac blanc (contenus/bac/corriges-*.js).
   Usage : node tests/corriges.js [fichier…]   (sans argument : tous les corrigés)
   Vérifie : identifiant de sujet existant, structure, longueurs, aucune adresse au lecteur,
   citations « … » recopiées mot pour mot depuis les contenus, mouvements identiques à la banque. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
const win = { BOOKS: {} }; win.window = win; win.Recto = { add(id, d) { win.BOOKS[id] = d; } };
vm.createContext(win);
const load = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), win, { filename: f });
const SOURCES = ["contenus/bibliotheque.js", "contenus/lecons/le-langage.js", "contenus/lecons/l-art.js", "contenus/livres/discours-de-la-methode.js",
  "contenus/hlp/hlp.js", "contenus/lecons/hlp-ch1-education.js", "contenus/bac/tronc-commun.js"];
SOURCES.concat(["assets/bac.js", "assets/hlp.js"]).forEach(load);
const norm = s => String(s).replace(/[’‘]/g, "'").replace(/\s+/g, " ").toLowerCase();
const corpus = norm(SOURCES.map(f => fs.readFileSync(path.join(ROOT, f), "utf8")).join("\n").replace(/\\"/g, "\""));

/* Les sujets attendus */
const TC = win.Recto.bacEngine.build(win.RECTO_BAC_TC, win.BOOKS).filter(s => s.kind !== "quest");
const H = win.Recto.hlpData.prepare(win.RECTO_HLP, win.RECTO_LIBRARY.items);
const HP = win.Recto.hlpData.bacPool(H, win.BOOKS, { disc: "philosophie", chs: ["ch1"], texts: [] });
const SUBJ = {};
TC.forEach(s => { SUBJ[s.id] = s; });
HP.essai.concat(HP.interp).forEach(s => { SUBJ[s.id] = s; });

const files = process.argv.slice(2).length ? process.argv.slice(2)
  : fs.readdirSync(path.join(ROOT, "contenus/bac")).filter(f => /^corriges-.*\.js$/.test(f)).map(f => "contenus/bac/" + f);
win.RECTO_CORRIGES = {};
files.forEach(f => load(path.relative(ROOT, path.resolve(ROOT, f))));
const K = win.RECTO_CORRIGES;

let fails = 0, oks = 0;
const ok = (c, m) => { if (c) oks++; else { fails++; console.log("  ÉCHEC · " + m); } };
const words = s => String(s || "").trim().split(/\s+/).filter(Boolean).length;
const YOU = /(^|[^\p{L}])(tu|toi|ton|ta|tes|te|vous|votre|vos)(?!\p{L})|(^|[^\p{L}])t['’]/iu;
const between = (s, a, b, m) => ok(words(s) >= a && words(s) <= b, `${m} : ${words(s)} mots (attendu ${a} à ${b})`);
const quotes = s => (String(s).match(/«\s*([^«»]+?)\s*»/g) || []).map(q => q.replace(/^«\s*|\s*»$/g, "").replace(/…$/g, "").trim());

Object.keys(K).forEach(id => {
  const c = K[id], s = SUBJ[id];
  ok(s, `${id} : sujet existant`);
  if (!s) return;
  const kind = s.kind === "expl" ? "expl" : s.kind === "interp" ? "interp" : "diss";
  ok(typeof c.intro === "string" && typeof c.conclusion === "string" && Array.isArray(c.parties), `${id} : intro, parties, conclusion`);
  if (!Array.isArray(c.parties)) return;
  between(c.intro, 55, 140, `${id} intro`);
  between(c.conclusion, 35, 100, `${id} conclusion`);
  const np = kind === "expl" ? s.mouvement.length : null;
  ok(kind === "expl" ? c.parties.length === np : c.parties.length >= 2 && c.parties.length <= 3, `${id} : ${c.parties.length} parties`);
  c.parties.forEach((p, i) => {
    ok(p.titre && words(p.titre) <= 16, `${id} partie ${i + 1} : titre court`);
    ok(Array.isArray(p.args) && p.args.length >= 2 && p.args.length <= 4, `${id} partie ${i + 1} : 2 à 4 arguments`);
    (p.args || []).forEach((a, j) => {
      ok(a.idee && words(a.idee) <= 48, `${id} partie ${i + 1}.${j + 1} : idée de 48 mots au plus (${words(a.idee)})`);
      ok(kind === "expl" || (a.ref && words(a.ref) <= 22), `${id} partie ${i + 1}.${j + 1} : référence courte`);
    });
    if (p.transition) ok(words(p.transition) <= 35, `${id} partie ${i + 1} : transition courte`);
    if (kind === "expl") ok(p.from === s.mouvement[i].from, `${id} mouvement ${i + 1} : début identique à la banque`);
  });
  const all = [c.intro, c.conclusion].concat(...c.parties.map(p => [p.titre, p.transition || "", ...(p.args || []).map(a => a.idee + " " + (a.ref || ""))])).join(" \n ");
  const allNoQ = all.replace(/«[^«»]*»/g, "");
  ok(!YOU.test(allNoQ), `${id} : aucune adresse au lecteur (${(allNoQ.match(YOU) || [""])[0]})`);
  ok(!/"/.test(all), `${id} : guillemets français seulement`);
  quotes(all).forEach(q => q.split(/\s*\[(?:…|\.\.\.)\]\s*/).filter(p => words(p) >= 3).forEach(p => ok(corpus.includes(norm(p)), `${id} : citation introuvable dans les contenus : « ${p.slice(0, 70)} »`)));
  ok(words(all) <= 520, `${id} : ${words(all)} mots au total (520 au plus)`);
});
console.log(`${Object.keys(K).length} corrigés · ${fails ? "ÉCHECS : " + fails : "tout est bon"} · ${oks} vérifications`);
const missing = Object.keys(SUBJ).filter(id => !K[id]);
if (!process.argv.slice(2).length) console.log(missing.length ? "Sans corrigé : " + missing.join(", ") : "Tous les sujets ont un corrigé.");
process.exit(fails ? 1 : 0);
