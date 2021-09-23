// https://leetcode-cn.com/problems/max-consecutive-ones/


// 直接一遍循环， 对过程中碰到的连续的 1 统计，取最大的统计数。
// 需要注意的就是 ， 当数组最后几个数字都是 1 的时候， 是不会触发，for循环中的 else 的。需要在返回count 的时候
// 再做一次 Math.max 操作

/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
    let max = 0;
    let temp = 0;
    nums.forEach(val => {
        if (val === 1) {
            temp++;
        } else {
            max = Math.max(max, temp);
            temp = 0;
        }
    })
    return Math.max(max, temp); //  很重要  [1,1,2,2,2,2,1,1,1]; 直接返回max 将会得到2 但实际上最大的连续是 3 
};