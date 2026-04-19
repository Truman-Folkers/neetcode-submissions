class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let retStr = "";
        for(let str of strs){
            retStr += str.length;
            retStr += 'è' + str;
        }
        return retStr
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        let num = '';
        let message = [];

        for(let i = 0; i < str.length; i++){
            if(str[i] == 'è'){
                message.push(str.slice(i + 1 , i + parseInt(num, 10) + 1));
                i += parseInt(num, 10);
                num = '';
            }
            else{
                num += str[i];
            }
        }

        return message;
    }
}
