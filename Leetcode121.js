//Best Time to buy and sell stock
//brute force approach ------------------------------------->
var maxProfit = function (prices) {
  let maxProfitVal = 0;
  for (let i = 0; i < prices.length; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let calc = prices[j] - prices[i];
      if (calc > maxProfitVal) {
        maxProfitVal = calc;
      }
    }
  }
  return maxProfitVal;
};

// console.log(maxProfit([7, 1, 5, 3, 6, 4]));
console.log(maxProfit([7, 6, 4, 3, 1]));

const maxProfitGreedy = (prices) => {
  let minStockPrice = prices[0];
  let profit = 0;

  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < minStockPrice) {
      minStockPrice = prices[i];
    }
    profit = Math.max(profit, prices[i] - minStockPrice);
  }
  return profit;
};

console.log(maxProfitGreedy([7, 1, 5, 3, 6, 4]));
