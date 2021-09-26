// https://leetcode-cn.com/problems/n-repeated-element-in-size-2n-array/submissions/

/**
 * @param {number[]} nums
 * @return {number}
 */
var repeatedNTimes = function (nums) {
    let map = [];
    for(let i = 0 ;i<nums.length;i++){
        if(!map[nums[i]]){
            map[nums[i]] = 1;
        }else{
            return nums[i];
        }
    }
};