// https://leetcode-cn.com/problems/sort-colors/


// 就是 简单的排序 从小到大

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 数组的 sort 方法
var sortColors = function (nums) {
    nums.sort((a,b)=>a-b);
};

// 冒泡排序
var sortColors2 = function (nums) {
    for (let i = 0; i < nums.length; i++) {
        let  changed = false;
        for (let j = i; j < nums.length; j++) {
            if(nums[j] < nums[i]){
                changed = true;
                let temp = nums[i];
                nums[i] = nums[j];
                nums[j] = temp;
            }
        }
        if (!changed) {
            break;
        }
    }
};
