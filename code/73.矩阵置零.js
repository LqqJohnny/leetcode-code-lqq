// https://leetcode-cn.com/problems/set-matrix-zeroes/


// 不能在 找0 的过程中就 转换成0 ， 需要对转换的行 和列 ，做记录 
// 统计完 之后， 在统一做 置 0 操作


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    let rows = []  // 行
    let columns = [] // 列
    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                rows.push(i)
                columns.push(j)
            }
        }
    }
    // 把所有需要置0 的行和列置0
    rows.forEach(row => {
        for (let m = 0; m < matrix[row].length; m++) {
            matrix[row][m] = 0
        }
    })

    columns.forEach(col => {
        for (let n = 0; n < matrix.length; n++) {
            matrix[n][col] = 0
        }
    })

};

// 可否进行优化 ？ 在第一次双重循环中 就把数字转换0
