// https://leetcode-cn.com/problems/array-partition-i/


/**
 * @param {number[]} nums
 * @return {number}
 */
// 对数组排序 ， 从大到小 每两个数字 组成一队 ，min 的总和最大
var arrayPairSum = function (nums) {
    let count = 0;
    nums.sort((a, b) => {
        return a - b;
    })

    nums.forEach((val, index) => {
        if (index % 2 === 0) {
            count += val;
        }
    })

    return count;
};