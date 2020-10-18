const CustomError = require("../extensions/custom-error");

module.exports = function countCats(array) {
  catsNumber = 0;
  for (let i = 0; i < array.length; i += 1) {
    for (let j = 0; j < array[i].length; j += 1) {
      if (array[i][j] == "^^") {
        catsNumber += 1;
      }
    }
  }
  return catsNumber;
};
