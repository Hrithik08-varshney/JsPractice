const runningSum = (arr) => {
  let newArr = [];
  newArr.push(arr[0]);
  for (let elem = 0; elem < arr.length - 1; elem++) {
    newArr.push(newArr[elem] + arr[elem + 1]);
  }
  return newArr;
};

// console.log(runningSum([1, 2, 3, 4]));
console.log(runningSum([1, 1, 1, 1,1]));

