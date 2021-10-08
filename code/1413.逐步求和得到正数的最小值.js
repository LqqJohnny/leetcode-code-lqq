// https://leetcode-cn.com/problems/minimum-value-to-get-positive-step-by-step-sum/

// 就是 在从左往右累加过程中 计算出最小值 min  然后 min+target >= 1

/**
 * @param {number[]} nums
 * @return {number}
 */
var minStartValue = function (nums) {
    let minValue = 0;
    let count = 0
    for (let i = 0; i < nums.length; i++) {
        count+=nums[i];
        if (count < minValue){
            minValue = count;
        }
    }

    return -minValue+1;
};