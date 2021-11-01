const assertEqual = require('./assertEqual');

const head = function(array) {
  let first = array[0];
  if (first === "") {
    return undefined;
  } else
    return first;
};

module.exports = head;