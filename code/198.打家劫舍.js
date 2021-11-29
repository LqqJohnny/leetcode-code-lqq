// https://leetcode-cn.com/problems/house-robber/


/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
    if(nums.length === 0){
        return 0;
    }
    let dp = [nums[0]];
    for(let i = 1 ; i <nums.length ; i++ ){
        if(i<2){
            dp[i] = Math.max(nums[i] , dp[0]);
        }else{
            dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
        }
    }

    return dp[nums.length-1];
};

// let nums  = [1, 2, 3, 1];
// console.log(rob(nums));
// 输出：4
let nums2 = [2, 7, 9, 3, 1];
console.log(rob(nums2));
// 输出：12