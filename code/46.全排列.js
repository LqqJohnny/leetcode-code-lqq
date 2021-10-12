// https://leetcode-cn.com/problems/permutations/

// 数组中没有重复的数字。 给出全排列，
// 递归


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    if (nums.length === 1){
        return [nums]
    }
    nums.forEach((val,index)=>{
        let filteredNums = nums.slice();
        filteredNums.splice(index, 1);
        let arrays = permute(filteredNums);
        arrays.forEach(arr=>{
            result.push([val, ...arr]);
        })
    });

    return result;
};

let nums = [1, 2, 3];
// console.log(permute(nums));