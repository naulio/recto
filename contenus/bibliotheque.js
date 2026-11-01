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
    }
  ]
};
