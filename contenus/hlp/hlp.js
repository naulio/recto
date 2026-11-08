/* Recto · Spécialité HLP (Terminale) : chapitres, textes étudiés, auteurs.

   SOURCE PRIORITAIRE : les photographies des documents (dossier images/, IMG_2599 à IMG_2616).
   Règles suivies pour ce fichier :
   - les citations (champ « t ») sont recopiées telles qu'elles apparaissent sur les photos, et restent courtes ;
     « verif: true » signale une formulation à revérifier sur la feuille ;
   - les chapeaux, notes et questions du manuel sont résumés, pas recopiés ;
   - tout ce qui ne vient pas des documents est rangé dans « complement » (connaissances extérieures) ;
   - les doutes de lecture, incohérences et informations manquantes sont dans « alertes » ;
   - le chapitre et la discipline sont indiqués avec leur origine (« classement ») : en-tête de la feuille, ou déduction.
   Les cours de spécialité (littérature, philosophie) ne sont pas encore fournis : voir contenus/MODELE.md, section HLP. */
window.RECTO_HLP = {
  version: 1,
  level: "Terminale",

  disciplines: {
    litterature: { title: "Littérature", short: "Littér.", tone: "#a3366f", blurb: "Romans, poèmes, récits : ce que les écrivains montrent de l'éducation, et comment ils le disent." },
    philosophie: { title: "Philosophie", short: "Philo", tone: "#5856d6", blurb: "Thèses, arguments et concepts des philosophes étudiés en spécialité. Distincte de la philosophie du tronc commun." }
  },

  /* Programme : les intitulés officiels servent de repères (complément, l'ordre suivi en classe peut différer) */
  objets: [
    { id: "recherche-de-soi", title: "La recherche de soi", sem: "Semestre 1", complement: true,
      entries: ["ch1", "sensibilite", "metamorphoses"] },
    { id: "humanite", title: "L'Humanité en question", sem: "Semestre 2", complement: true,
      entries: ["creation", "histoire-violence", "humain-limites"] }
  ],

  chapters: [
    { id: "ch1", n: 1, objet: "recherche-de-soi", title: "Éducation, transmission et émancipation", question: "L'éducation est-elle neutre ?",
      periode: "4 semaines · du 4 septembre au 2 octobre", photo: "IMG_2608",
      presentation: [
        "Les Lumières rompent avec les modèles d'éducation hérités de l'humanisme de la Renaissance : l'apprentissage des choses doit primer la culture des mots, et l'éducation se centrer sur l'utile (pratique et social).",
        "Une attention nouvelle est portée aux manières de penser des enfants et au langage à tenir avec eux : les idées de Rousseau (Émile, 1762) se diffusent jusqu'à l'« éducation nouvelle » du XXe siècle.",
        "Une nation moderne doit se soucier de former les individus, donc se doter d'un système d'éducation publique ; avec Condorcet, l'instruction des enfants des deux sexes devient la clé de la démocratie et des libertés.",
        "Les révolutionnaires insistent sur les conditions sociales et politiques de l'émancipation ; au tournant du XXe siècle, un vaste débat porte sur les finalités de l'éducation scolaire, ses méthodes et son extension.",
        "Le XIXe siècle donne une grande place aux souvenirs d'écoliers, romancés ou autobiographiques : comprendre ce qu'un individu est devenu à partir de ce qu'il a reçu, et de ce avec quoi il a rompu.",
        "Pistes de réflexion : les âges de la vie et ce que veut dire être adulte ; la part de la famille, de l'école et de la société ; les formes de l'enseignement et de l'apprentissage ; l'aspiration à la liberté face aux institutions et aux traditions ; une éducation moderne et la question de la justice sociale."
      ],
      bibliographie: [
        "Rousseau, Émile ou De l'éducation (1762)", "Kant, Qu'est-ce que les Lumières ? (1784)", "Condorcet, Mémoires sur l'instruction publique (1791)",
        "Condorcet, Esquisse d'un tableau historique des progrès de l'esprit humain (1795)", "Kant, Réflexions sur l'éducation (1803)", "Hegel, Textes pédagogiques (1809-1823)",
        "Stendhal, Le Rouge et le Noir (1830)", "Balzac, Louis Lambert (1832)", "Tocqueville, De la démocratie en Amérique (1835-1840)", "Sand, Consuelo (1842)",
        "Chateaubriand, Mémoires d'outre-tombe (1849), livres I à V", "Tolstoï, Enfance, Adolescence, Jeunesse (1852-1857)",
        "Proudhon, De la justice dans la Révolution et dans l'Église (1858), 5e étude", "Nietzsche, Sur l'avenir de nos établissements d'enseignement (1872)",
        "Vallès, L'Enfant (1878)", "Renan, Souvenirs d'enfance et de jeunesse (1883), chap. 3", "J. Ferry, Lettre aux instituteurs (1883)",
        "Nietzsche, Ainsi parlait Zarathoustra [extraits] (1883-1885)", "Vallès, L'Insurgé (1886)", "Bourget, Le Disciple (1889)",
        "Bergson, Le Bon Sens et les études classiques (1895)", "Gide, Les Nourritures terrestres (1897)", "Dewey, Mon Credo pédagogique (1897)",
        "Colette, Claudine à l'école (1900)", "Dewey, L'Éducation au point de vue social (1913)", "Péguy, L'Argent (1913)",
        "Durkheim, L'Éducation morale ([1903] 1925)", "Alain, Propos sur l'éducation (1932)", "Guilloux, Le Sang noir (1935)",
        "Durkheim, L'Évolution pédagogique en France (publ. 1938)", "Beauvoir, Le Deuxième Sexe (1949)", "Arendt, La Crise de la culture (1961)",
        "Freinet, Œuvres pédagogiques [extraits] (1994)"
      ] },
    { id: "sensibilite", objet: "recherche-de-soi", title: "Les expressions de la sensibilité", planned: true },
    { id: "metamorphoses", objet: "recherche-de-soi", title: "Les métamorphoses du moi", planned: true },
    { id: "creation", objet: "humanite", title: "Création, continuités et ruptures", planned: true },
    { id: "histoire-violence", objet: "humanite", title: "Histoire et violence", planned: true },
    { id: "humain-limites", objet: "humanite", title: "L'humain et ses limites", planned: true }
  ],

  /* Cours de spécialité : ils seront ajoutés comme des leçons Recto (contenus/lecons/…) déclarées dans
     contenus/bibliotheque.js avec space: "hlp", discipline et chapter. Rien n'est inventé en attendant. */
  courses: { litterature: [], philosophie: [] },

  /* Les 18 photos, telles qu'elles ont été reçues. Le numéro de fichier ne suit pas l'ordre pédagogique. */
  docs: [
    { id: "IMG_2599", texts: ["ferry-lettre"], header: true, what: "Ferry, « Lettre aux instituteurs » · TEXTE 5 · encadré Helvétius / Diderot", note: "Note manuscrite utile (1905). Gribouillages en bas de page." },
    { id: "IMG_2600", texts: ["arendt-crise"], header: false, what: "Arendt, « La crise de l'éducation » · n° 12 (7 à la main) · photo prise de côté", note: "Page photographiée de travers ; lisible après redressement." },
    { id: "IMG_2601", texts: ["balzac-lambert"], header: false, what: "Balzac, Louis Lambert · n° 8 (6 à la main)", note: "" },
    { id: "IMG_2602", texts: ["rousseau-perfectibilite"], header: false, what: "Rousseau, Discours sur l'origine de l'inégalité · TEXTE 1 (3 en rouge)", note: "" },
    { id: "IMG_2603", texts: ["camus-maitre"], header: false, what: "Camus, lettre à son instituteur + Le Premier Homme · n° 5 (4 à la main) · planche de BD", note: "Deux extraits sur la même page : une seule fiche." },
    { id: "IMG_2604", texts: ["hugo-chaque-enfant"], header: true, what: "Hugo, « Chaque enfant qu'on enseigne » · TEXTE 4", note: "Nombreuses annotations utiles." },
    { id: "IMG_2605", texts: ["flaubert-bovary"], header: true, what: "Texte sans auteur ni titre · TEXTE 1 barré, 5 à la main", note: "Aucune référence sur la feuille : identifié comme le début de Madame Bovary (à confirmer)." },
    { id: "IMG_2606", texts: ["rabelais-adolescence"], header: true, what: "Rabelais, Gargantua, chap. 11 (adaptation moderne) · TEXTE 1", note: "Version originale en encadré, questions LIRE / DIRE." },
    { id: "IMG_2607", texts: ["rabelais-ponocrates"], header: true, what: "Rabelais, Gargantua, chap. 23 · TEXTE 2", note: "En bas, le bord d'une autre feuille (« … à l'école, 1900 ») : c'est la page de Colette (IMG_2614), pas un nouveau texte." },
    { id: "IMG_2608", texts: [], header: true, what: "Présentation du chapitre 1 : programme officiel (B.O.) et bibliographie indicative", note: "Page photographiée à l'envers. Ce n'est pas un texte étudié : elle sert à la page du chapitre." },
    { id: "IMG_2609", texts: ["peguy-hussards"], header: true, what: "Péguy, L'Argent · TEXTE 6 · questions et « Vers le bac »", note: "" },
    { id: "IMG_2610", texts: ["hugo-contemplations"], header: false, what: "Hugo, Les Contemplations (I, 13) · TEXTE 3", note: "Questions du manuel en partie cachées par un pli de la page." },
    { id: "IMG_2611", texts: ["nietzsche-allemands"], header: false, what: "Nietzsche, Crépuscule des idoles · TEXTE 6 · « Vers le Grand oral »", note: "Titre coupé en haut. En bas, le bord de la page d'Émile (IMG_2615) : pas un nouveau texte." },
    { id: "IMG_2612", texts: ["heritier-formatage"], header: false, what: "Héritier, La Différence des sexes · rubrique « Résonances » (3 entouré)", note: "En bas à droite, bord de la page d'Émile (IMG_2615)." },
    { id: "IMG_2613", texts: ["mill-assujettissement"], header: false, what: "Mill, De l'assujettissement des femmes · n° 2 (2 entouré)", note: "Notes de bas de page coupées à gauche. En bas, bord de la page d'Émile (IMG_2615)." },
    { id: "IMG_2614", texts: ["colette-claudine"], header: false, what: "Colette, Claudine à l'école · n° 3 · tableau de Richard Hall", note: "Photo prise à l'horizontale." },
    { id: "IMG_2615", texts: ["rousseau-emile"], header: false, what: "Rousseau, Émile, « Préface » · TEXTE 2", note: "Cette page apparaît aussi en bordure de IMG_2611, IMG_2612 et IMG_2613 : un seul texte." },
    { id: "IMG_2616", texts: ["tocqueville-uniformiser", "tocqueville-despotisme"], header: false, what: "Tocqueville, De la démocratie en Amérique · TEXTE 5 et TEXTE 6, sur deux feuilles", note: "Deux pages successives photographiées ensemble : le TEXTE 6 commence en haut et continue sur la feuille du bas." }
  ],

  authors: [
    { id: "rabelais", name: "François Rabelais", short: "Rabelais", sort: "Rabelais", dates: "v. 1483 ou 1494 – 1553", datesDoc: false, year: 1494, century: 16, epoque: "XVIe siècle · Renaissance, humanisme",
      presentation: "Moine, médecin et écrivain humaniste. Ses géants, Pantagruel (1532) puis Gargantua, lui permettent de rire de tout et de défendre un idéal de savoir, de liberté et de joie.",
      contexte: "La Renaissance redécouvre les textes antiques ; les humanistes critiquent l'enseignement médiéval des « sophistes », fondé sur la répétition et les commentaires.",
      idees: ["L'enfant laissé à ses instincts vit comme un petit animal.", "L'éducation humaniste forme l'homme entier, corps et esprit, par la curiosité et le plaisir.", "La satire de l'éducation médiévale et l'éloge d'un savoir encyclopédique."] },
    { id: "rousseau", name: "Jean-Jacques Rousseau", short: "Rousseau", sort: "Rousseau", dates: "1712-1778", datesDoc: true, year: 1712, century: 18, epoque: "XVIIIe siècle · Lumières", bio: "biographie p. 393 du manuel",
      presentation: "Philosophe et écrivain genevois. Il pense l'homme à partir de sa nature et de ce que la société en a fait ; son Émile (1762) renouvelle la pensée de l'éducation.",
      contexte: "Le Discours sur l'inégalité répond à une question de l'Académie de Dijon (1754-1755). Émile est condamné et brûlé à Paris en 1762.",
      idees: ["L'homme se distingue de l'animal par la liberté et surtout par la perfectibilité.", "La perfectibilité est ambivalente : elle produit les lumières et les erreurs, les vertus et les vices.", "Il faut connaître l'enfance avant d'éduquer, et ne pas chercher l'homme dans l'enfant."] },
    { id: "tocqueville", name: "Alexis de Tocqueville", short: "Tocqueville", sort: "Tocqueville", dates: "1805-1859", datesDoc: true, year: 1805, century: 19, epoque: "XIXe siècle · pensée libérale", bio: "biographie p. 394 du manuel",
      presentation: "Magistrat, homme politique et penseur libéral. Après un voyage aux États-Unis (1831-1832), il analyse la démocratie comme « égalité des conditions », avec ses promesses et ses dangers.",
      contexte: "De la démocratie en Amérique paraît en deux tomes : 1835 et 1840.",
      idees: ["Une éducation devenue « affaire nationale » risque d'uniformiser plutôt que d'émanciper.", "Le despotisme doux : un État tutélaire qui veut faire notre bonheur et nous garde dans l'enfance.", "L'égalité peut faire accepter la servitude comme un bienfait."] },
    { id: "balzac", name: "Honoré de Balzac", short: "Balzac", sort: "Balzac", dates: "1799-1850", datesDoc: true, year: 1799, century: 19, epoque: "XIXe siècle · roman réaliste", bio: "biographie p. 410 du manuel",
      presentation: "Romancier de La Comédie humaine, vaste fresque de la société française du XIXe siècle.",
      contexte: "Balzac a été pensionnaire au collège des Oratoriens de Vendôme, cadre de Louis Lambert.",
      idees: ["Le collège comme prison : discipline, pensum, récitation.", "L'esprit exceptionnel étouffe dans un système qui ne le comprend pas.", "La lecture libre, refuge et vraie formation de la pensée."] },
    { id: "hugo", name: "Victor Hugo", short: "Hugo", sort: "Hugo", dates: "1802-1885", datesDoc: true, year: 1802, century: 19, epoque: "XIXe siècle · romantisme", bio: "biographie p. 388 du manuel",
      presentation: "Poète, romancier, dramaturge et homme politique, figure majeure du romantisme. Il s'engage pour l'instruction du peuple, contre la misère et la peine de mort.",
      contexte: "Député en 1848, exilé sous le Second Empire (1851-1870), sénateur sous la IIIe République.",
      idees: ["L'ignorance mène au crime ; l'instruction est une lumière et un droit.", "L'école est un lieu sacré, l'instituteur un guide vers le progrès.", "Une éducation douce qui fait aimer le savoir, contre les pédants et le fouet."] },
    { id: "flaubert", name: "Gustave Flaubert", short: "Flaubert", sort: "Flaubert", dates: "1821-1880", datesDoc: false, year: 1821, century: 19, epoque: "XIXe siècle · roman réaliste",
      presentation: "Romancier, auteur de Madame Bovary (1857) et de L'Éducation sentimentale (1869), célèbre pour son travail du style et son ironie.",
      contexte: "Madame Bovary paraît en volume en 1857, après un procès dont Flaubert sort acquitté.",
      idees: ["L'école comme groupe qui impose ses codes.", "Le rire collectif et l'humiliation de l'élève venu d'ailleurs."],
      alerte: "Le nom de Flaubert n'apparaît pas sur la photo : l'attribution du texte est à confirmer." },
    { id: "mill", name: "John Stuart Mill", short: "Mill", sort: "Mill", dates: "1806-1873", datesDoc: false, year: 1806, century: 19, epoque: "XIXe siècle · libéralisme, utilitarisme", bio: "biographie p. 416 du manuel",
      presentation: "Philosophe et économiste anglais, défenseur de la liberté individuelle (De la liberté, 1859) et de l'égalité des sexes.",
      contexte: "Député, il défend en 1867 le droit de vote des femmes au Parlement britannique. Le manuel rappelle que ses idées sur l'égalité ont été élaborées avec son épouse, Harriet Taylor Mill.",
      idees: ["L'éducation des femmes est un conditionnement au service de leur soumission.", "Ce qu'on appelle la « nature » féminine est le produit d'un dressage."] },
    { id: "nietzsche", name: "Friedrich Nietzsche", short: "Nietzsche", sort: "Nietzsche", dates: "1844-1900", datesDoc: true, year: 1844, century: 19, epoque: "XIXe siècle · philosophie allemande", bio: "biographie p. 391 du manuel",
      presentation: "Philologue et philosophe allemand, critique de la morale, de la culture et de l'enseignement de son temps ; il invite chacun à devenir soi-même.",
      contexte: "Il a aussi consacré des conférences à l'enseignement : Sur l'avenir de nos établissements d'enseignement (1872), cité dans la bibliographie du chapitre.",
      idees: ["L'enseignement d'État dresse des jeunes gens utilisables.", "L'éducation supérieure n'appartient qu'à l'exception.", "Vocation contre profession : prendre son temps pour devenir soi-même."] },
    { id: "ferry", name: "Jules Ferry", short: "Ferry", sort: "Ferry", dates: "1832-1893", datesDoc: true, year: 1832, century: 19, epoque: "XIXe siècle · IIIe République",
      presentation: "Homme politique républicain, ministre de l'Instruction publique : ses lois rendent l'école primaire gratuite (1881), puis obligatoire et laïque (1882).",
      contexte: "La laïcité de l'école (1882) précède la loi de séparation des Églises et de l'État (1905).",
      idees: ["Séparer les croyances (privées) et les connaissances (communes).", "L'école laïque donne une éducation morale et civique.", "Une morale « universellement acceptée », comme le langage ou le calcul."] },
    { id: "colette", name: "Colette", short: "Colette", sort: "Colette", dates: "1873-1954", datesDoc: true, year: 1873, century: 20, epoque: "XXe siècle", bio: "biographie p. 412 du manuel",
      presentation: "Romancière (Sidonie-Gabrielle Colette), connue pour la série des Claudine et ses récits d'enfance en Bourgogne.",
      contexte: "Claudine à l'école paraît en 1900 sous le nom de son mari, Willy ; Montigny s'inspire de Saint-Sauveur-en-Puisaye, son village natal.",
      idees: ["L'école sépare filles et garçons et leur prépare des rôles différents.", "L'ironie comme regard critique sur l'institution."] },
    { id: "peguy", name: "Charles Péguy", short: "Péguy", sort: "Péguy", dates: "1873-1914", datesDoc: true, year: 1873, century: 20, epoque: "Début du XXe siècle", bio: "biographie p. 391 du manuel",
      presentation: "Écrivain, poète et essayiste, républicain et catholique, mort au front en septembre 1914.",
      contexte: "Enfant à Orléans dans les années 1880, il a connu l'école primaire de la République naissante.",
      idees: ["Les instituteurs, « hussards noirs » de la République.", "Le mythe républicain de l'école, armée pacifique de la nation."] },
    { id: "camus", name: "Albert Camus", short: "Camus", sort: "Camus", dates: "1913-1960", datesDoc: true, year: 1913, century: 20, epoque: "XXe siècle", bio: "biographie p. 411 du manuel",
      presentation: "Écrivain et philosophe né en Algérie dans une famille pauvre, auteur de L'Étranger et de La Peste, prix Nobel de littérature en 1957.",
      contexte: "Son instituteur d'Alger, Louis Germain, l'a poussé vers le lycée ; Camus lui dédie ses discours de Suède. Le Premier Homme, manuscrit retrouvé après sa mort, paraît en 1994.",
      idees: ["La gratitude envers le maître qui a changé une vie.", "Nourrir la faim de découverte plutôt que gaver.", "La considération du maître émancipe l'enfant pauvre."] },
    { id: "arendt", name: "Hannah Arendt", short: "Arendt", sort: "Arendt", dates: "1906-1975", datesDoc: true, year: 1906, century: 20, epoque: "XXe siècle", bio: "biographie p. 410 du manuel",
      presentation: "Philosophe allemande puis américaine, d'origine juive, exilée en 1933 ; elle a analysé le totalitarisme et la crise du monde moderne.",
      contexte: "« La crise de l'éducation » (1958) est reprise dans La Crise de la culture (Between Past and Future, 1961 ; traduction française 1972).",
      idees: ["L'éducation ne peut se passer d'autorité ni de tradition.", "L'école apprend aux enfants ce qu'est le monde, pas l'art de vivre.", "Distinguer enfants et adultes, sans isoler les enfants."] },
    { id: "heritier", name: "Françoise Héritier", short: "Héritier", sort: "Héritier", dates: "1933-2017", datesDoc: true, year: 1933, century: 20, epoque: "XXe-XXIe siècles · anthropologie", bio: "biographie p. 388 du manuel",
      presentation: "Anthropologue, professeure au Collège de France à la suite de Claude Lévi-Strauss, spécialiste de la parenté et des rapports entre les sexes.",
      contexte: "Elle a forgé la notion de « valence différentielle des sexes » (Masculin/Féminin, 1996).",
      idees: ["Des « modèles de formatage » fabriquent dès l'enfance deux sortes d'individus.", "La domination masculine est un conditionnement, pas une nature."] }
  ],

  texts: [
    /* ---------------------------------------------------------------- */
    { id: "ferry-lettre", chapter: "ch1", discipline: "philosophie", author: "ferry",
      classement: { chapitre: "en-tete", discipline: "Lettre d'un ministre, texte d'idées : rangée en philosophie (à confirmer avec les cours)." },
      title: "L'éducation morale de la nation, une priorité", work: "« Lettre aux instituteurs »", year: "1883", yearN: 1883, genre: "Lettre officielle",
      doc: { photos: ["IMG_2599"], printed: "TEXTE 5" },
      chapeau: "Après la loi du 28 mars 1882 qui rend l'école primaire obligatoire, Jules Ferry, ministre de l'Instruction publique, écrit aux instituteurs pour leur expliquer une de leurs missions essentielles : l'instruction civique et morale.",
      short: "L'école laïque doit transmettre une morale commune",
      sujet: "La mission morale et civique de l'instituteur dans l'école devenue laïque.",
      problematique: "Si l'école n'enseigne plus aucune religion, peut-elle encore former moralement les enfants ?",
      these: "La laïcité n'est pas un vide : en séparant l'école de l'Église, la loi confie à l'instituteur une éducation morale et civique, fondée sur ce qui est commun à tous, les notions du devoir et du droit.",
      idees: [
        "La loi a deux faces qui se complètent : retirer du programme tout dogme particulier, et placer au premier rang l'enseignement moral et civique.",
        "Elle sépare deux domaines longtemps confondus : les croyances (personnelles, libres, variables) et les connaissances (communes, indispensables à tous).",
        "Elle veut fonder une éducation nationale sur les notions du devoir et du droit.",
        "L'enseignement moral fait « la dignité » de la profession d'instituteur."
      ],
      arguments: [
        "Argument de répartition : la religion revient aux familles et à l'Église, la morale à l'école.",
        "Argument de liberté : séparer l'école de l'Église protège la liberté de conscience des maîtres et des élèves.",
        "Argument d'universalité : les règles élémentaires de la morale sont aussi universellement acceptées que celles du langage ou du calcul, donc enseignables à tous."
      ],
      exemples: ["La loi du 28 mars 1882.", "L'encadré du manuel : le débat des Lumières entre Helvétius (l'éducation doit être morale plutôt qu'encyclopédique) et Diderot (pas d'homme de bien sans lumières)."],
      neutre: "Neutre sur le plan religieux, mais pas sur le plan moral et civique : l'école laïque transmet des valeurs communes et laisse les croyances à la vie privée.",
      piege: "Laïque ne veut pas dire sans morale : la loi place l'enseignement moral « au premier rang ».",
      connaissances: ["Jules Ferry (1832-1893), ministre de l'Instruction publique.", "Loi du 28 mars 1882 : école primaire obligatoire, programme sans dogme religieux.", "La distinction croyances / connaissances.", "Le débat des Lumières : instruire ou éduquer ? (Helvétius / Diderot)."],
      dissertation: ["Montrer que l'éducation républicaine n'est pas neutre : elle assume de transmettre une morale commune.", "Défendre la laïcité comme condition de la liberté de conscience des élèves.", "Distinguer instruire (transmettre des savoirs) et éduquer (former des citoyens)."],
      liens: [
        { to: "peguy-hussards", t: "Péguy montre les instituteurs auxquels Ferry s'adresse : les « hussards noirs » chargés d'enraciner les valeurs républicaines." },
        { to: "hugo-chaque-enfant", t: "Hugo fait lui aussi de l'école un lieu de moralisation : instruire, c'est rendre honnête." }
      ],
      oppositions: [
        { to: "tocqueville-uniformiser", t: "Tocqueville redoute qu'une éducation devenue « affaire nationale » uniformise les esprits ; Ferry y voit le moyen de fonder une morale commune." },
        { to: "heritier-formatage", t: "Ferry présente la morale enseignée comme « universellement acceptée » ; Héritier montre que des normes présentées comme naturelles peuvent être des constructions." }
      ],
      citations: [
        { t: "L'instruction religieuse appartient aux familles et à l'Église, l'instruction morale à l'école.", where: "2e paragraphe",
          sens: "La laïcité répartit les rôles : la foi relève de la vie privée, la morale commune relève de l'école publique.",
          usage: "Sujets sur la neutralité de l'école, la laïcité, le rôle de l'État et de la famille dans l'éducation.",
          fill: "L'instruction religieuse appartient aux familles et à l'Église, l'instruction [[morale]] à l'école." },
        { t: "celui des croyances qui sont personnelles, libres et variables, et celui des connaissances qui sont communes et indispensables à tous, de l'aveu de tous", where: "2e paragraphe",
          sens: "Deux domaines : ce qui relève de la conscience de chacun, et ce qui doit être transmis à tous.",
          usage: "Pour définir ce que l'école peut légitimement transmettre et ce qu'elle doit respecter." },
        { t: "ces règles élémentaires de la vie morale qui ne sont pas moins universellement acceptées que celles du langage ou du calcul", where: "fin du texte",
          sens: "La morale enseignée se veut aussi universelle que la grammaire ou l'arithmétique, donc au-dessus des querelles.",
          usage: "Pour discuter : une morale enseignée par l'État peut-elle vraiment être neutre ?" },
        { t: "Est-on homme de bien sans justice ; et a-t-on de la justice sans lumières ?", who: "Diderot", where: "encadré du manuel",
          sens: "Pas de morale sans savoir : instruire est la condition pour éduquer.",
          usage: "Pour le débat instruire / éduquer." }
      ],
      annotations: [
        { t: "« 1905 · loi de séparation Église / État » (marge, en bas)", lecture: "sure", keep: true, why: "Repère utile : la laïcité de l'école (1882) précède la séparation des Églises et de l'État (1905)." },
        { t: "Soulignés : « ce qui fait la dignité de votre profession », « l'instituteur »", lecture: "sure", keep: true, why: "L'idée que la morale fait la dignité du métier." },
        { t: "Gribouillages et dessins en bas de page", keep: false, why: "Sans intérêt pédagogique." }
      ],
      manuel: { encadre: "Le débat des philosophes des Lumières : instruire ou éduquer ? Helvétius condamne une éducation réduite à la transmission de savoirs encyclopédiques : elle doit être morale. Diderot répond que seules les lumières acquises avec le savoir forment un homme de bien." },
      alertes: [],
      complement: ["La « Lettre aux instituteurs » est datée du 17 novembre 1883 (date absente de la photo).", "La loi du 16 juin 1881 avait d'abord rendu l'école primaire gratuite."],
      vf: [
        { s: "Pour Ferry, l'école laïque doit renoncer à toute éducation morale.", a: false, explain: "Au contraire : la loi place « au premier rang l'enseignement moral et civique »." },
        { s: "Ferry confie l'instruction religieuse aux familles et à l'Église.", a: true, explain: "« L'instruction religieuse appartient aux familles et à l'Église, l'instruction morale à l'école. »" }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "arendt-crise", chapter: "ch1", discipline: "philosophie", author: "arendt",
      classement: { chapitre: "theme", discipline: "Essai d'une philosophe : philosophie." },
      title: "Préparer l'enfant au monde", work: "« La crise de l'éducation », La Crise de la culture", year: "1961", yearN: 1961, genre: "Essai philosophique",
      doc: { photos: ["IMG_2600"], printed: "12", hand: "7" },
      chapeau: "Pour Arendt, les adultes des démocraties libérales refusent d'assumer la responsabilité de transmettre le monde aux enfants, alors que cette tâche reste le fondement de toute éducation.",
      short: "Éduquer, c'est transmettre un monde avec autorité",
      sujet: "La place de l'autorité et de la tradition dans l'éducation moderne.",
      problematique: "Comment éduquer avec autorité dans un monde qui ne reconnaît plus ni l'autorité ni la tradition ?",
      these: "Par nature, l'éducation ne peut se passer d'autorité ni de tradition : son rôle est d'introduire l'enfant dans un monde plus vieux que lui. Mais cette attitude tournée vers le passé doit rester propre à l'éducation : elle ne vaut pas pour la vie entre adultes.",
      idees: [
        "Le problème moderne : l'éducation a besoin d'autorité et de tradition, mais s'exerce dans un monde qui n'est plus structuré par elles.",
        "Il faut séparer le domaine de l'éducation de celui de la vie commune des adultes, où l'on n'adopte pas la même attitude.",
        "L'école apprend aux enfants ce qu'est le monde ; elle n'a pas à leur inculquer « l'art de vivre ».",
        "Apprendre est inévitablement tourné vers le passé, car le monde est toujours plus vieux que les enfants.",
        "La ligne entre enfants et adultes interdit d'éduquer les adultes et de traiter les enfants en adultes, mais elle ne doit pas devenir un mur."
      ],
      arguments: [
        "Argument de nature : éduquer, c'est transmettre ; on ne transmet qu'à partir d'une autorité et d'un héritage.",
        "Argument de séparation des domaines : l'autorité légitime face aux enfants serait illégitime entre adultes égaux.",
        "Argument contre l'isolement de l'enfance : laisser les enfants dans un monde à part, comme s'ils étaient autonomes, c'est les abandonner."
      ],
      exemples: ["L'illustration du manuel : Marie-Louise-Adélaïde Boizot, La Liseuse (copie d'un tableau de Greuze, 1766)."],
      neutre: "L'éducation n'est pas neutre : elle transmet un monde déjà là, avec son autorité et sa tradition, et c'est la responsabilité des adultes.",
      piege: "Arendt n'est pas « conservatrice » en politique : l'attitude tournée vers le passé vaut seulement pour l'éducation.",
      connaissances: ["Hannah Arendt (1906-1975).", "« La crise de l'éducation », dans La Crise de la culture.", "Autorité de l'éducateur, tradition, séparation de l'éducation et de la politique."],
      dissertation: ["Montrer que transmettre n'est pas aliéner : on n'innove qu'à partir d'un monde reçu.", "Défendre l'autorité du maître sans défendre l'autoritarisme politique.", "Critiquer une pédagogie qui laisse l'enfant « libre », mais seul."],
      liens: [
        { to: "camus-maitre", t: "Le maître de Camus incarne cette transmission : il rend les enfants « dignes de découvrir le monde »." },
        { to: "tocqueville-despotisme", t: "Comme Tocqueville, Arendt refuse de confondre les âges : un pouvoir qui traite les adultes en enfants est aussi grave qu'une éducation qui traite les enfants en adultes." }
      ],
      oppositions: [
        { to: "rousseau-emile", t: "Nuance : Rousseau veut partir de l'enfance et étudier l'enfant ; Arendt insiste sur le monde à transmettre et refuse d'isoler les enfants dans un monde à eux." }
      ],
      citations: [
        { t: "l'éducation ne peut faire fi de l'autorité, ni de la tradition", where: "1er paragraphe",
          sens: "Éduquer suppose une autorité et un héritage : on ne peut pas s'en débarrasser (« faire fi » : ne pas tenir compte, rejeter).",
          usage: "Sujets sur l'autorité, la tradition, la transmission.",
          fill: "l'éducation ne peut faire fi de l'[[autorité]], ni de la tradition" },
        { t: "le rôle de l'école est d'apprendre aux enfants ce qu'est le monde, et non pas leur inculquer l'art de vivre", where: "2e paragraphe",
          sens: "L'école transmet la connaissance du monde, pas une manière de vivre imposée.",
          usage: "Pour distinguer instruire et éduquer, ou limiter le pouvoir de l'école." },
        { t: "on ne peut ni éduquer les adultes ni traiter les enfants comme de grandes personnes", where: "2e paragraphe",
          sens: "L'éducation n'a de sens qu'entre générations : elle suppose une frontière entre enfants et adultes.",
          usage: "Sujets sur les âges de la vie, l'autorité, l'émancipation." }
      ],
      annotations: [
        { t: "Mots repérés au stylo : « cependant » (entouré), « devons », « devrait », « jamais »", lecture: "sure", keep: true, why: "Les connecteurs et les verbes de devoir qui portent l'argument." },
        { t: "« = autorité de l'au… » (près de la note 1)", lecture: "incertaine", keep: false, why: "Fin illisible." }
      ],
      manuel: { notes: ["1. « Faire fi » : ne pas tenir compte, rejeter."] },
      alertes: [],
      complement: ["« La crise de l'éducation » est d'abord une conférence de 1958 ; le recueil La Crise de la culture date de 1961 en anglais et a été traduit en français en 1972."],
      vf: [
        { s: "Pour Arendt, l'école doit apprendre aux enfants l'art de vivre.", a: false, explain: "Elle doit leur apprendre « ce qu'est le monde, et non pas leur inculquer l'art de vivre »." },
        { s: "Arendt réserve à l'éducation un rapport à l'autorité et au passé qui ne vaut pas en politique.", a: true, explain: "C'est « au seul domaine de l'éducation » qu'elle applique cette notion d'autorité." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "balzac-lambert", chapter: "ch1", discipline: "litterature", author: "balzac",
      classement: { chapitre: "theme", discipline: "Roman : littérature." },
      title: "Une discipline excessive", work: "Louis Lambert", year: "1832", yearN: 1832, genre: "Roman d'inspiration autobiographique",
      doc: { photos: ["IMG_2601"], printed: "8", hand: "6" },
      chapeau: "Dans ce roman d'inspiration autobiographique écrit à la première personne, le narrateur raconte sa rencontre au collège avec Louis Lambert, un élève surdoué qui n'est pas sans rappeler Balzac.",
      short: "La discipline du collège étouffe les esprits vifs",
      sujet: "La souffrance d'un élève surdoué soumis à la discipline du collège de Vendôme.",
      problematique: "Une école fondée sur la contrainte et la punition peut-elle former des esprits libres ?",
      these: "La discipline du collège (privations, pensum, récitations) étouffe les esprits les plus vifs : sans les livres lus en cachette, cette vie aurait mené les deux amis à « un abrutissement complet ».",
      idees: [
        "Venu de la campagne, Lambert souffre de la privation d'air, du changement d'habitudes et de la discipline.",
        "Le maître ne voit que l'élève inactif : « Vous ne faites rien, Lambert ! » le blesse « au cœur ».",
        "Le pensum, punition par lignes copiées, prive les deux amis de récréation.",
        "Leur mémoire rend l'apprentissage par récitation absurde : ils n'apprennent jamais leurs leçons.",
        "Les livres de la bibliothèque sont le seul refuge de la pensée ; le narrateur réclame l'attention des autorités sur ce « régime pénitentiaire »."
      ],
      arguments: [
        "Le récit d'expérience vaut argument : la souffrance d'un élève exceptionnel dénonce tout un système.",
        "Comparaison implicite de l'école et de la prison (« régime pénitentiaire »).",
        "Opposition entre l'apprentissage mécanique (réciter, copier) et la vraie vie de l'esprit (lire, penser)."
      ],
      exemples: ["Le pensum : à Vendôme, un certain nombre de lignes copiées pendant les récréations.", "Le maître qui interpelle Lambert rêvant devant la cour."],
      neutre: "L'éducation n'est pas neutre : ses méthodes (punir, faire réciter) façonnent ou brisent les esprits.",
      piege: "Le narrateur n'est pas Lambert : c'est son camarade, qui raconte à la première personne.",
      connaissances: ["Balzac (1799-1850), Louis Lambert (1832).", "Le pensum, le régent, le collège de Vendôme.", "Roman d'inspiration autobiographique."],
      dissertation: ["Critiquer une éducation fondée sur la contrainte et l'obéissance.", "Montrer que l'école peut être un lieu d'enfermement (image de la prison).", "Défendre la lecture libre comme véritable formation de l'esprit."],
      liens: [
        { to: "hugo-contemplations", t: "Hugo dénonce lui aussi le pensum et le « fouet d'un cuistre », et rêve d'une école où apprendre serait doux." },
        { to: "flaubert-bovary", t: "Chez Flaubert aussi, l'arrivée au collège d'un garçon de la campagne tourne mal." },
        { to: "nietzsche-allemands", t: "Nietzsche critique, comme Balzac, un « dressage » scolaire qui ne laisse pas le temps de penser." }
      ],
      oppositions: [
        { to: "rabelais-ponocrates", t: "Chez Rabelais, le jeu se fait « en liberté » ; chez Balzac, le pensum supprime même les récréations." },
        { to: "camus-maitre", t: "Le régent de Balzac blesse l'élève ; le maître de Camus lui donne le sentiment d'exister." }
      ],
      citations: [
        { t: "Vous ne faites rien, Lambert !", where: "l. 6",
          sens: "Le maître juge l'élève sur son activité visible et ne comprend pas qu'il pense.",
          usage: "Pour montrer qu'une école peut méconnaître l'intelligence qu'elle a sous les yeux." },
        { t: "Notre mémoire était si belle que nous n'apprenions jamais nos leçons.", where: "l. 15-16",
          sens: "La récitation est inutile pour des esprits vifs : l'école ne s'adapte pas aux élèves.",
          usage: "Critique de l'apprentissage par cœur.",
          fill: "Notre [[mémoire]] était si belle que nous n'apprenions jamais nos leçons." },
        { t: "Sans les livres que nous tirions de la bibliothèque, et qui entretenaient la vie dans notre cerveau, ce système d'existence nous eût menés à un abrutissement complet.", where: "l. 11-13",
          sens: "La lecture libre sauve la pensée de la discipline scolaire.",
          usage: "Pour opposer formation scolaire et formation personnelle." },
        { t: "le régime pénitentiaire observé dans les collèges", where: "l. 13-14",
          sens: "Le collège fonctionne comme une prison (note 2 : « qui a un rapport avec les détenus »).",
          usage: "Pour l'image de l'école-prison." }
      ],
      annotations: [
        { t: "Petites marques au stylo rouge dans le texte", keep: false, why: "Repères sans commentaire." }
      ],
      manuel: { notes: ["1. Régent : ici, professeur qui dirige une classe.", "2. Pénitentiaire : qui a un rapport avec les détenus, les prisonniers."] },
      alertes: [],
      complement: ["Balzac a été pensionnaire au collège des Oratoriens de Vendôme ; Louis Lambert appartient aux « Études philosophiques » de La Comédie humaine."],
      vf: [
        { s: "Dans Louis Lambert, le pensum consiste à copier des lignes pendant les récréations.", a: true, explain: "À Vendôme, il consistait « en un certain nombre de lignes copiées pendant les heures de récréation »." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "rousseau-perfectibilite", chapter: "ch1", discipline: "philosophie", author: "rousseau",
      classement: { chapitre: "theme", discipline: "Texte argumentatif d'un philosophe : philosophie." },
      title: "L'homme : l'être « perfectible »", work: "Discours sur l'origine et les fondements de l'inégalité parmi les hommes", ref: "première partie", year: "1755", yearN: 1755, genre: "Discours philosophique",
      doc: { photos: ["IMG_2602"], printed: "TEXTE 1", hand: "3 (rouge)" },
      chapeau: "Selon le manuel, Rousseau invente le mot « perfectibilité » pour désigner ce qui distingue l'homme de l'animal : la faculté que l'homme seul possède d'acquérir ce que la nature et l'instinct ne lui donnent pas.",
      short: "La perfectibilité distingue l'homme, pour le meilleur et le pire",
      sujet: "Ce qui distingue l'homme de l'animal : la liberté et surtout la perfectibilité.",
      problematique: "Qu'est-ce qui rend l'homme éducable, et cette faculté est-elle seulement une chance ?",
      these: "L'homme se distingue de l'animal par la liberté et, de façon incontestable, par la perfectibilité : la faculté de se perfectionner, dans l'individu comme dans l'espèce. Mais cette faculté presque illimitée est ambivalente : elle est aussi la source des malheurs de l'homme.",
      idees: [
        "L'animal obéit à la nature ; l'homme se reconnaît libre d'acquiescer ou de résister.",
        "La perfectibilité développe peu à peu toutes les autres facultés, dans l'espèce et dans l'individu.",
        "L'animal est fixé : au bout de quelques mois, il est ce qu'il sera toute sa vie ; son espèce ne change pas en mille ans.",
        "Ce qui est acquis peut se perdre : l'homme peut retomber plus bas que la bête.",
        "La perfectibilité arrache l'homme à sa condition première, tranquille, et le rend « tyran de lui-même et de la nature »."
      ],
      arguments: [
        "Comparaison homme / animal : instinct fixe contre facultés acquises.",
        "Argument par la perte : seul l'homme peut devenir « imbécile », preuve qu'il a acquis ce qu'il possède.",
        "Renversement final : le progrès produit aussi les erreurs et les vices."
      ],
      exemples: ["L'animal achevé en quelques mois ; l'espèce animale identique au bout de mille ans.", "Le vieillard qui perd ce que sa perfectibilité lui avait fait acquérir."],
      neutre: "La perfectibilité rend l'éducation possible et nécessaire, car rien n'est donné d'avance à l'homme ; mais ce qu'elle développe peut être bon ou mauvais.",
      piege: "Perfectibilité ne veut pas dire progrès moral assuré : elle produit « ses vices et ses vertus ».",
      connaissances: ["Rousseau (1712-1778).", "La perfectibilité, mot forgé par Rousseau selon le manuel.", "La liberté : acquiescer ou résister à l'impulsion de la nature."],
      dissertation: ["Fonder la nécessité de l'éducation : l'homme n'est pas fixé par l'instinct.", "Nuancer l'optimisme du progrès par l'éducation.", "Penser l'émancipation : l'homme n'est jamais achevé."],
      liens: [
        { to: "rousseau-emile", t: "Même auteur : parce que l'homme est perfectible, il faut savoir ce qu'est l'enfant avant de l'éduquer." },
        { to: "rabelais-adolescence", t: "Le petit Gargantua sans éducation vit comme un animal : la perfectibilité reste en sommeil." }
      ],
      oppositions: [
        { to: "hugo-chaque-enfant", t: "Hugo croit que l'instruction rend meilleur ; Rousseau rappelle que la perfectibilité fait éclore aussi les vices et les erreurs." },
        { to: "mill-assujettissement", t: "Rousseau définit l'homme par la liberté d'acquiescer ou de résister ; Mill montre une éducation qui apprend aux femmes à « ne pas vouloir »." }
      ],
      citations: [
        { t: "La Nature commande à tout animal, et la Bête obéit.", where: "l. 1",
          sens: "L'animal suit l'instinct, sans distance possible.",
          usage: "Comparaison homme / animal, liberté.",
          fill: "La Nature commande à tout animal, et la Bête [[obéit]]." },
        { t: "il se reconnaît libre d'acquiescer, ou de résister", where: "l. 2",
          sens: "L'homme sent les mêmes impulsions, mais peut leur dire oui ou non : c'est sa liberté.",
          usage: "Pour définir la liberté humaine." },
        { t: "c'est la faculté de se perfectionner", where: "l. 8",
          sens: "La définition de la perfectibilité.",
          usage: "Pour définir ce qui rend l'éducation possible.",
          fill: "c'est la faculté de se [[perfectionner]]" },
        { t: "un animal est, au bout de quelques mois, ce qu'il sera toute sa vie", where: "l. 10-11",
          sens: "L'animal est achevé très vite ; l'homme ne l'est jamais.",
          usage: "Pour opposer l'instinct et l'éducation." },
        { t: "le rend à la longue le tyran de lui-même et de la nature", where: "dernière ligne",
          sens: "Ambivalence : la perfectibilité donne la puissance et la servitude.",
          usage: "Pour nuancer l'éloge du progrès." }
      ],
      annotations: [
        { t: "« la Bête » entouré ; « c'est la faculté de se perfectionner » encadré", lecture: "sure", keep: true, why: "Les deux pôles du texte : l'animal fixé, l'homme perfectible." },
        { t: "Dessin dans la marge", keep: false, why: "Sans intérêt pédagogique." }
      ],
      manuel: { notes: ["1. Imbécile : un être privé de ses facultés intellectuelles.", "2. Lumières : connaissances."] },
      alertes: [],
      complement: ["Le Discours sur l'origine et les fondements de l'inégalité parmi les hommes répond à une question mise au concours par l'Académie de Dijon."],
      vf: [
        { s: "Pour Rousseau, un animal est, au bout de quelques mois, ce qu'il sera toute sa vie.", a: true, explain: "C'est ce qui l'oppose à l'homme, perfectible dans l'individu comme dans l'espèce." },
        { s: "Rousseau présente la perfectibilité comme une faculté sans aucun inconvénient.", a: false, explain: "Elle est presque illimitée, mais elle peut être « la source de tous les malheurs de l'homme »." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "camus-maitre", chapter: "ch1", discipline: "litterature", author: "camus",
      classement: { chapitre: "theme", discipline: "Lettre et roman autobiographique d'un écrivain : littérature." },
      title: "Hommage au maître", work: "« Lettre à son instituteur » (1957) et Le Premier Homme (roman inachevé)", year: "1957 · publ. 1994", yearN: 1957, genre: "Lettre ; roman autobiographique",
      doc: { photos: ["IMG_2603"], printed: "5", hand: "4", extraits: 2 },
      chapeau: "Après avoir reçu le prix Nobel de littérature, Camus écrit à son instituteur (1er extrait). Il lui rend aussi hommage dans son roman autobiographique inachevé, Le Premier Homme (2e extrait).",
      short: "Le maître qui considère l'enfant l'émancipe",
      sujet: "La gratitude d'un ancien élève envers l'instituteur qui a changé sa vie.",
      problematique: "Que doit-on à un maître : des savoirs, ou la possibilité de devenir quelqu'un ?",
      these: "Un maître ne se contente pas d'enseigner un programme : par sa considération et sa générosité, il ouvre à l'enfant pauvre un monde qui lui était fermé. L'émancipation passe par la rencontre d'un maître.",
      idees: [
        "Dans la lettre, Camus attribue son prix Nobel à son instituteur, dont il reste le « reconnaissant élève ».",
        "Dans le roman, la classe de M. Bernard nourrit « la faim de la découverte ».",
        "Ailleurs, on « gave » les élèves ; chez M. Bernard, ils se sentent exister et « dignes de découvrir le monde ».",
        "Le maître partage sa vie avec eux, mais condamne fermement le vol, la délation, l'indélicatesse et la malpropreté."
      ],
      arguments: [
        "Le témoignage d'un écrivain reconnu donne tout son poids à l'éloge du maître.",
        "Opposition entre gaver et nourrir la faim de découvrir.",
        "La considération accordée à l'enfant est la condition de son émancipation."
      ],
      exemples: ["Le prix Nobel annoncé à M. Germain.", "M. Bernard, l'instituteur du roman, inspiré de M. Germain.", "La planche de BD du manuel (Jean-Philippe Gueno, Paroles d'école, 2013)."],
      neutre: "L'éducation n'est pas neutre : le maître transmet aussi des valeurs et une considération qui émancipent.",
      piege: "Ne pas confondre M. Germain (le vrai instituteur, destinataire de la lettre) et M. Bernard (son nom dans le roman).",
      connaissances: ["Albert Camus (1913-1960), prix Nobel de littérature 1957.", "Le Premier Homme, roman autobiographique inachevé, publié en 1994.", "M. Germain / M. Bernard."],
      dissertation: ["Montrer que l'école peut émanciper socialement (« le petit enfant pauvre » devenu prix Nobel).", "Opposer une instruction qui gave et une éducation qui donne le désir d'apprendre.", "Souligner le rôle de la personne du maître dans la transmission."],
      liens: [
        { to: "peguy-hussards", t: "Péguy et Camus célèbrent l'instituteur de la République, l'un en mythe, l'autre avec gratitude." },
        { to: "hugo-contemplations", t: "Le maître de Camus ressemble à l'idéal de Hugo : un « doux apôtre incliné sur l'enfant »." },
        { to: "arendt-crise", t: "Comme chez Arendt, le maître introduit les enfants dans le monde." }
      ],
      oppositions: [
        { to: "balzac-lambert", t: "Le régent de Balzac blesse l'élève ; M. Bernard lui donne le sentiment d'exister." },
        { to: "flaubert-bovary", t: "Le professeur de Flaubert fait rire la classe de l'élève ; le maître de Camus le considère." }
      ],
      citations: [
        { t: "Sans vous, sans cette main affectueuse que vous avez tendue au petit enfant pauvre que j'étais […] rien de tout cela ne serait arrivé.", where: "lettre",
          sens: "Toute la réussite de l'écrivain est rapportée au geste du maître.",
          usage: "Pour l'école qui émancipe socialement." },
        { t: "la faim de la découverte", where: "roman, début",
          sens: "Le bon maître éveille le désir de savoir au lieu de remplir les têtes.",
          usage: "Pour opposer désir d'apprendre et accumulation de savoirs.",
          fill: "la faim de la [[découverte]]" },
        { t: "on leur apprenait sans doute beaucoup de choses, mais un peu comme on gave les oies", where: "roman",
          sens: "Image critique d'un enseignement qui remplit sans nourrir.",
          usage: "Critique de l'enseignement par accumulation." },
        { t: "on les jugeait dignes de découvrir le monde", where: "roman",
          sens: "La considération du maître fait exister l'élève.",
          usage: "Pour le respect de l'élève comme condition de l'apprentissage." }
      ],
      annotations: [
        { t: "Surlignés : « main affectueuse », « tendue au petit enfant pauvre », « le cœur généreux », « Je vous embrasse, de toutes mes forces »", lecture: "sure", keep: true, why: "Le vocabulaire affectif de la gratitude." },
        { t: "« analogie de la classe du … » (stylo rouge)", lecture: "incertaine", keep: false, why: "Fin illisible." }
      ],
      manuel: { notes: ["1. M. Bernard : instituteur du roman, inspiré de M. Germain, qui fut l'instituteur de Camus.", "2. Délation : dénonciation."] },
      alertes: [],
      complement: ["L'instituteur d'Alger s'appelait Louis Germain ; Camus lui dédie ses Discours de Suède.", "Le manuscrit du Premier Homme a été retrouvé après la mort de Camus (1960)."],
      vf: [
        { s: "Dans Le Premier Homme, la classe de M. Bernard « gave » les élèves comme des oies.", a: false, explain: "C'est dans les autres classes qu'on apprenait « un peu comme on gave les oies » ; chez M. Bernard, on nourrissait « la faim de la découverte »." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "hugo-chaque-enfant", chapter: "ch1", discipline: "litterature", author: "hugo",
      classement: { chapitre: "en-tete", discipline: "Poème argumentatif : littérature." },
      title: "Éduquer pour intégrer l'homme à la société", work: "« Chaque enfant qu'on enseigne », Les Quatre Vents de l'esprit", year: "1881", yearN: 1881, genre: "Poème en alexandrins",
      doc: { photos: ["IMG_2604"], printed: "TEXTE 4" },
      chapeau: "Hugo a écrit ce poème après une visite au bagne ; il y explique pourquoi l'éducation est si importante.",
      short: "Instruire arrache au crime et à l'ignorance",
      sujet: "L'instruction comme remède au crime et à l'ignorance.",
      problematique: "Instruire les enfants suffit-il à en faire des hommes honnêtes ?",
      these: "Instruire, c'est arracher l'homme à la nuit de l'ignorance, qui mène au crime : l'école, lieu sacré, éclaire l'esprit et le cœur. La société a donc le devoir d'instruire tous les enfants.",
      idees: [
        "Constat : la plupart des bagnards ne sont jamais allés à l'école et ne savent pas lire.",
        "L'ignorance est une nuit qui mène à l'abîme et au crime ; l'instruction est une lumière.",
        "L'école est sacrée : chaque lettre de l'alphabet « contient une vertu ».",
        "Faute d'enseignement, l'État fabrique des « hommes animaux, têtes inachevées ».",
        "Instruire est un droit de l'enfant (« Le germe a droit d'éclore ») et un devoir collectif (« notre loi première »)."
      ],
      arguments: [
        "Argument chiffré : « Quatre-vingt-dix voleurs sur cent ».",
        "Métaphore filée de la lumière et des ténèbres.",
        "Image de l'alchimie : l'école change le cuivre en or, l'ignorance l'or en plomb.",
        "Impératifs et « nous » : un appel à agir (« Marchez », « Allumons »)."
      ],
      exemples: ["Les bagnards qui « signent d'une croix ».", "L'alphabet que l'enfant épelle du doigt."],
      neutre: "Pour Hugo, l'éducation n'est pas neutre : elle moralise. Instruire, c'est rendre raisonnable et honnête.",
      piege: "Le poème ne parle pas de punir les criminels mais de prévenir le crime par l'école.",
      connaissances: ["Victor Hugo (1802-1885), Les Quatre Vents de l'esprit (1881).", "La métaphore lumière / ténèbres.", "L'éducation comme droit de l'enfant et devoir de la société."],
      dissertation: ["Défendre l'instruction pour tous comme prévention du crime.", "Faire de l'éducation un droit de l'enfant (« Le germe a droit d'éclore »).", "Discuter : l'instruction rend-elle vraiment meilleur ? (à confronter à Rousseau)."],
      liens: [
        { to: "ferry-lettre", t: "Ferry fait de l'école le lieu de l'éducation morale : même confiance dans l'école." },
        { to: "hugo-contemplations", t: "Même auteur : l'instituteur y devient « médecin de l'ignorance »." },
        { to: "rabelais-adolescence", t: "Sans éducation, l'enfant reste proche de l'animal : « hommes animaux, têtes inachevées »." }
      ],
      oppositions: [
        { to: "rousseau-perfectibilite", t: "Rousseau rappelle que le développement des facultés fait éclore les vices autant que les vertus : instruire ne garantit pas la moralité." },
        { to: "nietzsche-allemands", t: "Hugo veut instruire tous les enfants ; Nietzsche juge que l'éducation supérieure ne peut être qu'un privilège." }
      ],
      citations: [
        { t: "Chaque enfant qu'on enseigne est un homme qu'on gagne.", where: "v. 1",
          sens: "Instruire, c'est faire un homme et un citoyen : rien n'est perdu d'avance.",
          usage: "Accroche pour tout sujet sur l'utilité de l'éducation.",
          fill: "Chaque enfant qu'on enseigne est un [[homme]] qu'on gagne." },
        { t: "L'ignorance est la nuit qui commence l'abîme.", where: "v. 6",
          sens: "L'ignorance mène au crime ; l'instruction éclaire.",
          usage: "Pour le lien entre ignorance et violence.",
          fill: "L'[[ignorance]] est la nuit qui commence l'abîme." },
        { t: "L'école est sanctuaire autant que la chapelle.", where: "v. 8",
          sens: "L'école est sacrée, comme un lieu de culte.",
          usage: "Pour la sacralisation républicaine de l'école, à confronter à la laïcité de Ferry." },
        { t: "Allumons les esprits, c'est notre loi première,", where: "v. 20",
          sens: "Instruire est le premier devoir de la société.",
          usage: "Pour l'éducation comme devoir collectif." },
        { t: "Songeons-y bien, l'école en or change le cuivre, / Tandis que l'ignorance en plomb transforme l'or.", where: "v. 25-26",
          sens: "Image de l'alchimie : l'école élève, l'ignorance dégrade.",
          usage: "Pour une conclusion imagée sur le pouvoir de l'école." }
      ],
      annotations: [
        { t: "« thèse principale » (v. 1)", lecture: "sure", keep: true },
        { t: "« → un homme pas instruit = pas raisonnable » (v. 2-4)", lecture: "sure", keep: true },
        { t: "« sacralisation de l'école » (v. 8)", lecture: "sure", keep: true },
        { t: "« opposition entre lumière et ténèbres · entre enfant et animaux » (v. 9-12)", lecture: "sure", keep: true },
        { t: "« visée argumentative » (v. 13)", lecture: "probable", keep: true },
        { t: "« impératif » (marge, v. 13-21)", lecture: "probable", keep: true, why: "« Marchez », « Allumons » : l'appel à agir." },
        { t: "« député, c'est un membre du corps politique » (sous la référence)", lecture: "sure", keep: true, why: "Rappel : Hugo est aussi un homme politique." },
        { t: "Petit dessin d'oiseau dans la marge", keep: false, why: "Sans intérêt pédagogique." }
      ],
      manuel: {},
      alertes: ["La note 1 du manuel (sur « sépulcral ») n'est pas visible sur la photo."],
      complement: ["Sépulcral : qui évoque le tombeau, la mort.", "Hugo est député en 1848, exilé sous le Second Empire, puis sénateur sous la IIIe République.", "1881, année du recueil, est aussi celle de la loi sur la gratuité de l'école primaire."],
      vf: [
        { s: "Pour Hugo, l'ignorance mène au crime.", a: true, explain: "« C'est dans cette ombre-là qu'ils ont trouvé le crime. »" }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "flaubert-bovary", chapter: "ch1", discipline: "litterature", author: "flaubert",
      classement: { chapitre: "en-tete", discipline: "Récit romanesque : littérature." },
      title: "L'arrivée du « nouveau »", titleNote: "Titre de travail : la feuille n'en donne pas.", work: "Madame Bovary, début de la première partie (identification à confirmer)", year: "1857 (à confirmer)", yearN: 1857, genre: "Roman",
      doc: { photos: ["IMG_2605"], printed: "TEXTE 1 (barré)", hand: "5" },
      chapeau: "",
      short: "Le groupe scolaire exclut l'élève qui ignore ses codes",
      sujet: "L'entrée en classe d'un nouvel élève venu de la campagne et de sa casquette ridicule.",
      problematique: "Que révèle la première scène de classe d'un élève sur l'école comme groupe ?",
      these: "L'école est d'abord un groupe, avec ses codes (« le genre ») : le nouveau, qui les ignore, devient la cible du rire collectif, que le professeur lui-même encourage.",
      idees: [
        "Le nouveau, plus âgé et plus grand, est un « gars de la campagne », gêné dans ses habits.",
        "Il écoute « comme au sermon », mais ignore les usages de la classe (jeter sa casquette sous le banc).",
        "La casquette, longuement décrite, condense tout le ridicule du personnage.",
        "Le professeur, « homme d'esprit », fait rire la classe à ses dépens.",
        "Le narrateur dit « nous » : il appartient au groupe qui se moque."
      ],
      arguments: [
        "Narration au « nous » collectif : le point de vue du groupe.",
        "Description très détaillée et ironique de la casquette (énumération, comparaison avec le visage d'un imbécile).",
        "Gradation du rire : la classe « se mit à rire », puis « un rire éclatant »."
      ],
      exemples: ["Les casquettes jetées sous le banc : « c'était là le genre ».", "« Débarrassez-vous donc de votre casque » : la moquerie du professeur."],
      neutre: "L'école n'est pas neutre : elle impose des codes sociaux, et l'élève qui ne les maîtrise pas est exclu par le groupe.",
      piege: "Le « nous » n'est pas l'auteur : c'est un camarade de classe anonyme.",
      connaissances: ["Incipit romanesque, narrateur collectif « nous ».", "Ironie et description satirique.", "Identification à confirmer : Flaubert, Madame Bovary (1857)."],
      dissertation: ["Montrer que l'école transmet aussi des codes sociaux, pas seulement des savoirs.", "Évoquer la violence symbolique du groupe et du maître.", "Parler des inégalités d'origine sociale à l'école."],
      liens: [
        { to: "balzac-lambert", t: "Même situation : un garçon venu de la campagne qui arrive au collège et en souffre." },
        { to: "colette-claudine", t: "Même regard ironique sur l'école." }
      ],
      oppositions: [
        { to: "camus-maitre", t: "Le professeur de Flaubert fait rire de l'élève ; le maître de Camus le juge « digne de découvrir le monde »." }
      ],
      citations: [
        { t: "Nous étions à l'étude, quand le Proviseur entra, suivi d'un nouveau habillé en bourgeois et d'un garçon de classe qui portait un grand pupitre.", where: "l. 1-2",
          sens: "Le « nous » de la classe face au « nouveau » : le groupe et l'intrus.",
          usage: "Pour l'école comme groupe qui accueille ou exclut." },
        { t: "c'était là le genre", where: "l. 19",
          sens: "La classe a ses codes ; les connaître, c'est appartenir au groupe.",
          usage: "Pour les codes implicites de l'école.",
          fill: "c'était là le [[genre]]" },
        { t: "une de ces pauvres choses, enfin, dont la laideur muette a des profondeurs d'expression comme le visage d'un imbécile", where: "l. 23-24",
          sens: "La casquette dit tout du personnage : description ironique.",
          usage: "Pour l'ironie du narrateur." },
        { t: "Toute la classe se mit à rire.", where: "l. 31",
          sens: "Le rire collectif exclut le nouveau.",
          usage: "Pour la violence du groupe." },
        { t: "— Débarrassez-vous donc de votre casque, dit le professeur, qui était un homme d'esprit.", where: "l. 34",
          sens: "Ironie : le maître participe à l'humiliation.",
          usage: "Pour la responsabilité du maître." }
      ],
      annotations: [
        { t: "« On se moque du gars de campagne » (à côté de « Toute la classe se mit à rire »)", lecture: "probable", keep: true },
        { t: "« mal cirés » souligné", lecture: "sure", keep: false, why: "Repère sans commentaire." }
      ],
      manuel: {},
      alertes: [
        "La feuille ne porte ni nom d'auteur ni titre d'œuvre. Le texte est identifié comme le début de Madame Bovary de Gustave Flaubert (1857) : identification extérieure aux documents, à confirmer.",
        "Le numéro « TEXTE 1 » est barré et remplacé à la main par « 5 »."
      ],
      complement: ["Le « nouveau » est Charles Bovary, futur mari d'Emma, l'héroïne du roman.", "Gustave Flaubert (1821-1880), romancier ; Madame Bovary paraît en volume en 1857."],
      vf: [
        { s: "Dans ce texte, le professeur protège le nouveau des moqueries.", a: false, explain: "Il fait rire la classe : « Débarrassez-vous donc de votre casque »." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "rabelais-adolescence", chapter: "ch1", discipline: "litterature", author: "rabelais",
      classement: { chapitre: "en-tete", discipline: "Roman comique : littérature." },
      title: "De l'adolescence de Gargantua", work: "Gargantua, chapitre 11", ref: "adaptation en français moderne de Guy Demerson (Seuil, 1973)", year: "1535 (sur la feuille)", yearN: 1535, genre: "Roman comique",
      doc: { photos: ["IMG_2606"], printed: "TEXTE 1" },
      chapeau: "Gargantua suit le même itinéraire d'apprentissage (enfance, éducation, guerre) que Pantagruel, mais pour le père de Pantagruel. Né par l'oreille en réclamant « À boire ! », il reçoit de son père Grandgousier le nom de Gargantua (« Quel grand [gosier] tu as »).",
      short: "Sans éducation, l'enfant vit comme un animal",
      sujet: "La petite enfance de Gargantua, de trois à cinq ans, livrée aux instincts.",
      problematique: "Que devient un enfant élevé « comme tous les petits enfants du pays », sans véritable éducation ?",
      these: "Sous la fantaisie verbale, Rabelais montre un enfant livré au corps et aux instincts (boire, manger, dormir) : sans éducation, l'enfant reste proche de l'animal. C'est le point de départ qui rendra nécessaire l'éducation humaniste.",
      idees: [
        "De trois à cinq ans, l'enfant ne fait que boire, manger et dormir, dans tous les ordres.",
        "Il se vautre dans la boue, se salit, mord, crache : une énumération de comportements sales.",
        "Chaque activité est dite par une expression proverbiale prise au pied de la lettre (« battait froid », « écorchait le renard »…).",
        "Il vit avec les petits chiens, qui mangent dans son écuelle : animalisation de l'enfant."
      ],
      arguments: [
        "Énumération et accumulation comiques.",
        "Jeu sur la polysémie des proverbes : sens littéral et sens figuré.",
        "Animalisation de l'enfant, entre comique et satire."
      ],
      exemples: ["« battait le chien devant le lion » : châtier un petit devant un puissant (note 10).", "Les petits chiens qui mangent avec lui."],
      neutre: "Ne pas éduquer est aussi un choix : l'enfant abandonné à ses instincts reste animal. Le chapitre prépare, par contraste, l'éloge de l'éducation humaniste.",
      piege: "« Adolescence » signifie ici la petite enfance (note 1), pas l'adolescence au sens actuel.",
      connaissances: ["Rabelais, Gargantua (1534 ou 1535).", "Le comique de l'énumération et des proverbes.", "Adolescence = petite enfance (note 1)."],
      dissertation: ["Montrer que l'homme a besoin d'éducation pour sortir de l'animalité.", "Analyser le regard comique et satirique de Rabelais sur la petite enfance.", "Opposer ce chapitre au chapitre 23 : le même enfant transformé par l'éducation."],
      liens: [
        { to: "rousseau-perfectibilite", t: "Sans éducation, la perfectibilité de l'homme reste inemployée." },
        { to: "hugo-chaque-enfant", t: "Hugo parle aussi d'« hommes animaux » faute d'enseignement." }
      ],
      oppositions: [
        { to: "rabelais-ponocrates", t: "Opposition interne à l'œuvre : l'enfant livré à ses instincts / l'élève curieux de tout, formé par Ponocratès." }
      ],
      citations: [
        { t: "à boyre, manger et dormir ; à manger, dormir et boyre ; à dormir, boyre et manger", who: "Rabelais (version originale)", where: "encadré « Version originale »",
          sens: "La vie de l'enfant tourne en rond autour des besoins du corps.",
          usage: "Pour l'enfance sans éducation." },
        { t: "Tousjours se vaultroit par les fanges", who: "Rabelais (version originale)", where: "encadré « Version originale »",
          sens: "Il se vautrait toujours dans la boue : l'enfant animal.",
          usage: "Pour l'animalité de l'enfant non éduqué." },
        { t: "il passa ce temps-là comme tous les petits enfants du pays", where: "adaptation, l. 3",
          sens: "Gargantua n'a pas d'éducation particulière : il vit comme tous les enfants.",
          usage: "Pour l'absence d'éducation." }
      ],
      annotations: [
        { t: "« comique / satirique » (près du titre)", lecture: "probable", keep: true },
        { t: "« animalisation de l'enfant » (marge, à la fin)", lecture: "sure", keep: true },
        { t: "Soulignés : « tous les petits enfants du pays », « battait froid », « écorchait le renard », « disait la patenôtre du singe », « revenait à ses moutons », « mettait la charrue avant les bœufs »", lecture: "sure", keep: true, why: "Les expressions proverbiales du texte." },
        { t: "Dessin de fleur", keep: false, why: "Sans intérêt pédagogique." }
      ],
      manuel: {
        notes: ["1. Adolescence : ici, petite enfance.", "2. Se mâchurait : se barbouillait de noir.", "6. Battait froid : agissait à contretemps.", "7. Écorchait le renard : vomissait.", "10. Battait le chien devant le lion : châtiait un petit devant un puissant."],
        questions: ["LIRE : chaque activité de l'enfant est évoquée par un proverbe à double sens (littéral et figuré) : en analyser dix ; quel rapport entre cette fantaisie verbale et la petite enfance ? quel regard Rabelais porte-t-il sur elle ?", "DIRE : exposé sur les écarts entre le texte original et l'adaptation moderne."]
      },
      alertes: ["Date : cette feuille indique 1535, celle du chapitre 23 indique 1534 (la date de Gargantua est discutée)."],
      complement: ["Rabelais (vers 1483 ou 1494 – 1553), moine, médecin et humaniste ; Gargantua paraît après Pantagruel (1532)."],
      vf: [
        { s: "De trois à cinq ans, Gargantua reçoit une éducation humaniste rigoureuse.", a: false, explain: "Il passe ce temps « comme tous les petits enfants du pays » : à boire, manger et dormir." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "rabelais-ponocrates", chapter: "ch1", discipline: "litterature", author: "rabelais",
      classement: { chapitre: "en-tete", discipline: "Roman comique : littérature." },
      title: "La journée humaniste de Gargantua", titleNote: "Titre de travail : la feuille n'en donne pas.", work: "Gargantua, chapitre 23", year: "1534 (sur la feuille)", yearN: 1534, genre: "Roman comique",
      doc: { photos: ["IMG_2607"], printed: "TEXTE 2" },
      chapeau: "Gargantua a d'abord subi l'éducation médiévale d'un « précepteur sophiste », Thubal Holoferne, qui l'a rendu « tant fat, niais et ignorant ». Son père le confie alors à un précepteur humaniste, Ponocratès (« bourreau de travail »), qui le purge de sa « vicieuse manière de vivre » grâce au médecin Séraphin Calobarsy (anagramme de François Rabelais), puis l'entoure de savants pour éveiller son désir d'étudier.",
      short: "L'éducation humaniste forme le corps et l'esprit",
      sujet: "Une journée type de l'éducation humaniste de Gargantua.",
      problematique: "À quoi ressemble une éducation complète, qui forme à la fois le corps, l'esprit et l'âme ?",
      these: "L'éducation humaniste occupe chaque moment de la journée et forme l'homme tout entier : lecture de l'Écriture, révisions, observation du ciel, sciences, conversations savantes, jeux et exercices du corps. Elle s'appuie sur la curiosité et le plaisir ; le jeu reste « en liberté ».",
      idees: [
        "Lever à quatre heures : lecture de l'Écriture, prière.",
        "Le précepteur répète et explique les leçons, jusque dans les moments les plus quotidiens.",
        "Observation du ciel, lecture, puis jeux et exercices du corps (paume, balle).",
        "Au repas, lectures et conversations savantes sur la nature des aliments (Pline, Galien, Aristote…).",
        "Après le repas, les cartes servent à apprendre l'arithmétique ; puis géométrie, astronomie, musique."
      ],
      arguments: [
        "L'imparfait d'habitude : une journée qui se répète, une méthode.",
        "Les énumérations : l'abondance des savoirs (encyclopédisme humaniste).",
        "L'équilibre du corps et de l'esprit."
      ],
      exemples: ["Le jeu de cartes détourné pour apprendre l'arithmétique.", "Les auteurs lus à table : Pline, Athénée, Dioscoride, Galien, Aristote…", "Tunstal, évêque auteur d'un traité d'arithmétique, s'avoue dépassé."],
      neutre: "L'éducation humaniste n'est pas neutre : elle porte un idéal (l'homme complet, savant et pieux) et occupe toute la vie de l'élève.",
      piege: "Ce n'est pas une éducation sans contrainte : chaque heure est occupée ; mais le désir d'apprendre a d'abord été éveillé.",
      connaissances: ["L'idéal humaniste : un esprit sain dans un corps sain, un savoir encyclopédique.", "Ponocratès (précepteur humaniste) / Thubal Holoferne (précepteur sophiste).", "L'imparfait d'habitude."],
      dissertation: ["Présenter l'idéal humaniste d'une éducation complète.", "Défendre l'apprentissage par le plaisir et la curiosité.", "Discuter : une éducation qui occupe chaque minute laisse-t-elle place à la liberté ?"],
      liens: [
        { to: "hugo-contemplations", t: "Hugo rêve lui aussi d'une école où « apprendre sera doux »." },
        { to: "rabelais-adolescence", t: "Même œuvre : le même enfant, d'abord livré à ses instincts, devient un élève savant." }
      ],
      oppositions: [
        { to: "balzac-lambert", t: "Chez Rabelais, le jeu se fait « en liberté » ; chez Balzac, le pensum supprime les récréations." },
        { to: "nietzsche-allemands", t: "Ponocratès remplit chaque minute de la journée ; Nietzsche réclame au contraire qu'on prenne son temps." }
      ],
      citations: [
        { t: "S'éveillait donc Gargantua environ quatre heures du matin.", where: "l. 1",
          sens: "L'imparfait d'habitude : une discipline quotidienne.",
          usage: "Pour la rigueur de l'éducation humaniste." },
        { t: "Tout leur jeu n'était qu'en liberté", where: "l. 16",
          sens: "Le jeu reste libre : l'éducation humaniste n'est pas une contrainte permanente.",
          usage: "Pour l'équilibre entre discipline et liberté.",
          fill: "Tout leur jeu n'était qu'en [[liberté]]" },
        { t: "s'exerçant les corps comme ils avaient les âmes auparavant exercé", where: "l. 14-15",
          sens: "L'éducation forme ensemble le corps et l'esprit.",
          usage: "Pour l'idéal d'une éducation complète." },
        { t: "on apportait des cartes, non pour jouer, mais pour y apprendre mille petites gentillesses et inventions nouvelles", where: "l. 34-35",
          sens: "Le jeu devient un moyen d'apprendre.",
          usage: "Pour l'apprentissage par le jeu." }
      ],
      annotations: [
        { t: "« Usage de l'imparfait » (en haut)", lecture: "sure", keep: true },
        { t: "« énumération » (marge, l. 23-25)", lecture: "probable", keep: true },
        { t: "« but intellectuel » (marge, l. 28)", lecture: "probable", keep: true },
        { t: "Débuts de paragraphe surlignés en vert (« Puis », « Ce fait », « Au commencement », « Après »)", lecture: "sure", keep: true, why: "Les étapes de la journée." }
      ],
      manuel: { notes: ["1. Pagine : page.", "4. Testonné, accoutré : coiffé, arrangé.", "6. Issaient hors : sortaient.", "12. Efficace : efficacité.", "20. Tunstal : évêque de Londres, auteur d'un traité d'arithmétique."] },
      alertes: ["Date : la feuille indique 1534 pour le chapitre 23 et 1535 pour le chapitre 11."],
      complement: ["Le nom de Ponocratès vient du grec ponos, « peine, travail ».", "Dans l'œuvre, le chapitre s'intitule à peu près « Comment Gargantua fut institué par Ponocrates en telle discipline qu'il ne perdait heure du jour » (à vérifier)."],
      vf: [
        { s: "Dans l'emploi du temps humaniste de Gargantua, les cartes servent à apprendre l'arithmétique.", a: true, explain: "On apportait des cartes « non pour jouer, mais pour y apprendre mille petites gentillesses et inventions nouvelles »." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "peguy-hussards", chapter: "ch1", discipline: "litterature", author: "peguy",
      classement: { chapitre: "en-tete", discipline: "Récit de souvenir d'un écrivain : rangé en littérature. Le manuel propose aussi une interprétation philosophique." },
      title: "Le mythe républicain", work: "L'Argent", year: "1913", yearN: 1913, genre: "Prose d'essai et de souvenir",
      doc: { photos: ["IMG_2609"], printed: "TEXTE 6" },
      chapeau: "Péguy crée la métaphore des « hussards noirs » pour désigner les instituteurs, chargés de diffuser et d'enraciner les valeurs républicaines dans les nouvelles écoles primaires laïques. Il évoque un souvenir personnel daté de 1880.",
      short: "Les instituteurs, soldats mythiques de la République",
      sujet: "Le portrait des jeunes instituteurs sortis de l'École normale, vus par l'enfant Péguy.",
      problematique: "Pourquoi la République a-t-elle besoin de faire de ses instituteurs des figures presque mythiques ?",
      these: "Sévères et fiers dans leur uniforme noir, les jeunes instituteurs sont les soldats de la République : par la description et les métaphores militaires, Péguy en fait un mythe, celui d'une école chargée de fournir « tant de jeunesse et tant d'enseignement ».",
      idees: [
        "Les jeunes maîtres sont « beaux comme des hussards noirs » : sveltes, sévères, sanglés.",
        "Leur uniforme civil, noir et violet, est plus militaire qu'un uniforme militaire : c'est un uniforme « civique ».",
        "Ils sont eux-mêmes « les enfants de la République », presque des gamins.",
        "L'École normale est comme un régiment inépuisable, un « dépôt » de jeunesse et de civisme."
      ],
      arguments: [
        "Métaphore militaire filée : hussards, régiment, dépôt, uniforme.",
        "Description détaillée de l'uniforme.",
        "Reprises à partir de la l. 10 : « Par ces jeunes hussards de la République. Par ces nourrissons de la République. »"
      ],
      exemples: ["L'uniforme : pantalon noir à liseré violet, redingote, casquette plate aux palmes violettes.", "La photo du manuel : instituteurs de l'École normale de Loches, vers 1907."],
      neutre: "L'école républicaine n'est pas neutre : ses maîtres sont formés pour enraciner les valeurs de la République, comme une armée.",
      piege: "L'« École normale » du texte forme les instituteurs (une par département) : ce n'est pas l'École normale supérieure.",
      connaissances: ["Charles Péguy (1873-1914), L'Argent (1913).", "Les « hussards noirs » de la République.", "Les écoles normales d'instituteurs."],
      dissertation: ["Montrer le rôle politique de l'école : former des citoyens.", "Utiliser l'idée de mythe : l'institution s'appuie sur des images et des symboles.", "Présenter l'instituteur comme représentant de l'État."],
      liens: [
        { to: "ferry-lettre", t: "Les « hussards noirs » sont les instituteurs à qui Ferry confie l'éducation morale et civique." },
        { to: "camus-maitre", t: "Autre hommage à l'instituteur républicain, plus intime." }
      ],
      oppositions: [
        { to: "tocqueville-uniformiser", t: "Ce que Péguy célèbre (un « régiment » de maîtres formés par l'État), Tocqueville le redoute : l'uniformité des esprits." }
      ],
      citations: [
        { t: "Nos jeunes maîtres étaient beaux comme des hussards noirs.", where: "l. 1",
          sens: "La métaphore fondatrice : l'instituteur comme soldat de la République.",
          usage: "Pour le rôle politique de l'instituteur.",
          fill: "Nos jeunes maîtres étaient beaux comme des [[hussards]] noirs." },
        { t: "Sveltes ; sévères ; sanglés.", where: "l. 1-2",
          sens: "Rythme ternaire et allitération en s : rigueur et prestance.",
          usage: "Pour analyser le style de Péguy." },
        { t: "Cet uniforme civil était une sorte d'uniforme militaire encore plus sévère, encore plus militaire, étant un uniforme civique.", where: "l. 8-10",
          sens: "Le civique surpasse le militaire : la République mène une bataille d'éducation.",
          usage: "Pour l'école comme institution politique." },
        { t: "ces gamins qui étaient vraiment les enfants de la République", where: "l. 12",
          sens: "Les maîtres sont eux-mêmes le produit de l'école républicaine.",
          usage: "Pour la transmission d'une génération à l'autre." },
        { t: "un immense dépôt, gouvernemental, de jeunesse et de civisme", where: "l. 17-18",
          sens: "L'École normale, réserve de maîtres au service de l'État.",
          usage: "Pour l'éducation comme projet d'État." }
      ],
      annotations: [
        { t: "« La description de ceux-ci dans le texte a une portée symbolique + représentation mythique de ces agents de la République » (en haut)", lecture: "probable", keep: true },
        { t: "« La création de l'école normale supérieure : enseignement laïque » et « formation des [instituteurs] pour créer un nouveau monde » (en bas)", lecture: "probable", keep: true, why: "Idée juste (former des maîtres pour un monde nouveau), mais attention : il s'agit des écoles normales d'instituteurs, pas de l'École normale supérieure." },
        { t: "Lignes numérotées à la main de 1 à 23 ; gribouillage dans la marge", keep: false, why: "Sans intérêt pédagogique." }
      ],
      manuel: {
        notes: ["1. Omnipotence : pouvoir sans partage.", "2. L'uniforme noir des jeunes normaliens destinés à l'enseignement.", "3. Civique : de citoyen.", "4. École annexe : l'école primaire où le petit Charles a été instruit par de jeunes instituteurs sortis de l'École normale toute proche."],
        saviez: "Le hussard est d'abord un cavalier hongrois du XVe siècle, réputé pour son courage ; la jeune République révolutionnaire se dote d'un escadron de hussards en uniforme noir, d'où l'image de Péguy.",
        questions: ["Relever ce qui présente les instituteurs sous un jour positif.", "Délimiter la description de l'uniforme et dire pourquoi Péguy s'y attarde.", "Nommer la figure de style répétée à partir de la l. 10 (rapport des « hussards » à la République) et dire la fonction de la description."],
        bac: [{ k: "Interprétation philosophique", q: "Quels rôles jouent les mythes dans le respect que nous vouons aux institutions ?" }]
      },
      alertes: [],
      complement: ["Péguy (1873-1914), écrivain et poète, normalien, mort au front en septembre 1914.", "Les écoles normales (une par département) formaient les instituteurs depuis le XIXe siècle."],
      vf: [
        { s: "Péguy compare les jeunes instituteurs à des hussards noirs.", a: true, explain: "« Nos jeunes maîtres étaient beaux comme des hussards noirs. »" }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "hugo-contemplations", chapter: "ch1", discipline: "litterature", author: "hugo",
      classement: { chapitre: "theme", discipline: "Poème : littérature." },
      title: "Un idéal d'éducation", work: "Les Contemplations", ref: "livre I, poème 13", year: "1856", yearN: 1856, genre: "Poème en alexandrins",
      doc: { photos: ["IMG_2610"], printed: "TEXTE 3" },
      chapeau: "Dans Les Contemplations, Hugo s'en prend aux « vifs pédants » dont il a subi, enfant, les méthodes d'enseignement inadaptées.",
      short: "Faire aimer le savoir au lieu de l'imposer",
      sujet: "Le rêve d'une école future, douce et lumineuse, opposée à l'école des pédants.",
      problematique: "Peut-on apprendre sans contrainte ni violence ?",
      these: "Un jour, l'éducation ne sera plus une cage : c'est en faisant aimer le savoir par une « explication tendre » qu'on le fera comprendre. L'instituteur lucide, « médecin de l'ignorance », remplacera le maître obscur qui frappe.",
      idees: [
        "L'éducation actuelle enferme (« les oiseaux par la cage ») et abrutit (« bête de somme », « fouet »).",
        "L'éducation future connaîtra « la loi de croissance des aigles » : elle respectera l'élan de l'enfant.",
        "« Savoir étant sublime, apprendre sera doux » : la grandeur du savoir fonde le plaisir d'apprendre.",
        "On fera comprendre les grands auteurs (Homère, Virgile) en les faisant aimer.",
        "L'instituteur lucide remplacera le « magister » obscur : l'aube vient « en chantant, et non pas en grondant »."
      ],
      arguments: [
        "Futur prophétique : « Un jour… », « Alors… ».",
        "Oppositions : cage / libres essors, ombre / lumière, fouet / tendresse, hibou / moineau.",
        "Métaphores animales : l'élève-oiseau, l'aigle, la bête de somme, le cheval poussif."
      ],
      exemples: ["L'élève « attelé à Virgile » comme une bête de somme.", "« Enseigner au moineau par le hibou hagard » : le maître obscur face à l'enfant vif."],
      neutre: "Pour Hugo, la manière d'enseigner n'est jamais neutre : la violence produit l'abrutissement, la douceur l'amour du savoir.",
      piege: "Hugo ne rejette pas les grands auteurs latins et grecs : il veut qu'on les fasse aimer.",
      connaissances: ["Les Contemplations (1856), livre I, poème 13.", "Le cuistre, le pensum, le magister.", "L'instituteur, « magistrat du progrès »."],
      dissertation: ["Défendre une pédagogie de la douceur et du désir d'apprendre.", "Critiquer la contrainte et les châtiments.", "Faire de l'instituteur un guide vers la lumière et le progrès."],
      liens: [
        { to: "rabelais-ponocrates", t: "Comme Rabelais, Hugo veut une éducation fondée sur le plaisir et la curiosité." },
        { to: "hugo-chaque-enfant", t: "Même auteur : la lumière et l'ombre organisent les deux poèmes." },
        { to: "camus-maitre", t: "Le maître de Camus réalise l'idéal du « doux apôtre incliné sur l'enfant »." }
      ],
      oppositions: [
        { to: "balzac-lambert", t: "Balzac décrit précisément l'école que Hugo veut voir disparaître : pensum et discipline." }
      ],
      citations: [
        { t: "Lorsqu'on n'instruira plus les oiseaux par la cage,", where: "v. 2",
          sens: "L'éducation actuelle enferme ; l'élève est un oiseau fait pour voler.",
          usage: "Pour critiquer une éducation de la contrainte." },
        { t: "Savoir étant sublime, apprendre sera doux.", where: "v. 8",
          sens: "Le plaisir d'apprendre naît de la grandeur du savoir.",
          usage: "Pour le désir d'apprendre.",
          fill: "Savoir étant sublime, apprendre sera [[doux]]." },
        { t: "En les faisant aimer, qu'on les fera comprendre.", where: "v. 14",
          sens: "On comprend ce qu'on aime : une pédagogie du désir.",
          usage: "Pour l'importance de la motivation." },
        { t: "L'instituteur lucide et grave, magistrat / Du progrès, médecin de l'ignorance, et prêtre / De l'idée", where: "v. 24-26",
          sens: "L'instituteur sert le progrès et soigne l'ignorance.",
          usage: "Pour la figure de l'instituteur." },
        { t: "L'aube vient en chantant, et non pas en grondant.", where: "v. 28",
          sens: "Le savoir doit venir avec douceur, pas avec menace.",
          usage: "Pour une conclusion imagée sur la pédagogie." }
      ],
      annotations: [
        { t: "« Métaphore élève / oiseau » (v. 2)", lecture: "sure", keep: true },
        { t: "« plusieurs oppositions » (marge) et « opposition » (v. 18-20)", lecture: "sure", keep: true },
        { t: "« donc il ne doit pas être pédant » (v. 24)", lecture: "probable", keep: true },
        { t: "« il veut la disparition de ça pour… » (v. 27)", lecture: "partielle", keep: true },
        { t: "« ++ oppositions : violence / tendresse, obscur / lumière » (v. 36-38)", lecture: "sure", keep: true },
        { t: "« problème : absence de liberté ? » (v. 40)", lecture: "incertaine", keep: false, why: "Lecture trop incertaine." }
      ],
      manuel: {
        notes: ["1. Essors : élans.", "2. Homère : poète grec du VIIIe s. av. J.-C., auteur de l'Iliade et de l'Odyssée.", "3. Virgile : poète latin du Ier s. av. J.-C., auteur de l'Énéide.", "4. Cuistre : personne fière de montrer son savoir, ridicule et vaniteuse.", "5. Magister : maître d'école.", "6. Grimoire : livre de sorcellerie, incompréhensible.", "7. Jambages : lettres écrites à la main."],
        questions: ["Questions du manuel en partie cachées par un pli de la page (mouvements du poème, procédés de persuasion…)."]
      },
      alertes: ["Le numéro du texte est en partie coupé au bord ; les questions du manuel sont en partie illisibles."],
      complement: ["Le poème I, 13 des Contemplations est connu sous le titre « À propos d'Horace » (à vérifier)."],
      vf: [
        { s: "Hugo annonce que l'enfant restera « une bête de somme attelée à Virgile ».", a: false, explain: "Il annonce le contraire : « l'enfant ne sera plus / Une bête de somme attelée à Virgile »." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "nietzsche-allemands", chapter: "ch1", discipline: "philosophie", author: "nietzsche",
      classement: { chapitre: "theme", discipline: "Texte d'un philosophe : philosophie." },
      title: "Contre le dressage des esprits", titleNote: "Titre de travail : le titre du manuel est coupé sur la photo.", work: "« Ce qui abandonne les Allemands », Crépuscule des idoles", ref: "trad. P. Wotling", year: "1889", yearN: 1889, genre: "Essai philosophique",
      doc: { photos: ["IMG_2611"], printed: "TEXTE 6" },
      chapeau: "Nietzsche défend une éducation qui ne viserait pas à standardiser les individus pour les adapter aux besoins de la société et de l'État, mais à permettre à chacun de développer sa singularité en devenant lui-même.",
      short: "L'éducation supérieure est une vocation, pas un dressage",
      sujet: "La critique de l'enseignement supérieur allemand, devenu un dressage de masse.",
      problematique: "Une éducation pour tous peut-elle encore être une éducation supérieure ?",
      these: "Les « instituts d'enseignement supérieur » allemands pratiquent un dressage brutal qui rend les jeunes gens utilisables par l'État. Or une éducation supérieure n'appartient qu'à l'exception : sa démocratisation fait décliner la culture. L'homme supérieur a une vocation, et il prend son temps.",
      idees: [
        "L'enseignement supérieur vise à rendre vite une masse de jeunes gens « utilisables, exploitables pour le service de l'État ».",
        "« Éducation supérieure » et masse se contredisent : le beau appartient à peu d'hommes.",
        "La culture allemande décline parce que l'éducation supérieure n'est plus un privilège.",
        "Une « hâte inconvenante » presse les jeunes gens de choisir une profession.",
        "L'homme supérieur a une vocation, pas une profession : à trente ans, on est encore un débutant."
      ],
      arguments: [
        "Argument de la contradiction : une éducation « supérieure » de masse se contredit.",
        "Critique de l'utilité : former pour l'État, c'est dresser.",
        "Oppositions vocation / profession, prendre son temps / hâte."
      ],
      exemples: ["Les privilèges militaires qui engorgent les instituts d'enseignement supérieur.", "La « question fondamentale » posée trop tôt : quelle profession ?"],
      neutre: "L'éducation d'État n'est pas neutre : elle sert les besoins de l'État et standardise. Mais la solution de Nietzsche est aristocratique.",
      piege: "Nietzsche ne défend pas l'égalité devant l'éducation : sa critique est élitiste.",
      connaissances: ["Nietzsche (1844-1900), Crépuscule des idoles (1889).", "Pulchrum est paucorum hominum : « le beau appartient à peu d'hommes » (d'après Horace).", "Vocation / profession."],
      dissertation: ["Critiquer une éducation qui ne forme que des travailleurs utiles.", "Opposer profession et vocation, utilité et culture.", "Faire l'éloge de la lenteur dans la formation de soi."],
      liens: [
        { to: "tocqueville-uniformiser", t: "Comme Tocqueville, Nietzsche dénonce une éducation d'État qui uniformise." },
        { to: "rousseau-emile", t: "Comme Rousseau, il refuse de presser la formation vers l'âge adulte." },
        { to: "balzac-lambert", t: "Le « dressage » critiqué par Nietzsche rappelle la discipline du collège de Balzac." }
      ],
      oppositions: [
        { to: "hugo-chaque-enfant", t: "Hugo veut instruire tous les enfants ; Nietzsche juge que l'éducation supérieure ne peut être qu'un privilège." },
        { to: "ferry-lettre", t: "Ferry fonde une éducation nationale pour tous ; Nietzsche voit dans la culture « devenue commune » la cause du déclin." },
        { to: "rabelais-ponocrates", t: "Ponocratès remplit chaque minute ; Nietzsche réclame le droit de prendre son temps." }
      ],
      citations: [
        { t: "un dressage brutal", where: "l. 2",
          sens: "L'enseignement d'État traite les jeunes gens comme des animaux qu'on dresse.",
          usage: "Pour critiquer une éducation utilitaire." },
        { t: "Toute éducation supérieure n'appartient qu'à l'exception", where: "l. 5",
          sens: "La haute culture ne peut pas être de masse.",
          usage: "Pour discuter la démocratisation de l'éducation." },
        { t: "Et partout règne une hâte inconvenante", where: "l. 18",
          sens: "Former vite, c'est mal former.",
          usage: "Pour l'éloge de la lenteur.",
          fill: "Et partout règne une [[hâte]] inconvenante" },
        { t: "Une espèce supérieure d'homme […] n'aime pas les professions, pour cette raison précise qu'elle sait avoir une vocation", where: "l. 20-22",
          sens: "La vocation (ce qu'on est appelé à être) s'oppose à la profession (le métier utile).",
          usage: "Pour le sujet du Grand oral : vocation et profession." },
        { t: "à trente ans, au sens de la haute culture, on est un débutant, un enfant", where: "dernière ligne",
          sens: "Se former prend toute une vie.",
          usage: "Pour la formation de soi comme tâche sans fin." }
      ],
      annotations: [
        { t: "I « Critique du système d'éducation allemand »", lecture: "sure", keep: true, why: "Plan du texte en trois parties." },
        { t: "II « Critique de la démocratisation de l'éducation supérieure »", lecture: "sure", keep: true },
        { t: "III « L'importance du temps et de trouver sa vocation »", lecture: "sure", keep: true },
        { t: "Surlignés : « une hâte inconvenante », « prend son temps »", lecture: "sure", keep: true }
      ],
      manuel: {
        notes: ["1. Formule inspirée du poète latin Horace : « Le beau appartient à peu d'hommes »."],
        bac: [{ k: "Vers le Grand oral", q: "En quoi la vocation peut-elle entrer en conflit avec la profession ?" }]
      },
      alertes: ["Le titre du texte, en haut de la page, est coupé sur la photo : « Contre le dressage des esprits » est un titre de travail."],
      complement: ["Le chapitre est plus souvent traduit « Ce qui manque aux Allemands » ; la photo porte « Ce qui abandonne les Allemands » (à vérifier dans le manuel).", "Crépuscule des idoles est écrit en 1888 et publié début 1889."],
      vf: [
        { s: "Pour Nietzsche, une éducation supérieure doit être accessible à la masse.", a: false, explain: "« Éducation supérieure » et masse : « cela entre d'emblée en contradiction »." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "heritier-formatage", chapter: "ch1", discipline: "philosophie", author: "heritier",
      classement: { chapitre: "theme", discipline: "Texte d'anthropologue (rubrique « Résonances ») : rangé en philosophie, à confirmer." },
      title: "Le conditionnement de la domination masculine", work: "La Différence des sexes", year: "2010", yearN: 2010, genre: "Essai d'anthropologie",
      doc: { photos: ["IMG_2612"], printed: "Résonances", hand: "3 (rouge, entouré)" },
      chapeau: "Lors d'un séjour d'étude en Afrique, l'anthropologue Françoise Héritier a observé que les mères ne réagissaient pas de la même façon aux pleurs des bébés garçons et des bébés filles.",
      short: "Dès le berceau, l'éducation fabrique la domination",
      sujet: "Comment l'éducation de la petite enfance fabrique deux sortes d'individus selon le sexe.",
      problematique: "Les différences de caractère entre hommes et femmes sont-elles naturelles, ou produites par l'éducation ?",
      these: "Dès le berceau, des « modèles de formatage » apprennent aux garçons que leurs désirs seront satisfaits tout de suite, et aux filles à attendre et à supporter la frustration : la domination masculine est un conditionnement, non une donnée naturelle.",
      idees: [
        "Chez les Samo (Burkina Faso), on nourrit les garçons dès qu'ils pleurent, on fait attendre les filles.",
        "La justification donnée est naturelle : les garçons auraient le « cœur rouge », violents et incapables de supporter la frustration.",
        "On apprend aux filles la patience dès le plus jeune âge.",
        "On forme ainsi deux sortes d'individus : l'une s'attend à être satisfaite, l'autre s'habitue à la frustration."
      ],
      arguments: [
        "L'observation de terrain, méthode de l'anthropologue.",
        "La critique d'une justification par la « nature », qui masque un apprentissage.",
        "Une généralisation : « des modèles de formatage que nous pourrions inventorier »."
      ],
      exemples: ["Les mères samo qui portent leur bébé dans le dos en travaillant.", "Le « cœur rouge » attribué aux garçons."],
      neutre: "L'éducation n'est pas neutre : avant même l'école, elle façonne les rapports entre les sexes.",
      piege: "Héritier ne dit pas que cela n'existe qu'en Afrique : l'exemple samo illustre des modèles qu'on pourrait inventorier partout.",
      connaissances: ["Françoise Héritier (1933-2017), anthropologue.", "Formatage, conditionnement, domination masculine.", "L'anthropologie étudie les groupes humains et les faits sociaux expliqués par la culture."],
      dissertation: ["Montrer que l'éducation commence avant l'école, dans la famille.", "Distinguer ce qui est naturel et ce qui est construit.", "Faire de l'éducation un lieu de reproduction des inégalités."],
      liens: [
        { to: "mill-assujettissement", t: "Mill dénonçait déjà une éducation qui dresse les femmes à la soumission." },
        { to: "colette-claudine", t: "Chez Colette, l'école sépare aussi les rôles : lingeries pour les filles, menuiserie pour les garçons." }
      ],
      oppositions: [
        { to: "ferry-lettre", t: "Ferry présente la morale enseignée comme « universellement acceptée » ; Héritier montre que des normes dites naturelles sont construites." }
      ],
      citations: [
        { t: "Il existe des modèles de formatage que nous pourrions inventorier.", where: "l. 1",
          sens: "L'éducation impose des manières d'être, de façon systématique.",
          usage: "Pour l'éducation comme conditionnement.",
          fill: "Il existe des modèles de [[formatage]] que nous pourrions inventorier." },
        { t: "c'était les petits garçons que l'on nourrissait quand ils pleuraient et les petites filles que l'on faisait attendre", where: "l. 13-14",
          sens: "Une différence de traitement dès le berceau.",
          usage: "Pour un exemple concret de conditionnement." },
        { t: "On formate ainsi deux sortes d'individus", where: "l. 22",
          sens: "L'éducation produit les différences qu'on croit naturelles.",
          usage: "Pour opposer nature et éducation." }
      ],
      annotations: [
        { t: "« 3 » entouré en rouge en haut de page", keep: false, why: "Numéro d'ordre, non utilisé pour le classement." }
      ],
      manuel: {
        notes: ["1. Formatage : façons d'imposer des manières d'être ou de se conduire.", "2. Mil : céréale à petit grain cultivée en Afrique.", "3. Formater : programmer.", "4. Exutoires : moyens et occasions d'obtenir satisfaction."],
        saviez: "L'anthropologie étudie les modes d'existence des groupes humains, en particulier les phénomènes sociaux qui s'expliquent par des facteurs culturels."
      },
      alertes: ["Texte de la rubrique « Résonances » du manuel : il prolonge le chapitre, sans être forcément au même rang que les textes numérotés."],
      complement: ["Françoise Héritier a succédé à Claude Lévi-Strauss au Collège de France et a forgé la notion de « valence différentielle des sexes »."],
      vf: [
        { s: "Selon Héritier, les mères samo nourrissent en priorité les petites filles qui pleurent.", a: false, explain: "Ce sont les petits garçons qu'on nourrit quand ils pleurent ; les petites filles, on les fait attendre." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "mill-assujettissement", chapter: "ch1", discipline: "philosophie", author: "mill",
      classement: { chapitre: "theme", discipline: "Essai d'un philosophe : philosophie." },
      title: "Éducation ou conditionnement ?", work: "De l'assujettissement des femmes", year: "1869", yearN: 1869, genre: "Essai philosophique et politique",
      doc: { photos: ["IMG_2613"], printed: "2", hand: "2 (rouge, entouré)" },
      chapeau: "Mill expose les idées élaborées avec son épouse Harriet Taylor Mill sur l'égalité des hommes et des femmes, alors que la loi anglaise du XIXe siècle institue leur inégalité. Il dénonce la manière dont les hommes conditionnent les femmes pour en faire des épouses soumises.",
      short: "L'éducation dresse les femmes à la soumission",
      sujet: "L'éducation des femmes comme instrument de leur soumission.",
      problematique: "Ce qu'on appelle la « nature » féminine n'est-il pas le produit d'une éducation ?",
      these: "Les hommes ne veulent pas seulement l'obéissance des femmes : ils veulent leurs sentiments. Ils ont donc mis « toute la force de l'éducation » au service de cette domination : dressées à renoncer à leur volonté, les femmes font du désir de plaire à l'homme leur « étoile polaire ».",
      idees: [
        "Dès l'enfance, les femmes apprennent que leur idéal est le contraire de celui de l'homme : ne pas vouloir par elles-mêmes.",
        "La morale (le devoir de vivre pour les autres) et le sentiment (« sa nature le veut ») justifient l'abnégation.",
        "Dépendantes du mari pour tout (honneurs, plaisirs, considération), elles n'ont d'autre ressource que de plaire.",
        "Les hommes présentent la faiblesse et l'abdication de la volonté comme l'essence de la séduction féminine."
      ],
      arguments: [
        "Argument de la fin et des moyens : on veut plus que l'obéissance, donc on utilise l'éducation.",
        "Démystification : ce qu'on présente comme « nature » est un dressage.",
        "Argument social : sans accès à la considération, plaire devient une nécessité."
      ],
      exemples: ["L'« étoile polaire » : le désir de plaire oriente toute l'éducation des femmes.", "L'abnégation présentée comme vertu et comme séduction."],
      neutre: "L'éducation n'est pas neutre : elle peut être un conditionnement au service d'un rapport de domination.",
      piege: "Mill ne décrit pas la nature des femmes : il montre que cette prétendue nature est fabriquée.",
      connaissances: ["John Stuart Mill (1806-1873), De l'assujettissement des femmes (1869).", "Éduquer / conditionner, abnégation, assujettissement.", "Harriet Taylor Mill."],
      dissertation: ["Distinguer éduquer et conditionner (titre du manuel).", "Critiquer l'appel à la « nature » en éducation.", "Faire de l'éducation la condition de l'émancipation, ou de l'assujettissement."],
      liens: [
        { to: "heritier-formatage", t: "Héritier observe le même conditionnement dès la petite enfance." },
        { to: "colette-claudine", t: "Colette montre, avec ironie, l'école qui prépare les filles aux travaux de dame." }
      ],
      oppositions: [
        { to: "rousseau-perfectibilite", t: "Rousseau définit l'homme par la liberté d'acquiescer ou de résister ; Mill montre une éducation qui apprend aux femmes à « ne pas vouloir »." }
      ],
      citations: [
        { t: "Les maîtres des femmes veulent plus que l'obéissance, aussi ont-ils tourné au profit de leur dessein toute la force de l'éducation.", where: "l. 1-2",
          sens: "La domination passe par l'éducation des esprits, pas seulement par la contrainte.",
          usage: "Pour l'éducation comme instrument de pouvoir.",
          fill: "Les maîtres des femmes veulent plus que l'obéissance, aussi ont-ils tourné au profit de leur dessein toute la force de l'[[éducation]]." },
        { t: "elles sont dressées à ne pas vouloir par elles-mêmes", where: "l. 4",
          sens: "L'éducation des femmes est un dressage qui détruit la volonté.",
          usage: "Pour opposer éducation et dressage." },
        { t: "une sorte d'étoile polaire", where: "l. 16",
          sens: "Le désir de plaire devient le repère de toute la vie.",
          usage: "Pour l'intériorisation de la domination." },
        { t: "la faiblesse, l'abnégation, l'abdication de toute volonté dans les mains de l'homme, comme l'essence de la séduction féminine", where: "l. 18-20",
          sens: "La soumission est déguisée en charme.",
          usage: "Pour montrer comment une norme se fait passer pour une nature." }
      ],
      annotations: [
        { t: "« citation intéressante » (1re phrase)", lecture: "sure", keep: true },
        { t: "« → la femme doit s'oublier pour l'homme » (fin)", lecture: "sure", keep: true },
        { t: "« → ce que la femme doit obtenir dans la société est dans l'intérêt de l'homme » (marge)", lecture: "probable", keep: true },
        { t: "« → la femme ne serait qu'outil de procréation » (marge)", lecture: "probable", keep: true },
        { t: "« femme soumise = faible » (marge, en bas)", lecture: "probable", keep: true },
        { t: "« → faire abnégation : … » (marge)", lecture: "partielle", keep: false, why: "Fin illisible." }
      ],
      manuel: { notes: ["Notes coupées à gauche sur la photo : « …de soi au profit d'autrui » (abnégation), « …, soumission » (assujettissement), « …renoncer » (abdication)."] },
      alertes: ["Les notes de bas de page sont coupées au bord gauche de la photo."],
      complement: ["Mill (1806-1873), philosophe et économiste anglais ; député, il défend en 1867 le droit de vote des femmes."],
      vf: [
        { s: "Selon Mill, les hommes se contentent de l'obéissance des femmes.", a: false, explain: "« Les maîtres des femmes veulent plus que l'obéissance » : ils utilisent toute la force de l'éducation." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "colette-claudine", chapter: "ch1", discipline: "litterature", author: "colette",
      classement: { chapitre: "theme", discipline: "Roman : littérature." },
      title: "Filles et garçons, des rôles prédéfinis par l'éducation", work: "Claudine à l'école", year: "1900", yearN: 1900, genre: "Roman en partie autobiographique",
      doc: { photos: ["IMG_2614"], printed: "3" },
      chapeau: "Dans ce roman en partie autobiographique, l'héroïne a 15 ans et fréquente pour la dernière année l'école du village de Montigny, dans les années 1880-1890, quand l'école n'est pas encore mixte.",
      short: "L'école prépare filles et garçons à des rôles différents",
      sujet: "L'exposition de fin d'année des « ouvrages de main » des filles et des garçons.",
      problematique: "Que révèlent les travaux exposés sur l'éducation des filles et des garçons ?",
      these: "Sous l'ironie de Claudine, l'école apparaît comme le lieu où se fixent des rôles sexués : lingeries et broderies pour les filles, menuiserie et moulages pour les garçons. L'éducation n'est pas neutre : elle prépare chacun à une place.",
      idees: [
        "Les grandes préparent des travaux « mirifiques » pour l'exposition qui suit la distribution des prix.",
        "La ville entière vient admirer dentelles, broderies et lingeries.",
        "Les garçons exposent pieds de table, colonnes torses, moulages en terre glaise.",
        "Le regard de Claudine est moqueur : jeux de mots, parenthèses, adjectifs dévalorisants."
      ],
      arguments: [
        "Ironie et humour : « Je n'en connais pas de « pied » ».",
        "Énumérations d'objets qui montrent la répartition des rôles.",
        "Parenthèses et exclamations au ton familier.",
        "Chute dépréciative : « noyés, empâtés, piteux »."
      ],
      exemples: ["« du tricot détricoté » : le travail des filles tourné en dérision.", "La « Section de sculpture » de l'instituteur.", "Le tableau du manuel : Richard Hall, La Classe manuelle, école de petites filles (1889)."],
      neutre: "L'école n'est pas neutre : ses enseignements préparent filles et garçons à des rôles différents.",
      piege: "Claudine ne fait pas l'éloge de ces travaux : « mirifiques » est ironique (note 1).",
      connaissances: ["Colette (1873-1954), Claudine à l'école (1900).", "L'école non mixte de la fin du XIXe siècle.", "Ironie, parenthèses, chute."],
      dissertation: ["Montrer que l'école reproduit la répartition traditionnelle des rôles.", "Faire de l'ironie une forme de critique de l'institution.", "Voir dans le regard critique de Claudine une forme d'émancipation."],
      liens: [
        { to: "mill-assujettissement", t: "Mill montre une éducation qui prépare les femmes à plaire ; Colette en donne une illustration concrète et ironique." },
        { to: "heritier-formatage", t: "Héritier explique le « formatage » des sexes dès l'enfance." },
        { to: "flaubert-bovary", t: "Même regard ironique sur l'école." }
      ],
      oppositions: [
        { to: "ferry-lettre", t: "L'école républicaine prétend transmettre des règles communes à tous ; Colette montre une école qui sépare filles et garçons." }
      ],
      citations: [
        { t: "les mirifiques travaux destinés à l'exposition des ouvrages de main", where: "l. 1-2",
          sens: "« Mirifiques » est ironique : la narratrice se moque de ces travaux.",
          usage: "Pour l'ironie comme critique." },
        { t: "(Est-ce que les ouvrages peuvent être autres que « de main » ? Je n'en connais pas de « pied »).", where: "l. 2-4",
          sens: "Jeu de mots : l'ironie démonte l'expression officielle.",
          usage: "Pour le regard critique de l'élève." },
        { t: "du tricot détricoté", where: "l. 9",
          sens: "Des travaux qui ne servent à rien.",
          usage: "Pour la dérision des travaux féminins.",
          fill: "du tricot [[détricoté]]" },
        { t: "(ma chère ! c'est le plus difficile)", where: "l. 21",
          sens: "Ton faussement admiratif : la moquerie touche aussi les garçons.",
          usage: "Pour l'ironie de Claudine." },
        { t: "noyés, empâtés, piteux", where: "dernière ligne",
          sens: "Chute : les « œuvres » des garçons sont ratées.",
          usage: "Pour la chute ironique." }
      ],
      annotations: [
        { t: "« Ironie » et « sarcastique » (début)", lecture: "probable", keep: true },
        { t: "« Ironique » (l. 21-23 et 26)", lecture: "sure", keep: true },
        { t: "« rivale » entouré", lecture: "sure", keep: true, why: "L'école des garçons est présentée comme concurrente." },
        { t: "« du tricot détricoté » souligné", lecture: "sure", keep: true }
      ],
      manuel: {
        notes: ["1. Mirifiques : merveilleux, dans un sens ironique.", "2. Batiste : toile fine et blanche.", "3. Jarretés : munis de jarretières (rubans).", "4. Festonnés : garnis de rubans qui retombent en arc.", "5. Queue d'aronde : pièces de bois en forme de queue d'hirondelle."],
        questions: ["Histoire des arts : le lieu du tableau ressemble-t-il à une salle de classe ? Que font les élèves ? Comment le tableau illustre-t-il le texte ?"]
      },
      alertes: [],
      complement: ["Claudine à l'école paraît en 1900 sous le nom de Willy, le mari de Colette."],
      vf: [
        { s: "Chez Colette, ce sont les garçons qui exposent des broderies et des lingeries.", a: false, explain: "Les filles exposent dentelles et lingeries ; les garçons, des travaux de menuiserie et des moulages." }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "rousseau-emile", chapter: "ch1", discipline: "philosophie", author: "rousseau",
      classement: { chapitre: "theme", discipline: "Traité d'éducation : philosophie." },
      title: "Connaître l'enfant avant de l'éduquer", work: "Émile ou de l'éducation", ref: "« Préface »", year: "1762", yearN: 1762, genre: "Traité d'éducation",
      doc: { photos: ["IMG_2615"], printed: "TEXTE 2" },
      chapeau: "Dans son traité d'éducation fictive, Rousseau part d'un constat provocateur mais méthodologique : nous ne savons pas ce qu'est l'enfance. Pour lui, l'éducation ne peut faire « sortir » de l'enfance qu'à condition d'en « partir » vraiment, sans concevoir l'enfant comme un adulte en plus petit.",
      short: "Il faut connaître l'enfance avant d'éduquer",
      sujet: "La méconnaissance de l'enfance par les éducateurs.",
      problematique: "Peut-on bien éduquer un enfant si l'on cherche toujours en lui l'adulte qu'il deviendra ?",
      these: "On ne connaît pas l'enfance : les éducateurs pensent à ce que l'homme doit savoir, pas à ce que l'enfant est capable d'apprendre. Il faut d'abord étudier l'enfant. Et contre ceux qui réclament des réformes « faisables », Rousseau refuse les demi-mesures : le bien mêlé au mal se gâte.",
      idees: [
        "Les fausses idées sur l'enfance égarent d'autant plus qu'on avance.",
        "Les « plus sages » cherchent l'homme dans l'enfant, sans voir ce qu'il est avant d'être homme.",
        "Même si sa méthode était fausse, ses observations de l'enfance resteraient utiles.",
        "« Commencez donc par mieux étudier vos élèves. »",
        "Refus du compromis : un bien allié au mal existant se gâte ; « ce qui est faisable est ce que vous voulez faire »."
      ],
      arguments: [
        "Distinction entre la méthode (contestable) et l'observation de l'enfant (le « sujet » de l'éducation).",
        "Réfutation de l'objection du réalisme : « Proposez ce qui est faisable ».",
        "Argument de cohérence : on ne peut tendre à deux buts opposés à la fois."
      ],
      exemples: ["L'éducateur qui ne pense qu'à ce qu'il « importe aux hommes de savoir »."],
      neutre: "L'éducation n'est jamais neutre : elle repose sur une idée de l'enfant. Rousseau veut qu'elle repose sur une connaissance vraie de l'enfance.",
      piege: "Rousseau ne dit pas qu'il faut laisser l'enfant faire ce qu'il veut : il dit qu'il faut le connaître pour l'éduquer.",
      connaissances: ["Rousseau, Émile ou de l'éducation (1762), « Préface ».", "L'enfance, un âge qui a sa valeur propre.", "Chimérique : sans lien avec la réalité (note 2)."],
      dissertation: ["Défendre une éducation adaptée à l'âge et à la nature de l'enfant.", "Critiquer une école qui projette sur l'enfant les attentes des adultes.", "Exiger la cohérence : pas de réforme « à demi »."],
      liens: [
        { to: "rousseau-perfectibilite", t: "Même auteur : l'homme est perfectible ; encore faut-il connaître l'enfant pour l'éduquer." },
        { to: "nietzsche-allemands", t: "Nietzsche refuse lui aussi la hâte : on ne doit pas presser la formation." }
      ],
      oppositions: [
        { to: "arendt-crise", t: "Arendt reconnaît la différence entre enfants et adultes, mais met l'accent sur le monde à transmettre plutôt que sur l'étude de l'enfant." },
        { to: "balzac-lambert", t: "Le collège de Balzac ignore tout de l'enfant qu'il a devant lui : l'inverse de ce que réclame Rousseau." }
      ],
      citations: [
        { t: "On ne connaît point l'enfance : sur les fausses idées qu'on en a, plus on va, plus on s'égare.", where: "l. 1-2",
          sens: "L'erreur sur l'enfance fausse toute l'éducation.",
          usage: "Accroche pour tout sujet sur l'enfance et l'éducation.",
          fill: "On ne connaît point l'[[enfance]] : sur les fausses idées qu'on en a, plus on va, plus on s'égare." },
        { t: "Ils cherchent toujours l'homme dans l'enfant, sans penser à ce qu'il est avant que d'être homme.", where: "l. 4-5",
          sens: "L'enfant n'est pas un adulte en plus petit.",
          usage: "Pour respecter l'enfance comme âge propre." },
        { t: "Commencez donc par mieux étudier vos élèves ; car très assurément vous ne les connaissez point.", where: "l. 9-10",
          sens: "L'éducateur doit d'abord observer.",
          usage: "Pour une pédagogie fondée sur la connaissance de l'élève." },
        { t: "dans cet alliage, le bien se gâte, et le mal ne se guérit pas", where: "l. 14-15",
          sens: "Les demi-réformes ne servent à rien.",
          usage: "Pour discuter les réformes de l'école." }
      ],
      annotations: [],
      manuel: { notes: ["1. Quand : quand bien même.", "2. Chimérique : sans lien avec la réalité, utopique."] },
      alertes: ["Le chapeau écrit « Émile ou l'éducation », la référence « Émile ou de l'éducation » : c'est le même ouvrage (titre exact : Émile ou De l'éducation)."],
      complement: ["Émile est condamné et brûlé à Paris en 1762 ; Rousseau doit fuir."],
      vf: [
        { s: "Pour Rousseau, les éducateurs cherchent l'homme dans l'enfant.", a: true, explain: "« Ils cherchent toujours l'homme dans l'enfant, sans penser à ce qu'il est avant que d'être homme. »" }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "tocqueville-uniformiser", chapter: "ch1", discipline: "philosophie", author: "tocqueville",
      classement: { chapitre: "theme", discipline: "Essai de philosophie politique : philosophie." },
      title: "Émanciper ou uniformiser ?", work: "De la démocratie en Amérique", ref: "tome II, livre IV, chap. V (sur la feuille)", year: "1835 (sur la feuille)", yearN: 1840, genre: "Essai politique",
      doc: { photos: ["IMG_2616"], printed: "TEXTE 5" },
      chapeau: "Tocqueville alerte sur le danger de l'instruction publique dans les sociétés démocratiques : au lieu d'émanciper, elle risque d'uniformiser.",
      short: "L'éducation d'État risque d'uniformiser les esprits",
      sujet: "L'éducation devenue « affaire nationale » dans les démocraties.",
      problematique: "Quand l'État prend en charge l'éducation, émancipe-t-il les individus ou les rend-il semblables ?",
      these: "Dans les sociétés démocratiques, l'État s'empare de l'éducation : il prend l'enfant à sa mère, lui inspire ses sentiments et lui fournit ses idées. L'uniformité gagne les études, et avec elle disparaissent la diversité et la liberté.",
      idees: [
        "L'éducation, comme la charité, est devenue une affaire nationale.",
        "L'État prend l'enfant « des bras de sa mère » et le confie à ses agents.",
        "L'État inspire à chaque génération ses sentiments et lui fournit ses idées.",
        "L'uniformité règne dans les études ; la diversité et la liberté disparaissent."
      ],
      arguments: [
        "Comparaison avec la charité : l'État remplace les solidarités privées.",
        "Enchaînement causal : centralisation, uniformité, perte de liberté."
      ],
      exemples: ["L'enfant pris « des bras de sa mère » par l'État."],
      neutre: "Une éducation nationale n'est pas neutre : elle forme les sentiments et les idées de toute une génération, au risque de les uniformiser.",
      piege: "Tocqueville ne refuse pas l'instruction : il met en garde contre son uniformité quand l'État la monopolise.",
      connaissances: ["Tocqueville (1805-1859), De la démocratie en Amérique.", "Émanciper / uniformiser.", "La famille face à l'État."],
      dissertation: ["Discuter les dangers d'une éducation d'État.", "Opposer émancipation et uniformisation.", "Penser la place de la famille face à l'État."],
      liens: [
        { to: "tocqueville-despotisme", t: "Le texte suivant montre où mène cette uniformisation : un « despotisme doux »." },
        { to: "nietzsche-allemands", t: "Nietzsche dénonce aussi une éducation d'État qui standardise." }
      ],
      oppositions: [
        { to: "ferry-lettre", t: "Ferry fait de l'éducation nationale la base d'une morale commune ; Tocqueville y voit un danger pour la liberté." },
        { to: "peguy-hussards", t: "Le « régiment » d'instituteurs célébré par Péguy illustre ce que Tocqueville redoute." }
      ],
      citations: [
        { t: "L'éducation, aussi bien que la charité, est devenue, chez la plupart des peuples de nos jours, une affaire nationale.", where: "l. 1-2",
          sens: "L'État s'est emparé de l'éducation comme de l'aide aux pauvres.",
          usage: "Accroche pour un sujet sur l'éducation et l'État.",
          fill: "L'éducation, aussi bien que la charité, est devenue, chez la plupart des peuples de nos jours, une affaire [[nationale]]." },
        { t: "L'État reçoit et souvent prend l'enfant des bras de sa mère pour le confier à ses agents", where: "l. 2-3",
          sens: "L'État se substitue à la famille.",
          usage: "Pour la rivalité de la famille et de l'État." },
        { t: "L'uniformité règne dans les études comme dans tout le reste ; la diversité comme la liberté en disparaissent chaque jour.", where: "l. 5-6",
          sens: "Uniformiser, c'est tuer la diversité et la liberté.",
          usage: "Pour opposer éducation nationale et liberté." }
      ],
      annotations: [],
      manuel: {
        questions: ["Quelles critiques Tocqueville adresse-t-il à une éducation nationale ? (avec des exemples)", "Ces critiques sont-elles justifiées ?"],
        bac: [{ k: "Interprétation philosophique", q: "Expliquez pourquoi, « chez la plupart des peuples de nos jours, l'éducation est devenue une affaire nationale »." }]
      },
      alertes: ["Date : la feuille indique « tome II … 1835 », mais la bibliographie du chapitre date l'ouvrage de 1835-1840 : le tome II est paru en 1840."],
      complement: ["Tocqueville a voyagé aux États-Unis en 1831-1832 ; il analyse la démocratie comme « égalité des conditions »."],
      vf: [
        { s: "Pour Tocqueville, une éducation nationale favorise la diversité des esprits.", a: false, explain: "« L'uniformité règne dans les études comme dans tout le reste ; la diversité comme la liberté en disparaissent chaque jour. »" }
      ] },

    /* ---------------------------------------------------------------- */
    { id: "tocqueville-despotisme", chapter: "ch1", discipline: "philosophie", author: "tocqueville",
      classement: { chapitre: "theme", discipline: "Essai de philosophie politique : philosophie." },
      title: "Émancipation versus despotisme doux", work: "De la démocratie en Amérique", ref: "tome II, livre IV, chap. VII (sur la feuille)", year: "1835 (sur la feuille)", yearN: 1840, genre: "Essai politique",
      doc: { photos: ["IMG_2616"], printed: "TEXTE 6", pages: "deux feuilles successives sur la même photo" },
      chapeau: "L'uniformisation, dont l'éducation nationale n'est qu'un aspect, fait courir aux démocraties un danger majeur : un nouveau despotisme, doux et bienveillant, exercé par un État paternaliste.",
      short: "Un pouvoir tutélaire maintient les citoyens dans l'enfance",
      sujet: "La forme nouvelle de despotisme qui menace les démocraties.",
      problematique: "Un pouvoir qui veut notre bonheur peut-il nous priver de notre liberté ?",
      these: "Le despotisme qui menace les démocraties ne sera pas violent mais doux : un pouvoir « immense et tutélaire » veille sur des individus repliés sur leurs petits plaisirs et les maintient dans l'enfance, jusqu'à leur ôter l'usage de leur libre arbitre.",
      idees: [
        "Une foule d'hommes « semblables et égaux », repliés sur leurs petits plaisirs et indifférents aux autres.",
        "Au-dessus d'eux, un pouvoir « immense et tutélaire », « absolu, détaillé, régulier, prévoyant et doux ».",
        "Il ressemble à l'autorité paternelle, mais au lieu de préparer à l'âge adulte, il fixe dans l'enfance.",
        "Il veut être le seul agent de leur bonheur et voudrait leur ôter « le trouble de penser et la peine de vivre ».",
        "Le libre arbitre devient rare et inutile ; l'égalité a préparé les hommes à voir cela comme un bienfait."
      ],
      arguments: [
        "Analogie avec la puissance paternelle, puis renversement (préparer à l'âge viril / fixer dans l'enfance).",
        "Accumulation des verbes de pouvoir : pourvoit, prévoit, facilite, conduit, dirige, règle, divise.",
        "Question rhétorique sur « le trouble de penser et la peine de vivre »."
      ],
      exemples: ["L'individu pour qui ses enfants et ses amis forment « toute l'espèce humaine »."],
      neutre: "Une éducation, comme un État, qui décide de tout pour notre bien nous empêche de devenir adultes : s'émanciper, c'est sortir de la tutelle.",
      piege: "Ce despotisme n'est pas une dictature violente : il est « doux », et c'est ce qui le rend dangereux.",
      connaissances: ["Despotisme doux, pouvoir tutélaire (« qui place sous sa garde »).", "Individualisme démocratique : le repli sur la vie privée.", "Libre arbitre, émancipation, âge adulte."],
      dissertation: ["Définir l'émancipation comme sortie de la tutelle.", "Critiquer le paternalisme en éducation, au travail, en politique (question du Grand oral).", "Montrer que le bonheur assuré par un autre peut coûter la liberté."],
      liens: [
        { to: "tocqueville-uniformiser", t: "L'uniformisation des études prépare ce despotisme doux." },
        { to: "arendt-crise", t: "Arendt refuse aussi de confondre les âges de la vie." }
      ],
      oppositions: [
        { to: "ferry-lettre", t: "Ferry attend beaucoup de l'État éducateur ; Tocqueville met en garde contre un État qui veut faire notre bonheur à notre place." }
      ],
      citations: [
        { t: "une foule innombrable d'hommes semblables et égaux qui tournent sans repos sur eux-mêmes", where: "l. 2-3",
          sens: "L'individualisme démocratique : des hommes identiques, repliés sur eux.",
          usage: "Pour l'uniformisation des individus." },
        { t: "un pouvoir immense et tutélaire", where: "l. 10",
          sens: "Un État qui protège comme un tuteur, et donc maintient sous sa garde.",
          usage: "Pour définir le paternalisme." },
        { t: "Il est absolu, détaillé, régulier, prévoyant et doux.", where: "l. 11-12",
          sens: "La douceur fait partie de la domination.",
          usage: "Pour le despotisme doux.",
          fill: "Il est absolu, détaillé, régulier, prévoyant et [[doux]]." },
        { t: "il ne cherche, au contraire, qu'à les fixer irrévocablement dans l'enfance", where: "l. 14",
          sens: "Au lieu d'émanciper, ce pouvoir infantilise.",
          usage: "Pour opposer éducation et tutelle." },
        { t: "que ne peut-il leur ôter entièrement le trouble de penser et la peine de vivre ?", where: "l. 19-20",
          sens: "L'aboutissement : des citoyens qui ne pensent plus.",
          usage: "Pour montrer le prix de la sécurité." }
      ],
      annotations: [],
      manuel: {
        notes: ["1. Tutélaire : qui place sous sa garde."],
        bac: [{ k: "Vers le Grand oral", q: "Quels sont les dangers du paternalisme dans l'éducation, le travail et la politique ?" }]
      },
      alertes: [
        "Référence imprimée : « tome II, Livre IV, chap. VII, 1835 ». Le passage sur le despotisme doux est habituellement situé au chapitre VI du livre IV, et le tome II date de 1840 : à vérifier.",
        "Le texte s'étend sur deux feuilles photographiées ensemble (IMG_2616) : le début en haut, la suite sur la feuille du bas."
      ],
      complement: ["Tocqueville analyse deux dangers de la démocratie : la tyrannie de la majorité et ce despotisme doux."],
      vf: [
        { s: "Le pouvoir décrit par Tocqueville prépare les hommes à l'âge viril, comme un père.", a: false, explain: "Il ressemblerait à la puissance paternelle s'il préparait à l'âge viril, « mais il ne cherche, au contraire, qu'à les fixer irrévocablement dans l'enfance »." }
      ] }
  ]
};
if (window.Recto && window.Recto.hlpLoaded) window.Recto.hlpLoaded();
