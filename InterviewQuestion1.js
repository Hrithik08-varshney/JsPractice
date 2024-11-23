//Find the first non repeating vowel from the string

let string = "Iliveinbangalore";

let vowel = ['a','i','e','o','u'];
let existArr=[];

for(let i=0;i<string.length;i++){
     if(existArr.includes(string[i].toLowerCase()) || !vowel.includes(string[i])){
       continue;
     }
  let flag=0;
  for(let j=i+1;j<string.length;j++){
    if(string[i].toLowerCase() === string[j].toLowerCase()){
      existArr.push(string[i]);
      flag=1;
      break;
    }
  }
  if(!flag){
    console.log(string[i]);
    break;
  }
}