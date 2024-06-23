//Call();

let name1 = {
  firstName: "Hrithik",
  lastname: "Varshney",
  funcCall: function (hometown, state) {
    console.log(
      this.firstName + " " + this.lastname + " from " + hometown + ", " + state
    );
  },
};
let newFunction = function () {
  console.log(this.firstName);
};

newFunction.call(name1);
name1.funcCall("delhi", "new delhi");

let name2 = {
  firstName: "Function",
  lastname: "Invoked",
};

name1.funcCall.call(name2, "up", "balliya");

//apply()
name1.funcCall.apply(name2, ["up", "balliya"]);

//bind()
let bindFunction = newFunction.bind(name2);
console.log(bindFunction);
bindFunction();
