const assertEqual = function(actual, expected) {
  let assertion;
  if (actual === expected) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return assertion;
};

let tailarray = [];
const tail = function(array) {
  tailarray = array.slice(1,array.length);
  return tailarray;
};


module.exports = tail;