// 反转字符串数组
// 给定一个字符串数组 ， 按照原来的顺序，反转过来 ， 不能用额外的内存， 直接修改原数组
// https://leetcode-cn.com/problems/reverse-string/

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
    let start = 0;
    let end = s.length -1;
    while(start < end){
        let temp = s[start];
        s[start] = s[end];
        s[end] = temp;
        start++;
        end--;
    }
};

console.log(reverseString(["h","e","l","l","o"]));