class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0;
        let l = 0;
        let r = 1;

        for (let i = 0; i < prices.length; i++) {
            if (prices[l] < prices[r]) {
                let profit = prices[r] - prices[l];
                maxProfit = Math.max(profit, maxProfit);
                r++;
            } else {
                l = r;
                r++;
            }
        }

        return maxProfit;
    }
}
