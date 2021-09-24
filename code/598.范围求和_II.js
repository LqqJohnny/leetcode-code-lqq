// https://leetcode-cn.com/problems/range-addition-ii/

/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
// ops  二维数组 ， 第一个数字 表示 横向 第二个是纵向
//  求 横向的最小值 就是横向中的 最大字数的个数
// 纵向同理 最后相乘 就得到总数
var maxCount = function (m, n, ops) {
    if(ops.length === 0){
        return m*n;
    }

    let maxRow = m;
    let maxCol = n;
    ops.forEach(val => {
        maxRow = Math.min(maxRow, val[0])
        maxCol = Math.min(maxCol, val[1])
    })

    let count = maxCol * maxRow;
    return count;
};