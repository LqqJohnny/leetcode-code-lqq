// https://leetcode-cn.com/problems/isomorphic-strings/


/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
    if(s.length !== t.length){
        return false;
    }
    // 存放映射关系的表
    let map = {};
    let usedT = {};
    for(let i = 0 ; i < s.length ; i++){
        if (!usedT[t[i]]) {
            usedT[t[i]] = s[i];
        }else{
            if (usedT[t[i]] !==s[i]){
                return false;
            }
        }
        if (!map[s[i]]){
            map[s[i]] = t[i];
        }else{
            if (map[s[i]] !== t[i]){
                return false;
            }
        }
    }
    return true;
};


let s = "paper", t = "title"
// "paper"
// "title"
console.log(isIsomorphic(s ,t));