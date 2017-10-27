/**
 *  找出给定数组中的第一个消失的 正整数
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    if(nums.length==0){return 1;}
    for(var i = 0 ;i<nums.length;i++){
        if(nums.indexOf(i+1)<0){
            return i+1;
        }
    }
    return nums.length+1;
};
//  1.首先如果是 空数组 直接返回  1
//  2. 循环 数组因为 假如数组长度为 10 那么如果没有missing数字的话 里面最大的数组也就是 10 那这个循环 就以arr的length 就行了
//     如果有少了正整数 直接返回那个数字
//  3. 如果 全都有了 返回 length+1；
