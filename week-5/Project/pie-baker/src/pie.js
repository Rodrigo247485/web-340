/**
 * Author: Rodrigo Piccardo
 * Date: 11/23/2025
 * File Name: pie.js
 * Description:
 */
"use strict";

function bakePie(pieType, ingredients) {
  // Your code here
  const essentialIngredients = ["flour", "sugar", "butter"];
  for (const item of essentialIngredients) {
    if (!ingredients.includes(item)) {
      console.warn(`Missing essential ingredient: ${item}`);
      process.exit(1);
      return;
    }
  }
  
  return `The ${pieType} pie was successfully baked!`;
}
module.exports = { bakePie };
