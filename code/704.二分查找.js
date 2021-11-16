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

// 2021-11-16

function search2(nums, target){
    let start = 0 ;
    let end = nums.length - 1;
    while(start <= end){
        let center = start + Math.floor((end - start) / 2);
        if(nums[center] > target){
            end = center-1;
        } else if (nums[center] < target){
            start = center+1;
        }else{
            while (nums[center] === nums[center - 1]) {
                center--;
            }
            return center;
        }
    }

    return -1;
}

let nums = [-1, 0, 3, 5, 9, 12], target = 9
console.log(search2(nums , target));