const words = ["ground", "control", "to", "major", "tom"];
const map = function(arr,callback) {
const newArray = [];
arr.forEach((value) => {
  newArray.push(value);
  return newArray;})
  console.log(newArray);
};
const results1 = map(words, word => word[0]);
console.log(results1);
