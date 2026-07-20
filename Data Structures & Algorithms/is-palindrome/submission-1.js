class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        const cleaned = s.toLowerCase().replace(/[^a-zA-Z0-9]/g, '');
        let l = 0;
        let r = cleaned.length - 1;

        while(l < r){
            if(cleaned.charAt(l) !== cleaned.charAt(r)) return false;
            l++;
            r--;
        }
        return true;
    }
}
