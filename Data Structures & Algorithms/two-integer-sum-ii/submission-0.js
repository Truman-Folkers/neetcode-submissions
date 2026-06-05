class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let end = numbers[numbers.length - 1];
        let start = numbers[0];
        while(1){
            if(end + start > target){
                end = numbers[numbers.indexOf(end) - 1];
            }else if(end + start < target){
                start = numbers[numbers.indexOf(start) + 1];
            }else{
                return [numbers.indexOf(start) + 1, numbers.indexOf(end) + 1];
            }
        }
    }
}
