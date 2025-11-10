const assert = require("assert");
const calculateDistance = require("../src/distance-calculator");

function testEarthToMars() {
  try {
    const earth = 1.0;
    const mars = 1.52;
    const expected = 0.52;

    assert.strictEqual(calculateDistance(earth, mars), expected);
    console.log("Passed testEarthToMars");
    return true;
  } catch (error) {
    console.error(`Failed testEarthToMars: ${error.message}`);
    return false;
  }
}

// Test 2
function testSamePlanet() {
  try {
    const value = 4.7;
    const expected = 0;

    assert.strictEqual(calculateDistance(value, value), expected);
    console.log("Passed testSamePlanet");
    return true;
  } catch (error) {
    console.error(`Failed testSamePlanet: ${error.message}`);
    return false;
  }
}

// Test 3
function testJupiterToSaturn() {
  try {
    const jupiter = 5.2;
    const saturn = 9.58;
    const expected = 4.38;

    assert.strictEqual(calculateDistance(jupiter, saturn), expected);
    console.log("Passed testJupiterToSaturn");
    return true;
  } catch (error) {
    console.error(`Failed testJupiterToSaturn: ${error.message}`);
    return false;
  }
}

// Call your test functions here
testEarthToMars();
testSamePlanet();
testJupiterToSaturn();
