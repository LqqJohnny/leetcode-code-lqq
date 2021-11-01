// https://leetcode-cn.com/problems/number-of-islands/

// 思路： 从头开始， 找到所有延伸出去的点 ， 记录 ， 当没有任何延伸了， 岛屿数量+1 ，直到遍历完

// 结果：  超时了！ fail  

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    let hasChecked = [];
    let count = 0;

    for(let m =0; m< grid.length;m++){
        for (let n = 0; n < grid[m].length; n++){
            if(isIsland(m, n)){
                count++;
            }
        }
    }

    // i列  j行  direction 需要判断的方向
    function isIsland(j, i) {
        if (hasChecked.indexOf(`${i}-${j}`)>=0){
            return false;
        }
        if (grid[j][i] === '1'){
            hasChecked.push(`${i}-${j}`); // 记录该点

            // 左
            if (i > 0) {
                isIsland(j, i - 1)
            }
            // 右
            if (i < grid[j].length - 1) {
                isIsland(j, i + 1)
            }
            // 上
            if(j > 0){
                isIsland(j - 1, i)
            }
            // 下
            if (j < grid.length-1) {
                isIsland(j + 1, i)
            }
            return true;
        }
        return false;
    }
    return count;
};

let grid = [
    ["1", "1", "0", "0", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "1", "0", "0"],
    ["0", "0", "0", "1", "1"]
]

console.log(numIslands(grid));