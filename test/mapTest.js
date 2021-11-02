const eqArrays = require("../eqArrays");
const assertArraysEqual = require("../assertArraysEqual");
const map = require("../map");

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
console.log(results1);
assertArraysEqual(eqArrays(map(words, word => word[0]),[ 'g', 'c', 't', 'm', 't' ]), true);

const num = [1, 2, 3, 4, 5];
const results2 = map(num, num => num * 5);
console.log(results2);
assertArraysEqual(eqArrays(map(num, num => num * 5),[ 5, 10, 15, 20, 25 ]), true);

const action = ["end", "start", "go", "land", "fly"];
const results3 = map(action, action => action + "ing");
console.log(results3);
assertArraysEqual(eqArrays(map(action, action => action + "ing"),[ "ending", "starting", "going", "landing", "flying" ]), true);