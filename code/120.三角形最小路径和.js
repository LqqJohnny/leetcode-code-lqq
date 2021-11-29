// https://leetcode-cn.com/problems/triangle/


// 动态规划  dp

/**
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let dp = new Array(triangle.length);
    for (let i = 0; i < dp.length; i++) {
         dp[i] = [];
    }

    for (let i = 0; i < triangle.length; i++) {
        const row = triangle[i];
        for (let j = 0; j < row.length; j++) {
            if(i === 0) {
                dp[i][j] = row[j];
            }else{
                let top_left = Infinity;
                let top_right = Infinity;
                if(j > 0){
                    top_left = dp[i-1][j-1];
                }
                if(j < row.length - 1){
                    top_right = dp[i-1][j];
                }
                dp[i][j] = Math.min(top_left, top_right) + row[j];
            }
        }
    }
    return Math.min(...dp[dp.length - 1]);
};

let triangle = [[2], 
               [3, 4], 
              [6, 5, 7], 
             [4, 1, 8, 3]]
console.log(minimumTotal(triangle));