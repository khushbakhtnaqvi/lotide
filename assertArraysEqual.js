const eqArrays = function(array1, array2) {
  const arr = (array1.length >= array2.length ? array1 : array2)
  for (let i in arr) {
     if (array1[i] !== array2[i]) {
        return false;
      }
    }
      return true;
}

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