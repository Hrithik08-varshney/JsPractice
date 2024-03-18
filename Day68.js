//Goal Parser Implementation

//--> brute force approach

var interpret = function (command) {
  let str = "";
  for (let i = 0; i < command.length; i++) {
    if (command[i] === "G") str += command[i];
    else if (
      command[i] === "(" &&
      command[i + 1] === "a" &&
      command[i + 2] === "l" &&
      command[i + 3] === ")"
    ) {
      str += "al";
      i += 3;
    } else if (command[i] === "(" && command[i + 1] === ")") {
      str += "o";
      i += 1;
    }
  }
  return str;
};

// console.log(interpret("(al)G(al)()()G"));
console.log(interpret("G()()()()(al)"));

