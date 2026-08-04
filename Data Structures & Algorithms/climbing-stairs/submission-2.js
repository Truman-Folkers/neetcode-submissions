class Solution {
    /**
     * @param {number} n
     * @return {number}
     */
    climbStairs(n) {
        if (n < 0) return 0;
        if (n <= 1) return 1;

        let prev2 = 1; // Ways to reach step 0
        let prev1 = 1; // Ways to reach step 1

        for (let i = 2; i <= n; i++) {
            let current = prev1 + prev2;
            prev2 = prev1;
            prev1 = current;
        }

        return prev1;
    }
}
