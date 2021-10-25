// FUNCTION IMPLEMENTATION
let assertion;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    assertion = console.log("✅✅✅ Assertion Passed: " + actual + " === " + expected);
  } else {
    assertion = console.log("🛑🛑🛑 Assertion Failed: " + actual + " !== " + expected);
  }

  return assertion;
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Labs", "Labs");
assertEqual(1, 10);