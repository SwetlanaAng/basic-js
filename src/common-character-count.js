const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {;
  function createMap(str) {
    const myMap = new Map();
    for(let i = 0; i < str.length; i ++) {
    if (myMap.has(str[i])) myMap.set(str[i], myMap.get(str[i]) + 1);
    else myMap.set(str[i], 1);
    }
    return myMap
  }
  let ans = 0;
  const myMap1 = createMap(s1);
  const myMap2 = createMap(s2);
  for(let item of myMap1.keys()) {
    if (myMap2.has(item)) ans += Math.min(myMap1.get(item), myMap2.get(item));
  }
  return ans;
}

module.exports = {
  getCommonCharacterCount
};
