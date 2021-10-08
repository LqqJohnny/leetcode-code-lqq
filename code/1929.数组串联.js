// https://leetcode-cn.com/problems/concatenation-of-array/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getConcatenation = function (nums) {
    return [...nums,...nums]
};