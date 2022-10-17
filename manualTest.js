function transform(arr) {
  let newArr = [];
  let newArrIndex = 0;
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!");
  }
  for (let i = 0; i < arr.length; i++) {
    try {
      if (arr[i] === "--double-next") {
        if (arr[i + 1] !== undefined) {
          newArr.push(arr[i + 1]);
        }
      } else if (arr[i] === "--double-prev") {
        if (arr[i - 1] !== null && arr[i - 1] !== undefined) {
          newArr.push(arr[i - 1]);
        }
      } else if (arr[i] === "--discard-next") {
        if (arr[i + 1] !== undefined) {
          arr[i + 1] = null;
        }
      } else if (arr[i] === "--discard-prev") {
        if (arr[i - 1] !== undefined) {
          newArr.splice(newArrIndex);
        }
      } else {
        if (arr[i] !== null) {
          newArr.push(arr[i]);
          newArrIndex++;
        }
      }
    } catch {
      continue;
    }
  }
  return newArr;
}

console.log(
  transform([1, 2, 3, "--discard-next", 1337, "--double-prev", 4, 5])
);
