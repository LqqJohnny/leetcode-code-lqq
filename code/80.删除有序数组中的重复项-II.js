// https://leetcode-cn.com/problems/remove-duplicates-from-sorted-array-ii/


/**
 * @param {number[]} nums
 * @return {number}
 */
// 数组是有序的 ，此方法没有利用数组是有序的特征
// 导致 复杂度 稍高
// 可以使用双指针法 从头去找  这样时间复杂度和空间复杂度 都能提高

var removeDuplicates = function (nums) {
    let map = {}
    for (let i = 0; i < nums.length;) {
        let val = nums[i]
        if (!map[val]) {
            map[val] = 1;
            i++;
        } else if (map[val] <= 1) {
            map[val]++;
            i++;
        } else {
            nums.splice(i, 1);
        }
    }

    return nums.length;
};


// 双指针法 better

var removeDuplicates2 = function (nums) {
    let left  = 0; 
    let right = 1;
    // 边界情况
    if (nums.length <= 2){
        return nums.length;
    }

    while (left < nums.length && right < nums.length){
        if(nums[left] === nums[right]){
            if (right - left >= 2){
                nums.splice(right , 1)
            }else{
                right++;
            }
        }else{
            left++;
            right++;
        }
    }
    return nums.length;
}