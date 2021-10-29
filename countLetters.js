const assertEqual = function(actual, expected) {
  let assertion;
  if (actual === expected) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return assertion;
};

const countLetters = function(str) {
  let result = {};
    for (let val of str) {
      if (val !== " ") {
        if (result[val]) {
          result[val] = result[val] + 1;
        } else {
          result[val] = 1;
        }
      }
    }
return result;
}

const str = "lighthouse in the house";
const actual = countLetters(str);
const expected = { l: 2, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
for ( let s of str) {
assertEqual(actual[s], expected[s]);
}