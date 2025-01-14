const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  const num = getNumberOfDigit(n);
  if(num === n) return n;
  return getSumOfDigits(num);
  function getNumberOfDigit(digit){
    const sum = (digit+'').split('').map((item) => +item).reduce((accum, item) => {
      return accum+item;
    }, 0);
    return sum;
  };
}

module.exports = {
  getSumOfDigits
};
