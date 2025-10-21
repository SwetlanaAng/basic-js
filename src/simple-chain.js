const { decorateObject } = require('../lib');
const { NotImplementedError } = require('../lib');

/**
 * Implement chainMaker object according to task description
 *
 */
const chainMaker = {
  arr : [],
  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    const val = '' + value;
    this.arr.push(val);
    return this;
  },
  removeLink(position) {
    if(position < 1 || position > this.getLength() || typeof position !== 'number') {
      this.arr = [];
      throw Error('You can\'t remove incorrect link!');
    } 
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    const ans = `( ${this.arr.join(' )~~( ')} )`;
    this.arr = [];
    return ans;  
  }
};

module.exports = {
  chainMaker,
};
