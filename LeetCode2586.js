//Count the Number of Vowel Strings in Range

var vowelStrings = function (words, left, right) {
  let count = 0;
  let vowelArr = ["a", "i", "e", "o", "u"];
  for (let i = left; i <= right; i++) {
    let str = words[i];
    if (vowelArr.includes(str[0]) && vowelArr.includes(str[str.length - 1])) {
      count++;
    }
  }
  return count;
};

// console.log(vowelStrings(["are", "amy", "u"], 0, 2));
console.log(vowelStrings(["hey","aeo","mu","ooo","artro"], 1, 4));

