const bestTVShowsByGenre = { 
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const findKeyByValue = function(string1, string2) {
  
  for (let key in string1) {
    if (string2 === string1[key]) {
      return key;
    }
  }
  return undefined;
};

const assertEqual = function(actual, expected) {
  let assertion;
  if (actual === expected) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return assertion;
};


assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);