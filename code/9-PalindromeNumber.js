/** 回文数字
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    var str = x+"";
    var reverseStr= str.split('').reverse().join('');
    if(str === reverseStr){
        return true;
    }
    return false;
};
//  直接转成  str 比较 无需考虑数字的越界问题
