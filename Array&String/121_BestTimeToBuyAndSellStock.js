// Aug 9th
// 121. Best Time to Buy and Sell Stock
// Array

/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.

*/

/**
 * @param {number[]} prices
 * @return {number}
 */

// O(n) solution
// While iterating the array,
// update the minPrice and the maxProfit
var maxProfit = function(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let i = 0; i < prices.length; i++) {
        if (prices[i] < minPrice) minPrice = prices[i];
        else if (prices[i] - minPrice > maxProfit) maxProfit = prices[i] - minPrice;
    }
    return maxProfit;
};


// Brute Force
// TLE
// Calculate the profit for each element
// store the maximum profit
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        let start = prices[i];
        let profit = 0;
        for (let j = i+1; j < prices.length; j++) {
            profit = prices[j] - start;
            if (profit > maxProfit) maxProfit = profit;
        }
    }
    return maxProfit;
};