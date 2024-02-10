//fibonacii number

var fib = function (n) {
  if (n === 0) return 0;
  let prev = 0,
    next = 1;
  for (let i = 1; i < n; i++) {
    let sum = prev + next;
    prev = next;
    next = sum;
  }
  return next;
};

console.log(fib(3));
