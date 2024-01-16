// https://leetcode-cn.com/problems/permutations/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
    let result = [];
    
    for (let i = 0; i < nums.length; i++){
        let first = nums[i];
        let tempDel = nums.splice(i,1);
        let arr = permute(nums);
        arr.forEach(val=>{
            result.push([first, ...val]);
        })
        nums.splice(i, 0, tempDel);
    }

    return result;
};

console.log(permute([1, 2, 3]))