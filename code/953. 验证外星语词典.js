// https://leetcode-cn.com/problems/verifying-an-alien-dictionary/


/**
 * @param {string[]} words
 * @param {string} order
 * @return {boolean}
 */
var isAlienSorted = function (words, order) {
    let orderMap = {};
    for (let i = 0; i < order.length; i++) {
        orderMap[order[i]] = i;
    }
    
    let result = [];
    for (let i = 1; i < words.length; i++) {
        let word = words[i];
        let prevWord = words[i-1];
        for (let j = 0; j < Math.max(word.length, prevWord.length); j++) {
            const char = word[j] ? orderMap[word[j]] : -1;
            const preChar = prevWord[j] ? orderMap[prevWord[j]] : -1;
            if (preChar > char){
                return false;
            }else if(preChar < char){
                break;
            }
        }
    }
    return true;
};
let words = ["apple", "app"], order = "abcdefghijklmnopqrstuvwxyz"
console.log(isAlienSorted(words, order));