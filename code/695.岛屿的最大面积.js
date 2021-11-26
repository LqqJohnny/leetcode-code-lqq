// https://leetcode-cn.com/problems/max-area-of-island/

// 从头开始遍历，每当找到一个1 就计算他所处岛的总面积，并且将这块岛的1全变成0 ， 因为已经统计过了。再继续往下去找1 
// 返回统计数值的最大值

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        const row = grid[i];
        for (let j = 0; j < row.length; j++) {
            const item = row[j];
            if (item === 1){
                let count = 0;
                count += 1;
                row[j] = 0;
                count += getAreaAroundGrid(i, j);
                max = Math.max(max ,count);
            }
        }
    }

    return max;

    // 统计格子周围的土地，并且置为0
    function getAreaAroundGrid(i , j){
        let count = 0;
        // 左边 有陆地
        if (j>=1 && grid[i][j-1]===1){
            count += 1;
            grid[i][j - 1] = 0;
            count += getAreaAroundGrid(i , j-1);
        }
        // 右边
        if (j + 1 < grid[i].length && grid[i][j + 1] === 1) {
            count += 1;
            grid[i][j + 1] = 0;
            count += getAreaAroundGrid(i, j + 1);
        }
        // 上
        if (i > 0 && grid[i-1][j] === 1) {
            count += 1;
            grid[i-1][j] = 0;
            count += getAreaAroundGrid(i-1, j);
        }
        // 下
        if (i + 1 < grid.length && grid[i + 1][j] === 1) {
            count += 1;
            grid[i + 1][j] = 0;
            count += getAreaAroundGrid(i + 1, j);
        }

        return count;
    }
};


let grid = [[0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0], [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]

console.log(maxAreaOfIsland(grid)); // 6
