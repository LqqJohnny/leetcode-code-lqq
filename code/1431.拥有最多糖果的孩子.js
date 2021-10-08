// https://leetcode-cn.com/problems/kids-with-the-greatest-number-of-candies/


/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
    // 找出最大值
    let max = Math.max(...candies);
    return candies.map(val=>{
        return val + extraCandies>=max;
    })
};