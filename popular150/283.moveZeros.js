// 283. 移动0 到数组的最后

// https://leetcode-cn.com/problems/move-zeroes/

// 直接在原数组上操作 ， 不需要返回任何东西

// 快慢指针  [0,1,0,3,12]  凡是在原数组上操作排序的 都可以用快慢指针，两个指针的值互换来排序/移动

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    let i= 0 ;
    let j= 1 ;
    while(i<nums.length && j<nums.length){
        if(nums[i]===0 && nums[j]!==0){
            nums[i] = nums[j];
            nums[j] = 0;
            i++;j++;
        }else if(nums[i]===0 && nums[j]===0){
            j++;
        }else{
            i++;j++;
        }
    }
};

console.log(moveZeroes([0,1,0,3,12]));
