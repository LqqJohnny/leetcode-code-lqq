// https://leetcode-cn.com/problems/excel-sheet-column-number/

// 字符串的 charCodeAt 方法

/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
    let count = 0;
    for (let i = columnTitle.length - 1; i >= 0; i--) {
        let val = columnTitle[i].charCodeAt() - 64;
        count += val * Math.pow(26, columnTitle.length - i - 1);
    }
    return count;
};

console.log(titleToNumber('FXSHRXW'));