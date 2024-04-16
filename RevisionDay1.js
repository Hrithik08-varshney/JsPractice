//valid palindrome

var isPalindrome = function (s) {
  let newStr = s.replace(/[^a-zA-Z0-9]/g, "").toLowerCase().trim();
  for (let i = 0; i < newStr.length / 2; i++) {
    if (newStr[i] !== newStr[newStr.length - i - 1]) {
      return false;
    }
  }
  return true;
};

// console.log(isPalindrome("A man, a plan, a canal: Panama"));
// console.log(isPalindrome("A man, a plan, a canal: Panama"));
console.log(isPalindrome(" "));

