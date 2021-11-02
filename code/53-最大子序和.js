/**
 * For example, given the array [-2,1,-3,4,-1,2,1,-5,4],
    the contiguous subarray [4,-1,2,1] has the largest sum = 6.
 *
 * @param {number[]} nums
 * @return {number}
 * 
 * fail: 超时  O(n^2)
 * 
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


// 动态规划 经典入门题
// dp[i-1] 如果 > 0 那dp[i] 就是这个正数+自身
// 如果 dp[i-1] 是负数， 则dp[i] 自立门户从头开始，它自己就是最大值

// O(n)
var maxSubArray2 = function (nums) {
    let dp = Array(nums.length);
    dp[0] = nums[0];
    for( let i = 1; i < nums.length; i++){
        if(dp[i-1] > 0){
            dp[i] = dp[i-1] + nums[i];
        }else{
            dp[i] = nums[i];
        }
    }

    return Math.max(...dp);
}

let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray2(arr));
