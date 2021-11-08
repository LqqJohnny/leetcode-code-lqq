// https://leetcode-cn.com/problems/longest-consecutive-sequence/

// 不考虑题目要求的算法复杂度的话， 直接对数组排序，然后在排序后数组中，用快慢指针寻找连续的子序列


// hashmap
// 遍历数组， 计算当前数字的最长连续长度 ， 例如 3的长度 = 2的长度+4的长度+本身（1）

/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    let map = {};
    let max = 0;
    for (let i = 0; i < nums.length; i++) {
        const val = nums[i];
        if (!map[val]){
            let left = map[val - 1] || 0;
            let right = map[val + 1] || 0;
            map[val] = left + right + 1;
            // 当前连续序列的 左右端点也要设置值为 map[val]
            map[val-left] = left + right + 1;
            map[val+right] = left + right + 1;
            max = Math.max(max , map[val]);
        }
    }

    return max;
};

let nums = [0, 3, 7, 2, 5, 8, 4, 6, 0, 1]
// 9
console.log(longestConsecutive(nums));