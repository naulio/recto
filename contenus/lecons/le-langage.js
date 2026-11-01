/* Recto · Leçon de philosophie : Le langage.
   Cours remis au propre à partir du cours de la classe : mêmes idées, mêmes auteurs, mêmes exemples.
   Les rares ajouts sont signalés comme « Complément ». Les exercices ne portent que sur le cours. */
Recto.add("le-langage", (function () {

  const parts = [
    { n: 0, roman: "", name: "Introduction", label: "Introduction", title: "Qu'est-ce que le langage ?",
      metaphor: "", essence: "Un système de signes : communiquer, mais aussi penser, nommer, agir." },
    { n: 1, roman: "I", name: "Partie I", label: "Le langage animalier", title: "Le problème du langage animalier",
      metaphor: "Les animaux parlent-ils ?", essence: "L'homme, être de parole ; les animaux communiquent, mais communiquer n'est pas parler." },
    { n: 2, roman: "II", name: "Partie II", label: "Les fonctions du langage", title: "Les fonctions du langage",
      metaphor: "Que fait le langage ?", essence: "Communiquer, créer du lien, agir sur autrui, faire exister l'absent : dire, c'est faire." },
    { n: 3, roman: "III", name: "Partie III", label: "Pensée et langage", title: "Pensée et langage",
      metaphor: "Penser sans mots ?", essence: "La pensée est inséparable du langage, qui peut pourtant la trahir et l'enfermer." },
    { n: 4, roman: "IV", name: "Annexes", label: "Annexes", title: "Domination, science du langage, les mots et les choses",
      metaphor: "Pouvoir, science, choses", essence: "Contrôler les mots, étudier les signes, comprendre comment les mots renvoient aux choses." }
  ];

  /* ---------------- LE COURS, PAGE PAR PAGE ---------------- */
  const course = [
    { id: "intro", part: 0, sec: "Introduction", title: "Qu'est-ce que le langage ?",
      lead: "Le langage désigne un système de signes permettant notamment de communiquer. Mais le langage a-t-il uniquement pour fonction de communiquer ?",
      body: [
        "Le terme *langage* vient du latin *lingua*, « langue ». En français, la langue désigne à la fois *l'organe* et *le système de communication* que nous utilisons pour parler.",
        "La *communication* est au cœur de nombreuses révolutions technologiques : de la lettre au télégraphe, puis au téléphone, au téléphone portable, aux smartphones et aux réseaux sociaux. Notre société vise un idéal d'*efficacité de la transmission* : communiquer toujours plus vite et plus précisément. Mais ce qui nous intéresse, c'est que *les êtres humains* puissent communiquer grâce aux machines.",
        "Le langage semble être une caractéristique fondamentale de l'être humain : *l'homme semble être, par nature, un être parlant*. Pourtant, il est difficile de parler sans rien dire, et le langage semble avoir d'autres fonctions : *penser*, *nommer le monde*, *agir sur soi et sur autrui*."
      ],
      side: [
        { k: "def", w: "Langage", t: "Système de signes permettant notamment de communiquer." },
        { k: "ex", w: "La question du cours", t: "Le langage a-t-il uniquement pour fonction de communiquer ?" }
      ],
      key: "Le langage communique, mais il permet aussi de penser, de nommer le monde et d'agir.",
      ns: ["definition"] },

    { id: "monde", part: 0, sec: "Introduction", title: "Le langage, manière d'investir le monde",
      lead: "Le langage semble constituer la « texture même de notre monde » : tout ce qui nous entoure peut être nommé et décrit à travers lui.",
      body: [
        "Le philosophe français *Maurice Merleau-Ponty* parle d'un « *monde parlé et parlant* ». Le monde est *parlé*, parce que nous le nommons : une chaise, un arbre, une maison. Il est *parlant*, car pour comprendre le monde, nous devons pouvoir en dire quelque chose et le penser à travers le langage.",
        "Le langage ne sert donc pas seulement à communiquer : il *construit notre rapport au monde*. Il permet aussi d'*agir sur soi et sur autrui* : ce n'est pas une simple médiation, il peut être directement *agissant*.",
        "Mais parce qu'il matérialise nos pensées, il peut aussi être source de difficultés : on a du mal à dire exactement ce qu'on veut, on est mal compris. Le langage peut *trahir notre pensée* : on peut dire plus que ce qu'on voulait exprimer."
      ],
      side: [
        { k: "q", t: "Un monde parlé et parlant.", a: "Maurice Merleau-Ponty" },
        { k: "ex", w: "Le chemin du cours", t: "Comprendre les spécificités du langage humain, notamment en comparaison avec le langage animal." }
      ],
      key: "Le langage construit notre rapport au monde ; il peut agir, mais aussi trahir notre pensée.",
      ns: ["monde-parle"] },

    /* ---------- I. A ---------- */
    { id: "faber", part: 1, sec: "A. L'Homme, un être de parole", title: "Bergson : l'homme comme Homo faber",
      lead: "Pour comprendre l'origine et la structure du langage, il faut des repères chronologiques mais aussi des repères logiques.",
      body: [
        "Dans *L'Évolution créatrice*, *Henri Bergson* distingue trois directions de l'évolution, qu'il rattache à l'*élan vital* (le principe qui permet de penser le développement de la vie) :",
        ["*La torpeur* → le règne végétal : les êtres vivants ne peuvent pas se déplacer eux-mêmes.", "*L'instinct* → le règne animal : des comportements principalement guidés par l'instinct.", "*L'intelligence* → l'être humain."],
        "L'être humain se caractérise par son intelligence et sa capacité à *inventer et perfectionner des techniques* : il est avant tout un *Homo faber*. La *paléoanthropologie* (science de l'origine et de l'évolution de l'être humain) le confirme : des périodes entières portent le nom de leurs techniques (âge de la pierre, âge du bronze, âge du fer, révolution industrielle)."
      ],
      side: [
        { k: "def", w: "Homo faber", t: "« Homme fabricant » : l'être humain capable de fabriquer des outils et de créer des techniques." }
      ],
      key: "Pour Bergson, l'homme fabrique, invente et perfectionne constamment des techniques : il est Homo faber.",
      ns: ["faber"] },

    { id: "loquens", part: 1, sec: "A. L'Homme, un être de parole", title: "Hagège : l'homme comme Homo loquens",
      lead: "Le linguiste français *Claude Hagège* discute cette conception : l'homme n'est pas seulement un Homo faber, il est aussi, et peut-être avant tout, un *Homo loquens*.",
      body: [
        "L'être humain possède la capacité de parler et de *transmettre des connaissances* par le langage. Pour que les techniques évoluent, il faut *transmettre les savoir-faire* : une technique inventée par un individu n'est conservée et améliorée que si on l'enseigne aux autres, d'abord oralement, puis par écrit.",
        "Exemple : le *fordisme* (production industrielle fondée sur le travail à la chaîne) : pour le mettre en place et le transmettre, il faut expliquer les méthodes de production. L'évolution technique et l'évolution du langage sont profondément liées.",
        "L'homme a aussi créé des *langages artificiels*, qui ne sont pas des langues naturelles : les mathématiques, la physique, la chimie, la logique, la musique. Ils transmettent des connaissances de façon précise et structurée."
      ],
      side: [
        { k: "def", w: "Homo loquens", t: "« Homme parlant » : celui qui parle et transmet ce qu'il sait." }
      ],
      key: "Le langage est indispensable à la transmission des connaissances et des techniques : il permet de construire, organiser et transmettre le savoir.",
      ns: ["loquens"] },

    /* ---------- I. B ---------- */
    { id: "animaux", part: 1, sec: "B. La communication animale", title: "Les animaux communiquent",
      lead: "La capacité humaine à parler n'est pas apparue soudainement : elle résulte d'une évolution progressive sur plusieurs millions d'années. Mais la communication est-elle propre à l'être humain ?",
      body: [
        "La *paléoanthropologie* montre que l'évolution des capacités physiques nécessaires aux sons articulés et l'évolution du cerveau sont liées : l'apparition du langage est un *processus progressif*, pas l'apparition soudaine de la parole chez un individu isolé.",
        "De nombreux animaux transmettent des informations : des *sons*, des signaux visuels ou corporels, des *ultrasons* (trop aigus pour l'oreille humaine), des *infrasons* (sons très graves, inaudibles pour nous). Ces informations sont liées à la survie : nourriture, point d'eau, danger, déplacement du groupe.",
        "Certains animaux vont au-delà de la survie : des *cétacés* (dauphins, orques) ont des comportements sociaux et ludiques associés à des échanges de signaux. Il existe donc bien une *communication animale*, parfois très complexe."
      ],
      side: [
        { k: "def", w: "Cétacés", t: "Groupe comprenant notamment les dauphins et les orques." }
      ],
      key: "La communication animale existe, et elle est parfois très complexe.",
      ns: ["comm-animale"] },

    { id: "abeilles", part: 1, sec: "B. La communication animale", title: "L'exemple des abeilles : Karl von Frisch",
      lead: "Le biologiste et zoologiste *Karl von Frisch* (XXᵉ siècle) a étudié la communication des abeilles, dans *Vie et mœurs des abeilles*.",
      body: [
        "Les abeilles utilisent une « *danse* » pour transmettre aux autres abeilles des informations sur la localisation d'une source de nourriture. La danse indique :",
        ["la *direction* de la nourriture ;", "la *distance approximative* à parcourir ;", "l'emplacement d'une source de nourriture ou d'eau."],
        "Les mouvements de l'abeille, leur orientation et la manière dont elle danse transmettent ces informations aux autres. La communication animale n'est donc pas le fruit du hasard : elle peut être un véritable *système de transmission d'informations*.",
        "La question devient alors : *suffit-il de communiquer pour parler véritablement ?* Il faut distinguer *communication* et *langage humain*."
      ],
      side: [
        { k: "ex", w: "La danse des abeilles", t: "Direction, distance, emplacement : un message précis, transmis par des mouvements." }
      ],
      key: "Les abeilles transmettent des informations précises : la communication animale est un vrai système.",
      ns: ["abeilles"] },

    { id: "difference", part: 1, sec: "B. La communication animale", title: "Communication animale et langage humain",
      lead: "Chez de nombreuses espèces, la communication est en grande partie *biologiquement déterminée*. Chez l'être humain, le langage s'apprend.",
      body: [
        "*Biologiquement déterminé* : inscrit dans les caractéristiques de l'espèce, largement inné. Les animaux n'ont pas besoin d'apprendre leur système de communication comme les humains apprennent une langue. Le langage humain, lui, repose sur un *apprentissage* et peut être transmis et transformé par les générations.",
        "Notre langage a surtout une très grande *productivité* : la capacité à produire et comprendre une infinité d'énoncés nouveaux. Nous pouvons apprendre de nouveaux mots, comprendre des phrases jamais entendues, transmettre de nouvelles connaissances, formuler de nouvelles idées, construire des raisonnements de plus en plus complexes.",
        "Le langage humain permet de parler *de presque n'importe quoi* : du monde présent ou passé, des mathématiques, des sciences, de nos émotions, de choses imaginaires, d'événements qui n'existent pas encore. Cela le distingue fortement des systèmes de communication animale connus."
      ],
      side: [
        { k: "def", w: "Productivité", t: "Capacité à produire et comprendre une infinité d'énoncés nouveaux." }
      ],
      key: "Le langage humain est appris, transmis, transformé, et ouvert à une infinité de sujets.",
      ns: ["productivite"] },

    { id: "descartes", part: 1, sec: "B. La communication animale", title: "Descartes : le langage comme « instrument universel »",
      lead: "Cette spécificité avait déjà été remarquée par Descartes, dans sa *lettre au marquis de Newcastle*.",
      body: [
        "Descartes présente le langage comme « cet instrument universel qui peut servir en toutes sortes de rencontres ». La formule souligne l'*élasticité* du langage humain : il peut être utilisé dans une très grande diversité de situations, pour parler d'une infinité de sujets.",
        "Le langage humain n'est donc pas limité à quelques messages déterminés à l'avance : il permet de *produire et de comprendre constamment de nouveaux énoncés*.",
        "Ainsi, les animaux communiquent, parfois de manière très élaborée : les abeilles transmettent avec précision des informations à leurs congénères. Mais le langage humain se caractérise par sa *productivité*, sa *capacité d'apprentissage* et son *ouverture à une infinité de sujets*."
      ],
      side: [
        { k: "q", t: "Cet instrument universel qui peut servir en toutes sortes de rencontres.", a: "Descartes, lettre au marquis de Newcastle" },
        { k: "plus", w: "Lien", t: "Même idée dans le Discours de la méthode (Ve partie), aussi dans Recto." }
      ],
      key: "Communiquer n'est donc pas nécessairement parler : le langage humain a des caractéristiques particulières.",
      ns: ["instrument-universel"] },

    /* ---------- II. A ---------- */
    { id: "communication", part: 2, sec: "A. La communication", title: "La communication, fonction fondamentale",
      lead: "Si le langage ne sert pas uniquement à communiquer, quelles sont ses différentes fonctions ? D'abord, il est un *instrument de communication*.",
      body: [
        "La communication semble être une fonction fondamentale du langage, car toute société humaine repose sur *l'échange*, et le premier échange possible entre les individus est précisément la communication. Cela vaut pour les échanges quotidiens comme pour la transmission des connaissances et des techniques.",
        "Exemple : même en achetant une paire de chaussures sur Internet, on est confronté au langage (taille, prix, description du produit, conditions de livraison). Dans un magasin, il faut échanger avec le vendeur.",
        "Le langage permet ainsi :",
        ["de transmettre des informations ;", "de transmettre des connaissances et des techniques ;", "de satisfaire nos besoins ;", "d'organiser la vie collective ;", "de créer du lien social."]
      ],
      side: [
        { k: "def", w: "Instrument de communication", t: "Ce qui permet aux êtres humains d'échanger entre eux." }
      ],
      key: "Toute société repose sur l'échange, et le premier échange est la communication.",
      ns: ["communication"] },

    { id: "lien", part: 2, sec: "A. La communication", title: "Le lien social, et un outil pas comme les autres",
      lead: "La communication ne sert pas toujours à transmettre une information importante. Et le langage est-il seulement un outil ?",
      body: [
        "« Salut, comment tu vas ? » : nous ne cherchons pas forcément à connaître en détail l'état de la personne. La formule sert surtout à *établir ou maintenir un lien social*. Le langage crée une relation avec autrui, même sans information importante.",
        "On pourrait penser que le langage est simplement un *outil au service du sens*. Mais un outil permet de réaliser une action et peut être *remplacé* : un stylo par un autre stylo, une méthode par une autre, une machine par une autre.",
        "Or si je cherche mes mots pour exprimer une pensée, j'utilise généralement *d'autres mots* pour retrouver celui qui me manque. Le langage n'est donc pas un outil extérieur que l'on pourrait remplacer : il participe directement à notre manière de *penser et d'exprimer notre pensée*."
      ],
      side: [
        { k: "ex", w: "Le retour de Merleau-Ponty", t: "Le langage constitue la « texture » de notre monde, qui est un monde parlé et parlant." }
      ],
      key: "Le langage crée du lien social, et il n'est pas un outil remplaçable : on cherche ses mots avec des mots.",
      ns: ["lien-social", "pas-outil"] },

    /* ---------- II. B ---------- */
    { id: "magiques", part: 2, sec: "B. Les « fonctions magiques » du langage", title: "Agir sur autrui par la parole",
      lead: "Expression de Freud : les « *fonctions magiques* » du langage. Le langage ne sert pas seulement à communiquer ou à exprimer une pensée : il permet d'*agir sur autrui*.",
      body: [
        "Avec le langage, nous pouvons agir sur l'état psychologique d'une personne. Une parole peut provoquer de la joie, de la tristesse, de la colère, de la peur, du dégoût. Le langage peut *stimuler intellectuellement et affectivement* autrui et provoquer une réaction psychologique, voire comportementale. On ne fait pas que *dire* quelque chose : on peut *faire* quelque chose.",
        "On peut aussi agir sur certains animaux : apprendre à un chien à s'asseoir quand il entend un son. Mais il ne comprend pas forcément le *sens conceptuel* du mot : il associe un son et une action.",
        "Chez l'humain, le rapport entre *le mot et le sens* est plus complexe : l'enfant confronte peu à peu ce qu'il apprend à l'usage des autres et découvre que les mots ont un *sens partagé* au sein d'une communauté linguistique."
      ],
      side: [
        { k: "ex", w: "Ce qu'une parole peut provoquer", t: "Joie, tristesse, colère, peur, dégoût…" }
      ],
      key: "Le langage ne sert pas uniquement à dire quelque chose : il peut aussi permettre de faire quelque chose.",
      ns: ["magiques"] },

    { id: "absence", part: 2, sec: "B. Les « fonctions magiques » du langage", title: "Le mot nous détache de la réalité de l'objet",
      lead: "Le langage a une capacité étonnante : *le mot symbolise l'objet sans nécessiter la présence de l'objet*.",
      body: [
        "Quand je dis « chaise », je pense à une chaise même s'il n'y en a aucune devant moi. Je peux parler d'un objet matériel (une voiture, une fleur), d'une réalité abstraite (la justice, la liberté), d'un lieu (la tour Eiffel), d'une personne absente.",
        "Le langage permet même de *faire être ce qui n'est pas* :",
        ["→ *ce qui n'est plus* : le passé (l'Antiquité, les dinosaures, des époques qu'aucun humain n'a vécues) ;", "→ *ce qui n'est pas encore* : le futur (demain, l'évolution lointaine de la Terre) ;", "→ *ce qui n'existe pas* : l'imaginaire (une licorne, un dragon, un personnage fictif)."],
        "Le poète *Stéphane Mallarmé* met en évidence ce pouvoir d'évocation : dire « fleur » fait apparaître une fleur dans l'esprit, et chacun se représente la sienne (une rose, une tulipe, blanche ou rouge)."
      ],
      side: [
        { k: "q", t: "Il suffit de dire le mot « fleur » à quelqu'un pour qu'il pense à une fleur.", a: "L'idée de Mallarmé, résumée par le cours" }
      ],
      key: "Avec une simple articulation de sons, on fait surgir dans l'esprit d'autrui une représentation.",
      ns: ["absence"] },

    { id: "pouvoir", part: 2, sec: "B. Les « fonctions magiques » du langage", title: "Le langage comme pouvoir",
      lead: "Puisque les mots peuvent provoquer des réactions chez autrui, ils peuvent permettre de *faire agir les autres*.",
      body: [
        "Le langage peut devenir un *pouvoir*. On peut l'utiliser pour :",
        ["convaincre ;", "persuader ;", "ordonner ;", "influencer ;", "provoquer une émotion ;", "pousser quelqu'un à agir."],
        "Le langage ne se réduit donc pas à la simple transmission d'informations. *Par le langage, on peut non seulement dire quelque chose, mais aussi faire quelque chose.*",
        "C'est cette dimension du langage comme *pouvoir sur autrui* que la suite du cours approfondit avec Austin."
      ],
      side: [
        { k: "ex", w: "Transition", t: "Si les mots font agir, certaines paroles sont-elles elles-mêmes des actions ?" }
      ],
      key: "Par le langage, on peut non seulement dire quelque chose, mais aussi faire quelque chose.",
      ns: ["ordre-pouvoir"] },

    /* ---------- II. C ---------- */
    { id: "austin", part: 2, sec: "C. Quand dire, c'est faire", title: "Austin : le langage performatif",
      lead: "Le philosophe anglais *John Langshaw Austin* (1911-1960) analyse le pouvoir d'action du langage dans *Quand dire, c'est faire*.",
      body: [
        "Austin montre que certaines paroles ne servent pas seulement à *décrire une action* : leur prononciation constitue elle-même une action. C'est le *langage performatif* (de l'idée de faire, d'accomplir une action).",
        "Exemple classique : le *mariage*. Quand la personne habilitée à célébrer le mariage déclare que deux personnes sont mariées, elle ne décrit pas une situation : *elle produit juridiquement et socialement cette nouvelle situation par sa parole*.",
        "Il y a donc simultanément :",
        ["une parole ;", "une action accomplie par celui qui parle ;", "une conséquence produite sur autrui."],
        "Le langage peut être *efficace* : les mots ne se contentent pas de représenter le monde, ils peuvent contribuer à le transformer."
      ],
      side: [
        { k: "def", w: "Performatif", t: "Se dit d'une parole dont la prononciation accomplit l'action qu'elle énonce." }
      ],
      key: "Dans certaines situations, prononcer certains mots suffit à accomplir une action.",
      ns: ["austin"] },

    { id: "ordres", part: 2, sec: "C. Quand dire, c'est faire", title: "Les ordres : faire faire à autrui",
      lead: "Le pouvoir du langage apparaît aussi dans les situations ordinaires.",
      body: [
        "Un ordre comme « *Range ta chambre.* » ne sert pas seulement à transmettre une information : il cherche à faire accomplir une action à quelqu'un. Le langage a un caractère *directif* : il peut orienter le comportement d'autrui.",
        "Ce pouvoir peut prendre des formes très simples, mais aussi beaucoup plus graves, notamment dans le cadre *militaire* : un ordre donné à un soldat peut le conduire à une action extrêmement dangereuse.",
        "Austin permet de comprendre que le langage ordinaire peut être une *source de pouvoir*. La parole est donc *signifiante* (elle transmet un sens), mais aussi *directive* (elle oriente l'action)."
      ],
      side: [
        { k: "ex", w: "La question qui suit", t: "Si le langage permet de transmettre une pensée et de faire agir autrui, quel est exactement le rapport entre la pensée et le langage ?" }
      ],
      key: "Le langage peut produire des effets sur le monde et sur autrui.",
      ns: ["ordre-pouvoir"] },

    /* ---------- III. A ---------- */
    { id: "anteriorite", part: 3, sec: "A. L'antériorité de la pensée sur le langage ?", title: "La pensée existe-t-elle avant le langage ?",
      lead: "On pourrait d'abord supposer que *la pensée existe avant le langage*. C'est une hypothèse à examiner, pour en montrer les limites.",
      body: [
        "*La multiplicité des langues et des codes.* Il existe beaucoup de langues (français, anglais, allemand, chinois, italien…), et une même pensée peut s'exprimer dans plusieurs d'entre elles. Il existe aussi des *codes artificiels* : mathématiques, géométrie, physique, chimie, musique. Les langues et les codes ne seraient que des *moyens de traduire ou de matérialiser* une pensée qui existerait sans eux : le langage serait un simple *instrument*.",
        "*L'expérience de la recherche des mots.* Quand je cherche mes mots, j'ai l'impression que *ma pensée est déjà présente dans mon esprit*, mais que la formulation me manque. Je cherche une autre expression, j'utilise une périphrase, je reformule, je rejette certains mots, j'essaie plusieurs formulations.",
        "On pourrait donc croire que *la pensée précède le langage*. Mais cette même expérience va montrer les limites de l'hypothèse."
      ],
      side: [
        { k: "ex", w: "Deux arguments pour l'hypothèse", t: "1. Une même pensée, plusieurs langues. 2. Quand je cherche mes mots, l'idée semble déjà là." }
      ],
      key: "Hypothèse : le langage ne serait qu'un instrument pour donner une forme à une pensée qui existe sans lui.",
      ns: ["anteriorite"] },

    { id: "limites", part: 3, sec: "A. L'antériorité de la pensée sur le langage ?", title: "Pourquoi cette hypothèse ne tient pas",
      lead: "Si la pensée était vraiment indépendante du langage, pourquoi, quand je cherche mes mots, est-ce que je cherche *d'autres mots* ?",
      body: [
        "Si le langage n'était qu'un outil extérieur à la pensée, je pourrais simplement l'abandonner quand il ne fonctionne pas, et utiliser un autre moyen.",
        "Or ce n'est pas ce que nous faisons. Pour préciser notre pensée, nous utilisons encore et toujours *le langage lui-même*.",
        "Si je cherche mes mots avec d'autres mots, c'est que le langage n'est pas un simple outil extérieur : il participe à la *structure même de la pensée*."
      ],
      side: [
        { k: "ex", w: "L'argument en une phrase", t: "On ne sort pas du langage pour retrouver sa pensée : on la cherche avec des mots." }
      ],
      key: "La même expérience (chercher ses mots) prouve d'abord l'hypothèse, puis la réfute.",
      ns: ["anteriorite"] },

    /* ---------- III. B ---------- */
    { id: "inseparable", part: 3, sec: "B. La pensée est inséparable du langage", title: "Penser avec des mots",
      lead: "Quand nous cherchons nos mots, nous essayons de préciser notre pensée *à l'aide d'autres mots* : la pensée humaine est inséparable du langage.",
      body: [
        "Si quelqu'un ne nous comprend pas, nous disons « *Tu vois ce que je veux dire…* » puis nous tentons une nouvelle formulation. Nous ne sortons pas du langage pour retrouver une pensée pure : le langage participe à la *construction et à la clarification de la pensée*.",
        "*Peut-on penser uniquement en images ?* Nous avons des images mentales. Mais pour les transmettre précisément, il faut un moyen. Le dessin est plus long et plus limité : il serait bien plus difficile de représenter en images une phrase complexe décrivant une action, une intention, une relation temporelle ou une idée abstraite.",
        "Le langage, lui, produit un très grand nombre de significations avec *un nombre limité de signes* : l'alphabet français ne compte que *26 lettres*. Et les signes n'ont pas de rapport naturel avec ce qu'ils désignent : la lettre « A » ne ressemble pas à ce qu'elle aide à désigner."
      ],
      side: [
        { k: "def", w: "Le langage", t: "Un système de signes organisés et partagés qui permet de transmettre des pensées complexes." }
      ],
      key: "La pensée humaine est inséparable du langage.",
      ns: ["inseparable"] },

    { id: "platon", part: 3, sec: "B. La pensée est inséparable du langage", title: "Platon : la pensée comme dialogue intérieur",
      lead: "Le langage n'est pas présent seulement quand je parle à autrui : il l'est aussi quand je me parle intérieurement.",
      body: [
        "Le philosophe grec *Platon* définit la pensée comme un discours intérieur : penser consiste notamment à *dialoguer avec soi-même*.",
        "La pensée implique une forme de *confrontation intérieure* : je peux examiner une idée, la remettre en question, la corriger, chercher à la préciser. La pensée entretient une sorte de *friction avec elle-même*.",
        "Le langage est donc présent même lorsque je *me parle intérieurement*."
      ],
      side: [
        { k: "q", t: "La pensée est un discours que l'âme se tient à elle-même.", a: "Platon" }
      ],
      key: "Penser, c'est dialoguer avec soi-même : la pensée a déjà la forme du langage.",
      ns: ["dialogue-ame"] },

    { id: "leibniz", part: 3, sec: "B. La pensée est inséparable du langage", title: "Leibniz et la tour de Babel",
      lead: "Le philosophe allemand *Gottfried Wilhelm Leibniz* (1646-1716) a cherché à élaborer un « *alphabet des pensées humaines* ».",
      body: [
        "Son objectif : un langage universel et parfaitement *univoque*, c'est-à-dire ne permettant pas plusieurs interprétations contradictoires. Leibniz pensait qu'une grande partie des désaccords entre les hommes venait de leur incapacité à se comprendre parfaitement. Il n'a pas réussi, mais ses travaux sur les systèmes symboliques ont contribué à l'histoire de la logique et du *langage binaire*, utilisé bien plus tard en informatique.",
        "*La tour de Babel* (Genèse) : les hommes parlent une même langue et construisent une tour pour atteindre les cieux. Dieu *confond leur langage* : ils ne se comprennent plus et sont dispersés. La *diversité des langues* y est une source de séparation. Leibniz cherche, d'une certaine manière, à aller contre cette séparation.",
        "Mais même quand ils parlent *la même langue*, les individus peuvent mal se comprendre, se disputer, interpréter différemment les mêmes mots."
      ],
      side: [
        { k: "def", w: "Univoque", t: "Qui ne permet pas plusieurs interprétations contradictoires." }
      ],
      key: "La diversité des langues n'est pas la seule cause des difficultés de communication.",
      ns: ["leibniz"] },

    /* ---------- III. C ---------- */
    { id: "trahison", part: 3, sec: "C. Les périls du langage", title: "Le langage peut trahir la pensée",
      lead: "Que la pensée soit inséparable du langage ne signifie pas que le langage exprime toujours parfaitement ce que nous pensons : il peut y avoir une *trahison du langage*.",
      body: [
        "Dans la vie quotidienne comme dans les travaux scolaires, il nous arrive de savoir plus ou moins ce que nous voulons dire sans trouver la formulation adéquate. Nous cherchons nos mots, reformulons, hésitons, utilisons une périphrase, constatons que notre formulation est imprécise, sommes mal compris.",
        "Cela ne signifie pas que la pensée et le langage sont séparés : au contraire, cela montre *à quel point ils sont liés*. Nous avons besoin du langage pour donner une forme claire et communicable à notre pensée.",
        "*Hegel* (1770-1831) le dit dans *La Phénoménologie de l'esprit* : l'*ineffable* (ce qui ne peut pas être exprimé par des mots, l'indicible) est une pensée obscure, encore en devenir. Une joie intense, une grande tristesse peuvent nous laisser sans mots ; tant qu'elles n'ont pas trouvé une forme langagière claire, elles restent à l'état de « *fermentation* »."
      ],
      side: [
        { k: "q", t: "L'ineffable est la pensée obscure, la pensée à l'état de fermentation.", a: "Hegel, La Phénoménologie de l'esprit" },
        { k: "def", w: "Ineffable", t: "Ce qui ne peut pas être exprimé par des mots, ce qui demeure indicible." }
      ],
      key: "La pensée devient vraiment claire lorsqu'elle parvient à trouver sa formulation dans le langage.",
      ns: ["hegel-ineffable"] },

    { id: "ecriture", part: 3, sec: "C. Les périls du langage", title: "Hegel et l'écriture ; le langage, condition de la pensée",
      lead: "Pour donner une forme claire et objective à une pensée, il faut passer par le langage.",
      body: [
        "Dans *La Phénoménologie de l'esprit* (§549), Hegel réfléchit à l'évolution des systèmes d'écriture : schématiquement, *des représentations figuratives vers des signes plus abstraits*, jusqu'à l'alphabet. Une image représente directement une chose ; un signe alphabétique fonctionne de façon bien plus abstraite. L'écriture *détache le signe de l'image* et permet de fixer et d'organiser la pensée.",
        "Le langage rend ainsi la pensée accessible *à soi-même* et *aux autres*.",
        "*Le langage comme condition de la pensée* : pour exprimer une pensée complexe et précise, il faut un vocabulaire suffisamment riche. *Plus notre maîtrise du langage est riche, plus nous pouvons distinguer, préciser et organiser nos pensées.* D'où l'importance de *forger son vocabulaire*. Mais le langage peut aussi être une *limite* : simplifier le réel, banaliser nos expériences, nous enfermer dans des catégories."
      ],
      side: [
        { k: "ex", w: "Du dessin à l'alphabet", t: "L'image ressemble à la chose ; la lettre ne lui ressemble pas : le signe devient abstrait." }
      ],
      key: "Le langage est indispensable à la pensée, mais il peut aussi constituer une limite pour elle.",
      ns: ["hegel-ineffable"] },

    { id: "etiquettes", part: 3, sec: "C. Les périls du langage", title: "Bergson : les mots comme « étiquettes »",
      lead: "Pour *Henri Bergson*, le langage est indispensable à la vie sociale, mais il ne permet pas toujours d'exprimer fidèlement ce que nous ressentons ou pensons intérieurement.",
      body: [
        "*a. Les mots désignent les choses communes* : une table, une chaise, une maison, un arbre, une personne. Le langage nous permet de communiquer efficacement sur le monde. Mais cette efficacité a une contrepartie : *les mots simplifient la réalité*.",
        "*b. Les mots comme « étiquettes »* : nous ne percevons pas les choses dans leur singularité, nous les identifions par les mots que nous connaissons déjà. « Arbre » est une catégorie générale ; pourtant chaque arbre est différent. Le mot permet de *classer la réalité*, mais il peut nous empêcher d'en percevoir la richesse.",
        "*c. La vie intérieure* : les mots sont nombreux, mais en nombre limité, et hérités d'une langue qui existe avant nous. Deux personnes peuvent dire « tristesse » en vivant des expériences très différentes. Les mots risquent de *banaliser ce que nous vivons intérieurement*."
      ],
      side: [
        { k: "q", t: "Nous ne voyons pas les choses mêmes, nous nous bornons le plus souvent à lire les étiquettes collées sur elles.", a: "Bergson, Le Rire" }
      ],
      key: "Les mots sont des étiquettes : utiles pour désigner, ils simplifient la réalité et banalisent la vie intérieure.",
      ns: ["etiquettes"] },

    { id: "social", part: 3, sec: "C. Les périls du langage", title: "Le langage, réalité sociale ; rendre sa pensée personnelle",
      lead: "Une langue n'est pas créée par un individu isolé : elle se construit dans l'histoire d'une communauté, et elle s'impose à nous.",
      body: [
        "Le français d'aujourd'hui n'est pas celui de l'époque de Molière, lui-même différent du français de plusieurs siècles auparavant : vocabulaire, grammaire, prononciation, usages évoluent. À notre naissance, une langue existe déjà ; nous apprenons son vocabulaire, sa grammaire, ses règles, ses significations. Nous ne décidons pas seuls du sens des mots : *la langue s'impose à nous*.",
        "Bergson pose la question : *ma pensée est-elle réellement aussi personnelle que je le crois ?* Si je pense avec des mots créés avant moi, ma pensée est influencée par ma langue, qui peut la *banaliser ou la normaliser*.",
        "Deux moyens pour la rendre plus personnelle : *a. enrichir son vocabulaire et ses connaissances* (et savoir utiliser les mots correctement) ; *b. utiliser le langage métaphorique* : exprimer une idée par une image, sortir des formulations toutes faites. Bergson lui-même use beaucoup d'images."
      ],
      side: [
        { k: "def", w: "Métaphore", t: "Exprimer une idée ou une réalité en utilisant une image." }
      ],
      key: "Pour penser de façon plus personnelle : enrichir son vocabulaire et utiliser la métaphore.",
      ns: ["social"] },

    { id: "nietzsche", part: 3, sec: "C. Les périls du langage", title: "Nietzsche : les mots comme « concepts »",
      lead: "*Friedrich Nietzsche* développe une réflexion proche de celle de Bergson : chaque mot renvoie à un *concept*.",
      body: [
        "« Arbre » renvoie au concept d'arbre, « chaise » au concept de chaise, « vérité » au concept de vérité. Le mot regroupe sous une même catégorie une multitude de réalités particulières.",
        "*a. Le concept simplifie la réalité* : deux arbres ne sont jamais identiques, et nous les désignons pourtant par le même mot.",
        "*b. Le risque d'aliénation* : être aliéné, c'est devenir *étranger à soi-même*. À penser seulement avec des mots et des concepts déjà établis, on risque de ne plus exprimer une pensée vraiment personnelle : on pense selon des catégories que l'on n'a pas créées.",
        "*Comment dépasser ces limites ?* Comme Bergson, enrichir ses connaissances et son vocabulaire ; mais surtout *écrire et penser à la manière des poètes* : utiliser des images, créer de nouvelles associations, sortir des formulations habituelles. L'écriture de Nietzsche est riche en images, métaphores et symboles."
      ],
      side: [
        { k: "def", w: "Aliénation", t: "Le fait de devenir étranger à soi-même." }
      ],
      key: "Le langage peut être un moyen d'expression de la pensée, mais aussi une limite qui s'impose à elle.",
      ns: ["nietzsche"] },

    /* ---------- ANNEXES ---------- */
    { id: "orwell", part: 4, sec: "Annexe : le langage comme instrument de domination", title: "Orwell et la novlangue",
      lead: "Si le langage et la pensée sont étroitement liés, celui qui parvient à *contrôler le langage* peut exercer une influence sur la pensée.",
      body: [
        "*Contrôler les mots → contrôler les catégories de pensée → influencer la manière dont les individus comprennent le monde.* Un système autoritaire peut imposer certaines manières de nommer les choses et faire disparaître certains mots : le langage agit alors jusque dans la *pensée privée*.",
        "Dans le roman dystopique *1984*, *George Orwell* imagine la *novlangue*, qui réduit progressivement les possibilités de pensée critique. *Réduire les possibilités du langage, c'est réduire les possibilités de la pensée* : sans les mots pour formuler une idée, il devient difficile de la penser et de la communiquer. La « *crimepensée* » montre que le régime veut contrôler même les pensées.",
        "Contrôler le langage, c'est aussi contrôler le *récit du passé*, donc la *mémoire collective*. Double domination : *contrôle du langage → contrôle de la pensée → contrôle de l'histoire*."
      ],
      side: [
        { k: "def", w: "Novlangue", t: "Dans 1984, langue au vocabulaire volontairement réduit et transformé par le pouvoir." }
      ],
      key: "Réduire les possibilités du langage, c'est réduire les possibilités de la pensée.",
      ns: ["orwell"] },

    { id: "manipulation", part: 4, sec: "Annexe : le langage comme instrument de domination", title: "Le langage et la manipulation politique",
      lead: "Le pouvoir du langage ne concerne pas uniquement les régimes totalitaires.",
      body: [
        "Dans une démocratie aussi, les responsables politiques, les médias et les institutions peuvent utiliser les mots pour *présenter les événements d'une certaine manière*.",
        "Il faut donc distinguer :",
        ["l'information ;", "l'interprétation ;", "la persuasion ;", "la propagande ;", "la manipulation."],
        "Le choix des mots peut modifier la manière dont un événement est perçu : nommer une même situation de deux manières différentes provoque des réactions différentes dans le public."
      ],
      side: [
        { k: "ex", w: "Retenir", t: "Celui qui contrôle les mots, ou parvient à imposer certaines formulations, influence la manière dont on comprend une situation." }
      ],
      key: "Le langage possède une dimension politique.",
      ns: ["orwell"] },

    { id: "signe", part: 4, sec: "Annexe : la science du langage", title: "Une langue est un système de signes",
      lead: "Peut-on étudier scientifiquement le langage ? Il est psychologique, social, historique, culturel, politique.",
      body: [
        "On peut l'étudier en observant comment on apprend une langue, comment on comprend les mots, comment une langue évolue, comment le langage influence les comportements, comment les groupes le transforment. Disciplines : *linguistique*, psychologie, sociologie, sciences cognitives, philosophie. La *linguistique* étudie les sons, la formation des mots, la construction des phrases, le raisonnement dans le langage, l'évolution des langues. Son objet est *hétérogène* : même en français, il y a mille manières de prononcer et de construire les phrases.",
        "Le *signe linguistique* met en relation le *signifiant* (la forme : les sons prononcés, les lettres écrites) et le *signifié* (le sens associé). Le son « arbre » est le signifiant ; le concept d'arbre, le signifié.",
        "Mais la signification dépend aussi de l'intonation, du rythme, des pauses, des gestes, de la situation, du contexte, de la relation entre les interlocuteurs."
      ],
      side: [
        { k: "def", w: "Signifiant / signifié", t: "La forme du signe (sons, lettres) / le sens associé à ce signe." },
        { k: "plus", w: "Complément", t: "On doit ces deux notions au linguiste Ferdinand de Saussure." }
      ],
      key: "Une langue ne se réduit jamais au simple signifié : la manière de dire participe à la signification.",
      ns: ["signe"] },

    { id: "convention", part: 4, sec: "Annexe : la science du langage", title: "Le mot et la chose : nature ou convention ?",
      lead: "Question fondamentale de la philosophie du langage : comment un mot peut-il renvoyer à une chose ?",
      body: [
        "Le rapport entre le mot et la chose est-il *naturel* (un lien intrinsèque) ou *conventionnel* (une association établie par les hommes) ? Certains mots imitent des sons ; mais pour une grande partie du vocabulaire, rien dans la chose n'impose le mot. Le rapport signifiant / signifié est en grande partie une *convention linguistique*.",
        "*Platon*, dans le *Cratyle*, demande si chacun peut nommer les choses comme il veut. Si l'un appelle « chaise » ce que les autres appellent « cheval », les interlocuteurs ne partagent plus les mêmes conventions. Il faut une *communauté des signes* : le langage est *conventionnel et collectif*.",
        "Peut-on modifier artificiellement une langue ? On peut réformer des règles, l'orthographe, introduire des termes. Mais une *langue vivante* évolue spontanément avec ses locuteurs : elle est *mutable* (des mots apparaissent, changent de sens, disparaissent). La *philologie* étudie l'histoire des langues à partir de leurs formes anciennes."
      ],
      side: [
        { k: "def", w: "Philologie", t: "Étude de l'histoire et de l'évolution des langues, à partir de leurs formes anciennes et de leurs documents." }
      ],
      key: "Le langage est à la fois conventionnel et collectif : nous héritons d'une langue que nous partageons.",
      ns: ["cratyle"] },

    { id: "formels", part: 4, sec: "Annexe : la science du langage", title: "Langages artificiels et langues naturelles",
      lead: "L'être humain peut créer des systèmes symboliques entièrement artificiels. Les mathématiques en sont l'exemple le plus important.",
      body: [
        "Les nombres ne sont pas des objets physiques trouvés dans la nature ; pourtant, les mathématiques décrivent avec une grande précision des phénomènes naturels. *Galilée* (1564-1642) mathématise l'étude du mouvement et la chute des corps : dans le vide, les corps tombent avec la même accélération, quelle que soit leur masse ; dans l'air, les différences viennent de la résistance de l'air.",
        "*Leibniz*, dans les *Nouveaux Essais sur l'entendement humain*, envisage un « alphabet des pensées humaines » pour limiter les ambiguïtés. Peut-on créer une langue universelle sans malentendus ? Difficile : une langue naturelle n'est pas un système formel.",
        "Une langue naturelle exprime l'ironie, l'humour, les émotions, les sous-entendus, les nuances, les intentions, les contextes. La manière de dire compte autant que les mots. Elle est *plastique, souple et évolutive* ; un langage formel est volontairement plus rigoureux et plus limité, et c'est ce qui le rend extrêmement précis."
      ],
      side: [
        { k: "ex", w: "Galilée", t: "Les mathématiques ne sont pas seulement un langage abstrait : elles formulent précisément des lois physiques." }
      ],
      key: "Un système symbolique créé par l'homme peut devenir un outil extrêmement rigoureux de connaissance.",
      ns: ["formel"] },

    { id: "wittgenstein", part: 4, sec: "Annexe : la science du langage", title: "Wittgenstein et Aristote : décrire le langage",
      lead: "La philosophie du langage ne doit pas forcément chercher à fabriquer une langue parfaite : elle doit décrire et comprendre le langage tel qu'il existe.",
      body: [
        "*Ludwig Wittgenstein* (1889-1951), dans les *Investigations philosophiques*, parle de « *jeux de langage* » : les mots prennent leur sens dans les *usages concrets* que nous en faisons et dans les situations où nous les employons. La philosophie doit laisser les choses « *en leur état* » : comprendre comment fonctionnent le langage, les usages des mots, les raisonnements, le sens selon les contextes.",
        "*Aristote* (384-322 av. J.-C.) développe une réflexion systématique sur le raisonnement logique, dans les ouvrages réunis sous le nom d'*Organon* (« outil » en grec). Il cherche comment les termes et les propositions s'articulent en raisonnements cohérents, et étudie le *syllogisme*, qui tire une conclusion de plusieurs propositions.",
        "La logique ne transforme pas artificiellement une langue : elle *décrit les structures du raisonnement*. Aristote contribue ainsi à la naissance de la logique comme discipline."
      ],
      side: [
        { k: "def", w: "Syllogisme", t: "Raisonnement qui tire une conclusion de plusieurs propositions." },
        { k: "ex", w: "Exemple classique", t: "Tous les hommes sont mortels ; Socrate est un homme ; donc Socrate est mortel." }
      ],
      key: "Décrire le langage tel qu'il fonctionne, plutôt que fabriquer une langue parfaite.",
      ns: ["wittgenstein"] },

    { id: "foucault", part: 4, sec: "Annexe : les mots et les choses", title: "Maîtriser les mots, est-ce maîtriser les choses ?",
      lead: "Le langage permet de désigner et de penser le réel, mais il ne faut pas confondre *le mot avec la chose elle-même*.",
      body: [
        "La maîtrise d'un vocabulaire permet de mieux parler d'une réalité, mais pas forcément de maîtriser cette réalité. Quel est le rapport entre *les mots, les concepts et les choses* ?",
        "*Michel Foucault* (1926-1984), dans *Les Mots et les Choses* (1966), étudie les relations entre le langage, les connaissances et les manières dont les sociétés *organisent et classent le réel*. Le langage n'est pas un moyen neutre : nos catégories participent à notre manière de comprendre le monde.",
        "*Définition : parler, c'est toujours dire quelque chose à quelqu'un sur quelque chose.* Trois éléments : quelqu'un qui parle ; quelque chose qui est dit ; quelqu'un à qui l'on parle (on peut se parler à soi-même). Parler n'est pas produire des sons : c'est une activité *signifiante et relationnelle*. Reste à comprendre comment un mot acquiert un sens et comment un signe désigne une réalité."
      ],
      side: [
        { k: "q", t: "Parler, c'est toujours dire quelque chose à quelqu'un sur quelque chose.", a: "Définition du cours" }
      ],
      key: "Parler est une activité signifiante et relationnelle, pas une simple production de sons.",
      ns: ["mots-choses"] },

    { id: "adam", part: 4, sec: "Annexe : les mots et les choses", title: "Du langage adamique au pouvoir de manifestation",
      lead: "Les mots correspondent-ils naturellement aux choses ? Le cours répond : le langage est un pouvoir de symbolisation et de manifestation.",
      body: [
        "*1. Le langage adamique* : dans la Genèse, Adam donne un nom aux animaux, comme si le nom correspondait directement à la chose et en exprimait la nature. Nommer permettrait de saisir la chose, voire d'avoir pouvoir sur elle, comme dans certaines œuvres de *fantasy* où connaître le vrai nom d'une chose permet de la maîtriser.",
        "*2. Platon, Cratyle* : Hermogène soutient que chacun est maître de ses mots. Mais si l'un appelle un cheval « mouchoir » et l'autre « tabouret », on ne se comprend plus : Socrate critique cette idée. Cela ne veut pas dire que les mots manifestent la nature des choses : le mot « pommier » n'est pas le pommier, il le *figure* dans ma pensée. *Le langage est une forme de symbolisation.*",
        "*3. Le pouvoir de manifestation* : le langage fait apparaître dans notre esprit des choses absentes (lointaines, disparues, passées, futures, imaginaires). *Aristote*, dans la *Rhétorique* : le discours (*logos*) doit faire apparaître quelque chose dans l'esprit de celui qui écoute."
      ],
      side: [
        { k: "q", t: "Le logos, s'il ne manifeste pas, n'accomplira pas son œuvre propre.", a: "Aristote, Rhétorique" },
        { k: "plus", w: "Conclusion du cours", t: "Le langage est un pouvoir de manifestation et de symbolisation." }
      ],
      key: "Le mot n'est pas la chose : il la symbolise et la manifeste à l'esprit.",
      ns: ["mots-choses"] }
  ];

  /* ---------------- FICHES ---------------- */
  const notions = {
    "definition": { part: 0, title: "Le langage, système de signes",
      essentiel: "Le langage (du latin lingua, la langue) est un système de signes permettant notamment de communiquer. Mais il ne sert pas qu'à cela : il permet aussi de penser, de nommer le monde et d'agir sur soi et sur autrui.",
      retenir: ["La langue : à la fois l'organe et le système de communication.", "Idéal contemporain d'efficacité de la transmission (de la lettre aux réseaux sociaux).", "L'homme semble être, par nature, un être parlant.", "Il est difficile de parler sans rien dire."],
      citation: "", piege: "Ce qui intéresse le cours, ce n'est pas que les machines communiquent, mais que les humains communiquent grâce à elles.",
      video: "le langage philosophie cours terminale" },
    "monde-parle": { part: 0, title: "Un monde parlé et parlant",
      essentiel: "Pour Merleau-Ponty, le langage est la « texture même de notre monde » : le monde est parlé (nous le nommons) et parlant (pour le comprendre, il faut pouvoir en dire quelque chose). Le langage construit notre rapport au monde, agit, mais peut trahir notre pensée.",
      retenir: ["Parlé : une chaise, un arbre, une maison.", "Parlant : comprendre, c'est pouvoir dire et penser.", "Le langage n'est pas une simple médiation : il est agissant.", "Il peut trahir la pensée : on dit parfois plus qu'on ne voulait."],
      citation: "Un monde parlé et parlant.", piege: "Le monde n'est pas « parlant » au sens où il parlerait tout seul : c'est nous qui le pensons à travers le langage.",
      video: "Merleau-Ponty langage monde" },
    "faber": { part: 1, title: "Bergson : Homo faber",
      essentiel: "Dans L'Évolution créatrice, Bergson distingue trois directions de l'élan vital : torpeur (végétal), instinct (animal), intelligence (homme). L'homme invente et perfectionne des techniques : il est avant tout Homo faber, « homme fabricant ».",
      retenir: ["Élan vital : principe qui permet de penser le développement de la vie.", "Paléoanthropologie : science de l'origine et de l'évolution de l'humain.", "Âges de la pierre, du bronze, du fer ; révolution industrielle.", "Les progrès techniques accompagnent l'évolution de l'humanité."],
      citation: "", piege: "Torpeur = végétal, instinct = animal, intelligence = homme : ne les mélange pas.",
      video: "Bergson Homo faber évolution créatrice" },
    "loquens": { part: 1, title: "Hagège : Homo loquens",
      essentiel: "Pour le linguiste Claude Hagège, l'homme est aussi, et peut-être avant tout, Homo loquens, « homme parlant ». Pas d'évolution technique sans transmission des savoir-faire, et cette transmission passe par le langage (oral, puis écrit).",
      retenir: ["Une technique n'est conservée et améliorée que si on l'enseigne.", "Exemple : le fordisme suppose d'expliquer les méthodes.", "Langages artificiels : mathématiques, physique, chimie, logique, musique.", "Évolution technique et évolution du langage sont liées."],
      citation: "", piege: "Homo loquens ne supprime pas Homo faber : l'homme fabrique et transmet.",
      video: "Claude Hagège homo loquens" },
    "comm-animale": { part: 1, title: "Les animaux communiquent",
      essentiel: "Le langage humain résulte d'une évolution progressive (cerveau et sons articulés). Mais de nombreux animaux communiquent : sons, signaux visuels ou corporels, ultrasons, infrasons, pour la survie et parfois au-delà (cétacés).",
      retenir: ["Un processus progressif, pas une apparition soudaine.", "Ultrasons : trop aigus ; infrasons : très graves.", "Nourriture, point d'eau, danger, déplacement du groupe.", "Dauphins, orques : comportements sociaux et ludiques."],
      citation: "", piege: "Reconnaître une communication animale ne prouve pas que les animaux parlent.",
      video: "communication animale langage humain philosophie" },
    "abeilles": { part: 1, title: "Karl von Frisch et la danse des abeilles",
      essentiel: "Karl von Frisch (Vie et mœurs des abeilles) a montré que les abeilles, par une « danse », indiquent la direction, la distance et l'emplacement d'une source de nourriture : un véritable système de transmission d'informations.",
      retenir: ["Biologiste et zoologiste du XXᵉ siècle.", "Mouvements, orientation, manière de danser.", "La communication animale n'est pas le fruit du hasard.", "Question : suffit-il de communiquer pour parler ?"],
      citation: "", piege: "La danse des abeilles est un système de communication, pas encore un langage humain.",
      video: "danse des abeilles von Frisch langage" },
    "productivite": { part: 1, title: "Communiquer n'est pas parler",
      essentiel: "La communication animale est en grande partie biologiquement déterminée (innée). Le langage humain s'apprend, se transmet, se transforme, et il est productif : il produit et comprend une infinité d'énoncés nouveaux sur presque n'importe quel sujet.",
      retenir: ["Biologiquement déterminé : inscrit dans l'espèce, largement inné.", "Productivité : comprendre des phrases jamais entendues, formuler des idées nouvelles.", "Parler du passé, du futur, de l'imaginaire, des émotions, des sciences.", "Communiquer n'est pas nécessairement parler."],
      citation: "", piege: "La différence tient à l'apprentissage et à la productivité, pas seulement au nombre de signaux.",
      video: "langage humain communication animale différence" },
    "instrument-universel": { part: 1, title: "Descartes : un instrument universel",
      essentiel: "Dans sa lettre au marquis de Newcastle, Descartes présente le langage comme « cet instrument universel qui peut servir en toutes sortes de rencontres » : son élasticité lui permet de servir dans toutes les situations, pour une infinité de sujets.",
      retenir: ["Élasticité du langage humain.", "Pas limité à quelques messages déterminés d'avance.", "Produire et comprendre constamment de nouveaux énoncés.", "Les abeilles transmettent avec précision, mais pas avec cette ouverture."],
      citation: "Cet instrument universel qui peut servir en toutes sortes de rencontres.", piege: "« Universel » : utilisable en toutes situations, pas « compris par tous ».",
      video: "Descartes lettre au marquis de Newcastle langage animaux" },
    "communication": { part: 2, title: "La communication, fonction fondamentale",
      essentiel: "Le langage est d'abord un instrument de communication. Toute société repose sur l'échange, et le premier échange est la communication : transmettre informations, connaissances et techniques, satisfaire nos besoins, organiser la vie collective, créer du lien social.",
      retenir: ["Acheter des chaussures en ligne : taille, prix, description, livraison.", "En magasin : échanger avec le vendeur.", "Cinq fonctions : informer, transmettre, satisfaire, organiser, relier.", "Fondamentale ne veut pas dire unique."],
      citation: "", piege: "La communication est une fonction du langage parmi d'autres.",
      video: "fonctions du langage communication philosophie" },
    "lien-social": { part: 2, title: "Le lien social",
      essentiel: "La communication ne sert pas toujours à transmettre une information importante : « Salut, comment tu vas ? » sert à établir ou maintenir un lien social. Le langage crée une relation avec autrui.",
      retenir: ["On ne cherche pas à connaître en détail l'état de la personne.", "Établir ou maintenir un lien.", "Une relation, même sans information importante."],
      citation: "", piege: "Une parole sans information importante a quand même une fonction.",
      video: "langage lien social philosophie" },
    "pas-outil": { part: 2, title: "Le langage n'est pas un simple outil",
      essentiel: "Un outil permet de réaliser une action et peut être remplacé par un autre. Or quand je cherche mes mots, j'utilise d'autres mots : le langage n'est pas un outil extérieur et remplaçable, il participe à notre manière de penser (Merleau-Ponty : la texture d'un monde parlé et parlant).",
      retenir: ["Stylo, méthode, machine : des outils remplaçables.", "Chercher un mot, c'est passer par d'autres mots.", "Le langage participe à la pensée et à son expression."],
      citation: "", piege: "Dire que le langage n'est pas un simple outil ne veut pas dire qu'il ne sert à rien.",
      video: "le langage est-il un outil philosophie" },
    "magiques": { part: 2, title: "Les « fonctions magiques » du langage",
      essentiel: "Expression de Freud : le langage permet d'agir sur autrui, sur son état psychologique (joie, tristesse, colère, peur, dégoût), et de provoquer une réaction, voire un comportement. Le chien associe un son à une action ; l'enfant découvre le sens partagé des mots.",
      retenir: ["Stimuler intellectuellement et affectivement autrui.", "Dire quelque chose, mais aussi faire quelque chose.", "Le chien ne comprend pas le sens conceptuel du mot.", "Une communauté linguistique partage le sens des mots."],
      citation: "", piege: "L'expression « fonctions magiques » est de Freud.",
      video: "pouvoir des mots Freud fonctions magiques du langage" },
    "absence": { part: 2, title: "Rendre présent ce qui est absent",
      essentiel: "Le mot symbolise l'objet sans nécessiter sa présence. Le langage fait même être ce qui n'est pas : ce qui n'est plus (le passé), ce qui n'est pas encore (le futur), ce qui n'existe pas (l'imaginaire). Mallarmé : dire « fleur » fait penser à une fleur.",
      retenir: ["Objet matériel, réalité abstraite, lieu, personne absente.", "Antiquité, dinosaures ; demain ; licorne, dragon.", "Chacun se représente une fleur différente.", "Le mot détache la chose de sa présence matérielle."],
      citation: "Il suffit de dire le mot « fleur » à quelqu'un pour qu'il pense à une fleur.", piege: "Le langage fait exister mentalement, pas réellement.",
      video: "Mallarmé une fleur pouvoir des mots" },
    "austin": { part: 2, title: "Austin : quand dire, c'est faire",
      essentiel: "John Langshaw Austin (1911-1960), dans Quand dire, c'est faire, montre que certaines paroles ne décrivent pas une action : leur prononciation est une action. C'est le langage performatif (exemple : déclarer deux personnes mariées).",
      retenir: ["Performatif : de l'idée de faire, d'accomplir.", "Une parole, une action de celui qui parle, une conséquence sur autrui.", "Le mariage est produit juridiquement et socialement par la parole.", "Les mots peuvent transformer le monde."],
      citation: "", piege: "C'est la personne habilitée qui, par sa déclaration, produit le mariage.",
      video: "Austin quand dire c'est faire performatif" },
    "ordre-pouvoir": { part: 2, title: "Le langage comme pouvoir",
      essentiel: "Les mots peuvent convaincre, persuader, ordonner, influencer, émouvoir, pousser à agir. Un ordre (« Range ta chambre », un ordre militaire) est directif. La parole est signifiante (elle transmet un sens) et directive (elle oriente l'action).",
      retenir: ["Le langage ne se réduit pas à transmettre des informations.", "Caractère directif : orienter le comportement d'autrui.", "Le cadre militaire : un ordre peut conduire au danger.", "Le langage ordinaire est une source de pouvoir."],
      citation: "", piege: "Le pouvoir des mots existe aussi dans les situations les plus ordinaires.",
      video: "le pouvoir des mots philosophie" },
    "anteriorite": { part: 3, title: "La pensée précède-t-elle le langage ?",
      essentiel: "Hypothèse : la pensée existerait avant le langage, qui ne ferait que la traduire (multiplicité des langues et des codes ; expérience de la recherche des mots). Limite : quand je cherche mes mots, je cherche d'autres mots ; je ne sors jamais du langage, qui structure la pensée.",
      retenir: ["Une même pensée exprimée en plusieurs langues.", "Codes artificiels : mathématiques, géométrie, physique, chimie, musique.", "Chercher ses mots : périphrase, reformulation.", "Le langage participe à la structure même de la pensée."],
      citation: "", piege: "L'expérience de la recherche des mots sert d'abord l'hypothèse, puis la réfute.",
      video: "la pensée précède-t-elle le langage" },
    "inseparable": { part: 3, title: "Pensée et langage inséparables",
      essentiel: "La pensée humaine est inséparable du langage : il participe à sa construction et à sa clarification. Penser en images est plus long et limité ; avec peu de signes (26 lettres), qui ne ressemblent pas aux choses, le langage produit un très grand nombre de significations.",
      retenir: ["« Tu vois ce que je veux dire… » puis une nouvelle formulation.", "Images mentales : difficiles à transmettre précisément.", "La lettre « A » ne ressemble pas à ce qu'elle désigne.", "Un système de signes organisés et partagés."],
      citation: "", piege: "Inséparable ne veut pas dire que le langage exprime toujours parfaitement la pensée.",
      video: "pensée et langage inséparables philosophie" },
    "dialogue-ame": { part: 3, title: "Platon : la pensée, dialogue intérieur",
      essentiel: "Pour Platon, « la pensée est un discours que l'âme se tient à elle-même » : penser, c'est dialoguer avec soi, examiner une idée, la remettre en question, la corriger. Une friction de la pensée avec elle-même.",
      retenir: ["Penser, c'est dialoguer avec soi-même.", "Confrontation intérieure.", "Le langage est présent même quand je me parle intérieurement."],
      citation: "La pensée est un discours que l'âme se tient à elle-même.", piege: "Ce n'est pas un monologue : c'est un dialogue, avec objections et corrections.",
      video: "Platon la pensée dialogue de l'âme avec elle-même" },
    "leibniz": { part: 3, title: "Leibniz et la tour de Babel",
      essentiel: "Leibniz (1646-1716) cherche un « alphabet des pensées humaines » : un langage universel et univoque, pour supprimer les désaccords. Échec, mais il nourrit la logique et le binaire. Babel : la diversité des langues sépare les hommes. Pourtant, même dans une seule langue, on se comprend mal.",
      retenir: ["Univoque : sans interprétations contradictoires.", "Langage binaire, plus tard utilisé en informatique.", "Babel : Dieu confond le langage des hommes, qui se dispersent.", "La diversité des langues n'est pas la seule cause des malentendus."],
      citation: "", piege: "Leibniz n'a pas réussi à créer son alphabet universel.",
      video: "Leibniz langue universelle alphabet des pensées" },
    "hegel-ineffable": { part: 3, title: "Hegel : l'ineffable, pensée obscure",
      essentiel: "Le langage peut trahir la pensée, ce qui montre qu'ils sont liés. Pour Hegel (La Phénoménologie de l'esprit), l'ineffable est la pensée obscure, « à l'état de fermentation » : une pensée ne devient claire qu'en trouvant sa formulation. L'écriture va de l'image à l'alphabet. Plus le vocabulaire est riche, plus la pensée est précise.",
      retenir: ["Ineffable : ce qui ne peut être exprimé par des mots, l'indicible.", "Une joie intense ou une grande tristesse peuvent laisser sans mots.", "§549 : des représentations figuratives aux signes abstraits.", "Forger son vocabulaire pour distinguer, préciser, organiser ses pensées."],
      citation: "L'ineffable est la pensée obscure, la pensée à l'état de fermentation.", piege: "Pour Hegel, ce qu'on ne parvient pas à dire n'est pas plus profond : c'est encore obscur.",
      video: "Hegel l'ineffable pensée obscure" },
    "etiquettes": { part: 3, title: "Bergson : les mots comme étiquettes",
      essentiel: "Pour Bergson (Le Rire), les mots désignent bien les choses communes, mais ils simplifient la réalité : nous lisons les étiquettes collées sur les choses au lieu de les voir. Pour la vie intérieure, les mots, limités et hérités, banalisent ce que nous vivons.",
      retenir: ["Table, chaise, maison : les choses communes.", "« Arbre » : une catégorie générale ; chaque arbre est différent.", "Le mot classe la réalité mais en cache la richesse.", "Deux « tristesses » peuvent être très différentes."],
      citation: "Nous ne voyons pas les choses mêmes, nous nous bornons le plus souvent à lire les étiquettes collées sur elles.",
      piege: "Bergson reconnaît que le langage est indispensable à la vie sociale.", video: "Bergson le Rire étiquettes langage" },
    "social": { part: 3, title: "Une langue reçue, une pensée personnelle ?",
      essentiel: "La langue est une réalité sociale : construite par une communauté, elle évolue (le français de Molière) et s'impose à nous. Ma pensée est-elle aussi personnelle que je le crois ? Pour la rendre plus personnelle : enrichir son vocabulaire et ses connaissances, utiliser le langage métaphorique.",
      retenir: ["Nous ne décidons pas individuellement du sens des mots.", "La langue peut banaliser ou normaliser certaines pensées.", "Connaître beaucoup de mots ne suffit pas : il faut savoir les utiliser.", "Métaphore : exprimer une idée par une image (Bergson en use beaucoup)."],
      citation: "", piege: "Les deux solutions de Bergson : le vocabulaire et la métaphore.",
      video: "Bergson langage pensée personnelle métaphore" },
    "nietzsche": { part: 3, title: "Nietzsche : les mots comme concepts",
      essentiel: "Pour Nietzsche, chaque mot renvoie à un concept qui regroupe des réalités différentes : le langage simplifie la réalité. Risque d'aliénation : devenir étranger à soi-même en pensant avec des catégories qu'on n'a pas créées. Remède : écrire et penser à la manière des poètes.",
      retenir: ["Deux arbres ne sont jamais identiques, un seul mot les désigne.", "Aliéné : étranger à soi-même.", "Le langage : moyen d'expression et limite de la pensée.", "Images, associations nouvelles, formulations inhabituelles."],
      citation: "", piege: "Comme Bergson, Nietzsche conseille aussi d'enrichir son vocabulaire ; mais il insiste sur la poésie.",
      video: "Nietzsche langage concept métaphore" },
    "orwell": { part: 4, title: "Orwell : le langage, instrument de domination",
      essentiel: "Contrôler les mots, c'est contrôler les catégories de pensée. Dans 1984, la novlangue réduit le vocabulaire pour empêcher la pensée critique ; le régime traque la « crimepensée » et contrôle le récit du passé. En démocratie aussi, le choix des mots oriente la perception.",
      retenir: ["Réduire les possibilités du langage, c'est réduire celles de la pensée.", "Contrôle du langage → de la pensée → de l'histoire.", "Mémoire collective.", "Distinguer information, interprétation, persuasion, propagande, manipulation."],
      citation: "", piege: "Le pouvoir des mots ne concerne pas uniquement les régimes totalitaires.",
      video: "Orwell 1984 novlangue explication" },
    "signe": { part: 4, title: "Le signe linguistique",
      essentiel: "La linguistique étudie le langage et les langues, objet hétérogène. Une langue est un système de signes : le signe met en relation un signifiant (sons, lettres) et un signifié (le sens). Mais la signification dépend aussi de l'intonation, des gestes, du contexte.",
      retenir: ["Le langage est psychologique, social, historique, culturel, politique.", "Linguistique, psychologie, sociologie, sciences cognitives, philosophie.", "Signifiant : la forme ; signifié : le sens.", "Une langue ne se réduit jamais au simple signifié."],
      citation: "", piege: "Le signifiant est la forme (le son « arbre »), le signifié est le sens (le concept d'arbre).",
      video: "signifiant signifié signe linguistique" },
    "cratyle": { part: 4, title: "Nature ou convention ? Le Cratyle",
      essentiel: "Le rapport entre le mot et la chose est en grande partie une convention. Dans le Cratyle, Platon montre qu'on ne peut pas nommer les choses comme on veut : il faut une communauté des signes. La langue est conventionnelle et collective, et mutable (philologie).",
      retenir: ["Naturel : lien intrinsèque ; conventionnel : association établie par les hommes.", "Chaise / cheval, mouchoir / tabouret : la communication devient impossible.", "Langue vivante : évolution spontanée avec ses locuteurs.", "Philologie : histoire des langues à partir de leurs formes anciennes."],
      citation: "", piege: "Conventionnel ne veut pas dire que chacun choisit ses mots : la convention est collective.",
      video: "Platon Cratyle nature convention noms" },
    "formel": { part: 4, title: "Langages formels et langues naturelles",
      essentiel: "Les mathématiques, système artificiel, décrivent précisément la nature (Galilée et la chute des corps). Leibniz rêve d'un langage sans ambiguïté. Mais une langue naturelle est plastique : ironie, humour, émotions, nuances ; un langage formel est plus rigide, donc plus précis.",
      retenir: ["Galilée (1564-1642) : dans le vide, tous les corps tombent avec la même accélération.", "Dans l'air, la résistance de l'air explique les différences.", "Leibniz, Nouveaux Essais : l'alphabet des pensées humaines.", "La manière de dire compte autant que les mots."],
      citation: "", piege: "La rigidité du langage formel est justement ce qui le rend précis.",
      video: "Galilée mathématiques langage de la nature" },
    "wittgenstein": { part: 4, title: "Wittgenstein et Aristote",
      essentiel: "Wittgenstein (Investigations philosophiques) : les mots prennent sens dans des « jeux de langage », leurs usages concrets ; la philosophie laisse les choses « en leur état ». Aristote (Organon, « outil ») fonde la logique : décrire les structures du raisonnement, comme le syllogisme.",
      retenir: ["Décrire le langage tel qu'il existe, plutôt que fabriquer une langue parfaite.", "Le sens apparaît dans les contextes.", "Syllogisme : une conclusion tirée de plusieurs propositions.", "La logique ne transforme pas la langue."],
      citation: "", piege: "Wittgenstein (1889-1951) ; Aristote (384-322 av. J.-C.).",
      video: "Wittgenstein jeux de langage" },
    "mots-choses": { part: 4, title: "Les mots et les choses",
      essentiel: "Maîtriser les mots n'est pas maîtriser les choses. Foucault (Les Mots et les Choses, 1966) : nos catégories organisent le réel. Parler, c'est dire quelque chose à quelqu'un sur quelque chose. Contre le langage adamique, Platon fait du mot une symbolisation ; Aristote, un pouvoir de manifestation.",
      retenir: ["Le langage n'est pas un moyen neutre de désigner les choses.", "Parler : activité signifiante et relationnelle.", "Adam nomme les animaux ; en fantasy, connaître le vrai nom donne du pouvoir.", "Le mot « pommier » n'est pas le pommier."],
      citation: "Le logos, s'il ne manifeste pas, n'accomplira pas son œuvre propre.", piege: "Ne confonds jamais le mot et la chose elle-même.",
      video: "Foucault les mots et les choses" }
  };

  /* ---------------- EXERCICES ---------------- */
  const exercises = [];
  const cnt = {};
  const add = (type, list) => list.forEach(e => { cnt[type] = (cnt[type] || 0) + 1; exercises.push(Object.assign({ id: type + "-" + cnt[type], type }, e)); });

  add("qcm", [
    { notion: "definition", q: "D'où vient le mot « langage » ?",
      options: ["Du latin lingua, la langue", "Du grec logos, la raison", "Du latin legere, lire", "Du grec glossa, le dialecte"], answer: 0,
      explain: "En français, la langue désigne à la fois l'organe et le système de communication." },
    { notion: "definition", q: "Quelle question pose l'introduction du cours ?",
      options: ["Le langage a-t-il uniquement pour fonction de communiquer ?", "Les machines peuvent-elles parler ?", "Faut-il une langue universelle ?", "Le langage est-il naturel ?"], answer: 0,
      explain: "Le langage semble aussi permettre de penser, de nommer le monde et d'agir." },
    { notion: "monde-parle", q: "Que signifie, pour Merleau-Ponty, que le monde est « parlé » ?",
      options: ["Nous le nommons à travers le langage", "Les choses parlent d'elles-mêmes", "Le monde est fait de sons", "Seuls les humains ont un monde"], answer: 0,
      explain: "Il est aussi « parlant » : pour le comprendre, nous devons pouvoir en dire quelque chose." },
    { notion: "monde-parle", q: "Pourquoi le langage peut-il « trahir notre pensée » ?",
      options: ["Nous pouvons avoir du mal à dire exactement ce que nous voulons, ou dire plus que voulu", "Parce que les mots mentent toujours", "Parce que les langues étrangères déforment tout", "Parce que la pensée n'existe pas"], answer: 0,
      explain: "Le langage matérialise nos pensées : il peut aussi être source de difficultés." },
    { notion: "faber", q: "Chez Bergson, à quoi correspond l'instinct ?",
      options: ["Au règne animal", "Au règne végétal", "À l'être humain", "Aux machines"], answer: 0,
      explain: "Torpeur → végétal ; instinct → animal ; intelligence → homme." },
    { notion: "faber", q: "Que signifie Homo faber ?",
      options: ["Homme fabricant, capable de créer des outils et des techniques", "Homme parlant", "Homme savant", "Homme social"], answer: 0,
      explain: "Pour Bergson, l'homme est avant tout un être qui fabrique, invente et perfectionne des techniques." },
    { notion: "faber", q: "Dans quel ouvrage Bergson parle-t-il des trois directions de l'élan vital ?",
      options: ["L'Évolution créatrice", "Le Rire", "Quand dire, c'est faire", "Les Mots et les Choses"], answer: 0,
      explain: "Le Rire est le texte des « étiquettes » (partie III)." },
    { notion: "loquens", q: "Pourquoi Hagège insiste-t-il sur l'Homo loquens ?",
      options: ["Pour qu'une technique soit conservée et améliorée, il faut la transmettre par le langage", "Parce que l'homme ne fabrique pas d'outils", "Parce que les animaux ne communiquent pas", "Parce que le langage est inné"], answer: 0,
      explain: "La transmission des savoir-faire passe par le langage, oral puis écrit." },
    { notion: "loquens", q: "Que montre l'exemple du fordisme ?",
      options: ["Mettre en place un savoir-faire suppose d'expliquer les méthodes de production", "Le travail à la chaîne se passe de langage", "Les machines remplacent le langage", "L'industrie détruit la langue"], answer: 0,
      explain: "L'évolution technique et l'évolution du langage sont liées." },
    { notion: "loquens", q: "Lequel de ces exemples est un langage artificiel selon le cours ?",
      options: ["La musique", "Le français", "L'anglais", "Le chinois"], answer: 0,
      explain: "Mathématiques, physique, chimie, logique, musique : des langages artificiels." },
    { notion: "comm-animale", q: "Que sont les infrasons ?",
      options: ["Des sons très graves, inaudibles pour l'être humain", "Des sons trop aigus pour l'humain", "Des signaux visuels", "Des danses"], answer: 0,
      explain: "Les ultrasons sont trop aigus ; les infrasons, très graves." },
    { notion: "comm-animale", q: "Pourquoi le cours cite-t-il les cétacés ?",
      options: ["Leur communication semble dépasser les seuls besoins de survie", "Ils parlent comme les humains", "Ils ne communiquent pas", "Ils utilisent l'écriture"], answer: 0,
      explain: "Dauphins et orques ont des comportements sociaux et ludiques associés à des échanges de signaux." },
    { notion: "comm-animale", q: "Comment le cours décrit-il l'apparition du langage humain ?",
      options: ["Un processus progressif sur plusieurs millions d'années", "L'invention soudaine d'un individu isolé", "Un don apparu en une génération", "Une imitation des animaux"], answer: 0,
      explain: "L'évolution du cerveau et celle des capacités à produire des sons articulés sont liées." },
    { notion: "abeilles", q: "Que permet d'indiquer la danse des abeilles ?",
      options: ["La direction, la distance et l'emplacement d'une source de nourriture", "Le danger d'un prédateur", "L'âge de la reine", "La météo du lendemain"], answer: 0,
      explain: "Karl von Frisch, Vie et mœurs des abeilles." },
    { notion: "abeilles", q: "Quelle question la découverte de von Frisch fait-elle surgir ?",
      options: ["Suffit-il de communiquer pour parler véritablement ?", "Les abeilles sont-elles plus intelligentes que nous ?", "Faut-il apprendre à danser ?", "Les animaux ont-ils une âme ?"], answer: 0,
      explain: "Il faut distinguer communication et langage humain." },
    { notion: "productivite", q: "Que signifie « biologiquement déterminé » ?",
      options: ["Inscrit dans les caractéristiques de l'espèce, largement inné", "Appris à l'école", "Inventé par chaque individu", "Transmis par l'écriture"], answer: 0,
      explain: "Les animaux n'ont pas besoin d'apprendre leur système de communication comme nous apprenons une langue." },
    { notion: "productivite", q: "Qu'est-ce que la productivité du langage humain ?",
      options: ["La capacité à produire et comprendre une infinité d'énoncés nouveaux", "La quantité de mots prononcés par jour", "L'utilité économique du langage", "La vitesse de la parole"], answer: 0,
      explain: "Comprendre des phrases jamais entendues, formuler des idées nouvelles." },
    { notion: "instrument-universel", q: "Où Descartes présente-t-il le langage comme « instrument universel », selon le cours ?",
      options: ["Dans sa lettre au marquis de Newcastle", "Dans L'Évolution créatrice", "Dans le Cratyle", "Dans 1984"], answer: 0,
      explain: "« Cet instrument universel qui peut servir en toutes sortes de rencontres »." },
    { notion: "instrument-universel", q: "Que souligne la formule de Descartes ?",
      options: ["L'élasticité du langage humain, utilisable en toutes situations", "La rigidité du langage", "La supériorité des abeilles", "L'origine divine des langues"], answer: 0,
      explain: "Le langage humain n'est pas limité à quelques messages déterminés à l'avance." },
    { notion: "communication", q: "Pourquoi la communication est-elle une fonction fondamentale ?",
      options: ["Toute société repose sur l'échange, et le premier échange est la communication", "Parce que c'est la seule fonction du langage", "Parce que les machines communiquent", "Parce que les animaux ne communiquent pas"], answer: 0,
      explain: "Cela vaut pour le quotidien comme pour la transmission des connaissances." },
    { notion: "lien-social", q: "Que fait-on quand on dit « Salut, comment tu vas ? » ?",
      options: ["On établit ou entretient un lien social", "On demande un bilan de santé détaillé", "On donne un ordre", "On accomplit un acte juridique"], answer: 0,
      explain: "La communication ne sert pas toujours à transmettre une information importante." },
    { notion: "pas-outil", q: "Pourquoi le langage n'est-il pas un simple outil ?",
      options: ["Un outil se remplace ; or pour chercher un mot, j'utilise d'autres mots", "Parce qu'il ne sert à rien", "Parce qu'il est naturel", "Parce que les outils sont matériels"], answer: 0,
      explain: "Le langage participe directement à notre manière de penser." },
    { notion: "magiques", q: "De qui vient l'expression « fonctions magiques » du langage ?",
      options: ["Freud", "Austin", "Bergson", "Orwell"], answer: 0,
      explain: "Le langage permet d'agir sur l'état psychologique d'autrui." },
    { notion: "magiques", q: "Pourquoi le chien qui s'assoit ne prouve-t-il pas qu'il comprend le mot ?",
      options: ["Il associe un son et une action, sans saisir le sens conceptuel", "Parce qu'il n'entend pas", "Parce qu'il imite son maître", "Parce qu'il comprend mieux que nous"], answer: 0,
      explain: "Chez l'humain, le rapport entre le mot et le sens est bien plus complexe." },
    { notion: "magiques", q: "Comment l'enfant découvre-t-il le sens des mots ?",
      options: ["En confrontant ce qu'il apprend à l'usage des autres : le sens est partagé dans une communauté", "Par instinct", "En inventant ses propres mots", "En lisant un dictionnaire"], answer: 0,
      explain: "Les mots possèdent un sens partagé au sein d'une communauté linguistique." },
    { notion: "absence", q: "Que permet le langage selon la partie II, B ?",
      options: ["Faire référence à une réalité absente", "Rendre les objets présents physiquement", "Supprimer les choses", "Voir l'avenir"], answer: 0,
      explain: "Le mot symbolise l'objet sans nécessiter sa présence." },
    { notion: "absence", q: "Parler d'une licorne, c'est parler de…",
      options: ["ce qui n'existe pas : l'imaginaire", "ce qui n'est plus : le passé", "ce qui n'est pas encore : le futur", "une réalité abstraite"], answer: 0,
      explain: "Le langage fait exister mentalement ce qui n'existe pas." },
    { notion: "absence", q: "Que met en évidence Mallarmé ?",
      options: ["Le pouvoir d'évocation du langage", "L'impuissance des mots", "La supériorité de la peinture", "La nécessité d'une langue universelle"], answer: 0,
      explain: "Dire « fleur » fait penser à une fleur, et chacun se représente la sienne." },
    { notion: "ordre-pouvoir", q: "Lequel de ces usages relève du langage comme pouvoir ?",
      options: ["Pousser quelqu'un à agir", "Compter en binaire", "Classer les animaux", "Décrire un paysage"], answer: 0,
      explain: "Convaincre, persuader, ordonner, influencer, émouvoir, faire agir." },
    { notion: "austin", q: "Dans quel ouvrage Austin analyse-t-il le pouvoir d'action du langage ?",
      options: ["Quand dire, c'est faire", "Les Mots et les Choses", "Investigations philosophiques", "L'Évolution créatrice"], answer: 0,
      explain: "John Langshaw Austin (1911-1960), philosophe anglais." },
    { notion: "austin", q: "Qu'est-ce qu'un énoncé performatif ?",
      options: ["Un énoncé dont la prononciation constitue elle-même une action", "Un énoncé qui décrit le monde", "Un énoncé très efficace pour convaincre", "Un énoncé scientifique"], answer: 0,
      explain: "Exemple : déclarer deux personnes mariées." },
    { notion: "austin", q: "Dans l'exemple du mariage, que fait la personne habilitée ?",
      options: ["Elle produit juridiquement et socialement le mariage par sa parole", "Elle décrit un mariage déjà réalisé", "Elle raconte une histoire", "Elle donne un conseil"], answer: 0,
      explain: "Une parole, une action accomplie, une conséquence sur autrui." },
    { notion: "ordre-pouvoir", q: "« Range ta chambre » montre le caractère…",
      options: ["directif du langage", "descriptif du langage", "poétique du langage", "scientifique du langage"], answer: 0,
      explain: "L'ordre cherche à faire accomplir une action." },
    { notion: "ordre-pouvoir", q: "Selon le cours, la parole est à la fois…",
      options: ["signifiante et directive", "vraie et fausse", "orale et écrite", "naturelle et artificielle"], answer: 0,
      explain: "Elle transmet un sens et elle oriente l'action." },
    { notion: "anteriorite", q: "Quel argument semble prouver que la pensée précède le langage ?",
      options: ["Une même pensée peut s'exprimer dans plusieurs langues", "Les animaux pensent", "Les bébés parlent tôt", "Les mots changent de sens"], answer: 0,
      explain: "Le langage serait alors un simple moyen de traduire la pensée." },
    { notion: "anteriorite", q: "Pourquoi l'hypothèse d'une pensée antérieure au langage ne tient-elle pas ?",
      options: ["Quand je cherche mes mots, je les cherche avec d'autres mots", "Parce que les langues n'existent pas", "Parce qu'on ne pense jamais", "Parce que les codes artificiels sont faux"], answer: 0,
      explain: "Si le langage n'était qu'un outil extérieur, je pourrais l'abandonner quand il échoue." },
    { notion: "inseparable", q: "Pourquoi l'image mentale ne suffit-elle pas à penser et à communiquer ?",
      options: ["Le dessin est plus long et plus limité pour exprimer des relations complexes", "Parce que les images sont fausses", "Parce que personne n'a d'images mentales", "Parce que l'image est interdite"], answer: 0,
      explain: "Difficile de dessiner une intention, une relation temporelle ou une idée abstraite." },
    { notion: "inseparable", q: "Que montre l'exemple des 26 lettres de l'alphabet ?",
      options: ["Avec un nombre limité de signes, on produit un très grand nombre de significations", "Le français est une langue pauvre", "Il faudrait plus de lettres", "Les lettres ressemblent aux choses"], answer: 0,
      explain: "Et la lettre « A » ne ressemble pas à ce qu'elle aide à désigner." },
    { notion: "dialogue-ame", q: "Pour Platon, qu'est-ce que penser ?",
      options: ["Dialoguer avec soi-même", "Voir des images", "Obéir à ses instincts", "Calculer en binaire"], answer: 0,
      explain: "« La pensée est un discours que l'âme se tient à elle-même. »" },
    { notion: "leibniz", q: "Que cherchait Leibniz avec son « alphabet des pensées humaines » ?",
      options: ["Un langage universel et univoque, pour éviter les désaccords", "Une nouvelle orthographe du français", "Une langue réservée aux savants", "Une écriture en images"], answer: 0,
      explain: "Il n'a pas réussi, mais ses travaux ont contribué à la logique et au binaire." },
    { notion: "leibniz", q: "Que représente le récit de la tour de Babel ?",
      options: ["La diversité des langues comme source de séparation entre les hommes", "La supériorité d'une langue", "L'invention de l'écriture", "Le pouvoir des mots magiques"], answer: 0,
      explain: "Dieu confond le langage des hommes, qui ne se comprennent plus." },
    { notion: "leibniz", q: "Pourquoi un langage parfait ne supprimerait-il pas tous les malentendus ?",
      options: ["Même dans la même langue, on peut mal se comprendre et interpréter différemment les mots", "Parce que Leibniz s'est trompé en mathématiques", "Parce que Dieu l'interdit", "Parce que les langues n'évoluent pas"], answer: 0,
      explain: "La diversité des langues n'est pas la seule cause des difficultés de communication." },
    { notion: "hegel-ineffable", q: "Que signifie « ineffable » ?",
      options: ["Ce qui ne peut pas être exprimé par des mots", "Ce qui est très clair", "Ce qui est écrit", "Ce qui est faux"], answer: 0,
      explain: "L'ineffable, c'est l'indicible." },
    { notion: "hegel-ineffable", q: "Pour Hegel, une pensée qui n'a pas trouvé ses mots est…",
      options: ["une pensée obscure, encore « à l'état de fermentation »", "la pensée la plus profonde", "une pensée parfaite", "une erreur"], answer: 0,
      explain: "La pensée devient claire lorsqu'elle trouve sa formulation dans le langage." },
    { notion: "hegel-ineffable", q: "Selon Hegel, comment évolue l'écriture ?",
      options: ["Des représentations figuratives vers des signes plus abstraits, jusqu'à l'alphabet", "De l'alphabet vers les images", "Elle n'évolue pas", "Des chiffres vers les lettres"], answer: 0,
      explain: "L'écriture détache le signe de l'image qu'il représente." },
    { notion: "hegel-ineffable", q: "Pourquoi faut-il forger son vocabulaire ?",
      options: ["Plus notre langage est riche, plus nous pouvons distinguer, préciser et organiser nos pensées", "Pour impressionner les autres", "Pour parler plus vite", "Parce que les mots simples sont faux"], answer: 0,
      explain: "Le langage est une condition de la pensée." },
    { notion: "etiquettes", q: "Que veut dire Bergson en comparant les mots à des « étiquettes » ?",
      options: ["Nous identifions les choses par des mots généraux au lieu de les voir dans leur singularité", "Les mots servent à vendre", "Les mots sont toujours exacts", "Il faut supprimer les mots"], answer: 0,
      explain: "« Arbre » est une catégorie générale, mais chaque arbre est différent." },
    { notion: "etiquettes", q: "Pourquoi les mots risquent-ils de banaliser notre vie intérieure ?",
      options: ["Ils sont limités et hérités : deux « tristesses » différentes portent le même mot", "Parce qu'on ne ressent rien", "Parce que les émotions n'existent pas", "Parce que les mots sont trop nombreux"], answer: 0,
      explain: "Il est difficile d'exprimer exactement une expérience qui nous est propre." },
    { notion: "social", q: "Pourquoi le langage est-il une réalité sociale ?",
      options: ["Une langue se construit dans l'histoire d'une communauté et s'impose à l'individu", "Parce qu'on parle surtout en groupe", "Parce que chacun invente sa langue", "Parce que la société interdit certains mots"], answer: 0,
      explain: "Le français d'aujourd'hui n'est pas celui de Molière." },
    { notion: "social", q: "Quels sont les deux moyens proposés par Bergson pour rendre sa pensée plus personnelle ?",
      options: ["Enrichir son vocabulaire et utiliser le langage métaphorique", "Se taire et méditer", "Inventer une langue et la parler seul", "Apprendre le binaire et la logique"], answer: 0,
      explain: "La métaphore permet de sortir des formulations toutes faites." },
    { notion: "nietzsche", q: "Pour Nietzsche, que fait le concept ?",
      options: ["Il regroupe sous un même mot des réalités particulières toujours différentes", "Il décrit parfaitement chaque chose", "Il est propre à chaque individu", "Il n'existe pas"], answer: 0,
      explain: "Le langage opère une simplification de la réalité." },
    { notion: "nietzsche", q: "Qu'est-ce que l'aliénation, selon le cours ?",
      options: ["Devenir étranger à soi-même", "Devenir fou", "Apprendre une langue étrangère", "Être exclu de la société"], answer: 0,
      explain: "Penser seulement avec des catégories déjà établies, qu'on n'a pas créées." },
    { notion: "nietzsche", q: "Quelle solution Nietzsche met-il en avant ?",
      options: ["Écrire et penser à la manière des poètes", "Parler le moins possible", "Utiliser uniquement les mathématiques", "Apprendre la novlangue"], answer: 0,
      explain: "Images, nouvelles associations, formulations inhabituelles." },
    { notion: "orwell", q: "Quel est l'objectif de la novlangue dans 1984 ?",
      options: ["Réduire progressivement les possibilités de pensée critique", "Faciliter l'apprentissage des langues", "Créer une poésie nouvelle", "Unifier les langues du monde"], answer: 0,
      explain: "Réduire les possibilités du langage, c'est réduire les possibilités de la pensée." },
    { notion: "orwell", q: "Quelle chaîne de domination le roman 1984 montre-t-il ?",
      options: ["Contrôle du langage → contrôle de la pensée → contrôle de l'histoire", "Contrôle de l'histoire → du langage → des machines", "Contrôle de l'économie → de l'armée → du langage", "Contrôle des écoles → des livres → des mots"], answer: 0,
      explain: "Contrôler les mots du récit, c'est contrôler la mémoire collective." },
    { notion: "orwell", q: "Que désigne la « crimepensée » ?",
      options: ["Les pensées jugées opposées au pouvoir, que le régime veut contrôler", "Un crime commis par la pensée magique", "Un roman policier", "Un mot inventé par Austin"], answer: 0,
      explain: "Le régime veut contrôler les actes, les paroles, et même les pensées." },
    { notion: "signe", q: "Dans le signe linguistique, qu'est-ce que le signifiant ?",
      options: ["La forme du signe : les sons prononcés ou les lettres écrites", "Le sens associé au signe", "L'objet réel", "La personne qui parle"], answer: 0,
      explain: "Le signifié, c'est le sens associé au signe." },
    { notion: "signe", q: "Pourquoi une langue ne se réduit-elle jamais au simple signifié ?",
      options: ["L'intonation, le rythme, les gestes, le contexte participent aussi au sens", "Parce que les mots n'ont pas de sens", "Parce que le signifiant n'existe pas", "Parce que seule l'écriture compte"], answer: 0,
      explain: "La manière dont quelque chose est dit participe à sa signification." },
    { notion: "cratyle", q: "Pour l'essentiel du vocabulaire, le lien entre le mot et la chose est…",
      options: ["conventionnel", "naturel", "divin", "biologique"], answer: 0,
      explain: "Rien dans la chose elle-même n'impose le mot utilisé." },
    { notion: "cratyle", q: "Dans le Cratyle, quel problème pose l'idée que chacun peut nommer les choses comme il veut ?",
      options: ["La communication deviendrait impossible", "Les mots deviendraient trop longs", "Les choses disparaîtraient", "Les dieux seraient offensés"], answer: 0,
      explain: "Il faut une communauté des signes pour se comprendre." },
    { notion: "cratyle", q: "Qu'étudie la philologie ?",
      options: ["L'histoire et l'évolution des langues à partir de leurs formes anciennes", "La logique des raisonnements", "Le comportement des abeilles", "La pensée intérieure"], answer: 0,
      explain: "Une langue vivante est mutable : elle se transforme avec le temps." },
    { notion: "formel", q: "Que montre l'exemple de Galilée ?",
      options: ["Les mathématiques peuvent formuler précisément des lois physiques", "Les mathématiques sont un langage naturel", "Les corps lourds tombent plus vite dans le vide", "La science n'a pas besoin de langage"], answer: 0,
      explain: "Dans le vide, les corps tombent avec la même accélération, indépendamment de leur masse." },
    { notion: "formel", q: "Qu'est-ce qu'une langue naturelle exprime mieux qu'un langage formel ?",
      options: ["L'ironie, l'humour, les émotions, les sous-entendus, les nuances", "Les lois physiques", "Les calculs exacts", "Les démonstrations"], answer: 0,
      explain: "Elle est plastique, souple et évolutive ; le langage formel est plus rigide, donc plus précis." },
    { notion: "wittgenstein", q: "Que désignent les « jeux de langage » chez Wittgenstein ?",
      options: ["Le fait que les mots prennent leur sens dans leurs usages concrets", "Des jeux de mots humoristiques", "Une langue parfaite à inventer", "Les règles de l'orthographe"], answer: 0,
      explain: "Investigations philosophiques." },
    { notion: "wittgenstein", q: "Que signifie Organon, nom des traités logiques d'Aristote ?",
      options: ["« Outil »", "« Langage »", "« Raison »", "« Discours »"], answer: 0,
      explain: "Aristote y étudie notamment le syllogisme." },
    { notion: "mots-choses", q: "Selon le cours, parler, c'est…",
      options: ["dire quelque chose à quelqu'un sur quelque chose", "produire des sons", "nommer les choses comme on veut", "penser en silence"], answer: 0,
      explain: "Parler est une activité signifiante et relationnelle." },
    { notion: "mots-choses", q: "Que montre l'exemple du mot « pommier » ?",
      options: ["Le mot n'est pas la chose : il la figure dans la pensée", "Le mot contient la nature de l'arbre", "Les mots sont inutiles", "Les arbres n'ont pas de nom"], answer: 0,
      explain: "Le langage est une forme de symbolisation." },
    { notion: "mots-choses", q: "Qu'est-ce que le langage adamique ?",
      options: ["Un langage où le nom correspondrait directement à la nature de la chose", "La langue parlée à Babel", "Le premier alphabet", "La novlangue"], answer: 0,
      explain: "Dans la Genèse, Adam donne un nom aux animaux." },
    { notion: "mots-choses", q: "Que dit Aristote du logos dans la Rhétorique ?",
      options: ["S'il ne manifeste pas, il n'accomplit pas son œuvre propre", "Il doit toujours être écrit", "Il ne sert qu'à convaincre", "Il est réservé aux philosophes"], answer: 0,
      explain: "Le discours doit faire apparaître quelque chose dans l'esprit de celui qui écoute." }
  ]);

  /* Explications de texte */
  add("qcm", [
    { notion: "etiquettes", passage: "Nous ne voyons pas les choses mêmes, nous nous bornons le plus souvent à lire les étiquettes collées sur elles.",
      src: "Bergson, Le Rire", q: "Quelle est la thèse de ce texte ?",
      options: ["Le langage nous fait percevoir les choses à travers des catégories générales, au détriment de leur singularité", "Il faut lire davantage", "Les choses n'existent pas", "Les étiquettes sont toujours exactes"], answer: 0,
      explain: "Les mots classent la réalité, mais peuvent nous empêcher d'en percevoir la richesse." },
    { notion: "hegel-ineffable", passage: "L'ineffable est la pensée obscure, la pensée à l'état de fermentation.",
      src: "Hegel", q: "Quelle conception de la pensée ce texte refuse-t-il ?",
      options: ["L'idée que ce qui ne se dit pas serait une pensée plus profonde", "L'idée que la pensée a besoin du langage", "L'idée que l'écriture évolue", "L'idée que le vocabulaire est utile"], answer: 0,
      explain: "Pour Hegel, la pensée devient claire en trouvant ses mots." },
    { notion: "instrument-universel", passage: "[Le langage est] cet instrument universel qui peut servir en toutes sortes de rencontres.",
      src: "Descartes, lettre au marquis de Newcastle", q: "Qu'est-ce que cette formule permet de distinguer ?",
      options: ["Le langage humain, ouvert à toutes les situations, et la communication animale", "L'écriture et la parole", "La logique et la poésie", "Le français et le latin"], answer: 0,
      explain: "Le langage humain n'est pas limité à quelques messages déterminés d'avance." },
    { notion: "dialogue-ame", passage: "La pensée est un discours que l'âme se tient à elle-même.",
      src: "Platon", q: "Quel argument ce texte apporte-t-il dans un sujet sur pensée et langage ?",
      options: ["Même seuls, nous pensons sous la forme d'un dialogue : la pensée est déjà langage", "La pensée n'a pas besoin des autres", "L'âme est séparée du corps", "Il faut parler à voix haute pour penser"], answer: 0,
      explain: "Le langage est présent même quand je me parle intérieurement." },
    { notion: "mots-choses", passage: "Le logos, s'il ne manifeste pas, n'accomplira pas son œuvre propre.",
      src: "Aristote, Rhétorique", q: "Quelle est l'œuvre propre du discours, selon ce texte ?",
      options: ["Faire apparaître quelque chose dans l'esprit de celui qui écoute", "Produire des sons harmonieux", "Décrire la nature exacte des choses", "Imposer sa volonté"], answer: 0,
      explain: "Le langage est un pouvoir de manifestation et de symbolisation." }
  ]);

  add("vf", [
    { notion: "definition", s: "Pour le cours, le langage n'a qu'une seule fonction : communiquer.", a: false, explain: "Il permet aussi de penser, de nommer le monde, d'agir sur soi et sur autrui." },
    { notion: "faber", s: "Chez Bergson, la torpeur correspond au règne animal.", a: false, explain: "La torpeur correspond au règne végétal ; l'instinct au règne animal." },
    { notion: "loquens", s: "Pour Hagège, l'homme est aussi, et peut-être avant tout, un Homo loquens.", a: true, explain: "Un homme parlant, qui transmet ce qu'il sait." },
    { notion: "comm-animale", s: "Les ultrasons sont des sons trop graves pour l'oreille humaine.", a: false, explain: "Les ultrasons sont trop aigus ; les infrasons sont très graves." },
    { notion: "comm-animale", s: "Le langage humain est apparu soudainement chez un individu isolé.", a: false, explain: "C'est un processus progressif sur plusieurs millions d'années." },
    { notion: "abeilles", s: "Pour le cours, la danse des abeilles est le fruit du hasard.", a: false, explain: "C'est un véritable système de transmission d'informations." },
    { notion: "productivite", s: "Le langage humain repose sur un apprentissage.", a: true, explain: "Il peut être transmis et transformé par les générations." },
    { notion: "instrument-universel", s: "Pour Descartes, le langage humain est limité à quelques messages déterminés à l'avance.", a: false, explain: "C'est un « instrument universel qui peut servir en toutes sortes de rencontres »." },
    { notion: "lien-social", s: "« Salut, comment tu vas ? » sert surtout à transmettre une information importante.", a: false, explain: "La formule sert à établir ou maintenir un lien social." },
    { notion: "pas-outil", s: "Pour le cours, le langage est un outil qu'on peut remplacer comme un stylo.", a: false, explain: "On cherche ses mots avec d'autres mots : il n'est pas un outil extérieur." },
    { notion: "magiques", s: "Le chien qui s'assoit à un signal comprend le sens conceptuel du mot.", a: false, explain: "Il peut simplement associer un son et une action." },
    { notion: "absence", s: "Le langage permet de parler d'événements qu'aucun être humain n'a vécus.", a: true, explain: "Ce qui n'est plus : les dinosaures, des époques lointaines." },
    { notion: "austin", s: "Pour Austin, certaines paroles accomplissent elles-mêmes une action.", a: true, explain: "C'est le langage performatif." },
    { notion: "ordre-pouvoir", s: "Selon le cours, le pouvoir des mots n'existe que dans les situations exceptionnelles.", a: false, explain: "Il apparaît aussi dans les situations ordinaires : « Range ta chambre »." },
    { notion: "anteriorite", s: "Le cours conclut que la pensée existe avant le langage.", a: false, explain: "C'est une hypothèse examinée pour en montrer les limites." },
    { notion: "inseparable", s: "La lettre « A » ressemble à ce qu'elle aide à désigner.", a: false, explain: "Les signes n'ont pas nécessairement de rapport naturel avec ce qu'ils désignent." },
    { notion: "leibniz", s: "Leibniz a réussi à créer un langage universel parfaitement univoque.", a: false, explain: "Il n'a pas réussi, mais ses travaux ont contribué à la logique et au binaire." },
    { notion: "leibniz", s: "Parler la même langue suffit à se comprendre parfaitement.", a: false, explain: "On peut encore mal se comprendre, se disputer, interpréter différemment les mots." },
    { notion: "hegel-ineffable", s: "Pour Hegel, ce que l'on ne parvient pas à dire est une pensée supérieure.", a: false, explain: "C'est une pensée obscure, « à l'état de fermentation »." },
    { notion: "etiquettes", s: "Pour Bergson, le langage est inutile à la vie sociale.", a: false, explain: "Il est indispensable à la vie sociale, mais il a une limite importante." },
    { notion: "social", s: "Nous décidons individuellement du sens des mots.", a: false, explain: "La langue s'impose à nous : elle existe avant notre naissance." },
    { notion: "nietzsche", s: "Pour Nietzsche, deux arbres sont parfaitement identiques puisqu'ils portent le même nom.", a: false, explain: "Le même mot désigne des réalités toujours différentes : le langage simplifie." },
    { notion: "orwell", s: "Selon le cours, le pouvoir des mots ne concerne que les régimes totalitaires.", a: false, explain: "En démocratie aussi, le choix des mots modifie la perception des événements." },
    { notion: "cratyle", s: "Une langue vivante est mutable.", a: true, explain: "Des mots apparaissent, changent de sens, disparaissent." },
    { notion: "formel", s: "Dans le vide, les corps lourds tombent plus vite que les corps légers.", a: false, explain: "Ils tombent avec la même accélération, indépendamment de leur masse." },
    { notion: "wittgenstein", s: "Pour Wittgenstein, la philosophie doit fabriquer une langue parfaite.", a: false, explain: "Elle doit décrire et comprendre le langage tel qu'il existe." },
    { notion: "mots-choses", s: "Maîtriser un vocabulaire signifie nécessairement maîtriser la réalité dont on parle.", a: false, explain: "Il ne faut pas confondre le mot avec la chose elle-même." }
  ]);

  add("fill", [
    { notion: "monde-parle", text: "Un monde [[parlé|parle]] et [[parlant]].", explain: "Merleau-Ponty." },
    { notion: "instrument-universel", text: "Cet instrument [[universel]] qui peut servir en toutes sortes de [[rencontres]].", explain: "Descartes, lettre au marquis de Newcastle." },
    { notion: "dialogue-ame", text: "La pensée est un [[discours]] que l'âme se tient à [[elle-même|elle meme|elle]].", explain: "Platon." },
    { notion: "hegel-ineffable", text: "L'ineffable est la pensée [[obscure]], la pensée à l'état de [[fermentation]].", explain: "Hegel." },
    { notion: "etiquettes", text: "Nous ne voyons pas les choses mêmes, nous nous bornons le plus souvent à lire les [[étiquettes|etiquettes]] collées sur elles.", explain: "Bergson, Le Rire." },
    { notion: "mots-choses", text: "Le logos, s'il ne [[manifeste]] pas, n'accomplira pas son œuvre propre.", explain: "Aristote, Rhétorique." },
    { notion: "absence", text: "Il suffit de dire le mot « [[fleur]] » à quelqu'un pour qu'il pense à une fleur.", explain: "L'idée de Mallarmé." },
    { notion: "faber", plain: true, text: "Pour Bergson, l'homme est avant tout un Homo [[faber]] ; pour Hagège, il est aussi un Homo [[loquens]].", explain: "Fabriquer et parler." },
    { notion: "productivite", plain: true, text: "Le langage humain possède une grande [[productivité|productivite]] : il permet de produire et de comprendre une infinité d'énoncés [[nouveaux]].", explain: "C'est ce qui le distingue des communications animales connues." },
    { notion: "austin", plain: true, text: "Pour Austin, un énoncé [[performatif]] ne décrit pas une action : sa prononciation l'[[accomplit]].", explain: "Quand dire, c'est faire." },
    { notion: "ordre-pouvoir", plain: true, text: "La parole est à la fois [[signifiante]] et [[directive]].", explain: "Elle transmet un sens et oriente l'action." },
    { notion: "orwell", plain: true, text: "Réduire les possibilités du [[langage]], c'est réduire les possibilités de la [[pensée|pensee]].", explain: "Orwell, 1984." },
    { notion: "signe", plain: true, text: "Le signe linguistique met en relation le [[signifiant]] et le [[signifié|signifie]].", explain: "La forme et le sens." },
    { notion: "nietzsche", plain: true, text: "Être aliéné, c'est devenir [[étranger|etranger]] à soi-même.", explain: "Nietzsche : le risque de penser avec des catégories qu'on n'a pas créées." },
    { notion: "mots-choses", plain: true, text: "Parler, c'est toujours dire quelque chose à [[quelqu'un|quelqu un|quelquun]] sur quelque [[chose]].", explain: "Définition générale du cours." },
    { notion: "magiques", plain: true, text: "L'expression « fonctions [[magiques]] » du langage vient de [[Freud]].", explain: "Le langage permet d'agir sur autrui." }
  ]);

  add("part", [
    { notion: "faber", a: 1, quote: "L'homme est avant tout un Homo faber.", explain: "Partie I, A : l'Homme, un être de parole." },
    { notion: "abeilles", a: 1, quote: "La danse indique la direction et la distance de la nourriture.", explain: "Partie I, B : la communication animale." },
    { notion: "instrument-universel", a: 1, quote: "Cet instrument universel qui peut servir en toutes sortes de rencontres.", explain: "Partie I, B." },
    { notion: "lien-social", a: 2, quote: "« Salut, comment tu vas ? »", explain: "Partie II, A : la communication et le lien social." },
    { notion: "absence", a: 2, quote: "Il suffit de dire le mot « fleur » à quelqu'un pour qu'il pense à une fleur.", explain: "Partie II, B : les fonctions magiques." },
    { notion: "austin", a: 2, quote: "Quand dire, c'est faire.", explain: "Partie II, C." },
    { notion: "dialogue-ame", a: 3, quote: "La pensée est un discours que l'âme se tient à elle-même.", explain: "Partie III, B." },
    { notion: "hegel-ineffable", a: 3, quote: "L'ineffable est la pensée obscure, la pensée à l'état de fermentation.", explain: "Partie III, C : les périls du langage." },
    { notion: "etiquettes", a: 3, quote: "Nous nous bornons le plus souvent à lire les étiquettes collées sur les choses.", explain: "Partie III, C." },
    { notion: "orwell", a: 4, quote: "Réduire les possibilités du langage, c'est réduire les possibilités de la pensée.", explain: "Annexe : le langage comme instrument de domination." },
    { notion: "wittgenstein", a: 4, quote: "Les mots prennent leur sens dans les jeux de langage.", explain: "Annexe : la science du langage." },
    { notion: "mots-choses", a: 4, quote: "Le logos, s'il ne manifeste pas, n'accomplira pas son œuvre propre.", explain: "Annexe : les mots et les choses." }
  ]);

  add("order", [
    { part: 1, notion: "faber", q: "Remets dans l'ordre les trois directions de l'élan vital selon Bergson.",
      items: ["La torpeur : le règne végétal", "L'instinct : le règne animal", "L'intelligence : l'être humain"],
      explain: "L'Évolution créatrice." },
    { part: 3, notion: "anteriorite", q: "Rétablis le raisonnement de la partie III, A.",
      items: ["Hypothèse : la pensée existe avant le langage", "Argument : une même pensée s'exprime en plusieurs langues", "Argument : quand je cherche mes mots, l'idée semble déjà là", "Objection : je cherche mes mots avec d'autres mots", "Conclusion : le langage structure la pensée"],
      explain: "L'expérience de la recherche des mots sert d'abord l'hypothèse, puis la réfute." },
    { part: 0, notion: "definition", q: "Remets dans l'ordre les grandes étapes du cours.",
      items: ["Le problème du langage animalier", "Les fonctions du langage", "Pensée et langage", "Le langage comme instrument de domination", "La science du langage", "Les mots et les choses"],
      explain: "Trois parties, puis trois annexes." },
    { part: 4, notion: "orwell", q: "Remets dans l'ordre la chaîne de domination décrite à propos de 1984.",
      items: ["Contrôler le langage", "Contrôler les catégories de pensée", "Contrôler la pensée", "Contrôler le récit du passé et l'histoire"],
      explain: "Contrôle du langage → contrôle de la pensée → contrôle de l'histoire." },
    { part: 0, notion: "definition", q: "Remets dans l'ordre l'évolution des moyens de communication évoquée en introduction.",
      items: ["La lettre", "Le télégraphe", "Le téléphone", "Le téléphone portable", "Les smartphones et les réseaux sociaux"],
      explain: "Un idéal d'efficacité de la transmission." }
  ]);

  add("match", [
    { part: 1, q: "Associe chaque auteur à son idée (partie I).",
      pairs: [
        { l: "Bergson", r: "L'homme, Homo faber", n: "faber" },
        { l: "Hagège", r: "L'homme, Homo loquens", n: "loquens" },
        { l: "Karl von Frisch", r: "La danse des abeilles", n: "abeilles" },
        { l: "Descartes", r: "Un instrument universel", n: "instrument-universel" },
        { l: "Merleau-Ponty", r: "Un monde parlé et parlant", n: "monde-parle" }
      ], explain: "Les références de l'introduction et de la partie I." },
    { part: 2, q: "Associe chaque idée à son auteur ou à son exemple (partie II).",
      pairs: [
        { l: "Les fonctions magiques du langage", r: "Freud", n: "magiques" },
        { l: "Le pouvoir d'évocation du mot « fleur »", r: "Mallarmé", n: "absence" },
        { l: "Le langage performatif", r: "Austin", n: "austin" },
        { l: "Le caractère directif d'un ordre", r: "« Range ta chambre »", n: "ordre-pouvoir" },
        { l: "Le lien social", r: "« Salut, comment tu vas ? »", n: "lien-social" }
      ], explain: "Les fonctions du langage, exemple par exemple." },
    { part: 3, q: "Associe chaque auteur à son idée (partie III).",
      pairs: [
        { l: "Platon", r: "Un discours de l'âme avec elle-même", n: "dialogue-ame" },
        { l: "Leibniz", r: "Un alphabet des pensées humaines", n: "leibniz" },
        { l: "Hegel", r: "L'ineffable, pensée obscure", n: "hegel-ineffable" },
        { l: "Bergson", r: "Les mots comme étiquettes", n: "etiquettes" },
        { l: "Nietzsche", r: "Le concept et le risque d'aliénation", n: "nietzsche" }
      ], explain: "Pensée et langage." },
    { part: 4, q: "Associe chaque auteur à son idée (annexes).",
      pairs: [
        { l: "Orwell", r: "La novlangue", n: "orwell" },
        { l: "Platon, Cratyle", r: "Une communauté des signes", n: "cratyle" },
        { l: "Galilée", r: "La chute des corps mathématisée", n: "formel" },
        { l: "Wittgenstein", r: "Les jeux de langage", n: "wittgenstein" },
        { l: "Foucault", r: "Les Mots et les Choses", n: "mots-choses" },
        { l: "Aristote", r: "Le syllogisme et l'Organon", n: "wittgenstein" }
      ], explain: "Domination, science du langage, mots et choses." },
    { part: 0, q: "Associe chaque mot à sa définition.",
      pairs: [
        { l: "Productivité", r: "Produire une infinité d'énoncés nouveaux", n: "productivite" },
        { l: "Univoque", r: "Sans interprétations contradictoires", n: "leibniz" },
        { l: "Ineffable", r: "Ce qui ne peut être exprimé par des mots", n: "hegel-ineffable" },
        { l: "Aliénation", r: "Devenir étranger à soi-même", n: "nietzsche" },
        { l: "Philologie", r: "L'histoire des langues", n: "cratyle" },
        { l: "Performatif", r: "Une parole qui accomplit une action", n: "austin" }
      ], explain: "Le vocabulaire précis du cours." },
    { part: 2, q: "Associe chaque exemple à ce qu'il illustre.",
      pairs: [
        { l: "Acheter des chaussures en ligne", r: "La communication est partout", n: "communication" },
        { l: "Le fordisme", r: "Transmettre un savoir-faire suppose le langage", n: "loquens" },
        { l: "Le chien qui s'assoit", r: "Associer un son et une action", n: "magiques" },
        { l: "Le mariage", r: "Une parole qui produit une situation", n: "austin" },
        { l: "La licorne", r: "Parler de ce qui n'existe pas", n: "absence" },
        { l: "L'ordre au soldat", r: "Le pouvoir considérable de la parole", n: "ordre-pouvoir" }
      ], explain: "Un exemple précis vaut mieux qu'une idée vague." }
  ]);

  add("sort", [
    { part: 1, q: "Communication animale ou langage humain ? Classe chaque caractéristique.",
      buckets: ["Communication animale", "Langage humain"],
      items: [
        { t: "En grande partie biologiquement déterminée", b: 0, n: "productivite" },
        { t: "Informations liées surtout à la survie", b: 0, n: "comm-animale" },
        { t: "Ultrasons et infrasons", b: 0, n: "comm-animale" },
        { t: "La danse : direction et distance de la nourriture", b: 0, n: "abeilles" },
        { t: "Repose sur un apprentissage", b: 1, n: "productivite" },
        { t: "Comprendre des phrases jamais entendues", b: 1, n: "productivite" },
        { t: "Parler de choses imaginaires ou à venir", b: 1, n: "productivite" },
        { t: "Un instrument universel", b: 1, n: "instrument-universel" }
      ], explain: "Communiquer n'est pas nécessairement parler." },
    { part: 2, q: "Range chaque énoncé selon la fonction du langage qu'il illustre.",
      buckets: ["Communiquer", "Agir sur autrui", "Rendre présent l'absent"],
      items: [
        { t: "Donner la taille et le prix d'un produit", b: 0, n: "communication" },
        { t: "« Salut, comment tu vas ? »", b: 0, n: "lien-social" },
        { t: "Transmettre une technique", b: 0, n: "communication" },
        { t: "Provoquer la colère ou la joie", b: 1, n: "magiques" },
        { t: "« Je vous déclare mariés »", b: 1, n: "austin" },
        { t: "« Range ta chambre »", b: 1, n: "ordre-pouvoir" },
        { t: "Parler des dinosaures", b: 2, n: "absence" },
        { t: "Dire « fleur » sans fleur présente", b: 2, n: "absence" }
      ], explain: "Le langage ne sert pas seulement à communiquer." },
    { part: 3, q: "Le langage, aide ou limite pour la pensée ? Classe chaque idée.",
      buckets: ["Aide la pensée", "Limite la pensée"],
      items: [
        { t: "La pensée devient claire en trouvant ses mots (Hegel)", b: 0, n: "hegel-ineffable" },
        { t: "Un vocabulaire riche permet de préciser ses pensées", b: 0, n: "hegel-ineffable" },
        { t: "Penser, c'est dialoguer avec soi-même (Platon)", b: 0, n: "dialogue-ame" },
        { t: "26 lettres pour une infinité de significations", b: 0, n: "inseparable" },
        { t: "Les mots sont des étiquettes (Bergson)", b: 1, n: "etiquettes" },
        { t: "Les mots banalisent la vie intérieure", b: 1, n: "etiquettes" },
        { t: "Le concept simplifie la réalité (Nietzsche)", b: 1, n: "nietzsche" },
        { t: "La langue s'impose à nous", b: 1, n: "social" }
      ], explain: "Le langage est indispensable à la pensée, mais il peut aussi la limiter." },
    { part: 4, q: "Langue naturelle ou langage formel ?",
      buckets: ["Langue naturelle", "Langage formel"],
      items: [
        { t: "Exprime l'ironie et l'humour", b: 0, n: "formel" },
        { t: "Plastique, souple et évolutive", b: 0, n: "formel" },
        { t: "Dépend de l'intonation et du contexte", b: 0, n: "signe" },
        { t: "Le français, l'anglais, l'allemand", b: 0, n: "formel" },
        { t: "Les mathématiques", b: 1, n: "formel" },
        { t: "Volontairement rigoureux et limité", b: 1, n: "formel" },
        { t: "L'alphabet des pensées humaines de Leibniz", b: 1, n: "leibniz" },
        { t: "Formule précisément des lois physiques", b: 1, n: "formel" }
      ], explain: "La rigidité du langage formel fait sa précision." }
  ]);

  add("schema", [
    { part: 1, layout: "tree", q: "Complète l'arbre des trois directions de l'élan vital (Bergson).",
      root: "L'élan vital",
      branches: [
        [{ slot: "La torpeur", n: "faber" }, { t: "Le règne végétal" }],
        [{ slot: "L'instinct", n: "faber" }, { t: "Le règne animal" }],
        [{ slot: "L'intelligence", n: "faber" }, { t: "L'être humain : Homo faber" }]
      ],
      distract: ["La parole", "La conscience"],
      explain: "Torpeur, instinct, intelligence." },
    { part: 2, layout: "flow", q: "Complète le parcours de la partie II.",
      nodes: [
        { cap: "A", t: "Le langage est un instrument de communication" },
        { cap: "A", slot: "Il crée aussi du lien social", n: "lien-social" },
        { cap: "B", slot: "Il agit sur autrui : fonctions magiques", n: "magiques" },
        { cap: "B", slot: "Il rend présent ce qui est absent", n: "absence" },
        { cap: "C", slot: "Certaines paroles sont des actions", n: "austin" },
        { cap: "C", t: "La parole est signifiante et directive" }
      ],
      distract: ["Le langage n'est qu'une étiquette", "Les animaux ont un langage universel"],
      explain: "Communiquer, agir, faire exister, faire." },
    { part: 3, layout: "flow", q: "Complète le raisonnement de la partie III.",
      nodes: [
        { cap: "A", t: "Hypothèse : la pensée précède le langage" },
        { cap: "A", slot: "Mais on cherche ses mots avec des mots", n: "anteriorite" },
        { cap: "B", slot: "La pensée est inséparable du langage", n: "inseparable" },
        { cap: "B", slot: "Penser, c'est dialoguer avec soi (Platon)", n: "dialogue-ame" },
        { cap: "C", slot: "L'ineffable est une pensée obscure (Hegel)", n: "hegel-ineffable" },
        { cap: "C", slot: "Mais les mots sont des étiquettes (Bergson)", n: "etiquettes" }
      ],
      distract: ["La pensée pure existe sans mots", "Le langage n'est qu'un outil remplaçable"],
      explain: "Le langage est la condition de la pensée, et aussi sa limite." }
  ]);

  add("grid", [
    { part: 3, q: "Coche ce que soutient chaque auteur, d'après le cours.",
      cols: ["Bergson", "Nietzsche", "Hegel"],
      rows: [
        { t: "Les mots sont des étiquettes collées sur les choses", a: [1, 0, 0], n: "etiquettes" },
        { t: "Le langage simplifie la réalité", a: [1, 1, 0], n: "nietzsche" },
        { t: "Il faut enrichir son vocabulaire", a: [1, 1, 1], n: "social" },
        { t: "Il faut penser et écrire à la manière des poètes", a: [0, 1, 0], n: "nietzsche" },
        { t: "L'ineffable est une pensée obscure", a: [0, 0, 1], n: "hegel-ineffable" },
        { t: "Penser avec des concepts déjà établis expose à l'aliénation", a: [0, 1, 0], n: "nietzsche" }
      ], explain: "Bergson et Nietzsche montrent les limites du langage ; Hegel en fait la condition d'une pensée claire, d'où l'importance du vocabulaire." }
  ]);

  add("flash", [
    { notion: "definition", f: "Le langage, définition ?", b: "Un système de signes permettant notamment de communiquer (latin lingua)." },
    { notion: "monde-parle", f: "Merleau-Ponty ?", b: "« Un monde parlé et parlant » : le langage est la texture même de notre monde." },
    { notion: "faber", f: "Les trois directions de l'élan vital (Bergson) ?", b: "Torpeur (végétal) · instinct (animal) · intelligence (homme, Homo faber)." },
    { notion: "loquens", f: "Homo loquens ?", b: "Hagège : l'homme parlant, qui transmet ses savoir-faire par le langage." },
    { notion: "abeilles", f: "Karl von Frisch ?", b: "La danse des abeilles indique la direction, la distance et l'emplacement de la nourriture." },
    { notion: "productivite", f: "Pourquoi communiquer n'est-il pas parler ?", b: "La communication animale est largement innée ; le langage humain est appris et productif." },
    { notion: "instrument-universel", f: "Descartes et le langage ?", b: "« Cet instrument universel qui peut servir en toutes sortes de rencontres » (lettre au marquis de Newcastle)." },
    { notion: "communication", f: "Les cinq apports de la communication ?", b: "Informer · transmettre savoirs et techniques · satisfaire nos besoins · organiser la vie collective · créer du lien social." },
    { notion: "pas-outil", f: "Pourquoi le langage n'est-il pas un simple outil ?", b: "Un outil se remplace ; or on cherche ses mots avec d'autres mots." },
    { notion: "magiques", f: "Les « fonctions magiques » (Freud) ?", b: "Agir sur l'état psychologique d'autrui : joie, tristesse, colère, peur, dégoût." },
    { notion: "absence", f: "Ce qui n'est plus, pas encore, pas du tout ?", b: "Le passé, le futur, l'imaginaire : le langage fait exister mentalement l'absent." },
    { notion: "austin", f: "Austin ?", b: "Quand dire, c'est faire : le langage performatif (le mariage)." },
    { notion: "ordre-pouvoir", f: "Signifiante et directive ?", b: "La parole transmet un sens et oriente l'action (« Range ta chambre », l'ordre militaire)." },
    { notion: "anteriorite", f: "La pensée précède-t-elle le langage ?", b: "Hypothèse réfutée : on cherche ses mots avec d'autres mots." },
    { notion: "dialogue-ame", f: "Platon et la pensée ?", b: "« La pensée est un discours que l'âme se tient à elle-même. »" },
    { notion: "leibniz", f: "Leibniz ?", b: "Un « alphabet des pensées humaines », langage universel et univoque ; échec, mais logique et binaire." },
    { notion: "hegel-ineffable", f: "Hegel et l'ineffable ?", b: "« L'ineffable est la pensée obscure, la pensée à l'état de fermentation. »" },
    { notion: "etiquettes", f: "Bergson, Le Rire ?", b: "Nous lisons les étiquettes collées sur les choses au lieu de les voir." },
    { notion: "social", f: "Les deux solutions de Bergson ?", b: "Enrichir son vocabulaire et ses connaissances ; utiliser le langage métaphorique." },
    { notion: "nietzsche", f: "Nietzsche et le langage ?", b: "Le concept simplifie ; risque d'aliénation ; penser à la manière des poètes." },
    { notion: "orwell", f: "La novlangue ?", b: "1984 : réduire le vocabulaire pour réduire la pensée critique ; contrôler aussi l'histoire." },
    { notion: "signe", f: "Signifiant et signifié ?", b: "La forme du signe (sons, lettres) et le sens qui lui est associé." },
    { notion: "cratyle", f: "Nature ou convention ?", b: "Surtout convention : il faut une communauté des signes (Cratyle)." },
    { notion: "wittgenstein", f: "Wittgenstein ?", b: "Les jeux de langage : le sens vient des usages ; laisser les choses « en leur état »." },
    { notion: "mots-choses", f: "Parler, définition ?", b: "Dire quelque chose à quelqu'un sur quelque chose : une activité signifiante et relationnelle." }
  ]);

  /* Sujets de dissertation */
  add("build", [
    { part: 2, ns: ["communication", "pas-outil", "magiques", "austin"], q: "Le langage n'est-il qu'un outil de communication ?",
      els: [
        { t: "Toute société repose sur l'échange, et le premier échange est la communication", ok: true },
        { t: "Mais un outil se remplace ; or on cherche ses mots avec d'autres mots", ok: true },
        { t: "Le langage agit sur autrui : les fonctions magiques (Freud)", ok: true },
        { t: "Certaines paroles sont des actes : le performatif (Austin)", ok: true },
        { t: "Les abeilles ont un langage aussi riche que le nôtre", ok: false, why: "Contraire au cours : communiquer n'est pas nécessairement parler." },
        { t: "Galilée a mathématisé la chute des corps", ok: false, why: "Hors sujet ici, sauf à parler des langages artificiels." },
        { t: "Le langage ne sert qu'à transmettre des informations", ok: false, why: "C'est justement la thèse que le sujet invite à dépasser." }
      ],
      prob: "Si le langage n'était qu'un moyen de transmettre des informations, pourquoi agit-il sur nous et sur notre pensée ?",
      plan: ["Le langage est d'abord un instrument de communication : échange, transmission, lien social.", "Mais ce n'est pas un outil remplaçable : on cherche ses mots avec des mots.", "C'est aussi un pouvoir : fonctions magiques (Freud), évocation (Mallarmé), performatif (Austin)."],
      cit: "Un monde parlé et parlant." },
    { part: 1, ns: ["comm-animale", "abeilles", "productivite", "instrument-universel"], q: "Les animaux ont-ils un langage ?",
      els: [
        { t: "De nombreux animaux communiquent : sons, ultrasons, infrasons, signaux", ok: true },
        { t: "Les abeilles transmettent direction et distance par une danse (von Frisch)", ok: true },
        { t: "La communication animale est en grande partie biologiquement déterminée", ok: true },
        { t: "Le langage humain est appris, productif, ouvert à tout sujet (Descartes)", ok: true },
        { t: "Le chien comprend le sens conceptuel des mots", ok: false, why: "Il associe un son et une action." },
        { t: "Orwell et la novlangue", ok: false, why: "Hors sujet : domination politique." },
        { t: "Les animaux ne communiquent pas du tout", ok: false, why: "Le cours montre une communication animale parfois très complexe." }
      ],
      prob: "Si les animaux échangent des informations, suffit-il de communiquer pour parler ?",
      plan: ["Les animaux communiquent, parfois de façon complexe : sons, cétacés, abeilles (von Frisch).", "Mais cette communication est largement innée et limitée à quelques messages.", "Le langage humain est appris, productif, élastique : « un instrument universel » (Descartes)."],
      cit: "Cet instrument universel qui peut servir en toutes sortes de rencontres." },
    { part: 3, ns: ["anteriorite", "inseparable", "dialogue-ame", "hegel-ineffable"], q: "Peut-on penser sans les mots ?",
      els: [
        { t: "Une même pensée s'exprime en plusieurs langues : elle semble les précéder", ok: true },
        { t: "Mais on cherche ses mots avec d'autres mots : on ne sort pas du langage", ok: true },
        { t: "Platon : la pensée est un discours que l'âme se tient à elle-même", ok: true },
        { t: "Hegel : l'ineffable n'est qu'une pensée obscure, en fermentation", ok: true },
        { t: "Les images mentales suffisent à exprimer toute idée abstraite", ok: false, why: "Le dessin est plus long et plus limité pour les relations complexes." },
        { t: "Austin et le mariage", ok: false, why: "Argument sur l'action du langage, pas sur la pensée." },
        { t: "Le langage n'est qu'un outil extérieur à la pensée", ok: false, why: "Le cours montre qu'il participe à la structure même de la pensée." }
      ],
      prob: "La pensée existe-t-elle avant les mots qui l'expriment, ou n'existe-t-elle vraiment qu'en eux ?",
      plan: ["On peut croire à une pensée antérieure : plusieurs langues, recherche des mots.", "Mais on cherche ses mots avec des mots : pensée et langage sont inséparables (Platon).", "Sans mots, la pensée reste obscure (Hegel) : il faut forger son vocabulaire."],
      cit: "La pensée est un discours que l'âme se tient à elle-même." },
    { part: 3, ns: ["hegel-ineffable", "etiquettes", "nietzsche", "social"], q: "Les mots trahissent-ils la pensée ?",
      els: [
        { t: "On peine parfois à trouver la formulation adéquate : le langage peut trahir", ok: true },
        { t: "Mais cette difficulté montre que pensée et langage sont liés (Hegel)", ok: true },
        { t: "Bergson : les mots sont des étiquettes qui banalisent la vie intérieure", ok: true },
        { t: "Nietzsche : le concept simplifie, d'où le risque d'aliénation", ok: true },
        { t: "La pensée la plus profonde est celle qu'on ne peut pas dire", ok: false, why: "Pour Hegel, l'ineffable est une pensée obscure." },
        { t: "La danse des abeilles", ok: false, why: "Hors sujet." },
        { t: "Il n'y a aucun remède aux limites du langage", ok: false, why: "Vocabulaire, métaphore, écriture poétique (Bergson, Nietzsche)." }
      ],
      prob: "Si l'on ne pense qu'avec des mots, comment ces mots pourraient-ils trahir ce que l'on pense ?",
      plan: ["Le langage semble trahir : hésitations, imprécisions, malentendus.", "Pourtant la pensée a besoin des mots pour devenir claire (Hegel, l'ineffable).", "Ils trahissent surtout le singulier (Bergson, Nietzsche) : d'où vocabulaire et métaphore."],
      cit: "Nous ne voyons pas les choses mêmes, nous nous bornons le plus souvent à lire les étiquettes collées sur elles." },
    { part: 2, ns: ["austin", "ordre-pouvoir", "magiques", "absence"], q: "Parler, est-ce agir ?",
      els: [
        { t: "Les mots provoquent des réactions : les fonctions magiques (Freud)", ok: true },
        { t: "Austin : certaines paroles sont des actes (le mariage)", ok: true },
        { t: "Un ordre fait faire : « Range ta chambre », l'ordre militaire", ok: true },
        { t: "La parole est signifiante et directive", ok: true },
        { t: "Parler, c'est seulement décrire le monde", ok: false, why: "C'est la thèse qu'Austin remet en cause." },
        { t: "Leibniz et le binaire", ok: false, why: "Hors sujet." },
        { t: "Les mots n'ont aucun effet sur les autres", ok: false, why: "Contraire au cours." }
      ],
      prob: "La parole se contente-t-elle de dire le monde, ou peut-elle le transformer ?",
      plan: ["Parler semble d'abord dire : communiquer, transmettre des informations.", "Mais les mots agissent sur autrui : émotions (Freud), évocation (Mallarmé), persuasion.", "Certaines paroles sont des actes : performatif (Austin), ordres ; la parole est un pouvoir."],
      cit: "Par le langage, on peut non seulement dire quelque chose, mais aussi faire quelque chose." },
    { part: 4, ns: ["orwell", "ordre-pouvoir", "hegel-ineffable", "social"], q: "Maîtriser la langue, est-ce maîtriser la pensée ?",
      els: [
        { t: "Plus le vocabulaire est riche, plus on peut préciser sa pensée", ok: true },
        { t: "Contrôler les mots, c'est contrôler les catégories de pensée (Orwell)", ok: true },
        { t: "La langue s'impose à nous : notre pensée en dépend (Bergson)", ok: true },
        { t: "Le choix des mots oriente la perception, même en démocratie", ok: true },
        { t: "La pensée est totalement indépendante des mots", ok: false, why: "Le cours montre qu'elle en est inséparable." },
        { t: "Les abeilles indiquent la distance de la nourriture", ok: false, why: "Hors sujet." },
        { t: "Maîtriser les mots, c'est maîtriser les choses", ok: false, why: "Il ne faut pas confondre le mot et la chose." }
      ],
      prob: "Si la pensée dépend du langage, celui qui maîtrise la langue maîtrise-t-il sa pensée, ou celle des autres ?",
      plan: ["Maîtriser la langue permet de mieux penser : vocabulaire, clarté (Hegel).", "Mais la langue s'impose à nous et peut nous enfermer (Bergson, Nietzsche).", "Contrôler la langue des autres, c'est pouvoir dominer leur pensée (Orwell, manipulation)."],
      cit: "Réduire les possibilités du langage, c'est réduire les possibilités de la pensée." },
    { part: 3, ns: ["leibniz", "formel", "wittgenstein", "cratyle"], q: "Une langue parfaite est-elle possible ?",
      els: [
        { t: "Leibniz rêve d'un alphabet des pensées humaines, univoque", ok: true },
        { t: "Les langages formels (mathématiques) sont rigoureux et précis", ok: true },
        { t: "Mais les langues naturelles expriment ironie, émotions, nuances", ok: true },
        { t: "Wittgenstein : décrire le langage tel qu'il existe, pas fabriquer une langue parfaite", ok: true },
        { t: "Babel prouve qu'une seule langue supprime tout malentendu", ok: false, why: "Même dans une seule langue, on se comprend mal." },
        { t: "Le chien qui s'assoit", ok: false, why: "Hors sujet." },
        { t: "Leibniz a réussi à créer son langage universel", ok: false, why: "Il n'a pas réussi." }
      ],
      prob: "Une langue sans ambiguïté supprimerait-elle les malentendus, ou appauvrirait-elle ce que nous avons à dire ?",
      plan: ["Le rêve d'une langue parfaite : Leibniz, contre la confusion de Babel.", "Les langages formels sont précis (Galilée), mais rigides et limités.", "Les langues naturelles sont plastiques et vivantes : Wittgenstein invite à les décrire plutôt qu'à les remplacer."],
      cit: "Laisser les choses « en leur état »." },
    { part: 4, ns: ["etiquettes", "mots-choses", "absence", "cratyle"], q: "Les mots nous éloignent-ils des choses ?",
      els: [
        { t: "Le mot rend présent ce qui est absent (Mallarmé)", ok: true },
        { t: "Bergson : nous lisons des étiquettes au lieu de voir les choses", ok: true },
        { t: "Le lien entre le mot et la chose est conventionnel (Cratyle)", ok: true },
        { t: "Le langage est un pouvoir de symbolisation et de manifestation (Aristote)", ok: true },
        { t: "Le mot « pommier » est un pommier", ok: false, why: "Le mot n'est pas la chose." },
        { t: "Le fordisme", ok: false, why: "Hors sujet." },
        { t: "Le langage adamique prouve que tous les mots révèlent la nature des choses", ok: false, why: "C'est une hypothèse que le cours discute avec Platon." }
      ],
      prob: "Le langage nous donne-t-il accès aux choses, ou les remplace-t-il par des signes ?",
      plan: ["Les mots nous détachent des choses : ils les symbolisent en leur absence (Mallarmé).", "Ils peuvent même nous les cacher : étiquettes (Bergson), concepts (Nietzsche).", "Mais ils les manifestent à l'esprit : symbolisation (Platon), manifestation (Aristote)."],
      cit: "Le logos, s'il ne manifeste pas, n'accomplira pas son œuvre propre." },
    { part: 3, ns: ["social", "nietzsche", "etiquettes", "cratyle"], q: "Ma pensée m'appartient-elle si je pense avec les mots de tous ?",
      els: [
        { t: "La langue est une réalité sociale qui s'impose à nous", ok: true },
        { t: "Bergson : ma pensée est-elle aussi personnelle que je le crois ?", ok: true },
        { t: "Nietzsche : penser avec des concepts établis, c'est risquer l'aliénation", ok: true },
        { t: "Vocabulaire et métaphore permettent une pensée plus personnelle", ok: true },
        { t: "Chacun décide seul du sens des mots", ok: false, why: "Il faut une communauté des signes (Cratyle)." },
        { t: "Austin et le performatif", ok: false, why: "Hors sujet." },
        { t: "Les mots nous appartiennent car nous les avons inventés", ok: false, why: "Nous héritons d'une langue qui existait avant nous." }
      ],
      prob: "Si je pense avec des mots reçus, ma pensée peut-elle encore être vraiment la mienne ?",
      plan: ["La langue est reçue : elle s'impose à nous et normalise la pensée (Bergson).", "Le risque est l'aliénation : penser selon des catégories qu'on n'a pas créées (Nietzsche).", "On peut pourtant se l'approprier : vocabulaire, métaphore, écriture poétique."],
      cit: "Nous ne voyons pas les choses mêmes, nous nous bornons le plus souvent à lire les étiquettes collées sur elles." }
  ]);

  /* ---------------- RÉGLAGES ---------------- */
  const unit = { one: "partie", many: "parties", fem: true };
  const exam = { kind: "évaluation de philosophie", format: "une dissertation ou une explication de texte" };
  const plan = {
    defaultRead: [],
    priority: [3, 2, 1, 4],
    essOrder: [2, 1, 4],
    fullOrder: [3, 2, 1, 4],
    why: {
      1: "Homo faber, Homo loquens, les abeilles, Descartes : la base de tout sujet sur l'homme et l'animal.",
      2: "Communiquer, agir, faire exister l'absent, Austin : le cœur des sujets « Parler, est-ce agir ? ».",
      3: "Pensée et langage : Platon, Leibniz, Hegel, Bergson, Nietzsche. La partie la plus riche pour la dissertation.",
      4: "Les annexes : Orwell, le signe, le Cratyle, Wittgenstein, Foucault. Utiles pour enrichir un plan."
    }
  };
  const overview = {
    title: "Le langage en trois questions",
    intro: "Le langage n'est-il qu'un outil de communication ? Le cours répond en trois temps : ce qui distingue la parole humaine, ce que fait le langage, et ce qu'il fait à la pensée. Les annexes ouvrent sur le pouvoir, la science et les mots face aux choses.",
    boxes: [
      { t: "Le fil rouge", b: "Communiquer n'est pas parler ; parler, c'est aussi agir ; et penser, c'est déjà parler. Les mots, nécessaires à la pensée, peuvent pourtant la trahir ou l'enfermer." },
      { t: "Le piège numéro un", b: "Confondre communication (les abeilles en ont une) et langage humain (appris, productif, ouvert à tout sujet)." }
    ]
  };
  const tips = [
    "Pour chaque argument, cite un auteur et un exemple du cours : les abeilles, le mariage, « Range ta chambre », la fleur de Mallarmé, la novlangue…",
    "Distingue toujours communication et langage, signifiant et signifié, le mot et la chose.",
    "Pour un sujet sur la pensée : l'hypothèse de l'antériorité, puis sa réfutation (chercher ses mots avec des mots), puis Hegel et les limites (Bergson, Nietzsche).",
    "Annonce une problématique en une phrase, puis deux ou trois parties qui y répondent.",
    "Termine par une nuance : le langage est à la fois condition et limite de la pensée."
  ];

  return { unit, exam, plan, overview, tips, parts, course, notions, exercises };
})());
