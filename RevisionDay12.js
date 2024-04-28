//length of last word

var lengthOfLastWord = function (s) {
    let count=0;
    let str = s.trim();
  for (let i = str.length - 1; i >=0; i--) {
    if(str[i] === " "){
        return count;
    }
    count++;
  }
  return count;
};

// console.log(lengthofLastWord("luffy is still joyboy"))
// console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("a"))
// console.log(lengthOfLastWord("Hello World"));
