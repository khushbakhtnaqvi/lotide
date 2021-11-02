# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @khushbakhtnaqvi/lotide`

**Require it:**

`const _ = require('@khushbakhtnaqvi/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `function head`: retrieve the head/first element from the array
* `function tail`: retrieve tail that is meant to be every element except the head (first element) of the array.
* `function middle`: take in an array and return the middle-most element(s) of the given array.
* `function assertArraysEqual`: take in two arrays and console.log an appropriate message to the console.
* `function assertEqual`: compare the two values it takes in and print out a message telling us if they match or not.
* `function assertObjectsEqual`: take in two objects and console.log an appropriate message to the console.
* `function countLetters`: take in a sentence (as a string) and then return a count of each of the letters in that sentence.
* `function countOnly`: When given an array and an object, it will return an object containing counts of everything that the input object listed.
* `function eqArrays`: takes in two arrays and returns true or false, based on a perfect match.
* `function eqObjects`: take in two objects and returns true or false, based on a perfect match.
* `function findKey`: takes in an object and a callback. scan the object and return the first key for which the callback returns a truthy value. If no key is found, then it return undefined.
* `function findKeyByValue`: takes in an object and a value, scan the object and return the first key which contains the given value. If no key with that given value is found, then it return undefined.
* `function letterPositions`: return all the indices (zero-based positions) in the string where each character is found.
* `function map`: take in two arguments: 1) An array to map, 2)A callback function. and return a new array based on the results of the callback function.
* `function takeUntil`: take in two parameters: 1) The array to work with, 2) The callback. and return a "slice of the array with elements taken from the beginning." It keep going until the callback/predicate returns a truthy value.
* `function without`: return a subset of a given array, removing unwanted elements.