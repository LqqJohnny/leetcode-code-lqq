// 169. 多数元素

// 给定一个大小为 n 的数组，找到其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。

// 链接：https://leetcode-cn.com/problems/majority-element

// 思路： 看到次数 两字 就想到了计数，遍历数组，记录没个字母出现的次数。
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let map = {};
    for(let i = 0 ;i<nums.length;i++ ){
        if( map[nums[i]] ){
            map[nums[i]] += 1
        } else{
            map[nums[i]] = 1
        }
    }

    const halfLen = nums.length/2;
    for(let key in map){
        if(map[key]>=halfLen){
            return key;
        }
    }
    return false;
};