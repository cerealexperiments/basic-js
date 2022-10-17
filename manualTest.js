function renameFiles(names) {
  let hashmap = {};
  let answer = [];
  for (let name of names) {
    if (!hashmap[name]) {
      hashmap[name] = 1;
    } else {
      hashmap[`${name}(${hashmap[name]})`] = 1;
      hashmap[name] += 1;
    }
  }
  for (let name of Object.keys(hashmap)) {
    answer.push(name);
  }
  return answer;
}

console.log(renameFiles(["file", "file", "image", "file(1)", "file"]));
