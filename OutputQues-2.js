const a = "12345"; //01:23:45
// const b="1234" //00:12:34

const recursiveFunc = (value) => {
  if (value.length === 6) {
    return value;
  }
  value = "0" + value;
  return recursiveFunc(value);
};

let newVal = recursiveFunc("1234");
let newStr = "";
for (let i = 0; i < newVal.length; i++) {
  if (i !== 0 && i % 2 === 0) {
    newStr += ":";
  }
  newStr += newVal[i];
}

console.log(newStr);
