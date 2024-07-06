var findKthPositive = function (arr, k) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] <= k + count) {
      count++;
    }
  }
  return k + count;
};

console.log(findKthPositive([2, 3, 4, 7, 11], 5));
