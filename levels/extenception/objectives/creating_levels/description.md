# Création de niveaux

<div class="aside">
<h3>Liste de tâches à accomplir</h3>
<ul>
  <li>Copier le dossier `vr_mission_template` pour créer un nouveau niveau</li>.
  <li>Changer certaines propriétés dans `level.json` pour renommer notre niveau et modifier sa description.</li>
</ul>
</div>

Un niveau dans TwilioQuest est une zone explorable du jeu qui peut contenir des objectifs, des objets du jeu et des personnages avec lesquels le joueur peut interagir. Une extension dans TwilioQuest peut comporter plusieurs niveaux.

Un dossier de niveau contient un fichier de configuration (un fichier appelé `level.json`, que nous aborderons plus tard) et les ressources suivantes :

* Cartes (maps) : Ces fichiers précisent la disposition visuelle et les objets de jeu présents dans le niveau. Un niveau peut avoir plusieurs cartes.
* Objectifs : Les objectifs sont l'endroit où vous délivrerez la plupart du contenu éducatif de votre niveau. Vous décrirez votre objectif en utilisant Markdown ( ouvrir une nouvelle fenêtre ) et vous écrirez le code de validation de votre objectif en utilisant Node.js ( ouvrir une nouvelle fenêtre ).
* Conversations : Vous pouvez écrire des dialogues dynamiques de personnages non joueurs (PNJ) pour les personnages que le joueur rencontrera dans le niveau.
* Scripting d'événements : Un dossier de niveau contient un fichier events.js qui peut répondre aux événements du cycle de vie du niveau et ajouter un comportement dynamique à votre niveau.

## Créer un nouveau dossier de niveau

Au moment où nous écrivons ces lignes, la meilleure façon de créer un nouveau niveau est de copier le dossier de niveau d'un niveau existant. Cela copiera toute la configuration de la carte et du jeu de tuiles dont vous aurez besoin pour créer efficacement un nouveau niveau. Le dossier de niveau d'exemple dans le repo de modèles (ouvrir une nouvelle fenêtre) est un bon exemple à utiliser. Il contient tous les fichiers dont vous aurez besoin pour créer un niveau. Après avoir fait cela, le dossier de votre nouveau niveau devrait ressembler à quelque chose comme ceci :

```bash
mon_extension/
└── niveaux/
    ├── le_niveau_que_tu_copies/
    └── ton_nouveau_niveau/dossier/
        ├─── maps/
        │ ├─── default.json
        ├── objectifs/
        │ └─── objectif-exemple/
        │ ├─── objective.json
        │ ├─── description.md
        │ ├─── walkthrough.md
        │ └─── validator.js
        ├─── events.js
        └─── level.json
```

## Configurer et construire votre niveau

Après avoir créé le dossier de votre nouveau niveau, ouvrez le fichier `level.json` à la racine du dossier du nouveau niveau. Ce fichier de configuration contient les métadonnées de votre nouveau niveau. Vous trouverez une référence complète pour ce fichier ici (https://twilioquest.github.io/extension-docs/api/levels), mais voici quelques propriétés que vous devez vous assurer de modifier :

* `title` : Le nom lisible par l'homme de votre niveau - il apparaîtra dans le texte du titre de l'interface de navigation ou de l'ordinateur de mission VR.
* `description` : Le joueur verra ce texte détaillé s'il sélectionne votre niveau dans l'interface de navigation ou l'ordinateur de mission VR.
* `is_mission` : Ce paramètre booléen indique si votre niveau sera affiché ou non dans l'ordinateur de mission VR.