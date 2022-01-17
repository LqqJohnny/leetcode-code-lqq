// https://leetcode-cn.com/problems/wiggle-subsequence/

// 想象把所有点 画到坐标系里面，就是 寻找转折点的数量。 
// 中间连续的数 就忽略。只对转折点两边的数统计

/**
 * @param {number[]} nums
 * @return {number}
 */
var wiggleMaxLength = function (nums) {
    if (nums.length < 2) {
        return nums.length;
    }
    let count = 1;
    let direction = null; // 0-up 1-down
    for (let i = 1; i < nums.length; i++) {
        if (nums[i] > nums[i - 1]) {
            if (direction === 'down') {
                count++;
            }
            direction = 'up';
        } else if (nums[i] < nums[i - 1]) {
            if (direction === 'up') {
                count++;
            }
            direction = 'down';
        }
    }
    if (direction !== null) {
        count++;
    }
    return count;
};

let arr = [20, 238, 238 , 1];
console.log(wiggleMaxLength(arr));