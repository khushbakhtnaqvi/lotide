// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
let array1 = [];
let array2 = [];
const eqObjects = function(object1, object2) {
let object1Keys = Object.keys(object1);
let object2Keys = Object.keys(object2);
let object1Length = Object.keys(object1).length;
let object2Length = Object.keys(object2).length;
let result;
if (object1Length !== object2Length) {
  return false;
} else {
  for (let key1 of object1Keys) {
    if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])){
      result = eqArrays(object1[key1], object2[key1]);
    } else if (object1[key1] !== object2[key1]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
}
}



const assertEqual = function(actual, expected) {
  let assertion;
  if (actual === expected) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }

  return assertion;
};

const eqArrays = function(array1, array2) {
  const arr = (array1.length >= array2.length ? array1 : array2)
  for (let i in arr) {
     if (array1[i] !== array2[i]) {
        return false;
      }
    }
      return true;
}

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
assertEqual(eqObjects(ab, ba), true); // => true

const abc = { a: "1", b: "2", c: "3" }; // => false
assertEqual(eqObjects(ab, abc), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
