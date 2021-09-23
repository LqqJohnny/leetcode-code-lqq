// https://leetcode-cn.com/problems/distribute-candies/

/**
 * @param {number[]} candyType
 * @return {number}
 */
// 对数组 去重 ， 然后去重后的数组长度 和 原数组长度/2  取更小值
// 只需要 搞清楚 逻辑即可 ， 妹妹能获得的种类最大就是 原数组的一半长度。
// 通过两种边界情况 ， 分析出 逻辑
var distributeCandies = function (candyType) {
    let dupliteCandytypes = [...new Set(candyType)];
    return Math.min(dupliteCandytypes.length, candyType.length / 2);
};