class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        let r = [];
        nums = nums.sort((a, b) => a - b);
        for(let i = 0; i < nums.length; i++) {
            if(i > 0 && nums[i] === nums[i - 1]) continue;
            let j = i + 1;
            let k = nums.length - 1;
            let target = -nums[i];
            while(j < k) {
                if(nums[j] + nums[k] < target) j++;
                else if(nums[j] + nums[k] > target) k--;
                else {
                    r.push([nums[i], nums[j], nums[k]]);
                    while(nums[j] === nums[j + 1]) j++;
                    while(nums[k] === nums[k - 1]) k--;
                    j++;
                    k--;
                }
            }
        }
        return r;
    }
}
