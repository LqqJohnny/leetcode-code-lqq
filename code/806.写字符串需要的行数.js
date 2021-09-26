// https://leetcode-cn.com/problems/number-of-lines-to-write-string/

/**
 * @param {number[]} widths
 * @param {string} s
 * @return {number[]}
 */
var numberOfLines = function (widths, s) {
    let words = "abcdefghijklmnopqrstuvwxyz";
    let lineCount = 1;
    let curCountlength = 0;
    for (let i = 0; i < s.length; i++) {
        let index = words.indexOf(s[i]);
        let count = widths[index];
        if (curCountlength + count > 100) {
            lineCount++;
            curCountlength = count;
        } else {
            curCountlength = curCountlength + count;
        }
    }
    return [lineCount, curCountlength];
};