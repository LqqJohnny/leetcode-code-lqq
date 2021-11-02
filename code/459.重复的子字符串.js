// https://leetcode-cn.com/problems/repeated-substring-pattern/

// 首先 要是一个重复的字符串 ， 那一定是从第一个字母开始后的n个字母 组成的 重复字符串
// 那就直接从 第一个字母 遍历起， 判断 第一个字母 是否可以组成， 
// 如果不行， 则前两个字母是否能构成 ，
// 判断是否能构成 可以用 字符串 的split 方法 切割出来的数组长度 === 总长度/判断字符长度

/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
    let str = '';
    for (let i = 0; i < s.length - 1; i++) {
        str += s[i];
        if( s.split(str).length-1 === s.length/str.length ){
            return true;
        }
    }

    return false;
};

console.log(repeatedSubstringPattern('abaab1aba'));
// abcabcabc
// abaabaaba