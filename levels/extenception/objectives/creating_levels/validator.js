/*
In your validation code, you can require core Node.js modules,
third-party modules from npm, or your own code, just like a regular
Node.js module (since that's what this is!)
*/
const assert = require("assert");
const fetch = require('node-fetch');
const fs = require("fs");
var path = require('path');
/*
Objective validators export a single function, which is passed a helper
object. The helper object contains information passed in from the game UI,
such as what the player entered into the fields in the hack interface.

The helper object also has "success" and "fail" callback functions - use
these functions to let the game (and the player) know whether or not they 
have completed the challenge as instructed.
*/
module.exports = async function (helper) {
  // We start by getting the user input from the helper
  //const { answer1, answer2 } = helper.validationFields;
  const answer1 = helper.getNormalizedInput("answer1", { lowerCase: false });
  const ext_folder = helper.env.TQ_EXTENSION_FOLDER;

  if (!answer1) {
    return helper.fail(`
    Veuillez saisir le nom de votre niveau.
    `);
  }

  try {
    var stats = fs.statSync(path.join(ext_folder, "levels", answer1));
    if (!stats.isDirectory()) throw "Pas de dossier";
  } catch (e) {
    return helper.fail(`
    Le dossier pour le niveau n'a pas été trouvé.
    `);
  }

  try {
    var stats = fs.statSync(path.join(ext_folder, "levels", answer1, "level.json"));
    if (!stats.isFile()) throw "Pas de fichier";
  } catch (e) {
    return helper.fail(`
    \`level.json\` n'a pas été trouvé dans le dossier.
    `);
  }

  helper.success(
    `
    Hourra ! Vous avez créé votre premier niveau !
    `,
    [{ name: "LEVEL_NAME", value: answer1 }]
  );
};
