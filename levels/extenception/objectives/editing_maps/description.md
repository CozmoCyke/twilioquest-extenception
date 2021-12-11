# Editer les cartes

<div class="aside">
<h3>Liste de tâches à accomplir</h3>
<ul>
  <li>Installer Tiled.</li>
  <li>Faites des modifications à la carte comme vous le souhaitez.</li>
</ul>
</div>

Les cartes des niveaux de TwilioQuest sont stockées en `json` mais peuvent être éditées en utilisant Tiled. En ouvrant la carte dans Tiled, le programme détecte automatiquement le Tileset utilisé et l'affiche.

Avec Tiled, vous pouvez modifier la carte à votre guise et la sauvegarder. Pour rafraîchir la carte dans TwilioQuest, retournez au Fog Owl et revenez à l'ordinateur d'entraînement VR et sélectionnez votre mission (niveau). Ce niveau est un exemple de la façon dont les différentes tuiles de TwilioQuest peuvent être combinées pour créer des niveaux uniques.

## Installation de Tiled

Tiled peut être téléchargé à partir de https://www.mapeditor.org/.

## Couches et tuiles

Les tuiles sont au cœur de la construction des parties statiques d'une carte TwilioQuest. Dans Tiled, elles sont placées dans des "couches de tuiles" à l'aide de divers outils. Ces couches fonctionnent de manière similaire aux couches dans les programmes de peinture comme Adobe Photoshop.

Les couches peuvent avoir quelques propriétés spéciales que TwilioQuest utilisera pour les traiter différemment. Ces propriétés sont :

* `collision` - Si cette propriété est définie à true, alors les tuiles de cette couche empêcheront le joueur de passer à travers elles. Il y a généralement une couche principale de tuiles `Collision` avec cette propriété.
* `hidden` - Si elle est définie à true, cette couche de tuiles ne sera pas rendue visuellement au joueur. La couche `Collision` devrait également avoir cette propriété définie.
* `useCollisionMasks` - Il s'agit d'une fonctionnalité plus avancée qui permet aux tuiles d'une couche de tuiles d'utiliser l'éditeur de collision de tuiles pour spécifier une zone de collision personnalisée. Cela peut être utile si les tuiles ne se situent pas visuellement sur la grille de tuiles.

## Objets et propriétés

Les objets sont importants pour réaliser les différentes parties dynamiques de TwilioQuest. Cela inclut des éléments tels que les personnages non joueurs, les barrières laser, et bien plus encore !
Les objets se trouvent dans un type de couche spécial appelé " couche d'objets ". En général, chaque carte de TwilioQuest possède une seule couche d'objets où vivent tous les objets. Cette couche est conventionnellement appelée Objets.
Des objets intégrés et des objets personnalisés peuvent être ajoutés à cette couche. Ils auront des propriétés qui pourront être modifiées pour obtenir des effets différents selon l'objet.
Voici quelques objets intégrés importants que chaque carte utilisera :

* Player Entry Point - contrôle le point de départ des joueurs.
* Terminal - lance un objectif à remplir par le joueur.
* Laser Barrier (Barrière laser) : bloque la progression du joueur jusqu'à ce qu'un objectif spécifique soit atteint.
* Chests (Coffres)  - utilisés pour récompenser le joueur qui a rempli un objectif.
* Exit - transporte un joueur entre les cartes, vous en aurez au moins besoin d'une pour ramener votre joueur au Fog Owl après qu'il ait joué votre mission.
