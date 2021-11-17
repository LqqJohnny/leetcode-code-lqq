// https://leetcode-cn.com/problems/squares-of-a-sorted-array/

// 将数字平方 然后再 排序 

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
    return nums.map(val => {
        return val * val;
    }).sort((a, b) => a - b);
};


// 优化 一次遍历完成
var sortedSquares2 = function (nums){
    
}







