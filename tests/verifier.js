/* Recto · vérifications automatiques des données et du bac blanc.
   Lancer depuis la racine du projet :  node tests/verifier.js
   Aucune dépendance : les fichiers du site sont chargés dans un bac à sable. */
"use strict";
const fs = require("fs"), path = require("path"), vm = require("vm");
const ROOT = path.join(__dirname, "..");
let fails = 0, oks = 0;
const ok = (cond, msg) => { if (cond) oks++; else { fails++; console.log("  ÉCHEC · " + msg); } };
const section = t => console.log("\n" + t);

/* Bac à sable : window, Recto.add et les fichiers du site */
const win = {};
win.window = win;
win.Recto = { add(id, d) { win.BOOKS[id] = d; } };
win.BOOKS = {};
const ctx = vm.createContext(win);
const load = f => vm.runInContext(fs.readFileSync(path.join(ROOT, f), "utf8"), ctx, { filename: f });
["contenus/bibliotheque.js", "contenus/lecons/le-langage.js", "contenus/lecons/l-art.js", "contenus/livres/discours-de-la-methode.js",
  "contenus/hlp/hlp.js", "contenus/bac/tronc-commun.js", "assets/bac.js", "assets/hlp.js"].forEach(load);
const LIB = win.RECTO_LIBRARY.items, H0 = win.RECTO_HLP, BANK = win.RECTO_BAC_TC, BOOKS = win.BOOKS;
const Engine = win.Recto.bacEngine, HD = win.Recto.hlpData;
const norm = s => String(s).toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/[^a-z0-9]+/g, " ").trim();

/* ------------------------------------------------------------------ */
section("1. Tronc commun : contenus existants conservés");
const expect = { "le-langage": [182, 29], "l-art": [162, 29], "discours-de-la-methode": [180, 24] };
Object.keys(expect).forEach(id => {
  ok(BOOKS[id], "contenu chargé : " + id);
  if (!BOOKS[id]) return;
  ok(BOOKS[id].exercises.length === expect[id][0], `${id} : ${BOOKS[id].exercises.length} exercices (attendu ${expect[id][0]})`);
  ok(Object.keys(BOOKS[id].notions).length === expect[id][1], `${id} : ${Object.keys(BOOKS[id].notions).length} fiches (attendu ${expect[id][1]})`);
});
ok(LIB.filter(m => !m.space || m.space === "tc").length === 3, "la bibliothèque du tronc commun compte toujours 2 leçons et 1 livre");
ok(LIB.filter(m => m.space === "hlp").every(m => m.type !== "lecon" || (m.discipline && m.chapter)), "toute leçon HLP déclare sa discipline et son chapitre");

