// word pattern

var wordPattern = function (pattern, s) {
    if(pattern.length > 1 && s.length > 1 && !/\s/g.test(s)){
        return false
    }
  const getKey = (val, object) => {
    for (let [key, value] of Object.entries(object)) {
      if (value === val) {
        console.log(key);
        return key;
      }
    }
  };
  let splitArr = s.split(" ");
  let obj = {};
  for (let i = 0; i < splitArr.length; i++) {
    if (
      (Object.keys(obj).includes(pattern[i]) &&
        obj[pattern[i]] !== splitArr[i]) ||
      (Object.values(obj).includes(splitArr[i]) &&
        getKey(splitArr[i], obj) !== pattern[i])
    ) {
      return false;
    } else {
      obj[pattern[i]] = splitArr[i];
    }
  }
  return true;
};

// console.log(wordPattern("abba", "dog dog dog dog"));
// console.log(wordPattern("abba", "dog cat cat dog"));
// console.log(wordPattern("abba", "dog cat cat fish"));
console.log(wordPattern("a", "a"));
// console.log(wordPattern("word", "word"));
// console.log(wordPattern("he", "unit"));
