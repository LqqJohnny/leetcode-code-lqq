// https://leetcode-cn.com/problems/permutations/

// 在 46 的基础上 ， 对当前遍历到的 val 做一个 去重操作

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
    let result = [];
    let used = [];
    if (nums.length === 1) {
        return [nums]
    }
    nums.forEach((val, index) => {
        if (used.indexOf(val) < 0) {
            let filteredNums = nums.slice();
            filteredNums.splice(index, 1);
            let arrays = permuteUnique(filteredNums);
            arrays.forEach(arr => {
                result.push([val, ...arr]);
            })
            used.push(val);
        }
    });

    return result;
};

let nums = [1, 1, 3];
// console.log(permute(nums));