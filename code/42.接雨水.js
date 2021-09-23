// https://leetcode-cn.com/problems/trapping-rain-water/

/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    if(height.length < 2){
        return 0;
    }
    let count = 0;
    let len = height.length;

    let maxsOnleft = [];
    let maxsOnRight = [];
    let max_l = height[0];
    let max_r = height[len - 1];
    
    for(let i = 0; i < len; i++){
        maxsOnleft[i] = max_l = Math.max(max_l , height[i]);
        maxsOnRight[len-1-i] = max_r = Math.max(height[len-1 - i], max_r);
    }

    height.forEach((val , index)=>{
        count += Math.min(maxsOnRight[index] , maxsOnleft[index]) - val
    })
    return count;
};
console.log(trap([4,2,0,3,2,5]));