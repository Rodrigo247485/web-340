/**
 * Author: Rodrigo Piccardo
 * Date: 11/1/2025
 * File Name: index.js
 * Description:
 */

// TODO: Import your module using require
const { createRecipe, setTimer, quit } = require("./recipes");

// TODO: Implement your CLI program here
console.log("Welcome to the Recipe Program!\n");

const recipe = createRecipe(["eggs", "flour", "sugar"]);
console.log(recipe);

const timer = setTimer(15);
console.log(timer);

const exitMessage = quit();
console.log(exitMessage);
