// Aug 9th
// 122. Best Time to Buy and Sell Stock II
// Array || DP || Greedy

/*
You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. 
You can only hold at most one share of the stock at any time. 
However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n)
var maxProfit = function(prices) {
    let profit = 0;
    let start = prices[0];
    let end = prices[0];
    for (let i = 1; i < prices.length; i++) {
        // if the price[i] < end
        // then we update the profit
        // reset the start and end to be today's price
        if (prices[i] < end) {
            profit += end - start;
            start = prices[i];
            end = prices[i];
        }
        // if price[i] >= end
        // then we are greedy, we hold and update the end
        else if (prices[i] >= end) {
            end = prices[i];
            // if this is the last day, we calculate the profit
            if (i == prices.length - 1) profit += end - start;
        }
    }
    return profit;
};