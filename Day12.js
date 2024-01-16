const reoccuring = (str) => {
  let indexObj = {};
  let countObj = {};
  let repeatCheck = false;
  let val = null;
  for (let i = 0; i < str.length; i++) {
    if (Object.keys(indexObj).includes(str[i])) {
      indexObj[str[i]] = i - indexObj[str[i]];
      countObj[str[i]]++;
      repeatCheck = true;
    } else {
      countObj[str[i]] = 1;
      indexObj[str[i]] = i;
    }
  }
  if (!repeatCheck) {
    return val;
  }
  let highest = Number.MAX_VALUE;
  for (let [key, value] of Object.entries(indexObj)) {
    if (value < highest && countObj[key] > 1) {
      highest = value;
      val = key;
    }
  }
  return val;
};

console.log(reoccuring("acbbac"));
