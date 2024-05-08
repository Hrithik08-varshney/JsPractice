// Majority Element

var majorityElement = function (nums) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    if (Object.keys(obj).includes(nums[i].toString())) {
      obj[nums[i]] += 1;
    } else {
      obj[nums[i]] = 1;
    }
  }

  for(let [key,value] of Object.entries(obj)){
    if(value>nums.length/2){
        return key
    }
  }
};

// console.log(majorityElement([2, 2, 1, 1, 1, 2, 2]));
console.log(majorityElement([3,2,3]));

