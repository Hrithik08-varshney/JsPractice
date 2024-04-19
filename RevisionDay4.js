// Reverse String -->

var reverseString = function (s) {
  for (let i = 0; i < s.length / 2; i++) {
    let swapElem;
    swapElem = s[i];
    s[i] = s[s.length - 1 - i];
    s[s.length - 1 - i] = swapElem;
  }
  return s;
};

// console.log(reverseString(["h", "e", "l", "l", "o"]));
console.log(reverseString(["H","a","n","n","a","h"]));
