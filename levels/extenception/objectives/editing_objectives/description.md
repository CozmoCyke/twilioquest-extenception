# Modifier les objectifs

<div class="aside">
<h3>Liste de tâches à accomplir</h3>
<ul>
  <li>Voyez le contenu donné ci-dessous.</li>
  <li>Changez l'objectif de votre niveau comme bon vous semble. Vous pouvez ajouter une autre entrée, modifier sa validation, etc.</li>
</ul>
</div>

Vous pouvez utiliser des objectifs avec des barrières laser, des coffres, etc. pour montrer à l'utilisateur les étapes nécessaires pour terminer le niveau.
Les barrières laser sont utilisées pour montrer les étapes nécessaires alors que les coffres comme celui-ci sont utilisés pour indiquer les récompenses comme les ressources personnalisées ou plus d'`xp`.

## `objective.json`

Les propriétés de configuration de votre objectif sont éditables dans `levels/<level_name>/objectives/<objective_name>/objective.json`.
Certains composants importants sont listés ci-dessous :

* `title` : Ce texte est joué en haut de l'interface Hack lorsque l'objectif est ouvert.
* `description` : Ce texte est affiché sur la première page de l'interface de piratage. Il est destiné à donner au joueur un peu de contexte sur cet objectif. Les éléments HTML sont autorisés dans cette chaîne, comme `<strong>`.
* `validation_fields` : Il s'agit d'une liste des champs de saisie auxquels le joueur aura accès. Ils sont utilisés pour passer des informations dans un fichier `validator.js` afin que l'entrée du joueur puisse être validée dans le cadre du processus de validation de l'objectif. Même les objectifs qui n'ont pas besoin de la saisie du joueur devraient utiliser le type d'invite.
* `rewards` : C'est un objet qui décrit l'expérience et les récompenses en objets qu'un joueur reçoit s'il réussit la validation pour cet objectif.

[Répartition de tous les composants de `objective.json`](https://twilioquest.github.io/extension-docs/api/objectives.html)

## `validator.js`

Le code pour valider les entrées de l'utilisateur dans les `validation_fields` est stocké dans le fichier `validator.js`. Il s'agit d'un module node, il peut donc importer d'autres modules node et ceux-ci peuvent être utilisés pour exécuter du code dans des environnements d'exécution comme python, accéder au système de fichiers, etc.
Le validateur a aussi un objet `helper` qui lui est passé. Cet objet est utilisé pour diverses choses dans TwilioQuest. Il peut stocker et accéder aux variables d'environnement dans TwilioQuest, accéder et modifier les objectifs, afficher des messages à l'utilisateur, décider quand l'utilisateur a échoué ou réussi l'objectif, etc.

Nous espérons que vous avez appris quelque chose d'utile de cette extension qui vous inspirera et vous aidera à créer vos propres extensions TwilioQuest. Merci de jouer.
