//Given a sequence of strings, the task is to find out the second
//most repeated (or frequent) string in the given sequence

const secondMostOcuuring = (arr) => {
  let frequencyObj = {};

  for (let i = 0; i < arr.length; i++) {
    if (!Object.keys(frequencyObj).includes(arr[i])) {
      frequencyObj[arr[i]] = 1;
    } else {
      frequencyObj[arr[i]] += 1;
    }
  }

  let newArr = Object.values(frequencyObj);
  let secondHighestValue = newArr[newArr.length-2];
  let secondHighestKey;

  for(let [key,value] of Object.entries(frequencyObj)){
    if(value === secondHighestValue){
        secondHighestKey = key;
    }
  }
  return secondHighestKey;
};

// console.log(secondMostOcuuring(["aaa", "bbb", "ccc", "bbb", "aaa", "aaa"]));
console.log(secondMostOcuuring(["geek", "for", "geek", "for", "geek", "aaa"]));

