// You are given an array prices where prices[i] is the price of a given stock on the ith day.

// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

// Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.


// This one was Easy rated but stumped me. The obvious method of just running the double for loop for O(n^2) actually timed out on leetcode.
// New solution just uses one for loop to get the time complexity down to O(n) instead of O(n^2). Will keep this solution in mind
// for problems where the order of the indices matters and I can't just hash map the thing


var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;

    for (let i = 1; i < prices.length; i++) {
        let profit = prices[i] - minPrice;
        if (profit > maxProfit) maxProfit = profit;
        if (prices[i] < minPrice) minPrice = prices[i];
    }

    return maxProfit;
};
