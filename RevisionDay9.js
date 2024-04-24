//Search Insert Position

var searchInsert = function (nums, target) {
  let index;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) {
      return i;
    } else if (i === 0 && target < nums[i]) {
      index = i;
    } else {
      if (i > 0 && target > nums[i - 1] && target < nums[i]) {
        index = i;
      }
    }
  }
  if (target > nums[nums.length - 1]) {
    return nums.length;
  }
  return index;
};

// console.log(searchInsert([1, 3, 5, 6], 5));
// console.log(searchInsert([1, 3, 5, 6], 2));
console.log(searchInsert([1, 3, 5, 6], 7));

