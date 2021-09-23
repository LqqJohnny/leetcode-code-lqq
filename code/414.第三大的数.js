// https://leetcode-cn.com/problems/third-maximum-number/


// 先对数组排序 ， 在从头开始取第三大的数

/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
    nums.sort((a, b) => {
        return b - a;
    })
    let lastBigNum = nums[0];
    let level = 1;
    console.log(nums)
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] < lastBigNum) {
            level++;
            lastBigNum = nums[i];
        }
        if (level === 3) {
            return nums[i];
        }
    }
    return nums[0];
};