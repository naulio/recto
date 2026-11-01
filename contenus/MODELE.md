# Ajouter une leçon ou un livre à Recto

Un contenu = un fichier JavaScript dans `contenus/lecons/` ou `contenus/livres/`, plus une entrée dans `contenus/bibliotheque.js` (et dans la liste `CORE` de `sw.js`, pour qu'il marche hors ligne).

## 1. L'entrée de bibliothèque

```js
{
  id: "la-conscience",              // identifiant unique, utilisé dans l'adresse (#/la-conscience/cours)
  type: "lecon",                    // "lecon" ou "livre"
  file: "contenus/lecons/la-conscience.js",
  title: "La conscience",
  author: "",                       // pour un livre
  year: null,                       // pour un livre
  subject: "Philosophie",           // sert de filtre dans la bibliothèque
  level: "Terminale",
  tagline: "Une phrase d'accroche.",
  tone: "#3a2a1f"                   // couleur de la couverture
}
```

## 2. Le fichier du contenu

```js
Recto.add("la-conscience", (function () {
  const parts = [
    { n: 0, roman: "", name: "Introduction", label: "Introduction", title: "…", essence: "…" },
    { n: 1, roman: "I", name: "Partie I", label: "…", title: "…", metaphor: "Une question courte", essence: "…" }
  ];                                              // l'index du tableau doit être égal à n

  /* Leçon : le cours, une page par idée (sans « course », c'est un livre avec un guide de lecture) */
  const course = [
    { id: "intro", part: 0, sec: "Introduction", title: "…",
      lead: "La phrase d'ouverture.",
      body: ["Un paragraphe, avec des *mots en gras*.", ["une liste", "à puces"]],
      side: [
        { k: "q", t: "Une citation.", a: "Auteur, Œuvre" },
        { k: "def", w: "Mot", t: "Définition." },
        { k: "ex", w: "Titre de l'exemple", t: "…" },
        { k: "plus", w: "Complément", t: "Un ajout au cours, signalé comme tel." },
        { k: "warn", t: "Un piège." }
      ],
      key: "La phrase « À retenir ».",
      ns: ["id-notion"],                          // fiches liées à la page
      extra: false }                              // true : page entière de complément
  ];

  const notions = { "id-notion": { part: 1, title: "…", essentiel: "…", retenir: ["…"], citation: "…", piege: "…", video: "recherche YouTube" } };
  const exercises = []; /* voir contenus/lecons/l-art.js pour les 11 formats */

  return {
    unit: { one: "partie", many: "parties", fem: true },
    exam: { kind: "évaluation de philosophie", format: "une dissertation ou une explication de texte" },
    plan: { defaultRead: [], priority: [2, 1, 3], essOrder: [1, 3], fullOrder: [2, 1, 3], why: { 1: "…" } },
    overview: { title: "…", intro: "…", boxes: [{ t: "Le fil rouge", b: "…" }] },
    tips: ["Conseil affiché dans le bilan…"],
    parts, course, notions, exercises
  };
})());
```

Pour une leçon, les temps de lecture du plan sont calculés à partir des pages du cours. Pour garder « un écran, pas de défilement », vise environ 200 mots par page (texte + encadrés), deux encadrés au plus.

Formats d'exercices : `qcm`, `vf`, `fill`, `part`, `order`, `match`, `sort`, `schema`, `grid`, `flash`, `build`.
Un `qcm` avec `passage` (et `src`) devient une **explication de texte** : le passage s'affiche à côté des propositions, et l'exercice apparaît dans « Appliquer ».
Un exercice de citation (`part`, ou `fill` sans `plain: true`, ou `cite: true`) disparaît en mode « sans citations ».

## 3. Nouvelle version

Après une modification, change le numéro de version `V` dans `assets/app.js`, `sw.js` et les `?v=` de `index.html` : les navigateurs et l'app installée prendront la nouvelle version.
