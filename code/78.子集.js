// https://leetcode-cn.com/problems/subsets/

// 递归 subsets(n) = subsets(n - 1) 和 n 的排列组合


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    let  result = []
    if (nums.length === 0){
        return [result]
    }
    let lastNumber = nums.pop()
    let prevResult = subsets(nums)
    prevResult.forEach(res=>{
        result.push(res)
        result.push([...res, lastNumber])
    })

    return result;
};


let arr = [1, 2, 3];
// console.log(subsets(arr));