// var findKthPositive = function (arr, k) {
//   let count = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] <= k + count) {
//       count++;
//     }
//   }
//   return k + count;
// };

//another approach------------------->

var findKthPositive = function (arr, k) {
  let newArr = [];
  for (let num = 1; newArr.length < k; num++) {
    if (!arr.includes(num)) {
      newArr.push(num);
    }
  }
  return newArr[k - 1];
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
