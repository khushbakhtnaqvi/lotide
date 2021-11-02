// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqObjects = require("./eqObjects");


// FUNCTION IMPLEMENTATION
const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  console.log(`Example label: ${inspect(actual)}`);

  let assertion;
  if (eqObjects(actual, expected)) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  return assertion;
};

module.exports = assertObjectsEqual;