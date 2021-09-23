// https://leetcode-cn.com/problems/island-perimeter/

// 因为已经确定 不存在湖 ， 一定是一个独立的岛 
// 那就可以直接判断每一个方块有几面是面对海的，把这些海的面加起来就是周长

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
    let count = 0; // 总周长
    for (let i = 0; i < grid.length; i++) {
        let row = grid[i];
        for (let j = 0; j < row.length; j++) {
            let ceil = row[j];
            if (ceil === 1) {
                // 计算每一个 方块的 四边是否有陆地
                if (!grid[i - 1] || grid[i - 1][j] !== 1) { // 上面
                    count++;
                }
                if (!grid[i + 1] || grid[i + 1][j] !== 1) { // 下面
                    count++;
                }
                if (j === 0 || grid[i][j - 1] !== 1) {  // 左面
                    count++;
                }
                if (j === row.length - 1 || grid[i][j + 1] !== 1) {// 右面
                    count++;
                }
            }
        }
    }
    return count;
};