//Final Value of Variable After Performing Operations

var finalValueAfterOperations = function (operations) {
  let x = 0;

  operations.forEach((elem) => {
    switch (elem) {
      case "X++":
      case "++X":
        x += 1;
        break;
      case "X--":
      case "--X":
        x -= 1;
        break;
    }
  });
  return x;
};

console.log(finalValueAfterOperations(["--X", "X++", "X++"]));
