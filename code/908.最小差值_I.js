// https://leetcode-cn.com/problems/smallest-range-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var smallestRangeI = function (nums, k) {
    // 先找到 nums 中的最大值和最小值
    let max = Math.max(...nums);
    let min = Math.min(...nums);
    let afterMax = max - k;
    let afterMin = min + k;
    if (afterMax > afterMin) {
        return afterMax - afterMin;
    } else {
        return 0;
    }

};