// https://leetcode-cn.com/problems/word-pattern/

/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
    let sArr = s.split(' ');
    if(sArr.length !== pattern.length){
        return false;
    }
    let map = {};
    let usedS = {};
    for(let i = 0 ; i < pattern.length ; i++){
        if (!map[pattern[i]]){
            map[pattern[i]] = sArr[i];
        } else {
            if (map[pattern[i]] !== sArr[i]){
                return false;
            }
        }

        if (!usedS[sArr[i]]) {
            usedS[sArr[i]] = pattern[i];
        } else {
            if (usedS[sArr[i]] !== pattern[i]) {
                return false;
            }
        }
    }

    return true;
};

let pattern = "abba", str = "dog dog dog dog"
// "abba"
// "dog dog dog dog"
console.log(wordPattern(pattern, str));