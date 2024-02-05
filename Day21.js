//minimum and maximum in an array
//brute force approach
const minMax = (arr) => {
    let newArr=arr.sort(function(a, b){return a-b});
    console.log(arr);
    return [newArr[0],newArr[newArr.length-1]]
}

let returnArr = minMax([22,31,3,6,4,5,23])
console.log(`Min = ${returnArr[0]}`);
console.log(`Max = ${returnArr[returnArr.length-1]}`);
