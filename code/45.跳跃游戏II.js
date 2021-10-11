// https://leetcode-cn.com/problems/jump-game-ii/


/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let step = 0;
    let len = nums.length
    let end = len-1;
    
    while(end > 0){
        for (let i = 0; i < end; i++) {
            if (i + nums[i] >= end) {
                step += 1;
                end = i;
                break;
            }
        }
    }
    
    return step;
};

let arr = [2, 3, 1, 1, 4];

// console.log(jump(arr));