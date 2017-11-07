/**
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
    the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 *
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
     // 初始化 取数组第一个值
     var max_plus = nums[0];
     var max_arr= [nums[0]];

     for(var i =0 ;i<nums.length;i++){

         if(nums[i]>max_plus){
             max_plus = nums[i];
             max_arr= [nums[i]];
         }
         var _plus = nums[i];
         for(var j = i+1 ;j<nums.length;j++){
             _plus += nums[j];
             if(_plus > max_plus){
                 max_plus = _plus;
                 max_arr = nums.slice(i,j+1);
             }
         }
     }
     return max_plus;
     // 还可以额外输出 结果数组
    //  return max_arr;

 };
