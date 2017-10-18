/** 判断一个字符串是否可转为数字
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function(s) {
    if(s == " " ){
        return false;
    }
    return !isNaN(Number(s));
};
// 可能 js 中的 ' ' 有点不一样 会转为数字 0 所以做特殊处理
