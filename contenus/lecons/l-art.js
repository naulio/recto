/* Recto · Leçon de philosophie : L'art.
   Cours remis au propre à partir du cours de la classe : mêmes idées, mêmes auteurs, mêmes exemples.
   Les rares ajouts sont signalés comme « Complément ». Les exercices ne portent que sur le cours. */
Recto.add("l-art", (function () {

  const parts = [
    { n: 0, roman: "", name: "Introduction", label: "Introduction", title: "Qu'est-ce que l'art ?",
      metaphor: "", essence: "L'art et la réalité : imiter, embellir, transformer ou dénoncer ?" },
    { n: 1, roman: "I", name: "Partie I", label: "Le critère artistique", title: "Qu'est-ce qui fait une œuvre d'art ?",
      metaphor: "Créer, maîtriser, transmettre", essence: "La technique ne suffit pas ; l'artiste ne maîtrise pas tout ; l'œuvre vit par son public." },
    { n: 2, roman: "II", name: "Partie II", label: "Le goût", title: "Le beau et le goût",
      metaphor: "Laid, beau, goût", essence: "L'art peut montrer le laid et le banal ; le beau est multiple ; le goût s'éduque." },
    { n: 3, roman: "III", name: "Partie III", label: "Art et réalité", title: "L'art imite-t-il la réalité ?",
      metaphor: "Imiter, représenter", essence: "Imiter n'est pas copier ; l'art représente et symbolise : une idée dans le sensible." }
  ];

  /* ---------------- LE COURS, PAGE PAR PAGE ---------------- */
  const course = [
    { id: "intro", part: 0, sec: "Introduction", title: "Qu'est-ce que l'art ?",
      lead: "L'art pose d'abord la question de son rapport à la réalité : une œuvre peut représenter un paysage, une personne, un événement, une émotion. Mais se contente-t-elle de reproduire le réel ?",
      body: [
        "Quel est le lien entre l'art et la réalité ? L'art doit-il simplement *imiter* la réalité ? Doit-il au contraire l'*embellir* ? Peut-il aussi la *transformer* ou la *dénoncer* ?",
        "On peut présenter l'art comme une imitation de la réalité, mais une imitation qui peut aussi la modifier ou l'embellir. Et il n'est pas évident que l'art ait pour seule fonction de rendre les choses plus belles : une œuvre peut chercher à *dénoncer une réalité*.",
        ["*I. Le critère artistique* : qu'est-ce qui distingue une œuvre d'un objet ordinaire ?", "*II. Le goût* : la laideur, les formes du beau, l'énigme du goût.", "*III. Art et réalité* : imiter, représenter."]
      ],
      side: [
        { k: "ex", w: "Les quatre verbes du cours", t: "Imiter · embellir · transformer · dénoncer. Ils reviennent dans beaucoup de sujets." }
      ],
      key: "Le rapport entre l'art et la réalité est la première difficulté : l'art imite, mais il peut aussi modifier, embellir ou dénoncer.",
      ns: ["art-realite"] },

    /* ---------- I. A ---------- */
    { id: "technique", part: 1, sec: "A. Créer et produire", title: "La technique : nécessaire, mais pas suffisante",
      lead: "Qu'y a-t-il de plus dans l'art que dans la technique ? Tout art repose sur un savoir-faire, mais aucun savoir-faire ne suffit à faire une œuvre.",
      body: [
        "Un peintre maîtrise les techniques de la peinture, un musicien les techniques musicales, un écrivain la langue et l'écriture. Le mot le dit : *art* vient du latin *ars*, savoir-faire, et le grec *technè* désigne à la fois la technique et l'art. L'*artisan* est celui qui possède un savoir-faire. Art et technique ne sont donc pas opposés.",
        "Mais tout le monde peut apprendre à écrire sans être écrivain, et savoir dessiner ne fait pas un peintre. La technique est une *condition nécessaire* de l'art, pas une *condition suffisante*.",
        "*Miró* cherche parfois la simplicité et l'innocence du dessin d'enfant. Pour un artiste très maîtrisé, y parvenir volontairement est difficile : même quand il s'éloigne de la technique, elle reste présente. L'artiste l'utilise, la transforme ou s'en détache *volontairement*."
      ],
      side: [
        { k: "def", w: "Ars / technè", t: "En latin et en grec, un même mot pour l'art et la technique : le savoir-faire." },
        { k: "ex", w: "Joan Miró, peintre espagnol (XXᵉ siècle)", t: "Retrouver la naïveté du dessin d'enfant suppose une grande maîtrise." }
      ],
      key: "Technique → nécessaire. Technique seule → insuffisante. L'artiste est un artisan, mais pas seulement : l'œuvre transcende la maîtrise technique.",
      ns: ["technique"] },

    { id: "kant-liberal", part: 1, sec: "A. Créer et produire", title: "Kant : l'art et le métier",
      lead: "Qu'est-ce qui distingue vraiment la création artistique de la simple production technique ? Kant oppose l'activité artistique au métier.",
      body: [
        "Dans la *Critique de la faculté de juger*, Kant écrit que l'art est « libéral » et le métier « mercenaire ». Le métier produit quelque chose selon des règles techniques, ou pour gagner sa vie ; l'art ne se définit pas ainsi.",
        "Kant insiste sur le *désintéressement* : l'activité artistique ne se définit pas par la recherche d'un résultat pratique ni par le fait de gagner de l'argent.",
        "L'artiste peut évidemment vivre de son art ; mais ce n'est pas ce qui définit l'activité artistique elle-même."
      ],
      side: [
        { k: "q", t: "L'art est dit libéral, le métier est dit mercenaire.", a: "Kant, Critique de la faculté de juger" },
        { k: "def", w: "Désintéressé", t: "Qui ne vise ni un résultat pratique ni le profit." }
      ],
      key: "L'art est une activité libre et désintéressée ; le métier vise un résultat utile ou un salaire.",
      ns: ["liberal"] },

    { id: "danto", part: 1, sec: "A. Créer et produire", title: "Danto : une certaine théorie de l'art",
      lead: "Ce qui distingue un objet ordinaire d'une œuvre d'art ne se trouve pas forcément dans l'objet lui-même.",
      body: [
        "Le philosophe américain *Arthur Danto* explique que ce qui fait la différence entre une boîte de Brillo ordinaire et une œuvre d'art qui consiste en une boîte de Brillo, c'est « une certaine théorie de l'art ».",
        "*Andy Warhol* : une boîte de Brillo est un objet du quotidien ; présentée dans le cadre de l'art, elle peut devenir une œuvre. *Duchamp* et son urinoir : un objet ordinaire est considéré comme une œuvre alors qu'il n'a pas été fabriqué comme tel.",
        "Ce qui fait l'œuvre n'est donc pas nécessairement sa beauté, son utilité, sa matière, ou simplement sa forme. Il faut aussi prendre en compte *la manière dont l'objet est pensé et interprété dans le cadre de l'art*. Danto nous conduit alors vers celui qui crée l'œuvre : l'artiste."
      ],
      side: [
        { k: "q", t: "Ce qui fait la différence entre une boîte de Brillo et une œuvre d'art qui consiste en une boîte de Brillo, c'est une certaine théorie de l'art.", a: "Arthur Danto, Philosophie analytique et esthétique" }
      ],
      key: "Ce qui fait l'œuvre, ce n'est pas l'objet seul : c'est la manière dont il est pensé et interprété dans le cadre de l'art.",
      ns: ["danto"] },

    /* ---------- I. B ---------- */
    { id: "intention", part: 1, sec: "B. Les conditions de l'artiste", title: "L'artiste maîtrise-t-il son œuvre ?",
      lead: "Si le statut de l'œuvre dépend de son créateur, il faut s'interroger sur l'artiste : parvient-il à produire ce qu'il avait l'intention de produire ?",
      body: [
        "*1. Une idée préalable.* Un peintre peut décider de peindre un coucher de soleil : il observe ce qu'il veut représenter et utilise la peinture comme un moyen. L'art devient un *moyen de parvenir à une fin déterminée par l'artiste*. C'est le cas des *travaux de commande* : longtemps, des rois, des nobles ou de riches commanditaires imposaient leurs demandes ; l'artiste gardait une certaine liberté dans la manière.",
        "*2. Une théorie ou des règles.* L'artiste peut se donner une méthode. *Baudelaire* a traduit le poète américain *Edgar Allan Poe* ; or traduire mot à mot ne conserve ni le style, ni le rythme, ni l'effet produit sur le lecteur. Pour rendre en français un effet aussi proche que possible, il élabore ce qu'il appelle la « *théorie de l'effet* »."
      ],
      side: [
        { k: "def", w: "Travaux de commande", t: "Œuvres réalisées à la demande d'un commanditaire qui impose certaines exigences." },
        { k: "ex", w: "Baudelaire traduit Poe", t: "Des moyens précis pour une fin : rendre au mieux le style et l'effet de l'œuvre de Poe." }
      ],
      key: "L'artiste peut viser une fin précise et se donner des règles pour l'atteindre.",
      ns: ["intention"] },

    { id: "holderlin", part: 1, sec: "B. Les conditions de l'artiste", title: "L'écart entre l'intention et le résultat",
      lead: "Même s'il sait ce qu'il veut et maîtrise sa technique, l'artiste peut ne pas parvenir à le réaliser exactement.",
      body: [
        "*3. L'écart.* Un peintre a une image très précise d'un coucher de soleil, mais le tableau obtenu n'est « pas encore ça ». L'artiste peut être confronté à un écart entre *l'œuvre telle qu'il la pense* et *l'œuvre telle qu'il parvient à la réaliser*. Cela concerne tous les arts : peinture, littérature, musique, théâtre, cinéma.",
        "*4. Hölderlin.* La difficulté est flagrante en littérature, car le langage a une grande *plasticité* : une même idée peut se formuler de nombreuses manières. Hölderlin a voulu écrire un *poème parfait*. Mais à chaque formulation trouvée, une autre, meilleure peut-être, restait possible. Il s'est consacré pendant des années à ce projet sans jamais juger le résultat parfaitement satisfaisant."
      ],
      side: [
        { k: "ex", w: "Le poème parfait", t: "Plusieurs formulations peuvent exprimer une même idée, et il est impossible de savoir avec certitude laquelle est absolument parfaite." }
      ],
      key: "L'artiste peut savoir ce qu'il veut réaliser sans parvenir à le réaliser exactement, malgré une grande maîtrise technique.",
      ns: ["ecart"] },

    { id: "leonard", part: 1, sec: "B. Les conditions de l'artiste", title: "La maîtrise technique, condition de la liberté",
      lead: "La technique est d'abord une barrière. Mais plus l'artiste la maîtrise, plus il peut être libre dans sa création.",
      body: [
        "*5.* Pour créer, l'artiste doit maîtriser les moyens propres à son art : le pinceau, l'instrument, la sculpture. Au départ, la technique est presque un « interdit » : il ne parvient pas encore à faire ce qu'il veut, il a tout à apprendre, et c'est long, difficile, parfois pénible.",
        "*6. Léonard de Vinci* dit de la perspective qu'elle est « la bride et le gouvernail » de la peinture. La bride dirige le cheval, le gouvernail dirige le bateau : la perspective impose des règles (proportions, distances, profondeur), mais sa maîtrise permet au peintre de *diriger sa peinture*. Une fois maîtrisée, la technique devient un « gouvernail » : l'artiste fait faire à la matière ce qu'il veut. Cela vaut pour tous les arts."
      ],
      side: [
        { k: "q", t: "La perspective est la bride et le gouvernail dans la peinture.", a: "Léonard de Vinci" },
        { k: "plus", w: "Bilan de la partie B", t: "La condition de l'artiste ne suffit pas à distinguer l'objet d'art de l'objet du quotidien." }
      ],
      key: "La maîtrise technique permet à l'artiste de gouverner son œuvre : la contrainte devient un moyen de liberté.",
      ns: ["bride"] },

    /* ---------- I. C ---------- */
    { id: "infinite", part: 1, sec: "C. L'infinité de l'œuvre", title: "L'œuvre vit par son public",
      lead: "L'œuvre ne s'arrête jamais, même quand l'artiste y a mis un point final : quel que soit son contrôle, il le perd une fois l'œuvre livrée au public.",
      body: [
        "Une chanson, un livre, une peinture paraît terminée au point final. Mais elle continue d'exister parce que le public la prend en charge. Une œuvre n'existe qu'à condition que le public la fasse vivre : sans public, son histoire s'arrête.",
        "*1. Une œuvre vit par son interprétation.* Les symphonies de *Schubert* (XIXᵉ siècle) sont encore jouées, comme Mozart, Beethoven ou Chopin ; sans cela, Schubert pourrait rejoindre les oubliés de l'histoire de l'art. On regarde encore Léonard de Vinci et Michel-Ange ; on joue encore *Shakespeare* et *Molière*.",
        "Mais chaque interprétation est différente : instruments, son, rythme, tempo, intonations des acteurs ont changé depuis la création. Cela ne signifie pas nécessairement qu'on trahit l'œuvre."
      ],
      side: [
        { k: "def", w: "Infinité de l'œuvre", t: "L'œuvre continue d'exister après le point final, parce qu'elle est prise en charge par le public." }
      ],
      key: "Une œuvre ne vit qu'à condition d'être toujours interprétée, jouée, vue ou lue.",
      ns: ["interpretation"] },

    { id: "rimbaud", part: 1, sec: "C. L'infinité de l'œuvre", title: "Tous les sens possibles",
      lead: "Chaque interprétation est une nouvelle manière de comprendre l'œuvre : elle peut l'enrichir de nouveaux sens.",
      body: [
        "*2.* Arthur Rimbaud, dans la lettre dite du « voyant », où il expose sa conception du poète, veut qu'un poème soit « pris dans tous les sens possibles ». Un texte peut donc être interprété différemment de ce que son auteur voulait dire.",
        "Mais il faut décortiquer la formule. « Dans tous les sens » : il existe plusieurs possibilités de sens. « *Possibles* » : le mot est essentiel. S'il y a des sens possibles, il y a aussi des sens *qui ne sont pas possibles*. Rimbaud ne dit pas qu'on peut interpréter un texte n'importe comment.",
        "Il faut respecter au minimum la *littéralité* du texte : si un poème parle d'amour, on ne peut pas décider qu'il parle d'une vache. Une interprétation doit être sensée, apporter du sens et être justifiable à partir de l'œuvre."
      ],
      side: [
        { k: "q", t: "Un poème doit être pris dans tous les sens possibles.", a: "Rimbaud, lettre dite du « voyant »" },
        { k: "ex", w: "Méthode", t: "Expliquer une formule, c'est décortiquer ses mots et les définir un par un." }
      ],
      key: "Une multiplicité de sens possibles, mais pas une liberté totale de faire dire n'importe quoi au texte.",
      ns: ["sens-possibles"] },

    { id: "chopin-bref", part: 1, sec: "C. L'infinité de l'œuvre", title: "L'œuvre peut dépasser l'intention de son auteur",
      lead: "L'œuvre échappe à son auteur dès qu'elle devient publique : on peut en dire des choses auxquelles il n'avait jamais pensé, voire contraires à ce qu'il voulait.",
      body: [
        "*3. Chopin*, compositeur franco-polonais qui a vécu une grande partie de sa vie à Paris, ne souhaitait pas être considéré comme un musicien romantique ; il avait même envers la musique romantique un rejet comparable à celui de Mozart envers l'opéra italien. Il est pourtant devenu l'un des *archétypes* de la musique romantique.",
        "*4. Bref* : l'auteur voulait faire des sketchs drôles sur un personnage un peu perdu dans la vie parisienne. Invité à la télévision, il entend un sociologue y voir la difficulté de vivre à Paris à trente ans (solitude, travail, loyers, envie de profiter, difficulté à rencontrer les autres), le portrait du « bobo parisien ». Il n'y avait jamais pensé.",
        "L'œuvre peut être réinterprétée indéfiniment, à condition d'apporter du sens. En commentaire de texte, on ne dit pas tout ce qu'on veut : l'interprétation doit être fondée et cohérente."
      ],
      side: [
        { k: "def", w: "Archétype", t: "Ce qui représente fondamentalement ce qu'est quelque chose." }
      ],
      key: "Les interprétations peuvent aller bien au-delà de ce que l'auteur a consciemment voulu dire.",
      ns: ["echappe"] },

    { id: "valery", part: 1, sec: "C. L'infinité de l'œuvre", title: "Valéry : « Il n'y a pas de vrai sens d'un texte »",
      lead: "Puisque l'œuvre reçoit sans cesse de nouveaux sens, son sens se construit, d'une certaine manière, dans le présent.",
      body: [
        "*5.* Mozart est encore joué des siècles après sa mort. À l'inverse, *Salieri*, célèbre à son époque, est aujourd'hui bien moins connu que lui. Le public participe à la construction de l'histoire des œuvres : leur sens est celui qui leur est donné dans le présent.",
        "*6. Paul Valéry* l'affirme dans *Variété*. Cela ne veut pas dire qu'il ne faut pas tenir compte de l'auteur : il ne faut pas *réduire l'œuvre à l'intention de son auteur*. Son intention peut être prise en compte, mais elle n'est pas l'unique sens possible ; s'y arrêter, c'est réduire toutes les possibilités de sens de l'œuvre.",
        "*7. Beethoven*, *Neuvième Symphonie* (« Ode à la joie ») : selon le récit transmis par son entourage et ses biographes, des accélérations correspondraient à l'attente de retrouver une femme aimée ; arrivé trop tard, elle était partie, et la musique devient mélancolique. Un pianiste virtuose dit aussi mieux jouer une œuvre quand il connaît l'état psychologique du compositeur."
      ],
      side: [
        { k: "q", t: "Il n'y a pas de vrai sens d'un texte.", a: "Paul Valéry, Variété" }
      ],
      key: "La vie de l'auteur aide à donner du sens, sans fixer un sens unique : il n'y a pas de « réalité objective » d'une œuvre comme il y a une vérité scientifique.",
      ns: ["valery"] },

    { id: "proust-rilke", part: 1, sec: "C. L'infinité de l'œuvre", title: "Proust, Rilke : une œuvre qui dépasse l'auteur",
      lead: "Même les contresens peuvent enrichir une œuvre, et une grande œuvre semble dépasser l'humain qui l'a faite.",
      body: [
        "*8. Marcel Proust*, dans *Contre Sainte-Beuve* : les contresens que l'on fait sur une œuvre peuvent eux-mêmes être intéressants, lorsqu'ils produisent une lecture riche. Le sens d'une œuvre ne se réduit pas à ce que l'auteur voulait consciemment exprimer.",
        "*9. Rainer Maria Rilke* admirait le poète français *Jules Supervielle*. Il lui fait un compliment très fort : sa poésie est si belle qu'elle « n'aurait pu être écrite par personne ».",
        "Pourquoi est-ce un compliment ? Non pas parce que Supervielle serait le seul à pouvoir l'écrire, mais parce que cette poésie semble dépasser ce qu'un être humain est normalement capable de produire. L'œuvre devient quelque chose qui dépasse son propre auteur."
      ],
      side: [
        { k: "plus", w: "Complément : la phrase de Proust", t: "« Dans les beaux livres, tous les contresens qu'on fait sont beaux. » (Contre Sainte-Beuve)" },
        { k: "plus", w: "Bilan de la partie I", t: "Ni la technique, ni l'intention, ni la condition de l'artiste ne suffisent à définir l'œuvre : elle lui échappe et vit par son public." }
      ],
      key: "Une grande œuvre excède son auteur : elle signifie plus que ce qu'il a voulu y mettre.",
      ns: ["echappe"] },

    /* ---------- II. a ---------- */
    { id: "classique", part: 2, sec: "a. La laideur", title: "Baudelaire contre l'embellissement de la nature",
      lead: "Longtemps, l'esthétique classique a associé le beau à l'harmonie, aux proportions, à la régularité et à l'embellissement du réel. Au XIXᵉ siècle, cette conception est remise en question.",
      body: [
        "Pour l'esthétique classique, l'art doit imiter la nature sans la reproduire exactement : il l'*embellit*. Analogie : la beauté, l'harmonie et le juste ; la laideur, le désordre et l'injuste. Le laid doit donc être corrigé : l'art peut produire une réalité plus belle que la réalité.",
        "Dans son *Exposition universelle de 1855*, Baudelaire reproche au peintre *Ingres* de vouloir corriger la nature, par une « tricherie heureuse, agréable, faite en vue du plaisir des yeux ».",
        "*Le Bain turc* : pour adapter les corps à l'harmonie de la toile, Ingres allonge des bras, déplace des parties du corps, transforme les proportions. C'est ce que critique Baudelaire : l'art peut représenter la réalité telle qu'elle est, même laide, violente, disharmonieuse, dérangeante."
      ],
      side: [
        { k: "q", t: "Il croit que la nature doit être corrigée, amendée.", a: "Baudelaire, à propos d'Ingres, Exposition universelle de 1855" }
      ],
      key: "La laideur peut faire partie de l'art : ni cachée, ni supprimée, ni embellie, elle peut montrer ou dénoncer.",
      ns: ["laideur"] },

    { id: "horreur", part: 2, sec: "a. La laideur", title: "Représenter l'horreur et la violence",
      lead: "L'art n'a pas pour seule fonction de produire du plaisir : il peut nous confronter à ce que nous préférerions ne pas voir.",
      body: [
        "*Goya*, *Saturne dévorant un de ses fils* : une scène volontairement violente et inquiétante. Goya n'embellit pas le mythe, il fait ressentir l'horreur. André *Malraux* : l'art peut montrer « la part obscure » du monde.",
        "*Lautréamont*, *Les Chants de Maldoror* : contre le romantisme qui idéalise personnages, sentiments et événements, une écriture violente et provocatrice.",
        "*Le cinéma de guerre* : dans *Il faut sauver le soldat Ryan*, Spielberg filme le débarquement caméra à l'épaule pour faire ressentir le chaos ; *La Ligne rouge* de Terrence Malick montre des soldats qui obéissent à des ordres pouvant les conduire à la mort. Ces films ne glorifient pas la guerre.",
        "*La tragédie* : tragédies grecques, *Hamlet*, *Roméo et Juliette* : la mort, la vengeance, la jalousie, les passions extrêmes."
      ],
      side: [
        { k: "ex", w: "L'idée à retenir", t: "Une œuvre peut être esthétiquement remarquable tout en représentant quelque chose de terrible." }
      ],
      key: "La représentation du terrible peut elle-même avoir une valeur artistique.",
      ns: ["horreur"] },

    { id: "banal", part: 2, sec: "a. La laideur", title: "La banalité peut être représentée",
      lead: "La laideur artistique n'est pas seulement le violent ou l'horrible : c'est aussi le banal, le trivial, l'insignifiant.",
      body: [
        "*Proust et Chardin.* Dans *À la recherche du temps perdu*, un personnage va au Louvre en espérant des œuvres extraordinaires. Il découvre *Chardin*, qui peint des objets et des scènes de la vie quotidienne. Double déception : il attendait l'extraordinaire et retrouve la banalité ; surtout, il n'avait pas compris que *la banalité elle-même pouvait être belle*.",
        "*Flaubert*, dans *Madame Bovary*, décrit très précisément la vie quotidienne de la petite bourgeoisie normande : objets, pièces, habitudes, conversations, pensées des personnages. Il cherche à pénétrer leur psychologie.",
        "Ce qui paraît insignifiant, trivial ou même laid peut avoir une forme de grandeur, parce qu'il correspond à la réalité concrète de la vie humaine."
      ],
      side: [
        { k: "q", t: "L'ignoble me plaît, c'est le sublime d'en bas.", a: "Flaubert" }
      ],
      key: "L'art peut nous apprendre à regarder autrement ce que nous voyons tous les jours.",
      ns: ["banalite"] },

    /* ---------- II. b ---------- */
    { id: "hegel", part: 2, sec: "b. Les différentes formes du beau", title: "Hegel : le beau artistique supérieur au beau naturel",
      lead: "Si l'art peut représenter le laid et le banal, la beauté ne se réduit plus aux critères classiques : il existe plusieurs formes du beau.",
      body: [
        "La beauté n'est plus forcément perfection, symétrie, harmonie, régularité, embellissement. Une œuvre peut être belle parce qu'elle est originale, étrange, surprenante, dérangeante, réaliste, imparfaite.",
        "Il faut distinguer la *beauté naturelle* (un paysage, un coucher de soleil, une fleur, une montagne) et la *beauté artistique* (peinture, sculpture, musique, littérature, cinéma, architecture). La beauté artistique doit-elle prendre la nature pour modèle ? *Hegel* défend la thèse inverse.",
        "Le beau artistique est « un produit de l'esprit » : le résultat d'une activité spirituelle et consciente. La nature peut être belle, mais elle ne produit pas volontairement sa beauté. L'artiste, lui, choisit, transforme, compose, représente et donne une signification à ce qu'il crée."
      ],
      side: [
        { k: "q", t: "Le beau artistique est supérieur au beau naturel.", a: "Hegel, Esthétique" },
        { k: "warn", t: "Hegel ne dit pas que « la nature copie l'art » : la beauté artistique ne dépend pas d'une simple copie de la nature." }
      ],
      key: "Même quand elle représente la nature, l'œuvre vaut par la manière dont l'artiste choisit, compose et donne un sens.",
      ns: ["hegel-beau"] },

    { id: "kant-beaute", part: 2, sec: "b. Les différentes formes du beau", title: "Kant : beauté libre et beauté adhérente",
      lead: "Dans la *Critique de la faculté de juger*, Kant précise cette diversité des formes du beau.",
      body: [
        "*A. La beauté libre* ne dépend pas d'un concept précis de ce que l'objet doit être. Elle laisse une plus grande liberté dans l'appréciation et dans la création : deux artistes peuvent observer exactement la même chose et produire deux œuvres très différentes. Cette liberté n'est pas l'absence totale de règles : l'artiste doit aussi maîtriser une technique.",
        "*B. La beauté adhérente* dépend davantage d'un concept de ce que l'objet doit être : elle suppose des normes ou des conventions. La *statuaire grecque* respecte des règles de proportion du corps humain : la beauté dépend en partie du respect d'un modèle.",
        "*Beauté et conventions.* La beauté adhérente peut être rapprochée d'une beauté conventionnelle : une société ou une époque attend certaines formes. Certaines productions musicales commerciales utilisent des codes reconnaissables pour correspondre aux goûts du public ; mais les artistes peuvent aussi rompre avec ces conventions."
      ],
      side: [
        { k: "def", w: "Libre / adhérente", t: "Libre : sans concept de ce que l'objet doit être. Adhérente : jugée selon un concept, un modèle, une norme." }
      ],
      key: "Le beau peut être libre ou dépendre d'un modèle : il n'y a pas une seule norme de beauté.",
      ns: ["libre-adherente"] },

    { id: "bizarre", part: 2, sec: "b. Les différentes formes du beau", title: "Baudelaire : le beau est toujours bizarre",
      lead: "Baudelaire propose une conception beaucoup plus ouverte du beau : multiple, étrange, imprévisible.",
      body: [
        "Le beau peut comporter une part d'étrangeté, de nouveauté, d'imprévisibilité, de bizarrerie : une œuvre n'a pas besoin de respecter l'harmonie traditionnelle pour être belle.",
        "*L'artiste ne maîtrise pas toujours son œuvre* : elle peut prendre une direction inattendue. *Flaubert* se laisse guider par la beauté de la langue ; *Léonard de Vinci* a travaillé très longtemps sur *La Joconde* et l'a constamment perfectionnée. L'œuvre est le résultat d'un *processus* (modifications, recherches, reprises), pas l'exécution mécanique d'une idée déterminée d'avance.",
        "*Le surréalisme* va plus loin : faire surgir des associations inattendues, dépasser les règles ordinaires de la représentation. Les surréalistes parlent de « *beauté convulsive* » : une beauté qui naît d'une rencontre imprévisible entre des éléments qui n'étaient pas destinés à être associés."
      ],
      side: [
        { k: "q", t: "Le beau est toujours bizarre.", a: "Baudelaire" },
        { k: "q", t: "Le beau est multiforme et versicolore.", a: "Baudelaire" }
      ],
      key: "L'art ne consiste pas toujours à maîtriser parfaitement la réalité : il laisse place à l'inattendu.",
      ns: ["bizarre"] },

    { id: "plaisir", part: 2, sec: "b. Les différentes formes du beau", title: "Un plaisir paradoxal, un goût qui se forme",
      lead: "Une œuvre peut nous plaire alors que son contenu est triste ou terrible. Et une œuvre nouvelle peut d'abord nous déplaire.",
      body: [
        "*Kant* permet de comprendre ce *plaisir négatif* : nous pouvons être bouleversés par une tragédie, une représentation de la mort, de la souffrance, une scène de guerre, et pourtant trouver l'œuvre belle. Il faut distinguer *la beauté de l'œuvre* et *le caractère agréable ou désagréable de ce qu'elle représente*.",
        "*Le goût n'est pas immédiatement donné : il se forme.* Une œuvre nouvelle peut d'abord déplaire parce que nous ne connaissons pas encore son langage.",
        "Les *impressionnistes* ont été mal accueillis : ils rompaient avec les habitudes, le public a dû apprendre à regarder autrement. Les premiers spectateurs du *cinéma* ont dû apprendre à comprendre les images en mouvement. Nous devons parfois éduquer notre regard."
      ],
      side: [
        { k: "q", t: "Nos yeux ne sont pas encore faits pour elles.", a: "Abel Gance, à propos des images de cinéma" }
      ],
      key: "Une œuvre peut représenter quelque chose de terrible tout en étant artistiquement remarquable ; et le goût s'apprend.",
      ns: ["plaisir-negatif"] },

    /* ---------- II. C ---------- */
    { id: "hume", part: 2, sec: "C. L'énigme du goût", title: "Sur quoi fonder le goût ? Hume",
      lead: "Le goût est le *sentiment du bon* : une appréciation que nous portons sur un objet. Mais sur quoi se fonde-t-il ?",
      body: [
        "Il y a toujours une part de bizarrerie dans le beau : l'artiste nous pousse au-delà de ce que nous pensions aimer. Tourner en rond dans ses goûts témoigne d'une certaine petitesse de l'esprit. Il faut distinguer *le beau*, qui provoque en nous un sentiment immédiat, et *le goût* : pourquoi trouvons-nous certaines choses belles plutôt que d'autres ?",
        "*David Hume*, philosophe écossais du XVIIIᵉ siècle (*Traité de la nature humaine*), retient deux éléments : *l'objet qui provoque du plaisir*, et la *« subtile sympathie »*, un lien affectif entre l'œuvre et celui qui la regarde. Le goût est donc une *affaire de sensibilité individuelle* (plutôt que de « subjectivité », notion trop simple) : une même œuvre plaît à l'un et laisse l'autre indifférent.",
        "Problème : si le goût n'est qu'une affaire de sentiments, il se réduit à « j'aime / je n'aime pas ». C'est le *relativisme* : plus de fondement commun pour réfléchir à la valeur des œuvres."
      ],
      side: [
        { k: "q", t: "Tout objet qui tend à causer du plaisir à son possesseur est la cause propre du plaisir, plaît sûrement aux spectateurs par une subtile sympathie avec le possesseur.", a: "Hume, Traité de la nature humaine" }
      ],
      key: "Conception insuffisante : le goût n'est pas qu'une affaire de sensibilité personnelle, car il s'éduque.",
      ns: ["hume"] },

    { id: "eduque", part: 2, sec: "C. L'énigme du goût", title: "Le goût s'éduque et se transmet",
      lead: "Comment savons-nous que le goût s'éduque ? C'est simple : il évolue au cours des années.",
      body: [
        "Notre goût à cinq ans n'est pas celui d'aujourd'hui : nous avons découvert de nouvelles choses et appris à apprécier des œuvres inconnues (films, musique, et même cuisine). Rester enfermé dans les mêmes préférences limite le goût.",
        "Le goût se *transmet* : faire découvrir une œuvre à quelqu'un élargit ses connaissances. Découvrir en classe le *tombeau de Jules II* de Michel-Ange permet au moins de le connaître et de s'en faire une opinion (même si l'œuvre réelle ne produit pas la même impression qu'un petit écran de téléphone).",
        "*La musique* : des millions de personnes aiment Céline Dion parce que ses chansons ont été diffusées, partagées, transmises : une contagiosité, une sorte de « pandémie du goût ». Si l'on apprécie encore Mozart (mort à trente-deux ou trente-trois ans, très prolifique) ou Beethoven, c'est que la valeur de leur musique a été transmise à travers les siècles."
      ],
      side: [
        { k: "warn", t: "L'art n'est pas qu'une affaire d'éducation, mais il est aussi une affaire d'éducation. Et la transmission ne prouve pas la valeur : le mauvais goût se transmet aussi." }
      ],
      key: "Le goût ne se réduit pas à une sensibilité spontanée : il se construit par ce que nous apprenons et découvrons.",
      ns: ["education-gout"] },

    { id: "inculture", part: 2, sec: "C. L'énigme du goût", title: "L'inculture dessert le goût",
      lead: "Même si le goût n'est pas que le résultat de la culture, une chose est certaine : l'inculture desservira le goût.",
      body: [
        "Quelqu'un qui connaît trois chansons a un éventail de références bien plus restreint que quelqu'un qui en connaît mille. Et connaître mille artistes d'un seul style reste un champ étroit face à tous les styles qui existent. Même chose en cuisine : n'aimer qu'un plat, c'est limiter son palais.",
        "Dire qu'on n'aime pas lire après n'avoir lu que deux lignes, c'est juger sur une expérience très limitée. Il faut savoir se faire un peu violence pour aller au-delà de la superficialité de ce qu'on nous propose : non pas tout aimer, mais *découvrir avant de juger*.",
        "*Les films de super-héros* : on peut aimer *Avengers*. Un grand lecteur de comics (des milliers lus) compare les œuvres, comprend leur construction, reconnaît des histoires parues dans les comics plus de trente ans plus tôt : la connaissance des œuvres antérieures développe le jugement."
      ],
      side: [
        { k: "q", t: "Même si le goût n'est pas que le résultat de la culture, ce qui est certain, c'est que l'inculture desservira le goût.", a: "Formule du cours" }
      ],
      key: "Le goût se développe par l'expérience, la découverte et la connaissance des œuvres.",
      ns: ["education-gout"] },

    { id: "kant-gout", part: 2, sec: "C. L'énigme du goût", title: "Kant et l'énigme du goût", extra: true,
      lead: "Complément. Ton cours annonce Kant à cet endroit. Voici l'idée qu'on lui associe le plus souvent, à vérifier avec ton professeur.",
      body: [
        "Kant distingue *l'agréable* et *le beau*. Pour l'agréable (une saveur, une couleur préférée), « chacun son goût ». Mais dire « c'est beau », ce n'est pas seulement parler de soi : on attend que les autres soient d'accord.",
        "Le jugement de goût est *désintéressé* (on ne cherche pas à posséder l'objet) et prétend à l'*universalité*, sans pouvoir se démontrer par un concept : on ne prouve pas qu'une œuvre est belle, mais on en discute.",
        "C'est une réponse à l'énigme : le goût part d'un sentiment (Hume), s'éduque, et prétend pourtant valoir pour tous."
      ],
      side: [
        { k: "q", t: "Est beau ce qui plaît universellement sans concept.", a: "Kant, Critique de la faculté de juger" }
      ],
      key: "On ne démontre pas le beau, mais on peut en discuter : il prétend à l'accord de tous.",
      ns: ["kant-gout"] },

    /* ---------- III. A ---------- */
    { id: "imiter", part: 3, sec: "A. Imiter", title: "Imiter n'est pas reproduire à l'identique",
      lead: "Dans l'esthétique classique, l'art est souvent pensé comme une imitation de la nature. Mais imiter, ce n'est pas photocopier.",
      body: [
        "Imiter consiste à reprendre certaines qualités ou certains défauts d'une personne ou d'une chose pour en donner une représentation. Un imitateur accentue certains traits : une voix, un accent, une manière de marcher. Celui qui imite reste différent de celui qui est imité : l'imitation est une *production*, pas une simple photocopie du réel.",
        "L'art entretient ainsi une forme de *concurrence avec la nature*. Pour Cicéron, la nature l'emporte sur l'art, car elle produit les formes que l'artiste cherche à représenter.",
        "Cela montre que l'art et la nature sont deux réalités distinctes : si l'art était une copie parfaite, il serait impossible de les différencier."
      ],
      side: [
        { k: "q", t: "Ce que fait la main humaine dans les ouvrages de nos arts, la nature le fait avec beaucoup plus d'art encore.", a: "Cicéron, Les Stoïciens" }
      ],
      key: "L'imitation est une production : elle reprend et accentue, elle ne copie pas.",
      ns: ["imiter"] },

    { id: "platon", part: 3, sec: "A. Imiter", title: "La critique de l'imitation par Platon",
      lead: "Dans *La République*, livre X, Platon critique l'art comme une imitation trompeuse de la réalité.",
      body: [
        "L'artiste ne possède pas nécessairement la connaissance de ce qu'il représente : un peintre peut représenter un cordonnier sans connaître le métier de cordonnier. Il ne représente que l'*apparence* des choses, sans en connaître la nature.",
        "Pour Platon, l'œuvre d'art n'est qu'un « *fantôme* » : une apparence de réalité, sans accès à la vérité. Une peinture de menuisier ne permet pas de connaître le métier de menuisier. Les enfants, et ceux qui distinguent mal l'apparence de la réalité, risquent d'être trompés.",
        "Conséquence : l'art imite de façon trompeuse et nous éloigne de la vérité. Platon va jusqu'à écarter les artistes de la *cité idéale*, car leurs œuvres risquent de détourner les citoyens de la connaissance du vrai."
      ],
      side: [
        { k: "q", t: "L'art de l'imitation est assurément loin du vrai. [...] il ne touche qu'à une petite partie de chacune, et qui n'est qu'un fantôme. [...] s'il peignait un menuisier et le leur montrait de loin, il pourrait tromper au moins les enfants et les fous.", a: "Platon, La République, livre X" }
      ],
      key: "Pour Platon, l'art imite l'apparence sans connaître l'essence : il trompe et éloigne du vrai.",
      ns: ["platon"] },

    { id: "stendhal", part: 3, sec: "A. Imiter", title: "Stendhal : le roman comme miroir",
      lead: "Même une œuvre très réaliste reste une construction : le reflet n'est pas la réalité.",
      body: [
        "Stendhal, écrivain réaliste connu pour *Le Rouge et le Noir*, définit le roman comme un miroir promené le long d'un chemin. Le chemin représente la vie ; le miroir en renvoie une image. Mais le reflet n'est qu'une image : le roman représente certains aspects de la vie, il n'est pas la vie.",
        "Un film de guerre ne fait pas réellement vivre la guerre au spectateur : la représentation ne se confond jamais avec l'expérience réelle.",
        "Dans *Gladiator*, le héros est fictif et l'empereur Marc Aurèle n'a pas été assassiné par son fils Commode. Dans *Napoléon* de Ridley Scott, les tirs de canons contre les pyramides ne correspondent pas à la réalité historique. L'artiste peut modifier les événements pour construire son œuvre."
      ],
      side: [
        { k: "q", t: "Un roman, c'est un miroir que l'on promène le long d'un chemin.", a: "Stendhal" }
      ],
      key: "Une représentation, même réaliste, reste une construction de l'artiste.",
      ns: ["miroir"] },

    { id: "connaissance", part: 3, sec: "A. Imiter", title: "L'art est-il un moyen de connaissance ?",
      lead: "On ne peut reprocher à l'art d'être infidèle au réel que si l'on attend de lui une connaissance exacte.",
      body: [
        "Comme moyen de connaissance comparable aux sciences, l'art est nécessairement dépassé : les sciences reposent sur une rigueur méthodologique, rationnelle et expérimentale. Un film sur les dinosaures peut réunir des espèces qui n'ont jamais vécu à la même époque et leur prêter des comportements imaginés : c'est une construction artistique, pas une connaissance scientifique.",
        "Cela ne rend pas l'art inutile ou inférieur : il n'a pas pour fonction d'enseigner la vérité scientifique. Il peut exprimer une idée, une émotion, une expérience humaine.",
        "Pour *Hegel*, dans le monde moderne, l'art n'est plus la forme suprême de connaissance de la vérité : il est dépassé par des formes de pensée plus conceptuelles, la philosophie et les sciences."
      ],
      side: [
        { k: "q", t: "L'art reste pour nous, quant à sa suprême destination, une chose du passé.", a: "Hegel, Esthétique" },
        { k: "warn", t: "Il ne faut pas en conclure que l'art ne signifie rien : il ne se réduit pas à l'imitation, il représente et symbolise." }
      ],
      key: "L'art n'est pas une science : il exprime une idée, une émotion, une expérience humaine.",
      ns: ["connaissance"] },

    /* ---------- III. B ---------- */
    { id: "representer", part: 3, sec: "B. Représentation", title: "L'art représente sans imiter",
      lead: "Représenter, c'est rendre une réalité présente à travers une œuvre, sans être cette réalité. L'art est l'incarnation d'une idée sous une forme sensible.",
      body: [
        "L'artiste transforme une idée en une œuvre que nous pouvons percevoir : peinture, sculpture, pièce de théâtre, roman, danse, œuvre musicale. Il ne reproduit pas ce qui existe : il transforme le matériau sensible pour lui donner une signification.",
        "*Hegel* classe les arts selon leur proximité avec le *matériau sensible*. La *sculpture* est l'art le plus proche : elle travaille directement la pierre, le marbre, l'argile. La *poésie* est la plus éloignée : elle utilise le langage écrit, des signes symboliques, et des métaphores qui obligent à dépasser le sens immédiat des mots.",
        "La poésie n'est pas forcément supérieure à tous les autres arts : elle nous éloigne davantage de la matière et nous oblige à interpréter. Plus l'art s'éloigne de la matière immédiate, plus il peut exprimer des idées abstraites."
      ],
      side: [
        { k: "def", w: "Représenter", t: "Rendre une réalité présente à travers une œuvre, sans être cette réalité." },
        { k: "ex", w: "La hiérarchie de Hegel", t: "De la sculpture (la plus proche de la matière) à la poésie (la plus éloignée)." }
      ],
      key: "L'art ne se limite pas à reproduire la nature : il donne une forme sensible à une idée.",
      ns: ["representer"] },

    { id: "denaturer", part: 3, sec: "B. Représentation", title: "L'art dénature le matériau sensible",
      lead: "L'activité artistique *dénature* le matériau naturel : elle modifie sa forme première pour lui donner une nouvelle signification.",
      body: [
        ["Le sculpteur transforme une pierre pour lui donner la forme qu'il souhaite.", "Le peintre ne reproduit pas un coucher de soleil : il crée une image à partir de sa perception.", "Le réalisateur choisit les cadrages, les scènes et les dialogues.", "L'écrivain invente des personnages et des situations pour exprimer une idée."],
        "L'œuvre résulte d'une *intention artistique* : elle présente le réel non tel qu'il est, mais tel que l'artiste choisit de le représenter.",
        "Dans *L'Avare* de Molière, *Harpagon* représente et dénonce l'avarice : personnage fictif, il fait comprendre un comportement humain réel. *La Liberté guidant le peuple* de Delacroix ne représente pas seulement un événement historique : le tableau symbolise la liberté et la révolte populaire."
      ],
      side: [
        { k: "def", w: "Dénaturer", t: "Modifier la forme première d'un matériau pour lui donner une nouvelle signification." }
      ],
      key: "Un personnage fictif peut faire comprendre un comportement bien réel.",
      ns: ["representer"] },

    { id: "aristote", part: 3, sec: "B. Représentation", title: "Aristote : l'art comme création et symbolisation",
      lead: "Dans *La Poétique*, Aristote analyse la tragédie. Le grec *poiesis* signifie « création », « production » : l'art produit quelque chose de nouveau.",
      body: [
        "L'artiste ne reproduit pas simplement la réalité : il en saisit les *aspects essentiels* pour les représenter sous une forme artistique. Il peut faire comprendre une passion, un conflit, une situation humaine sans reproduire exactement un événement réel.",
        "Aristote associe la tragédie à la *catharsis* : une forme de purgation ou de clarification des émotions, notamment la *pitié* et la *crainte*. La tragédie nous fait éprouver des émotions à travers des personnages et des événements représentés, même si nous savons qu'ils ne sont pas réels.",
        "L'art peut ainsi nous faire comprendre quelque chose de l'expérience humaine sans être une reproduction fidèle de la vie."
      ],
      side: [
        { k: "def", w: "Poiesis", t: "En grec : création, production." },
        { k: "def", w: "Catharsis", t: "Purgation ou clarification des émotions, notamment la pitié et la crainte." }
      ],
      key: "L'art crée et, par la fiction, nous fait éprouver et comprendre nos émotions.",
      ns: ["aristote"] },

    { id: "goodman", part: 3, sec: "B. Représentation", title: "Goodman : l'œuvre d'art comme symbole",
      lead: "Une œuvre d'art a une signification qui dépasse sa simple apparence : elle fonctionne comme un symbole.",
      body: [
        "Dans *Manières de faire des mondes*, Nelson Goodman affirme qu'un objet devient une œuvre d'art parce qu'il fonctionne comme symbole, et tant qu'il fonctionne ainsi. L'œuvre renvoie à une idée, une émotion ou une réalité qui n'est pas directement visible.",
        "Dans *La Liberté guidant le peuple* de Delacroix, la figure de la liberté et le drapeau symbolisent la lutte collective et les idéaux politiques : le tableau ne montre pas seulement des personnes, il donne un sens à la scène.",
        "*Le Penseur* de Rodin : la posture du personnage donne une forme visible à la difficulté de penser. La sculpture est immobile et faite de matière, mais elle fait comprendre une activité intérieure."
      ],
      side: [
        { k: "q", t: "Un objet devient précisément une œuvre d'art parce que et pendant qu'il fonctionne d'une certaine façon comme symbole.", a: "Nelson Goodman, Manières de faire des mondes" }
      ],
      key: "L'art consiste à mettre une idée dans le sensible : il donne une forme perceptible à ce qui est abstrait ou intérieur.",
      ns: ["goodman"] },

    { id: "reverdy", part: 3, sec: "B. Représentation", title: "Reverdy : du réel extérieur au réel intérieur",
      lead: "L'artiste ne reproduit pas simplement ce qu'il a vu : il exprime ce que cette expérience a provoqué en lui.",
      body: [
        "Le poète *Pierre Reverdy* définit la poésie comme une transmutation. Le *réel extérieur*, c'est ce que l'artiste perçoit : un paysage, une rencontre, un événement, une sensation. Le *réel intérieur*, c'est la manière dont il vit et ressent cette expérience. Il transforme cette impression personnelle en œuvre.",
        "*La madeleine de Proust* : dans *À la recherche du temps perdu*, le goût de la madeleine fait ressurgir des souvenirs et des émotions d'enfance. Une sensation présente devient le point de départ d'un monde intérieur.",
        "La musique de *Debussy* évoque des impressions sans représenter un objet précis ; *Kandinsky* s'intéresse aux correspondances entre sensations musicales et formes picturales."
      ],
      side: [
        { k: "q", t: "L'acte magique de transmutation du réel extérieur en réel intérieur.", a: "Pierre Reverdy, définition de la poésie" },
        { k: "plus", w: "Bilan du cours", t: "L'œuvre vit par son public (I), le goût s'éduque (II), l'art représente et symbolise (III)." }
      ],
      key: "L'art donne à voir l'intériorité de l'artiste : ses impressions, ses émotions, les significations qu'il associe au monde.",
      ns: ["reverdy"] }
  ];

  /* ---------------- FICHES ---------------- */
  const notions = {
    "art-realite": { part: 0, title: "L'art et la réalité",
      essentiel: "L'art pose la question de son rapport à la réalité : une œuvre représente un paysage, une personne, un événement, une émotion, sans se contenter de les reproduire. L'art doit-il imiter, embellir, transformer ou dénoncer ?",
      retenir: ["L'art comme imitation, mais une imitation qui peut modifier ou embellir.", "L'art n'a pas pour seule fonction de rendre les choses plus belles : il peut dénoncer.", "Plan du cours : le critère artistique, le goût, art et réalité."],
      citation: "", piege: "Ne réduis pas l'art à « faire du beau » : une œuvre peut chercher à dénoncer une réalité.",
      video: "philosophie l'art et la réalité cours terminale" },
    "technique": { part: 1, title: "La technique, nécessaire mais pas suffisante",
      essentiel: "Tout art repose sur une technique (latin ars, grec technè : savoir-faire). Mais la maîtrise technique ne suffit pas à faire un artiste : l'œuvre transcende les conditions techniques de sa réalisation.",
      retenir: ["Peintre, musicien, écrivain : chacun maîtrise une technique.", "L'artisan possède un savoir-faire ; l'artiste aussi, mais pas seulement.", "Miró : retrouver la simplicité du dessin d'enfant est difficile pour un artiste maîtrisé.", "L'artiste utilise, transforme ou se détache volontairement de la technique."],
      citation: "", piege: "Art et technique ne sont pas deux réalités opposées : la technique est la condition de l'art.",
      video: "art et technique philosophie artiste artisan" },
    "liberal": { part: 1, title: "Kant : l'art et le métier",
      essentiel: "Dans la Critique de la faculté de juger, Kant oppose l'art, « libéral », au métier, « mercenaire ». L'activité artistique est désintéressée : elle ne se définit ni par un résultat pratique ni par l'argent.",
      retenir: ["Le métier produit selon des règles techniques ou pour gagner sa vie.", "Le désintéressement définit l'activité artistique.", "L'artiste peut vivre de son art : ce n'est pas ce qui le définit."],
      citation: "L'art est dit libéral, le métier est dit mercenaire.", piege: "Désintéressé ne veut pas dire que l'artiste ne doit pas être payé.",
      video: "Kant art libéral métier mercenaire" },
    "danto": { part: 1, title: "Danto : une certaine théorie de l'art",
      essentiel: "Pour Arthur Danto (Philosophie analytique et esthétique), ce qui distingue une boîte de Brillo ordinaire d'une œuvre d'art est « une certaine théorie de l'art » : la manière dont l'objet est pensé et interprété dans le cadre de l'art.",
      retenir: ["Warhol : la boîte de Brillo devient une œuvre dans le cadre de l'art.", "Duchamp et son urinoir : un objet ordinaire, non fabriqué comme œuvre.", "Ni la beauté, ni l'utilité, ni la matière, ni la forme ne suffisent.", "Danto conduit à s'intéresser à l'artiste."],
      citation: "Ce qui fait la différence entre une boîte de Brillo et une œuvre d'art qui consiste en une boîte de Brillo, c'est une certaine théorie de l'art.",
      piege: "La solution n'est pas dans l'objet lui-même.", video: "Danto Brillo Box Warhol philosophie de l'art" },
    "intention": { part: 1, title: "L'intention et les règles de l'artiste",
      essentiel: "L'artiste peut avoir une idée préalable de son œuvre (peindre un coucher de soleil, répondre à une commande) et se donner une théorie ou des règles : Baudelaire, traducteur de Poe, élabore la « théorie de l'effet ».",
      retenir: ["L'art comme moyen de parvenir à une fin déterminée par l'artiste.", "Travaux de commande : rois, nobles, riches commanditaires imposent leurs demandes.", "Traduire mot à mot perd le style, le rythme, l'effet sur le lecteur.", "Théorie de l'effet : rendre au mieux le style et l'effet de l'œuvre de Poe."],
      citation: "", piege: "Il ne s'agit pas seulement de maîtrise technique, mais de réaliser ce qu'on avait l'intention de produire.",
      video: "Baudelaire traduction Edgar Poe" },
    "ecart": { part: 1, title: "L'écart entre l'intention et le résultat",
      essentiel: "Même en sachant ce qu'il veut et en maîtrisant sa technique, l'artiste peut ne pas parvenir à le réaliser exactement (« pas encore ça »). Hölderlin veut écrire un poème parfait, mais une même idée peut se formuler d'une infinité de façons.",
      retenir: ["L'œuvre telle qu'il la pense / telle qu'il la réalise.", "Le langage a une grande plasticité.", "Hölderlin reprend et reformule son texte pendant des années.", "Impossible de savoir quelle formulation est absolument parfaite."],
      citation: "", piege: "L'insatisfaction ne vient pas d'un manque de technique : elle vient de la conscience des autres possibilités.",
      video: "Hölderlin poème parfait création artistique" },
    "bride": { part: 1, title: "La maîtrise technique, condition de la liberté",
      essentiel: "La technique est d'abord une barrière, une sorte d'« interdit » ; une fois maîtrisée, elle devient un « gouvernail ». Léonard de Vinci : la perspective est « la bride et le gouvernail » de la peinture.",
      retenir: ["Plus l'artiste maîtrise sa technique, plus il peut être libre.", "La bride dirige le cheval, le gouvernail le bateau.", "La perspective : proportions, distances, profondeur.", "Vaut pour tous les arts (musicien, acteur…)."],
      citation: "La perspective est la bride et le gouvernail dans la peinture.", piege: "La technique n'est pas seulement une contrainte : elle permet de diriger l'œuvre.",
      video: "Léonard de Vinci perspective bride et gouvernail" },
    "interpretation": { part: 1, title: "L'infinité de l'œuvre",
      essentiel: "L'œuvre ne s'arrête jamais au point final : elle continue d'exister parce que le public la prend en charge. Une œuvre ne vit qu'à condition d'être jouée, lue, vue, interprétée, et chaque interprétation est différente.",
      retenir: ["Schubert, Mozart, Beethoven, Chopin encore joués.", "Léonard de Vinci, Michel-Ange encore regardés ; Shakespeare et Molière encore joués.", "Instruments, son, rythme, intonations changent avec le temps.", "Interpréter autrement ne signifie pas trahir."],
      citation: "", piege: "« Infinité » ne veut pas dire que l'artiste n'a pas fini son œuvre.",
      video: "infinité de l'œuvre interprétation philosophie" },
    "sens-possibles": { part: 1, title: "Tous les sens possibles",
      essentiel: "Pour Rimbaud (lettre dite du « voyant »), un poème doit être « pris dans tous les sens possibles ». Mais « possibles » est essentiel : il existe aussi des sens impossibles. Il faut respecter la littéralité du texte.",
      retenir: ["Un texte peut être interprété autrement que ce que voulait l'auteur.", "Expliquer une formule : décortiquer et définir ses mots.", "Un poème d'amour ne parle pas d'une vache.", "Une interprétation sensée, justifiable à partir de l'œuvre."],
      citation: "Un poème doit être pris dans tous les sens possibles.", piege: "Multiplicité des sens, mais pas liberté totale de faire dire n'importe quoi au texte.",
      video: "Rimbaud lettre du voyant interprétation" },
    "echappe": { part: 1, title: "L'œuvre échappe à son auteur",
      essentiel: "Dès qu'elle est publique, l'œuvre reçoit des interprétations que l'auteur n'avait pas prévues : Chopin devient l'archétype de la musique romantique qu'il rejetait ; un sociologue lit dans Bref un portrait du trentenaire parisien. Proust : les contresens peuvent être riches. Rilke : une poésie qui « n'aurait pu être écrite par personne ».",
      retenir: ["Archétype : ce qui représente fondamentalement ce qu'est quelque chose.", "Bref : l'auteur n'avait jamais pensé à l'analyse du sociologue.", "Proust, Contre Sainte-Beuve : des contresens qui produisent une lecture riche.", "Rilke sur Supervielle : une œuvre qui dépasse les capacités humaines."],
      citation: "", piege: "En commentaire, il ne faut pas dire n'importe quoi : l'interprétation doit être fondée et cohérente.",
      video: "l'œuvre échappe à son auteur philosophie interprétation" },
    "valery": { part: 1, title: "Valéry : il n'y a pas de vrai sens d'un texte",
      essentiel: "Le sens d'une œuvre se construit dans le présent (Mozart est encore joué, Salieri est moins connu). Pour Valéry (Variété), il n'y a pas de vrai sens d'un texte : il ne faut pas réduire l'œuvre à l'intention de son auteur. La biographie (Beethoven) aide à interpréter sans fixer un sens unique.",
      retenir: ["Le public participe à la construction de l'histoire des œuvres.", "L'intention de l'auteur n'est pas l'unique sens possible.", "Beethoven, Neuvième Symphonie : la biographie aide à donner du sens.", "Pas de « réalité objective » d'une œuvre comme une vérité scientifique."],
      citation: "Il n'y a pas de vrai sens d'un texte.", piege: "Valéry ne dit pas qu'il ne faut absolument pas tenir compte de l'auteur.",
      video: "Paul Valéry il n'y a pas de vrai sens d'un texte" },

    "laideur": { part: 2, title: "Baudelaire contre l'embellissement",
      essentiel: "L'esthétique classique associe le beau à l'harmonie et embellit la nature. Baudelaire (Exposition universelle de 1855) reproche à Ingres de corriger la nature, une « tricherie heureuse » (Le Bain turc). La laideur peut faire partie de l'art et dénoncer.",
      retenir: ["Classique : beauté, harmonie, juste / laideur, désordre, injuste.", "Le Bain turc : bras allongés, proportions transformées.", "L'art peut représenter le réel laid, violent, disharmonieux, dérangeant.", "La laideur peut montrer ou dénoncer : horreur, violence, mort, souffrance, banalité."],
      citation: "Il croit que la nature doit être corrigée, amendée.", piege: "Baudelaire critique la correction de la nature, pas l'art d'Ingres en général.",
      video: "Baudelaire Ingres Exposition universelle 1855" },
    "horreur": { part: 2, title: "Représenter l'horreur",
      essentiel: "L'art peut nous confronter à ce que nous préférerions ne pas voir : Goya (Saturne dévorant un de ses fils), Lautréamont (Les Chants de Maldoror), Spielberg (Il faut sauver le soldat Ryan), Malick (La Ligne rouge), la tragédie. Malraux : « la part obscure ».",
      retenir: ["Goya refuse d'embellir la scène mythologique.", "Lautréamont rompt avec le romantisme idéalisant.", "Caméra à l'épaule : faire ressentir le chaos du débarquement.", "Tragédie : Hamlet, Roméo et Juliette, passions et mort."],
      citation: "", piege: "Ces œuvres ne glorifient pas la violence : elles en montrent l'horreur.",
      video: "Goya Saturne dévorant un de ses fils analyse" },
    "banalite": { part: 2, title: "La beauté du banal",
      essentiel: "La laideur, c'est aussi le banal. Chez Proust, un personnage découvre au Louvre les scènes quotidiennes de Chardin et comprend que la banalité peut être belle. Flaubert décrit la petite bourgeoisie normande : « L'ignoble me plaît, c'est le sublime d'en bas. »",
      retenir: ["Double déception devant Chardin : on attendait l'extraordinaire.", "L'art apprend à regarder autrement ce que l'on voit tous les jours.", "Madame Bovary : objets, habitudes, conversations, pensées.", "L'insignifiant a sa grandeur : la réalité concrète de la vie humaine."],
      citation: "L'ignoble me plaît, c'est le sublime d'en bas.", piege: "Le banal n'est pas l'horrible : c'est l'ordinaire.",
      video: "Proust Chardin beauté du quotidien" },
    "hegel-beau": { part: 2, title: "Hegel : le beau artistique supérieur au beau naturel",
      essentiel: "Pour Hegel (Esthétique), le beau artistique est supérieur au beau naturel parce qu'il est « un produit de l'esprit ». La nature ne produit pas volontairement sa beauté ; l'artiste choisit, transforme, compose et donne un sens.",
      retenir: ["Beauté naturelle : paysage, coucher de soleil, fleur, montagne.", "Beauté artistique : peinture, musique, littérature, cinéma, architecture.", "L'art ne copie pas simplement la nature.", "Plusieurs formes du beau : original, étrange, surprenant, imparfait."],
      citation: "Le beau artistique est supérieur au beau naturel.", piege: "Hegel ne dit pas que « la nature copie l'art ».",
      video: "Hegel beau artistique supérieur au beau naturel" },
    "libre-adherente": { part: 2, title: "Kant : beauté libre et beauté adhérente",
      essentiel: "La beauté libre ne dépend pas d'un concept de ce que l'objet doit être : grande liberté d'appréciation et de création. La beauté adhérente dépend d'un concept et de normes (la statuaire grecque) ; on peut la rapprocher d'une beauté conventionnelle.",
      retenir: ["Deux artistes, une même chose observée, deux œuvres différentes.", "Liberté n'est pas absence de règles : il faut une technique.", "Statuaire grecque : règles de proportion du corps humain.", "Musiques commerciales : des codes pour plaire ; des artistes rompent avec eux."],
      citation: "", piege: "Ne confonds pas : c'est la beauté adhérente qui dépend d'un modèle.",
      video: "Kant beauté libre beauté adhérente" },
    "bizarre": { part: 2, title: "Le beau est toujours bizarre",
      essentiel: "Pour Baudelaire, le beau est « multiforme et versicolore » et « toujours bizarre ». L'artiste ne maîtrise pas toujours son œuvre (Flaubert, la Joconde) : c'est un processus. Les surréalistes parlent de « beauté convulsive ».",
      retenir: ["Étrangeté, nouveauté, imprévisibilité.", "Flaubert guidé par la beauté de la langue.", "Léonard perfectionne longuement la Joconde.", "Beauté convulsive : rencontre imprévisible d'éléments non destinés à être associés."],
      citation: "Le beau est toujours bizarre.", piege: "L'œuvre n'est pas l'exécution mécanique d'une idée parfaitement déterminée.",
      video: "Baudelaire le beau est toujours bizarre" },
    "plaisir-negatif": { part: 2, title: "Plaisir négatif et goût qui se forme",
      essentiel: "Kant : une œuvre peut procurer un plaisir esthétique alors que son contenu est triste ou terrible (plaisir négatif). Il faut distinguer la beauté de l'œuvre et ce qu'elle représente. Le goût se forme : impressionnistes, débuts du cinéma.",
      retenir: ["Tragédie, mort, souffrance, guerre : bouleversant et beau.", "Une œuvre nouvelle déplaît parfois parce qu'on ne connaît pas son langage.", "Les impressionnistes, d'abord mal accueillis.", "Abel Gance : « Nos yeux ne sont pas encore faits pour elles. »"],
      citation: "Nos yeux ne sont pas encore faits pour elles.", piege: "Ne confonds pas la beauté de l'œuvre et l'agrément de ce qu'elle montre.",
      video: "pourquoi aime-t-on les tragédies plaisir esthétique" },
    "hume": { part: 2, title: "Hume : le goût, affaire de sensibilité",
      essentiel: "Le goût est le sentiment du bon. Pour Hume (Traité de la nature humaine), il repose sur l'objet qui plaît et sur une « subtile sympathie » entre l'œuvre et nous : une affaire de sensibilité individuelle. Risque : le relativisme.",
      retenir: ["Distinguer le beau (sentiment immédiat) et le goût (son fondement).", "Une même œuvre plaît à l'un, laisse l'autre indifférent.", "Réduire le goût à « j'aime / j'aime pas » mène au relativisme.", "Conception insuffisante : le goût s'éduque."],
      citation: "Tout objet qui tend à causer du plaisir à son possesseur est la cause propre du plaisir, plaît sûrement aux spectateurs par une subtile sympathie avec le possesseur.",
      piege: "Le cours dit « sensibilité individuelle », plutôt que « subjectivité », jugée trop simple.",
      video: "Hume goût sentiment relativisme" },
    "education-gout": { part: 2, title: "Le goût s'éduque",
      essentiel: "Le goût évolue avec les années, se transmet (une œuvre découverte en classe, Céline Dion, Mozart, Beethoven) et se nourrit de références : même s'il n'est pas que le résultat de la culture, l'inculture le dessert.",
      retenir: ["Le goût de nos cinq ans n'est pas celui d'aujourd'hui.", "« Pandémie du goût » : le goût circule par contagion.", "Trois chansons contre mille : un éventail de références.", "Découvrir avant de juger ; les connaisseurs de comics jugent mieux les films."],
      citation: "Même si le goût n'est pas que le résultat de la culture, ce qui est certain, c'est que l'inculture desservira le goût.",
      piege: "L'art n'est pas qu'une affaire d'éducation, et la transmission ne prouve pas la valeur d'une œuvre.",
      video: "le goût s'éduque-t-il philosophie" },
    "kant-gout": { part: 2, title: "Kant et l'énigme du goût (complément)",
      essentiel: "Complément annoncé par le cours. Kant distingue l'agréable (chacun son goût) et le beau, qui plaît de façon désintéressée et prétend à l'accord de tous, sans pouvoir se démontrer par un concept.",
      retenir: ["Agréable : relatif à chacun.", "Beau : on attend l'accord des autres.", "On ne démontre pas qu'une œuvre est belle, on en discute."],
      citation: "Est beau ce qui plaît universellement sans concept.", piege: "À vérifier avec la suite de ton cours : c'est un complément.",
      video: "Kant le beau plaît universellement sans concept" },

    "imiter": { part: 3, title: "Imiter n'est pas copier",
      essentiel: "Imiter, c'est reprendre certaines qualités ou certains défauts pour en donner une représentation (l'imitateur accentue des traits) : une production, pas une photocopie. Pour Cicéron (Les Stoïciens), la nature l'emporte sur l'art.",
      retenir: ["Esthétique classique : l'art imite la nature.", "Celui qui imite reste différent de celui qui est imité.", "L'art entretient une concurrence avec la nature.", "Si l'art copiait parfaitement, on ne pourrait plus distinguer art et nature."],
      citation: "Ce que fait la main humaine dans les ouvrages de nos arts, la nature le fait avec beaucoup plus d'art encore.",
      piege: "Imiter ne signifie pas reproduire à l'identique.", video: "l'art imite-t-il la nature philosophie" },
    "platon": { part: 3, title: "Platon : l'imitation trompeuse",
      essentiel: "Dans La République (livre X), Platon critique l'art : le peintre représente un cordonnier ou un menuisier sans connaître leur métier, il ne montre qu'une apparence, un « fantôme », et peut tromper les enfants et les fous. Il écarte les artistes de la cité idéale.",
      retenir: ["L'artiste ignore l'essence de ce qu'il représente.", "Une peinture de menuisier n'apprend pas la menuiserie.", "L'art imite de façon trompeuse et éloigne du vrai.", "Les artistes écartés de la cité idéale."],
      citation: "L'art de l'imitation est assurément loin du vrai.", piege: "Ce que Platon reproche, c'est de donner l'apparence de la réalité sans accès à la vérité.",
      video: "Platon République livre X critique de l'art" },
    "miroir": { part: 3, title: "Stendhal : le roman comme miroir",
      essentiel: "Pour Stendhal (Le Rouge et le Noir), un roman est un miroir promené le long d'un chemin : le reflet n'est pas la réalité. Même réaliste, une œuvre est une construction (un film de guerre, Gladiator, Napoléon).",
      retenir: ["Le chemin, c'est la vie ; le miroir en renvoie une image.", "La représentation ne se confond jamais avec l'expérience réelle.", "Gladiator : Marc Aurèle n'a pas été assassiné par Commode.", "Napoléon de Ridley Scott : pas de canons contre les pyramides."],
      citation: "Un roman, c'est un miroir que l'on promène le long d'un chemin.", piege: "Le reflet n'est qu'une image : il n'est pas la réalité elle-même.",
      video: "Stendhal roman miroir le long d'un chemin" },
    "connaissance": { part: 3, title: "L'art, moyen de connaissance ?",
      essentiel: "Comme moyen de connaissance, l'art est dépassé par les sciences (le film de dinosaures n'est pas de la science). Mais ce n'est pas sa fonction : il exprime une idée, une émotion, une expérience. Hegel : l'art est, quant à sa suprême destination, « une chose du passé ».",
      retenir: ["Les sciences : rigueur méthodologique, rationnelle, expérimentale.", "L'art n'est ni inutile ni inférieur.", "Hegel : l'art dépassé par la philosophie et les sciences comme forme suprême de la vérité.", "L'art représente et symbolise."],
      citation: "L'art reste pour nous, quant à sa suprême destination, une chose du passé.", piege: "Hegel ne dit pas que l'art ne signifie rien.",
      video: "Hegel l'art est une chose du passé" },
    "representer": { part: 3, title: "Représenter et dénaturer",
      essentiel: "Représenter, c'est rendre une réalité présente sans être elle : l'art incarne une idée sous une forme sensible et dénature le matériau pour lui donner un sens (Harpagon, La Liberté guidant le peuple). Hegel classe les arts de la sculpture, la plus proche du matériau sensible, à la poésie, la plus éloignée.",
      retenir: ["Sculpture : pierre, marbre, argile.", "Poésie : signes symboliques et métaphores.", "Plus l'art s'éloigne de la matière, plus il exprime des idées abstraites.", "L'Avare : un personnage fictif pour comprendre un comportement réel."],
      citation: "", piege: "La poésie n'est pas forcément supérieure à tous les autres arts.",
      video: "Hegel hiérarchie des arts sculpture poésie" },
    "aristote": { part: 3, title: "Aristote : poiesis et catharsis",
      essentiel: "Dans La Poétique, Aristote analyse la tragédie. Poiesis signifie création : l'artiste saisit les aspects essentiels du réel. La tragédie produit une catharsis, purgation ou clarification des émotions, notamment la pitié et la crainte.",
      retenir: ["L'art produit quelque chose de nouveau.", "Faire comprendre une passion, un conflit, une situation humaine.", "Des émotions éprouvées devant des personnages qu'on sait fictifs.", "Comprendre l'expérience humaine sans la reproduire fidèlement."],
      citation: "", piege: "La catharsis porte sur les émotions de pitié et de crainte.",
      video: "Aristote Poétique catharsis tragédie" },
    "goodman": { part: 3, title: "Goodman : l'œuvre comme symbole",
      essentiel: "Pour Nelson Goodman (Manières de faire des mondes), un objet devient une œuvre parce que et pendant qu'il fonctionne comme symbole : il renvoie à une idée, une émotion, une réalité invisible (La Liberté guidant le peuple, Le Penseur de Rodin).",
      retenir: ["La signification dépasse l'apparence.", "Delacroix : la liberté et le drapeau symbolisent la lutte collective.", "Rodin : une sculpture immobile rend visible l'activité de penser.", "L'art met une idée dans le sensible."],
      citation: "Un objet devient précisément une œuvre d'art parce que et pendant qu'il fonctionne d'une certaine façon comme symbole.",
      piege: "Le tableau ne se contente pas de montrer des personnes : il donne un sens à la scène.",
      video: "Nelson Goodman quand y a-t-il art symbole" },
    "reverdy": { part: 3, title: "Reverdy : du réel extérieur au réel intérieur",
      essentiel: "Pour Reverdy, la poésie est « l'acte magique de transmutation du réel extérieur en réel intérieur ». L'artiste exprime ce que l'expérience a provoqué en lui : la madeleine de Proust, Debussy, Kandinsky.",
      retenir: ["Réel extérieur : ce que l'artiste perçoit.", "Réel intérieur : la manière dont il vit et ressent cette expérience.", "La madeleine : une sensation présente ouvre un monde intérieur.", "Debussy, Kandinsky : impressions et correspondances."],
      citation: "L'acte magique de transmutation du réel extérieur en réel intérieur.", piege: "L'art ne reproduit plus simplement l'extérieur : il donne à voir l'intériorité.",
      video: "Reverdy poésie réel intérieur" }
  };

  /* ---------------- EXERCICES ---------------- */
  const exercises = [];
  const cnt = {};
  const add = (type, list) => list.forEach(e => { cnt[type] = (cnt[type] || 0) + 1; exercises.push(Object.assign({ id: type + "-" + cnt[type], type }, e)); });

  add("qcm", [
    { notion: "art-realite", q: "Quelle question ouvre le cours sur l'art ?",
      options: ["Quel est le lien entre l'art et la réalité ?", "L'art doit-il être utile à la société ?", "Qui a inventé les premières œuvres d'art ?", "L'art est-il réservé aux musées ?"], answer: 0,
      explain: "L'art doit-il imiter la réalité, l'embellir, la transformer ou la dénoncer ?" },
    { notion: "technique", q: "Que signifient le latin ars et le grec technè ?",
      options: ["À la fois l'art et la technique : le savoir-faire", "L'inspiration et le génie", "La beauté de la nature", "L'imitation fidèle du réel"], answer: 0,
      explain: "D'où le mot « artisan » : celui qui possède un savoir-faire technique." },
    { notion: "technique", q: "Pourquoi la technique est-elle « nécessaire, mais pas suffisante » ?",
      options: ["Tout art repose sur un savoir-faire, mais savoir écrire ne fait pas un écrivain", "Les grands artistes se passent de technique", "La technique s'oppose à la création", "Seule l'inspiration compte vraiment"], answer: 0,
      explain: "Il faut distinguer savoir faire quelque chose techniquement et produire une véritable œuvre." },
    { notion: "technique", q: "Que montre l'exemple de Miró ?",
      options: ["Retrouver volontairement la simplicité du dessin d'enfant est difficile pour un artiste maîtrisé", "Les enfants peignent mieux que les adultes", "Un artiste doit toujours peindre de façon réaliste", "La technique empêche toute création"], answer: 0,
      explain: "Même quand l'artiste s'éloigne de la technique, sa maîtrise reste présente." },
    { notion: "liberal", q: "Selon Kant, qu'est-ce qui distingue l'art du métier ?",
      options: ["L'art est désintéressé, le métier vise un résultat pratique ou un salaire", "L'art demande plus d'habileté que le métier", "Le métier est plus ancien que l'art", "L'art doit toujours être gratuit"], answer: 0,
      explain: "« L'art est dit libéral, le métier est dit mercenaire. »" },
    { notion: "liberal", q: "Dans quelle œuvre Kant oppose-t-il l'art libéral et le métier mercenaire ?",
      options: ["Critique de la faculté de juger", "Esthétique", "La République", "Manières de faire des mondes"], answer: 0,
      explain: "L'Esthétique est de Hegel, La République de Platon, Manières de faire des mondes de Goodman." },
    { notion: "danto", q: "Pour Danto, qu'est-ce qui distingue une boîte de Brillo ordinaire d'une œuvre d'art ?",
      options: ["Une certaine théorie de l'art : la manière dont l'objet est pensé et interprété", "Sa beauté", "Sa matière", "Son prix"], answer: 0,
      explain: "La solution ne se trouve pas dans l'objet lui-même." },
    { notion: "danto", q: "Quel exemple, avec Warhol, illustre l'idée de Danto ?",
      options: ["L'urinoir de Duchamp", "Le Bain turc d'Ingres", "Le Penseur de Rodin", "La Joconde de Léonard"], answer: 0,
      explain: "Un objet ordinaire, qui n'a pas été fabriqué comme une œuvre, est considéré comme une œuvre." },
    { notion: "intention", q: "Qu'est-ce qu'un travail de commande ?",
      options: ["Une œuvre dont un commanditaire (roi, noble, riche bourgeois) impose certaines exigences", "Une œuvre que l'artiste fait pour lui seul", "Une copie d'une œuvre célèbre", "Une œuvre collective anonyme"], answer: 0,
      explain: "L'artiste doit atteindre la fin fixée, tout en gardant une certaine liberté dans la manière." },
    { notion: "intention", q: "Pourquoi Baudelaire ne traduit-il pas Edgar Poe mot à mot ?",
      options: ["Le mot à mot ne conserve ni le style, ni le rythme, ni l'effet produit sur le lecteur", "Il ne connaissait pas assez l'anglais", "Poe le lui avait interdit", "Pour raccourcir les textes"], answer: 0,
      explain: "Il élabore la « théorie de l'effet » pour rendre au mieux le style et l'effet de l'œuvre de Poe." },
    { notion: "ecart", q: "Que cherchait Hölderlin ?",
      options: ["À écrire un poème parfait", "À traduire Edgar Poe", "À peindre un coucher de soleil", "À inventer la perspective"], answer: 0,
      explain: "Il s'est consacré pendant des années à ce poème sans le juger parfaitement satisfaisant." },
    { notion: "ecart", q: "Pourquoi le poème parfait semble-t-il impossible ?",
      options: ["Une même idée peut se formuler d'une infinité de façons", "La langue allemande est trop pauvre", "Les lecteurs ne comprennent pas la poésie", "Hölderlin manquait de technique"], answer: 0,
      explain: "Le langage a une grande plasticité : impossible de savoir quelle formulation est absolument parfaite." },
    { notion: "bride", q: "Que veut dire Léonard de Vinci par « la bride et le gouvernail » ?",
      options: ["La maîtrise de la perspective permet au peintre de diriger sa peinture", "Il faut peindre des chevaux et des bateaux", "La perspective limite la liberté du peintre", "La peinture doit avancer lentement"], answer: 0,
      explain: "La bride dirige le cheval, le gouvernail dirige le bateau." },
    { notion: "bride", q: "Au début de l'apprentissage, la technique est plutôt…",
      options: ["une barrière, une sorte d'« interdit »", "une liberté totale", "un don inné", "inutile"], answer: 0,
      explain: "Une fois maîtrisée, elle devient un « gouvernail »." },
    { notion: "interpretation", q: "Que signifie « l'infinité de l'œuvre » ?",
      options: ["L'œuvre continue d'exister après le point final, parce que le public la prend en charge", "L'artiste ne finit jamais son œuvre", "L'œuvre est infiniment grande", "L'œuvre a une valeur infinie"], answer: 0,
      explain: "Une œuvre n'existe qu'à condition que le public la fasse vivre." },
    { notion: "interpretation", q: "Jouer Molière autrement qu'au XVIIᵉ siècle, c'est…",
      options: ["le faire vivre, sans nécessairement le trahir", "forcément trahir son œuvre", "une erreur historique", "interdit au théâtre"], answer: 0,
      explain: "Les intonations et le jeu changent, les paroles restent : l'œuvre vit par ses interprétations." },
    { notion: "sens-possibles", q: "Dans « pris dans tous les sens possibles », quel mot est essentiel ?",
      options: ["« Possibles » : il existe aussi des sens qui ne sont pas possibles", "« Tous » : tout est permis", "« Pris » : il faut prendre le poème au sérieux", "« Sens » : un seul sens est vrai"], answer: 0,
      explain: "Rimbaud ne dit pas qu'un texte peut être interprété n'importe comment." },
    { notion: "sens-possibles", q: "Si un poème parle d'amour, peut-on dire qu'il parle d'une vache ?",
      options: ["Non : il faut respecter au minimum la littéralité du texte", "Oui : tous les sens sont permis", "Oui, si l'auteur est mort", "Seulement en poésie moderne"], answer: 0,
      explain: "Une interprétation doit être sensée et justifiable à partir de l'œuvre." },
    { notion: "echappe", q: "Que montre l'exemple de Chopin ?",
      options: ["Il ne voulait pas être vu comme romantique, et il en est devenu un archétype", "Il a inventé volontairement la musique romantique", "Il a été oublié après sa mort", "Il composait uniquement sur commande"], answer: 0,
      explain: "L'histoire peut donner à une œuvre une signification différente de celle voulue par l'auteur." },
    { notion: "echappe", q: "Que montre l'exemple des sketchs Bref ?",
      options: ["Un sociologue y lit un sens auquel l'auteur n'avait jamais pensé", "L'auteur voulait faire une étude sociologique", "Les sketchs n'ont eu aucun succès", "Il ne faut jamais interpréter une comédie"], answer: 0,
      explain: "Les possibilités d'interprétation vont bien au-delà de ce que l'auteur a consciemment voulu dire." },
    { notion: "echappe", q: "Pourquoi « n'aurait pu être écrite par personne » est-il un compliment de Rilke ?",
      options: ["Cette poésie semble dépasser ce qu'un être humain est capable de produire", "Supervielle était le seul à pouvoir l'écrire", "La poésie était anonyme", "Rilke trouvait ce poème illisible"], answer: 0,
      explain: "L'œuvre devient quelque chose qui dépasse son propre auteur." },
    { notion: "valery", q: "« Il n'y a pas de vrai sens d'un texte » signifie que…",
      options: ["il ne faut pas réduire l'œuvre à l'intention de son auteur", "un texte ne veut rien dire", "il faut ignorer complètement l'auteur", "toutes les interprétations se valent"], answer: 0,
      explain: "L'intention peut être prise en compte, mais elle n'est pas l'unique sens possible." },
    { notion: "valery", q: "Que montre la comparaison entre Mozart et Salieri ?",
      options: ["Le public participe à la construction de l'histoire des œuvres", "Salieri était un meilleur compositeur", "La célébrité d'un vivant dure toujours", "Les compositeurs se jalousent"], answer: 0,
      explain: "Salieri était célèbre à son époque ; aujourd'hui, Mozart est bien plus connu." },
    { notion: "valery", q: "Que conclure de l'exemple de Beethoven et de sa Neuvième Symphonie ?",
      options: ["Connaître la vie du compositeur aide à donner du sens, sans fixer un sens unique", "Seule la biographie donne le vrai sens", "La biographie est inutile", "La musique n'a aucun sens"], answer: 0,
      explain: "Il n'existe pas de « réalité objective » d'une œuvre comparable à une vérité scientifique." },
    { notion: "laideur", q: "Que reproche Baudelaire à Ingres ?",
      options: ["De corriger la nature pour le plaisir des yeux", "De peindre des sujets trop violents", "De manquer de technique", "De copier ses contemporains"], answer: 0,
      explain: "Une « tricherie heureuse, agréable, faite en vue du plaisir des yeux »." },
    { notion: "laideur", q: "Dans Le Bain turc, que fait Ingres ?",
      options: ["Il modifie les proportions des corps pour l'harmonie de la toile", "Il peint fidèlement un hammam réel", "Il représente une scène de guerre", "Il peint des objets du quotidien"], answer: 0,
      explain: "Certains bras sont allongés, certaines parties du corps déplacées." },
    { notion: "horreur", q: "Que fait Goya dans Saturne dévorant un de ses fils ?",
      options: ["Il fait ressentir l'horreur, sans embellir la scène", "Il idéalise un mythe grec", "Il peint un portrait royal", "Il dénonce l'impressionnisme"], answer: 0,
      explain: "C'est une rupture avec une représentation idéalisée de la réalité." },
    { notion: "horreur", q: "Pourquoi Spielberg filme-t-il le débarquement caméra à l'épaule ?",
      options: ["Pour faire ressentir au spectateur le chaos et la brutalité de la guerre", "Par manque de moyens", "Pour glorifier les soldats", "Pour imiter la peinture"], answer: 0,
      explain: "Il faut sauver le soldat Ryan : une œuvre remarquable qui représente quelque chose de terrible." },
    { notion: "banalite", q: "Que découvre le personnage de Proust devant les tableaux de Chardin ?",
      options: ["Que la banalité elle-même peut être belle", "Que le Louvre est décevant", "Que Chardin peint des scènes mythologiques", "Que l'art doit être extraordinaire"], answer: 0,
      explain: "L'art peut nous apprendre à regarder autrement ce que nous voyons tous les jours." },
    { notion: "hegel-beau", q: "Pourquoi le beau artistique est-il supérieur au beau naturel selon Hegel ?",
      options: ["Il est un produit de l'esprit", "Il imite parfaitement la nature", "Il dure plus longtemps", "Il est plus coloré"], answer: 0,
      explain: "La nature ne produit pas volontairement sa beauté ; l'artiste choisit, compose, donne un sens." },
    { notion: "libre-adherente", q: "Quel exemple illustre la beauté adhérente ?",
      options: ["La statuaire grecque et ses règles de proportion", "Deux artistes qui peignent différemment le même paysage", "Une beauté convulsive surréaliste", "Une impression de Debussy"], answer: 0,
      explain: "La beauté adhérente dépend en partie du respect d'un modèle." },
    { notion: "bizarre", q: "Que désignent les surréalistes par « beauté convulsive » ?",
      options: ["Une beauté née d'une rencontre imprévisible entre des éléments non destinés à être associés", "Une beauté parfaitement maîtrisée", "La beauté des corps en mouvement", "Une beauté réservée à la musique"], answer: 0,
      explain: "L'art peut laisser une place à l'inattendu." },
    { notion: "bizarre", q: "Que montre l'exemple de la Joconde ?",
      options: ["L'œuvre est le résultat d'un processus de recherches et de reprises", "Léonard l'a peinte en une seule séance", "Une œuvre doit être exécutée mécaniquement", "Léonard n'aimait pas ce tableau"], answer: 0,
      explain: "Léonard de Vinci a travaillé très longtemps sur cette œuvre et l'a constamment perfectionnée." },
    { notion: "plaisir-negatif", q: "Comment peut-on trouver belle une tragédie qui représente la mort ?",
      options: ["En distinguant la beauté de l'œuvre et le caractère désagréable de ce qu'elle représente", "C'est impossible : on ne peut que la trouver laide", "En ignorant son contenu", "Parce que la mort est belle"], answer: 0,
      explain: "C'est ce qu'on peut appeler, avec Kant, un plaisir négatif." },
    { notion: "plaisir-negatif", q: "Pourquoi les impressionnistes ont-ils d'abord été mal accueillis ?",
      options: ["Ils rompaient avec les habitudes artistiques : le public devait apprendre à regarder", "Ils manquaient de technique", "Ils peignaient des sujets interdits", "Ils refusaient d'exposer"], answer: 0,
      explain: "Le goût n'est pas immédiatement donné : il se forme." },
    { notion: "hume", q: "Selon Hume, sur quoi repose le goût ?",
      options: ["L'objet qui provoque du plaisir et une subtile sympathie entre l'œuvre et nous", "Des règles universelles de proportion", "La connaissance de l'histoire de l'art", "L'avis des experts"], answer: 0,
      explain: "Le goût est une affaire de sensibilité individuelle." },
    { notion: "hume", q: "Quel risque fait courir l'idée que le goût n'est qu'une affaire de sentiments ?",
      options: ["Le relativisme : plus de fondement commun pour juger la valeur des œuvres", "Le dogmatisme", "L'ennui", "Le scepticisme scientifique"], answer: 0,
      explain: "Tout ce qui me plaît deviendrait de l'art." },
    { notion: "education-gout", q: "Quelle preuve simple montre que le goût s'éduque ?",
      options: ["Il évolue au cours des années", "Tout le monde aime les mêmes œuvres", "Les enfants ont le meilleur goût", "Les goûts ne changent jamais"], answer: 0,
      explain: "Notre goût à cinq ans n'est pas celui que nous avons aujourd'hui." },
    { notion: "education-gout", q: "Pourquoi la transmission d'un goût ne prouve-t-elle pas la valeur d'une œuvre ?",
      options: ["Elle peut concerner aussi des œuvres de mauvais goût", "Parce qu'on ne transmet que des chefs-d'œuvre", "Parce que le goût ne se transmet pas", "Parce que la valeur est fixée par les musées"], answer: 0,
      explain: "Le fait qu'un goût se transmette ne suffit pas, à lui seul, à démontrer la valeur artistique d'une œuvre." },
    { notion: "education-gout", q: "Que montre l'exemple de la personne qui connaît trois chansons ?",
      options: ["Son éventail de références, donc son goût, risque d'être limité", "Elle a plus de goût que les autres", "Elle connaît mieux la musique", "Le nombre de chansons ne change rien"], answer: 0,
      explain: "L'inculture dessert le goût." },
    { notion: "imiter", q: "Que fait un imitateur ?",
      options: ["Il accentue certains traits : il produit une représentation, il ne copie pas", "Il reproduit exactement la personne", "Il invente une personne imaginaire", "Il refuse de ressembler à son modèle"], answer: 0,
      explain: "Celui qui imite reste différent de celui qui est imité." },
    { notion: "imiter", q: "Pour Cicéron, qui l'emporte entre l'art et la nature ?",
      options: ["La nature, qui produit les formes que l'artiste cherche à représenter", "L'art, produit de l'esprit", "Aucun des deux", "Cela dépend de l'artiste"], answer: 0,
      explain: "C'est Hegel qui soutiendra la supériorité du beau artistique." },
    { notion: "platon", q: "Pourquoi le peintre est-il « loin du vrai » selon Platon ?",
      options: ["Il représente l'apparence de choses dont il ne connaît pas la nature", "Il manque de technique", "Il peint trop lentement", "Il refuse de peindre les artisans"], answer: 0,
      explain: "Un peintre peut représenter un cordonnier sans connaître le métier de cordonnier." },
    { notion: "platon", q: "Que décide Platon pour les artistes dans la cité idéale ?",
      options: ["Les écarter, car ils détournent les citoyens du vrai", "Les mettre à la tête de la cité", "Les payer davantage", "Les obliger à apprendre un métier"], answer: 0,
      explain: "La République, livre X." },
    { notion: "miroir", q: "Dans la formule de Stendhal, que représente le chemin ?",
      options: ["La vie", "Le roman", "L'auteur", "Le lecteur"], answer: 0,
      explain: "Le miroir renvoie une image de la vie, mais le reflet n'est pas la réalité." },
    { notion: "miroir", q: "Que montrent les exemples de Gladiator et de Napoléon ?",
      options: ["L'artiste peut modifier les événements pour construire son œuvre", "Le cinéma est une source historique fiable", "Les films historiques sont inutiles", "Il faut interdire les films historiques"], answer: 0,
      explain: "Marc Aurèle n'a pas été assassiné par Commode ; les canons n'ont pas tiré sur les pyramides." },
    { notion: "connaissance", q: "Que veut dire Hegel par « l'art reste pour nous une chose du passé » ?",
      options: ["L'art n'est plus la forme suprême de la vérité : philosophie et sciences l'ont dépassé", "L'art a disparu", "Seul l'art ancien a de la valeur", "Il ne faut plus créer"], answer: 0,
      explain: "Il ne faut pas en conclure que l'art ne signifie rien." },
    { notion: "representer", q: "Pour Hegel, quel art est le plus proche du matériau sensible ?",
      options: ["La sculpture", "La poésie", "La musique", "Le cinéma"], answer: 0,
      explain: "La sculpture travaille directement la pierre, le marbre ou l'argile ; la poésie est la plus éloignée." },
    { notion: "representer", q: "Que signifie ici « dénaturer » le matériau ?",
      options: ["Modifier sa forme première pour lui donner une nouvelle signification", "L'abîmer volontairement", "Le rendre plus naturel", "Le laisser tel quel"], answer: 0,
      explain: "Le sculpteur transforme une pierre pour lui donner la forme qu'il souhaite." },
    { notion: "aristote", q: "Que signifie le grec poiesis ?",
      options: ["Création, production", "Imitation fidèle", "Purgation des émotions", "Beauté"], answer: 0,
      explain: "L'art est une activité qui produit quelque chose de nouveau." },
    { notion: "aristote", q: "Quelles émotions la catharsis concerne-t-elle notamment ?",
      options: ["La pitié et la crainte", "La joie et la colère", "L'amour et la haine", "L'ennui et la surprise"], answer: 0,
      explain: "La tragédie nous fait éprouver des émotions à travers des personnages que nous savons fictifs." },
    { notion: "goodman", q: "Pour Goodman, quand un objet est-il une œuvre d'art ?",
      options: ["Parce que et pendant qu'il fonctionne comme symbole", "Quand il est exposé dans un musée", "Quand il est beau", "Quand il est cher"], answer: 0,
      explain: "Manières de faire des mondes." },
    { notion: "goodman", q: "Que rend visible Le Penseur de Rodin ?",
      options: ["La difficulté de penser, une activité intérieure", "La force physique d'un athlète", "Un événement historique", "La beauté d'un paysage"], answer: 0,
      explain: "La sculpture est immobile et faite de matière, mais elle fait comprendre une activité intérieure." },
    { notion: "reverdy", q: "Que fait la poésie selon Reverdy ?",
      options: ["Elle transforme le réel extérieur en réel intérieur", "Elle copie fidèlement le paysage", "Elle corrige la nature", "Elle explique la science"], answer: 0,
      explain: "L'artiste exprime ce que l'expérience a provoqué en lui." },
    { notion: "kant-gout", q: "Complément : pour Kant, quelle différence entre l'agréable et le beau ?",
      options: ["L'agréable vaut pour chacun selon son goût ; le beau prétend à l'accord de tous", "Aucune différence", "Le beau est toujours utile", "L'agréable est démontrable"], answer: 0,
      explain: "Le beau plaît universellement sans concept : on ne le démontre pas, on en discute." }
  ]);

  /* Explications de texte : un passage, une question d'analyse */
  add("qcm", [
    { notion: "platon", passage: "L'art de l'imitation est assurément loin du vrai. Et apparemment, s'il s'exerce sur toute chose, c'est parce qu'il ne touche qu'à une petite partie de chacune, et qui n'est qu'un fantôme. Ainsi, le peintre nous peindra un cordonnier, un menuisier et les autres artisans, alors qu'il ne connaît rien à leurs arts. Cependant, pour peu qu'il soit bon peintre, s'il peignait un menuisier et le leur montrait de loin, il pourrait tromper au moins les enfants et les fous, en leur faisant croire que c'est véritablement un menuisier.",
      src: "Platon, La République, livre X", q: "Quelle est la thèse de ce texte ?",
      options: ["L'art imitatif ne saisit qu'une apparence des choses et peut tromper", "La peinture permet de connaître les métiers", "Les enfants sont les meilleurs juges de l'art", "Un bon peintre doit d'abord apprendre la menuiserie"], answer: 0,
      explain: "L'œuvre n'est qu'un « fantôme » : une apparence de réalité sans accès à la vérité." },
    { notion: "platon", passage: "L'art de l'imitation est assurément loin du vrai. Et apparemment, s'il s'exerce sur toute chose, c'est parce qu'il ne touche qu'à une petite partie de chacune, et qui n'est qu'un fantôme.",
      src: "Platon, La République, livre X", q: "Pourquoi l'art peut-il « s'exercer sur toute chose » ?",
      options: ["Parce qu'il ne saisit qu'une petite partie de chaque chose : son apparence", "Parce que l'artiste connaît tout", "Parce que l'art est un savoir universel", "Parce que la nature imite l'art"], answer: 0,
      explain: "Facilité trompeuse : peindre tout, c'est ne rien connaître en profondeur." },
    { notion: "hume", passage: "Tout objet qui tend à causer du plaisir à son possesseur est la cause propre du plaisir, plaît sûrement aux spectateurs par une subtile sympathie avec le possesseur.",
      src: "Hume, Traité de la nature humaine", q: "Que désigne ici la « subtile sympathie » ?",
      options: ["Un lien affectif qui se crée entre l'objet artistique et celui qui le regarde", "Une règle de proportion", "Une connaissance savante de l'œuvre", "L'amitié entre artistes"], answer: 0,
      explain: "Le goût est la manière dont nous nous sentons face à une œuvre : une affaire de sensibilité individuelle." },
    { notion: "laideur", passage: "Il croit que la nature doit être corrigée, amendée ; [...] une tricherie heureuse, agréable, faite en vue du plaisir des yeux.",
      src: "Baudelaire, Exposition universelle de 1855, à propos d'Ingres", q: "Quelle conception de l'art l'auteur critique-t-il ?",
      options: ["Un art qui embellit la réalité pour la rendre harmonieuse et agréable", "Un art qui montre la laideur", "Un art qui dénonce la guerre", "Un art qui refuse toute technique"], answer: 0,
      explain: "Pour Baudelaire, l'art peut représenter la réalité telle qu'elle est, même laide." },
    { notion: "goodman", passage: "Un objet devient précisément une œuvre d'art parce que et pendant qu'il fonctionne d'une certaine façon comme symbole.",
      src: "Nelson Goodman, Manières de faire des mondes", q: "Quelle conséquence tirer de « pendant que » ?",
      options: ["Le statut d'œuvre dépend de la manière dont l'objet fonctionne, pas de l'objet seul", "Une œuvre reste une œuvre quoi qu'il arrive", "Seuls les objets anciens sont des œuvres", "Le symbole est une décoration"], answer: 0,
      explain: "Comme chez Danto, ce qui fait l'œuvre n'est pas une propriété de l'objet lui-même." }
  ]);

  add("vf", [
    { notion: "technique", s: "Pour le cours, l'art et la technique sont deux réalités totalement opposées.", a: false, explain: "Le mot « artisan » rappelle leur lien : la technique est nécessaire à l'art." },
    { notion: "technique", s: "Savoir dessiner suffit pour être un artiste peintre.", a: false, explain: "La technique est nécessaire, mais elle n'est pas suffisante." },
    { notion: "liberal", s: "Pour Kant, un artiste qui vit de son art n'est plus un artiste.", a: false, explain: "Il peut vivre de son art ; ce n'est simplement pas ce qui définit l'activité artistique." },
    { notion: "danto", s: "Pour Danto, la beauté d'un objet suffit à en faire une œuvre d'art.", a: false, explain: "Ni la beauté, ni l'utilité, ni la matière, ni la forme : une certaine théorie de l'art." },
    { notion: "ecart", s: "Selon le cours, Hölderlin manquait de technique pour écrire son poème parfait.", a: false, explain: "L'insatisfaction vient de l'infinité des formulations possibles, malgré une grande maîtrise." },
    { notion: "bride", s: "Pour Léonard de Vinci, plus le peintre maîtrise la perspective, plus il est libre.", a: true, explain: "La technique devient un moyen de liberté : elle permet de gouverner l'œuvre." },
    { notion: "interpretation", s: "Jouer une symphonie autrement qu'à l'époque de sa création, c'est nécessairement la trahir.", a: false, explain: "Cela ne signifie pas nécessairement qu'on trahit l'œuvre originale." },
    { notion: "sens-possibles", s: "Pour Rimbaud, on peut interpréter un poème n'importe comment.", a: false, explain: "« Possibles » : il existe aussi des sens qui ne sont pas possibles." },
    { notion: "valery", s: "Valéry interdit de tenir compte de l'intention de l'auteur.", a: false, explain: "Il ne faut pas réduire l'œuvre à cette intention, mais on peut la prendre en compte." },
    { notion: "valery", s: "Selon le cours, il existe une « réalité objective » d'une œuvre, comme une vérité scientifique.", a: false, explain: "Les informations biographiques aident, mais ne déterminent pas un sens unique et définitif." },
    { notion: "laideur", s: "Baudelaire félicite Ingres d'avoir corrigé la nature.", a: false, explain: "Il le lui reproche : une « tricherie heureuse » faite pour le plaisir des yeux." },
    { notion: "laideur", s: "Dans l'esthétique classique, ce qui est laid doit être corrigé ou dépassé par l'artiste.", a: true, explain: "Analogie classique : beauté, harmonie et juste ; laideur, désordre et injuste." },
    { notion: "horreur", s: "Les films de guerre étudiés cherchent à glorifier la guerre.", a: false, explain: "Ils en montrent l'horreur et les conséquences humaines." },
    { notion: "hegel-beau", s: "Pour Hegel, le beau naturel est supérieur au beau artistique.", a: false, explain: "C'est l'inverse : le beau artistique est un produit de l'esprit." },
    { notion: "libre-adherente", s: "La beauté libre signifie qu'il n'y a plus aucune règle.", a: false, explain: "Cette liberté ne signifie pas absence totale de règles : l'artiste doit maîtriser une technique." },
    { notion: "plaisir-negatif", s: "Les impressionnistes ont été immédiatement admirés par le public.", a: false, explain: "Ils ont d'abord été mal accueillis : le public a dû apprendre à regarder autrement." },
    { notion: "education-gout", s: "Selon le cours, l'art n'est qu'une affaire d'éducation.", a: false, explain: "Il n'est pas qu'une affaire d'éducation, mais il est aussi une affaire d'éducation." },
    { notion: "hume", s: "Pour Hume, le goût est une affaire de sensibilité individuelle.", a: true, explain: "Une même œuvre peut plaire à l'un et laisser l'autre indifférent." },
    { notion: "platon", s: "Pour Platon, une peinture de menuisier permet de connaître le métier de menuisier.", a: false, explain: "Elle ne montre qu'une apparence ; l'artiste ne connaît pas l'essence de ce qu'il représente." },
    { notion: "connaissance", s: "Pour Hegel, l'art ne signifie plus rien dans le monde moderne.", a: false, explain: "Il n'est plus la forme suprême de la vérité, mais il représente et symbolise." },
    { notion: "goodman", s: "Le Penseur de Rodin donne une forme visible à une activité intérieure.", a: true, explain: "La posture donne une forme visible à la difficulté de penser." },
    { notion: "representer", s: "Pour Hegel, la poésie est l'art le plus éloigné du matériau sensible.", a: true, explain: "Elle utilise des signes symboliques et des métaphores." }
  ]);

  add("fill", [
    { notion: "bride", text: "La perspective est la [[bride]] et le [[gouvernail]] dans la peinture.", explain: "Léonard de Vinci : la maîtrise technique permet de diriger l'œuvre." },
    { notion: "liberal", text: "L'art est dit [[libéral|liberal]], le métier est dit [[mercenaire]].", explain: "Kant, Critique de la faculté de juger." },
    { notion: "valery", text: "Il n'y a pas de vrai [[sens]] d'un texte.", explain: "Paul Valéry, Variété." },
    { notion: "bizarre", text: "Le beau est toujours [[bizarre]].", explain: "Baudelaire." },
    { notion: "miroir", text: "Un roman, c'est un [[miroir]] que l'on promène le long d'un [[chemin]].", explain: "Stendhal." },
    { notion: "connaissance", text: "L'art reste pour nous, quant à sa suprême destination, une chose du [[passé|passe]].", explain: "Hegel, Esthétique." },
    { notion: "goodman", text: "Un objet devient précisément une œuvre d'art parce que et pendant qu'il fonctionne d'une certaine façon comme [[symbole]].", explain: "Nelson Goodman." },
    { notion: "banalite", text: "L'ignoble me plaît, c'est le [[sublime]] d'en bas.", explain: "Flaubert." },
    { notion: "danto", text: "Ce qui fait la différence entre une boîte de Brillo et une œuvre d'art qui consiste en une boîte de Brillo, c'est une certaine [[théorie|theorie]] de l'art.", explain: "Arthur Danto." },
    { notion: "sens-possibles", text: "Un poème doit être pris dans tous les [[sens]] [[possibles]].", explain: "Rimbaud, lettre dite du « voyant »." },
    { notion: "hegel-beau", text: "Le beau artistique est [[supérieur|superieur]] au beau [[naturel]].", explain: "Hegel : le beau artistique est un produit de l'esprit." },
    { notion: "reverdy", text: "L'acte magique de transmutation du réel [[extérieur|exterieur]] en réel [[intérieur|interieur]].", explain: "Reverdy, définition de la poésie." },
    { notion: "technique", plain: true, text: "La technique est une condition [[nécessaire|necessaire]] de l'art, mais elle n'est pas [[suffisante]].", explain: "Savoir écrire ne fait pas un écrivain." },
    { notion: "hume", plain: true, text: "Pour Hume, le goût est une affaire de [[sensibilité|sensibilite]] individuelle ; s'il n'était que cela, on tomberait dans le [[relativisme]].", explain: "D'où l'idée que le goût s'éduque." },
    { notion: "aristote", plain: true, text: "Selon Aristote, la tragédie produit une [[catharsis]], une purgation de la pitié et de la [[crainte]].", explain: "La Poétique." },
    { notion: "platon", plain: true, text: "Pour Platon, l'œuvre d'art n'est qu'un [[fantôme|fantome]] : elle donne une apparence de réalité sans accès à la [[vérité|verite]].", explain: "La République, livre X." },
    { notion: "education-gout", plain: true, text: "Même si le goût n'est pas que le résultat de la culture, l'[[inculture]] desservira le goût.", explain: "Formule du cours." }
  ]);

  add("part", [
    { notion: "bride", a: 1, quote: "La perspective est la bride et le gouvernail dans la peinture.", explain: "Partie I, B : les conditions de l'artiste." },
    { notion: "valery", a: 1, quote: "Il n'y a pas de vrai sens d'un texte.", explain: "Partie I, C : l'infinité de l'œuvre." },
    { notion: "liberal", a: 1, quote: "L'art est dit libéral, le métier est dit mercenaire.", explain: "Partie I, A : créer et produire." },
    { notion: "danto", a: 1, quote: "Une boîte de Brillo devient une œuvre grâce à une certaine théorie de l'art.", explain: "Partie I, A." },
    { notion: "bizarre", a: 2, quote: "Le beau est toujours bizarre.", explain: "Partie II, b : les différentes formes du beau." },
    { notion: "hume", a: 2, quote: "Tout objet qui tend à causer du plaisir [...] plaît par une subtile sympathie.", explain: "Partie II, C : l'énigme du goût." },
    { notion: "banalite", a: 2, quote: "L'ignoble me plaît, c'est le sublime d'en bas.", explain: "Partie II, a : la laideur." },
    { notion: "plaisir-negatif", a: 2, quote: "Nos yeux ne sont pas encore faits pour elles.", explain: "Partie II, b : le goût n'est pas immédiatement donné." },
    { notion: "miroir", a: 3, quote: "Un roman, c'est un miroir que l'on promène le long d'un chemin.", explain: "Partie III, A : imiter." },
    { notion: "platon", a: 3, quote: "L'art de l'imitation est assurément loin du vrai.", explain: "Partie III, A." },
    { notion: "goodman", a: 3, quote: "Un objet devient une œuvre d'art pendant qu'il fonctionne comme symbole.", explain: "Partie III, B : représentation." },
    { notion: "reverdy", a: 3, quote: "L'acte magique de transmutation du réel extérieur en réel intérieur.", explain: "Partie III, B." }
  ]);

  add("order", [
    { part: 0, notion: "art-realite", q: "Remets dans l'ordre les sous-parties du cours.",
      items: ["Créer et produire", "Les conditions de l'artiste", "L'infinité de l'œuvre", "La laideur", "Les différentes formes du beau", "L'énigme du goût", "Imiter", "Représentation"],
      explain: "I (A, B, C) · II (a, b, C) · III (A, B)." },
    { part: 1, notion: "bride", q: "Rétablis le raisonnement de la partie I, B.",
      items: ["L'artiste peut avoir une idée préalable de son œuvre", "Il peut se donner une théorie ou des règles", "Mais il existe un écart entre l'intention et le résultat", "Hölderlin ne parvient pas au poème parfait", "La maîtrise technique est pourtant une condition de la liberté", "La condition de l'artiste ne suffit donc pas à définir l'œuvre"],
      explain: "Intention → règles → écart → Hölderlin → Léonard → bilan, puis l'infinité de l'œuvre." },
    { part: 2, notion: "hume", q: "Remets dans l'ordre l'argument sur le goût.",
      items: ["Le goût est le sentiment du bon", "Pour Hume, il repose sur une subtile sympathie", "S'il n'est que sentiment, il mène au relativisme", "Or le goût évolue au cours des années", "Il se transmet d'une personne à l'autre", "Donc l'inculture dessert le goût"],
      explain: "Le goût ne se réduit pas à une sensibilité spontanée." },
    { part: 1, notion: "interpretation", q: "Remets dans l'ordre les étapes de « l'infinité de l'œuvre ».",
      items: ["L'œuvre vit par son interprétation", "Chaque interprétation peut produire de nouveaux sens (Rimbaud)", "L'œuvre peut dépasser l'intention de son auteur (Chopin, Bref)", "Le sens se construit dans le présent (Mozart, Salieri)", "Il n'y a pas de vrai sens d'un texte (Valéry)", "L'œuvre dépasse son auteur (Rilke)"],
      explain: "C'est l'ordre du cours, du public jusqu'à l'œuvre qui dépasse l'humain." }
  ]);

  add("match", [
    { part: 1, q: "Associe chaque auteur à son idée (partie I).",
      pairs: [
        { l: "Kant", r: "L'art est libéral, le métier mercenaire", n: "liberal" },
        { l: "Danto", r: "Une certaine théorie de l'art fait l'œuvre", n: "danto" },
        { l: "Léonard de Vinci", r: "La bride et le gouvernail de la peinture", n: "bride" },
        { l: "Hölderlin", r: "Le poème parfait, toujours reformulé", n: "ecart" },
        { l: "Rimbaud", r: "Tous les sens possibles", n: "sens-possibles" },
        { l: "Valéry", r: "Pas de vrai sens d'un texte", n: "valery" }
      ], explain: "Les grandes références de la partie I." },
    { part: 2, q: "Associe chaque auteur à son idée (partie II).",
      pairs: [
        { l: "Baudelaire", r: "Le beau est toujours bizarre", n: "bizarre" },
        { l: "Hegel", r: "Le beau artistique est supérieur au beau naturel", n: "hegel-beau" },
        { l: "Hume", r: "Une subtile sympathie", n: "hume" },
        { l: "Flaubert", r: "Le sublime d'en bas", n: "banalite" },
        { l: "Abel Gance", r: "Nos yeux ne sont pas encore faits pour elles", n: "plaisir-negatif" },
        { l: "Malraux", r: "La part obscure", n: "horreur" }
      ], explain: "Les grandes références de la partie II." },
    { part: 3, q: "Associe chaque auteur à son idée (partie III).",
      pairs: [
        { l: "Platon", r: "L'œuvre n'est qu'un fantôme", n: "platon" },
        { l: "Cicéron", r: "La nature a plus d'art que nos arts", n: "imiter" },
        { l: "Stendhal", r: "Le roman est un miroir le long d'un chemin", n: "miroir" },
        { l: "Aristote", r: "Poiesis et catharsis", n: "aristote" },
        { l: "Goodman", r: "L'œuvre fonctionne comme symbole", n: "goodman" },
        { l: "Reverdy", r: "Du réel extérieur au réel intérieur", n: "reverdy" }
      ], explain: "Les grandes références de la partie III." },
    { part: 0, q: "Associe chaque œuvre à ce qu'elle illustre dans le cours.",
      pairs: [
        { l: "La boîte de Brillo de Warhol", r: "Un objet ordinaire devenu œuvre", n: "danto" },
        { l: "Le Bain turc d'Ingres", r: "La nature corrigée pour l'harmonie", n: "laideur" },
        { l: "Saturne dévorant un de ses fils", r: "L'horreur sans embellissement", n: "horreur" },
        { l: "Les tableaux de Chardin", r: "La beauté de la banalité", n: "banalite" },
        { l: "La Liberté guidant le peuple", r: "Un symbole de la lutte collective", n: "goodman" },
        { l: "L'Avare de Molière", r: "Un personnage fictif pour comprendre l'avarice", n: "representer" }
      ], explain: "Chaque exemple d'œuvre est un argument." },
    { part: 1, q: "Associe chaque exemple à l'idée qu'il montre (I, C).",
      pairs: [
        { l: "Chopin", r: "Devenu l'archétype de ce qu'il rejetait", n: "echappe" },
        { l: "Les sketchs Bref", r: "Une lecture sociologique imprévue par l'auteur", n: "echappe" },
        { l: "Mozart et Salieri", r: "Le public construit l'histoire des œuvres", n: "valery" },
        { l: "La Neuvième de Beethoven", r: "La biographie aide sans fixer un sens unique", n: "valery" },
        { l: "Molière joué aujourd'hui", r: "Interpréter autrement sans trahir", n: "interpretation" },
        { l: "Rilke sur Supervielle", r: "Une poésie qui dépasse l'humain", n: "echappe" }
      ], explain: "L'infinité de l'œuvre, exemple par exemple." },
    { part: 0, q: "Associe chaque mot à sa définition.",
      pairs: [
        { l: "Technè", r: "Savoir-faire, à la fois art et technique", n: "technique" },
        { l: "Archétype", r: "Ce qui représente fondamentalement une chose", n: "echappe" },
        { l: "Relativisme", r: "Chacun ses appréciations, sans fondement commun", n: "hume" },
        { l: "Poiesis", r: "Création, production", n: "aristote" },
        { l: "Catharsis", r: "Purgation des émotions de pitié et de crainte", n: "aristote" },
        { l: "Dénaturer", r: "Modifier la forme première d'un matériau", n: "representer" }
      ], explain: "Le vocabulaire précis fait la différence en dissertation." }
  ]);

  add("sort", [
    { part: 2, q: "Classe chaque exemple : l'art embellit-il le réel, ou le montre-t-il sans l'embellir ?",
      buckets: ["Embellit le réel", "Montre sans embellir"],
      items: [
        { t: "Le Bain turc d'Ingres", b: 0, n: "laideur" },
        { t: "Une « tricherie heureuse » pour le plaisir des yeux", b: 0, n: "laideur" },
        { t: "L'esthétique classique et l'harmonie", b: 0, n: "laideur" },
        { t: "Saturne dévorant un de ses fils", b: 1, n: "horreur" },
        { t: "Il faut sauver le soldat Ryan", b: 1, n: "horreur" },
        { t: "Les Chants de Maldoror", b: 1, n: "horreur" },
        { t: "Madame Bovary", b: 1, n: "banalite" },
        { t: "Les tableaux de Chardin", b: 1, n: "banalite" }
      ], explain: "Baudelaire contre Ingres : la laideur peut faire partie de l'art." },
    { part: 2, q: "Beauté libre ou beauté adhérente ?",
      buckets: ["Beauté libre", "Beauté adhérente"],
      items: [
        { t: "Ne dépend pas d'un concept de ce que l'objet doit être", b: 0, n: "libre-adherente" },
        { t: "Deux artistes devant la même chose, deux œuvres très différentes", b: 0, n: "libre-adherente" },
        { t: "Laisse une plus grande liberté d'appréciation", b: 0, n: "libre-adherente" },
        { t: "Suppose des normes ou des conventions", b: 1, n: "libre-adherente" },
        { t: "La statuaire grecque et ses proportions", b: 1, n: "libre-adherente" },
        { t: "Rapprochée d'une beauté conventionnelle", b: 1, n: "libre-adherente" }
      ], explain: "Kant, Critique de la faculté de juger." },
    { part: 0, q: "Range chaque référence dans la bonne partie du cours.",
      buckets: ["I. Critère artistique", "II. Le goût", "III. Art et réalité"],
      items: [
        { t: "Danto et la boîte de Brillo", b: 0, n: "danto" },
        { t: "Hölderlin et le poème parfait", b: 0, n: "ecart" },
        { t: "Chopin, archétype du romantisme", b: 0, n: "echappe" },
        { t: "Hume et la subtile sympathie", b: 1, n: "hume" },
        { t: "Baudelaire contre Ingres", b: 1, n: "laideur" },
        { t: "Hegel : beau artistique et beau naturel", b: 1, n: "hegel-beau" },
        { t: "Platon et le peintre de menuisier", b: 2, n: "platon" },
        { t: "Aristote et la catharsis", b: 2, n: "aristote" },
        { t: "Goodman et le symbole", b: 2, n: "goodman" }
      ], explain: "Situer une référence, c'est savoir dans quel argument l'utiliser." },
    { part: 3, q: "Imiter ou représenter ? Classe chaque idée.",
      buckets: ["Imiter (III, A)", "Représenter (III, B)"],
      items: [
        { t: "L'imitateur accentue certains traits", b: 0, n: "imiter" },
        { t: "Le peintre de menuisier trompe les enfants", b: 0, n: "platon" },
        { t: "Le roman, miroir le long d'un chemin", b: 0, n: "miroir" },
        { t: "Le film de dinosaures n'est pas une science", b: 0, n: "connaissance" },
        { t: "Le sculpteur dénature la pierre", b: 1, n: "representer" },
        { t: "La catharsis de la tragédie", b: 1, n: "aristote" },
        { t: "Le Penseur rend visible la pensée", b: 1, n: "goodman" },
        { t: "La madeleine de Proust", b: 1, n: "reverdy" }
      ], explain: "De l'imitation (copie trompeuse ou miroir) à la représentation (idée dans le sensible)." }
  ]);

  add("schema", [
    { part: 1, layout: "flow", q: "Complète le raisonnement de la partie I.",
      nodes: [
        { cap: "A", t: "La technique est nécessaire à l'art" },
        { cap: "A", slot: "Mais elle n'est pas suffisante", n: "technique" },
        { cap: "A", slot: "Une certaine théorie de l'art fait l'œuvre", n: "danto" },
        { cap: "B", slot: "L'artiste ne réalise pas toujours son intention", n: "ecart" },
        { cap: "B", t: "La technique, condition de la liberté" },
        { cap: "C", slot: "L'œuvre vit et signifie par son public", n: "interpretation" }
      ],
      distract: ["La beauté suffit à faire l'œuvre", "L'artiste maîtrise toujours son œuvre"],
      explain: "Ni la technique, ni l'intention, ni la condition de l'artiste ne suffisent : l'œuvre lui échappe." },
    { part: 2, layout: "tree", q: "Complète l'arbre de l'énigme du goût.",
      root: "Sur quoi fonder le goût ?",
      branches: [
        [{ slot: "Hume", n: "hume" }, { t: "Une subtile sympathie" }, { slot: "Sensibilité individuelle", n: "hume" }],
        [{ slot: "Le goût s'éduque", n: "education-gout" }, { t: "Il évolue et se transmet" }, { slot: "L'inculture dessert le goût", n: "education-gout" }],
        [{ slot: "Le goût se forme", n: "plaisir-negatif" }, { t: "Les impressionnistes, d'abord rejetés" }, { slot: "Éduquer son regard", n: "plaisir-negatif" }]
      ],
      distract: ["Platon", "Les goûts ne changent jamais"],
      explain: "Le goût part d'un sentiment, mais il ne se réduit pas à une sensibilité spontanée." },
    { part: 3, layout: "flow", q: "Complète le parcours de la partie III.",
      nodes: [
        { cap: "A", t: "Imiter n'est pas copier (Cicéron)" },
        { cap: "A", slot: "Platon : l'imitation est trompeuse", n: "platon" },
        { cap: "A", slot: "Stendhal : un miroir, pas la vie", n: "miroir" },
        { cap: "B", slot: "Représenter : une idée dans le sensible", n: "representer" },
        { cap: "B", slot: "Goodman : l'œuvre comme symbole", n: "goodman" },
        { cap: "B", t: "Reverdy : du réel extérieur au réel intérieur" }
      ],
      distract: ["L'art est une copie parfaite", "La nature copie l'art"],
      explain: "De l'imitation à la représentation et au symbole." }
  ]);

  add("grid", [
    { part: 3, q: "Coche ce que soutient chaque auteur, d'après le cours.",
      cols: ["Platon", "Aristote", "Hegel"],
      rows: [
        { t: "L'art imite de façon trompeuse et éloigne du vrai", a: [1, 0, 0], n: "platon" },
        { t: "Les artistes doivent être écartés de la cité idéale", a: [1, 0, 0], n: "platon" },
        { t: "La tragédie produit une catharsis", a: [0, 1, 0], n: "aristote" },
        { t: "L'art saisit les aspects essentiels de l'expérience humaine", a: [0, 1, 0], n: "aristote" },
        { t: "Le beau artistique est supérieur au beau naturel", a: [0, 0, 1], n: "hegel-beau" },
        { t: "L'art est, quant à sa suprême destination, une chose du passé", a: [0, 0, 1], n: "connaissance" }
      ], explain: "Trois grands noms, trois rapports à l'art." }
  ]);

  add("flash", [
    { notion: "technique", f: "Ars et technè ?", b: "Latin et grec : un même mot pour l'art et la technique, le savoir-faire. La technique est nécessaire, pas suffisante." },
    { notion: "liberal", f: "Kant : l'art et le métier ?", b: "« L'art est dit libéral, le métier est dit mercenaire » : l'art est désintéressé." },
    { notion: "danto", f: "Danto et la boîte de Brillo ?", b: "Ce qui fait l'œuvre, c'est « une certaine théorie de l'art », pas l'objet lui-même (Warhol, Duchamp)." },
    { notion: "intention", f: "Baudelaire et Poe ?", b: "Traduire sans mot à mot : la « théorie de l'effet », pour rendre le style et l'effet du texte." },
    { notion: "ecart", f: "Hölderlin ?", b: "Le poème parfait impossible : une infinité de formulations possibles d'une même idée." },
    { notion: "bride", f: "« La bride et le gouvernail » ?", b: "Léonard de Vinci : la maîtrise de la perspective permet de diriger la peinture." },
    { notion: "interpretation", f: "L'infinité de l'œuvre ?", b: "L'œuvre continue d'exister après le point final, tant que le public la fait vivre." },
    { notion: "sens-possibles", f: "Rimbaud : « tous les sens possibles » ?", b: "Plusieurs sens, mais « possibles » : pas n'importe lequel, respecter la littéralité." },
    { notion: "echappe", f: "Chopin et Bref ?", b: "Deux œuvres qui reçoivent un sens que leur auteur n'avait pas voulu." },
    { notion: "valery", f: "Valéry, Variété ?", b: "« Il n'y a pas de vrai sens d'un texte » : ne pas réduire l'œuvre à l'intention de l'auteur." },
    { notion: "laideur", f: "Baudelaire contre Ingres ?", b: "Ingres corrige la nature (Le Bain turc) : une « tricherie heureuse » pour le plaisir des yeux." },
    { notion: "banalite", f: "« Le sublime d'en bas » ?", b: "Flaubert : l'ignoble, le banal peuvent avoir leur grandeur." },
    { notion: "hegel-beau", f: "Hegel : beau naturel ou beau artistique ?", b: "Le beau artistique est supérieur : il est un produit de l'esprit." },
    { notion: "libre-adherente", f: "Beauté libre / adhérente ?", b: "Libre : sans concept de ce que l'objet doit être. Adhérente : selon un modèle (statuaire grecque)." },
    { notion: "bizarre", f: "Baudelaire et le beau ?", b: "« Multiforme et versicolore », « toujours bizarre » : étrangeté, nouveauté." },
    { notion: "hume", f: "Hume et le goût ?", b: "Une subtile sympathie : sensibilité individuelle. Risque : le relativisme." },
    { notion: "education-gout", f: "Le goût s'éduque : pourquoi ?", b: "Il évolue avec les années, il se transmet, et l'inculture le dessert." },
    { notion: "platon", f: "Platon, République X ?", b: "L'art imite une apparence, un « fantôme » ; il trompe ; les artistes sont écartés de la cité." },
    { notion: "miroir", f: "Stendhal ?", b: "« Un roman, c'est un miroir que l'on promène le long d'un chemin » : le reflet n'est pas la vie." },
    { notion: "connaissance", f: "Hegel : « une chose du passé » ?", b: "L'art n'est plus la forme suprême de la vérité ; il reste porteur de sens." },
    { notion: "aristote", f: "Poiesis et catharsis ?", b: "Création ; purgation des émotions de pitié et de crainte par la tragédie." },
    { notion: "goodman", f: "Goodman ?", b: "Un objet devient une œuvre parce que et pendant qu'il fonctionne comme symbole." },
    { notion: "reverdy", f: "Reverdy ?", b: "La poésie : « l'acte magique de transmutation du réel extérieur en réel intérieur »." }
  ]);

  /* Sujets de dissertation : choisir les bons arguments */
  add("build", [
    { part: 3, ns: ["imiter", "platon", "miroir", "representer"], q: "L'art doit-il imiter la réalité ?",
      els: [
        { t: "Imiter n'est pas copier : l'imitation est une production (l'imitateur, Cicéron)", ok: true },
        { t: "Platon : l'imitation n'est qu'un « fantôme » qui éloigne du vrai", ok: true },
        { t: "Stendhal : le roman est un miroir, mais le reflet n'est pas la vie", ok: true },
        { t: "L'art représente : il incarne une idée sous une forme sensible (Hegel, Goodman)", ok: true },
        { t: "Plus une œuvre ressemble au réel, plus elle a de valeur", ok: false, why: "Si l'art copiait parfaitement, on ne pourrait plus le distinguer de la nature." },
        { t: "Kant : l'art est libéral, le métier mercenaire", ok: false, why: "Hors sujet : cela concerne la différence entre art et métier, pas l'imitation." },
        { t: "Les goûts ne se discutent pas", ok: false, why: "Hors sujet, et contraire au cours : le goût s'éduque." }
      ],
      prob: "Si l'art imite, il reste inférieur à son modèle et peut tromper ; s'il n'imite pas, d'où tient-il son rapport au réel ?",
      plan: ["L'art semble imiter la nature (Cicéron), mais pour Platon cette imitation trompe.", "Même réaliste, l'art construit une image (Stendhal, Gladiator) : ce n'est pas une connaissance exacte (Hegel).", "L'art représente et symbolise : Harpagon, Aristote, Goodman."],
      cit: "Un roman, c'est un miroir que l'on promène le long d'un chemin." },
    { part: 1, ns: ["interpretation", "sens-possibles", "echappe", "valery"], q: "Une œuvre d'art a-t-elle un sens définitif ?",
      els: [
        { t: "L'œuvre vit par ses interprétations successives (Schubert, Molière)", ok: true },
        { t: "Rimbaud : « tous les sens possibles », mais pas n'importe lequel", ok: true },
        { t: "L'œuvre peut dépasser l'intention de son auteur (Chopin, Bref)", ok: true },
        { t: "Valéry : il n'y a pas de vrai sens d'un texte", ok: true },
        { t: "Le seul vrai sens est celui que voulait l'auteur", ok: false, why: "L'intention peut être prise en compte, mais ce n'est pas l'unique sens possible." },
        { t: "Toutes les interprétations se valent", ok: false, why: "Il faut respecter la littéralité du texte : un poème d'amour ne parle pas d'une vache." },
        { t: "Hegel : le beau artistique est supérieur au beau naturel", ok: false, why: "Hors sujet : la question porte sur le sens de l'œuvre." }
      ],
      prob: "Si l'œuvre peut toujours recevoir de nouveaux sens, peut-on encore distinguer une interprétation juste d'un contresens ?",
      plan: ["L'œuvre semble avoir le sens que lui donne son auteur : intention, biographie (Beethoven).", "Mais elle échappe à son auteur : elle vit par son public, reçoit des sens imprévus (Chopin, Bref, Proust).", "Pas de vrai sens (Valéry), mais des sens possibles : l'interprétation doit rester fondée sur l'œuvre (Rimbaud)."],
      cit: "Il n'y a pas de vrai sens d'un texte." },
    { part: 1, ns: ["intention", "ecart", "bride", "echappe"], q: "L'artiste sait-il ce qu'il fait ?",
      els: [
        { t: "Il peut avoir une idée préalable et viser une fin (commande, théorie de l'effet)", ok: true },
        { t: "Un écart demeure entre l'œuvre pensée et l'œuvre réalisée (Hölderlin)", ok: true },
        { t: "La maîtrise technique lui permet de gouverner son œuvre (Léonard)", ok: true },
        { t: "L'œuvre lui échappe une fois livrée au public (Chopin, Bref)", ok: true },
        { t: "L'artiste n'a besoin d'aucune technique", ok: false, why: "La technique est nécessaire, même si elle n'est pas suffisante." },
        { t: "Platon : les artistes doivent être chassés de la cité", ok: false, why: "Argument sur la vérité de l'imitation, pas sur la maîtrise de l'artiste." },
        { t: "L'intention de l'artiste suffit à définir l'œuvre", ok: false, why: "La condition de l'artiste ne suffit pas à distinguer l'objet d'art." }
      ],
      prob: "L'artiste maîtrise-t-il son œuvre, ou celle-ci lui échappe-t-elle toujours en partie ?",
      plan: ["L'artiste sait ce qu'il veut : idée préalable, commande, règles (Baudelaire et la théorie de l'effet).", "Mais il ne parvient pas toujours à le réaliser : écart, Hölderlin ; la technique, d'abord barrière, devient gouvernail (Léonard).", "Et l'œuvre lui échappe : elle vit par son public et dépasse son auteur (Chopin, Rilke)."],
      cit: "La perspective est la bride et le gouvernail dans la peinture." },
    { part: 2, ns: ["hume", "education-gout", "plaisir-negatif", "kant-gout"], q: "Peut-on discuter des goûts ?",
      els: [
        { t: "Hume : le goût repose sur une subtile sympathie, une sensibilité individuelle", ok: true },
        { t: "Réduit au sentiment, le goût mènerait au relativisme", ok: true },
        { t: "Le goût évolue et se transmet : il s'éduque", ok: true },
        { t: "L'inculture dessert le goût : il faut découvrir avant de juger", ok: true },
        { t: "Les goûts sont innés et ne changent jamais", ok: false, why: "Notre goût à cinq ans n'est pas celui d'aujourd'hui." },
        { t: "Qu'un goût se transmette prouve la valeur de l'œuvre", ok: false, why: "Le mauvais goût se transmet aussi." },
        { t: "Stendhal : le roman est un miroir", ok: false, why: "Hors sujet : rapport de l'art à la réalité." }
      ],
      prob: "Si le goût est un sentiment personnel, toute discussion semble vaine ; pourtant, nous débattons des œuvres et notre goût change.",
      plan: ["Le goût semble une sensibilité individuelle (Hume) : « j'aime / je n'aime pas ».", "Mais ce serait le relativisme : or le goût évolue, se transmet, s'éduque.", "On peut donc en discuter : l'inculture le dessert, le regard s'éduque (impressionnistes, cinéma)."],
      cit: "Ce qui est certain, c'est que l'inculture desservira le goût." },
    { part: 2, ns: ["laideur", "horreur", "banalite", "plaisir-negatif"], q: "L'art doit-il être beau ?",
      els: [
        { t: "L'esthétique classique associe le beau à l'harmonie et à l'embellissement", ok: true },
        { t: "Baudelaire reproche à Ingres de corriger la nature", ok: true },
        { t: "L'art peut représenter l'horreur (Goya, Spielberg, la tragédie)", ok: true },
        { t: "La banalité peut être belle (Chardin, Flaubert)", ok: true },
        { t: "Une œuvre qui représente la mort est forcément laide", ok: false, why: "Il faut distinguer la beauté de l'œuvre et ce qu'elle représente (plaisir négatif)." },
        { t: "Le Penseur de Rodin rend visible la pensée", ok: false, why: "Exemple sur le symbole, pas sur la question du beau." },
        { t: "Le seul but de l'art est le plaisir des yeux", ok: false, why: "L'art peut nous confronter à ce que nous préférerions ne pas voir." }
      ],
      prob: "Si l'art se définit par le beau, comment comprendre les œuvres qui montrent l'horrible ou le banal ?",
      plan: ["Pour l'esthétique classique, l'art embellit la nature : harmonie, proportions (Ingres).", "Mais l'art peut montrer la laideur, l'horreur et la banalité (Baudelaire, Goya, Chardin, Flaubert).", "Le beau devient multiple (Hegel, Baudelaire : « toujours bizarre ») et peut naître du terrible (plaisir négatif)."],
      cit: "Le beau est toujours bizarre." },
    { part: 1, ns: ["technique", "liberal", "danto", "goodman"], q: "Qu'est-ce qui fait qu'un objet est une œuvre d'art ?",
      els: [
        { t: "Une technique est nécessaire, mais pas suffisante (Miró)", ok: true },
        { t: "Kant : l'activité artistique est désintéressée, libérale", ok: true },
        { t: "Danto : une certaine théorie de l'art (Warhol, Duchamp)", ok: true },
        { t: "Goodman : un objet est une œuvre quand il fonctionne comme symbole", ok: true },
        { t: "Un objet est une œuvre s'il est beau", ok: false, why: "Ce qui fait l'œuvre n'est pas nécessairement sa beauté." },
        { t: "Une œuvre se reconnaît à son prix", ok: false, why: "Le désintéressement définit l'art, pas l'argent." },
        { t: "Hume : la subtile sympathie", ok: false, why: "Argument sur le goût, pas sur ce qui fait l'œuvre." }
      ],
      prob: "Si une boîte de lessive peut devenir une œuvre, où se trouve la différence entre l'objet d'art et l'objet ordinaire ?",
      plan: ["La technique est nécessaire, mais elle ne suffit pas (Miró, l'artisan).", "Le critère serait le désintéressement (Kant), mais l'artiste ne maîtrise pas tout.", "L'œuvre tient à la manière dont l'objet est pensé : une théorie de l'art (Danto), un symbole (Goodman)."],
      cit: "Ce qui fait la différence [...] c'est une certaine théorie de l'art." },
    { part: 3, ns: ["platon", "connaissance", "banalite", "reverdy"], q: "L'art nous éloigne-t-il de la réalité ?",
      els: [
        { t: "Platon : l'imitation trompe et éloigne du vrai", ok: true },
        { t: "L'art n'est pas une connaissance exacte (le film de dinosaures)", ok: true },
        { t: "L'art apprend à regarder autrement le quotidien (Chardin)", ok: true },
        { t: "L'art exprime le réel intérieur (Reverdy, la madeleine de Proust)", ok: true },
        { t: "L'art est une copie parfaite du réel", ok: false, why: "Même réaliste, il reste une construction (Stendhal)." },
        { t: "L'artiste maîtrise toujours son œuvre", ok: false, why: "Hors sujet, et contraire au cours (écart intention / résultat)." },
        { t: "Le beau artistique est un produit de l'esprit", ok: false, why: "Utile seulement si tu l'expliques : en l'état, il ne répond pas à la question du rapport au réel." }
      ],
      prob: "L'art, qui n'offre que des images, nous détourne-t-il du réel, ou nous le fait-il mieux voir ?",
      plan: ["Oui, si l'on attend de lui la vérité : Platon (fantôme), Hegel.", "Mais l'art n'est pas une science : il exprime une idée, une émotion, une expérience.", "Il nous rapproche même du réel : la banalité (Chardin, Flaubert), le réel intérieur (Reverdy)."],
      cit: "L'art reste pour nous, quant à sa suprême destination, une chose du passé." },
    { part: 2, ns: ["education-gout", "hume", "plaisir-negatif"], q: "Le goût s'éduque-t-il ?",
      els: [
        { t: "Le goût évolue au cours des années", ok: true },
        { t: "Il se transmet d'une personne à l'autre (Céline Dion, Mozart)", ok: true },
        { t: "Le regard doit parfois s'éduquer (impressionnistes, cinéma)", ok: true },
        { t: "L'inculture dessert le goût (trois chansons contre mille)", ok: true },
        { t: "Le goût est uniquement le produit de l'éducation", ok: false, why: "L'art n'est pas qu'une affaire d'éducation : il l'est aussi." },
        { t: "Aristote et la catharsis", ok: false, why: "Hors sujet." },
        { t: "Il est inutile de découvrir de nouvelles œuvres", ok: false, why: "Il faut découvrir avant de juger." }
      ],
      prob: "Le goût est-il un sentiment spontané qu'on ne peut que constater, ou une capacité qui se forme ?",
      plan: ["Le goût semble spontané : sensibilité individuelle (Hume).", "Pourtant il évolue, se transmet, et le regard s'éduque (impressionnistes, Abel Gance).", "L'inculture le dessert : élargir ses références permet de comparer et de juger (comics, musique)."],
      cit: "Nos yeux ne sont pas encore faits pour elles." },
    { part: 1, ns: ["technique", "bride", "ecart"], q: "La technique est-elle un obstacle à la liberté de l'artiste ?",
      els: [
        { t: "La technique est d'abord une barrière, une sorte d'« interdit »", ok: true },
        { t: "Une fois maîtrisée, elle devient un « gouvernail » (Léonard)", ok: true },
        { t: "La technique est nécessaire mais pas suffisante", ok: true },
        { t: "L'artiste peut se détacher volontairement de la technique (Miró)", ok: true },
        { t: "Les vrais artistes n'apprennent jamais de technique", ok: false, why: "Tout art repose sur une technique." },
        { t: "Danto et la boîte de Brillo", ok: false, why: "Argument sur ce qui fait l'œuvre, pas sur la liberté de l'artiste." },
        { t: "La beauté libre n'a aucune règle", ok: false, why: "La liberté ne signifie pas absence totale de règles." }
      ],
      prob: "Les règles techniques limitent-elles la création, ou en sont-elles la condition ?",
      plan: ["La technique contraint : apprentissage long, difficile, une sorte d'« interdit ».", "Mais elle est la condition de la liberté : la perspective est « la bride et le gouvernail » (Léonard).", "L'artiste peut enfin la transformer ou s'en détacher volontairement (Miró) : l'œuvre transcende la technique."],
      cit: "La perspective est la bride et le gouvernail dans la peinture." },
    { part: 3, ns: ["aristote", "connaissance", "goodman", "banalite"], q: "L'art peut-il nous apprendre quelque chose ?",
      els: [
        { t: "L'art n'est pas une science : il est dépassé comme connaissance exacte", ok: true },
        { t: "Aristote : l'art saisit les aspects essentiels de l'expérience humaine", ok: true },
        { t: "Harpagon fait comprendre l'avarice : la fiction dit quelque chose du réel", ok: true },
        { t: "L'art apprend à regarder autrement le quotidien (Chardin)", ok: true },
        { t: "Le film de dinosaures est une source scientifique", ok: false, why: "C'est une construction artistique, pas une connaissance scientifique." },
        { t: "L'art n'a aucune signification", ok: false, why: "Il représente et symbolise (Goodman)." },
        { t: "Hume et la subtile sympathie", ok: false, why: "Hors sujet : fondement du goût." }
      ],
      prob: "L'art, qui invente et transforme, peut-il être source de savoir sans être une science ?",
      plan: ["L'art ne donne pas une connaissance exacte : Platon, Hegel, le film de dinosaures.", "Mais il fait comprendre l'expérience humaine : Aristote (catharsis), Molière (Harpagon), Delacroix.", "Il nous apprend à voir : la banalité (Chardin), le réel intérieur (Reverdy)."],
      cit: "L'art reste pour nous, quant à sa suprême destination, une chose du passé." }
  ]);

  /* ---------------- RÉGLAGES ---------------- */
  const unit = { one: "partie", many: "parties", fem: true };
  const exam = { kind: "évaluation de philosophie", format: "une dissertation ou une explication de texte" };
  const plan = {
    defaultRead: [],
    priority: [1, 2, 3],
    essOrder: [2, 3],
    fullOrder: [1, 2, 3],
    why: {
      1: "La partie la plus riche en références (Kant, Danto, Léonard, Rimbaud, Valéry) : la base de tout sujet sur l'œuvre et l'artiste.",
      2: "Le goût et le beau : Baudelaire, Hegel, Hume, l'éducation du goût. Indispensable pour « Peut-on discuter des goûts ? ».",
      3: "Imiter et représenter : Platon, Stendhal, Aristote, Goodman. Le cœur des sujets sur l'art et la réalité."
    }
  };
  const overview = {
    title: "L'art en trois questions",
    intro: "Qu'est-ce qui fait une œuvre ? Peut-on discuter du beau ? L'art copie-t-il le réel ? Le cours suit le chemin de l'artiste à son public, puis du goût à la réalité.",
    boxes: [
      { t: "Le fil rouge", b: "L'œuvre n'est ni simple technique ni simple intention : elle vit par son public. Le beau n'est pas seulement l'harmonie, et le goût s'éduque. L'art n'imite pas le réel : il le représente et le symbolise." },
      { t: "Le piège numéro un", b: "Confondre imiter et copier, la beauté de l'œuvre et ce qu'elle représente, l'intention de l'auteur et le sens de l'œuvre." }
    ]
  };
  const tips = [
    "Pour chaque argument, donne une référence précise (auteur, œuvre) et un exemple d'œuvre d'art : Warhol, Goya, Chardin, Delacroix, Rodin…",
    "Distingue toujours imiter et copier, le beau et l'agréable, l'intention de l'auteur et le sens de l'œuvre.",
    "Pour un sujet sur le goût : Hume (sensibilité), puis le goût qui s'éduque, puis l'inculture qui le dessert.",
    "Explique une citation en décortiquant ses mots, comme le cours le fait pour « tous les sens possibles ».",
    "Termine chaque partie par une transition qui pose la question suivante, comme le cours passe de l'artiste à l'œuvre qui lui échappe."
  ];

  return { unit, exam, plan, overview, tips, parts, course, notions, exercises };
})());
