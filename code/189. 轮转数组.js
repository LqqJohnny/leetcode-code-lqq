// https://leetcode-cn.com/problems/rotate-array/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if(k > nums.length){
        k = k%nums.length;
    }
    let end = nums.splice(-k)
    nums.unshift(...end)
    console.log(nums);
};

rotate([1,2] , 3)
