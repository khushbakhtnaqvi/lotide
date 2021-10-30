const map = function(array, callback) {  
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
}


const eqArrays = function(array1, array2) {
  const arr = (array1.length >= array2.length ? array1 : array2)
  for (let i in arr) {
     if (array1[i] !== array2[i]) {
        return false;
      }
    }
      return true;
}

const assertArraysEqual = function(actual, expected) {
  let assertion;
  if (eqArrays(actual, expected) === true ) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
  return assertion;
};

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