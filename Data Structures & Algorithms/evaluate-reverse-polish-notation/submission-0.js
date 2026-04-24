class Solution {
    /**
     * @param {string[]} tokens
     * @return {number}
     */
    evalRPN(tokens) {
        let arr = new Array();
        for(let i = 0; i < tokens.length; i++){
            if(!isNaN(parseInt(tokens[i], 10))){
                arr.push(parseInt(tokens[i]));
            }else{
                let n1 = arr.pop(); // second number
                let n2 = arr.pop(); // first number

                if (tokens[i] === "+") arr.push(n2 + n1);
                if (tokens[i] === "-") arr.push(n2 - n1);
                if (tokens[i] === "*") arr.push(n2 * n1);
                if (tokens[i] === "/") arr.push(Math.trunc(n2 / n1));
            }
        }
        return parseInt(arr[0]);
    }
}
