class Solution {
    /**
     * @param {number} n - a positive integer
     * @return {number} - a positive integer
     */
    reverseBits(n) {
        let result = 0;
        
        for (let i = 0; i < 32; i++) {
            // 1. Shift the result left to make room for the new bit
            // 2. Extract the rightmost bit of n using (n & 1) and add it to result
            result = (result << 1) | (n & 1);
            
            // Move n to the right by 1 bit to process the next digit
            n >>= 1;
        }
        
        // JavaScript treats bitwise operations as signed 32-bit integers.
        // Using >>> 0 forces it to return an unsigned 32-bit integer.
        return result >>> 0;
    }
}
