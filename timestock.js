// Problem:
// Given an array where the ith element is the price of a given stock on the ith day, return the maximum profit you can achieve.

// Input: prices = [7,1,5,3,6,4]
// Output: 5

function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (const price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}

console.log(maxProfit([7, 1, 5, 3, 6, 4])); // Output: 5