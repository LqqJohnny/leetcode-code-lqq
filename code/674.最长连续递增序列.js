// https://leetcode-cn.com/problems/longest-continuous-increasing-subsequence/

// [1,2,4,2,8]  124  ==>  3
/**
 * @param {number[]} nums
 * @return {number}
 */

// 思路： 快慢指针
var findLengthOfLCIS = function (nums) {
    let left = 0; 
    let right = 1;
    let max = 0;
    while(right < nums.length){
        if(nums[ right-1 ] >= nums[right]){
            max = Math.max(max, right - left);
            left = right;
        }
        right++;
    }
    // 【1，2，3，4 】 while循环结束之后，max 还是 0 ， 
    // 所以在最后再做一次取最大值操作
    max = Math.max(max, right - left);

    return max;
};