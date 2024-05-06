//plus one

var plusOne = function (digits) {
  let str = "";
  for (let i = 0; i < digits.length; i++) {
    str += digits[i];
  }
  console.log(str)
  let num = BigInt(str);
  num += BigInt(1);
  str = num.toString();
  let newArr = [];
  for (let i = 0; i < str.length; i++) {
    newArr.push(parseInt(str[i]));
  }
  return newArr;
};

// console.log(plusOne([1, 2, 3]));
// console.log(plusOne([4,3,2,1]));
// console.log(plusOne([9]));
console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]))

