const assertEqual = require('../assertEqual');
const head = require('../head');

assertEqual(head([0]), 0);
assertEqual(head([5,6,7]), 5);
assertEqual(head([3,5,6]), 3);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");