// https://leetcode-cn.com/problems/single-number/
// 只出现一次的数字 

/** 字典 计数
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let map = {};
    nums.forEach(val => {
        if (map[val]) {
            delete map[val];
        } else {
            map[val] = 1;
        }
    })
    return Object.keys(map)[0];
};



// 异或 运算符
// 任何数异或自身都等于0  x^x = 0
var singleNumber = function (nums) {
    let result = 0;
    nums.forEach(val => {
        result ^= val;
    })
    return result;
};