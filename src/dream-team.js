const { NotImplementedError } = require("../extensions/index.js");

/**
 * Create name of dream team based on the names of its members
 *
 * @param {Array} members names of the members
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 *
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam(members) {
  let teamName = "";
  let newMembers = [];
  if (!Array.isArray(members)) {
    return false;
  }
  for (let member of members) {
    if (typeof member === "string") {
      newMembers.push(member.trim()[0].toUpperCase());
    }
  }
  newMembers.sort();
  for (let newMember of newMembers) {
    teamName += newMember[0];
  }
  return teamName;
}

module.exports = {
  createDreamTeam,
};
