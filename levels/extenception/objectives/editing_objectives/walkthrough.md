# Modification des objectifs

[Docs sur les extensions de TwilioQuest] (https://twilioquest.github.io/extension-docs/api/)

[Docs API TwilioQuest Extensions] (https://twilioquest.github.io/extension-docs/guide/)

Voici quelques exemples tirés du guide d'extension TwilioQuest

## `objective.json`

```json
{
  "title" : "Fog Owl : Planter un arbre !",
  "description" : "Le jeu TwilioQuest soutient la reforestation en Australie. Cliquez sur <strong>HACK</strong>, et Twilio fera don d'un dollar pour planter un arbre !",
  "validation_fields" : [
    {
      "name" : "prompt",
      "type" : "prompt",
      "placeholder" : "",
      "label" : "Cliquez sur HACK pour planter un arbre".
    }
  ],
  "show_ide" : false,
  " rewards " : {
    "xp" : 100
  }
}
```

## `validator.js`

Voici un validateur qui utilise une requête réseau asynchrone pour vérifier si un utilisateur a saisi un nom d'utilisateur GitHub valide dans un objectif.

```javascript
const got = require("got") ;

module.exports = async (helper) => {
  const username = helper.getNormalizedInput("username", { lowerCase : false }) ;

  if (!username) {
    return helper.fail(`Veuillez entrer le nom d'utilisateur de votre compte GitHub!`) ;
  }

  try {
    const response = await got(`https://api.github.com/users/ ${username}`, {
      throwHttpErrors : false,
    }) ;

    if (response.statusCode === 200) {
      return helper.success(
        `Nous avons trouvé votre utilisateur GitHub, ${username}. Bon travail !`,
        [{ name : "GITHUB_USERNAME", value : username }]
      ) ;
    } else {
      helper.fail(
        `Nous n'avons pas pu trouver l'utilisateur GitHub, ${username}. Y a-t-il une faute de frappe dans le nom d'utilisateur ?``
      ) ;
    }
  } catch (err) {
    helper.fail(
      `Quelque chose a mal tourné lorsque nous avons essayé de valider votre nom d'utilisateur GitHub !
      
      ${err}`
    ) ;
  }
} ;
```
