// let count = true;
let count = false;
let myPromise = new Promise(function (resolve, reject) {
  if (count) {
    resolve("There is a count value");
  } else {
    reject("There is no value");
  }
});

myPromise
  .then((valueThrownFromResolve) => {
    console.log(valueThrownFromResolve);
  })
  .then(() => {
    console.log("We can embbed multiple functions");
  })
  .catch((err) => {
    console.log(err);
  });
