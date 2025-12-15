const CharacterCreator = require("../src/character-creator");

describe("CharacterCreator", () => {
  let characterCreator;

  beforeEach(() => {
    characterCreator = new CharacterCreator();
  });

  test("should process data correctly when written to", (done) => {
    // TODO: Write your test here
    const input = JSON.stringify({
      class: "Warrior",
      gender: "Male",
      fact: "defeated a giant",
    });
    let output = "";

    characterCreator.on("data", (chunk) => {
      output += chunk.toString();
    });

    characterCreator.on("end", () => {
      try {
        expect(output).toBe("Male Warrior — Fun fact: defeated a giant.");
        done();
      } catch (err) {
        done(err);
      }
    });

    characterCreator.write(input);
    characterCreator.end();
  });

  test("should emit 'error' when invalid data is written", (done) => {
    // TODO: Write your test here
    characterCreator.on("error", (err) => {
      try {
        expect(err).toBeInstanceOf(Error);
        expect(err.message).toMatch(/Empty string/);
        done();
      } catch (e) {
        done(e);
      }
    });

    // Writing empty string should trigger error
    characterCreator.write("");
  });

  test("should transform data correctly when written to", (done) => {
    // TODO: Write your test here
    const input = JSON.stringify({
      class: "mage",
      gender: "female",
      fact: "can talk to plants",
    });

    let output = "";

    characterCreator.on("data", (chunk) => {
      output += chunk.toString();
    });

    characterCreator.on("end", () => {
      try {
        expect(output).toBe("Female Mage — Fun fact: can talk to plants.");
        done();
      } catch (err) {
        done(err);
      }
    });

    characterCreator.write(input);
    characterCreator.end();
  });
});
