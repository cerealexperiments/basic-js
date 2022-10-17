const { NotImplementedError } = require("../extensions/index.js");

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
  let answer = "";
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1;
  let separator = options.separator ? options.separator : "+";
  let addition = options.hasOwnProperty("addition") ? options.addition : "";
  let additionRepeatTimes = options.additionRepeatTimes
    ? options.additionRepeatTimes
    : 1;
  let additionSeparator = options.additionSeparator
    ? options.additionSeparator
    : "|";

  if (repeatTimes === 0) {
    return str + addition;
  }

  for (let i = 0; i < repeatTimes; i++) {
    answer += str;
    for (let j = 0; j < additionRepeatTimes; j++) {
      answer += addition;
      if (j !== additionRepeatTimes - 1) {
        answer += additionSeparator;
      }
    }
    if (i !== repeatTimes - 1) {
      answer += separator;
    }
  }
  return answer;
}

module.exports = {
  repeater,
};
