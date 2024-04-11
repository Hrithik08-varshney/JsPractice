//Remove Letter To Equalize Frequency

var equalFrequency = function (word) {
  let obj = {};
  for (let i = 0; i < word.length; i++) {
    if (!Object.keys(obj).includes(word[i])) {
      obj[word[i]] = 1;
    } else {
      obj[word[i]]++;
    }
  }
  let flag = false;
  for (let key in obj) {
    let newVal = obj[key] - 1;
    let newObj = { ...obj, key: newVal };
    let frequencyArr = Object.values(newObj);
    let unique = false;
    for (let i = 1; i < frequencyArr.length; i++) {
      if (frequencyArr[0] !== frequencyArr[i]) {
        unique = true;
      }
    }
    if (unique) continue;
  }
  if (!flag) return true;
  return false;
};

// console.log(equalFrequency("abcc"));
console.log(equalFrequency("aazz"));
// console.log(equalFrequency("cccaa"));
// console.log(equalFrequency("abbcc"));
