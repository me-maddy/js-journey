// ********** First approach **********
// const maxProfit = function (prices) {
//   let max = 0;
//   for (let i = 0; i < prices.length - 1; i++) {
//     for (let j = i + 1; j < prices.length; j++) {
//       let result = prices[j] - prices[i];
//       if (result > max) {
//         max = result;
//       }
//     }
//   }
//   return max;
// };

const maxProfit = function (prices) {
  let profit = 0;
  let miniStockPrice = prices[0];
  for (let i = 1; i < prices.length; i++) {
    if (miniStockPrice > prices[i]) {
      miniStockPrice = prices[i];
    }

    profit = Math.max(profit, prices[i] - miniStockPrice);
  }
  return profit;
};

// const prices = [7, 1, 5, 3, 6, 4];
const prices = [7, 6, 4, 3, 1];
console.log(maxProfit(prices));
