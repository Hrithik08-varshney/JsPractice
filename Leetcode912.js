//Sort an Array

var sortArray = function (nums) {
  let n = nums.length;
  for (let i = 0; i < n - 1; i++) {
    let minIndex = i;
    for (j = i + 1; j < n; j++) {
      if (nums[j] < nums[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      [nums[i], nums[minIndex]] = [nums[minIndex], nums[i]];
    }
  }
  return nums
};

console.log(sortArray([5, 2, 3, 1]));
