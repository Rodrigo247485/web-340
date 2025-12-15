const { Duplex } = require("stream");

class CharacterCreator extends Duplex {
  constructor(options) {
    super(options);
    // TODO: Initialize your class here
    this.on("finish", () => {
      this.push(null);
    });
  }

  _write(chunk, encoding, callback) {
    // TODO: Implement your _write method here
    const input = chunk.toString().trim();

    if (input.length === 0) {
      const err = new Error("Empty string written to CharacterCreator");
      this.emit("error", err);
      return callback(err);
    }

    let data;

    try {
      data = JSON.parse(input);
    } catch (e) {
      return callback(new Error("Invalid input format"));
    }

    const charClass = this._capitalize(data.class);
    const gender = this._capitalize(data.gender);
    const fact = data.fact;

    const output = `${gender} ${charClass} — Fun fact: ${fact}.`;

    this.push(output);

    callback();
  }

  _read(size) {}

  _capitalize(str) {
    // TODO: Implement your _read method here
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
  }
}

module.exports = CharacterCreator;
