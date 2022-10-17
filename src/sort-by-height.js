const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  let minusOneIndexes = [];
  let heights = [];
  let newArr = new Array(arr.length).fill(null);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === -1) {
      minusOneIndexes.push(i);
    } else {
      heights.push(arr[i]);
    }
  }
  heights.sort((a, b) => a - b);
  for (let minusOneIndex of minusOneIndexes) {
    newArr[minusOneIndex] = -1;
  }
  for (let height of heights) {
    for (let i = 0; i < newArr.length; i++) {
      if (newArr[i] === null) {
        newArr[i] = height;
        break;
      }
    }
  }
  return newArr;
}

module.exports = {
  sortByHeight,
};
