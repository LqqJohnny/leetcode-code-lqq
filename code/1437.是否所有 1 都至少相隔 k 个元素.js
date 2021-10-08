// https://leetcode-cn.com/problems/check-if-all-1s-are-at-least-length-k-places-away/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var kLengthApart = function (nums, k) {
    let i = nums.indexOf(1 , 0); //  第一个1的位置
    while(i<nums.length){
        let cur = nums.indexOf(1 , i+1);
        if (cur === -1){
            break;
        } else if (cur >= 0 && cur - i < k+1){
            return false;
        } else {
            i = cur;
        }
    }
    return true;
};

let nums = [1, 0, 0, 0, 1, 0, 0, 1], k = 2
// console.log(kLengthApart(nums, k));