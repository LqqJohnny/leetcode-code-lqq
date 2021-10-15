// https://leetcode-cn.com/problems/spiral-matrix-ii/

// 和 54 题反过来的
// 先构建一个 n*n 的二维数组 
// 然后再按照54题的顺序 给每一个坐标赋值

/**
 * @param {number} n
 * @return {number[][]}
 */
var generateMatrix = function (n) {
    let matrix = [];
    for(let i = 0 ;i < n; i++){
        matrix[i] = new Array().fill(0);
    }

    let direction = 'right'; // 初始的方向是从 0，0 开始向右
    let x = 0, y = 0;
    // x，y 轴的顶点
    let xmax = n - 1;
    let ymax = n - 1;
    let xmin = 0, ymin = 0;
    let num = 1;

    while (x <= xmax && y <= ymax && (ymax >= ymin && xmax >= xmin)) {
        matrix[y][x] = num++;
        // 不同的方向对应的 坐标变化
        if (direction === 'right') {
            if (x === xmax) {
                direction = 'down';
                ymin++;
            } else {
                x++;
            }
        }
        if (direction === 'down') {
            if (y === ymax) {
                direction = 'left';
                xmax--;
            } else {
                y++;
            }
        }
        if (direction === 'left') {
            if (x === xmin) {
                direction = 'top';
                ymax--;
            } else {
                x--;
            }
        }
        if (direction === 'top') {
            if (y === ymin) {
                direction = 'right';
                xmin++;
                x++;
            } else {
                y--;
            }
        }
    }

    return matrix;

}


// console.log(generateMatrix(3));
// [0, 0, 0]
// [0, 0, 0]
// [0, 0, 0]