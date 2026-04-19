class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prefix = [];
        let suffix = new Array(nums.length);
        let ret = [];


        for(let i = 0; i < nums.length; i++){
            if(i == 0){
                prefix.push(1);
            }else{
                prefix.push(nums[i-1] * prefix[i-1]);
            }
        }

        for (let j = nums.length - 1; j >= 0; j--) {
            if (j === nums.length - 1) {
                suffix[j] = 1;
            } else {
                suffix[j] = nums[j + 1] * suffix[j + 1];
            }
        }

        for(let m = 0; m < nums.length; m++){
            ret.push(prefix[m] * suffix[m]);
        }

        return ret;

        
    }
}
