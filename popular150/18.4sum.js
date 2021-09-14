// 18. 四数之和
// https://leetcode-cn.com/problems/4sum/

// 思路： 三数之和 是 一重循环+ 双指针 ， 那四数之和 可以用双重循环+双指针
// 先对数组排序 ， 再两重循环， 在第二层循环中使用双指针法

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 1. 先排序
    let _nums = nums.sort(function (a, b) {
        return a - b;
    })

    let results = [];
    // 2. 第一层
    for (let i = 0; i < _nums.length - 3; i++) {
        // 6.1 去重
        if (i > 0 && _nums[i] === _nums[i - 1]) {
            continue;
        }
        // 3. 第二层
        for (let j = i + 1; j < _nums.length - 2; j++) {
            // 6.2 去重
            if (j > i + 1 && (_nums[j] === _nums[j - 1])) {
                continue;
            }
            // 4. 双指针
            let left = j + 1;
            let right = _nums.length - 1;
            while (left < right) {
                let tempCount = _nums[i] + _nums[j] + _nums[left] + _nums[right];
                if (tempCount > target) {
                    right--;
                } else if (tempCount < target) {
                    left++;
                } else {
                    // 5. 相等 就存入results
                    results.push([_nums[i], _nums[j], _nums[left], _nums[right]]);
                    // 6.3 去重
                    while (left < right && nums[left] === nums[left + 1]) {
                        left++;
                    }
                    left++;
                    while (left < right && nums[right] === nums[right - 1]) {
                        right--;
                    }
                    right--;
                }
            }
        }
    }
    // [ -2 -1 0 0 1 2]
    return results;
};