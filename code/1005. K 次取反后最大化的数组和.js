// https://leetcode-cn.com/problems/maximize-sum-of-array-after-k-negations/


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 尽量把 数组中的 负数 转为正数 ，比较 k 和 数组中负数的个数
var largestSumAfterKNegations = function (nums, k) {
    // 所有的负数
    let negativeList = nums.filter(val=>val<0);
    // 所有的正数
    let positiveList = nums.filter(val => val >= 0);
    let count = 0;
    if(k >= negativeList.length){ 
        // 反转的次数 比负数总数量多， 那多出来的次数 如果是偶数 ，就不管 ,全部相加
        if ( (k - negativeList.length)%2 ===0){
            return nums.reduce((prev, cur) => Math.abs(cur) + Math.abs(prev));
        }else{
            // 如果是奇数就去反转最小的正数
            nums.sort((a, b) => Math.abs(a) - Math.abs(b));
            return -Math.abs(nums[0]) + nums.slice(1).reduce((prev , cur)=>{
                return prev + Math.abs(cur);
            })
        }
    }else{
        // k 少了 ， 反转次数少了， 还有几个负数没反转，没反转的尽量是绝对值最小的，这样可以保证和最大
        negativeList.sort((a, b) => b-a);
        
        let positiveCount = positiveList.reduce((prev, cur) => prev + cur);
        let negativeCount = negativeList.reduce((prev,cur,index)=>{
            if (index < negativeList.length - k){
                return prev + cur;
            }else{
                return prev - cur;
            }
        });

        return positiveCount + negativeCount;
    }
};
console.log( largestSumAfterKNegations([-2, 9, 9, 8, 4], 5) );