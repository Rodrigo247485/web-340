// game-characters.js
const { spawn } = require("child_process");
const { join } = require("path");

class GameCharacters {
  constructor(scriptFile) {
    // TODO: Set the script file path
    this.scriptPath = join(__dirname, scriptFile);
  }

  getCharacters(callback) {
    // TODO: Implement this method
    let output = "";
    const child = spawn("node", [this.scriptPath]);
    child.stdout.on("data", (data) => {
      output += data.toString();
    });

    child.stderr.on("data", (error) => {
      console.error(error.toString());
      callback(error.toString(), null);
    });

    child.on("close", () => {
      if (output) {
        callback(null, JSON.parse(output));
      }
    });

    child.on("error", (err) => {
      console.error(err.message);
      callback(err.message, null);
    });
  }
}

module.exports = { GameCharacters };
