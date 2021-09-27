// https://leetcode-cn.com/problems/transpose-matrix/

/**
 * @param {number[][]} matrix
 * @return {number[][]}
 */
var transpose = function (matrix) {
    let row = matrix.length; // 行
    let col = matrix[0].length; // 列
    let result = new Array(col).fill(0).map(()=>{
        return new Array(row);
    });

    matrix.forEach((val,i)=>{
        val.forEach((num,j)=>{
            result[j][i] = num;
        })
    })
    return result;
};
