const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  let assertion;
  if (eqArrays(actual, expected) === true ) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
  return assertion;
};

module.exports = assertArraysEqual;