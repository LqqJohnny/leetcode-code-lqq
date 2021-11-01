// https://leetcode-cn.com/problems/find-the-middle-index-in-array/

/**
 * 
    输入：nums = [2,3,-1,8,4]
    输出：3
    解释：
    下标 3 之前的数字和为：2 + 3 + -1 = 4
    下标 3 之后的数字和为：4 = 4
 */

// 思路： 先计算出 所有数字的和， 在遍历数组 i ， 算出 i左边的和 和 i右边的和， 当两个和相等 则返回i


/**
 * @param {number[]} nums
 * @return {number}
 */
var findMiddleIndex = function (nums) {
    let allSum = nums.reduce((a,b)=>a+b);
    let leftSum = 0;
    let rightSum = allSum;
    for (let i = 0; i < nums.length; i++) {
        // 计算此时的 左右 和
        leftSum += (nums[i-1] || 0);
        rightSum -= nums[i];
        
        if(leftSum === rightSum){
            return i;
        }
    }
    return -1;
};
console.log(findMiddleIndex([1, -1, 4]));
