class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {
        //Clean string so its lowercase, remove all characters
        //that arent a-z or 0-9 globally and i (?)
        //such as ' ' and '!' etc
        s = s.replace(/[^a-z0-9]/gi, '').toLowerCase();
        for(let i = 0; i < s.length/2; i++){
            if(s.charAt(i) != s.charAt(s.length - 1 - i)) return false;
        }
        return true;
    }
}
