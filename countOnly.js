// allItems: an array of strings that we need to look through

const countLetters = require("./countLetters");

// itemsToCount: an object specifying what to count
const countOnly = function(allItems, itemsToCount) {
  const result = {};
  for (i in allItems) {
    if (itemsToCount[allItems[i]] === true) {

      result[allItems[i]] = result[allItems[i]] ? result[allItems[i]]+1 : 1;
    }
  }
  return result;
};

module.exports = countOnly;