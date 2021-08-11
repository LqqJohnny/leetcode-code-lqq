/**
 * 14. 最长公共前缀
 * 
 *  编写一个函数来查找字符串数组中的最长公共前缀。

    如果不存在公共前缀，返回空字符串 ""。

    https://leetcode-cn.com/problems/longest-common-prefix/
 * 
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let target = strs[0];
    let res = '';
    for(let i = 0 ;i<target.length;i++){
        if(strs.every(str=>{
            return str[i] === target[i];
        })){
            res += target[i];
        }else{
            break;
        }
    }
    return res;
};