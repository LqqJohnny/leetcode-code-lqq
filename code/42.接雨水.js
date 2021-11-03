// https://leetcode-cn.com/problems/trapping-rain-water/

// 动态规划？
// 先一遍循环，计算 每一个 点 ， 左右的最高柱子， 这样的话， 这一个点能装的雨水 = min(左边最高柱子,右边最高柱子) - 该点的高度 
// 用这个工时 再去计算 所有各自能装的雨水 即可
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if(height.length < 2){
        return 0;
    }
    let len = height.length;

    let maxsOnleft = [];
    let maxsOnRight = [];
    let max_l = height[0];
    let max_r = height[len - 1];
    // 左右 同时计算，一次循环把左右最大值都算出来
    for(let i = 0; i < len; i++){
        maxsOnleft[i] = max_l = Math.max(max_l , height[i]);
        maxsOnRight[len-1-i] = max_r = Math.max(height[len-1 - i], max_r);
    }

    let count = 0;
    height.forEach((val , index)=>{
        count += Math.min(maxsOnRight[index] , maxsOnleft[index]) - val
    })
    return count;
};
console.log(trap([4,2,0,3,2,5]));