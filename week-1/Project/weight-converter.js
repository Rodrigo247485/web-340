/**
 * Author: Rodrigo Piccardo
 * Date: 10/26/2025
 * File Name: Weight-converter.js
 * Description:
*/

"use strict";

// TODO: Implement the weight conversion logic here
const args = process.argv.slice(2);

if (args.length === 0) {
  console.error("Usage: node weight-converter.js <pounds>");
  process.exit(1);
}

const pounds = args[0];

if (isNaN(pounds)) {
  console.error("Input must be a number.");
  process.exit(1);
}

const kilograms = (pounds * 0.45359237).toFixed(2);

console.log(kilograms);