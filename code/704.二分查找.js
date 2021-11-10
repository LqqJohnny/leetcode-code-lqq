// https://leetcode-cn.com/problems/binary-search/


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0; 
    let right = nums.length-1;
    while (left <= right) {
        let center = Math.ceil((right - left) / 2) + left;
        if( nums[center] === target){
            while (nums[center] === nums[center-1]){
                center--;
            }
            return center;
        } else if (nums[center] > target){
            right = center-1;
        } else {
            left = center+1;
        }
    }

    return -1;
};
let nums = [1,2,2,2,2,2,2,4], target = 2
console.log(search(nums , target));