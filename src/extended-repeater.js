const { NotImplementedError } = require('../lib');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  function join(string, repeat, separator) {
    if(string === undefined) {
      string = '';
    }
    if(repeat === undefined) repeat = 0;
    if(separator ===undefined) {
      separator = '+';
    }
    let ans = string;
    if (repeat === 1) return ans;
    for(let i = 1; i < repeat; i++){
      ans = ans + separator + string;
    }
    return ans;
  }
  let additionSeparator = '|';
  if(options.additionSeparator !== undefined) additionSeparator = options.additionSeparator;
  return join(str + join(options.addition, options.additionRepeatTimes, additionSeparator), options.repeatTimes, options.separator);
}

module.exports = {
  repeater
};
