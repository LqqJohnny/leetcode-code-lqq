// https://leetcode-cn.com/problems/subsets/

// failed


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let  result = [[]];
    for (let i = 0; i < nums.length; i++) {
        let tempArr = [nums[i]];
        result.push(tempArr);
        for (let j = i + 1; j < nums.length; j++) {
            tempArr.push(nums[j]);
            console.log(nums[i], nums[j], tempArr);
            result.push(tempArr);
        }
    }

    return result;
};


let arr = [1, 2, 3];
console.log(subsets(arr));