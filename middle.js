const eqArrays = function(array1, array2) {
  const arr = (array1.length >= array2.length ? array1 : array2);
  for (let i in arr) {
    if (array1[i] !== array2[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(actual, expected) {
  let assertion;
  if (eqArrays(actual, expected) === true) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
  return assertion;
};

const middle = function(array) {
  let result = [];
  let index = 0;
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    index = Math.floor(array.length / 2);
    result.push(array[index]);
  } else if (array.length % 2 === 0) {
    index = array.length / 2;
    result = [array[index - 1], array[index]];
  }
  return result;
};

assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []

assertArraysEqual(middle([1, 2, 3]),[2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]); // => [3]

assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]),[3,4]); // => [3, 4]