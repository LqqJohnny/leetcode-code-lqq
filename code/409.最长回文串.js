// https://leetcode-cn.com/problems/longest-palindrome/


// 思路：先计数。 
// 然后遍历map ， 如果一个字母的出现次数 是 偶数 则所有的这个字母 全都可以用在 回文字符串，
// 如果是 奇数 ， 则该字母可以用的个数是 （次数-1）， 因为可以用部分的 奇数次数字母 （这是最坑的点，最容易忽视）

// O(n)

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    let map = {};
    for (let i = 0; i < s.length; i++) {
        if(!map[ s[i] ]){
            map[s[i]] = 1;
        }else{
            map[s[i]]++;
        }
    }
    // 分奇数，偶数
    let evenCount = 0;
    let OddCount = 0;
    let hasOdd = 0;
    for (let key in map){
        if (map[key]%2 === 0){
            evenCount += map[key];
        } else {
            hasOdd = 1;
            OddCount += (map[key]-1)
        }
    }
    return OddCount + evenCount + hasOdd;
};
let s = "abccccdd"
console.log(longestPalindrome(s));