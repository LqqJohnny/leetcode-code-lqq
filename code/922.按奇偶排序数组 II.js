// https://leetcode-cn.com/problems/sort-array-by-parity-ii/


/**
 * @param {number[]} nums
 * @return {number[]}
 */

// 暴力解法  三次循环， 复杂度 还是 O(n)

var sortArrayByParityII = function (nums) {
    let jishuArray = nums.filter(val => val % 2 === 1);
    let oushuArray = nums.filter(val => val % 2 === 0);
    let result = [];
    for(let i = 0 ; i < nums.length ;i++){
        if(i%2===0){
            result.push(oushuArray.shift())
        }else{
            result.push(jishuArray.shift())
        }
    }

    return result;
};