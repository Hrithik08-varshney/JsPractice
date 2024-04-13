// faulty keyboard

var finalString = function (s) {
  let revStr = "";
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "i") {
      let newStr = revStr.split("").reverse().join("");
      revStr = newStr;
    } else {
      revStr += s[i];
    }
  }
  return revStr;
};

// console.log(finalString("string"));
console.log(finalString("poiinter"));
