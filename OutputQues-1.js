const a = "abcdef";
const b = "123456";

let newStr = "";
let check = 1;
let initialVal = 0;
for (let i = 1; i <=a.length; ) {
  for (let j = initialVal; j < i; j++) {
    newStr += b[j];
  }
  for (let j = initialVal; j < i; j++) {
    newStr += a[j];
  }
  initialVal = i;
  check++;
  i += check;
}

console.log(newStr)