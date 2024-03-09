// remove one element to make the array strictly increasing

//--> brute force approach

var canBeIncreasing = function (nums) {
  let removed = false;

  for (let i = 1; i < nums.length; ++i)
    if (nums[i - 1] >= nums[i]) {
      if (removed)
        return false;
      removed = true;
      if (i > 1 && nums[i - 2] >= nums[i])
        nums[i] = nums[i - 1];
    }

  return true;
};

// console.log(canBeIncreasing([1, 1, 1]));
// console.log(canBeIncreasing([2, 3, 1, 2]));
// console.log(canBeIncreasing([1,2,3]));
console.log(canBeIncreasing([1, 2, 10, 5, 7]));
