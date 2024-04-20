//longest common prefix

var longestCommonPrefix = function (strs) {
  let initialStr = strs[0];
  let str = "";
  for (let alpha = 0; alpha < initialStr.length; alpha++) {
    for (let i = 1; i < strs.length; i++) {
      let checkStr = strs[i];
      if (checkStr[alpha]===initialStr[alpha]) {
        continue;
      } else {
        return str;
      }
    }
      str+=initialStr[alpha];
  }
  return str;
};

// console.log(longestCommonPrefix(["flower", "flow", "flight"]));
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));
// console.log(longestCommonPrefix(["ab", "a"]));
console.log(longestCommonPrefix(["a"]));


