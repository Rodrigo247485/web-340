/**
 * Author: Rodrigo Piccardo
 * Date: 11/16/2025
 * File Name: taco-stand.spec.js
 * Description:
 */

"use strict";

const assert = require("assert");
const TacoStandEmitter = require("../src/tacoStand");

// TODO: Write tests for the TacoStandEmitter methods

function testServeCustomer() {
  try {
    const tacoStand = new TacoStandEmitter();
    let received = null;

    tacoStand.on("serve", (customer) => {
      received = customer;
    });

    tacoStand.serveCustomer("John");

    assert.strictEqual(received, "John");

    console.log("Passed testServeCustomer");
    return true;
  } catch (err) {
    console.error(`Failed testServeCustomer: ${err}`);
    return false;
  }
}

function testPrepareTaco() {
  try {
    const tacoStand = new TacoStandEmitter();
    let received = null;

    tacoStand.on("prepare", (taco) => {
      received = taco;
    });

    tacoStand.prepareTaco("beef");

    assert.strictEqual(received, "beef");

    console.log("Passed testPrepareTaco");
    return true;
  } catch (err) {
    console.error(`Failed testPrepareTaco: ${err}`);
    return false;
  }
}

function testHandleRush() {
  try {
    const tacoStand = new TacoStandEmitter();
    let received = null;

    tacoStand.on("rush", (rush) => {
      received = rush;
    });

    tacoStand.handleRush("lunch");

    assert.strictEqual(received, "lunch");

    console.log("Passed testHandleRush");
    return true;
  } catch (err) {
    console.error(`Failed testHandleRush: ${err}`);
    return false;
  }
}

// Run tests
const results = [
  testServeCustomer(),
  testPrepareTaco(),
  testHandleRush()
];

if (!results.every(Boolean)) {
  process.exitCode = 1;
}