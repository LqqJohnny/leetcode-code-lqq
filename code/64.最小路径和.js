// https://leetcode-cn.com/problems/minimum-path-sum/


// 从一个点 出发 只能 是 往下或者往右 也就是 x++ 或者 y++
// 再用上递归的方法

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function (grid) {
    return minPathInSquare(grid , 0 , 0);
};

function minPathInSquare(grid, x, y){
    let count = 0;
    if (x < grid[0].length - 1 && y < grid.length-1){
        count += grid[y][x];
        let moveDownPath =  minPathInSquare(grid, x, y + 1);
        let moveRightPath =  minPathInSquare(grid, x + 1, y);
        count += Math.min(moveDownPath, moveRightPath);
    } else if (x === grid[0].length - 1 && y === grid.length - 1){
        return grid[y][x];
    }else if (x === grid[0].length - 1){
        for (let i = y ; i < grid.length ; i++){
            count += grid[i][x];
        }
    } else if (y === grid.length - 1){
        for (let i = x; i < grid[0].length; i++) {
            count += grid[y][i];
        }
    }
    return count;
}

let grid = [[1]]
console.log(minPathInSquare(grid , 0 , 0));
