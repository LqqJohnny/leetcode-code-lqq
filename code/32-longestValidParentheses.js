/** 
 * @param {string} s
 * @return {number}
 */
var longestValidParentheses = function(s) {
    if(s.length==0){return 0 ;}
    var stack = [];
    var max=0;
    var start = -1;
    for(var i =0; i<s.length ; i++){
        if(s[i] === '('){
            stack.push(i);
        }else{
            if(stack.length>0){
                stack.pop();
                if(stack.length>0){
                    max = Math.max(max,i-stack[stack.length-1]);
                }else{
                    max = Math.max(max,i-start);
                }
            }else{
                start = i;
            }
        }
    }
    return max;
};
