// https://leetcode-cn.com/problems/mean-of-array-after-removing-some-elements/
// 给你一个整数数组 arr ，请你删除最小 5 % 的数字和最大 5 % 的数字后，剩余数字的平均值。
/**
 * @param {number[]} arr
 * @return {number}
 */
var trimMean = function (arr) {
    // 先排序
    arr.sort((a, b) => a - b);
    // 去掉 首尾的 5% 
    let len = Math.ceil(arr.length / 20);
    let result = arr.slice(len , -len);
    
    return result.reduce((last, cur) => last + cur) / result.length;
};
