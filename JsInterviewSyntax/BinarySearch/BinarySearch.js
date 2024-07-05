const BinarySearch = (arr, elem) => {
  let start = 0;
  let end = arr.length - 1;
  while (start <= end) {
    let middle = Math.floor((start + end) / 2);
    if (arr[middle] === elem) {
      return middle;
    } else if (arr[middle] < elem) {
      start = middle + 1;
    } else {
      end = middle - 1;
    }
  }
  return -1;
};

console.log(BinarySearch([-1, 0, 3, 5, 9, 12], 9));
