const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) throw Error("'arr' parameter must be an instance of the Array!");
  const arrCopy = [];
  let isDeletedPrev = false;
  let isDeletedNext = false;
  for(let i = 0; i < arr.length; i++) {
    if(arr[i] === '--double-next') {
      if (i !== arr.length - 1) {
        arrCopy.push(arr[i+1]);
      }
      isDeletedPrev = false;
      isDeletedNext = false;
    } else if(arr[i] === '--discard-prev'){
      if (i !== 0){
        if(!isDeletedPrev) arrCopy.pop();
        isDeletedPrev = true;
      } else isDeletedPrev = false;
      isDeletedNext = false;
    } else if(arr[i] === '--discard-next') {
      if (i !== arr.length - 1){
        isDeletedNext = true;
      }
      isDeletedPrev = false;
    } else if(arr[i] === '--double-prev') {
      if (i !== 0) {
        if (!isDeletedPrev) arrCopy.push(arr[i-1]);
      }
      isDeletedPrev = false;
      isDeletedNext = false;
    } else {
      if(!isDeletedNext){
        arrCopy.push(arr[i]);
        isDeletedPrev = false;
      } else isDeletedPrev = true;
      isDeletedNext = false;

    } 
  }

  return arrCopy;
} 

module.exports = {
  transform
};
