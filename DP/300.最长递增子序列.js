
// https://leetcode-cn.com/problems/longest-increasing-subsequence/

/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    if (nums.length < 2) { return nums.length }
    let dps = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        dps[i] = 1;
        for (let j = 0; j < i; j++) {
            if (nums[j] < nums[i]) {
                dps[i] = Math.max(dps[i], dps[j] + 1);
            }
        }
        max = Math.max(max, dps[i]);
    }
    return max;
};