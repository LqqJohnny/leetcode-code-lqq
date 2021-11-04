// https://leetcode-cn.com/problems/remove-outermost-parentheses/


// 用单调栈 。 每次清空了栈 说明已经招到一个完整的单元 

/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {

    let result = [];
    let leftCount = 0;
    let tempStr = '';
    let start = 0;
    for(let i = 0 ;i < s.length ; i++){
        if(s[i] === '('){
            leftCount++;
            tempStr+='(';
        } else {
            leftCount--;
            tempStr+=')';
            if (leftCount === 0){
                result.push(tempStr.substring(1, i - start));
                tempStr = '';
                start = i+1;
            }
        }
    }
    return result.join('');
};

let s = "(()())(())(()(()))"

console.log(removeOuterParentheses(s));