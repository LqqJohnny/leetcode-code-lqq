/** 找到nums中target的起始位置和最终位置
 *
 * 用js很简单 直接用 indexOf   和  lastIndexOf 就可找到且时间复杂度不高
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    var start = nums.indexOf(target);
    var end = nums.lastIndexOf(target);
    return [start,end];
};
//  ------- 2
var searchRange = function(nums, target) {
    var start = -1;
    var end = -1;
    for(var i = 0;i<nums.length;i++){
        if(nums[i]===target){
            if(start==-1){
                start=i
            }
            if(i>end){
                end=i;
            }
        }
    }
    return [start,end];
};
// -------  3
