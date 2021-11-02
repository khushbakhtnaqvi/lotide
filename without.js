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
};

module.exports = without;