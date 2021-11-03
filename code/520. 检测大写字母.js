// https://leetcode-cn.com/problems/detect-capital/


/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
    let upperChars = word.split('').filter(val => val === val.toUpperCase());
    if (upperChars.length === 0) {
        return true;
    } else if (upperChars.length === word.length) {
        return true;
    } else if (upperChars.length === 1 && word.indexOf(upperChars[0]) === 0) {
        return true;
    } else {
        return false;
    }

};