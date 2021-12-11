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
  const answer2 = helper.getNormalizedInput("answer2", { lowerCase: false });
  const ext_folder = helper.env.TQ_EXTENSION_FOLDER;

  if (!answer1) {
    return helper.fail(`
    Veuillez saisir la réponse à la première question.
    `);
  }

  try {
    assert.strictEqual(answer1, "validator.js");
  } catch (e) {
    return helper.fail(`
    La réponse à la deuxième question est incorrecte. La réponse correcte
    est "vali_____.js". 
    `);
  }

  if (!answer2) {
    return helper.fail(`
    Veuillez indiquer la réponse à la deuxième question.
    `);
  }

  try {
    assert.strictEqual(answer2, "helper");
  } catch (e) {
    return helper.fail(`
      cLa réponse à la deuxième question est incorrecte. La réponse correcte
      est "hel___". 
    `);
  }

  helper.success(
    `
    Hourra ! Vous avez réussi ! Vous avez réussi à créer votre première extension'.
    Nous espérons que vous avez appris quelque chose d'utile de cette extension qui vous inspirera et vous aidera à créer vos propres extensions TwilioQuest. Merci de jouer.
  `,
  );
};
