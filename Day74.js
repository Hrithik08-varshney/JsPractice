//Find first palindromic string in the array

//--> brute force approach

var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    let elem = words[i];
    let flag = false;
    let len = elem.length - 1;
    for (let j = 0; j < elem.length / 2; j++, len--) {
      if (elem[j] !== elem[len]) {
        flag = true;
        break;
      }
    }
    if (!flag) {
      return elem;
    }
  }
  return "";
};

// console.log(firstPalindrome(["abc", "car", "ada", "racecar", "cool"]));
// console.log(firstPalindrome(["notapalindrome","racecar"]));
console.log(firstPalindrome(["def","ghi"]));