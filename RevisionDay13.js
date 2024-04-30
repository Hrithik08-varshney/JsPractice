//Keyboard Row
var findWords = function (words) {
  let rowArr = ["qwertyuiop", "asdfghjkl", "zxcvbnm"];
  let arr = [];
  for (let i = 0; i < words.length; i++) {
    let str = words[i].toLowerCase();
    for (let j = 0; j < rowArr.length; j++) {
      let flag = true;
      for (let k = 0; k < str.length; k++) {
        if (!rowArr[j].includes(str[k])) {
        //   console.log(str, rowArr[j], str[k]);
          flag = false;
          break;
        }
      }
      if (flag) arr.push(words[i]);
    }
  }
  return arr;
};

// console.log(findWords(["Hello", "Alaska", "Dad", "Peace"]));
// console.log(findWords(["omk"]));
console.log(findWords(["adsdf","sfd"]));


