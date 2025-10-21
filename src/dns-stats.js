const { NotImplementedError } = require('../lib');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  
  let myDomains = domains;
  const myObj = {};
  let max = [0, 0];
  let str = '';
  if (domains.length === 0) return myObj;
  myDomains = myDomains.map((item, i) => { //make arr of arrays and find the longest domain, its index max[1]
    const it = item.split('.');
    if (max[0] < it.length) max = [it.length, i];
    return it;
  });
  str = `.${myDomains[max[1]][max[0] - 1]}`; // ru
  for(let i = max[0] - 1; i >= 0; i --) { // the
    for(let j = 0; j < myDomains.length; j ++) {
      if (myDomains[j].includes(myDomains[max[1]][i])) {
        if (!myObj[str]) myObj[str] = 1;
        else myObj[str] = myObj[str]+1;
      }
    }
    str = str + `.${myDomains[max[1]][i-1]}`;
  }
  return myObj;
}

module.exports = {
  getDNSStats
};
