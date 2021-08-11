// 219. 存在重复元素 II
// 给定一个整数数组和一个整数 k，判断数组中是否存在两个不同的索引 i 和 j，使得 nums [i] = nums [j]，
// 并且 i 和 j 的差的 绝对值 至多为 k。

// 来源：力扣（LeetCode） 219 
// 链接：https://leetcode-cn.com/problems/contains-duplicate-ii

var containsNearbyDuplicate = function(nums, k) {
    if(nums.length < 2){
        return false;
    }
    const length = nums.length;
    const map = {};
    for( let i = 0 ; i<length ; i++ ){
        if(nums[i] in map){
            console.log(i , map[nums[i]]);
            if(i - map[nums[i]] <= k){
                return true;
            }else{
                map[nums[i]] = i;
            }
        }else{
            map[nums[i]] = i;
        }
    }
    return false;
};

console.log(containsNearbyDuplicate([1,0,1,1] , 1));