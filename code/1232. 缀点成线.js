// https://leetcode-cn.com/problems/check-if-it-is-a-straight-line/


/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */

// 判断所有点是否在一条线上， 随便取两个点 计算他们的x差值 和 y差值 的比例， 然后用这个比例 去对比所有点 比例都相同 ， 那就是同一条线。
var checkStraightLine = function (coordinates) {
    // 拿前面两个点 求出比例
    let xDiff = coordinates[1][0] - coordinates[0][0];
    let yDiff = coordinates[1][1] - coordinates[0][1];
    let tan = 0;
    // 如果 x差值 或者 y差值  有一个是 0  那说明两个点在一条 于x轴或y轴平行的线
    if(xDiff !== 0 && yDiff !== 0){
        tan = xDiff / yDiff;
    }

    for (let i = 2; i < coordinates.length; i++) {
        let curXDiff = coordinates[i][0] - coordinates[0][0];
        let curYDiff = coordinates[i][1] - coordinates[0][1];
        if ( (xDiff === 0 && curXDiff!==0) 
            || (yDiff === 0 && curYDiff !== 0)){
            // 前两点 是一条垂直轴线 但是后面的点不是
            return false;
        } else if (xDiff !== 0 
            && yDiff !== 0 
            && (curXDiff / curYDiff !== tan)){
                // 都不在垂直轴线 上 再去比较 tan
            return false;
        }
    }

    return true;
};

let arr = [[-3, -2], [-1, -2], [2, -2], [-2, -2], [0, -2]]
console.log(checkStraightLine(arr));