class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        const set = new Set(nums);
        let longest = 0;

        for (let i = 0; i < nums.length; i++) {
            const num = nums[i];

            // Only start counting if this is the beginning of a sequence
            if (!set.has(num - 1)) {
                let currentNum = num;
                let currentLength = 1;

                // Keep checking for the next consecutive number
                while (set.has(currentNum + 1)) {
                    currentNum++;
                    currentLength++;
                }

                longest = Math.max(longest, currentLength);
            }
        }

        return longest;
    }
}