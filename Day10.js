// let haystack = "sadbutsad";
// let needle = "sad";

let haystack = "leetcode"
let needle = "leeto";
let index=-1;
for (let i = 0; i < haystack.length; i++) {
  let k,
    flag = 0;
  if (needle[0] !== haystack[i]) {
    continue;
  }
  k = i + 1;
  for (let j = 1; j < needle.length; j++, k++) {
    if (needle[j] !== haystack[k]) {
      flag = 1;
    }
  }
  if (!flag) {
    index = i;
    break;
  }
}

console.log(index, "index");
