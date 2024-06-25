const func2 = () => {
   setTimeout(() => {
    console.log("Function 2 is called");
  }, 2000); //3
};

const func1 = () => {
  console.log("Function 1 is called"); // 1
   func2();
  console.log("Function 1 is called again"); //2
};

func1();
