//kids with the greatest number of candies...

//--> brute force approach

var kidsWithCandies = function(candies, extraCandies) {
    let boolArr = [];
    for(let i=0;i<candies.length;i++){
        let highestCheck = true;
        for(let j=0;j<candies.length;j++){
            if(i === j){
                continue;
            }
            if(candies[i]+extraCandies < candies[j]){
                highestCheck = false;
                break;
            }
        } 
        boolArr.push(highestCheck);
    }
    return boolArr;
};

// console.log(kidsWithCandies([2,3,5,1,3],3));
// console.log(kidsWithCandies([4,2,1,1,2],1));
console.log(kidsWithCandies([12,1,12],10));
