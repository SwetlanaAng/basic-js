const { NotImplementedError } = require('../extensions/index.js');

/**
 * Calculate turns number and time (in seconds) required
 * to solve puzzle
 * 
 * @param {Number} disks number of disks
 * @param {Number} turnsSpeed speed (in turns/hour)
 * @return {Object} object with props turns (number of turns)
 * and seconds (time in seconds)
 *
 * @example
 * 
 * calculateHanoi(9, 4308) => { turns: 511, seconds: 427 }
 *
 */
function calculateHanoi(disksNumber, turnsSpeed) {
  function getNumberOfTurns(n) {
    if (n === 1) return 1;
    const turns = 2 * getNumberOfTurns(n - 1) + 1;
    return turns;
  }
  const turns = getNumberOfTurns(disksNumber);
  const turnsInSecond = turnsSpeed / 3600;
  const seconds = Math.floor(turns / turnsInSecond);
  return {
    turns: turns,
    seconds: seconds
  }
}

module.exports = {
  calculateHanoi
};
