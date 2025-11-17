/**
 * Author: Rodrigo Piccardo
 * Date: 11/16/2025
 * File Name: index.js
 * Description:
 */

"use strict";

const readline = require("readline");
const TacoStandEmitter = require("./tacostand");

const tacoStand = new TacoStandEmitter();

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

tacoStand.on("serve", (customer) => {
  console.log(`Taco Stand serves: ${customer}`);
});

tacoStand.on("prepare", (taco) => {
  console.log(`Taco Stand prepares: ${taco} taco`);
});

tacoStand.on("rush", (rushType) => {
  console.log(`Taco Stand handles rush: ${rushType}`);
});

// TODO: Set up event listeners for the tacoStand object
rl.on("line", (input) => {
  const [command, ...args] = input.split(" ");
  const argument = args.join(" ");

  switch (command) {
    case "serve":
      tacoStand.serveCustomer(argument);
      break;

    case "prepare":
      tacoStand.prepareTaco(argument);
      break;

    case "rush":
      tacoStand.handleRush(argument);
      break;

    default:
      console.log(`Unknown command: ${command}`);
      console.log(`Valid commands are: serve, prepare, rush`);
  }
});

// TODO: Handle the commands

console.log(
  `Enter a command: "serve", "prepare", or "rush", followed by a space and the argument.`
);
