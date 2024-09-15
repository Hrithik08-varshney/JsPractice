const asyncFunction = async () => {
  const res = await fetch("xyz");
  res
    .then((data) => {
      console.log(data, "data");
    })
    .catch((err) => {
      console.log(err, "err");
    });
};

asyncFunction();
