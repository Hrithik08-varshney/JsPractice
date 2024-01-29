var findDuplicate = function(nums) {
    let obj={};
    for(let elem=0;elem<nums.length;elem++){
        if(Object.keys(obj).includes(nums[elem].toString()))
        return nums[elem];
        obj[nums[elem]]=1;
    }
};

console.log(findDuplicate([1,3,4,2,2]));
console.log(findDuplicate([3,1,3,4,2]));
