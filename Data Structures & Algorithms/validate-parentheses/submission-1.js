class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let set = new Array();

        for(let i = 0; i < s.length; i++){
            if(s.charAt(i) == '(' ||
            s.charAt(i) == '[' ||
            s.charAt(i) == '{'){
                set.push(s.charAt(i));
            }else if(s.charAt(i) == ')'){
                if(set[set.length - 1] == '('){
                    set.pop();
                }
                else{
                    return false;
                }
            }else if(s.charAt(i) == ']'){
                if(set[set.length - 1] == '['){
                    set.pop();
                }
                else{
                    return false;
                }
            }
            else if(s.charAt(i) == '}'){
                if(set[set.length - 1] == '{'){
                    set.pop();
                }
                else{
                    return false;
                }
            }
        }
        return set.length == 0;
    }
}
