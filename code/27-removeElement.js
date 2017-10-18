/** 删除 nums 中 ===val 的值
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
  for(var i= 0 ;i<nums.length;i++){
      if(nums[i] === val){
          nums.splice(i ,1);
          i--;
      }
  }
    return nums.length;
};

// 就是一个去掉数组中等于 val 的值 遍历一遍就ok了
