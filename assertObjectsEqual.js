// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = function(array1, array2) {
  const arr = (array1.length >= array2.length ? array1 : array2);
  for (let i in arr) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;
  let result;
  if (object1Length !== object2Length) {
    return false;
  } else {
    for (let key1 of object1Keys) {
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
        result = eqArrays(object1[key1], object2[key1]);
      } else if (object1[key1] !== object2[key1]) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertObjectsEqual(ab, ba); // => true

const abc = { a: "1", b: "2", c: "3" }; // => false
assertObjectsEqual(ab, abc);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertObjectsEqual(cd, dc); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertObjectsEqual(cd, cd2); // => false
