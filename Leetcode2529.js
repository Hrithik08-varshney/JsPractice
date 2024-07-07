var maximumCount = function (nums) {
  let countPositive = 0;
  let countNegative = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) {
      countPositive++;
    } else if (nums[i] < 0) {
      countNegative++;
    }
  }

  if (countPositive >= countNegative) return countPositive;
  return countNegative; 
};

console.log(maximumCount([-2, -1, -1, 1, 2, 3]));
