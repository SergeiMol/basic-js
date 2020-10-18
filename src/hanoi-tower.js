const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  const SECONDS = 3600;
  let turnsNumber = Math.pow(2, disksNumber) - 1;
  let solveTime = Math.floor(turnsNumber / (turnsSpeed / SECONDS));
  return {
    turns: turnsNumber,
    seconds: solveTime
  }
};
