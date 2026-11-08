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
  "contenus/hlp/hlp.js", "contenus/lecons/hlp-ch1-education.js", "contenus/bac/tronc-commun.js", "assets/bac.js", "assets/hlp.js"].forEach(load);
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
ok(H0.courses.litterature.length === 0 && H0.courses.philosophie.length === 0, "aucun cours de spécialité inventé dans les données des textes");
const HLPC = LIB.filter(m => m.space === "hlp" && m.type === "lecon");
ok(HLPC.length === 1 && HLPC[0].id === "hlp-ch1-education", "un seul cours de spécialité : celui des notes de la classe");
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
section("6. Cours HLP : Éducation, émancipation et transmission (notes de la classe)");
const CB = BOOKS["hlp-ch1-education"], CM = LIB.find(m => m.id === "hlp-ch1-education");
ok(CB, "cours HLP chargé");
ok(CM.space === "hlp" && CM.discipline === "philosophie" && CM.chapter === "ch1", "cours rangé en spécialité, philosophie, chapitre 1");
ok(!LIB.filter(m => !m.space || m.space === "tc").some(m => m.id === CM.id), "le cours HLP n'apparaît pas dans le tronc commun");
ok(BANK.map && !BANK.map[CM.id], "le cours HLP ne nourrit pas le bac blanc du tronc commun");
const CN = CB.notions, pages = CB.course;
ok(CB.parts.every((p, i) => p.n === i), "parties numérotées dans l'ordre");
ok(CB.parts.every(p => pages.some(x => x.part === p.n)), "chaque partie du cours (introduction, I à VIII) a ses pages");
const notesPages = new Set();
pages.forEach(p => {
  const m = /^Tes notes, p\. (\d+)(?:-(\d+))?$/.exec(p.src || "");
  ok(m, `${p.id} : page des notes indiquée`);
  if (m) for (let k = +m[1]; k <= +(m[2] || m[1]); k++) notesPages.add(k);
  ok((p.side || []).length <= 2, `${p.id} : deux encadrés au plus`);
  (p.ns || []).forEach(n => ok(CN[n], `${p.id} : fiche ${n} existante`));
  (p.side || []).forEach(s => ok(["q", "def", "ex", "plus", "warn", "check"].includes(s.k), `${p.id} : encadré de type connu (${s.k})`));
});
for (let k = 1; k <= 11; k++) ok(notesPages.has(k), `page ${k} des notes reprise dans le cours`);
const checks = pages.flatMap(p => (p.side || []).filter(s => s.k === "check").map(s => p.id + " " + s.t)).join("\n");
[["alienation", /illisible/], ["autonomie", /Lisbonne/], ["dewey", /1859/], ["ici-maintenant", /Hegel/], ["traites", /1393/], ["dates", /sans source/], ["pervertir", /Beauvoir/], ["empirisme", /papillon/]]
  .forEach(([id, rx]) => ok(new RegExp("^" + id + " .*" + rx.source, "m").test(checks), `« À vérifier » présent : ${id} (${rx.source})`));
Object.keys(CN).forEach(n => ok(pages.some(p => (p.ns || []).includes(n)), `fiche ${n} : reliée à une page du cours`));
const HT = {}; H0.texts.forEach(t => { HT[t.id] = t; });
Object.keys(CN).forEach(n => { if (CN[n].link) ok(HT[CN[n].link.replace("#/hlp/texte/", "")], `fiche ${n} : texte lié existant`); });
const nOf = e => [e.notion].concat(e.ns || [], (e.pairs || []).map(p => p.n), (e.items || []).map(i => i && i.n), (e.rows || []).map(r => r.n), (e.nodes || []).map(x => x.n), (e.branches || []).flat().map(x => x.n)).filter(Boolean);
const cids = CB.exercises.map(e => e.id);
ok(new Set(cids).size === cids.length, "identifiants d'exercices uniques");
CB.exercises.forEach(e => {
  const nl = nOf(e);
  ok(nl.length && nl.every(n => CN[n]), `${e.id} : rattaché à des fiches existantes`);
  if (e.type === "qcm") ok(new Set(e.options).size === e.options.length && e.answer === 0, `${e.id} : propositions distinctes`);
  if (e.type === "fill") ok(/\[\[.+?\]\]/.test(e.text), `${e.id} : texte à trous`);
  if (e.type === "part") ok(CB.parts[e.a] && e.a > 0, `${e.id} : partie valide`);
  if (e.type === "build") {
    ok(e.q && e.prob && e.plan.length >= 3 && e.els.some(x => !x.ok), `${e.id} : sujet d'essai complet`);
    ok(e.tx && e.tx.length && e.tx.every(id => HT[id] && HT[id].discipline === CM.discipline), `${e.id} : textes à mobiliser existants et de la même discipline`);
  }
});
Object.keys(CN).forEach(n => ok(CB.exercises.filter(e => nOf(e).includes(n)).length >= 4, `fiche ${n} : au moins 4 exercices`));
CB.kit.quotes.forEach(q => ok(CN[q.n] && q.usages.length >= 3, `kit : ${q.id} relié à une fiche`));
ok(CB.kit.bridges.length === CB.kit.quotes.length - 1, "kit : un pont entre chaque citation");
console.log(`  ${pages.length} pages · ${Object.keys(CN).length} fiches · ${CB.exercises.length} exercices · ${CB.exercises.filter(e => e.type === "build").length} sujets d'essai`);

