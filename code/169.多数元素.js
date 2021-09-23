// 169. 多数元素

// https://leetcode-cn.com/problems/majority-element/

/**
 * 
 * @param {number[]} nums
 * @return {number}
 */
//  计数法 对出现的次数统计 超过了要求数量之后， 立即返回，终止循环
var majorityElement = function (nums) {
    if (nums.length === 1) {
        return nums[0];
    }
    let map = {};
    let half = Math.floor(nums.length / 2);
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]] += 1;
            if (map[nums[i]] > half) {
                return nums[i];
            }
        } else {
            map[nums[i]] = 1;
        }
    }
    return null;
};