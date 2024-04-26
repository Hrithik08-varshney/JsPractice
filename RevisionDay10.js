// Given a string, return the first recurring character in it, or null if there is no recurring character

const FirstRec = (str) => {
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      return str[i];
    }
  }
  return null;
};

// console.log(FirstRec("acbbac"));
console.log(FirstRec("abcdef"));
