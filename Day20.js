//Brute force approach

var sortColors = function (nums) {
  let arrCount = [0, 0, 0];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      arrCount[0]++;
    } else if (nums[i] === 1) {
      arrCount[1]++;
    } else if (nums[i] === 2) {
      arrCount[2]++;
    }
  }
  let newArr = [];
  for (let i = 0; i < arrCount.length; i++) {
    for (let j = 0; j < arrCount[i]; j++) {
        newArr.push(i);
    }
  }
  return newArr;
};

console.log(sortColors([2, 0, 2, 1, 1, 0]));
