// Returns true if both objects have identical keys with identical values.
// Otherwise you get back a big fat false!
const eqArrays = require("./eqArrays");

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object1Length = Object.keys(object1).length;
  let object2Length = Object.keys(object2).length;
  let result;
  if (object1Length !== object2Length) {
    return false;
  } else {
    for (let key1 of object1Keys) {
      if (Array.isArray(object1[key1]) && Array.isArray(object2[key1])) {
        result = eqArrays(object1[key1], object2[key1]);
      } else if (object1[key1] !== object2[key1]) {
        result = false;
      } else {
        result = true;
      }
    }
    return result;
  }
};

module.exports = eqObjects;