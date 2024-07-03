//normal linear search

const linearSearch = (arr, elem) => {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) return i + 1;
  }
  return -1;
};
//TC = O(n)
//SC = O(1)

console.log(linearSearch([4, 3, 12, 56, 7, 5, 43], 43));

//global linear search

const GlobalLinearSearch = (arr, elem) => {
  let indxArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === elem) indxArr.push(i);
  }
  if (indxArr.length) {
    return indxArr;
  }
  return -1;
};
//TC = O(n)
//SC = O(n)

console.log(GlobalLinearSearch([4, 3, 12, 56, 7, 5, 3], 3));
