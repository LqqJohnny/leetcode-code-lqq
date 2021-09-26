// https://leetcode-cn.com/problems/min-cost-climbing-stairs/

/**
 * @param {number[]} cost
 * @return {number}
 */
// [1, 100, 1, 1, 1, 100, 1, 1, 100, 1]

// 思路 ： DP 动态规划 
// 到最后一个台阶的最少步数 = 
    // 到上一个台阶的最小步数 & 
    // 到上上个台阶的最小步数 
    // 中的最小值 

var minCostClimbingStairs = function (cost) {
    let n = cost.length;
    let cur = 0;
    let prev = 0;
    for(let i  = 2 ;i<n;i++){
        let next = Math.min(
            cur + cost[i-1],
            prev + cost[i-2]
        );
        prev = cur;
        cur = next;
    }

    return cur;
};
