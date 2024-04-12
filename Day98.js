//find words containing characters

var findWordsContaining = function (words, x) {
  let indexArr = [];
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    for (let j = 0; j < word.length; j++) {
      if (word[j] === x) {
        indexArr.push(i);
        break;
      }
    }
  }
  return indexArr;
};

// console.log(findWordsContaining(["leet", "code"], "e"));
console.log(findWordsContaining(["abc","bcd","aaaa","cbc"], "a"));

