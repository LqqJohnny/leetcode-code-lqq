// https://leetcode-cn.com/problems/rotting-oranges/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    let newGrid = turnBadOrange(grid);
    let times = 0;
    let lastGrid = grid;
    while (newGrid){
        times++;
        lastGrid = newGrid;
        newGrid = turnBadOrange(newGrid);
    }
    // 判断 newGrid 还有没有好橘子
    let hasGood = lastGrid.some(val => {
        return val.some(item => item === 1);
    })
    
    return hasGood ? -1 : times;

    // 将当前坏橘子 旁边的好橘子变坏
    function turnBadOrange(grid){
        let result = JSON.parse(JSON.stringify(grid));
        let hasTurned = false;
        for (let i = 0; i < grid.length; i++) {
            const row = grid[i];
            for (let j = 0; j < row.length; j++) {
                const ceil = row[j];
                if(ceil === 2){
                    if (j >= 1 && grid[i][j - 1] === 1){ // 左
                        result[i][j - 1] = 2;
                        hasTurned= true;
                    }
                    if (j + 1 < grid[i].length && grid[i][j + 1] === 1) { // 右
                        result[i][j + 1] = 2;
                        hasTurned = true;
                    }
                    if (i > 0 && grid[i - 1][j] === 1) { // 上
                        result[i - 1][j] = 2;
                        hasTurned = true;
                    }
                    if (i + 1 < grid.length && grid[i + 1][j] === 1) { // 下
                        result[i + 1][j] = 2;
                        hasTurned = true;
                    }
                }
            }
        }

        return hasTurned ? result : null; // 如果没有转变坏橘子 ，则返回 null
    }
};

// 2 表示是怀橘子  2附近的1 每分钟 +1 变成 2
// 如果 有一个 1 附近 都是 0 则存在橘子永远不变坏 则返回 -1
let grid = [[0, 2]]

console.log(orangesRotting(grid));