const add = (num1, num2) => {
  return num1 + num2;
};

const sub = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const calculator = (num1, num2, operator) => {
  return operator(num1, num2);
};

console.log(calculator(5, 6, add));
console.log(calculator(5, 6, sub));

