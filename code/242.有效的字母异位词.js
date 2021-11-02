// https://leetcode-cn.com/problems/valid-anagram/


// 对两个字符串 进行字符计数 
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    let map_s = {};
    let map_t = {};
    if(s.length!==t.length){
        return false;
    }
    for(let i = 0;i < s.length;i++){
        if (!map_s[ s[i] ]){
            map_s[ s[i] ] = 1;
        }else{
            map_s[s[i]] += 1;
        }
    }
    for (let j = 0; j < t.length; j++) {
        if (!map_t[t[j]]) {
            map_t[t[j]] = 1;
        } else {
            map_t[t[j]] += 1;
        }
    }

    // 比较 两个hash map 的值是否相同
    for(let key in map_s){
        if (!map_t[key] || map_t[key] !== map_s[key]){
            return false;
        }
    }
    return true;
};