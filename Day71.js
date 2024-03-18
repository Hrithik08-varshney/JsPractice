//Check if two strings arrays are equivalent

//--> brute force approach

const getSingleString = (word) => {
  let str = "";
  for (let i = 0; i < word.length; i++) {
    str+=word[i];
  }
  return str;
};

var arrayStringsAreEqual = function (word1, word2) {
  let str1 = getSingleString(word1);
  let str2 = getSingleString(word2);
  if(str1.length !==str2.length)
  return false;
  for(let i=0;i<str1.length;i++){
    if(str1[i]!==str2[i])
       return false;
  }
  return true;
};

// console.log(arrayStringsAreEqual(["ab", "c"], ["a", "bc"]));
// console.log(arrayStringsAreEqual(["abc", "d", "defg"], ["abcddefg"]));
console.log(arrayStringsAreEqual(["a", "cb"] , ["ab", "c"]));


