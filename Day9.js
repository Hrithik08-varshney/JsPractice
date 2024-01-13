let n = 6;
let arr = ["aaa","bbb","ccc","bbb","aaa","aaa","eee"];
let obj = {};
for(let i=0;i<arr.length;i++){
  if(Object.keys(obj).includes(arr[i]))
  continue;
   obj[arr[i]] = 0;
}
for(let i=0;i<arr.length;i++){
  let count = 1;
  if(obj[arr[i]]!==0){
    continue;
  }
  for(let j=i+1;j<arr.length;j++){
   if(arr[i]===arr[j]){
    count++;
   }
  }
  obj[arr[i]] = count;
}

let valuesArr = Object.values(obj).sort();
let secondHighest = valuesArr[valuesArr.length-2];

for(const [key,value] of Object.entries(obj)){
    if(value === secondHighest)
    console.log(key);
}