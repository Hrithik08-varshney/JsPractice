/* exceeded the time limit for a test case */
// var findDuplicate = function(nums) {
//     let obj={};
//     for(let elem=0;elem<nums.length;elem++){
//         if(Object.keys(obj).includes(nums[elem].toString()))
//         return nums[elem];
//         obj[nums[elem]]=1;
//     }
// };

// console.log(findDuplicate([1,3,4,2,2]));
// console.log(findDuplicate([3,1,3,4,2]));

/* time complexity */

// var findDuplicate = function(nums) {
//     let arr=[];
    // for(let elem=0;elem<nums.length;elem++){
    //     if(arr.includes(nums[elem]))
    //     return nums[elem];
    //     arr.push(nums[elem]);
    // }
// };

// console.log(findDuplicate([3,1,3,4,2]));
// console.log(findDuplicate([1,3,4,2,2]));

// var findDuplicate = function(nums) {
//     return Number.MAX_VALUE;
//     let arr = new Array();
//     for(let elem=0;elem<nums.length;elem++){
//          arr[nums[elem]]++;
//          if(arr[nums[elem]]>1)
//          return arr[nums[elem]];
//     }
// };

// console.log(findDuplicate([3,1,3,4,2]));
// console.log(findDuplicate([1,3,4,2,2]));

var findDuplicate = function(nums) {
    let arr = nums.sort();
    for(let i=0;i<arr.length-1;i++){
        if(arr[i]===arr[i+1]){
            return arr[i];
        }
    }
};

console.log(findDuplicate([3,1,3,4,2]));
console.log(findDuplicate([1,3,4,2,2]));

