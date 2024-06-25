const callBackHell = () => {
  setTimeout(() => {
    console.log("SetTimeout 1");
    setTimeout(() => {
      console.log("SetTimeout 2");
      setTimeout(() => {
        console.log("SetTimeout 3");
        setTimeout(() => {
          console.log("SetTimeout 4");
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
};

callBackHell();
