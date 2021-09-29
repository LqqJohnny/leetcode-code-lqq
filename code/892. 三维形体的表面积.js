
// https://leetcode-cn.com/problems/surface-area-of-3d-shapes/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var surfaceArea = function (grid) {
    let allCount = 0; // 所有方块 * 6面 的总面积
    for (let i = 0; i < grid.length; i++) { // 第 i 行
        for (let j = 0; j < grid[0].length; j++) { // 第 j 列
            // 将该方块的总面积 先加进去
            if (grid[i][j]>0) {
                allCount += grid[i][j] * 6;
            }
            // 同一个位置 ， 多个方块叠起来，之间有 (n-1)*2 个面是挡住的， 要减去
            if (grid[i][j] > 1) {
                allCount -= (grid[i][j] - 1) * 2;
            }
            
            // 如果当前方块 左边有方块 去除挡住的面积
            if (grid[i][j-1]){
                let sameSquare = Math.min(grid[i][j - 1], grid[i][j]);
                allCount -= sameSquare*2;
            }
             // 如果当前方块 下边有方块 去除挡住的面积
            if (grid[i + 1] && grid[i+1][j]) {
                let sameSquare = Math.min(grid[i][j], grid[i + 1][j]);
                allCount -= sameSquare * 2;
            }
        }
    }

    return allCount;
};

let arr = [[1, 2], [3, 4]];
// console.log(surfaceArea( arr ));