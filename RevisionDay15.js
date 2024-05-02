//count the number of consistent strings

var countConsistentStrings = function (allowed, words) {
  let count = 0;
  for (let i = 0; i < words.length; i++) {
    let flag = 0;
    let str = words[i];
    for (let j = 0; j < str.length; j++) {
      if (!allowed.includes(str[j])) {
        flag = 1;
        break;
      }
    }
    if (!flag) {
      count++;
    }
  }
  return count;
};

// console.log(countConsistentStrings("ab", ["ad", "bd", "aaab", "baa", "badab"]));
console.log(countConsistentStrings("abc", ["a","b","c","ab","ac","bc","abc"]));

