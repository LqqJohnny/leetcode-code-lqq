// https://leetcode-cn.com/problems/delete-columns-to-make-sorted/


/**
 * @param {string[]} strs
 * @return {number}
 * 
 * [ a b c ,
 *   b f a
 * ]
 * 
 */
var minDeletionSize = function (strs) {
    let cols = [];
    let len = strs[0].length;
    let deleteCol = 0;
    for (let i = 0; i < len ; i++) { // i 是 第i列
        for (let j = 1; j < strs.length; j++) { // j 是第j行
            let char = strs[j][i];
            let prevChar = strs[j-1][i];
            if (char < prevChar){
                deleteCol++;
                break;
            }
        }
    }

    return deleteCol;
};

console.log(minDeletionSize(["zyx", "wvu", "tsr"]));