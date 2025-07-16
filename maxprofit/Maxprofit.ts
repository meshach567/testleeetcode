function maxProfit(prices: number[]): number {
    if (prices.length === 0) {
        return 0;
    }

    let profit = 0;
    let buy = prices[0];

    for ( let j = 1; j < prices.length; j++) {
        if (prices[j] > buy) {
            profit = Math.max(profit, prices[j] - buy);
        } else {
            buy = prices[j];
        }
    }

    return profit;
};

console.log([7,1,5,3,6,4]);