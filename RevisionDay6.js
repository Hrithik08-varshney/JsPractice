//add strings 

var addStrings = function(num1, num2) {
    let intNum1 = BigInt(num1);
    let intNum2 = BigInt(num2);
    let sum = BigInt(intNum1+intNum2);
    return sum.toString();
};

console.log(addStrings("11","123"));