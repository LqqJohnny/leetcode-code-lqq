/** 在一个已排好序的数组中找数字 target的index ,若没有 插入的话 要插在哪里？
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    var idx = nums.indexOf(target);
    if(idx>-1){  // 数组中存在target
        return idx;
    }else{// 若不存在 则插入并排序 在找到index  这里使用for循环的话 ，时间复杂度会低一些
        
        nums.push(target);
        nums.sort(function(a,b){return a-b})
        return nums.indexOf(target);
    }
};
