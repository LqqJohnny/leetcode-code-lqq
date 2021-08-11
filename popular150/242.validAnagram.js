// 242. 有效的字母异位词

// 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。

// 注意：若 s 和 t 中每个字符出现的次数都相同，则称 s 和 t 互为字母异位词。

// 来源：力扣（LeetCode） 242 
// 链接：https://leetcode-cn.com/problems/valid-anagram


// 思路 ： 每个字符出现的次数 那就是计数了
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    const map_s = {};
    const map_t = {};
    if(s.length!==t.length){return false;}

    for(let i = 0;i<s.length;i++){
        if(map_s[s[i]]){
            map_s[s[i]]++;
        }else{
            map_s[s[i]] = 1;
        }
    }

    for(let i = 0;i<t.length;i++){
        if(map_t[t[i]]){
            map_t[t[i]]++;
        }else{
            map_t[t[i]] = 1;
        }
    }

    for(let key in map_s){
        if(map_s[key] !==map_t[key]){
            return false;
        }
    }
    return true;
};