/* ------------------------------------------------------------------ */
section("2. Spécialité HLP : textes, classement, doublons, pages");
const T = {}, A = {};
H0.authors.forEach(a => { ok(!A[a.id], "auteur unique : " + a.id); A[a.id] = a; });
H0.texts.forEach(t => { ok(!T[t.id], "texte unique : " + t.id); T[t.id] = t; });
const chapters = new Set(H0.chapters.filter(c => !c.planned).map(c => c.id));
H0.texts.forEach(t => {
  ok(A[t.author], `${t.id} : auteur connu`);
  ok(["litterature", "philosophie"].includes(t.discipline), `${t.id} : discipline valide`);
  ok(chapters.has(t.chapter), `${t.id} : chapitre existant et ouvert`);
  ok(t.classement && ["en-tete", "theme"].includes(t.classement.chapitre) && t.classement.discipline, `${t.id} : origine du classement indiquée`);
  ok(t.doc && t.doc.photos && t.doc.photos.length, `${t.id} : référence à une photo`);
  ["sujet", "problematique", "these", "neutre", "short"].forEach(k => ok(t[k] && t[k].length > 10, `${t.id} : champ ${k}`));
  ["idees", "arguments", "exemples", "connaissances", "dissertation"].forEach(k => ok(Array.isArray(t[k]) && t[k].length >= 1, `${t.id} : liste ${k}`));
  ok(t.citations.length >= 3, `${t.id} : au moins 3 citations`);
  t.citations.forEach((c, i) => {
    ok(c.t && c.sens && c.usage, `${t.id} citation ${i + 1} : texte, sens, usage`);
    ok(c.t.split(/\s+/).length <= 40, `${t.id} citation ${i + 1} : courte (≤ 40 mots)`);
    if (c.fill) ok(c.fill.replace(/\[\[(.+?)\]\]/g, "$1") === c.t, `${t.id} citation ${i + 1} : le texte à trous reprend exactement la citation`);
  });
  (t.liens || []).concat(t.oppositions || []).forEach(l => ok(T[l.to] || H0.texts.some(x => x.id === l.to), `${t.id} : lien vers ${l.to} existant`));
  (t.liens || []).concat(t.oppositions || []).forEach(l => ok(l.to !== t.id, `${t.id} : pas de lien vers lui-même`));
  (t.annotations || []).forEach(a => ok(typeof a.keep === "boolean", `${t.id} : annotation triée (retenue ou écartée)`));
});
/* Doublons : pas deux fiches pour la même œuvre et la même référence, aucune citation partagée */
const keys = H0.texts.map(t => t.author + "|" + norm(t.work) + "|" + norm(t.ref || ""));
ok(new Set(keys).size === keys.length, "aucun texte en double (auteur + œuvre + référence)");
const seenQ = {};
H0.texts.forEach(t => t.citations.forEach(c => { const k = norm(c.t); ok(!seenQ[k] || seenQ[k] === t.id, `citation présente dans deux fiches : « ${c.t.slice(0, 40)} »`); seenQ[k] = t.id; }));
/* Photos : chaque fichier du dossier images/ est inventorié, chaque fiche renvoie à des photos inventoriées */
const imgDir = path.join(ROOT, "images");
const files = fs.existsSync(imgDir) ? fs.readdirSync(imgDir).filter(f => /\.heic$/i.test(f)).map(f => f.replace(/\.heic$/i, "")) : [];
const docs = {}; H0.docs.forEach(d => { docs[d.id] = d; });
if (files.length) files.forEach(f => ok(docs[f], "photo inventoriée : " + f));
else console.log("  (dossier images/ absent : inventaire des fichiers non vérifié)");
H0.texts.forEach(t => t.doc.photos.forEach(p => ok(docs[p] && docs[p].texts.includes(t.id), `${t.id} ↔ ${p} : renvoi dans les deux sens`)));
H0.docs.forEach(d => d.texts.forEach(id => ok(T[id] && T[id].doc.photos.includes(d.id), `${d.id} → ${id} : renvoi dans les deux sens`)));
ok(H0.docs.filter(d => !d.texts.length).every(d => /Présentation du chapitre/.test(d.what)), "seule la page de présentation du chapitre n'est pas un texte");
/* Pages successives : le TEXTE 6 de Tocqueville tient sur deux feuilles d'une même photo */
ok(T["tocqueville-despotisme"].doc.pages && /deux feuilles/.test(T["tocqueville-despotisme"].doc.pages), "pages successives associées (Tocqueville, TEXTE 6)");
ok(T["camus-maitre"].doc.extraits === 2, "deux extraits d'une même page réunis dans une seule fiche (Camus)");
/* Séparation des disciplines et des espaces */
const byDisc = d => H0.texts.filter(t => t.discipline === d).length;
ok(byDisc("litterature") > 0 && byDisc("philosophie") > 0, `textes classés dans les deux disciplines (${byDisc("litterature")} / ${byDisc("philosophie")})`);
ok(H0.courses.litterature.length === 0 && H0.courses.philosophie.length === 0, "aucun cours de spécialité inventé");
H0.authors.forEach(a => ok(H0.texts.some(t => t.author === a.id), `${a.id} : l'auteur a au moins un texte`));
H0.authors.forEach(a => ok(a.presentation && a.idees && a.idees.length, `${a.id} : fiche auteur complète`));
console.log(`  ${H0.texts.length} textes · ${H0.authors.length} auteurs · ${H0.texts.reduce((n, t) => n + t.citations.length, 0)} citations · ${H0.docs.length} photos`);

/* ------------------------------------------------------------------ */
section("3. Spécialité HLP : exercices générés à partir des fiches");
const H = HD.prepare(H0, LIB), corpus = HD.corpusBook(H), corpus2 = HD.corpusBook(HD.prepare(H0, LIB));
ok(JSON.stringify(corpus.exercises.map(e => e.id)) === JSON.stringify(corpus2.exercises.map(e => e.id)), "génération stable (mêmes identifiants à chaque chargement)");
const ids = corpus.exercises.map(e => e.id);
ok(new Set(ids).size === ids.length, "identifiants d'exercices uniques");
corpus.exercises.forEach(e => {
  const nl = [e.notion].concat(e.ns || [], (e.pairs || []).map(p => p.n), (e.items || []).map(i => i && i.n)).filter(Boolean);
  ok(nl.length && nl.every(n => corpus.notions[n]), `${e.id} : rattaché à des fiches existantes`);
  if (e.type === "qcm") ok(new Set(e.options).size === e.options.length && e.options.length >= 2, `${e.id} : propositions distinctes`);
});
H0.texts.forEach(t => ok(corpus.exercises.some(e => e.notion === t.id), `${t.id} : au moins un exercice`));
console.log(`  ${corpus.exercises.length} exercices · ${corpus.parts.length - 1} parties`);

