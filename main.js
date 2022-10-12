// 12.10.2022 Task
// Best time to buy and Sell stock
// You are given array prices where prices[i] is the price of a given stock on the i-th day.
// You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.
// RETURN THE MAXIMUM PROFIT YOU CAN ACHIEVE FROM THIS TRANSACTION. If you cannot achieve any profit, return 0.

// Example 1: Input: prices = [7, 1, 5, 3, 6, 4]
// Output: 5

prices = [7, 1, 5, 3, 6, 4];

function maxProfit(prices) {
    // Here we set maxProfit to zero which returns zero when no profit is made.
    let profit = 0;

    // We compare the price of the next element in the array with the current. i is our index and j is our pointer that keeps iterating.
    for (let i = 0; i < prices.length - 1; i++) {
        // We use for loops to find the maximum profit. 
        for (let j = i + 1; j < prices.length; j++) {
            const currentProfit = prices[j] - prices[i];

            if (currentProfit > profit) {
                profit = currentProfit;
            }
        }
    }

    return profit;
}

// This solution will have complexity of O(n^2) because we use for loop twice.

// Example2: prices = [7, 6, 4, 3, 2, 1]

prices2 = [7, 6, 4, 3, 2, 1];

console.log(maxProfit(prices)); // Output: 5;
console.log(maxProfit(prices2)); // Output: 0;
