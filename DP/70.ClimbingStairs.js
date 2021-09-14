// 70.Climbing Stairs
// https://leetcode-cn.com/problems/climbing-stairs/

// 动态规划题

/** 这种方法 会超出时间限制，所以要用上缓存
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    if (n <= 0) { return 0; }
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        return climbStairs(n - 1) + climbStairs(n - 2);
    }
};


/** 动态规划：  斐波那契数列【带缓存】
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n, map = {}) {
    if (map[n]) {
        return map[n];
    }
    if (n <= 0) { return 0; }
    if (n === 1) {
        return 1;
    } else if (n === 2) {
        return 2;
    } else {
        let curVal = climbStairs(n - 1, map) + climbStairs(n - 2, map);
        map[n] = curVal;
        return curVal;
    }
};