/* ------------------------------------------------------------------ */
section("7. Bac blanc HLP : discipline, chapitres et textes respectés");
const HB = HD.prepare(win.RECTO_HLP, LIB), BK = { "hlp-ch1-education": CB };
const philo = HB.texts.filter(t => t.discipline === "philosophie"), litt = HB.texts.filter(t => t.discipline === "litterature");
const P0 = HD.bacPool(HB, BK, { disc: "philosophie", chs: ["ch1"], texts: [] });
ok(P0.interp.length === philo.length, `philosophie : une interprétation par texte de philosophie (${P0.interp.length})`);
ok(P0.essai.length === 10, `philosophie : les 10 sujets d'essai du cours (${P0.essai.length})`);
const PL = HD.bacPool(HB, BK, { disc: "litterature", chs: ["ch1"], texts: [] });
ok(PL.essai.length === 0 && PL.interp.every(s => HB.T[s.t].discipline === "litterature"), "littérature : aucun sujet venu du cours de philosophie");
ok(HD.bacPool(HB, BK, { disc: "philosophie", chs: [], texts: [] }).interp.length === 0, "aucun chapitre choisi : aucun sujet");
const N = { epreuve: [1, 1], interpretation: [2, 0], essai: [0, 3] };
let hdraws = 0;
Object.keys(N).forEach(fmt => {
  [[]].concat(philo.map(t => [t.id]), [[philo[0].id, philo[3].id]]).forEach(texts => {
    for (let k = 0; k < 10; k++) {
      const r = HD.bacDraw(HB, BK, { disc: "philosophie", chs: ["ch1"], texts }, fmt, []);
      hdraws++;
      ok(r.interp.length === Math.min(N[fmt][0], texts.length || 99) && r.essai.length === N[fmt][1], `${fmt} (${texts.join("+") || "tous"}) : nombre de sujets`);
      r.interp.forEach(s => ok(HB.T[s.t].discipline === "philosophie" && (!texts.length || texts.includes(s.t)), `${fmt} : interprétation dans la sélection (${s.t})`));
      r.essai.forEach(s => ok(s.tx.every(id => HB.T[id].discipline === "philosophie"), `${fmt} : essai sans texte de l'autre discipline`));
      if (texts.length === 1 && r.essai.length) ok(r.essai[0].tx.includes(texts[0]), `${fmt} : l'essai mobilise le texte choisi (${texts[0]})`);
      if (fmt === "epreuve" && r.interp.length) ok(r.essai[0].tx.includes(r.interp[0].t), "épreuve complète : l'essai prolonge le texte tiré");
      const ids = r.interp.concat(r.essai).map(s => s.id);
      ok(new Set(ids).size === ids.length, `${fmt} : pas de sujet en double`);
    }
  });
});
const tq = P0.interp.find(s => s.t === "tocqueville-uniformiser");
ok(tq && tq.doc && /affaire nationale/.test(tq.q), "la question d'interprétation relevée dans le manuel est reprise telle quelle (Tocqueville)");
ok(litt.length && !HD.bacDraw(HB, BK, { disc: "litterature", chs: ["ch1"], texts: [] }, "essai", []).essai.length, "littérature sans cours : pas d'essai (génération verrouillée dans l'interface)");
console.log(`  ${hdraws} tirages HLP vérifiés`);

/* ------------------------------------------------------------------ */
console.log(`\n${fails ? "ÉCHECS : " + fails : "Tout est bon"} · ${oks} vérifications réussies`);
process.exit(fails ? 1 : 0);
