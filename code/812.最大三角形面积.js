// https://leetcode-cn.com/problems/largest-triangle-area/

// failed

/**
 * @param {number[][]} points
 * @return {number}
 */
var largestTriangleArea = function (points) {
    let maxArea = 0;
    for (let i = 0; i < points.length; i++) {
        for (let j = i+1; j < points.length; j++) {
            for (let h = j+1; h < points.length; h++) {
                maxArea = Math.max(area(points[i], points[j], points[h]))
            }
        }
    }
    return maxArea;
};

function area(a,b,c){
    return 0.5*Math.abs((a[0]*b[1]+b[0]*c[1]+c[0]*a[1]) - (a[1]*b[0]+b[1]*c[0]+c[1]*a[0]));
}
