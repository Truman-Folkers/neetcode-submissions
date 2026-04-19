class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let map = new Map();

        for (let num of nums) {
            map.set(num, (map.get(num) || 0) + 1);
        }

        return Array.from(map.entries())
    .sort((a, b) => b[1] - a[1])   // sort by frequency (descending)
    .slice(0, k)                   // take top k
    .map(entry => entry[0]);       // return just the numbers

    }
}
