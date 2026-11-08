/* Recto · Méthode du bac blanc : ce qu'il faut savoir faire, étape par étape, avec le temps à y consacrer.
   Utilisée par le bac blanc du tronc commun (dissertation, explication) et par celui de la spécialité HLP
   (interprétation, essai). Formulations impersonnelles, une ligne par conseil. */
window.RECTO_METHODE = {
  tc: [
    { id: "dissertation", title: "Dissertation", time: "4 h", steps: [
      { t: "Analyser le sujet", min: 20, d: "Définir chaque terme, repérer ce que la question présuppose, noter les sens possibles.", ex: "« Peut-on douter de tout ? » : douter = suspendre son jugement ; « tout » inclut-il le doute lui-même ?" },
      { t: "Problématiser", min: 15, d: "Formuler la tension qui rend la réponse non évidente, en une question.", ex: "Douter de tout, est-ce détruire toute vérité, ou chercher la seule qui résiste ?" },
      { t: "Construire le plan", min: 25, d: "Deux ou trois parties qui répondent toutes au sujet, de la réponse la plus évidente à la plus juste." },
      { t: "Rédiger l'introduction au brouillon", min: 15, d: "Accroche, définitions, problème, problématique, annonce du plan." },
      { t: "Rédiger le développement", min: 140, d: "Par paragraphe : une idée, son explication, une référence précise, un exemple analysé, une phrase de bilan." },
      { t: "Conclure", min: 10, d: "Répondre nettement à la question, rappeler le chemin parcouru." },
      { t: "Relire", min: 15, d: "Orthographe, citations exactes, liens logiques entre les parties." }
    ], parts: [
      { t: "L'introduction", items: ["Accroche : un exemple ou une formule qui fait voir le problème.", "Définition des termes du sujet.", "Problème : pourquoi la réponse n'est pas évidente.", "Problématique : une question précise.", "Annonce du plan, en une phrase par partie."] },
      { t: "Une partie", items: ["Un titre clair au brouillon, une thèse par partie.", "Deux ou trois arguments, chacun dans son paragraphe.", "Chaque argument : idée, explication, référence du cours, exemple.", "Une transition qui montre la limite de la partie."] },
      { t: "La conclusion", items: ["Réponse nette à la problématique.", "Le chemin parcouru, en trois phrases.", "Pas d'idée nouvelle."] }
    ] },
    { id: "explication", title: "Explication de texte", time: "4 h", steps: [
      { t: "Lire le texte trois fois", min: 15, d: "Une lecture d'ensemble, puis une lecture crayon en main, puis une lecture des mots clés." },
      { t: "Dégager thèse, problème, enjeu", min: 20, d: "Thèse : ce que l'auteur affirme. Problème : la question à laquelle il répond. Enjeu : ce qui en dépend." },
      { t: "Découper le mouvement", min: 15, d: "Deux à quatre étapes, chacune nommée par ce que fait le texte (pose, objecte, illustre, conclut)." },
      { t: "Préparer l'analyse au brouillon", min: 40, d: "Pour chaque étape : mots clés, présupposés, exemples, liens logiques, références du cours utiles." },
      { t: "Rédiger", min: 120, d: "Introduction, explication linéaire étape par étape, conclusion." },
      { t: "Conclure et relire", min: 30, d: "Thèse reformulée, intérêt du texte, citations vérifiées." }
    ], parts: [
      { t: "L'introduction", items: ["Situer le texte : auteur, œuvre, question traitée.", "Thèse, en une phrase.", "Problème et enjeu.", "Annonce du mouvement du texte."] },
      { t: "L'explication", items: ["Suivre l'ordre du texte, étape par étape.", "Citer de courts passages, puis les expliquer : sens des mots, présupposés, liens logiques.", "Expliquer les exemples de l'auteur.", "Mobiliser le cours pour éclairer, pas pour réciter."] },
      { t: "La conclusion", items: ["Thèse reformulée.", "Ce que le texte apporte à la notion.", "Éventuellement, une limite."] }
    ] }
  ],
  hlp: [
    { id: "epreuve", title: "L'épreuve", time: "4 h", steps: [
      { t: "Lire le texte et les deux questions", min: 15, d: "Repérer la discipline du texte : l'interprétation porte sur elle, l'essai sur l'autre." },
      { t: "Interprétation", min: 105, d: "Répondre à la question en expliquant le texte." },
      { t: "Essai", min: 105, d: "Réfléchir à la question en s'appuyant sur les œuvres et le cours." },
      { t: "Relire", min: 15, d: "Citations exactes, réponses nettes aux deux questions." }
    ], parts: [
      { t: "Barème", items: ["Les deux exercices comptent chacun pour moitié.", "Le temps se partage à égalité."] }
    ] },
    { id: "interpretation", title: "Interprétation", time: "1 h 45", steps: [
      { t: "Comprendre la question", min: 10, d: "Définir ses termes, repérer ce qu'elle demande au texte." },
      { t: "Repérer les passages", min: 20, d: "Souligner ce qui répond à la question : thèse, arguments, exemples, formules." },
      { t: "Construire la réponse", min: 15, d: "Deux ou trois temps qui suivent l'argumentation du texte." },
      { t: "Rédiger", min: 60, d: "Introduction, développement appuyé sur des citations expliquées, conclusion." }
    ], parts: [
      { t: "L'introduction", items: ["Situer le texte.", "Reformuler la question.", "Annoncer la réponse en deux ou trois temps."] },
      { t: "Le développement", items: ["Chaque temps : une idée du texte, une citation courte, son explication.", "Ne pas paraphraser : expliquer ce que le texte fait.", "Rester dans la discipline du texte."] },
      { t: "La conclusion", items: ["Réponse nette à la question.", "Ouverture possible vers un autre texte étudié."] }
    ] },
    { id: "essai", title: "Essai", time: "1 h 45", steps: [
      { t: "Analyser la question", min: 10, d: "Définir les termes, formuler la tension." },
      { t: "Chercher les références", min: 15, d: "Œuvres et textes étudiés, auteurs du cours, exemples précis." },
      { t: "Construire le plan", min: 15, d: "Deux ou trois parties progressives." },
      { t: "Rédiger", min: 65, d: "Introduction, parties argumentées et illustrées, conclusion." }
    ], parts: [
      { t: "L'introduction", items: ["Accroche, définitions, problématique, annonce du plan."] },
      { t: "Une partie", items: ["Une thèse, deux ou trois arguments.", "Chaque argument appuyé sur une œuvre ou un texte étudié, précisément cité.", "Une transition."] },
      { t: "La conclusion", items: ["Réponse nette, chemin parcouru."] }
    ] }
  ],
  /* Ce que le correcteur valorise et ce qui coûte des points (indicatif : il n'existe pas de barème national détaillé) */
  grille: [
    { t: "Comprendre le sujet", ok: "Termes définis, présupposés repérés.", ko: "Sujet traité comme un thème ; mots non définis." },
    { t: "Problématiser", ok: "Une tension réelle, formulée en une question.", ko: "Question reformulée sans tension." },
    { t: "Construire", ok: "Parties qui répondent toutes au sujet et progressent.", ko: "Plan « oui / non » sans progression ; catalogue." },
    { t: "Argumenter", ok: "Chaque idée expliquée, appuyée sur une référence précise.", ko: "Récitation du cours ; citations sans explication." },
    { t: "Illustrer", ok: "Exemples analysés, au service de l'argument.", ko: "Exemples plaqués ou absents." },
    { t: "Expliquer un texte", ok: "Mots du texte analysés, mouvement suivi.", ko: "Paraphrase ; texte oublié au profit du cours." },
    { t: "Conclure", ok: "Réponse nette à la question posée.", ko: "Conclusion qui ne répond pas ou ajoute une idée." },
    { t: "Écrire", ok: "Phrases claires, citations exactes, transitions.", ko: "Fautes nombreuses, citations approximatives." }
  ],
  jourJ: [
    "Lire tous les sujets avant de choisir.",
    "Choisir le sujet dont la problématique vient le plus vite, pas celui dont le thème plaît.",
    "Tout préparer au brouillon, ne rédiger au brouillon que l'introduction.",
    "Garder 15 minutes pour relire.",
    "Une référence précise et expliquée vaut mieux que trois citées."
  ]
};
