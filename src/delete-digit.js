const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let max = 0;
  n = n.toString();
  for (let i = 0; i < n.length; i++) {
    let newN = remove_character(n, i);
    if (Number(newN) > max) {
      max = Number(newN);
    }
  }
  return max;
}

function remove_character(str, char_pos) {
  part1 = str.substring(0, char_pos);
  part2 = str.substring(char_pos + 1, str.length);
  return part1 + part2;
}

module.exports = {
  deleteDigit,
};
