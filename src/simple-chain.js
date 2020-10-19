const CustomError = require("../extensions/custom-error");

const chainMaker = {
  size: 0,
  getLength() {
    return this.size;
  },
  addLink(value) {
    this.chainArr.push("( " + value + " )");
      return this;
  },
  removeLink(position) {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  reverseChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  },
  finishChain() {
    throw new CustomError('Not implemented');
    // remove line with error and write your code here
  }
};

module.exports = chainMaker;
