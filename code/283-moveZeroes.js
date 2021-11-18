/** 吧数组中所有的数字 0  移到数组的最后面
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function(nums) {
    var count = 0;
    for(var i = 0;i<nums.length;i++){
        if(nums[i]===0){
            nums.splice(i,1);
            count++;
            i--;
        }
    }
    for(var j = 0; j < count ; j++){
        nums.push(0);
    }
    return nums;
};



// 复习一遍  快慢指针  [1,2,30,0,4,3,4,0,2,3]
// 慢指针 停留在 0 上， 快指针 往后面寻找不是0 的数， 然后交换位置
// 有点类似于 冒泡排序的原理
var moveZeroes2 = function (nums) {
    let left = 0;
    let right = 1;
    while(right < nums.length){
        if(nums[left] === 0){
            if(nums[right] !== 0){
                nums[left] = nums[right];
                nums[right] = 0;
                left++;
            }
        }else{
            left++;
        }
        right++;
    }
}

// 双指针 从首尾开始找  直到 首尾相遇 
// !! 这个方法可以把0 放到末尾 但是不能保证原有数字的顺序 
var moveZeroes3 = function (nums) {
    let left = 0;
    let right = nums.length - 1;
    while(right > left){
        if (nums[left] === 0){
            if (nums[right] !== 0){
                nums[left] = nums[right];
                nums[right] = 0;
                left++;
                right--;
            }else{
                right--;
            }
        }else{
            left++;
        }
    }
}



let nums = [1, 2, 30, 0,0,0,0, 4, 3, 4, 0, 2, 3];
moveZeroes3(nums);
console.log(nums);

