let x = 1230321;
// let x=-121;
// let x=10;
let str = x.toString();
let last = str.length - 1;
let flag = 0;
for (let i = 0; i <= str.length / 2 - 1; i++, last--) {
  if (str[i] !== str[last]) {
    flag = 1;
    break;
  }
}
if (!flag) console.log(true);
else console.log(false);
