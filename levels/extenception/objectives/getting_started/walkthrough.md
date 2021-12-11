# Démarrage

Pour créer une nouvelle extension, il faut créer un nouveau sous-dossier sous votre dossier d'extensions qui contient au moins un fichier package.json. Tu pourriez créer votre dossier d'extension à partir de zéro, mais il n'est pas recommandé de le faire. [Twilio a créé un dépôt de modèles sur GitHub](https://github.com/TwilioQuest/twilioquest-extension-template) qui devrait être utilisé comme point de départ.

Pour créer votre propre copie de ce code de démarrage à héberger sur GitHub (recommandé !), cliquez sur le bouton vert "Utiliser ce modèle".
![Image du bouton vert de GitHub](https://twilioquest.github.io/extension-docs/assets/img/use_template.55838478.png)

## Travailler sur votre extension localement

Lorsque vous avez créé votre propre copie de ce dépôt de modèle, clonez votre nouveau dépôt dans le dossier des extensions que vous avez spécifié dans le client du jeu lorsque vous avez activé les extensions.

```bash
cd /path/to/extensions/dossier
git clone https://github.com/yourusername/your-repo-name.git
cd your-repo-name
```

Pour créer une extension TwilioQuest, vous devez avoir installé [Node.js et npm](https://nodejs.org/en/download/). Une fois que vous avez installé Node.js, vous pouvez installer les dépendances de l'extension du modèle avec :

```bash
npm install
```

Après avoir cloné votre extension dans le dossier des extensions, vous devriez pouvoir la voir dans le sous-menu `Extensions` sous `Paramètres` dans le client du jeu.
L'extension modèle a créé un niveau d'entraînement VR simple pour que vous puissiez le référencer et commencer à pirater. Interagissez avec l'ordinateur d'entraînement RV à bord du Fog Owl pour charger cet exemple de mission !
