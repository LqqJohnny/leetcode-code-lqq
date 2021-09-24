//  724. 寻找数组的中心下标


// https://leetcode-cn.com/problems/find-pivot-index/

/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {

    // 从第一个数字起
    let leftCount = 0;
    let rightCount = nums.reduce((count, cur) => {
        return count + cur;
    }) - nums[0];

    if (rightCount === 0) {
        return 0;
    }

    for (let i = 1; i < nums.length; i++) {
        leftCount += nums[i - 1];
        rightCount -= nums[i];
        if (leftCount === rightCount) {
            return i;
        }
    }

    return -1;
};
