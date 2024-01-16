/*
 * @lc app=leetcode.cn id=1220 lang=javascript
 *
 * [1220] 统计元音字母序列的数目
 */

// 'a', 'e', 'i', 'o', 'u'）
// 字符串中的每个字符都应当是小写元音字母（'a', 'e', 'i', 'o', 'u'）
// 每个元音 'a' 后面都只能跟着 'e'
// 每个元音 'e' 后面只能跟着 'a' 或者是 'i'
// 每个元音 'i' 后面 不能 再跟着另一个 'i'
// 每个元音 'o' 后面只能跟着 'i' 或者是 'u'
// 每个元音 'u' 后面只能跟着 'a'

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var countVowelPermutation = function(n) {
    let rules = {
        a: 3,
        e: 2,
        i: 2,
        o: 2,
        u: 2
    };
    function dp(n){
        if(n === 1){
            return {a: 1,e: 1,i: 1,o: 1,u: 1};
        }
        let item = {};
        for(let key in rules){
            item[key] = dp[n - 1][key] * rules[key]
        }
        return item;
    }
    
    return dp(n);
};
// @lc code=end

console.log(countVowelPermutation(5));

