// https://leetcode-cn.com/problems/minimum-difference-between-highest-and-lowest-of-k-scores/

// 先对数组排序， 在用移动窗口，窗口大小为K ， 去计算最小的差值

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var minimumDifference = function (nums, k) {
    let sortedNums = nums.sort((a,b)=>a-b);
    let left = 0;
    let right  = left + k - 1;
    let minDiff = sortedNums[sortedNums.length-1];
    while(right < sortedNums.length){
        if (sortedNums[right] - sortedNums[left] < minDiff){
            minDiff = sortedNums[right] - sortedNums[left];
        }
        left++;
        right++;
    }
    

    return minDiff;
};

let nums = [9], k = 1;

// console.log(minimumDifference(nums, k));