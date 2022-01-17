/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

/** 解题思路
 * 贪心算法 局部最优解推导出全局最优解
 * 本题， 从左到右 得出 每一个位置的右侧最优解
 * 再从右到左，得出每一个位置的 左侧最优解 
 * 即得到最后的全局最优解
 * */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let candys = [1];
    // right-side
    for (let i = 1; i < ratings.length; i++) {
        if (ratings[i] > ratings[i-1]){
            candys[i] = candys[i-1] + 1;
        } else{
            candys[i] = 1;
        }
    }
    // left-side
    for (let i = ratings.length - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candys[i] = Math.max(candys[i], candys[i+1]+1);
        }
    }
    let count = candys.reduce((cou , cur)=>{
        return cou + cur;
    })
    return count;
}; 
// @lc code=end


let ra = [1, 0, 2];
console.log(candy(ra));

