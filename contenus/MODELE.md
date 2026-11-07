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

Repères de lecture et kit de citations (facultatifs, renvoyés avec le reste) :

```js
const authors = ["Henri Bergson", "Bergson"];   // colorés dans le cours (nom complet avant le nom court)
const works = ["Le Rire"];                      // en italique dans le cours
const kit = {
  quotes: [                                     // dans l'ordre du fil : avec 2 à 5 citations, on garde les premières
    { id: "bergson", t: "La citation exacte du cours.", who: "Bergson", a: "Bergson, Le Rire", n: "id-notion",
      short: "Bergson : « … »", role: "les mots simplifient", sens: "Ce qu'elle veut dire.", memo: "Une image mentale.",
      pivot: "Comment l'adapter à n'importe quel sujet.",
      usages: [{ th: "la liberté", t: "L'argument qu'elle porte dans un sujet sur la liberté." }] }
  ],
  bridges: ["Transition de la citation 1 vers la 2 ; {B} = auteur de la suivante."]
};
```

Dans le texte du cours : `*mot*` met en gras une notion, `==phrase==` surligne l'idée clé.

Formats d'exercices : `qcm`, `vf`, `fill`, `part`, `order`, `match`, `sort`, `schema`, `grid`, `flash`, `build`.
Un `qcm` avec `passage` (et `src`) devient une **explication de texte** : le passage s'affiche à côté des propositions, et l'exercice apparaît dans « Appliquer ».
Un exercice de citation (`part`, ou `fill` sans `plain: true`, ou `cite: true`) disparaît en mode « sans citations ».

## 3. Bac blanc du tronc commun

Fichier : `contenus/bac/tronc-commun.js`.

- `notions` : les notions proposées, avec les contenus qui les nourrissent (`src`).
- `map` : à quelles notions se rattachent les fiches de chaque contenu (pour les questions de réflexion tirées des cartes mémoire).
- Les sujets de dissertation (`build`) des leçons sont repris automatiquement ; `buildNotions` précise ceux qui croisent deux notions.
- `subjects` : d'autres sujets (`ns` : la liste exacte des notions mobilisées, `termes`, `prob`, `plan`, `refs` vers des fiches, `piege`).
- `texts` : les textes à expliquer (`text`, `src`, `these`, `probleme`, `mouvement`, `enjeux`, `questions`, `refs`, `piege`). Chaque `mouvement.from` doit être recopié du texte.

Règle : un sujet n'est tiré que si **toutes** ses notions sont cochées. Pour une nouvelle leçon (par exemple *La conscience*), ajouter son id dans `map` avec `def: ["conscience"]`, et ses sujets de dissertation seront proposés.

## 4. Spécialité HLP

**Un texte étudié** : une entrée dans `texts` de `contenus/hlp/hlp.js` (identification, `doc.photos` = le nom de la photo, `classement`, compréhension, `citations` recopiées de la photo, `annotations`, `alertes`, `complement` pour ce qui ne vient pas du document), et la photo dans `docs`. Un auteur nouveau : une entrée dans `authors`. Les exercices « S'entraîner sur les textes » sont générés tout seuls.

**Un chapitre** : retirer `planned: true` de son entrée dans `chapters` et lui donner `n`, `question`, `periode`, `presentation`.

**Un cours de spécialité** : une leçon Recto ordinaire (section 2), déclarée dans `contenus/bibliotheque.js` avec :

```js
{ id: "hlp-philo-ch1", type: "lecon", space: "hlp", discipline: "philosophie", chapter: "ch1",
  file: "contenus/lecons/hlp-philo-ch1.js", title: "…", subject: "HLP", level: "Terminale", tone: "#5856d6" }
```

Elle apparaît alors dans la section de sa discipline (et nulle part dans le tronc commun), avec cours, fiches, exercices et bilan. Le bac blanc HLP de cette discipline et de ce chapitre se débloque : ses sujets de dissertation (`build`) deviennent des sujets d'essai.

## 5. Nouvelle version

Après une modification, change le numéro de version `V` dans `assets/app.js`, `sw.js` et les `?v=` de `index.html` : les navigateurs et l'app installée prendront la nouvelle version. Un nouveau fichier doit aussi être ajouté à la liste `CORE` de `sw.js`. Puis lance `node tests/verifier.js`.
