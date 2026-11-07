# Recto — apprends, applique

Tes cours remis au propre, une idée par page, puis tout ce qu'il faut pour t'en servir : exercices, fiches, sujets de dissertation et un bilan de ce qui te manque à donner à ton IA.

**Utiliser en ligne :** https://naulio.github.io/recto/

Sur iPhone : ouvre le lien dans Safari, bouton Partager, puis « Sur l'écran d'accueil ». Recto s'ouvre alors comme une app, en plein écran, et fonctionne hors ligne. Sur Android : menu du navigateur, « Installer l'application ».

Ou en local : télécharger le dépôt et ouvrir `index.html` dans un navigateur.

## Deux espaces

L'accueil propose deux accès :

- **Philosophie · Tronc commun** : les leçons, le livre, les exercices et le **bac blanc** (détaillés ci-dessous).
- **Spécialité HLP** : un espace à part, en cinq sections (Accueil, Littérature, Philosophie, Textes et auteurs, Bac blanc).

### Bac blanc (tronc commun)

On coche une ou plusieurs notions (*Le langage*, *L'art*, et, d'après le *Discours de la méthode* : *La raison*, *La vérité*, *La conscience*, *La technique*), puis un format : épreuve complète (deux dissertations et un texte, au choix, 4 h), dissertations, explications de texte ou questions de réflexion. Le tirage ne propose que des sujets dont toutes les notions ont été cochées ; avec plusieurs notions, au moins un sujet les croise. Chaque sujet se travaille étape par étape : analyse, problématique, plan, références du cours (les fiches s'ouvrent), pièges, brouillon, chrono, bilan. Les textes à expliquer (Descartes, Bergson, Baudelaire) sont recopiés depuis Wikisource, orthographe modernisée.

### Spécialité HLP

- **Textes et auteurs** : les 18 textes du chapitre 1 (*Éducation, transmission et émancipation*), lus sur les photos du dossier `images/` : une fiche par texte (thèse, idées, arguments, citations exactes et leur sens, rapprochements, oppositions, document d'origine, annotations retenues, points à vérifier), une fiche par auteur, toutes les citations, et l'inventaire des photos. Les photos ne sont pas publiées avec le site.
- **Littérature** et **Philosophie** : les chapitres, les textes de chaque discipline, et la place pour les cours, vide tant qu'ils ne sont pas fournis.
- **S'entraîner sur les textes** : les fiches deviennent des exercices (thèses, citations, auteurs, chronologie, oppositions) dans le moteur d'entraînement de Recto.
- **Bac blanc HLP** : choix de la discipline, des chapitres et des textes déjà en place ; la génération des sujets s'ouvrira à l'arrivée des cours de spécialité.

## Ce qu'elle contient

- **Leçons** : *Le langage* et *L'art* (philosophie, Terminale), remises au propre à partir du cours de la classe, fidèlement : mêmes idées, mêmes auteurs, mêmes exemples.
- **Livres** : *Discours de la méthode* (Descartes, 1637).
- **Cours** : la leçon page par page, une idée par écran, avec définitions, citations, exemples et un encadré « À retenir ». Repères de lecture en couleur (idées clés surlignées, auteurs, œuvres), mode « Lecture rapide ». Flèches du clavier ou balayage sur mobile.
- **Recherche** : dans la leçon ouverte (touche `/`), avec filtres Leçon, Fiches, Exos, Entraînement.
- **Plan** : un emploi du temps de 30 min à 3 h (cours, exercices, sujets, pauses), avec chronomètre et temps restant en direct.
- **Entraînement** : de 160 à 180 exercices par contenu en 11 formats (QCM avec rappel actif, vrai ou faux, textes à trous, citations à situer, ordres à rétablir, associations, classements, schémas et tableaux à compléter, cartes mémoire, construction de réponse), avec un mode sans citations.
- **Appliquer** : des sujets de dissertation avec plan modèle, des textes à expliquer, la méthode, et un **kit de citations** : 2 à 5 citations reliées par des ponts, adaptées à chaque notion du programme, apprises par répétition espacée.
- **Fiches** : une fiche par notion (l'essentiel, la citation, le piège), liens vers la page du cours et des vidéos.
- **Bilan** : maîtrise par notion, et export (PDF ou texte) avec une consigne prête pour ChatGPT, Claude, Gemini, Mistral…
- **Effets** : séries d'affilée, records, succès, jours de suite, confettis… sans aucun son. Un petit onglet **Réglages** permet de choisir l'intensité des effets et de réduire les animations.

Sur ordinateur, chaque écran tient sans défiler. Sur téléphone, une colonne, des onglets en bas et des fenêtres qui montent du bas.

La progression est enregistrée dans le navigateur (localStorage) : rien n'est envoyé nulle part.

Pour ajouter une leçon, un livre, un cours ou un texte de spécialité, ou des sujets de bac blanc : voir [contenus/MODELE.md](contenus/MODELE.md).

Vérifications automatiques (données, classement des textes, doublons, tirages du bac blanc) : `node tests/verifier.js`.
