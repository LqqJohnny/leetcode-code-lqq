// 136. 只出现一次的数字
// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。
// https://leetcode-cn.com/problems/single-number/
// 思路：  计数

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let map = {};
    for(let i = 0 ;i<nums.length;i++ ){
        if(map[nums[i]]){
            map[nums[i]] +=1;
        }else{
            map[nums[i]] = 1;
        }
    }

    for(let key in map){
        if(map[key] === 1){
            return key;
        }
    }
    return false;
};