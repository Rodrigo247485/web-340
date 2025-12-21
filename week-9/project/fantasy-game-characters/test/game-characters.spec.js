// game-characters.spec.js
const { GameCharacters } = require("../src/game-characters");

describe("GameCharacters", () => {
  let gameCharacters;

  test("should return game characters data", (done) => {
    gameCharacters = new GameCharacters("game-characters-data.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(Array.isArray(data)).toBe(true);
      expect(data.length).toBeGreaterThan(0);
      done();
    });
  });

  beforeEach(() => {
    gameCharacters = new GameCharacters("game-characters-data.js");
  });

  test("should return game characters data", (done) => {
    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(Array.isArray(data)).toBe(true);
      done();
    });
  });

  test("should handle an error when the game characters data script is not found", (done) => {
    // TODO: Implement this test
    gameCharacters = new GameCharacters("missing-script.js");

    gameCharacters.getCharacters((err, data) => {
      expect(err).toBeTruthy();
      expect(data).toBeNull();
      done();
    });
  });

  test("should handle an error when the game characters data script fails", (done) => {
    // TODO: Implement this test
    gameCharacters = new GameCharacters("failing-script.js");
    gameCharacters.getCharacters((err, data) => {
      expect(err).toContain("Something went wrong");
      expect(data).toBeNull();
      done();
    });
  });
});
