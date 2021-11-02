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

module.exports = letterPositions;