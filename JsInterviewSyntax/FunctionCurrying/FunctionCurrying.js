function sum(num1) {
  return function (num2) {
    return function (num3) {
      console.log(num1 + num2 + num3);
    };
  };
}

sum(1)(2)(3);
