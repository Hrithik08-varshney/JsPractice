//brute force approach -------------------------------------->

// const fibonacii = (n) => {
//   let n1 = 0,
//     n2 = 1;
//   if (n <= 1) {
//     return n;
//   } else {
//     let sum = 0;
//     for (let i = 1; i < n; i++) {
//       sum = n1 + n2;
//       n1 = n2;
//       n2 = sum;
//     }
//     return sum;
//   }
// };

//recursion -------------------------------------->
const fibonacii = (n) => {
  if (n <= 1) return n;

  return fibonacii(n - 1) + fibonacii(n - 2);
};

console.log(fibonacii(10));
