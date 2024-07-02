const linearSearch = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) return i+1;
  }
  return -1;
};

console.log(linearSearch([4, 3, 12, 56, 7, 5, 43], 43));
