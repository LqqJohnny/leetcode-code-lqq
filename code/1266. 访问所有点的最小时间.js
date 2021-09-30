// https://leetcode-cn.com/problems/minimum-time-visiting-all-points/


/**
 * @param {number[][]} points
 * @return {number}
 */
var minTimeToVisitAllPoints = function (points) {
    let count = 0;

    for (let i = 1; i < points.length; i++) {
        let xdiff = Math.abs(points[i][0] - points[i - 1][0]);
        let ydiff = Math.abs(points[i][1] - points[i - 1][1]);
        let curStep = Math.min(xdiff, ydiff);
        xdiff -= curStep;
        ydiff -= curStep;
        count += curStep + xdiff + ydiff; // xdiff ydiff 中至少有一个是 0 了，另一个非0 的就是剩下要走的步数
    }

    return count;
};

let arr = [[3, 2], [-2, 2]];
console.log(minTimeToVisitAllPoints(arr));