// https://leetcode-cn.com/problems/projection-area-of-3d-shapes/


/**
 * @param {number[][]} grid
 * @return {number}
 * 
 * 分别 计算 三个平面 上的投影面积  最后累加
 */
var projectionArea = function (grid) {
    let n = grid.length;
    let xArea = new Array(n).fill(0);
    let yArea = new Array(n).fill(0);
    let zArea = 0;
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] > 0){
                zArea += 1;
            }
            yArea[i] = Math.max(yArea[i], grid[i][j]);
            xArea[j] = Math.max(xArea[j], grid[i][j]);
        }
    }

    return zArea + yArea.reduce((a, b) => a + b) + xArea.reduce((a, b) => a + b);
};

let arr = [[2, 2, 2], [2, 1, 2], [2, 2, 2]];
// console.log(projectionArea(arr));