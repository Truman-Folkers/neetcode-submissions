class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
const seen = new Set();
        let num = 5;

        for(let i = 0; i < nums.length; i++){
            num = nums[i]
            if (seen.has(num)) {
                return true;
            } else {
                seen.add(num);
            }
        }

        
        return false;
}
}