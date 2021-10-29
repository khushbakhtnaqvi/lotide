const letterPositions = function(sentence) {
  const results = {};

    // logic to update results here

    for( let index in sentence) {
      if (sentence[index] !== " ") {
        if (!results[sentence[index]]){
          results[sentence[index]] = [];
        }
        
        results[sentence[index]].push(Number(index));

      }
    }
  return results;
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

const assertArraysEqual = function(actual, expected) {
  let assertion;
  if (eqArrays(actual, expected) === true ) {
    assertion = console.log(`✅✅✅ Assertion Passed: ${JSON.stringify(actual)} === ${JSON.stringify(expected)}`);
  } else {
    assertion = console.log(`🛑🛑🛑 Assertion Failed: ${JSON.stringify(actual)} !== ${JSON.stringify(expected)}`);
  }
  return assertion;
};

console.log(letterPositions("lighthouse in the house"));

const str = "lighthouse in the house";
const actual = letterPositions(str);
const expected = { 
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
}
for ( let s in expected) {
  assertArraysEqual(actual[s], expected[s]);
  }