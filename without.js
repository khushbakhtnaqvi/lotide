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

const without = function(source,itemsToRemove ) {
const selected = [];
for (let i in source) {
  let flag = false;
  for (let j in itemsToRemove){
    if (source[i] === itemsToRemove[j]) {
      flag = true;
      break;
    }
  }
  if (!flag) {
      selected.push(source[i]);
  } 
}
return selected;
}






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

