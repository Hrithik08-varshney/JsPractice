// Number of 1 Bits

var hammingWeight = function (n) {
  //inbuilt approach TL exceeds------>
  // let binary = (n >>> 0).toString(2);
  // let count = 0;
  //   for(let i=0;i<binary;i++){
  //       if(binary[i] === "1")
  //           count++
  //   }
  //   return count;

  //my approach TL not exceeds--------------->
  let str = "";
  let remainder;
  let quotient;
  while (n >= 1) {
    quotient = Math.trunc(n / 2);
    remainder = n % 2;
    str += remainder;
    n = quotient;
  }
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === "1") count++;
  }
  return count;
};

// console.log(hammingWeight(11))
// console.log(hammingWeight(128))
console.log(hammingWeight(2147483645));
