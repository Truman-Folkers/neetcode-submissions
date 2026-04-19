class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {

            // base case
        if(s.length !== t.length) return false;

        let map = new Map();

        for(let char of s) {
            map.set(char, map.get(char) + 1 || 1);
        }

        for(let i of t) {
            if(map.has(i)) {
                map.set(i, map.get(i)-1);
                if(map.get(i) == 0) map.delete(i);
            } else {
                return false;
            }
        }

        return map.size === 0;

    }
}
