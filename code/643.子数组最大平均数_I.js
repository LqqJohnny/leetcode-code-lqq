
// https://leetcode-cn.com/problems/maximum-average-subarray-i/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// 平均数最大 就是和 最大

var findMaxAverage = function (nums, k) {

    let currentCount = arrayPlus(nums.slice(0, k));  // 0-k 这些数 的 和
    let max = currentCount;

    for (let i = k; i < nums.length; i++) { // i 表示k个连续数字中的 最后一个
        currentCount = currentCount + nums[i] - nums[i-k];
        max = Math.max(currentCount , max);
    }

    return max/k;
};

function arrayPlus(array) {
    var s = 0;
    array.forEach(function (val, idx, arr) {
        s += val;
    });

    return s;
}