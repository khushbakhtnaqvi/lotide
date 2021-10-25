let assertion;
const assertEqual = function(actual, expected) {
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
console.log(tail(["hi", "hello", "yes", "no"]));
console.log(tail([4,5,2,7,4,2]));

const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);