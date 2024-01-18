const getReversedNum = (val) => {
  if (!parseInt(val)) return 1;
  return 0;
};

const minFlips = (str) => {
  let newStr = `${str[0]}${str[1]}${str[2]}`;
  if (str[0] === str[2] && str[1] === str[0]) {
    newStr = `${str[0]}${getReversedNum(str[1])}${str[1]}`;
  } else if (str[0] !== str[2]) {
    if (str[0] === str[1]) {
      newStr = `${getReversedNum(str[0])}${str[1]}${str[2]}`;
    } else {
      newStr = `${str[0]}${str[1]}${getReversedNum(str[2])}`;
    }
  }
  let prevElem;
  for (let elem = 2; elem < str.length - 1; elem++) {
    prevElem = newStr[elem];
    newStr += getReversedNum(prevElem);
  }

  let count = 0;
  for (let elem = 0; elem < str.length; elem++) {
    if (str[elem] !== newStr[elem]) count++;
  }
  return count;
};

// console.log(minFlips("0001010111"));
console.log(minFlips("001"));

