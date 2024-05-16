//Move zeroes

var moveZeroes = function (nums) {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== 0) {
      arr.push(nums[i]);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (arr.length > i) {
      nums[i] = arr[i];
    } else {
      nums[i] = 0;
    }
  }
   return nums;
};

// console.log(moveZeroes([0, 1, 0, 3, 12]));
console.log(moveZeroes([0]));

