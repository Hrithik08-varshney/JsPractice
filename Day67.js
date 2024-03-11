//Jewels and Stones

//---> brute force

var numJewelsInStones = function(jewels, stones) {
    let count  = 0;
    let jewelsCount = {};
    for(let i=0;i<stones.length;i++){
        if(Object.keys(jewelsCount).includes(stones[i])){
            jewelsCount[stones[i]]+=1;
        }
        else {
        jewelsCount[stones[i]]=1;
        }
    } 
    for(let i=0;i<jewels.length;i++){
        if(!isNaN(jewelsCount[jewels[i]]))
        count+=jewelsCount[jewels[i]];
    }
    return count;
};

// console.log(numJewelsInStones("aA","aAAbbbb"));
console.log(numJewelsInStones("z","ZZ"));
