// Build Array from Permutation

var buildArray = function(nums) {
    let newArr = [];
    for(let i=0;i<nums.length;i++){
      newArr.push(nums[nums[i]])
    }
    return newArr;
};

console.log(buildArray([0,2,1,5,3,4]))