// https://leetcode-cn.com/problems/spiral-matrix/

// 就是一个转向的问题 ， 记录当前的方向 上/下/左/右 到达顶点之后，就切换成对应的方向
// 同时还要更新顶点

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    let result = [];
    let direction = 'right' ; // 初始的方向是从 0，0 开始向右
    let x = 0 , y = 0;
    // x，y 轴的顶点
    let xmax = matrix[0].length-1;
    let ymax = matrix.length-1;
    let xmin = 0 , ymin =0;

    while(x <= xmax && y <= ymax && (ymax>=ymin && xmax>=xmin)){
        result.push(matrix[y][x]);
            
        // 不同的方向对应的 坐标变化
        if (direction==='right'){
            if(x === xmax){
                direction = 'down';
                ymin++;
            }else{
                x++;
            }
        } 
        if (direction === 'down') {
            if(y===ymax){
                direction = 'left';
                xmax--;
            }else{
                y++;
            }
        }
        if (direction === 'left') {
            if(x === xmin){
                direction = 'top';
                ymax--;
            }else{
                x--;
            }
        }
        if (direction === 'top') {
            if(y === ymin){
                direction = 'right';
                xmin++;
                x++;
            }else{
                y--;
            }
        }
    }

    return result;
};

let matrix = [[1, 2, 3],
    [1, 2, 3],
    [1, 2, 3]]
// console.log(spiralOrder(matrix));

//  ----x-----
// |  1  2  3
// y  4  5  6
// |  7  8  9