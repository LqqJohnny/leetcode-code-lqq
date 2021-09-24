// https://leetcode-cn.com/problems/maximum-product-of-three-numbers/



/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力法 -- 超时
var maximumProduct = function (nums) {
    let max = -Infinity;
    for (let i = 0; i < nums.length - 2; i++) {
        for (let j = i + 1; j < nums.length - 1; j++) {
            for (let h = j + 1; h < nums.length; h++) {
                let count = nums[i] * nums[j] * nums[h];
                if (count > max) {
                    max = count;
                }
            }
        }
    }
    return max;
}


// 排序 & 列举法
var maximumProduct2 = function (nums) {
    // 拆分为 正式 和 负数 两部分 并排序
    // 可优化点 ： 这里其实不需要整个数组 ， 只需要 最大的三个数 + 最小的两个数（负数）
    let left = nums.filter(val => val < 0).sort((a, b) => b - a);
    let right = nums.filter(val => val > 0).sort((a, b) => b - a);
    let hasZeros = left.length + right.length < nums.length;

    // 有4种情况可能会得到最大乘积 ： 3负数 ， 2负数*1正数 ，1负数*2正数， 3正数 
    let maxArray = [];
    if(left.length>=3){
        maxArray.push(left[0] * left[1] * left[2]);
    }
    if (right.length >= 3) {
        maxArray.push(right[0] * right[1] * right[2]);
    }
    if(left.length>=2 && right.length>=1){
        maxArray.push(left[left.length - 1] * left[left.length - 2] * right[0]);
    }
    if (left.length >= 1 && right.length >= 2) {
        maxArray.push(left[0] * right[right.length - 1] * right[right.length - 2]);
    }
    
    let max = Math.max(...maxArray);
    if(hasZeros){
        max = Math.max(0 , max);
    }
    return max;
}