/* ------------------------------------------------------------------ */
section("4. Bac blanc du tronc commun : banque de sujets");
const NIDS = BANK.notions.map(n => n.id);
const subjects = Engine.build(BANK, BOOKS);
subjects.forEach(s => {
  ok(s.ns.length && s.ns.every(n => NIDS.includes(n)), `${s.id} : notions valides`);
  (s.refs || []).forEach(r => ok(BOOKS[r[0]] && BOOKS[r[0]].notions[r[1]], `${s.id} : référence ${r.join("/")} existante`));
  if (s.kind === "diss") ok(s.q && s.prob && s.plan && s.plan.length >= 2, `${s.id} : sujet, problématique et plan`);
  if (s.kind === "expl") {
    ok(s.text && s.text.length > 400, `${s.id} : texte assez long pour une explication`);
    s.mouvement.forEach(m => ok(s.text.includes(m.from.replace(/…$/, "")), `${s.id} : le mouvement « ${m.from} » est bien dans le texte`));
  }
});
NIDS.forEach(n => {
  const c = Engine.counts(subjects, [n]);
  ok(c.diss >= 2, `${n} seule : au moins 2 dissertations (${c.diss})`);
  ok(c.expl >= 1, `${n} seule : au moins 1 texte (${c.expl})`);
  ok(c.quest >= 3, `${n} seule : au moins 3 questions (${c.quest})`);
});
console.log(`  ${subjects.filter(s => s.kind === "diss").length} dissertations · ${subjects.filter(s => s.kind === "expl").length} textes · ${subjects.filter(s => s.kind === "quest").length} questions`);

/* ------------------------------------------------------------------ */
section("5. Bac blanc : le tirage respecte la sélection");
const subsets = [];
for (let m = 1; m < 1 << NIDS.length; m++) subsets.push(NIDS.filter((_, i) => m & (1 << i)));
let draws = 0, crossMissing = 0;
subsets.forEach(sel => Object.keys(Engine.FORMATS).forEach(fmt => {
  for (let k = 0; k < 12; k++) {
    const d = Engine.draw(subjects, sel, fmt, []);
    draws++;
    d.diss.concat(d.expl).forEach(s => ok(s.ns.every(n => sel.includes(n)), `sélection ${sel.join("+")} (${fmt}) : « ${s.q || s.id} » n'introduit aucune autre notion`));
    d.quest.forEach(s => ok(s.ns.some(n => sel.includes(n)), `sélection ${sel.join("+")} : question hors sujet ${s.id}`));
    const all = d.diss.concat(d.expl, d.quest).map(s => s.id);
    ok(new Set(all).size === all.length, `sélection ${sel.join("+")} (${fmt}) : pas de sujet en double`);
    const F = Engine.FORMATS[fmt].n;
    ok(d.diss.length === Math.min(F.diss, Engine.counts(subjects, sel).diss), `sélection ${sel.join("+")} (${fmt}) : nombre de dissertations`);
    ok(d.expl.length === Math.min(F.expl, Engine.counts(subjects, sel).expl), `sélection ${sel.join("+")} (${fmt}) : nombre de textes`);
    if (sel.length > 1 && d.diss.length && Engine.pool(subjects, "diss", sel).some(s => s.ns.length > 1) && !d.diss.some(s => s.ns.length > 1)) crossMissing++;
  }
}));
ok(crossMissing === 0, `plusieurs notions : au moins un sujet qui les croise quand il en existe (${crossMissing} manque(s))`);
/* Les exemples demandés : une seule notion, puis deux notions */
const one = Engine.draw(subjects, ["langage"], "epreuve", []);
ok(one.diss.length === 2 && one.expl.length === 1 && one.diss.concat(one.expl).every(s => s.ns.join() === "langage"), "« Le langage » seule : épreuve sur cette seule notion");
let crossed = 0;
for (let k = 0; k < 40; k++) { const two = Engine.draw(subjects, ["langage", "art"], "epreuve", []); if (two.diss.some(s => s.ns.includes("langage") && s.ns.includes("art"))) crossed++; }
ok(crossed === 40, `« Le langage » + « L'art » : un sujet mobilise les deux notions (${crossed}/40)`);
const all = Engine.draw(subjects, NIDS, "dissertation", []);
ok(all.diss.length === 3, "toutes les notions : tirage complet");
console.log(`  ${draws} tirages vérifiés sur ${subsets.length} sélections possibles`);

/* ------------------------------------------------------------------ */
console.log(`\n${fails ? "ÉCHECS : " + fails : "Tout est bon"} · ${oks} vérifications réussies`);
process.exit(fails ? 1 : 0);
