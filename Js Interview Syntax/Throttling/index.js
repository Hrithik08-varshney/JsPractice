// Throttling-----------------------------------------------

window.addEventListener("resize", betterFunction); //function hitting on window resize

const expensiveFunction = (arguments) => {
  console.log("Expensive something...........");
};

const throttle = (func, limit) => {
  //High order function
  let flag = true; //for closure

  return function () {
    let context = this,
      args = arguments;
    if (flag) {
      func.apply(context, args);
      flag = false; //making call false until the limit
      setTimeout(()=>{   //for a certain time the function should not be called according to above condition
        flag = true;
      },limit)
    }
  };
};

const betterFunction = throttle(expensiveFunction, 100);
