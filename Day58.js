//Richest Customer Wealth

//brute force approach without time limit
var maximumWealth = function(accounts) {
    let wealthArr=[];
    for(let i=0;i<accounts.length;i++){
        let sum=0;
        let newArr = accounts[i];
        for(let j=0;j<newArr.length;j++){
            sum+=newArr[j];
        }
        wealthArr.push(sum);
    }
    let highestNum = 0;
    for(let i=0;i<wealthArr.length;i++){
        if(highestNum<wealthArr[i])
        highestNum=wealthArr[i];
    }
    return highestNum;
};

console.log(maximumWealth([[1,5],[7,3],[3,5]]))