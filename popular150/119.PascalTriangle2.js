// 118. 杨辉三角
// https://leetcode-cn.com/problems/pascals-triangle-ii/

//  获取 杨慧三角的 指定某一行

/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
    let lastRow = [1]; // 上一行
    if (rowIndex === 0) {
        return lastRow;
    }
    let current = [];
    for (let i = 1; i <= rowIndex; i++) {
        let half = Math.floor(i / 2); // 中心点 0
        for (let j = 0; j <= half; j++) {
            let count = 1;
            if (j > 0) {
                let left = lastRow[j - 1] || 0;
                let right = lastRow[j] || 0;
                count = left + right;
            }
            current[j] = count;
            current[i - j] = count;
        }
        lastRow = [...current];
    }

    return current;
};