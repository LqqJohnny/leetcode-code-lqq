// https://leetcode-cn.com/problems/teemo-attacking/

// 就是 对每一个时间点 和上一次中毒时间对比 时间间隔 ， 大于 duration 就+duration ， 小于就 +时间差

/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
    let count = 0;
    for (let i = 1 ;i < timeSeries.length; i++){
        count += Math.min(timeSeries[i] - timeSeries[i - 1] , duration);
    }
    return count+duration; // 最后一个中毒 + 固定的 duration
};