/* Recto · Bibliothèque : la liste des leçons et des livres.
   Pour ajouter un contenu, voir contenus/MODELE.md : créer le fichier du contenu,
   puis ajouter une entrée ici (et dans la liste de sw.js pour le hors ligne).
   Le moteur charge le fichier à la demande. */
window.RECTO_LIBRARY = {
  items: [
    {
      id: "le-langage",
      type: "lecon",
      file: "contenus/lecons/le-langage.js",
      title: "Le langage",
      subject: "Philosophie",
      level: "Terminale",
      tagline: "Communiquer, agir, penser : ce que les mots font à la pensée.",
      tone: "#2f6fb0"
    },
    {
      id: "l-art",
      type: "lecon",
      file: "contenus/lecons/l-art.js",
      title: "L'art",
      subject: "Philosophie",
      level: "Terminale",
      tagline: "Créer, juger, représenter : l'œuvre, le goût et la réalité.",
      tone: "#b4532a"
    },
    {
      id: "discours-de-la-methode",
      type: "livre",
      file: "contenus/livres/discours-de-la-methode.js",
      title: "Discours de la méthode",
      author: "René Descartes",
      year: 1637,
      subject: "Philosophie",
      level: "Lycée",
      tagline: "Douter de tout pour trouver une première certitude.",
      tone: "#1f2a44"
    },
    /* Spécialité HLP : les textes étudiés, transformés en exercices (moteur d'entraînement de Recto).
       space: "hlp" les tient à l'écart du tronc commun. Les futurs cours HLP seront des leçons
       déclarées ici avec space: "hlp", discipline ("litterature" ou "philosophie") et chapter (ex. "ch1"). */
    {
      id: "hlp-textes",
      type: "corpus",
      space: "hlp",
      file: "contenus/hlp/hlp.js",
      title: "Textes HLP",
      subject: "HLP",
      level: "Terminale",
      tagline: "Les textes étudiés en spécialité : thèses, citations, auteurs, liens.",
      tone: "#0b7a8a"
    },
    /* Cours de spécialité, remis au propre à partir des notes de la classe.
       Discipline déduite du contenu (auteurs et notions de philosophie) : à confirmer, une seule ligne à changer. */
    {
      id: "hlp-ch1-education",
      type: "lecon",
      space: "hlp",
      discipline: "philosophie",
      disciplineNote: "déduite du contenu, à confirmer",
      chapter: "ch1",
      file: "contenus/lecons/hlp-ch1-education.js",
      title: "Éducation, émancipation et transmission",
      subject: "HLP",
      level: "Terminale",
      tagline: "Axe 1 · La recherche de soi : s'éduquer, l'histoire de l'éducation, l'éducation des femmes.",
      tone: "#5856d6"
    }
  ]
};
