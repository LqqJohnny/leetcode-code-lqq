// https://leetcode-cn.com/problems/largest-number-at-least-twice-of-others/

//  找出最大数 ， 并判断是否是 其他数字的两倍以上
// 如果使用 暴力算法， 直接一遍循环 找出 最大值， 
// 再来一遍循环， 比较是否比其他值的两倍还大
// 优化一下， 两次循环 合并在一起做了
/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    if (nums.length < 2) {
        return 0;
    }
    let maxIndex = 0;
    let maxVal = nums[0];
    let secondBig = 0;
    nums.forEach((val, index) => {
        if (val > maxVal) {
            secondBig = maxVal;
            maxVal = val;
            maxIndex = index;
        } else {
            if (val < maxVal && val > secondBig) {
                secondBig = val;
            }
        }
    })
    return maxVal >= secondBig * 2 ? maxIndex : -1;
};