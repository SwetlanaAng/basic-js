const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let str = n + '';
  let arrNumbers = str.split('');
  arrNumbers = arrNumbers.map((item) => +item);
  let max = 0;
  for(let i = 0; i < arrNumbers.length; i++) {
    const newNumb = arrNumbers.slice();
    newNumb.splice(i,1);
    if (+newNumb.join('') > max) max = +newNumb.join('');
  }
  return max;
}

module.exports = {
  deleteDigit
};
