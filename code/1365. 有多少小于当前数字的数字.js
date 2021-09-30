// https://leetcode-cn.com/problems/how-many-numbers-are-smaller-than-the-current-number/



/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 对数组排序 后， 查看这个数字在排序后的 index 前面有几个数字 就是了
var smallerNumbersThanCurrent = function (nums) {
    let sortNums = nums.slice().sort((a,b)=>a-b);
    return nums.map(val=>{
        return sortNums.indexOf(val);
    })
};

let arr = [8, 1, 2, 2, 3];
// console.log(smallerNumbersThanCurrent(arr));