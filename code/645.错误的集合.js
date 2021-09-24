// https://leetcode-cn.com/problems/set-mismatch/

// 错误的集合： 寻找 数组中 重复的数字 ， 丢失的数字
// map

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
    let map = {};
    let result = [];
    // 找重复
    nums.forEach((val)=>{
        if(map[val]){
            map[0] = val;
        }else{
            map[val] = 1;
        }
    })
    // 找缺失
    for(let i=0;i<nums.length;i++){
        if(!map[i+1]){
            result[1] = i+1;
            break;
        }
    }

    return result;
}; 