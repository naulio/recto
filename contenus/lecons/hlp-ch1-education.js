/* Recto · Spécialité HLP, chapitre 1 : Éducation, émancipation et transmission.
   Cours remis au propre à partir des 11 pages manuscrites de la classe (Axe 1 : la recherche de soi) :
   mêmes idées, mêmes auteurs, mêmes exemples, dans l'ordre des parties I à VIII.
   Chaque page indique la page des notes d'où elle vient (src). Les ajouts sont signalés « Complément » ;
   ce qui est illisible, douteux ou sans source est signalé « À vérifier », jamais complété au hasard.
   Ordre des photos reçues → pages des notes : 7→p.1, 6→p.2, 1→p.3, 4→p.4, 3→p.5, 11→p.6, 2→p.7, 5→p.8, 10→p.9, 9→p.10, 8→p.11. */
Recto.add("hlp-ch1-education", (function () {

  const parts = [
    { n: 0, roman: "", name: "Introduction", label: "Introduction", title: "Éduquer, transmettre, s'émanciper",
      metaphor: "", essence: "Éduquer, c'est conduire hors de l'ignorance ; mais toute éducation impose des normes. Comment transmettre en laissant libre ?" },
    { n: 1, roman: "I", name: "Partie I", label: "S'éduquer", title: "S'éduquer : l'injonction de l'éducation",
      metaphor: "Pourquoi éduquer ?", essence: "L'homme à l'état de nature, une éducation qui pervertit ou libère, l'autonomie, l'entrave qui libère." },
    { n: 2, roman: "II", name: "Partie II", label: "Historicité", title: "L'historicité de l'éducation",
      metaphor: "De l'outil à l'école", essence: "De la préhistoire à l'écriture, des traités du XVIIIᵉ siècle aux lois Ferry : l'éducation devient nationale." },
    { n: 3, roman: "III", name: "Partie III", label: "L'éducation moderne", title: "Le fondement de l'éducation moderne",
      metaphor: "Former un homme complet", essence: "Renaissance : Cicéron, Érasme, Montaigne et la tête bien faite." },
    { n: 4, roman: "IV", name: "Partie IV", label: "Les Lumières", title: "Au siècle des Lumières",
      metaphor: "Émanciper par le savoir", essence: "Diffuser le savoir, considérer l'enfant, l'empirisme, l'Émile de Rousseau." },
    { n: 5, roman: "V", name: "Partie V", label: "La crise de l'éducation", title: "La crise de l'éducation",
      metaphor: "Que faut-il transmettre ?", essence: "Durkheim, Dewey, Arendt, Heidegger, Foucault : l'utile, la culture, le pouvoir." },
    { n: 6, roman: "VI", name: "Partie VI", label: "Les grandes dates", title: "Les dates importantes de l'éducation",
      metaphor: "Les premières", essence: "De la première bachelière (1861) à la loi sur la parité (2000)." },
    { n: 7, roman: "VII", name: "Partie VII", label: "L'ignorance des femmes", title: "L'ignorance des femmes",
      metaphor: "Instruire les femmes ?", essence: "Une ignorance voulue, ses défenseurs (Rousseau) et ses critiques (Molière, Mill, Suchon, Fénelon)." },
    { n: 8, roman: "VIII", name: "Partie VIII", label: "Du XIXᵉ à aujourd'hui", title: "Du XIXᵉ siècle à aujourd'hui",
      metaphor: "Vers l'égalité", essence: "IIᵉ République, lois Ferry, féminisme : une égalité réelle mais inachevée." }
  ];

  /* ---------------- LE COURS, PAGE PAR PAGE ---------------- */
  const course = [
    /* ---------- Introduction ---------- */
    { id: "eduquer", part: 0, sec: "Introduction", src: "Tes notes, p. 1", title: "Éduquer : conduire hors de",
      lead: "D'où vient le mot « éduquer », et que dit-il de ce que l'éducation cherche à faire ?",
      body: [
        "*Éduquer* vient du latin *educere*, formé de *ducere*, « conduire, mener », et de *ex*, « hors de ». Éduquer, c'est donc ==conduire hors de==.",
        "Éduquer voudrait dire ==sortir l'individu de l'état d'ignorance==, lui faire dépasser ses limites jusqu'à un état supérieur. Éduquer, ce serait encadrer la croissance intellectuelle de tout individu, sans oublier le physique et la morale.",
        "On aurait besoin d'être aidé pour prendre le bon chemin, et non la « culture inculte », selon le mot de Flaubert noté en cours. Mais alors : *comment* éduquer ?"
      ],
      side: [
        { k: "def", w: "Éduquer", t: "Du latin educere : ex (hors de) + ducere (conduire). Conduire hors de l'ignorance." },
        { k: "check", t: "« Culture inculte » : l'expression est attribuée à Flaubert dans tes notes, sans œuvre précisée. Vérifie la source avant de la citer." }
      ],
      key: "Éduquer = conduire hors de (ex + ducere) : sortir de l'ignorance, dépasser ses limites, sans oublier le corps et la morale.",
      ns: ["eduquer"] },

    { id: "transmettre", part: 0, sec: "Introduction", src: "Tes notes, p. 1", title: "Transmettre sans amputer",
      lead: "En proposant des questions et du savoir, on permet à quelqu'un de s'émanciper. Mais tout programme fait des choix.",
      body: [
        "Certaines choses ne seront pas vues et deviennent inaccessibles : ==l'éducation réduirait alors le potentiel de celui qu'on éduque==. Comment faire pour qu'elle *n'ampute pas la créativité* ? Un *programme* suppose toujours une décision sur le savoir.",
        "L'éducation a donc un *devoir de transmission*. Mais quel est le but du savoir enseigné ? *Transmettre*, c'est mettre à la disposition de l'autre pour qu'il en fasse usage ; c'est aussi lui apprendre quoi faire de ce savoir, et lui laisser ==une sorte de liberté : essayer de l'utiliser==.",
        "Le problème : ==comment transmettre de telle sorte qu'on puisse s'approprier le savoir et y être libre ?=="
      ],
      side: [
        { k: "def", w: "Transmettre", t: "Mettre à la disposition de l'autre pour qu'il en fasse usage, et qu'il sache quoi en faire." },
        { k: "ex", w: "Les écoles d'art", t: "On y apprend différentes techniques, et pourtant on demande à chacun une personnalité : on y cherche l'autonomie de l'artiste." }
      ],
      key: "Tout programme choisit, donc écarte : transmettre, c'est donner un savoir et la liberté de s'en servir.",
      ns: ["transmettre"] },

    { id: "normes", part: 0, sec: "Introduction", src: "Tes notes, p. 1", title: "Toute éducation impose",
      lead: "Apprendre commence toujours par recevoir des règles qu'on n'a pas choisies.",
      body: [
        "Pour apprendre à lire, on est obligé d'apprendre les lettres ; pour écrire, les mots sont imposés. ==La façon d'écrire elle-même semble déjà priver de liberté.==",
        "La *transmission familiale* peut aussi contredire la *transmission scolaire*. Il existe des disparités entre les familles : comment faire accepter des *normes* à tous ? L'éducation s'impose ; dans certaines familles, on transmet aussi des *convictions*.",
        "Et pourtant, *educere*, c'est sortir du carcan. ==L'important est l'émancipation== : on cherche l'expansion intellectuelle."
      ],
      side: [
        { k: "ex", w: "Apprendre à lire", t: "Les lettres, l'orthographe, la forme des mots : des normes reçues avant toute liberté d'écrire." },
        { k: "check", t: "Un passage de tes notes est difficile à lire : « l'éducation s'impose et impose des éducateurs catégoriels (?) ». Il n'est pas repris ici." }
      ],
      key: "L'éducation impose des normes (lire, écrire, convictions familiales), mais son but reste d'en sortir : l'émancipation.",
      ns: ["normes"] },

    { id: "emancipation", part: 0, sec: "Introduction", src: "Tes notes, p. 1-2", title: "S'émanciper",
      lead: "L'émancipation, c'est le fait de passer de l'état d'esclave à celui d'homme libre.",
      body: [
        "S'émanciper, c'est ==ne plus subir, mais être maître de ce qui se passe autour de soi et en soi==.",
        "Le cours insiste sur le *mérite* : si un esclave était libéré, c'est qu'il l'avait mérité. ==L'émancipation se travaille, elle se construit==, notamment par les lois.",
        "L'*élévation sociale* est, chez l'humain, une façon de s'élever au-dessus de la nature. Le but de l'éducation ne serait-il pas, plutôt que de distribuer une information automatique, de ==s'élever dans la culture et à la culture== ? D'abord à la *culture de soi*."
      ],
      side: [
        { k: "plus", w: "Complément", t: "En droit romain, l'emancipatio libère le fils de l'autorité du père (manus, la main) ; libérer un esclave se dit manumissio. Dans les deux cas : sortir de la main d'un autre." },
        { k: "check", t: "La définition se termine dans tes notes par « (vers 6-7ème) » : on ne sait pas s'il s'agit d'un âge ou d'un siècle. À vérifier." }
      ],
      key: "S'émanciper : ne plus subir, devenir maître de soi. Cela se mérite et se construit, d'abord par la culture de soi.",
      ns: ["emancipation"] },

    { id: "instruction", part: 0, sec: "Quelques définitions", src: "Tes notes, p. 2", title: "Instruire, éduquer, apprendre",
      lead: "L'instruction et l'apprentissage ne se confondent pas avec l'éducation.",
      body: [
        "*L'instruction.* Instruire et éduquer semblent proches : instruire, c'est éduquer. Mais l'instruction semble ==strictement intellectuelle== : elle transmet un savoir plus ou moins théorique, fondamental, qui fait partie d'un *socle commun* pour se construire.",
        "Avant l'*Éducation nationale*, on parlait de *ministère de l'Instruction publique*. Le rôle de l'Éducation nationale est-il aussi d'éduquer ? Sinon, ce serait à l'environnement social de le faire, car ==l'instruction ne peut suffire à épanouir un individu==.",
        "*L'apprentissage.* Apprendre, c'est « à prendre » : prendre avec soi, ==assimiler des savoirs pour pouvoir en jouer==. Il faut distinguer un *contenu de connaissance* et le fait de *faire connaissance*."
      ],
      side: [
        { k: "def", w: "Instruction", t: "Transmission d'un savoir intellectuel et fondamental : un socle commun." },
        { k: "plus", w: "Complément", t: "Le ministère de l'Instruction publique devient le ministère de l'Éducation nationale en 1932." }
      ],
      key: "Instruire = transmettre un savoir ; éduquer = former toute la personne ; apprendre = prendre avec soi, assimiler pour pouvoir en jouer.",
      ns: ["instruction"] },

    /* ---------- I. S'éduquer ---------- */
    { id: "etat-nature", part: 1, sec: "A. L'injonction de l'éducation", src: "Tes notes, p. 2", title: "L'homme à l'état de nature",
      lead: "Pourquoi faudrait-il éduquer ? Parce qu'on fait des présupposés sur l'homme laissé à lui-même.",
      body: [
        "Il semble qu'il y ait des *présupposés sur l'homme dans l'état de nature*. L'*état de nature* est une fiction qui permet de comprendre pourquoi l'humain vit en société.",
        "Le présupposé est que ==l'homme y serait mauvais, incapable de croître positivement== : il faudrait donc une sorte de *guide* qui lui montre le chemin. C'est l'idée que le cours rattache à John Locke ou à Hobbes : ==l'éducation permettrait de s'améliorer==.",
        "Depuis Machiavel (XVIᵉ siècle), on a compris que l'homme peut ==vouloir le mal pour le mal, en sachant que c'est mal==."
      ],
      side: [
        { k: "def", w: "État de nature", t: "Fiction philosophique : l'homme imaginé avant toute société, pour comprendre pourquoi il vit en société." },
        { k: "plus", w: "Complément", t: "L'homme mauvais par nature correspond surtout à Hobbes (l'état de nature comme guerre de chacun contre chacun, Léviathan, 1651). Locke voit plutôt l'esprit comme une « table rase » que l'expérience remplit." }
      ],
      key: "Si l'homme est mauvais par nature (Hobbes, Machiavel), l'éducation devient une injonction : il faut un guide pour l'améliorer.",
      ns: ["etat-nature"] },

    { id: "pervertir", part: 1, sec: "A. L'injonction de l'éducation", src: "Tes notes, p. 3", title: "L'éducation pervertit-elle ?",
      lead: "L'éducation transmet des cultures et des normes. Et si c'était elle qui pervertissait l'homme ?",
      body: [
        "L'éducation inclut des cultures, des normes : ==la culture pourrait-elle être cette perversion de l'homme== ? On comprend qu'il existe des *normes éducatives* et que l'éducation est absolument nécessaire. Mais est-elle bien faite ?",
        "==Être éduqué, c'est perpétuer un système==, même s'il évolue. Au XIXᵉ siècle, les filles ont des cours de couture : c'est une éducation, mais extrêmement réductrice. Le cours évoque Simone de Beauvoir enseignant à des jeunes filles alors réduites à leurs habiletés manuelles.",
        "Il faut donc concilier l'éducation et l'émancipation : ==comment former sans entraver l'épanouissement ?=="
      ],
      side: [
        { k: "ex", w: "Les cours de couture (XIXᵉ siècle)", t: "Une éducation réelle, mais qui enferme les filles dans un rôle : perpétuer un système." },
        { k: "check", t: "Tes notes disent que Beauvoir « apprend les sciences » aux jeunes filles. Elle a surtout été professeure de philosophie dans des lycées de jeunes filles : à vérifier avant de l'écrire." }
      ],
      key: "Éduquer, c'est transmettre des normes et perpétuer un système : nécessaire, mais parfois réducteur. Comment former sans entraver ?",
      ns: ["pervertir"] },

    { id: "autonomie", part: 1, sec: "A. L'injonction de l'éducation", src: "Tes notes, p. 3", title: "L'autonomie, et ce que l'éducation manque",
      lead: "Quel que soit son bien-fondé, l'éducation a une part d'échec : rendre l'individu autonome.",
      body: [
        "*Autonomie* vient du grec *autos*, soi, et *nomos*, la loi : ==se donner sa propre norme==.",
        "L'éducation échoue en partie à rendre l'individu autonome, par *manque de curiosité* : certaines choses sont dites « inutiles ». Mais ==si tout devait être utile, on fermerait les portes aux connaissances== nécessaires à toutes les disciplines, exclues au profit des métiers pratiques.",
        "« Si ma culture s'arrêtait à l'ici et maintenant… » : en réalité, ==rien ne sert à rien==."
      ],
      side: [
        { k: "def", w: "Autonomie", t: "Du grec autos (soi) et nomos (la loi) : se donner à soi-même sa propre loi." },
        { k: "check", t: "Tes notes citent un « protocole de Lisbonne, 2003 » : il suffirait de 10 % de gens éduqués, le reste étant des « acheteurs abrutis ». Date et source à vérifier : ne l'utilise pas au bac sans source fiable." }
      ],
      key: "Autonomie = se donner sa propre loi. Une éducation réduite à l'utile échoue à la produire : rien ne sert à rien.",
      ns: ["autonomie"] },

    { id: "platon-utilite", part: 1, sec: "A. L'injonction de l'éducation", src: "Tes notes, p. 3", title: "Platon : l'art est-il utile à l'éducation ?",
      lead: "Dans La République, Platon se demande ce que c'est qu'être juste, et à quoi sert l'art dans l'éducation.",
      body: [
        "L'art n'aide ni les soldats, ni les architectes. Platon constate que ==l'art n'a d'intérêt que pour ceux dont c'est le métier==. Il en tire une morale : l'art ne sert à rien dans l'éducation, il faudrait donc le supprimer pour former un homme juste.",
        "Et pourtant, connaître des choses peut être utile à l'individu. ==Penser l'éducation en termes d'utilité réduit considérablement les capacités de l'individu.=="
      ],
      side: [
        { k: "plus", w: "Complément", t: "Dans La République, Platon surveille surtout les récits et la poésie donnés aux futurs gardiens (livres II et III) et chasse de la cité les poètes imitateurs (livre X). Il garde la musique et la gymnastique." },
        { k: "warn", t: "Ne dis pas que Platon supprime tout art : il contrôle les arts qui imitent et peuvent corrompre." }
      ],
      key: "Juger l'éducation à son utilité immédiate (Platon et l'art) réduit les capacités de l'individu.",
      ns: ["platon-utilite"] },

    { id: "alienation", part: 1, sec: "A. L'injonction de l'éducation", src: "Tes notes, p. 3", title: "Déconstruire, reconstruire",
      lead: "Un processus éducatif serait une déconstruction reconstruite.",
      body: [
        "L'*identité* se construit à travers des ==normes sociales qui existent et préexistent déjà==, et par des cultures intellectuelles.",
        "L'éducation s'impose d'abord. Mais ==une fois ce savoir maîtrisé et intériorisé, on peut s'interroger sur ce savoir : c'est là que débute l'autonomie==. L'éducation peut *aliéner* : défaire les liens, rendre étranger. Le travail et le savoir reconstruisent pour la suite.",
        "Être en train d'être, c'est toujours apprendre, ne jamais cesser d'évoluer. Alors, ==même si l'éducation bride, on peut passer au-dessus : elle ne fait pas la personnalité==."
      ],
      side: [
        { k: "def", w: "Aliéner", t: "Rendre étranger (latin alienus, « qui appartient à un autre ») ; ton cours : « défaire les liens »." },
        { k: "check", t: "Avant « l'éducation s'impose », un mot de tes notes est illisible (« de Hume » ? « de Rome » ?). Aucun auteur n'est donc attribué à cette idée." }
      ],
      key: "L'éducation s'impose, puis on interroge ce qu'on a reçu : c'est le début de l'autonomie. Elle bride, mais ne fait pas la personnalité.",
      ns: ["alienation"] },

    { id: "entrave", part: 1, sec: "A. L'injonction de l'éducation", src: "Tes notes, p. 4", title: "L'entrave qui libère",
      lead: "Toute éducation correspond à une entrave qui sera finalement le moyen de trouver sa liberté.",
      body: [
        "Grâce à l'éducation, on peut ==dépasser les règles sociales==.",
        "Léonard de Vinci a perfectionné la *perspective* en superposant des plans. Il en disait : « la perspective est la bride et le gouvernail de la peinture ». ==La règle apprise devient ce qui permet de diriger son œuvre.==",
        "D'où la question suivante : ==comment le système éducatif a-t-il évolué ?=="
      ],
      side: [
        { k: "q", t: "La perspective est la bride et le gouvernail de la peinture.", a: "Léonard de Vinci (formulation du cours)" },
        { k: "check", t: "En marge : Léonard « le premier à avoir théorisé la peinture ». Alberti avait déjà écrit De la peinture (1435) : dis plutôt « l'un des premiers »." }
      ],
      key: "L'éducation est une entrave qui libère : comme la perspective pour Léonard, la règle maîtrisée devient un gouvernail.",
      ns: ["entrave"] },

    /* ---------- II. Historicité ---------- */
    { id: "prehistoire", part: 2, sec: "a. Les enjeux de l'éducation", src: "Tes notes, p. 4", title: "Transmettre depuis la préhistoire",
      lead: "L'éducation a un enjeu fort, un enjeu social : avant même l'histoire, l'humanité cherche à transmettre son savoir.",
      body: [
        "On le sait grâce à la *paléoanthropologie*. Dès *Homo habilis*, ainsi nommé parce qu'il est, à notre connaissance, le premier à utiliser un outil.",
        "Dès qu'il a commencé à utiliser l'outil, on retrouve des *carrières de pierre* vidées : ==cela suppose un savoir-faire et une transmission de ce savoir, qui va même progresser==.",
        "On ne parle pas encore de civilisation : elle viendra avec la *sédentarisation*."
      ],
      side: [
        { k: "ex", w: "Homo habilis", t: "« L'homme habile » : un outil, un savoir-faire, une transmission. L'éducation commence avec la technique." },
        { k: "plus", w: "Complément", t: "Des outils plus anciens qu'Homo habilis ont été découverts depuis (au Kenya, vers 3,3 millions d'années) : d'où le « à notre connaissance » du cours." }
      ],
      key: "Dès la préhistoire, l'outil suppose un savoir-faire transmis et perfectionné : éduquer est un enjeu social.",
      ns: ["transmission-origines"] },

    { id: "ecriture", part: 2, sec: "a. Les enjeux de l'éducation", src: "Tes notes, p. 4", title: "Lire, écrire, et l'otium",
      lead: "Avec l'invention de l'écriture, on peut comprendre et apprendre sérieusement ces traces.",
      body: [
        "Les rapports changent : ==éduquer passe désormais par lire et écrire==. Au début, c'est réservé à un cadre très restreint : les femmes n'avaient pas droit à cet enseignement.",
        "Dans l'Antiquité, c'est l'idée de *vie oisive* : l'ingénierie est extrêmement active, alors que celui qui apprend à lire et à écrire semble *ne rien faire*. L'*otium* est devenu le loisir par évolution de la langue ; à l'origine, c'est ==occuper son esprit à le cultiver==.",
        "Cette oisiveté est réservée à l'élite. Pourtant, ==très tôt, on cherche à démocratiser ce savoir== et à étendre la culture au plus grand nombre. En France, l'éducation prend son essor dans la seconde moitié du XVIIIᵉ siècle."
      ],
      side: [
        { k: "def", w: "Otium", t: "Latin : le loisir studieux, le temps consacré à cultiver son esprit. Être oisif, c'était ne rien faire d'utile en apparence." },
        { k: "plus", w: "Complément", t: "Même idée en grec : scholè, le loisir, a donné le mot « école »." }
      ],
      key: "Éduquer devient lire et écrire, d'abord réservé à une élite oisive (otium : cultiver son esprit), puis peu à peu démocratisé.",
      ns: ["otium"] },

    { id: "traites", part: 2, sec: "a. Les enjeux de l'éducation", src: "Tes notes, p. 5", title: "Les traités d'éducation et les femmes",
      lead: "De la fin du XVIIIᵉ au début du XIXᵉ siècle, un très grand nombre de traités interrogent l'éducation, notamment celle des femmes.",
      body: [
        "Laclos explique que le moteur de l'éducation générale passe par ==l'émancipation des femmes, qui se fait par l'éducation==.",
        "Le cours cite aussi l'auteur anonyme du *Ménagier de Paris*, qui affirme la nécessité de l'éducation féminine pour le *devoir citoyen* : elle serait essentielle au royaume, et rendrait ==chaque citoyen conscient de ses droits et de ses devoirs==."
      ],
      side: [
        { k: "plus", w: "Complément", t: "Laclos, l'auteur des Liaisons dangereuses, a rédigé en 1783 des essais sur l'éducation des femmes, restés inachevés." },
        { k: "check", t: "Tes notes placent l'auteur du Ménagier de Paris au XVᵉ siècle. Ce traité anonyme est en général daté de la fin du XIVᵉ siècle (vers 1393), bien avant les traités du XVIIIᵉ. À vérifier." }
      ],
      key: "Fin XVIIIᵉ : les traités se multiplient ; l'éducation des femmes devient une condition de l'émancipation et du devoir citoyen.",
      ns: ["traites"] },

    { id: "revolution", part: 2, sec: "B. Les révolutions de l'éducation (1789-1871)", src: "Tes notes, p. 5", title: "1789-1871 : nationaliser l'éducation",
      lead: "L'époque connaît de nombreuses révolutions, et aussi de nombreuses révolutions éducatives.",
      body: [
        "Condorcet prononce un discours en faveur de l'==instruction universelle et publique== : il faut qu'un maximum de personnes sache lire et compter, et tenter d'apprendre au plus grand nombre le plus de choses possible.",
        "L'abbé Grégoire estime que tous les Français doivent parler correctement la *langue nationale*, qui devrait primer sur les autres.",
        "==On cherche alors à nationaliser l'éducation.== Et de nouvelles idéologies apparaissent."
      ],
      side: [
        { k: "def", w: "Instruction publique", t: "Organisée par l'État, pour tous : l'éducation devient l'affaire de la nation." },
        { k: "plus", w: "Complément", t: "Condorcet présente en 1792 un rapport sur l'organisation de l'instruction publique ; Grégoire rédige en 1794 un rapport contre les patois, pour « universaliser » le français." }
      ],
      key: "Révolution : Condorcet veut une instruction universelle et publique, Grégoire une langue nationale ; l'éducation devient nationale.",
      ns: ["nationaliser"] },

    { id: "utopies", part: 2, sec: "B. Les révolutions de l'éducation (1789-1871)", src: "Tes notes, p. 5", title: "Fourier, Saint-Simon, la Commune",
      lead: "De nouvelles idéologies font de l'éducation le cœur d'une société à réinventer.",
      body: [
        "Fourier (entre XVIIIᵉ et XIXᵉ siècle) propose le *phalanstère*, une ville « parfaite », lieu de vie communautaire égalitaire, comme un monastère de l'éducation. Il fait la part belle à l'éducation, y compris physique.",
        "Saint-Simon propose un projet éducatif pour toute la société : il y met au centre le ==perfectionnement de l'être humain et la collaboration des individus==, par l'éducation. Il repose sur la raison et associe les sciences et l'industrie, une idée novatrice.",
        "La *Commune de Paris* (1871) pose les bases d'une ==éducation publique et laïque== (on peut penser à Louise Michel) : elle annonce l'Éducation nationale. L'éducation doit être ==intellectuelle et manuelle==."
      ],
      side: [
        { k: "def", w: "Phalanstère", t: "Chez Fourier : une communauté de vie égalitaire, organisée autour du travail et de l'éducation." },
        { k: "ex", w: "Le fil de ces projets", t: "Tous cherchent à créer un essor de l'émancipation de l'individu." }
      ],
      key: "Fourier, Saint-Simon, la Commune : l'éducation devient un projet de société, publique, laïque, intellectuelle et manuelle.",
      ns: ["utopies"] },

    { id: "ferry", part: 2, sec: "B. Les révolutions de l'éducation (1789-1871)", src: "Tes notes, p. 6", title: "Les lois Ferry, l'inné et l'acquis",
      lead: "En 1881 et 1882, Jules Ferry fait voter des lois qui rendent l'école obligatoire, gratuite et laïque. C'est une première.",
      body: [
        "L'éducation est alors ==publique, à rebours de l'éducation religieuse== transmise aux enfants. Le développement de l'instruction va de pair avec l'idéal de l'*école républicaine*. Apparaît la *méritocratie* : ==que tout le monde puisse s'élever==.",
        "On se demande alors quelle est la part de l'*inné* et celle de l'*apprentissage* chez l'humain. On pense à Émile Zola et aux *Rougon-Macquart* : ==le poids social est plus fort que n'importe quelle volonté==, et Zola dénonce le manque de protection sociale. La liberté individuelle dépend du social."
      ],
      side: [
        { k: "def", w: "Méritocratie", t: "Chacun s'élève selon son mérite, et non selon sa naissance." },
        { k: "check", t: "Tes notes ajoutent : « vers 1885, on parle pour la première fois du droit de vote des familles ». Le sens et la date sont à vérifier." }
      ],
      key: "Ferry : école obligatoire, gratuite, laïque, idéal méritocratique. Mais Zola montre que le milieu pèse plus que la volonté.",
      ns: ["ferry", "zola"] },

    /* ---------- III. L'éducation moderne ---------- */
    { id: "renaissance", part: 3, sec: "III. Le fondement de l'éducation moderne", src: "Tes notes, p. 6", title: "La Renaissance : penser l'homme par l'éducation",
      lead: "Dès le XVᵉ siècle, les penseurs de la Renaissance conçoivent l'homme en mettant l'éducation au centre.",
      body: [
        "On pense l'homme par l'éducation : ==l'éducation pourrait façonner la nature elle-même==.",
        "On peut penser à Cicéron (latin, Iᵉʳ siècle avant J.-C.) : pour que l'humain soit autonome, il faudrait l'instruire. ==Sans instruction, l'esprit reste stérile, comme une terre en friche.==",
        "À partir du XVᵉ siècle, les philosophes cherchent à définir le ==programme capable de former un homme complet== : instruit, honnête, et pas imbu de lui-même."
      ],
      side: [
        { k: "q", t: "De même qu'une terre en friche ne donne pas de fruits, de même l'esprit est stérile quand il n'a pas été instruit.", a: "Cicéron (formulation du cours ; Tusculanes, II)" },
        { k: "plus", w: "Complément", t: "Cicéron parle de cultura animi, la « culture de l'âme » : c'est l'origine du sens intellectuel du mot culture." }
      ],
      key: "Renaissance : l'éducation façonne la nature ; Cicéron compare l'esprit sans instruction à une terre en friche ; on veut former un homme complet.",
      ns: ["renaissance"] },

    { id: "erasme-montaigne", part: 3, sec: "III. Le fondement de l'éducation moderne", src: "Tes notes, p. 6", title: "Érasme et Montaigne : la tête bien faite",
      lead: "Comment former cet homme complet ? Deux humanistes répondent.",
      body: [
        "Érasme définit les contenus d'une ==éducation encyclopédique==, proche de la culture antique, latine et grecque, en changeant quelques principes : les *précepteurs* ne doivent plus être rigides, mais montrer ==une certaine bienveillance==.",
        "Montaigne, ensuite, défend l'idée d'une tête « bien faite plutôt que bien pleine » (*Essais*). Il faut de l'instruction, ici le grec et le latin ; et pourtant, ==avoir moins de connaissances n'est pas grave si l'on sait utiliser son savoir==."
      ],
      side: [
        { k: "q", t: "Plutôt la tête bien faite que bien pleine.", a: "Montaigne, Essais, I, 26" },
        { k: "plus", w: "Complément", t: "Le chapitre s'intitule « De l'institution des enfants » (1580) : institution y veut dire éducation." }
      ],
      key: "Érasme : une éducation encyclopédique et bienveillante. Montaigne : mieux vaut une tête bien faite que bien pleine.",
      ns: ["erasme", "montaigne"] },

    /* ---------- IV. Les Lumières ---------- */
    { id: "lumieres", part: 4, sec: "IV. Au siècle des Lumières", src: "Tes notes, p. 7", title: "Diffuser le savoir, considérer l'enfant",
      lead: "Au siècle des Lumières, il y a un idéal d'émancipation par l'éducation.",
      body: [
        "Les programmes s'accroissent et deviennent de plus en plus ambitieux : fondés sur le savoir, ils cherchent à le ==diffuser au plus grand nombre==. Pour propager les savoirs, il faut d'abord diffuser l'*alphabétisation*.",
        "Kant, avec Condorcet, va dans le sens de l'*autonomie* : ==l'éducation doit être émancipatrice==. Ils proposent des programmes complets, destinés à un large public, qui suscitent de nombreuses discussions.",
        "En pensant l'éducation, on change la *considération de l'enfant* : il était vu comme un « sous-humain » ; à partir du XVIIIᵉ siècle, ==l'enfant est enfin considéré==. On le voit dans les romans, où enfants et adolescents passent au centre."
      ],
      side: [
        { k: "plus", w: "Complément", t: "Kant résume les Lumières par la devise Sapere aude : ose savoir, aie le courage de te servir de ton propre entendement (Qu'est-ce que les Lumières ?, 1784)." }
      ],
      key: "Lumières : diffuser le savoir à tous, une éducation émancipatrice (Kant, Condorcet), et l'enfant enfin considéré.",
      ns: ["lumieres", "enfant"] },

    { id: "empirisme", part: 4, sec: "IV. Au siècle des Lumières", src: "Tes notes, p. 8", title: "L'empirisme : connaître par l'expérience",
      lead: "Les pensées empiristes prennent de l'importance au XVIIIᵉ siècle.",
      body: [
        "David Hume (XVIIIᵉ siècle) et John Locke (XVIIᵉ siècle) considèrent que ==les connaissances proviennent de l'expérience==.",
        "L'expérience permet de connaître, mais ==elle ne donne pas de connaissance absolument certaine== : on ne peut pas être certain du lien logique entre nos expériences, et l'expérience ne peut pas, à elle seule, établir des *liens de causalité*.",
        "Le cours en conclut que l'éducation ne peut pas se fonder sur les seules habitudes."
      ],
      side: [
        { k: "def", w: "Empirisme", t: "Doctrine selon laquelle toute connaissance vient de l'expérience (Locke, Hume)." },
        { k: "check", t: "Cette page porte un papillon « cours sur l'empirisme » et pas de numéro de partie : elle est placée ici d'après son contenu. La conclusion de tes notes (« les habitudes éducatives ne peuvent pas se baser sur les habitudes ») est reformulée ; son sens est à préciser." }
      ],
      key: "Empirisme (Locke, Hume) : la connaissance vient de l'expérience, mais l'expérience ne donne ni certitude absolue ni causalité.",
      ns: ["empirisme"] },

    { id: "rousseau", part: 4, sec: "IV. Au siècle des Lumières", src: "Tes notes, p. 8", title: "Rousseau : l'éducateur accompagne",
      lead: "Émile ou De l'éducation, de Jean-Jacques Rousseau, compte beaucoup dans l'évolution de l'éducation : le livre est lui-même éducatif.",
      body: [
        "*Émile* est un enfant imaginaire, que Rousseau suit du plus jeune âge jusqu'à son mariage. Rousseau ==prône la liberté de mouvement==.",
        "Il faut l'*expérience* pour comprendre. Dès lors, ==l'éducateur ne doit pas avoir la figure d'un maître, mais celle d'un « accompagnateur »==.",
        "George Sand rapporte que sa grand-mère l'avait élevée selon les principes de Rousseau."
      ],
      side: [
        { k: "ex", w: "George Sand", t: "Élevée « à la Rousseau » par sa grand-mère : l'Émile a réellement changé des éducations." },
        { k: "plus", w: "Texte étudié", t: "Un extrait de l'Émile a sa fiche dans Textes et auteurs. Pour l'éducation des filles chez Rousseau, voir la partie VII." }
      ],
      key: "Rousseau, Émile : liberté de mouvement, apprendre par l'expérience, un éducateur qui accompagne au lieu de commander.",
      ns: ["rousseau"] },

    /* ---------- V. La crise de l'éducation ---------- */
    { id: "durkheim", part: 5, sec: "V. La crise de l'éducation", src: "Tes notes, p. 7", title: "Durkheim contre le gavage",
      lead: "La crise de l'éducation prend son essor au début du XXᵉ siècle : il y a tant de courants éducatifs qu'on ne sait plus lequel suivre.",
      body: [
        "On peut penser à Émile Durkheim, fondateur de la sociologie. Il s'engage dans une ==critique de l'éducation classique==, c'est-à-dire de la manière d'enseigner : par exemple, la littérature serait trop abstraite.",
        "Le *gavage* ne permettrait ni de connaître ni d'utiliser le savoir : pour Durkheim, ==le savoir doit pouvoir être utilisé==. Il rapproche cela de l'apprentissage des sciences, avec leurs lois expérimentales, et voudrait faire de même dans le domaine littéraire."
      ],
      side: [
        { k: "def", w: "Gavage", t: "Remplir l'élève de savoirs sans qu'il sache s'en servir : le contraire de la tête bien faite." },
        { k: "plus", w: "Complément", t: "Émile Durkheim (1858-1917), un des fondateurs de la sociologie, a écrit Éducation et sociologie (publié en 1922)." }
      ],
      key: "Début du XXᵉ siècle : la crise de l'éducation. Durkheim critique le gavage : un savoir doit pouvoir être utilisé.",
      ns: ["durkheim"] },

    { id: "dewey", part: 5, sec: "V. La crise de l'éducation", src: "Tes notes, p. 7", title: "Dewey : l'élève acteur",
      lead: "Durkheim fait aussi le lien avec une démarche venue des États-Unis, qui interroge la manière d'enseigner.",
      body: [
        "En cause, la *dissymétrie éducative* : la séparation entre ==le maître qui enseigne et l'élève qui absorbe le savoir==. Elle semble défavorable à l'enseignement : l'élève ne voit pas l'attrait de la matière. ==Le professeur doit montrer l'intérêt de la matière.==",
        "Cette réflexion s'inspire de John Dewey, qui développe des idées pédagogiques nouvelles et pense que ==l'élève doit être acteur de ses apprentissages==. Le cours lui associe la naissance des *sciences de l'éducation*."
      ],
      side: [
        { k: "def", w: "Dissymétrie éducative", t: "Le maître sait et parle, l'élève reçoit et se tait." },
        { k: "check", t: "Tes notes datent Dewey de « 1840-1855 » : il a vécu de 1859 à 1952. Elles disent aussi que « l'enseignement américain est fondé sur la dissymétrie », alors que la suite montre que cette démarche la critique. Et « 60 % de la capacité de savoir se passe en cours » n'a pas de source." }
      ],
      key: "Contre la dissymétrie maître / élève : montrer l'intérêt de la matière, faire de l'élève l'acteur de ses apprentissages (Dewey).",
      ns: ["dewey"] },

    { id: "arendt", part: 5, sec: "V. La crise de l'éducation", src: "Tes notes, p. 9", title: "Arendt : une éducation conservatrice",
      lead: "Hannah Arendt attribue cette crise de l'éducation notamment au courant pragmatique.",
      body: [
        "Le pragmatisme veut n'apprendre aux élèves que ce qui est *utile*, le nécessaire. ==On réduirait alors la culture, ce qui est extrêmement dangereux intellectuellement==, et peut-être politiquement.",
        "Dans *La Crise de la culture*, ==l'éducation est de nature conservatrice== : il est important de savoir ce qu'ont fait nos ancêtres. C'est un ==devoir moral de transmettre ses avancées==, et les enfants doivent pouvoir s'approprier le nécessaire.",
        "Si l'on n'apprenait aux enfants que le strict nécessaire, ils seraient les premiers à en pâtir : ==ils n'auraient pas de choix dans leur vie==. Ce serait une éducation de propagande."
      ],
      side: [
        { k: "warn", t: "« Conservatrice » ne veut pas dire réactionnaire : il s'agit de conserver un monde commun pour le transmettre aux nouveaux venus." },
        { k: "plus", w: "Texte étudié", t: "Un extrait de La Crise de l'éducation d'Arendt a sa fiche dans Textes et auteurs." }
      ],
      key: "Arendt : réduire l'éducation à l'utile appauvrit la culture ; éduquer, c'est conserver et transmettre un monde commun.",
      ns: ["arendt"] },

    { id: "ici-maintenant", part: 5, sec: "V. La crise de l'éducation", src: "Tes notes, p. 9", title: "Au-delà de l'ici et du maintenant",
      lead: "Pourquoi ne pas s'en tenir à ce qui est utile tout de suite ? Parce qu'une connaissance limitée au présent ne serait presque rien.",
      body: [
        "Le cours cite Martin Heidegger (*Être et temps*) : si la connaissance se réduisait à l'ici et au maintenant, nous ne connaîtrions finalement rien.",
        "*L'ici*, c'est ce que l'on peut percevoir par les sens : cela ne va pas très loin. *Le maintenant*, c'est le temps : ==on ne connaîtrait que le présent==.",
        "Le cours évoque aussi Aristote, qui dans la *Physique* cherche à comprendre la *chute des corps* : il a l'impression que certains objets ne tombent pas, comme la fumée. En marge : Socrate, Platon, Aristote, ==un savoir transmis de maître en élève==."
      ],
      side: [
        { k: "q", t: "[Si la connaissance] se réduisait à l'ici et au maintenant, nous ne connaîtrions en fin de compte rien.", a: "Heidegger, Être et temps (d'après le cours)" },
        { k: "check", t: "Attribution à vérifier : l'analyse de « l'ici » et du « maintenant » comme savoir le plus pauvre est célèbre chez Hegel (Phénoménologie de l'esprit, « la certitude sensible »). Tes notes ne disent pas non plus pourquoi Aristote est cité." }
      ],
      key: "Une culture limitée à l'ici (les sens) et au maintenant (le présent) ne connaîtrait rien : transmettre, c'est élargir.",
      ns: ["ici-maintenant"] },

    { id: "foucault", part: 5, sec: "V. La crise de l'éducation", src: "Tes notes, p. 9", title: "Foucault : une relation de pouvoir",
      lead: "Michel Foucault montre que la relation entre l'élève et l'enseignant est nécessairement une relation de pouvoir.",
      body: [
        "Si pouvoir il y a, ==il ne faut pas qu'il soit absolu==, au risque d'un *décrochage* : l'élève doit pouvoir comprendre l'enseignement, à travers son intérêt.",
        "Sinon, ==le but de l'éducation n'est pas respecté : l'élève ne pourra pas s'élever==."
      ],
      side: [
        { k: "plus", w: "Complément", t: "Dans Surveiller et punir (1975), Foucault range l'école parmi les institutions disciplinaires, avec la caserne et la prison : surveiller, classer, examiner." },
        { k: "check", t: "Fin de phrase peu lisible dans tes notes : « à travers l'intérêt » est la lecture la plus probable." }
      ],
      key: "Enseigner suppose un pouvoir ; absolu, il fait décrocher l'élève et trahit le but de l'éducation : élever.",
      ns: ["foucault"] },

    /* ---------- VI. Les grandes dates ---------- */
    { id: "dates", part: 6, sec: "VI. Les dates importantes de l'éducation", src: "Tes notes, p. 9-10", title: "Les « premières » des femmes",
      lead: "Le cours retient une série de « premières » : des dates à connaître.",
      body: [
        ["*1861* : Julie-Victoire Daubié, première bachelière française.", "*1875* : Madeleine Brès, première femme docteure en médecine.", "*1880* : la Sorbonne ouvre ses portes aux femmes ; on ouvre des lycées pour les filles.", "*1903* : Marie Curie, première femme prix Nobel.", "*1944* : droit de vote des femmes, le suffrage devient universel.", "*1972* : première loi sur l'égalité des salaires.", "*1974* : la loi Veil.", "*1975* : la loi Haby rend la mixité scolaire obligatoire.", "*1991* : Édith Cresson, première femme Première ministre.", "*2000* : loi sur la parité."]
      ],
      side: [
        { k: "plus", w: "Complément", t: "1880 est l'année de la loi Camille Sée, qui crée les lycées de jeunes filles. La loi Veil est votée fin 1974 et promulguée en janvier 1975." },
        { k: "check", t: "En marge, deux chiffres « en 2026 » sans source : 10 % des élèves de licence au niveau de compréhension d'un enfant de CM2, 90 % des masters « faits par l'intelligence artificielle ». Ne les utilise pas sans les vérifier." }
      ],
      key: "1861 Daubié · 1875 Brès · 1880 lycées de filles · 1903 Curie · 1944 vote · 1975 mixité · 2000 parité.",
      ns: ["dates"] },

    /* ---------- VII. L'ignorance des femmes ---------- */
    { id: "ignorance", part: 7, sec: "VII. L'ignorance des femmes", src: "Tes notes, p. 10", title: "Une ignorance voulue",
      lead: "Volonté politique : les femmes doivent être cantonnées à l'activité domestique.",
      body: [
        "On prétend qu'elles n'ont pas les compétences intellectuelles pour davantage. Il y a ==une volonté des hommes de maintenir les femmes dans la bêtise, car elles sont plus faciles à contrôler==.",
        "Jusqu'à la fin du XVIIIᵉ siècle, l'éducation des femmes est presque uniquement *religieuse* ; les plus riches sont aussi initiées aux arts. ==Le but : être de bonnes épouses et des hôtesses agréables.== Dans les couvents, on leur apprend à lire et à écrire, mais rien au niveau scientifique.",
        "Rousseau explique clairement que ==les femmes n'ont pas à être élevées comme les hommes==, car elles auraient un rôle subalterne."
      ],
      side: [
        { k: "warn", t: "Complément : le Rousseau qui veut un éducateur « accompagnateur » pour Émile réserve à Sophie, sa future épouse, une éducation tournée vers l'homme. Une éducation « libératrice » n'est donc pas neutre." },
        { k: "ex", w: "Les couvents", t: "Lire, écrire, prier, tenir une maison : une instruction sans sciences." }
      ],
      key: "Jusqu'au XVIIIᵉ siècle : une éducation religieuse et domestique, pour plaire et servir ; Rousseau lui-même refuse aux filles l'éducation des garçons.",
      ns: ["ignorance"] },

    { id: "defenseurs", part: 7, sec: "VII. L'ignorance des femmes", src: "Tes notes, p. 10", title: "Défendre l'éducation des femmes",
      lead: "Des auteurs vont remettre en cause l'absence d'éducation des femmes.",
      body: [
        "Molière défend l'éducation des femmes en caricaturant, notamment dans *L'École des femmes*. On peut penser aussi à Mill, qui dénonce l'*assujettissement* de la femme en montrant qu'il faut l'éduquer.",
        "Gabrielle Suchon rédige plusieurs ouvrages pour montrer que ==l'émancipation des femmes est possible, et nécessaire pour élever la société elle-même==.",
        "Fénelon, dans le *Traité de l'éducation des filles*, montre que le rôle des femmes dans l'éducation des enfants est important : ==si elles n'ont pas de savoir, leurs enfants auront du mal à s'émanciper à leur tour==."
      ],
      side: [
        { k: "warn", t: "Complément : dans L'École des femmes (1662), Molière ridiculise Arnolphe, qui veut une épouse ignorante ; mais dans Les Femmes savantes (1672), il se moque aussi des femmes pédantes. Sa position se discute." },
        { k: "plus", w: "Texte étudié", t: "Un extrait de Mill (De l'assujettissement des femmes) a sa fiche dans Textes et auteurs." }
      ],
      key: "Molière, Mill, Suchon, Fénelon : éduquer les femmes est possible, juste, et nécessaire à toute la société, à commencer par les enfants.",
      ns: ["defenseurs"] },

    { id: "autodidactes", part: 7, sec: "VII. L'ignorance des femmes", src: "Tes notes, p. 10", title: "Les autodidactes : Émilie du Châtelet",
      lead: "Certaines femmes ont eu accès à l'éducation, mais c'était rare et privilégié.",
      body: [
        "La plupart du temps, elles sont ==autodidactes==.",
        "Exemple : Émilie du Châtelet, au XVIIIᵉ siècle, se forme toute seule à la physique et aux mathématiques. ==Elle est l'une des premières traductrices de Newton.=="
      ],
      side: [
        { k: "def", w: "Autodidacte", t: "Qui s'instruit seul, sans maître." },
        { k: "plus", w: "Complément", t: "Sa traduction des Principes mathématiques de Newton, publiée après sa mort (1756-1759), reste longtemps la seule en français." }
      ],
      key: "Privées d'école, des femmes s'instruisent seules : Émilie du Châtelet, physicienne et traductrice de Newton.",
      ns: ["autodidactes"] },

    /* ---------- VIII. Du XIXe à aujourd'hui ---------- */
    { id: "egalite", part: 8, sec: "VIII. Du XIXᵉ siècle à aujourd'hui", src: "Tes notes, p. 11", title: "Vers l'égalité",
      lead: "Une volonté d'égalité prend corps sous la IIᵉ République : quelques lois permettent l'éducation des femmes.",
      body: [
        "En 1870 commence la IIIᵉ République : avec les *lois Ferry*, ==l'école est accessible à tous==, même si les programmes ne sont pas les mêmes pour les filles et pour les garçons.",
        "Au XXᵉ siècle, de réels progrès sont impulsés par le *mouvement féministe* : Simone de Beauvoir, *Le Deuxième Sexe*.",
        "Aujourd'hui, ==l'éducation des filles et des garçons est la même, mais pas partout dans le monde==, et il reste des inégalités salariales.",
        "Ouverture : on essaie de penser une *éducation sensible*. Mais ==peut-on transmettre la sensibilité ?=="
      ],
      side: [
        { k: "q", t: "On ne naît pas femme : on le devient.", a: "Simone de Beauvoir, Le Deuxième Sexe (1949) · complément" },
        { k: "plus", w: "Complément", t: "Sous la IIᵉ République, la loi Falloux (1850) impose une école de filles dans les communes de plus de 800 habitants." }
      ],
      key: "IIᵉ République, lois Ferry, féminisme (Beauvoir) : l'égalité progresse, mais reste inachevée (dans le monde, les salaires). Peut-on transmettre la sensibilité ?",
      ns: ["egalite"] }
  ];

  /* ---------------- FICHES ---------------- */
  const T = id => "#/hlp/texte/" + id;
  const notions = {
    "eduquer": { part: 0, title: "Éduquer : conduire hors de",
      essentiel: "Éduquer vient du latin educere : ex (hors de) + ducere (conduire). Éduquer, c'est sortir l'individu de l'ignorance, lui faire dépasser ses limites, encadrer sa croissance intellectuelle sans oublier le physique et la morale.",
      retenir: ["educere = conduire hors de.", "Sortir de l'ignorance, dépasser ses limites.", "Encadrer la croissance intellectuelle, physique et morale.", "Être aidé pour prendre le bon chemin."],
      citation: "", piege: "« Culture inculte » (Flaubert) : l'expression vient de tes notes sans source précise, vérifie-la avant de la citer.",
      video: "étymologie éduquer educere conduire hors de philosophie" },
    "transmettre": { part: 0, title: "Transmettre sans amputer",
      essentiel: "Tout programme est une décision sur le savoir : ce qui n'est pas vu devient inaccessible, et l'éducation peut réduire le potentiel de l'élève. Transmettre, c'est mettre un savoir à disposition pour qu'on en fasse usage, avec la liberté de l'utiliser.",
      retenir: ["Un programme choisit, donc écarte.", "Comment ne pas amputer la créativité ?", "Transmettre = mettre à disposition pour un usage.", "Écoles d'art : des techniques, mais une personnalité pour chacun."],
      citation: "", piege: "Transmettre n'est pas seulement donner un contenu : c'est aussi apprendre quoi en faire.",
      video: "transmettre le savoir philosophie éducation liberté" },
    "normes": { part: 0, title: "Toute éducation impose des normes",
      essentiel: "Apprendre à lire et à écrire, c'est recevoir des normes (lettres, mots, façon d'écrire). La transmission familiale peut contredire l'école. L'éducation s'impose ; pourtant, educere, c'est sortir du carcan : l'important est l'émancipation.",
      retenir: ["Lire : obligé d'apprendre les lettres.", "La façon d'écrire prive déjà de liberté.", "Famille et école peuvent se contredire.", "Le but reste l'émancipation, l'expansion intellectuelle."],
      citation: "", piege: "Ne conclus pas que l'éducation est une prison : les normes sont le point de départ de l'émancipation.",
      video: "éducation normes liberté philosophie" },
    "emancipation": { part: 0, title: "S'émanciper",
      essentiel: "L'émancipation est le passage de l'état d'esclave à celui d'homme libre : ne plus subir, être maître de ce qui se passe autour de soi et en soi. Elle se mérite, se travaille, se construit, notamment par les lois. L'éducation vise à s'élever dans la culture, d'abord la culture de soi.",
      retenir: ["De l'esclave à l'homme libre.", "Ne plus subir, être maître de soi.", "Le mérite : l'émancipation se construit.", "S'élever dans la culture et à la culture."],
      citation: "", piege: "L'émancipation n'est pas donnée d'un coup : elle se travaille.",
      video: "émancipation définition philosophie éducation" },
    "instruction": { part: 0, title: "Instruction et apprentissage",
      essentiel: "L'instruction transmet un savoir intellectuel et fondamental, un socle commun ; elle ne suffit pas à épanouir un individu. Apprendre, c'est « à prendre » : prendre avec soi, assimiler des savoirs pour pouvoir en jouer.",
      retenir: ["Instruire, c'est éduquer, mais seulement l'intellect.", "Ministère de l'Instruction publique, puis Éducation nationale.", "L'instruction seule n'épanouit pas.", "Contenu de connaissance ≠ faire connaissance."],
      citation: "", piege: "Instruire et éduquer ne sont pas synonymes : l'éducation forme toute la personne.",
      video: "différence instruction éducation philosophie" },
    "etat-nature": { part: 1, title: "L'injonction de l'éducation",
      essentiel: "L'état de nature est une fiction pour comprendre pourquoi l'homme vit en société. Si l'homme y est mauvais, incapable de croître positivement, il lui faut un guide : l'éducation permettrait de s'améliorer (Locke ou Hobbes selon le cours). Depuis Machiavel, l'homme peut vouloir le mal pour le mal.",
      retenir: ["État de nature : une fiction.", "Présupposé : l'homme serait mauvais.", "D'où la nécessité d'un guide.", "Machiavel : vouloir le mal en sachant que c'est mal."],
      citation: "", piege: "L'homme mauvais par nature, c'est surtout Hobbes ; Locke pense plutôt l'esprit comme une table rase.",
      video: "état de nature Hobbes Locke éducation" },
    "pervertir": { part: 1, title: "L'éducation pervertit-elle ?",
      essentiel: "L'éducation inclut des cultures et des normes : la culture pourrait-elle pervertir l'homme ? Être éduqué, c'est perpétuer un système, même s'il évolue (les cours de couture des filles au XIXᵉ siècle). Comment former sans entraver l'épanouissement ?",
      retenir: ["L'éducation est nécessaire, mais est-elle bien faite ?", "Être éduqué = perpétuer un système.", "Les cours de couture : une éducation réductrice.", "Concilier formation et épanouissement."],
      citation: "", piege: "Le cours ne rejette pas l'éducation : il interroge la manière dont elle est faite.",
      video: "l'éducation est-elle neutre philosophie HLP" },
    "autonomie": { part: 1, title: "L'autonomie",
      essentiel: "Autonomie : autos (soi) + nomos (la loi), se donner sa propre norme. L'éducation échoue en partie à la produire, par manque de curiosité, quand on juge certaines choses inutiles. Mais si tout devait être utile, on fermerait les portes de la connaissance : rien ne sert à rien.",
      retenir: ["autos + nomos : sa propre loi.", "Une part d'échec de toute éducation.", "Le manque de curiosité pour l'« inutile ».", "Rien ne sert à rien."],
      citation: "", piege: "Le « protocole de Lisbonne » de tes notes n'a pas de source vérifiée : ne le cite pas.",
      video: "autonomie définition Kant éducation" },
    "platon-utilite": { part: 1, title: "Platon : l'utilité de l'art",
      essentiel: "Dans La République, Platon se demande ce qu'est être juste et à quoi sert l'art dans l'éducation : il n'aide ni les soldats ni les architectes, il faudrait donc le supprimer. Pourtant, penser l'éducation en termes d'utilité réduit considérablement les capacités de l'individu.",
      retenir: ["L'art n'intéresse que ceux dont c'est le métier.", "Morale : supprimer l'art pour former un homme juste.", "Mais connaître peut servir à l'individu.", "L'utilité réduit les capacités."],
      citation: "", piege: "Platon ne supprime pas tout art : il chasse les poètes imitateurs et garde musique et gymnastique.",
      video: "Platon République éducation art poètes" },
    "alienation": { part: 1, title: "Aliénation et autonomie",
      essentiel: "Un processus éducatif est une déconstruction reconstruite : l'identité se construit par des normes sociales préexistantes. L'éducation s'impose, puis, une fois le savoir maîtrisé et intériorisé, on peut l'interroger : c'est là que commence l'autonomie. L'éducation peut aliéner, mais elle ne fait pas la personnalité.",
      retenir: ["Déconstruction reconstruite.", "Maîtriser, intérioriser, puis interroger.", "Aliéner = rendre étranger.", "L'éducation bride, mais ne fait pas la personnalité."],
      citation: "", piege: "L'autonomie ne s'oppose pas à l'éducation : elle vient après elle.",
      video: "aliénation définition philosophie" },
    "entrave": { part: 1, title: "L'entrave qui libère",
      essentiel: "Toute éducation est une entrave qui devient le moyen de trouver sa liberté. Léonard de Vinci : la perspective est la bride et le gouvernail de la peinture. La règle maîtrisée permet de diriger. Transition : comment le système éducatif a-t-il évolué ?",
      retenir: ["L'éducation permet de dépasser les règles sociales.", "Léonard perfectionne la perspective.", "Bride et gouvernail : diriger.", "Vers l'histoire de l'éducation."],
      citation: "La perspective est la bride et le gouvernail de la peinture.", piege: "La contrainte n'est pas l'opposé de la liberté : maîtrisée, elle la rend possible.",
      video: "Léonard de Vinci perspective bride gouvernail" },
    "transmission-origines": { part: 2, title: "Transmettre depuis la préhistoire",
      essentiel: "L'éducation a un enjeu social. Dès Homo habilis, premier à utiliser un outil à notre connaissance, on retrouve des carrières de pierre vidées : cela suppose un savoir-faire et sa transmission, qui progresse. La civilisation viendra avec la sédentarisation.",
      retenir: ["Paléoanthropologie.", "Homo habilis : l'outil.", "Savoir-faire + transmission.", "Pas encore de civilisation : la sédentarisation viendra."],
      citation: "", piege: "« À notre connaissance » : des outils plus anciens ont été découverts depuis.",
      video: "Homo habilis outil transmission préhistoire" },
    "otium": { part: 2, title: "L'écriture et l'otium",
      essentiel: "Avec l'écriture, éduquer passe par lire et écrire, d'abord pour une élite ; les femmes n'y avaient pas droit. Dans l'Antiquité, apprendre semble ne rien faire : c'est l'otium, occuper son esprit à le cultiver. Très tôt, on cherche à démocratiser ce savoir ; en France, l'essor vient dans la seconde moitié du XVIIIᵉ siècle.",
      retenir: ["Éduquer = lire et écrire.", "Réservé à une élite, pas aux femmes.", "Otium : cultiver son esprit (devenu « loisir »).", "Démocratiser le savoir."],
      citation: "", piege: "L'oisiveté antique n'est pas la paresse : c'est le temps de cultiver son esprit.",
      video: "otium loisir antiquité école scholè" },
    "traites": { part: 2, title: "Les traités et l'éducation des femmes",
      essentiel: "De la fin du XVIIIᵉ au début du XIXᵉ siècle, de nombreux traités interrogent l'éducation des femmes. Laclos : l'éducation générale passe par l'émancipation des femmes, par l'éducation. Le Ménagier de Paris : l'éducation féminine est nécessaire au devoir citoyen.",
      retenir: ["Beaucoup de traités sur l'éducation des femmes.", "Laclos : émanciper les femmes par l'éducation.", "Le Ménagier de Paris : le devoir citoyen.", "Droits et devoirs de chaque citoyen."],
      citation: "", piege: "Le Ménagier de Paris est bien plus ancien (vers 1393) que tes notes ne le disent : vérifie.",
      video: "Laclos éducation des femmes" },
    "nationaliser": { part: 2, title: "Nationaliser l'éducation (Révolution)",
      essentiel: "1789-1871 : des révolutions éducatives. Condorcet défend une instruction universelle et publique : que le plus grand nombre sache lire et compter. L'abbé Grégoire veut que tous parlent correctement la langue nationale. On cherche à nationaliser l'éducation.",
      retenir: ["Condorcet : instruction universelle et publique.", "Lire et compter pour le plus grand nombre.", "Grégoire : la langue nationale avant les autres.", "Nationaliser l'éducation."],
      citation: "", piege: "Instruction publique ne veut pas encore dire école obligatoire : ce sera Ferry.",
      video: "Condorcet instruction publique révolution française" },
    "utopies": { part: 2, title: "Fourier, Saint-Simon, la Commune",
      essentiel: "Fourier imagine le phalanstère, communauté égalitaire et monastère de l'éducation (éducation physique comprise). Saint-Simon place au centre le perfectionnement humain et la collaboration, par l'éducation, en associant sciences et industrie. La Commune (1871) pose les bases d'une éducation publique, laïque, intellectuelle et manuelle.",
      retenir: ["Fourier : le phalanstère.", "Saint-Simon : sciences et industrie.", "La Commune : publique et laïque (Louise Michel).", "But commun : l'émancipation de l'individu."],
      citation: "", piege: "Ces projets sont des utopies : ils comptent par les idées qu'ils lancent.",
      video: "Fourier phalanstère Saint-Simon Commune éducation" },
    "ferry": { part: 2, title: "Les lois Ferry",
      essentiel: "1881-1882 : les lois Ferry rendent l'école obligatoire, gratuite et laïque. L'éducation devient publique, à rebours de l'éducation religieuse ; elle porte l'idéal de l'école républicaine et de la méritocratie : que tout le monde puisse s'élever.",
      retenir: ["Obligatoire, gratuite, laïque.", "Publique, contre l'éducation religieuse.", "L'école républicaine.", "La méritocratie."],
      citation: "", piege: "Gratuite et obligatoire ne veut pas dire identique : filles et garçons n'ont pas les mêmes programmes.",
      video: "lois Jules Ferry école gratuite laïque obligatoire", link: T("ferry-lettre"), linkLabel: "Texte étudié : Ferry" },
    "zola": { part: 2, title: "Zola : l'inné et l'acquis",
      essentiel: "Quelle est la part d'inné et d'apprentissage chez l'humain ? Dans les Rougon-Macquart, Zola montre que le poids social est plus fort que n'importe quelle volonté, et dénonce le manque de protection sociale : la liberté individuelle dépend du social.",
      retenir: ["Inné ou appris ?", "Les Rougon-Macquart.", "Le milieu pèse plus que la volonté.", "La liberté individuelle dépend du social."],
      citation: "", piege: "Zola ne nie pas la volonté : il montre qu'elle pèse peu face au milieu.",
      video: "Zola Rougon-Macquart hérédité milieu" },
    "renaissance": { part: 3, title: "La Renaissance et Cicéron",
      essentiel: "Dès le XVᵉ siècle, on pense l'homme par l'éducation, qui pourrait façonner la nature elle-même. Cicéron : sans instruction, l'esprit est stérile comme une terre en friche. On cherche le programme qui forme un homme complet : instruit, honnête, pas imbu de lui-même.",
      retenir: ["L'éducation au centre de l'homme.", "Façonner la nature elle-même.", "Cicéron : la terre en friche.", "L'homme complet."],
      citation: "De même qu'une terre en friche ne donne pas de fruits, de même l'esprit est stérile quand il n'a pas été instruit.",
      piege: "La citation de Cicéron est une formulation du cours : présente-la comme telle.",
      video: "Cicéron culture de l'âme cultura animi" },
    "erasme": { part: 3, title: "Érasme : une éducation bienveillante",
      essentiel: "Érasme définit une éducation encyclopédique, proche de la culture antique, latine et grecque, en changeant certains principes : les précepteurs doivent quitter leur rigidité pour une certaine bienveillance.",
      retenir: ["Éducation encyclopédique.", "Culture antique, latine et grecque.", "Fin de la rigidité des précepteurs.", "Bienveillance."],
      citation: "", piege: "Encyclopédique ne veut pas dire « tout apprendre par cœur » : Montaigne précisera.",
      video: "Érasme éducation humanisme" },
    "montaigne": { part: 3, title: "Montaigne : la tête bien faite",
      essentiel: "Montaigne (Essais) préfère une tête bien faite à une tête bien pleine : il faut de l'instruction (grec, latin), mais avoir moins de connaissances n'est pas grave si l'on sait utiliser son savoir.",
      retenir: ["Bien faite plutôt que bien pleine.", "De l'instruction, mais pas du gavage.", "Savoir utiliser son savoir.", "Essais, I, 26."],
      citation: "Plutôt la tête bien faite que bien pleine.", piege: "Montaigne ne méprise pas le savoir : il le subordonne au jugement.",
      video: "Montaigne tête bien faite plutôt que bien pleine" },
    "lumieres": { part: 4, title: "Les Lumières",
      essentiel: "Au siècle des Lumières, un idéal d'émancipation par l'éducation : des programmes plus ambitieux, diffuser le savoir au plus grand nombre, d'abord par l'alphabétisation. Kant et Condorcet vont dans le sens de l'autonomie : l'éducation doit être émancipatrice.",
      retenir: ["Diffuser le savoir à tous.", "D'abord l'alphabétisation.", "Kant, Condorcet : l'autonomie.", "Une éducation émancipatrice."],
      citation: "", piege: "La devise « Sapere aude » est un complément : elle n'est pas dans tes notes.",
      video: "Kant qu'est-ce que les Lumières sapere aude" },
    "enfant": { part: 4, title: "L'enfant enfin considéré",
      essentiel: "En pensant l'éducation, on change la considération de l'enfant : vu comme un « sous-humain », il est enfin considéré à partir du XVIIIᵉ siècle. Les romans le montrent : enfants et adolescents passent au centre.",
      retenir: ["Avant : un « sous-humain ».", "XVIIIᵉ siècle : une nouvelle dimension.", "L'enfant est enfin considéré.", "Les romans le placent au centre."],
      citation: "", piege: "C'est la manière de penser l'éducation qui change le regard sur l'enfant.",
      video: "l'enfance au XVIIIe siècle Rousseau" },
    "empirisme": { part: 4, title: "L'empirisme",
      essentiel: "Pour Locke (XVIIᵉ) et Hume (XVIIIᵉ), les connaissances viennent de l'expérience. Mais l'expérience ne donne pas de certitude absolue : on ne peut être certain du lien logique entre nos expériences, ni établir par elle seule la causalité.",
      retenir: ["Locke, Hume : l'expérience.", "Pas de certitude absolue.", "Pas de lien de causalité prouvé.", "L'éducation ne peut reposer sur la seule habitude."],
      citation: "", piege: "Locke est du XVIIᵉ siècle, Hume du XVIIIᵉ.",
      video: "empirisme Locke Hume causalité habitude" },
    "rousseau": { part: 4, title: "Rousseau, Émile",
      essentiel: "Émile ou De l'éducation suit un enfant imaginaire du plus jeune âge au mariage. Rousseau prône la liberté de mouvement et l'expérience pour comprendre : l'éducateur n'est pas un maître mais un « accompagnateur ». George Sand fut élevée selon ces principes.",
      retenir: ["Émile, enfant imaginaire.", "Liberté de mouvement.", "Comprendre par l'expérience.", "Un accompagnateur, pas un maître."],
      citation: "", piege: "Pour les filles (Sophie), Rousseau défend au contraire une éducation subordonnée : voir la partie VII.",
      video: "Rousseau Émile ou de l'éducation résumé", link: T("rousseau-emile"), linkLabel: "Texte étudié : Rousseau" },
    "durkheim": { part: 5, title: "Durkheim contre le gavage",
      essentiel: "Au début du XXᵉ siècle, la crise de l'éducation : trop de courants. Durkheim critique l'éducation classique (la littérature trop abstraite) : le gavage ne permet ni de connaître ni d'utiliser le savoir. Il veut, comme en sciences, un savoir qui sert.",
      retenir: ["Crise : trop de courants.", "Critique de l'éducation classique.", "Le gavage.", "Un savoir qui puisse être utilisé."],
      citation: "", piege: "Durkheim n'est pas contre le savoir : il est contre un savoir qu'on ne sait pas utiliser.",
      video: "Durkheim éducation et sociologie" },
    "dewey": { part: 5, title: "Dewey : l'élève acteur",
      essentiel: "La démarche venue des États-Unis interroge la dissymétrie éducative (le maître enseigne, l'élève absorbe) : le professeur doit montrer l'intérêt de la matière. Dewey veut un élève acteur de ses apprentissages.",
      retenir: ["La dissymétrie maître / élève.", "Montrer l'intérêt de la matière.", "Dewey : l'élève acteur.", "Les sciences de l'éducation (selon le cours)."],
      citation: "", piege: "Dewey a vécu de 1859 à 1952, pas « 1840-1855 » comme dans tes notes.",
      video: "John Dewey learning by doing pédagogie" },
    "arendt": { part: 5, title: "Arendt : la crise de l'éducation",
      essentiel: "Arendt attribue la crise au pragmatisme : n'apprendre que l'utile réduit la culture, ce qui est dangereux. Dans La Crise de la culture, l'éducation est conservatrice : transmettre ce qu'ont fait nos ancêtres est un devoir moral. N'apprendre que le strict nécessaire priverait les enfants de choix : une éducation de propagande.",
      retenir: ["Le pragmatisme : seulement l'utile.", "Réduire la culture est dangereux.", "L'éducation est conservatrice.", "Sans culture, pas de choix : la propagande."],
      citation: "", piege: "Conservatrice ne veut pas dire réactionnaire : conserver un monde pour le transmettre.",
      video: "Hannah Arendt la crise de l'éducation", link: T("arendt-crise"), linkLabel: "Texte étudié : Arendt" },
    "ici-maintenant": { part: 5, title: "Au-delà de l'ici et du maintenant",
      essentiel: "Si la connaissance se réduisait à l'ici (ce que perçoivent les sens) et au maintenant (le présent), nous ne connaîtrions rien (Heidegger, d'après le cours). Aristote, dans la Physique, étudie la chute des corps. Le savoir se transmet : Socrate, Platon, Aristote.",
      retenir: ["L'ici : les sens.", "Le maintenant : le présent seul.", "Nous ne connaîtrions rien.", "Aristote et la chute des corps."],
      citation: "[Si la connaissance] se réduisait à l'ici et au maintenant, nous ne connaîtrions en fin de compte rien.",
      piege: "Attribution à vérifier : cette idée est célèbre chez Hegel (la certitude sensible).",
      video: "Hegel certitude sensible ici maintenant" },
    "foucault": { part: 5, title: "Foucault : le pouvoir",
      essentiel: "Pour Foucault, la relation entre l'élève et l'enseignant est nécessairement une relation de pouvoir. Ce pouvoir ne doit pas être absolu, au risque du décrochage ; sinon le but de l'éducation, élever l'élève, n'est pas respecté.",
      retenir: ["Une relation de pouvoir.", "Pas de pouvoir absolu.", "Le risque du décrochage.", "Le but : que l'élève s'élève."],
      citation: "", piege: "Le cours ne refuse pas tout pouvoir : il refuse un pouvoir absolu.",
      video: "Foucault surveiller et punir école discipline" },
    "dates": { part: 6, title: "Les grandes dates",
      essentiel: "1861 Daubié, première bachelière ; 1875 Brès, première docteure en médecine ; 1880 la Sorbonne et des lycées pour les filles ; 1903 Marie Curie ; 1944 droit de vote ; 1972 égalité des salaires ; 1974 loi Veil ; 1975 loi Haby (mixité) ; 1991 Édith Cresson ; 2000 parité.",
      retenir: ["1861 : première bachelière.", "1880 : lycées de jeunes filles.", "1944 : droit de vote des femmes.", "1975 : mixité obligatoire ; 2000 : parité."],
      citation: "", piege: "Les chiffres « 2026 » notés en marge n'ont pas de source : ne les cite pas.",
      video: "histoire éducation des filles France dates" },
    "ignorance": { part: 7, title: "Une ignorance voulue",
      essentiel: "Une volonté politique cantonne les femmes à l'activité domestique et les maintient dans la bêtise, plus faciles à contrôler. Jusqu'à la fin du XVIIIᵉ siècle : une éducation religieuse, des arts pour les plus riches, lire et écrire au couvent, aucune science. Le but : de bonnes épouses. Rousseau refuse aux femmes l'éducation des hommes.",
      retenir: ["Cantonnées au domestique.", "Maintenues dans la bêtise pour être contrôlées.", "Éducation religieuse, pas scientifique.", "Rousseau : un rôle subalterne."],
      citation: "", piege: "Rousseau est à la fois l'auteur d'une éducation émancipatrice (Émile) et d'une éducation subordonnée (Sophie).",
      video: "éducation des filles XVIIIe siècle couvent" },
    "defenseurs": { part: 7, title: "Les défenseurs de l'éducation des femmes",
      essentiel: "Molière caricature (L'École des femmes) ; Mill dénonce l'assujettissement de la femme et veut l'éduquer ; Gabrielle Suchon montre que l'émancipation des femmes est possible et nécessaire à la société ; Fénelon (Traité de l'éducation des filles) : sans savoir, les mères ne peuvent émanciper leurs enfants.",
      retenir: ["Molière : L'École des femmes.", "Mill : l'assujettissement.", "Suchon : possible et nécessaire.", "Fénelon : les mères éduquent les enfants."],
      citation: "", piege: "Fénelon défend l'éducation des filles pour leur rôle de mères : ce n'est pas encore l'égalité.",
      video: "Fénelon traité de l'éducation des filles Gabrielle Suchon", link: T("mill-assujettissement"), linkLabel: "Texte étudié : Mill" },
    "autodidactes": { part: 7, title: "Les autodidactes",
      essentiel: "L'accès des femmes à l'éducation est rare et privilégié : elles sont souvent autodidactes. Émilie du Châtelet (XVIIIᵉ siècle) se forme seule à la physique et aux mathématiques ; elle est l'une des premières traductrices de Newton.",
      retenir: ["Un accès rare et privilégié.", "Autodidacte : s'instruire seule.", "Émilie du Châtelet.", "Traductrice de Newton."],
      citation: "", piege: "Ces exceptions montrent la capacité des femmes, pas l'existence d'une école pour elles.",
      video: "Émilie du Châtelet Newton traduction" },
    "egalite": { part: 8, title: "Vers l'égalité",
      essentiel: "Volonté d'égalité sous la IIᵉ République ; en 1870, la IIIᵉ République et les lois Ferry ouvrent l'école à tous, avec des programmes différents. Au XXᵉ siècle, le féminisme (Beauvoir, Le Deuxième Sexe) impulse de réels progrès. Aujourd'hui, une même éducation, mais pas partout, et des inégalités de salaires. Peut-on transmettre la sensibilité ?",
      retenir: ["IIᵉ République : premières lois.", "Lois Ferry : l'école pour tous.", "Beauvoir, Le Deuxième Sexe.", "Égalité inachevée : monde, salaires."],
      citation: "", piege: "« Même éducation » en France ne veut pas dire égalité partout ni dans les salaires.",
      video: "Simone de Beauvoir le deuxième sexe éducation" }
  };

  /* ---------------- EXERCICES ---------------- */
  const exercises = [];
  const cnt = {};
  const add = (type, list) => list.forEach(e => { cnt[type] = (cnt[type] || 0) + 1; exercises.push(Object.assign({ id: type + "-" + cnt[type], type }, e)); });

  add("qcm", [
    { notion: "eduquer", q: "D'où vient le verbe « éduquer » ?",
      options: ["Du latin educere : ex (hors de) + ducere (conduire)", "Du grec paideia, l'enfance", "Du latin docere, enseigner", "Du latin dux, le chef"], answer: 0,
      explain: "Éduquer, c'est conduire hors de : hors de l'ignorance." },
    { notion: "eduquer", q: "Selon le cours, qu'est-ce qu'éduquer voudrait dire ?",
      options: ["Sortir l'individu de l'ignorance et lui faire dépasser ses limites", "Transmettre uniquement des savoirs scolaires", "Apprendre à obéir aux adultes", "Préparer à un métier"], answer: 0,
      explain: "Encadrer la croissance intellectuelle, sans oublier le physique et la morale." },
    { notion: "transmettre", q: "Pourquoi un programme peut-il « amputer » celui qu'on éduque ?",
      options: ["Il choisit ce qui sera vu : le reste devient inaccessible", "Il est trop court", "Il est le même dans tous les pays", "Il interdit la lecture libre"], answer: 0,
      explain: "Un programme suppose une décision sur le savoir." },
    { notion: "transmettre", q: "Que montre l'exemple des écoles d'art ?",
      options: ["On y apprend des techniques, mais on y cherche l'autonomie de l'artiste", "L'art ne s'apprend pas", "Les artistes refusent toute technique", "Il faut copier les maîtres sans s'en écarter"], answer: 0,
      explain: "Transmettre, c'est donner un savoir et la liberté de s'en servir." },
    { notion: "normes", q: "Pourquoi apprendre à écrire semble-t-il déjà priver de liberté ?",
      options: ["Les lettres, les mots et la façon d'écrire sont imposés", "On écrit toujours sous la dictée", "L'écriture est réservée à une élite", "L'orthographe change sans cesse"], answer: 0,
      explain: "Toute éducation commence par recevoir des normes." },
    { notion: "normes", q: "Quelle tension le cours relève-t-il entre la famille et l'école ?",
      options: ["La transmission familiale peut contredire la transmission scolaire", "La famille ne transmet rien", "L'école remplace toujours la famille", "La famille transmet les mêmes savoirs que l'école"], answer: 0,
      explain: "D'où la question : comment faire accepter des normes à tous ?" },
    { notion: "emancipation", q: "Quelle définition le cours donne-t-il de l'émancipation ?",
      options: ["Passer de l'état d'esclave à celui d'homme libre", "Quitter sa famille à la majorité", "Refuser toute règle", "Obtenir un diplôme"], answer: 0,
      explain: "Ne plus subir, mais être maître de ce qui se passe autour de soi et en soi." },
    { notion: "emancipation", q: "Pourquoi le cours parle-t-il de mérite à propos de l'émancipation ?",
      options: ["Elle se travaille et se construit : l'esclave libéré l'avait mérité", "Elle est donnée à la naissance", "Elle dépend de la chance", "Elle s'achète"], answer: 0,
      explain: "L'émancipation se construit, notamment par les lois." },
    { notion: "instruction", q: "Qu'est-ce qui distingue l'instruction de l'éducation ?",
      options: ["L'instruction est strictement intellectuelle : elle transmet un savoir", "L'instruction concerne le corps", "L'instruction est donnée par la famille", "Il n'y a aucune différence"], answer: 0,
      explain: "L'instruction ne suffit pas à épanouir un individu." },
    { notion: "instruction", q: "Que signifie « apprendre » selon le cours ?",
      options: ["« À prendre » : prendre avec soi, assimiler pour pouvoir en jouer", "Répéter sans comprendre", "Écouter le maître en silence", "Obtenir une bonne note"], answer: 0,
      explain: "Il faut distinguer un contenu de connaissance et « faire connaissance »." },
    { notion: "etat-nature", q: "À quoi sert la fiction de l'état de nature ?",
      options: ["À comprendre pourquoi l'humain vit en société", "À décrire la préhistoire réelle", "À prouver que l'homme est bon", "À organiser l'école"], answer: 0,
      explain: "C'est une hypothèse, pas un fait historique." },
    { notion: "etat-nature", q: "Quel présupposé rend l'éducation nécessaire dans la partie I ?",
      options: ["L'homme serait mauvais, incapable de croître positivement sans guide", "L'homme naît savant", "L'homme n'a pas besoin des autres", "L'homme est un animal comme les autres"], answer: 0,
      explain: "D'où l'idée d'un guide qui montre le chemin." },
    { notion: "etat-nature", q: "Qu'a-t-on compris « depuis Machiavel », selon le cours ?",
      options: ["L'homme peut vouloir le mal pour le mal, en sachant que c'est mal", "L'homme ne fait le mal que par ignorance", "Le prince doit éduquer le peuple", "L'éducation rend l'homme méchant"], answer: 0,
      explain: "Machiavel, XVIᵉ siècle." },
    { notion: "pervertir", q: "Que veut dire « être éduqué, c'est perpétuer un système » ?",
      options: ["L'éducation transmet les normes existantes, même si elles évoluent", "L'éducation ne change jamais", "Il faut refuser toute éducation", "Les élèves inventent leurs propres normes"], answer: 0,
      explain: "Exemple : les cours de couture des filles au XIXᵉ siècle." },
    { notion: "pervertir", q: "Quelle question conclut « L'éducation pervertit-elle ? » ?",
      options: ["Comment former sans entraver l'épanouissement ?", "Faut-il supprimer l'école ?", "Les filles doivent-elles apprendre la couture ?", "Qui doit payer l'éducation ?"], answer: 0,
      explain: "Il faut concilier l'éducation et l'émancipation." },
    { notion: "autonomie", q: "Que signifie « autonomie » ?",
      options: ["Se donner sa propre loi (autos + nomos)", "Vivre seul", "Gagner sa vie", "Refuser toutes les lois"], answer: 0,
      explain: "Du grec autos, soi, et nomos, la loi." },
    { notion: "autonomie", q: "Pourquoi l'éducation échoue-t-elle en partie à rendre autonome ?",
      options: ["Par manque de curiosité : certaines choses sont dites « inutiles »", "Parce que les élèves sont paresseux", "Parce qu'il y a trop de matières", "Parce que l'autonomie ne s'apprend pas"], answer: 0,
      explain: "Si tout devait être utile, on fermerait les portes de la connaissance." },
    { notion: "platon-utilite", q: "Pourquoi Platon juge-t-il l'art inutile à l'éducation, selon le cours ?",
      options: ["Il n'aide ni les soldats ni les architectes : il n'intéresse que ceux dont c'est le métier", "Il coûte trop cher", "Il est trop difficile", "Il rend les élèves tristes"], answer: 0,
      explain: "D'où l'idée de le supprimer pour former un homme juste." },
    { notion: "platon-utilite", q: "Que conclut le cours de l'exemple de Platon ?",
      options: ["Penser l'éducation en termes d'utilité réduit les capacités de l'individu", "Il faut supprimer l'art à l'école", "Seuls les artistes doivent étudier l'art", "L'art est la seule chose utile"], answer: 0,
      explain: "Connaître des choses peut toujours servir." },
    { notion: "alienation", q: "Quand commence l'autonomie, selon le cours ?",
      options: ["Quand le savoir maîtrisé et intériorisé peut être interrogé", "Dès la naissance", "Quand on quitte l'école", "Quand on refuse d'apprendre"], answer: 0,
      explain: "L'éducation s'impose d'abord, puis on l'interroge." },
    { notion: "alienation", q: "Que veut dire « l'éducation ne fait pas la personnalité » ?",
      options: ["Même si elle bride, on peut passer au-dessus", "L'éducation n'a aucun effet", "La personnalité est innée et ne change pas", "Il ne faut pas éduquer"], answer: 0,
      explain: "Être en train d'être, c'est ne jamais cesser d'évoluer." },
    { notion: "entrave", q: "Quelle image de Léonard de Vinci le cours cite-t-il ?",
      options: ["La perspective, bride et gouvernail de la peinture", "La perspective, prison du peintre", "La couleur, âme de la peinture", "Le dessin, ennemi de la couleur"], answer: 0,
      explain: "La règle maîtrisée permet de diriger l'œuvre." },
    { notion: "entrave", q: "Que signifie « toute éducation est une entrave » dans le cours ?",
      options: ["Une contrainte qui devient le moyen de trouver sa liberté", "Une contrainte qu'il faut fuir", "Une liberté sans règle", "Une punition"], answer: 0,
      explain: "Comme la bride dirige le cheval." },
    { notion: "transmission-origines", q: "Pourquoi parle-t-on d'Homo habilis à propos de l'éducation ?",
      options: ["Premier à utiliser un outil, à notre connaissance : cela suppose un savoir-faire transmis", "Il a inventé l'écriture", "Il a fondé la première école", "Il vivait déjà en ville"], answer: 0,
      explain: "Les carrières de pierre vidées montrent un savoir-faire qui progresse." },
    { notion: "transmission-origines", q: "Qu'est-ce qui marque le début de la civilisation, selon la marge du cours ?",
      options: ["La sédentarisation", "L'outil", "Le feu", "La chasse"], answer: 0,
      explain: "Avec Homo habilis, on ne parle pas encore de civilisation." },
    { notion: "otium", q: "Que désigne l'otium à l'origine ?",
      options: ["Occuper son esprit à le cultiver", "La paresse", "Le travail des champs", "Le service militaire"], answer: 0,
      explain: "Il est devenu « le loisir » par évolution de la langue." },
    { notion: "otium", q: "Pourquoi, dans l'Antiquité, celui qui apprend à lire semble-t-il « ne rien faire » ?",
      options: ["L'ingénierie est active, alors que lire et écrire ne produit rien de visible", "Il dort en classe", "Il n'a pas de maître", "Lire était interdit"], answer: 0,
      explain: "D'où l'idée de vie oisive, réservée à l'élite." },
    { notion: "traites", q: "Que soutient Laclos, selon le cours ?",
      options: ["L'éducation générale passe par l'émancipation des femmes, par l'éducation", "Les femmes n'ont pas besoin d'instruction", "Seuls les nobles doivent être éduqués", "L'éducation doit rester religieuse"], answer: 0,
      explain: "Fin XVIIIᵉ : de nombreux traités interrogent l'éducation des femmes." },
    { notion: "nationaliser", q: "Que défend Condorcet ?",
      options: ["Une instruction universelle et publique", "Une éducation réservée aux nobles", "Une école religieuse", "La suppression des écoles"], answer: 0,
      explain: "Qu'un maximum de personnes sache lire et compter." },
    { notion: "nationaliser", q: "Que veut l'abbé Grégoire ?",
      options: ["Que tous les Français parlent correctement la langue nationale", "Que chacun garde d'abord sa langue régionale", "Que l'on enseigne le latin à tous", "Que l'école soit payante"], answer: 0,
      explain: "On cherche à nationaliser l'éducation." },
    { notion: "utopies", q: "Qu'est-ce que le phalanstère de Fourier ?",
      options: ["Une communauté de vie égalitaire, comme un monastère de l'éducation", "Une prison modèle", "Une université", "Une usine"], answer: 0,
      explain: "Une ville « parfaite » qui fait la part belle à l'éducation, physique comprise." },
    { notion: "utopies", q: "Qu'associe le projet de Saint-Simon ?",
      options: ["Les sciences et l'industrie, par l'éducation et la raison", "L'Église et l'État", "L'art et la guerre", "La famille et la religion"], answer: 0,
      explain: "Au centre : le perfectionnement de l'être humain et la collaboration." },
    { notion: "utopies", q: "Que pose la Commune de Paris (1871) ?",
      options: ["Les bases d'une éducation publique et laïque, intellectuelle et manuelle", "Une école réservée aux garçons", "Le retour de l'éducation religieuse", "La fin de l'instruction publique"], answer: 0,
      explain: "On peut penser à Louise Michel." },
    { notion: "ferry", q: "Que rendent les lois Ferry (1881-1882) ?",
      options: ["L'école obligatoire, gratuite et laïque", "L'école payante et religieuse", "L'université gratuite", "Le baccalauréat obligatoire"], answer: 0,
      explain: "C'est une première." },
    { notion: "ferry", q: "Quel idéal accompagne l'école républicaine ?",
      options: ["La méritocratie : que tout le monde puisse s'élever", "L'aristocratie", "La théocratie", "L'autarcie"], answer: 0,
      explain: "Le développement de l'instruction va de pair avec l'idéal républicain." },
    { notion: "zola", q: "Que montre Zola dans les Rougon-Macquart, selon le cours ?",
      options: ["Le poids social est plus fort que n'importe quelle volonté", "La volonté triomphe toujours", "L'école suffit à changer un destin", "L'hérédité n'existe pas"], answer: 0,
      explain: "Il dénonce aussi le manque de protection sociale." },
    { notion: "renaissance", q: "À quoi Cicéron compare-t-il l'esprit qui n'a pas été instruit ?",
      options: ["À une terre en friche, qui ne donne pas de fruits", "À un vase vide", "À une page blanche", "À une prison"], answer: 0,
      explain: "Sans instruction, l'esprit est stérile." },
    { notion: "renaissance", q: "Quel homme les penseurs de la Renaissance veulent-ils former ?",
      options: ["Un homme complet : instruit, honnête, pas imbu de lui-même", "Un soldat obéissant", "Le spécialiste d'un seul métier", "Un moine"], answer: 0,
      explain: "On pense l'homme par l'éducation." },
    { notion: "erasme", q: "Que change Érasme dans l'attitude des précepteurs ?",
      options: ["Moins de rigidité, plus de bienveillance", "Plus de punitions", "Moins de latin", "Plus de religion"], answer: 0,
      explain: "Une éducation encyclopédique, proche de la culture antique." },
    { notion: "montaigne", q: "Que préfère Montaigne ?",
      options: ["Une tête bien faite plutôt que bien pleine", "Une tête bien pleine plutôt que bien faite", "Ne rien apprendre par les livres", "Tout apprendre par cœur"], answer: 0,
      explain: "Savoir utiliser son savoir compte plus que la quantité." },
    { notion: "lumieres", q: "Que faut-il diffuser d'abord pour propager les savoirs au XVIIIᵉ siècle ?",
      options: ["L'alphabétisation", "Le latin", "La religion", "Les métiers manuels"], answer: 0,
      explain: "Des programmes plus ambitieux, pour le plus grand nombre." },
    { notion: "lumieres", q: "Dans quel sens vont Kant et Condorcet ?",
      options: ["L'autonomie : l'éducation doit être émancipatrice", "L'obéissance aux maîtres", "Une éducation pour la seule élite", "L'abandon des programmes"], answer: 0,
      explain: "Des programmes complets, destinés à un large public." },
    { notion: "enfant", q: "Comment change la considération de l'enfant au XVIIIᵉ siècle ?",
      options: ["Vu comme un « sous-humain », il est enfin considéré", "Il est traité comme un adulte", "Il disparaît des romans", "Il doit travailler plus tôt"], answer: 0,
      explain: "Enfants et adolescents passent au centre des romans." },
    { notion: "empirisme", q: "Que soutiennent Locke et Hume ?",
      options: ["Les connaissances proviennent de l'expérience", "Les idées sont innées", "Seule la foi fait connaître", "La raison suffit sans l'expérience"], answer: 0,
      explain: "C'est l'empirisme." },
    { notion: "empirisme", q: "Quelle limite le cours fixe-t-il à l'expérience ?",
      options: ["Elle ne donne ni certitude absolue ni lien de causalité", "Elle trompe toujours", "Elle est inutile", "Elle ne concerne que les enfants"], answer: 0,
      explain: "On ne peut être certain du lien logique entre nos expériences." },
    { notion: "rousseau", q: "Quel rôle Rousseau donne-t-il à l'éducateur ?",
      options: ["Un accompagnateur, pas un maître", "Un juge sévère", "Un simple distributeur de savoirs", "Un camarade sans responsabilité"], answer: 0,
      explain: "Il faut l'expérience pour comprendre." },
    { notion: "rousseau", q: "Que rapporte George Sand ?",
      options: ["Sa grand-mère l'a élevée selon les principes de Rousseau", "Elle a écrit l'Émile", "Elle a fondé une école", "Elle a refusé toute éducation"], answer: 0,
      explain: "L'Émile a réellement changé des éducations." },
    { notion: "durkheim", q: "Que reproche Durkheim à l'éducation classique ?",
      options: ["Le gavage : un savoir qu'on ne sait pas utiliser", "Trop de sport", "Trop de liberté laissée aux élèves", "L'absence de littérature"], answer: 0,
      explain: "La littérature serait trop abstraite ; il voudrait faire comme en sciences." },
    { notion: "dewey", q: "Qu'est-ce que la dissymétrie éducative ?",
      options: ["La séparation entre le maître qui enseigne et l'élève qui absorbe", "L'inégalité entre filles et garçons", "La différence entre écoles publiques et privées", "L'écart d'âge entre les élèves"], answer: 0,
      explain: "Elle semble défavorable : l'élève ne voit pas l'intérêt de la matière." },
    { notion: "dewey", q: "Que pense Dewey ?",
      options: ["L'élève doit être acteur de ses apprentissages", "L'élève doit se taire et écouter", "Le maître est inutile", "Il faut supprimer les matières"], answer: 0,
      explain: "Le professeur doit montrer l'intérêt de la matière." },
    { notion: "arendt", q: "À quoi Arendt attribue-t-elle la crise de l'éducation, selon le cours ?",
      options: ["Notamment au courant pragmatique : n'apprendre que l'utile", "Au manque d'argent", "Aux écrans", "À la religion"], answer: 0,
      explain: "Réduire la culture est extrêmement dangereux." },
    { notion: "arendt", q: "Pourquoi l'éducation est-elle « conservatrice » pour Arendt ?",
      options: ["Il faut savoir ce qu'ont fait nos ancêtres et le transmettre", "Il faut refuser tout changement politique", "Il faut garder les mêmes professeurs", "Il faut garder les élèves à l'école"], answer: 0,
      explain: "C'est un devoir moral de transmettre." },
    { notion: "arendt", q: "Que se passerait-il si l'on n'apprenait aux enfants que le strict nécessaire ?",
      options: ["Ils n'auraient pas de choix dans leur vie : une éducation de propagande", "Ils seraient plus libres", "L'école coûterait moins cher", "Rien ne changerait"], answer: 0,
      explain: "Les enfants seraient les premiers à en pâtir." },
    { notion: "ici-maintenant", q: "Que désigne « l'ici » dans la citation du cours ?",
      options: ["Ce que l'on peut percevoir par les sens", "Le pays où l'on vit", "L'école", "Le présent"], answer: 0,
      explain: "Cela ne va pas très loin ; le maintenant, lui, limite au présent." },
    { notion: "ici-maintenant", q: "Que cherche Aristote dans la Physique, selon le cours ?",
      options: ["À comprendre la chute des corps", "À définir la justice", "À écrire une tragédie", "À fonder une école"], answer: 0,
      explain: "Il a l'impression que certains objets, comme la fumée, ne tombent pas." },
    { notion: "foucault", q: "Que montre Foucault sur la relation entre l'élève et l'enseignant ?",
      options: ["C'est nécessairement une relation de pouvoir", "C'est une relation d'amitié", "C'est une relation d'égalité parfaite", "Elle n'a aucune importance"], answer: 0,
      explain: "Ce pouvoir ne doit pas être absolu." },
    { notion: "foucault", q: "Quel risque fait courir un pouvoir absolu de l'enseignant ?",
      options: ["Le décrochage : l'élève ne peut plus s'élever", "Des élèves trop savants", "La fin des examens", "Un excès de liberté"], answer: 0,
      explain: "Le but de l'éducation n'est alors pas respecté." },
    { notion: "dates", q: "Qui est la première bachelière française (1861) ?",
      options: ["Julie-Victoire Daubié", "Madeleine Brès", "Marie Curie", "Émilie du Châtelet"], answer: 0,
      explain: "Madeleine Brès est la première docteure en médecine (1875)." },
    { notion: "dates", q: "Que fait la loi Haby (1975), selon le cours ?",
      options: ["Elle rend la mixité scolaire obligatoire", "Elle crée les lycées de jeunes filles", "Elle donne le droit de vote aux femmes", "Elle instaure la parité"], answer: 0,
      explain: "1880 : lycées de filles ; 1944 : vote ; 2000 : parité." },
    { notion: "ignorance", q: "Pourquoi, selon le cours, maintenait-on les femmes dans l'ignorance ?",
      options: ["Pour qu'elles soient plus faciles à contrôler", "Parce qu'elles refusaient d'apprendre", "Parce qu'il n'existait aucune école", "Pour les protéger"], answer: 0,
      explain: "Une volonté politique de les cantonner au domestique." },
    { notion: "ignorance", q: "Quel était le but de l'éducation des femmes jusqu'au XVIIIᵉ siècle ?",
      options: ["Être de bonnes épouses et des hôtesses agréables", "Devenir savantes", "Exercer un métier", "Gouverner"], answer: 0,
      explain: "Éducation religieuse, arts pour les plus riches, aucune science." },
    { notion: "ignorance", q: "Que dit Rousseau de l'éducation des femmes ?",
      options: ["Elles n'ont pas à être élevées comme les hommes : leur rôle serait subalterne", "Elles doivent recevoir la même éducation qu'Émile", "Elles doivent étudier les sciences", "Elles doivent éduquer seules les enfants"], answer: 0,
      explain: "Le même Rousseau prône pourtant la liberté pour Émile." },
    { notion: "defenseurs", q: "Que montre Fénelon dans le Traité de l'éducation des filles ?",
      options: ["Sans savoir, les mères ne peuvent aider leurs enfants à s'émanciper", "Les filles doivent rester ignorantes", "Les filles doivent apprendre le latin", "Les mères ne comptent pas dans l'éducation"], answer: 0,
      explain: "Le rôle des femmes dans l'éducation des enfants est important." },
    { notion: "defenseurs", q: "Que veut montrer Gabrielle Suchon ?",
      options: ["L'émancipation des femmes est possible et nécessaire pour élever la société", "Les femmes doivent obéir", "Les femmes sont faites pour le couvent", "L'éducation est inutile"], answer: 0,
      explain: "Elle a rédigé plusieurs ouvrages en ce sens." },
    { notion: "defenseurs", q: "Comment Molière défend-il l'éducation des femmes, selon le cours ?",
      options: ["En caricaturant, notamment dans L'École des femmes", "Par un traité philosophique", "Par une loi", "En fondant une école"], answer: 0,
      explain: "Nuance (complément) : Les Femmes savantes se moquent aussi des femmes pédantes." },
    { notion: "autodidactes", q: "Qui se forme seule à la physique et aux mathématiques au XVIIIᵉ siècle ?",
      options: ["Émilie du Châtelet", "Gabrielle Suchon", "George Sand", "Louise Michel"], answer: 0,
      explain: "L'une des premières traductrices de Newton." },
    { notion: "egalite", q: "Qu'apportent les lois Ferry aux filles, selon la partie VIII ?",
      options: ["L'accès à l'école, même si les programmes ne sont pas les mêmes", "Les mêmes programmes que les garçons", "Le droit de vote", "L'accès à l'université"], answer: 0,
      explain: "L'égalité des programmes viendra plus tard." },
    { notion: "egalite", q: "Quelle question ouvre la fin du cours ?",
      options: ["Peut-on transmettre la sensibilité ?", "Faut-il supprimer l'école ?", "L'éducation est-elle terminée à 18 ans ?", "Les femmes doivent-elles travailler ?"], answer: 0,
      explain: "Le cours s'achève sur l'idée d'une éducation sensible." }
  ]);

  /* Textes à expliquer : passages courts, en complément du cours (domaine public) */
  add("qcm", [
    { notion: "montaigne", passage: "Je voudrais aussi qu'on fût soigneux de lui choisir un conducteur qui eût plutôt la tête bien faite que bien pleine, et qu'on y requît tous les deux, mais plus les mœurs et l'entendement que la science.",
      src: "Montaigne, Essais, I, 26, « De l'institution des enfants » (orthographe modernisée) · complément", q: "Que demande Montaigne au précepteur, le « conducteur » ?",
      options: ["Du jugement et des mœurs plus que de la science", "Le plus de science possible", "De la sévérité avant tout", "Aucune instruction"], answer: 0,
      explain: "Les deux sont requis, mais le jugement passe avant l'accumulation des savoirs." },
    { notion: "montaigne", passage: "Je voudrais aussi qu'on fût soigneux de lui choisir un conducteur qui eût plutôt la tête bien faite que bien pleine, et qu'on y requît tous les deux, mais plus les mœurs et l'entendement que la science.",
      src: "Montaigne, Essais, I, 26 · complément", q: "Que montre le mot « conducteur » ?",
      options: ["Le précepteur guide l'enfant : il le conduit, comme dans educere", "Le précepteur conduit une voiture", "L'enfant doit commander", "Le précepteur doit punir"], answer: 0,
      explain: "On retrouve l'étymologie du cours : éduquer, c'est conduire hors de." }
  ]);

  add("vf", [
    { notion: "eduquer", s: "Éduquer vient du latin educere, « conduire hors de ».", a: true, explain: "ex (hors de) + ducere (conduire)." },
    { notion: "instruction", s: "Pour le cours, instruire et éduquer sont exactement synonymes.", a: false, explain: "L'instruction est strictement intellectuelle ; elle ne suffit pas à épanouir." },
    { notion: "transmettre", s: "Un programme peut réduire le potentiel de l'élève, parce qu'il fait des choix.", a: true, explain: "Ce qui n'est pas vu devient inaccessible." },
    { notion: "emancipation", s: "Pour le cours, l'émancipation est donnée une fois pour toutes, sans effort.", a: false, explain: "Elle se mérite, se travaille, se construit." },
    { notion: "normes", s: "Apprendre à lire suppose d'accepter des normes imposées.", a: true, explain: "Les lettres, les mots, la façon d'écrire." },
    { notion: "etat-nature", s: "L'état de nature est un fait historique bien daté.", a: false, explain: "C'est une fiction pour comprendre la vie en société." },
    { notion: "pervertir", s: "Les cours de couture des filles au XIXᵉ siècle sont, pour le cours, une éducation réductrice.", a: true, explain: "Être éduqué, c'est perpétuer un système." },
    { notion: "autonomie", s: "Autonomie vient de autos (soi) et nomos (la loi).", a: true, explain: "Se donner sa propre loi." },
    { notion: "platon-utilite", s: "Le cours conclut qu'il faut juger l'éducation à son utilité immédiate.", a: false, explain: "Penser l'éducation en termes d'utilité réduit les capacités de l'individu." },
    { notion: "alienation", s: "Selon le cours, l'autonomie précède toute éducation.", a: false, explain: "Elle commence quand on interroge le savoir intériorisé." },
    { notion: "entrave", s: "Pour Léonard de Vinci, la perspective est une prison pour le peintre.", a: false, explain: "La bride et le gouvernail : elle permet de diriger." },
    { notion: "transmission-origines", s: "Les carrières de pierre vidées montrent un savoir-faire transmis.", a: true, explain: "Un savoir-faire qui va même progresser." },
    { notion: "otium", s: "Dans l'Antiquité, l'otium est réservé à l'élite.", a: true, explain: "Très tôt pourtant, on cherche à démocratiser le savoir." },
    { notion: "nationaliser", s: "L'abbé Grégoire veut que chaque région garde sa langue avant le français.", a: false, explain: "Il veut que tous parlent correctement la langue nationale." },
    { notion: "utopies", s: "La Commune de Paris veut une éducation à la fois intellectuelle et manuelle.", a: true, explain: "Publique, laïque, intellectuelle et manuelle." },
    { notion: "ferry", s: "Les lois Ferry rendent l'école obligatoire, gratuite et laïque.", a: true, explain: "1881-1882." },
    { notion: "zola", s: "Pour Zola, la volonté individuelle l'emporte toujours sur le milieu.", a: false, explain: "Le poids social est plus fort que n'importe quelle volonté." },
    { notion: "montaigne", s: "Montaigne préfère une tête bien pleine.", a: false, explain: "Bien faite plutôt que bien pleine." },
    { notion: "erasme", s: "Érasme demande aux précepteurs plus de rigidité.", a: false, explain: "Moins de rigidité, plus de bienveillance." },
    { notion: "empirisme", s: "Pour l'empirisme, l'expérience donne une connaissance absolument certaine.", a: false, explain: "Elle permet de connaître, sans certitude absolue." },
    { notion: "rousseau", s: "Pour Rousseau, l'éducateur doit être un accompagnateur plutôt qu'un maître.", a: true, explain: "Il faut l'expérience pour comprendre." },
    { notion: "durkheim", s: "Durkheim défend le gavage des élèves.", a: false, explain: "Il le critique : le savoir doit pouvoir être utilisé." },
    { notion: "dewey", s: "Pour Dewey, l'élève doit être acteur de ses apprentissages.", a: true, explain: "Contre la dissymétrie maître / élève." },
    { notion: "arendt", s: "Pour Arendt, l'éducation est de nature conservatrice.", a: true, explain: "Conserver un monde pour le transmettre, ce qui n'est pas être réactionnaire." },
    { notion: "foucault", s: "Pour le cours, le pouvoir de l'enseignant doit être absolu.", a: false, explain: "Absolu, il fait décrocher l'élève." },
    { notion: "dates", s: "En 1903, Marie Curie est la première femme prix Nobel.", a: true, explain: "Prix Nobel de physique." },
    { notion: "ignorance", s: "Jusqu'à la fin du XVIIIᵉ siècle, les couvents enseignent les sciences aux filles.", a: false, explain: "Lire et écrire, mais rien au niveau scientifique." },
    { notion: "defenseurs", s: "Fénelon défend l'éducation des filles à cause de leur rôle auprès des enfants.", a: true, explain: "Sans savoir, les mères ne peuvent émanciper leurs enfants." },
    { notion: "autodidactes", s: "Émilie du Châtelet a appris la physique à l'université.", a: false, explain: "Elle s'est formée seule : elle est autodidacte." },
    { notion: "egalite", s: "Aujourd'hui, l'éducation des filles et des garçons est la même partout dans le monde.", a: false, explain: "La même en France, mais pas partout dans le monde." }
  ]);

  add("fill", [
    { notion: "eduquer", plain: true, text: "Éduquer vient du latin [[educere]] : « conduire [[hors]] de ».", explain: "ex + ducere." },
    { notion: "autonomie", plain: true, text: "Autonomie : du grec [[autos]], soi, et [[nomos]], la loi.", explain: "Se donner sa propre loi." },
    { notion: "instruction", plain: true, text: "Apprendre, c'est « à [[prendre]] » : prendre avec [[soi]].", explain: "Assimiler des savoirs pour pouvoir en jouer." },
    { notion: "montaigne", text: "Plutôt la tête bien [[faite]] que bien [[pleine]].", explain: "Montaigne, Essais, I, 26." },
    { notion: "entrave", text: "La perspective est la [[bride]] et le [[gouvernail]] de la peinture.", explain: "Léonard de Vinci : la règle maîtrisée permet de diriger." },
    { notion: "renaissance", text: "De même qu'une terre en [[friche]] ne donne pas de fruits, de même l'esprit est [[stérile|sterile]] quand il n'a pas été instruit.", explain: "Cicéron, formulation du cours." },
    { notion: "ferry", plain: true, text: "Les lois Ferry rendent l'école [[obligatoire]], [[gratuite]] et [[laïque|laique]].", explain: "1881-1882." },
    { notion: "otium", plain: true, text: "L'[[otium]], devenu le loisir, c'est à l'origine occuper son esprit à le [[cultiver]].", explain: "Une oisiveté réservée à l'élite." },
    { notion: "dewey", plain: true, text: "La [[dissymétrie|dissymetrie]] éducative sépare le maître qui enseigne et l'élève qui [[absorbe]] le savoir.", explain: "Dewey veut au contraire un élève acteur." },
    { notion: "arendt", plain: true, text: "Pour Arendt, l'éducation est de nature [[conservatrice]].", explain: "Transmettre ce qu'ont fait nos ancêtres est un devoir moral." },
    { notion: "egalite", text: "On ne naît pas [[femme]] : on le [[devient]].", explain: "Simone de Beauvoir, Le Deuxième Sexe (complément)." },
    { notion: "ici-maintenant", text: "Si la connaissance se réduisait à l'[[ici]] et au [[maintenant]], nous ne connaîtrions en fin de compte rien.", explain: "Heidegger d'après le cours ; attribution à vérifier (Hegel ?)." }
  ]);

  add("part", [
    { notion: "montaigne", a: 3, quote: "Plutôt la tête bien faite que bien pleine.", explain: "Partie III : le fondement de l'éducation moderne." },
    { notion: "entrave", a: 1, quote: "La perspective est la bride et le gouvernail de la peinture.", explain: "Partie I : l'entrave qui libère." },
    { notion: "renaissance", a: 3, quote: "De même qu'une terre en friche ne donne pas de fruits, de même l'esprit est stérile quand il n'a pas été instruit.", explain: "Partie III : Cicéron et la Renaissance." },
    { notion: "ici-maintenant", a: 5, quote: "Si la connaissance se réduisait à l'ici et au maintenant, nous ne connaîtrions en fin de compte rien.", explain: "Partie V : la crise de l'éducation." },
    { notion: "arendt", a: 5, quote: "L'éducation est de nature conservatrice.", explain: "Partie V : Arendt (formulation du cours)." },
    { notion: "rousseau", a: 4, quote: "L'éducateur ne doit pas avoir la figure d'un maître, mais celle d'un accompagnateur.", explain: "Partie IV : Rousseau (formulation du cours)." },
    { notion: "ignorance", a: 7, quote: "Les femmes n'ont pas à être élevées comme les hommes.", explain: "Partie VII : la position de Rousseau, d'après le cours." },
    { notion: "nationaliser", a: 2, quote: "Il faut qu'un maximum de personnes sache lire et compter.", explain: "Partie II : Condorcet (formulation du cours)." }
  ]);

  add("order", [
    { part: 0, notion: "eduquer", q: "Remets dans l'ordre les parties du cours.",
      items: ["S'éduquer : l'injonction de l'éducation", "L'historicité de l'éducation", "Le fondement de l'éducation moderne", "Au siècle des Lumières", "La crise de l'éducation", "Les dates importantes", "L'ignorance des femmes", "Du XIXᵉ siècle à aujourd'hui"],
      explain: "Parties I à VIII." },
    { part: 2, notion: "transmission-origines", q: "Range ces étapes du plus ancien au plus récent.",
      items: ["L'outil d'Homo habilis", "L'invention de l'écriture", "Cicéron et la terre en friche", "Érasme et Montaigne", "Rousseau, Émile", "Condorcet et l'instruction publique", "La Commune de Paris", "Les lois Ferry"],
      explain: "Préhistoire · Antiquité · Iᵉʳ s. av. J.-C. · XVIᵉ · 1762 · 1792 · 1871 · 1881-1882." },
    { part: 6, notion: "dates", q: "Range ces « premières » dans l'ordre chronologique.",
      items: ["Première bachelière : Julie-Victoire Daubié", "Première docteure en médecine : Madeleine Brès", "Lycées pour les filles", "Marie Curie, prix Nobel", "Droit de vote des femmes", "Loi Haby : mixité obligatoire", "Édith Cresson, Première ministre", "Loi sur la parité"],
      explain: "1861 · 1875 · 1880 · 1903 · 1944 · 1975 · 1991 · 2000." },
    { part: 1, notion: "alienation", q: "Rétablis le raisonnement de la partie I.",
      items: ["L'homme à l'état de nature aurait besoin d'un guide", "Mais être éduqué, c'est perpétuer un système", "L'éducation échoue en partie à rendre autonome", "Juger l'éducation à son utilité réduit l'individu (Platon)", "Interroger le savoir intériorisé : l'autonomie commence", "L'entrave devient le moyen de la liberté (Léonard)"],
      explain: "De l'injonction d'éduquer à l'entrave qui libère, puis l'histoire de l'éducation." },
    { part: 5, notion: "arendt", q: "Rétablis le fil de la partie V.",
      items: ["Début du XXᵉ siècle : trop de courants, la crise", "Durkheim critique le gavage", "Dewey : l'élève acteur", "Arendt : le pragmatisme réduit la culture", "L'ici et le maintenant ne suffisent pas", "Foucault : un pouvoir qui ne doit pas être absolu"],
      explain: "L'ordre des notes : Durkheim et Dewey (p. 7), puis Arendt, Heidegger, Foucault (p. 9)." },
    { part: 4, notion: "empirisme", q: "Remets dans l'ordre l'argument de l'empirisme.",
      items: ["La connaissance vient de l'expérience (Locke, Hume)", "Mais l'expérience ne donne pas de certitude absolue", "Elle ne prouve pas les liens de causalité", "L'éducation ne peut donc reposer sur la seule habitude", "Rousseau : comprendre par l'expérience, avec un accompagnateur"],
      explain: "De l'empirisme à l'Émile." }
  ]);

  add("match", [
    { part: 0, q: "Associe chaque mot à son sens.",
      pairs: [
        { l: "Éduquer", r: "Conduire hors de", n: "eduquer" },
        { l: "Autonomie", r: "Se donner sa propre loi", n: "autonomie" },
        { l: "Apprendre", r: "Prendre avec soi", n: "instruction" },
        { l: "Aliéner", r: "Rendre étranger", n: "alienation" },
        { l: "Émanciper", r: "Passer de l'esclavage à la liberté", n: "emancipation" },
        { l: "Otium", r: "Cultiver son esprit", n: "otium" }
      ], explain: "Les mots du chapitre, et leur étymologie." },
    { part: 1, q: "Associe chaque nom à son idée (partie I).",
      pairs: [
        { l: "Machiavel", r: "Vouloir le mal en sachant que c'est mal", n: "etat-nature" },
        { l: "Hobbes ou Locke", r: "L'homme a besoin d'un guide", n: "etat-nature" },
        { l: "Platon", r: "L'art serait inutile à l'éducation", n: "platon-utilite" },
        { l: "Léonard de Vinci", r: "La bride et le gouvernail", n: "entrave" },
        { l: "Beauvoir", r: "Des jeunes filles réduites à leurs habiletés manuelles", n: "pervertir" }
      ], explain: "Les références de la partie I." },
    { part: 2, q: "Associe chaque nom à son projet (partie II).",
      pairs: [
        { l: "Condorcet", r: "Instruction universelle et publique", n: "nationaliser" },
        { l: "L'abbé Grégoire", r: "Une langue nationale pour tous", n: "nationaliser" },
        { l: "Fourier", r: "Le phalanstère", n: "utopies" },
        { l: "Saint-Simon", r: "Associer sciences et industrie", n: "utopies" },
        { l: "Jules Ferry", r: "École obligatoire, gratuite, laïque", n: "ferry" },
        { l: "Zola", r: "Le poids du milieu social", n: "zola" }
      ], explain: "De la Révolution à la IIIᵉ République." },
    { part: 3, q: "Associe chaque auteur à son idée (parties III et IV).",
      pairs: [
        { l: "Cicéron", r: "La terre en friche", n: "renaissance" },
        { l: "Érasme", r: "Des précepteurs bienveillants", n: "erasme" },
        { l: "Montaigne", r: "La tête bien faite", n: "montaigne" },
        { l: "Locke et Hume", r: "La connaissance vient de l'expérience", n: "empirisme" },
        { l: "Rousseau", r: "L'éducateur accompagnateur", n: "rousseau" },
        { l: "Kant et Condorcet", r: "Une éducation émancipatrice", n: "lumieres" }
      ], explain: "De la Renaissance aux Lumières." },
    { part: 5, q: "Associe chaque auteur à son idée (partie V).",
      pairs: [
        { l: "Durkheim", r: "Contre le gavage", n: "durkheim" },
        { l: "Dewey", r: "L'élève acteur", n: "dewey" },
        { l: "Arendt", r: "L'éducation est conservatrice", n: "arendt" },
        { l: "Heidegger (d'après le cours)", r: "L'ici et le maintenant", n: "ici-maintenant" },
        { l: "Aristote", r: "La chute des corps", n: "ici-maintenant" },
        { l: "Foucault", r: "Une relation de pouvoir", n: "foucault" }
      ], explain: "La crise de l'éducation." },
    { part: 7, q: "Associe chaque nom à sa position (partie VII).",
      pairs: [
        { l: "Rousseau", r: "Un rôle subalterne pour les femmes", n: "ignorance" },
        { l: "Molière", r: "L'École des femmes", n: "defenseurs" },
        { l: "Mill", r: "L'assujettissement des femmes", n: "defenseurs" },
        { l: "Gabrielle Suchon", r: "Une émancipation possible et nécessaire", n: "defenseurs" },
        { l: "Fénelon", r: "Le rôle des mères dans l'éducation", n: "defenseurs" },
        { l: "Émilie du Châtelet", r: "Traductrice de Newton", n: "autodidactes" }
      ], explain: "L'éducation des femmes, refusée puis défendue." },
    { part: 6, q: "Associe chaque date à sa « première ».",
      pairs: [
        { l: "1861", r: "Première bachelière", n: "dates" },
        { l: "1875", r: "Première docteure en médecine", n: "dates" },
        { l: "1903", r: "Marie Curie, prix Nobel", n: "dates" },
        { l: "1944", r: "Droit de vote des femmes", n: "dates" },
        { l: "1975", r: "Mixité scolaire obligatoire", n: "dates" },
        { l: "2000", r: "Loi sur la parité", n: "dates" }
      ], explain: "Les dates de la partie VI." }
  ]);

  add("sort", [
    { part: 0, q: "Instruire ou éduquer ? Classe chaque idée.",
      buckets: ["Instruire", "Éduquer"],
      items: [
        { t: "Transmettre un savoir plus ou moins théorique", b: 0, n: "instruction" },
        { t: "Un socle commun de connaissances", b: 0, n: "instruction" },
        { t: "Le ministère de l'Instruction publique", b: 0, n: "instruction" },
        { t: "Former aussi le corps et la morale", b: 1, n: "eduquer" },
        { t: "Conduire hors de l'ignorance, vers l'émancipation", b: 1, n: "eduquer" },
        { t: "Épanouir un individu", b: 1, n: "instruction" }
      ], explain: "L'instruction est intellectuelle ; l'éducation forme toute la personne." },
    { part: 7, q: "Classe ces positions sur l'éducation des femmes.",
      buckets: ["Contre une même éducation", "Pour l'éducation des femmes"],
      items: [
        { t: "Rousseau : un rôle subalterne", b: 0, n: "ignorance" },
        { t: "Les couvents : lire et écrire, sans sciences", b: 0, n: "ignorance" },
        { t: "Cantonner les femmes au domestique", b: 0, n: "ignorance" },
        { t: "Laclos", b: 1, n: "traites" },
        { t: "Fénelon", b: 1, n: "defenseurs" },
        { t: "Gabrielle Suchon", b: 1, n: "defenseurs" },
        { t: "Mill", b: 1, n: "defenseurs" },
        { t: "Molière, L'École des femmes", b: 1, n: "defenseurs" }
      ], explain: "D'une ignorance voulue à la défense d'une éducation nécessaire." },
    { part: 3, q: "Classe ces auteurs par époque.",
      buckets: ["Antiquité", "XVᵉ-XVIᵉ siècles", "XVIIᵉ-XVIIIᵉ siècles", "XIXᵉ-XXᵉ siècles"],
      items: [
        { t: "Platon", b: 0, n: "platon-utilite" },
        { t: "Cicéron", b: 0, n: "renaissance" },
        { t: "Érasme", b: 1, n: "erasme" },
        { t: "Montaigne", b: 1, n: "montaigne" },
        { t: "Machiavel", b: 1, n: "etat-nature" },
        { t: "Fénelon", b: 2, n: "defenseurs" },
        { t: "Rousseau", b: 2, n: "rousseau" },
        { t: "Condorcet", b: 2, n: "nationaliser" },
        { t: "Zola", b: 3, n: "zola" },
        { t: "Durkheim", b: 3, n: "durkheim" },
        { t: "Arendt", b: 3, n: "arendt" },
        { t: "Foucault", b: 3, n: "foucault" }
      ], explain: "Fénelon publie son traité en 1687 ; Rousseau l'Émile en 1762 ; Condorcet son rapport en 1792." },
    { part: 5, q: "Savoir utile tout de suite, ou culture large transmise ?",
      buckets: ["Le savoir utile tout de suite", "Une culture large, transmise"],
      items: [
        { t: "Le pragmatisme que critique Arendt", b: 0, n: "arendt" },
        { t: "Platon : supprimer l'art, inutile", b: 0, n: "platon-utilite" },
        { t: "Écarter les choses dites « inutiles »", b: 0, n: "autonomie" },
        { t: "Transmettre ce qu'ont fait nos ancêtres", b: 1, n: "arendt" },
        { t: "« Rien ne sert à rien »", b: 1, n: "autonomie" },
        { t: "Dépasser l'ici et le maintenant", b: 1, n: "ici-maintenant" }
      ], explain: "Le cours défend la seconde colonne : réduire à l'utile réduit l'individu." }
  ]);

  add("schema", [
    { part: 1, layout: "flow", q: "Complète le raisonnement de la partie I.",
      nodes: [
        { cap: "A", t: "L'homme à l'état de nature aurait besoin d'un guide" },
        { cap: "A", slot: "Mais être éduqué, c'est perpétuer un système", n: "pervertir" },
        { cap: "A", slot: "Autonomie : se donner sa propre loi", n: "autonomie" },
        { cap: "A", slot: "Juger l'éducation à l'utile réduit l'individu", n: "platon-utilite" },
        { cap: "A", t: "On interroge le savoir intériorisé" },
        { cap: "A", slot: "L'entrave devient le moyen de la liberté", n: "entrave" }
      ],
      distract: ["L'éducation est toujours neutre", "L'homme naît autonome"],
      explain: "L'éducation s'impose, puis libère : à condition de ne pas la réduire à l'utile." },
    { part: 2, layout: "flow", q: "Complète l'histoire de l'éducation (partie II).",
      nodes: [
        { cap: "a", t: "Homo habilis : un savoir-faire transmis" },
        { cap: "a", slot: "L'écriture : éduquer, c'est lire et écrire", n: "otium" },
        { cap: "a", slot: "L'otium, réservé à l'élite", n: "otium" },
        { cap: "B", slot: "Condorcet : instruction universelle et publique", n: "nationaliser" },
        { cap: "B", t: "Fourier, Saint-Simon, la Commune" },
        { cap: "B", slot: "Ferry : obligatoire, gratuite, laïque", n: "ferry" }
      ],
      distract: ["L'école a toujours été obligatoire", "L'éducation était d'abord réservée aux femmes"],
      explain: "D'un savoir réservé à une élite à une éducation nationale." },
    { part: 5, layout: "tree", q: "Complète l'arbre de la crise de l'éducation.",
      root: "Que faut-il transmettre, et comment ?",
      branches: [
        [{ slot: "Durkheim", n: "durkheim" }, { t: "Contre le gavage" }, { slot: "Un savoir qu'on sait utiliser", n: "durkheim" }],
        [{ slot: "Arendt", n: "arendt" }, { t: "Contre le pragmatisme" }, { slot: "Conserver et transmettre un monde", n: "arendt" }],
        [{ slot: "Foucault", n: "foucault" }, { t: "Une relation de pouvoir" }, { slot: "Un pouvoir qui n'est pas absolu", n: "foucault" }]
      ],
      distract: ["Montaigne", "Seul l'utile compte"],
      explain: "Trois réponses à la crise : utiliser, transmettre, ne pas dominer." }
  ]);

  add("grid", [
    { part: 5, q: "Coche ce que soutient chaque auteur, d'après le cours.",
      cols: ["Durkheim", "Dewey", "Arendt"],
      rows: [
        { t: "Le gavage empêche d'utiliser le savoir", a: [1, 0, 0], n: "durkheim" },
        { t: "Faire en littérature comme dans les sciences", a: [1, 0, 0], n: "durkheim" },
        { t: "L'élève doit être acteur de ses apprentissages", a: [0, 1, 0], n: "dewey" },
        { t: "L'éducation est de nature conservatrice", a: [0, 0, 1], n: "arendt" },
        { t: "Le pragmatisme réduit dangereusement la culture", a: [0, 0, 1], n: "arendt" }
      ], explain: "Trois diagnostics de la crise de l'éducation." },
    { part: 7, q: "Coche ce que soutient chaque auteur, d'après le cours.",
      cols: ["Rousseau", "Fénelon", "Mill"],
      rows: [
        { t: "Les femmes n'ont pas à être élevées comme les hommes", a: [1, 0, 0], n: "ignorance" },
        { t: "L'éducateur doit être un accompagnateur", a: [1, 0, 0], n: "rousseau" },
        { t: "Les mères doivent savoir pour émanciper leurs enfants", a: [0, 1, 0], n: "defenseurs" },
        { t: "Traité de l'éducation des filles", a: [0, 1, 0], n: "defenseurs" },
        { t: "Dénoncer l'assujettissement des femmes", a: [0, 0, 1], n: "defenseurs" }
      ], explain: "Rousseau libère Émile, pas Sophie ; Fénelon et Mill défendent l'éducation des femmes." }
  ]);

  add("flash", [
    { notion: "eduquer", f: "Éduquer : étymologie ?", b: "Latin educere : ex (hors de) + ducere (conduire). Conduire hors de l'ignorance." },
    { notion: "transmettre", f: "Transmettre ?", b: "Mettre à disposition pour qu'on en fasse usage, avec la liberté de s'en servir. Tout programme choisit, donc écarte." },
    { notion: "normes", f: "Pourquoi toute éducation impose-t-elle ?", b: "Lettres, mots, façon d'écrire, convictions familiales : des normes reçues. Mais le but reste l'émancipation." },
    { notion: "emancipation", f: "Émancipation ?", b: "Passer de l'esclavage à la liberté : ne plus subir, être maître de soi. Elle se mérite et se construit." },
    { notion: "instruction", f: "Instruire, éduquer, apprendre ?", b: "Instruire : un savoir intellectuel (socle commun). Éduquer : toute la personne. Apprendre : prendre avec soi." },
    { notion: "etat-nature", f: "L'injonction de l'éducation ?", b: "Si l'homme est mauvais à l'état de nature (Hobbes, Machiavel), il lui faut un guide : l'éducation l'améliore." },
    { notion: "pervertir", f: "L'éducation pervertit-elle ?", b: "Elle transmet des normes et perpétue un système (cours de couture des filles). Comment former sans entraver ?" },
    { notion: "autonomie", f: "Autonomie ?", b: "autos + nomos : se donner sa propre loi. L'éducation réduite à l'utile échoue à la produire." },
    { notion: "platon-utilite", f: "Platon et l'utilité de l'art ?", b: "L'art n'aide ni soldats ni architectes : le supprimer ? Mais juger l'éducation à l'utile réduit l'individu." },
    { notion: "alienation", f: "Quand commence l'autonomie ?", b: "Quand on interroge le savoir maîtrisé et intériorisé. L'éducation bride, mais ne fait pas la personnalité." },
    { notion: "entrave", f: "L'entrave qui libère ?", b: "Toute éducation est une entrave qui devient moyen de liberté : la perspective, « bride et gouvernail » (Léonard)." },
    { notion: "transmission-origines", f: "Homo habilis et l'éducation ?", b: "Premier outil connu : un savoir-faire transmis et perfectionné (carrières de pierre)." },
    { notion: "otium", f: "Otium ?", b: "Le loisir studieux : cultiver son esprit. Réservé à l'élite, puis on cherche à démocratiser le savoir." },
    { notion: "traites", f: "Laclos et le Ménagier de Paris ?", b: "L'éducation générale passe par l'émancipation des femmes ; l'éducation féminine sert le devoir citoyen." },
    { notion: "nationaliser", f: "Condorcet et Grégoire ?", b: "Condorcet : instruction universelle et publique. Grégoire : la langue nationale pour tous. On nationalise l'éducation." },
    { notion: "utopies", f: "Fourier, Saint-Simon, la Commune ?", b: "Phalanstère ; sciences et industrie ; éducation publique, laïque, intellectuelle et manuelle." },
    { notion: "ferry", f: "Lois Ferry ?", b: "1881-1882 : école obligatoire, gratuite, laïque. École républicaine, méritocratie." },
    { notion: "zola", f: "Zola, les Rougon-Macquart ?", b: "Le poids social est plus fort que la volonté : la liberté individuelle dépend du social." },
    { notion: "renaissance", f: "Cicéron et la Renaissance ?", b: "Sans instruction, l'esprit est une terre en friche. Former un homme complet : instruit, honnête, modeste." },
    { notion: "erasme", f: "Érasme ?", b: "Une éducation encyclopédique, proche de la culture antique, avec des précepteurs bienveillants." },
    { notion: "montaigne", f: "Montaigne ?", b: "« Plutôt la tête bien faite que bien pleine » : savoir se servir de son savoir." },
    { notion: "lumieres", f: "Les Lumières et l'éducation ?", b: "Diffuser le savoir à tous (alphabétisation) ; Kant et Condorcet : une éducation émancipatrice." },
    { notion: "enfant", f: "L'enfant au XVIIIᵉ siècle ?", b: "Vu comme un « sous-humain », il est enfin considéré ; les romans le placent au centre." },
    { notion: "empirisme", f: "Empirisme ?", b: "Locke, Hume : la connaissance vient de l'expérience, mais sans certitude absolue ni causalité prouvée." },
    { notion: "rousseau", f: "Rousseau, Émile ?", b: "Liberté de mouvement, comprendre par l'expérience, un éducateur accompagnateur. George Sand élevée ainsi." },
    { notion: "durkheim", f: "Durkheim ?", b: "Contre le gavage de l'éducation classique : un savoir doit pouvoir être utilisé." },
    { notion: "dewey", f: "Dewey ?", b: "Contre la dissymétrie maître / élève : l'élève acteur de ses apprentissages." },
    { notion: "arendt", f: "Arendt et la crise de l'éducation ?", b: "Le pragmatisme réduit la culture ; l'éducation est conservatrice : transmettre un monde est un devoir." },
    { notion: "ici-maintenant", f: "L'ici et le maintenant ?", b: "Une connaissance limitée aux sens et au présent ne connaîtrait rien (Heidegger d'après le cours ; Hegel ?)." },
    { notion: "foucault", f: "Foucault ?", b: "La relation élève-enseignant est une relation de pouvoir ; absolu, il fait décrocher l'élève." },
    { notion: "dates", f: "Cinq dates clés ?", b: "1861 première bachelière · 1880 lycées de filles · 1944 vote · 1975 mixité · 2000 parité." },
    { notion: "ignorance", f: "Pourquoi l'ignorance des femmes ?", b: "Une volonté politique : les cantonner au domestique, plus faciles à contrôler. Rousseau : un rôle subalterne." },
    { notion: "defenseurs", f: "Qui défend l'éducation des femmes ?", b: "Molière (L'École des femmes), Mill, Gabrielle Suchon, Fénelon (le rôle des mères)." },
    { notion: "autodidactes", f: "Émilie du Châtelet ?", b: "Autodidacte du XVIIIᵉ siècle, physicienne, l'une des premières traductrices de Newton." },
    { notion: "egalite", f: "Du XIXᵉ siècle à aujourd'hui ?", b: "IIᵉ République, lois Ferry, Beauvoir : une égalité réelle mais inachevée (monde, salaires)." }
  ]);

  add("qcm", [
    { notion: "traites", q: "Que défend l'auteur du Ménagier de Paris, selon le cours ?",
      options: ["L'éducation féminine est nécessaire au devoir citoyen", "Les femmes doivent rester au couvent", "Seuls les hommes servent le royaume", "L'éducation doit être réservée aux nobles"], answer: 0,
      explain: "Elle serait essentielle au royaume : chaque citoyen doit connaître ses droits et ses devoirs." },
    { notion: "enfant", q: "Où voit-on que l'enfant devient central au XVIIIᵉ siècle ?",
      options: ["Dans les romans, où enfants et adolescents passent au centre", "Dans les lois sur le travail", "Dans les tableaux de batailles", "Dans les traités militaires"], answer: 0,
      explain: "En pensant l'éducation, on change la considération de l'enfant." }
  ]);
  add("vf", [
    { notion: "traites", s: "De la fin du XVIIIᵉ au début du XIXᵉ siècle, de nombreux traités interrogent l'éducation des femmes.", a: true, explain: "Laclos, notamment." },
    { notion: "enfant", s: "Pour le cours, l'enfant a toujours été considéré comme une personne à part entière.", a: false, explain: "Il était vu comme un « sous-humain » avant le XVIIIᵉ siècle." }
  ]);

  /* Sujets d'essai : « tx » = textes étudiés de la même discipline à mobiliser (fiches HLP) */
  add("build", [
    { part: 1, ns: ["normes", "pervertir", "ferry", "arendt", "foucault"], tx: ["ferry-lettre", "arendt-crise", "tocqueville-uniformiser", "heritier-formatage"],
      q: "L'éducation est-elle neutre ?",
      els: [
        { t: "Toute éducation transmet des normes et perpétue un système (les cours de couture des filles)", ok: true },
        { t: "L'école républicaine assume des valeurs communes (Ferry, la méritocratie)", ok: true },
        { t: "Arendt : éduquer, c'est conserver et transmettre un monde", ok: true },
        { t: "Foucault : la relation élève-enseignant est une relation de pouvoir", ok: true },
        { t: "L'éducation ne transmet que des savoirs objectifs", ok: false, why: "Contraire au cours : elle transmet aussi des normes et des convictions." },
        { t: "Homo habilis est le premier à utiliser un outil", ok: false, why: "Hors sujet : c'est l'origine de la transmission, pas sa neutralité." },
        { t: "Émilie du Châtelet traduit Newton", ok: false, why: "Un exemple d'autodidacte, pas un argument sur la neutralité." }
      ],
      prob: "Si éduquer, c'est transmettre des normes choisies par d'autres, l'éducation peut-elle être neutre sans renoncer à émanciper ?",
      plan: ["Toute éducation impose des normes et perpétue un système : elle n'est jamais neutre (lire, écrire, les cours de couture).", "Cette absence de neutralité peut être assumée : l'école républicaine (Ferry) et la transmission d'un monde commun (Arendt).", "Le danger est un pouvoir absolu ou une éducation réduite à l'utile (Foucault, la propagande) : une éducation non neutre doit viser l'autonomie."],
      cit: "Plutôt la tête bien faite que bien pleine." },
    { part: 1, ns: ["normes", "entrave", "alienation", "rousseau"], tx: ["rousseau-emile", "rousseau-perfectibilite", "tocqueville-despotisme"],
      q: "Éduquer, est-ce contraindre ?",
      els: [
        { t: "Apprendre à lire et à écrire impose des normes", ok: true },
        { t: "Toute éducation est une entrave qui devient le moyen de la liberté (Léonard)", ok: true },
        { t: "L'autonomie commence quand on interroge le savoir intériorisé", ok: true },
        { t: "Rousseau : un accompagnateur plutôt qu'un maître", ok: true },
        { t: "La contrainte empêche toujours la liberté", ok: false, why: "Le cours montre l'inverse : la bride devient gouvernail." },
        { t: "Marie Curie obtient le prix Nobel en 1903", ok: false, why: "Une date, pas un argument sur la contrainte." },
        { t: "Saint-Simon associe sciences et industrie", ok: false, why: "Hors sujet." }
      ],
      prob: "Si l'éducation commence par imposer, comment peut-elle prétendre rendre libre ?",
      plan: ["Éduquer, c'est d'abord contraindre : normes de la lecture et de l'écriture, normes sociales, convictions familiales.", "Mais cette contrainte est une entrave qui libère : la règle maîtrisée devient un gouvernail (Léonard), puis on interroge ce qu'on a reçu.", "L'éducation peut contraindre sans dominer : un éducateur qui accompagne (Rousseau), un pouvoir qui n'est pas absolu (Foucault)."],
      cit: "La perspective est la bride et le gouvernail de la peinture." },
    { part: 5, ns: ["autonomie", "platon-utilite", "arendt", "ici-maintenant", "durkheim"], tx: ["arendt-crise", "nietzsche-allemands"],
      q: "Faut-il n'enseigner que ce qui est utile ?",
      els: [
        { t: "Platon : l'art serait inutile à l'éducation, donc à supprimer", ok: true },
        { t: "Durkheim : un savoir doit pouvoir être utilisé, contre le gavage", ok: true },
        { t: "Arendt : le pragmatisme réduit la culture, c'est dangereux", ok: true },
        { t: "Une connaissance limitée à l'ici et au maintenant ne serait rien", ok: true },
        { t: "Tout savoir doit servir à un métier", ok: false, why: "Le cours critique cette idée : on fermerait les portes de la connaissance." },
        { t: "Fourier imagine le phalanstère", ok: false, why: "Hors sujet." },
        { t: "La loi Haby rend la mixité obligatoire", ok: false, why: "Hors sujet." }
      ],
      prob: "L'utilité semble justifier l'école ; mais un savoir réduit à l'utile ne prive-t-il pas l'élève de la culture qui le rend libre ?",
      plan: ["On peut vouloir un enseignement utile : Platon écarte l'art inutile, Durkheim critique le gavage.", "Mais réduire l'éducation à l'utile réduit l'individu : rien ne sert à rien, et une connaissance limitée à l'ici et au maintenant ne serait rien.", "Arendt : transmettre une culture large est un devoir ; sans elle, pas de choix, mais la propagande."],
      cit: "Plutôt la tête bien faite que bien pleine." },
    { part: 4, ns: ["emancipation", "autonomie", "alienation", "lumieres"], tx: ["rousseau-perfectibilite", "tocqueville-despotisme", "mill-assujettissement"],
      q: "L'éducation peut-elle rendre libre ?",
      els: [
        { t: "S'émanciper : de l'esclave à l'homme libre, ne plus subir", ok: true },
        { t: "Les Lumières : une éducation émancipatrice (Kant, Condorcet)", ok: true },
        { t: "L'autonomie commence quand on interroge ce qu'on a appris", ok: true },
        { t: "Mais l'éducation peut aliéner et perpétuer un système", ok: true },
        { t: "La liberté est innée : l'éducation ne peut que la détruire", ok: false, why: "Contraire au cours : l'émancipation se construit." },
        { t: "En 1991, Édith Cresson devient Première ministre", ok: false, why: "Une date, sans argument." },
        { t: "L'otium est devenu le loisir", ok: false, why: "Hors sujet, sauf pour parler du loisir studieux." }
      ],
      prob: "L'éducation impose ce qu'elle transmet : comment ce qui vient d'un autre pourrait-il me rendre autonome ?",
      plan: ["L'éducation semble s'opposer à la liberté : elle impose des normes et peut aliéner.", "Pourtant, elle est la condition de l'émancipation : sortir de l'ignorance (educere), les Lumières, Condorcet.", "Elle rend libre si elle conduit à l'autonomie : interroger le savoir reçu, se donner sa propre loi."],
      cit: "De même qu'une terre en friche ne donne pas de fruits, de même l'esprit est stérile quand il n'a pas été instruit." },
    { part: 0, ns: ["transmettre", "normes", "arendt", "erasme", "montaigne"], tx: ["arendt-crise", "ferry-lettre"],
      q: "Transmettre, est-ce imposer ?",
      els: [
        { t: "Tout programme est une décision : ce qui n'est pas transmis devient inaccessible", ok: true },
        { t: "Transmettre, c'est donner un savoir et la liberté de l'utiliser", ok: true },
        { t: "Arendt : transmettre un monde commun est un devoir moral", ok: true },
        { t: "Montaigne : une tête bien faite, qui sait se servir de son savoir", ok: true },
        { t: "Transmettre, c'est faire répéter", ok: false, why: "C'est le gavage que critique Durkheim." },
        { t: "Fourier valorise l'éducation physique", ok: false, why: "Hors sujet." },
        { t: "La Sorbonne s'ouvre aux femmes en 1880", ok: false, why: "Hors sujet, sauf pour l'accès au savoir." }
      ],
      prob: "Celui qui transmet choisit ce qu'il donne : peut-on transmettre sans imposer, et que reste-t-il alors à celui qui reçoit ?",
      plan: ["Transmettre impose : un programme choisit, la famille transmet des convictions, l'écriture impose ses normes.", "Mais transmettre n'est pas dicter : c'est mettre à disposition pour un usage (les écoles d'art, Montaigne, la bienveillance d'Érasme).", "Transmettre est même un devoir (Arendt) : sans héritage, pas de liberté de choisir."],
      cit: "Plutôt la tête bien faite que bien pleine." },
    { part: 5, ns: ["rousseau", "dewey", "foucault", "erasme"], tx: ["rousseau-emile", "arendt-crise"],
      q: "Faut-il obéir au maître pour apprendre ?",
      els: [
        { t: "Érasme : des précepteurs bienveillants plutôt que rigides", ok: true },
        { t: "Rousseau : un accompagnateur plutôt qu'un maître", ok: true },
        { t: "Dewey : l'élève acteur, contre la dissymétrie", ok: true },
        { t: "Foucault : une relation de pouvoir, qui ne doit pas être absolue", ok: true },
        { t: "Le maître doit être obéi sans discussion", ok: false, why: "Le cours critique un pouvoir absolu." },
        { t: "Cicéron compare l'esprit à une terre en friche", ok: false, why: "Utile pour la nécessité d'instruire, pas pour l'obéissance." },
        { t: "Les lycées de jeunes filles ouvrent en 1880", ok: false, why: "Hors sujet." }
      ],
      prob: "Apprendre suppose de recevoir d'un autre ; mais si l'élève ne fait qu'obéir, apprend-il vraiment ?",
      plan: ["Il y a une autorité du maître : la relation éducative est une relation de pouvoir (Foucault), et le savoir s'impose d'abord.", "Mais l'obéissance seule produit le gavage et le décrochage : la dissymétrie est défavorable (Durkheim, Dewey).", "Le maître doit accompagner et montrer l'intérêt de la matière (Érasme, Rousseau, Dewey) : l'élève devient acteur."] },
    { part: 7, ns: ["ignorance", "defenseurs", "autodidactes", "egalite", "dates"], tx: ["mill-assujettissement", "heritier-formatage", "rousseau-emile"],
      q: "Pourquoi a-t-on longtemps refusé l'instruction aux femmes ?",
      els: [
        { t: "Une volonté politique : les cantonner au domestique, plus faciles à contrôler", ok: true },
        { t: "Une éducation religieuse, pour faire de bonnes épouses, sans sciences", ok: true },
        { t: "Rousseau : un rôle subalterne", ok: true },
        { t: "Fénelon, Suchon, Mill : leur éducation est nécessaire à toute la société", ok: true },
        { t: "Les femmes ne voulaient pas apprendre", ok: false, why: "Le cours montre une volonté politique, et des autodidactes comme Émilie du Châtelet." },
        { t: "Homo habilis utilise un outil", ok: false, why: "Hors sujet." },
        { t: "Montaigne préfère une tête bien faite", ok: false, why: "Hors sujet." }
      ],
      prob: "Si l'éducation émancipe, refuser l'instruction aux femmes, n'était-ce pas vouloir les maintenir dans la dépendance ?",
      plan: ["Un refus justifié par un prétendu rôle naturel : le domestique, la religion, Rousseau.", "En réalité, une volonté de contrôle : l'ignorance maintient la dépendance ; des femmes le prouvent en s'instruisant seules (Émilie du Châtelet).", "D'où les combats pour l'éducation des femmes : Fénelon, Suchon, Mill, puis les grandes dates (1861-2000) et Beauvoir."],
      cit: "On ne naît pas femme : on le devient." },
    { part: 0, ns: ["instruction", "montaigne", "renaissance", "ferry"], tx: ["ferry-lettre", "rousseau-emile"],
      q: "Instruire suffit-il à éduquer ?",
      els: [
        { t: "L'instruction est strictement intellectuelle : un socle commun", ok: true },
        { t: "L'instruction seule ne suffit pas à épanouir un individu", ok: true },
        { t: "Montaigne : une tête bien faite plutôt que bien pleine", ok: true },
        { t: "La Renaissance veut former un homme complet, instruit et honnête", ok: true },
        { t: "Instruire et éduquer sont synonymes", ok: false, why: "Le cours les distingue." },
        { t: "Fourier imagine le phalanstère", ok: false, why: "Hors sujet." },
        { t: "Le Ménagier de Paris date du XVᵉ siècle", ok: false, why: "Date à vérifier, et hors sujet." }
      ],
      prob: "L'école transmet des savoirs ; mais un esprit bien rempli est-il pour autant un homme formé ?",
      plan: ["Instruire est nécessaire : sans instruction, l'esprit est une terre en friche (Cicéron) ; l'école de Ferry transmet un socle commun.", "Mais l'instruction ne suffit pas : elle est intellectuelle, alors qu'éduquer forme aussi le corps et la morale ; une tête pleine n'est pas une tête bien faite (Montaigne).", "Éduquer, c'est former un homme complet et autonome : l'instruction en est un moyen, pas la fin."],
      cit: "De même qu'une terre en friche ne donne pas de fruits, de même l'esprit est stérile quand il n'a pas été instruit." },
    { part: 2, ns: ["ferry", "zola", "nationaliser", "egalite"], tx: ["ferry-lettre", "tocqueville-uniformiser", "nietzsche-allemands"],
      q: "L'école peut-elle corriger les inégalités ?",
      els: [
        { t: "Condorcet : une instruction universelle et publique", ok: true },
        { t: "Ferry : une école gratuite et obligatoire, un idéal méritocratique", ok: true },
        { t: "Zola : le poids social est plus fort que la volonté", ok: true },
        { t: "Aujourd'hui : la même éducation en France, mais des inégalités dans le monde et de salaires", ok: true },
        { t: "L'école a toujours été ouverte à tous", ok: false, why: "Contraire au cours : réservée à l'élite, puis inégale entre filles et garçons." },
        { t: "Aristote étudie la chute des corps", ok: false, why: "Hors sujet." },
        { t: "Léonard perfectionne la perspective", ok: false, why: "Hors sujet." }
      ],
      prob: "L'école républicaine promet que chacun s'élève par son mérite ; mais peut-elle effacer le poids du milieu social ?",
      plan: ["L'école est née pour réduire les inégalités : Condorcet, Ferry, la méritocratie, l'école ouverte aux filles.", "Mais le milieu pèse plus que la volonté (Zola), et l'égalité reste inachevée (programmes différents, salaires, monde).", "L'école peut corriger en partie, à condition d'émanciper vraiment : transmettre une culture large à tous."] },
    { part: 3, ns: ["montaigne", "durkheim", "dewey", "erasme"], tx: ["nietzsche-allemands", "arendt-crise"],
      q: "Vaut-il mieux une tête bien pleine ou une tête bien faite ?",
      els: [
        { t: "Montaigne : bien faite plutôt que bien pleine", ok: true },
        { t: "Érasme : une éducation encyclopédique, mais bienveillante", ok: true },
        { t: "Durkheim : le gavage ne permet pas d'utiliser le savoir", ok: true },
        { t: "Dewey : l'élève acteur de ses apprentissages", ok: true },
        { t: "Une tête bien faite n'a besoin d'aucun savoir", ok: false, why: "Montaigne veut de l'instruction (grec, latin)." },
        { t: "L'abbé Grégoire veut une langue nationale", ok: false, why: "Hors sujet." },
        { t: "La loi Veil est votée en 1974", ok: false, why: "Hors sujet." }
      ],
      prob: "Faut-il accumuler des connaissances ou former le jugement, et peut-on former le jugement sans connaissances ?",
      plan: ["Une tête bien pleine est nécessaire : l'humanisme veut une éducation encyclopédique (Érasme), et sans instruction l'esprit est en friche.", "Mais le savoir accumulé sans usage est du gavage (Durkheim) : mieux vaut une tête bien faite (Montaigne).", "La tête bien faite suppose donc des savoirs, mais appropriés : un élève acteur (Dewey), qui sait se servir de ce qu'il apprend."],
      cit: "Plutôt la tête bien faite que bien pleine." }
  ]);

  /* ---------------- RÉGLAGES ---------------- */
  const unit = { one: "partie", many: "parties", fem: true };
  const exam = { kind: "épreuve de spécialité HLP", format: "une interprétation de texte et un essai" };
  const plan = {
    defaultRead: [],
    priority: [1, 5, 7, 2, 4, 3, 8, 6],
    essOrder: [1, 5, 7],
    fullOrder: [1, 2, 3, 4, 5, 6, 7, 8],
    why: {
      1: "Le cœur philosophique : l'état de nature, l'autonomie, l'aliénation, l'entrave qui libère. La base de tout essai sur l'éducation.",
      2: "L'histoire de l'éducation, de l'outil aux lois Ferry : des exemples précis pour chaque essai.",
      3: "Cicéron, Érasme, Montaigne : la tête bien faite, une référence utile partout.",
      4: "Les Lumières, l'empirisme et l'Émile : l'éducation émancipatrice.",
      5: "Durkheim, Dewey, Arendt, Foucault : les auteurs les plus utiles pour discuter ce qu'il faut transmettre.",
      6: "Des dates à savoir par cœur, rapides à réviser.",
      7: "L'éducation des femmes : Rousseau, Fénelon, Mill, Suchon. Un excellent exemple d'éducation non neutre.",
      8: "L'égalité inachevée et l'ouverture sur l'éducation sensible."
    }
  };
  const overview = {
    title: "Éduquer : conduire hors de",
    intro: "Pourquoi éduquer, et comment le faire sans enfermer ? Le cours part de l'étymologie et de la tension entre normes et émancipation, puis suit l'histoire de l'éducation de la préhistoire à aujourd'hui, jusqu'à l'éducation des femmes.",
    boxes: [
      { t: "Le fil rouge", b: "Toute éducation impose des normes ; elle n'est jamais neutre. Mais cette entrave peut devenir le moyen de la liberté, si l'on transmet une culture large et si l'élève finit par interroger ce qu'il a reçu : c'est l'autonomie." },
      { t: "Le piège numéro un", b: "Confondre instruire et éduquer, conservation et réaction (Arendt), contrainte et domination. Et citer comme sûres des informations que tes notes signalent « à vérifier »." },
      { t: "Ce qui est à vérifier", b: "Les encadrés « À vérifier » signalent ce que tes notes ne permettent pas d'affirmer : un mot illisible, une date douteuse, un chiffre sans source. Rien n'y a été complété au hasard." }
    ]
  };
  const tips = [
    "Pour chaque argument, donne une référence précise : un auteur et une idée du cours, puis un texte étudié (Ferry, Arendt, Rousseau, Mill…).",
    "Distingue toujours instruire et éduquer, conserver et refuser le changement, contraindre et dominer.",
    "Pour un sujet sur la liberté : l'entrave qui libère (Léonard), puis l'autonomie qui commence quand on interroge ce qu'on a reçu.",
    "L'histoire de l'éducation fournit des exemples précis : choisis-en deux ou trois par essai plutôt qu'une liste de dates.",
    "Ne cite pas les informations marquées « À vérifier » (le protocole de Lisbonne, les chiffres de 2026) sans les avoir confirmées."
  ];

  /* ---------------- REPÈRES DE LECTURE ---------------- */
  const authors = ["Flaubert", "John Locke", "Locke", "Hobbes", "Machiavel", "Simone de Beauvoir", "Beauvoir", "Platon", "Léonard de Vinci", "Léonard", "Alberti", "Laclos", "Condorcet", "abbé Grégoire", "Grégoire", "Fourier", "Saint-Simon", "Louise Michel", "Jules Ferry", "Ferry", "Émile Zola", "Zola", "Cicéron", "Érasme", "Montaigne", "Kant", "David Hume", "Hume", "Jean-Jacques Rousseau", "Rousseau", "George Sand", "Émile Durkheim", "Durkheim", "John Dewey", "Dewey", "Hannah Arendt", "Arendt", "Martin Heidegger", "Heidegger", "Hegel", "Aristote", "Socrate", "Michel Foucault", "Foucault", "Julie-Victoire Daubié", "Madeleine Brès", "Marie Curie", "Édith Cresson", "Molière", "Mill", "Gabrielle Suchon", "Suchon", "Fénelon", "Émilie du Châtelet", "Newton", "Camille Sée"];
  const works = ["La République", "Le Ménagier de Paris", "Ménagier de Paris", "Les Liaisons dangereuses", "Liaisons dangereuses", "Rougon-Macquart", "Tusculanes", "Émile ou De l'éducation", "Qu'est-ce que les Lumières ?", "Éducation et sociologie", "La Crise de la culture", "La Crise de l'éducation", "Être et temps", "Phénoménologie de l'esprit", "Surveiller et punir", "L'École des femmes", "Les Femmes savantes", "De l'assujettissement des femmes", "Traité de l'éducation des filles", "Le Deuxième Sexe", "Léviathan", "De la peinture", "Principes mathématiques"];

  /* ---------------- KIT DE CITATIONS ----------------
     Citations exactes (ou signalées comme formulation du cours), dans l'ordre du fil. */
  const kit = {
    quotes: [
      { id: "ciceron", t: "De même qu'une terre en friche ne donne pas de fruits, de même l'esprit est stérile quand il n'a pas été instruit.", who: "Cicéron", a: "Cicéron, Tusculanes, II (formulation du cours)", n: "renaissance",
        short: "Cicéron : « une terre en friche »", role: "la nécessité d'instruire",
        sens: "Sans instruction, l'esprit ne produit rien : il faut le cultiver comme un champ.",
        memo: "Un champ en friche, plein de ronces, à côté d'un champ cultivé.",
        pivot: "Dès qu'un sujet demande pourquoi éduquer, elle pose la nécessité de l'instruction.",
        usages: [
          { th: "l'éducation", t: "Thèse de départ : sans éducation, les capacités humaines restent stériles." },
          { th: "la culture", t: "Cultiver l'esprit comme on cultive la terre : l'origine du mot culture." },
          { th: "la liberté", t: "Pour être autonome, il faut d'abord être instruit : la liberté se cultive." },
          { th: "la transmission", t: "Ce qui n'est pas semé ne pousse pas : il faut transmettre pour que l'esprit produise." }
        ] },
      { id: "montaigne", t: "Plutôt la tête bien faite que bien pleine.", who: "Montaigne", a: "Montaigne, Essais, I, 26", n: "montaigne",
        short: "Montaigne : « la tête bien faite »", role: "le jugement",
        sens: "Ce qui compte n'est pas la quantité de savoirs, mais la capacité de s'en servir.",
        memo: "Une tête qui trie et range, pas un sac qu'on remplit.",
        pivot: "Dès qu'un sujet oppose savoir et jugement, elle fait passer l'usage avant l'accumulation.",
        usages: [
          { th: "l'éducation", t: "Former le jugement plutôt que gaver : Durkheim critique le même travers." },
          { th: "la transmission", t: "Transmettre, ce n'est pas remplir : c'est rendre capable d'utiliser." },
          { th: "l'autonomie", t: "Une tête bien faite peut juger par elle-même : c'est le chemin de l'autonomie." },
          { th: "l'école", t: "Une école qui accumule les savoirs sans former le jugement manque son but." }
        ] },
      { id: "leonard", t: "La perspective est la bride et le gouvernail de la peinture.", who: "Léonard de Vinci", a: "Léonard de Vinci (formulation du cours)", n: "entrave",
        short: "Léonard : « la bride et le gouvernail »", role: "l'entrave qui libère",
        sens: "La règle, d'abord contrainte, devient l'outil qui permet de diriger.",
        memo: "Une bride pour le cheval, un gouvernail pour le bateau.",
        pivot: "Dès qu'un sujet oppose contrainte et liberté, elle montre que la règle maîtrisée libère.",
        usages: [
          { th: "l'éducation", t: "Toute éducation est une entrave qui devient le moyen de la liberté." },
          { th: "la liberté", t: "La liberté n'est pas l'absence de règles : maîtriser la règle, c'est pouvoir diriger." },
          { th: "l'autorité", t: "La contrainte du maître n'est pas une domination si elle donne à l'élève de quoi se diriger." },
          { th: "l'émancipation", t: "On s'émancipe par la règle maîtrisée, pas en la refusant." }
        ] },
      { id: "beauvoir", t: "On ne naît pas femme : on le devient.", who: "Simone de Beauvoir", a: "Simone de Beauvoir, Le Deuxième Sexe (1949) · complément", n: "egalite",
        short: "Beauvoir : « on le devient »", role: "l'éducation qui façonne",
        sens: "Ce qu'on croit naturel est en grande partie produit par l'éducation et la société.",
        memo: "Une petite fille à qui l'on tend une poupée plutôt qu'un livre de sciences.",
        pivot: "Dès qu'un sujet oppose nature et éducation, elle montre la part de l'éducation.",
        usages: [
          { th: "l'éducation", t: "L'éducation n'est pas neutre : elle fabrique des rôles." },
          { th: "l'égalité", t: "Les inégalités entre femmes et hommes viennent de l'éducation, pas de la nature." },
          { th: "la recherche de soi", t: "On se construit à travers ce qu'on reçoit : devenir soi suppose de l'interroger." },
          { th: "l'émancipation", t: "Comprendre ce qui nous a façonnés est le premier pas pour s'en libérer." }
        ] }
    ],
    bridges: [
      "Encore faut-il savoir ce que l'on sème : pour {B}, mieux vaut former le jugement que remplir l'esprit.",
      "Former le jugement suppose pourtant des règles : chez {B}, la contrainte maîtrisée devient ce qui dirige.",
      "Mais toute règle transmise n'est pas neutre : avec {B}, on voit que l'éducation façonne ce qu'on croyait naturel."
    ]
  };

  return { unit, exam, plan, overview, tips, parts, course, notions, exercises, authors, works, kit };
})());
