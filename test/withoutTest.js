const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const without =require("../without");

console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
const arr1 = [1, 2, 3];
assertArraysEqual(arr1, [1, 2, 3]);
const arr2 = ["1", "2", "3"];
assertArraysEqual(arr2, ["1", "2", "3"]);