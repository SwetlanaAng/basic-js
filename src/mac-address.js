const { NotImplementedError } = require('../lib');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
  const arrMac = n.split('-');
  if (arrMac.length !== 6) return false;
  for(let i = 0; i < 6; i++) {
    const arrGroup = arrMac[i].split('').map((item)=>{
      if(isNaN(+item)) return item;
      return +item;
    });
    if (arrGroup.length !==2) return false;
    if (typeof arrGroup[0] !== 'number' && !arrGroup[0].match(/A|B|C|D|E|F/)) return false;
    if (typeof arrGroup[1] !== 'number' && !arrGroup[1].match(/A|B|C|D|E|F/)) return false;
  }
  return true;
}

module.exports = {
  isMAC48Address
};
