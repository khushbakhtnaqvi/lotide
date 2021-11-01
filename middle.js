const middle = function(array) {
  let result = [];
  let index = 0;
  if (array.length <= 2) {
    return result;
  } else if (array.length % 2 !== 0) {
    index = Math.floor(array.length / 2);
    result.push(array[index]);
  } else if (array.length % 2 === 0) {
    index = array.length / 2;
    result = [array[index - 1], array[index]];
  }
  return result;
};

module.exports = middle;