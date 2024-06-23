/*  Debouncing -----------------------------------------------------------------------------*/

const getData = () => {
  //api function
  console.log("API hit....");
};
const debounce = function (fn, delay) {
  let timer;
  return function () {
    let context = this; //The context variable is set to this inside the returned function.
    //This ensures that when fn is invoked, it is called with the correct context (this value).

    args = arguments; //Inside the setTimeout callback function,
    //arguments refers to the arguments passed to the debounced function, not the arguments of the setTimeout function itself.

    clearTimeout(timer); //clearing the previous function

    timer = setTimeout(() => {
      fn.apply(context, arguments); //function will work after 300 milliseconds
    }, delay);
  };
};
const delayFunction = debounce(getData, 300); //will hit on key press

//The use of arguments inside an arrow function (() => { ... }) 
//can sometimes lead to unexpected behavior because arrow 
//functions do not have their own arguments object; they inherit it from the enclosing non-arrow function. 
//In this case, arguments inside setTimeout(() => { ... }) refers to the arguments of the debounce function,
// not of the setTimeout function itself.