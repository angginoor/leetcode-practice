/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let total = 0
    for(let i = 0; i < prices.length - 1; i++) {
        if(prices[i] < prices[i + 1]) {
            let profit = prices[i+1] - prices[i]
            total += profit
        }
    }
    
    return total
};