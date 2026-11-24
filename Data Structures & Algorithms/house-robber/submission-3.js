class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    rob(nums) {
        // idea: we can either skip the current house or rob it
        // if we skip it, we take whatever was the accumulation of
        // all the houses we've robbed so far until the last house. (i-1)
        // if we rob it, we take it's value and i-2's value

        let cur = 0;
        let prev = 0;
        let prev2 = 0;

        for(let num of nums){
            // on skip, prev2 and prev turn out to be the same value
            cur = Math.max(prev, num + prev2);
            prev2 = prev;
            prev = cur;
        }
        return cur;
    }
}
