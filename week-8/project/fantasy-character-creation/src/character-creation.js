"use strict";

/*
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For callbacks" comment.
 * 3. Uncomment the 'module.exports' line under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 * 2. Uncomment the 'createCharacter' and 'getCharacters' functions under the "For promises" comment.
 * 3. Uncomment the 'module.exports' line under the "For promises" comment.
 */

// For callbacks:

const fs = require("fs");
const path = require("path");

const DATA_FILE = "characters.json";
const FILE_PATH = path.join(__dirname, DATA_FILE);

function createCharacter(character, callback) {
  // TODO: Implement this function
  const data = JSON.stringify(character, null, 2);
  fs.writeFile(FILE_PATH, data, (err) => {
    if (err) return callback(err);
    callback(null, true);
  });
}

function getCharacters(callback) {
  // TODO: Implement this function
  fs.readFile(FILE_PATH, "utf-8", (err, data) => {
    if (err) return callback(err);
    try {
      const parsed = JSON.parse(data);
      callback(null, parsed);
    } catch (parseErr) {
      callback(parseErr);
    }
  });
}

// Uncomment the appropriate exports depending on whether you're using callbacks or promises:

module.exports = { createCharacter, getCharacters }; // For callbacks
