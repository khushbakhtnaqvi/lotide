const assertEqual = require("../assertEqual");
const assertArraysEqual = require("../assertArraysEqual");
const tail = require("../tail.js");

assertArraysEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");

const words = ["Yo Yo", "Lighthouse", "Labs"];
assertArraysEqual(tail(words), ["Lighthouse", "Labs"]);
assertEqual(words.length, 3);