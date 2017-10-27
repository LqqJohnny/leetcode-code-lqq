/**
 *
 *
Window position                Median
---------------               -----
[1  3  -1] -3  5  3  6  7       1
 1 [3  -1  -3] 5  3  6  7       -1
 1  3 [-1  -3  5] 3  6  7       -1
 1  3  -1 [-3  5  3] 6  7       3
 1  3  -1  -3 [5  3  6] 7       5
 1  3  -1  -3  5 [3  6  7]      6
 *
 *
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var medianSlidingWindow = function(nums, k) {
    var res = [];
    for(var i = 0 ;i<nums.length-k+1;i++){
        var _arr = nums.slice(i,i+k);
        //排序
        _arr = _arr.sort(function(a,b){return a-b;})
        // 计算中位数
        if(k%2==0){  // k is 偶数
            var median = (_arr[k/2] + _arr[k/2-1])/2;
            res.push(median);
        }else{    //   k is 奇数
            res.push(_arr[Math.floor(k/2)]);
        }
    }
    return res;
};
//  本方法超过了leetcode 上的限时 待改善
