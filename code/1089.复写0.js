// https://leetcode-cn.com/problems/duplicate-zeros/submissions/


/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
    let len = arr.length;
    for (let i = 0; i < len; i++) {
        if (arr[i] === 0) {
            arr.splice(i, 0 , 0);
            i++;
        }
    }
    arr.splice(len, arr.length - 1);
    return arr;
};