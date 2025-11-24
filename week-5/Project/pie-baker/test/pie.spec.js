/**
 * Author: Rodrigo Piccardo
 * Date: 11/23/2025
 * File Name: pie.spec.js
 * Description:
 */

"use strict";

const { bakePie } = require("../src/pie");

// Your tests here
describe("bakePie", () => {

  test("bakes pie when flour, sugar, and butter are present", () => {
    const result = bakePie("apple", ["flour", "sugar", "butter", "apples"]);
    expect(result).toBe("The apple pie was successfully baked!");
  });

  test("fails if flour is missing", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    const result = bakePie("cherry", ["sugar", "butter", "cherries"]);
    expect(result).toBeUndefined();
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });

  test("fails if sugar is missing", () => {
    const mockExit = jest.spyOn(process, "exit").mockImplementation(() => {});
    bakePie("peach", ["flour", "butter", "peaches"]);
    expect(mockExit).toHaveBeenCalledWith(1);
    mockExit.mockRestore();
  });
});