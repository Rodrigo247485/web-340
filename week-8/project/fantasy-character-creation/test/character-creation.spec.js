"use strict";

/**
 * This file allows you to choose between using callbacks or promises (async/await) for handling asynchronous operations.
 *
 * If you want to use callbacks:
 * 1. Uncomment the 'fs' require statement under the "For callbacks" comment.
 *
 * If you want to use promises (async/await):
 * 1. Uncomment the 'fs' require statement under the "For promises" comment.
 */

// For callbacks:

jest.mock("fs", () => ({
  writeFile: jest.fn(),
  readFile: jest.fn(),
}));

const fs = require("fs");

describe("Character Creation Module", () => {
  let createCharacter;
  let getCharacters;

  beforeAll(() => {
    ({ createCharacter, getCharacters } = require("../src/character-creation"));
  });

  beforeEach(() => {
    fs.writeFile.mockReset();
    fs.readFile.mockReset();
  });

  // TODO: Write your tests here. You should have at least three tests:
  // 1. Test that createCharacter writes a new character to the file
  test("createCharacter writes character data to a file", (done) => {
    fs.writeFile.mockImplementation((file, data, cb) => cb(null));

    const character = {
      class: "Warrior",
      gender: "Male",
      specialTrait: "Has a dragon companion",
    };

    createCharacter(character, (err, result) => {
      expect(err).toBeNull();
      expect(fs.writeFile).toHaveBeenCalled();
      expect(result).toBe(true);
      done();
    });
  });
  // 2. Test that getCharacters reads characters from the file
  test("getCharacters reads character data from the file", (done) => {
    const mockCharacter = {
      class: "Mage",
      gender: "Female",
      specialTrait: "Controls time",
    };

    fs.readFile.mockImplementation((file, encoding, cb) =>
      cb(null, JSON.stringify(mockCharacter))
    );

    getCharacters((err, data) => {
      expect(err).toBeNull();
      expect(fs.readFile).toHaveBeenCalled();
      expect(data.class).toBe("Mage");
      expect(data.gender).toBe("Female");
      expect(data.specialTrait).toBe("Controls time");
      done();
    });
  });
  // 3. Test that createCharacter handles errors when writing to the file
  test("createCharacter handles errors when writing to the file", (done) => {
    fs.writeFile.mockImplementation((file, data, cb) =>
      cb(new Error("Write failed"))
    );

    const character = {
      class: "Rogue",
      gender: "Other",
      specialTrait: "Invisible in shadows",
    };

    createCharacter(character, (err, result) => {
      expect(err).toBeInstanceOf(Error);
      expect(err.message).toBe("Write failed");
      expect(result).toBeUndefined();
      done();
    });
  });
});
