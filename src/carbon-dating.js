const { NotImplementedError } = require("../extensions/index.js");

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 *
 * @param {String} sampleActivity string representation of current activity
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 *
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
  let log2 = 0.693;
  let answer = 0;
  if (typeof sampleActivity !== "string") {
    return false;
  }
  answer = Math.ceil(
    Math.log(MODERN_ACTIVITY / sampleActivity) * (HALF_LIFE_PERIOD / log2)
  );
  if (
    sampleActivity <= 0 ||
    isNaN(sampleActivity) ||
    sampleActivity > MODERN_ACTIVITY
  ) {
    return false;
  }
  return answer;
}

module.exports = {
  dateSample,
};
