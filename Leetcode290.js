// word pattern

var wordPattern = function (pattern, s) {
  let splitArr = s.split(" ");
  //   return splitArr;
  let obj = {};
  for (let i = 0; i < splitArr.length; i++) {
    if (
      Object.keys(obj).includes(pattern[i]) && obj[pattern[i]] !== splitArr[i]
    ) {
      return false;
    } else {
      obj[pattern[i]] = splitArr[i];
    }
  }
  return true;
};

console.log(wordPattern("abba", "dog cat cat dog"));
