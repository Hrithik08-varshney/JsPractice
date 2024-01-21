var removeDuplicates = function (nums) {
  let count = 0;
  let newArr = [];
  for (let elem = 0; elem < nums.length; elem++) {
    if (nums[elem] === nums[elem + 1]) {
      count++;
    }
    if (newArr.includes(nums[elem])) continue;
    newArr.push(nums[elem]);
  }
  nums = newArr;
  return nums;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
