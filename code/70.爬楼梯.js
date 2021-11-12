// https://leetcode-cn.com/problems/climbing-stairs/


// 斐波那契 + 缓存

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    let map = {}; // 缓存 记录 爬n级台阶可能的方法

    function fn(m){
        if(m <= 2){
            return m
        }
        // 如果有缓存 则直接使用缓存
        if (map[m]){
            return map[m];
        }

        let curCount = fn(m-1) + fn(m-2)
        map[m] = curCount;
        return curCount;
    }

    return fn(n);
};

console.log(climbStairs(7));