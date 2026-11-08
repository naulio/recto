# Recto — apprendre, appliquer

Révisions de philosophie (tronc commun) et de spécialité HLP, pour une classe : cours au propre, fiches, exercices, bac blanc avec méthode et corrigés rédigés. Textes courts, ton impersonnel.

**En ligne :** https://naulio.github.io/recto/

Sur iPhone : Safari, Partager, « Sur l'écran d'accueil » (plein écran, hors ligne). Sur Android : menu du navigateur, « Installer l'application ».

En local : ouvrir `index.html` dans un navigateur.

## Deux espaces

- **Philosophie · Tronc commun** : les leçons, le livre, les exercices et le bac blanc.
- **Spécialité HLP** : Accueil, Littérature, Philosophie, Textes et auteurs, Bac blanc.

### Bac blanc : une méthode de révision complète

Tronc commun et HLP ont la même structure, en quatre onglets, sur la sélection choisie (notions ; ou discipline, chapitres et textes) :

- **Fiches** : tout ce qu'il faut savoir, fiche par fiche ; chaque fiche s'ouvre en entier.
- **Méthode** : chaque exercice (dissertation, explication de texte ; en HLP : épreuve, interprétation, essai) en étapes minutées sur 4 h, la structure de l'introduction, des parties et de la conclusion, ce que le correcteur valorise ou pénalise, les consignes du jour J.
- **Corrigés** : les 65 sujets ont un corrigé rédigé (introduction, plan détaillé avec arguments et références, transitions, conclusion), écrit uniquement à partir du cours ; citations recopiées mot pour mot, vérifiées automatiquement.
- **Épreuve** : épreuve blanche tirée dans la sélection (un sujet ne sort que si toutes ses notions sont cochées ; avec plusieurs notions, au moins un sujet les croise), chrono, brouillon, préparation guidée, puis corrigé et auto-évaluation.

Les textes à expliquer (Descartes, Bergson, Baudelaire) viennent de Wikisource, orthographe modernisée.

### Spécialité HLP

- **Textes et auteurs** : les 18 textes du chapitre 1 (*Éducation, transmission et émancipation*) en fiches (thèse, arguments, citations exactes, rapprochements, oppositions), une fiche par auteur, toutes les citations. Dates, œuvres et références sont vérifiées dans des sources fiables.
- **Cours de philosophie, chapitre 1** : *Éducation, émancipation et transmission* : 32 pages, 35 fiches, 191 exercices, 10 sujets d'essai. Dates et attributions vérifiées dans des sources fiables ; ce qui ne peut pas l'être n'est pas affiché.
- **S'entraîner sur les textes** : les fiches deviennent des exercices.
- **S'imprégner du texte** : une visite guidée sans plan visible (auteur et époque, thèse, fil, schéma, citation), différente à chaque fois, puis des rappels espacés. **Retenir les citations** : effacement, initiales, mot intrus, dictée, à voix haute. **Les 3 du jour** : un texte et deux citations, chaque jour.
- **Bac blanc HLP** : corrigés et épreuve en philosophie (10 essais, 9 interprétations) ; la littérature s'ouvrira avec son cours.

## Ce qu'elle contient

- **Leçons** : *Le langage* et *L'art*, fidèles au cours de la classe.
- **Livre** : *Discours de la méthode* (Descartes, 1637).
- **Cours** : une idée par page, définitions, citations, exemples, « À retenir » ; repères de lecture en couleur, lecture rapide.
- **Recherche** : touche `/`, filtres Leçon, Fiches, Exos, Entraînement.
- **Plan** : de 30 min à 3 h, chronométré.
- **Entraînement** : 160 à 190 exercices par contenu, 11 formats, mode sans citations.
- **Appliquer** : sujets avec plan modèle, textes à expliquer, kit de citations en répétition espacée (méthodes variées selon le niveau de chaque citation).
- **Bilan** : maîtrise par notion, export PDF ou texte pour une IA.

Sur ordinateur, chaque écran tient sans défiler. Progression enregistrée dans le navigateur uniquement.

Ajouter une leçon, un livre, un cours, un texte ou des sujets : [contenus/MODELE.md](contenus/MODELE.md).

Vérifications : `node tests/verifier.js` (données, classement, tirages, méthode, corrigés). Corrigés seuls : `node tests/corriges.js`. Tout ce que le cours dit d'un sujet : `node tests/sujet.js <id>`.
