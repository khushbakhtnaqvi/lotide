const assertEqual = require('../assertEqual');
const countLetters = require("../countLetters");

const str = "lighthouse in the house";
const actual = countLetters(str);
const expected = { l: 1, i: 2, g: 1, h: 4, t: 2, o: 2, u: 2, s: 2, e: 3, n: 1 };
for ( let s of str) {
assertEqual(actual[s], expected[s]);
}