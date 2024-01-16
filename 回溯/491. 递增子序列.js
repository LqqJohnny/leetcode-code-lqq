// https://leetcode-cn.com/problems/increasing-subsequences/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var findSubsequences = function (nums, prev = null) {
    let result = [];
    // 终止条件
    if(nums.length === 1){
        if (nums[0] > prev){
            return [[nums]];
        }else{
            return [[]];
        }
    }

    for(let i = 0 ; i < nums.length ; i++){
        if(i>0 && nums[i] === nums[i - 1]){
            continue;
        }
        let cur = nums[i];
        if (cur >= prev){
            if (prev !== null){
                result.push([cur]);
            }
            let arr = findSubsequences(nums.slice(i+1), cur);
            arr.forEach(val=>{
                result.push([cur, ...val]);
            })
        }
    }
    console.log(result, 111);
    return result;
};

console.log(findSubsequences([4, 6, 7, 7]));