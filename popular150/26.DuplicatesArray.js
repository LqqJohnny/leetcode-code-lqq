// . 删除有序数组中的重复项
// 对一个排序的数组 去重 ， 并且 不能使用额外空间。

// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let count = 0;
    let left = 0;
    for(let right = 1;right<nums.length;right++){
        if(nums[left] !== nums[right]){
            nums[left+1] = nums[right];
            left++;
        }
    }
    return left+1;
};