let assertion;
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return assertion;
};

const head = function(array) {
  let first = array[0];
  if (first === "") {
    return undefined;
  } else
    return first;
};
console.log(head([0]));
assertEqual(head([5,6,7]), 5);
console.log(head([3,5,6]));
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");