const findKeyByValue = function(string1, string2) {
  
  for (let key in string1) {
    if (string2 === string1[key]) {
      return key;
    }
  }
  return undefined;
};

module.exports = findKeyByValue;