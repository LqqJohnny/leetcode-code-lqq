// https://leetcode-cn.com/problems/monotonic-array/

// 判断是否是 单调递增 或者 单调递减  O(n) 
/** 
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
    let direction = null; // 1-递增  2-递减
    for (let i = 1; i < nums.length; i++) {
        if(nums[i]>nums[i-1]){
            if (!direction) { //方向 递增
                direction = 1;
            } else if (direction === 2){ //  之前的方向都是递减 说明不是单调
                return false;
            }
        } else if (nums[i] < nums[i - 1]){
            if(!direction){
                direction = 2;
            } else if (direction === 1) { // 之前的方向都是递增 说明不是单调
                return false;
            }
        }
    }
    return true;
};


