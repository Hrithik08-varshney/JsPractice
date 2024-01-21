const getSumOfNumber = (arr, k) => {
  for (let elem = 0; elem < arr.length; elem++) {
    if (arr[elem] > k) {
      continue;
    }
    for (let nextElem = elem + 1; nextElem < arr.length; nextElem++) {
      if (arr[nextElem] > k) {
        continue;
      }
      for (let thirdElem = nextElem + 1; thirdElem < arr.length; thirdElem++) {
        if (arr[thirdElem] > k) {
          continue;
        } else if (arr[elem] + arr[nextElem] + arr[thirdElem] === k) {
          return "Yes";
        }
      }
    }
  }
  return "No";
};

console.log(getSumOfNumber([20, 303, 3, 4, 25], 61));
