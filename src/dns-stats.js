const { NotImplementedError } = require("../extensions/index.js");

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let answer = {};
  for (let domain of domains) {
    let name = "";
    for (let item of domain.split(".").reverse()) {
      name += `.${item}`;
      if (!answer[name]) {
        answer[name] = 1;
      } else {
        answer[name]++;
      }
    }
  }
  return answer;
}

module.exports = {
  getDNSStats,
};
