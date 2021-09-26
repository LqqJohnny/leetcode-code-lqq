// https://leetcode-cn.com/problems/largest-perimeter-triangle/

/**
 * @param {number[]} nums
 * @return {number}
 */
var largestPerimeter = function (nums) {
    nums.sort((a, b) => {
        return a - b;
    });

    for (let i = nums.length - 1; i >= 2; i--) {
        if (nums[i - 1] + nums[i - 2] > nums[i]) {
            return nums[i - 1] + nums[i - 2] + nums[i];
        }
    }
    return 0;
};