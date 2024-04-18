//Valid Parantheses

var isValid = function (s) {
  let obj = {
    "(": ")",
    "{": "}",
    "[": "]",
  };

  for (let i = 0; i < s.length; i++) {
    let flag = 0;
    if (
      Object.keys(obj).includes(s[i]) &&
      s[i + 1] !== obj[s[i + 1]] &&
      Object.values(obj).includes(s[i + 1])
    ) {
      return false;
    }
    if (Object.keys(obj).includes(s[i])) {
      for (let j = i + 1; j < s.length; j++) {
        // console.log(s[j], obj[s[i]]);
        if (s[j] === obj[s[i]]) {
          flag = 1;
          break;
        }
      }
      if (flag === 0) {
        return false;
      }
    }
  }
  return true;
};

// console.log(isValid("()"));
// console.log(isValid("()[]{}"));
// console.log(isValid("(]"));
console.log(isValid("{()}"));
// console.log(isValid("([)]"));
