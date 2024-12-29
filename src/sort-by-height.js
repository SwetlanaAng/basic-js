const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let index = 0;
  const sortedArr = arr.filter((item)=>{
    if(item !== -1) return item
  }).sort((a, b) => a - b);
  arr = arr.map((item, i)=>{
    if(item !== -1) {
      arr[i] = sortedArr[index];
      index++;
      return arr[i];
    } else return -1;
  })
  return arr;
}

module.exports = {
  sortByHeight
};
