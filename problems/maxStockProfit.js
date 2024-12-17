var maxProfit = function (prices) {
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            if (prices[j] > prices[i] && prices[j] - prices[i] > maxProfit)
                maxProfit = prices[j] - prices[i];
        }
    }

    return maxProfit;
};

var maxProfitOptimal = function (prices) {
    let minPrice = Infinity;
    let maxProfit = 0;

    for (let i = 0; i < prices.length; i++) {
        minPrice = Math.min(minPrice, prices[i]);
        maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    }

    return maxProfit;
};

console.log(maxProfitOptimal([7, 1, 5, 3, 6, 4]));
console.log(maxProfitOptimal([7, 6, 4, 3, 1]));

