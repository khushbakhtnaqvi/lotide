// allItems: an array of strings that we need to look through
// itemsToCount: an object specifying what to count
const assertEqual = function(actual, expected) {
  let assertion;
  if (actual === expected) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return assertion;
};

const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (i in allItems) {
    if (itemsToCount[allItems[i]] === true) {

      result[allItems[i]] = result[allItems[i]] ? result[allItems[i]]+1 : 1;
    }
  }
  return result;
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);