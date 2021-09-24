/**
 * @param {number[]} nums
 * @return {number}
 */

// 找到出现次数最多的数字 ， 返回第一次出现的index 和最后出现的 index 就是 最小数组

var findShortestSubArray = function (nums) {
    let map = {};
    // 统计 没个数字 出现的次数 
    let maxCountNumbers = [];
    let maxCount = 0;
    let firstIndexOfNumbers = {};
    let lastIndexOfNumbers = {};
    nums.forEach((val, i) => {
        if (map[val]) {
            map[val]++;
        } else {
            map[val] = 1;
            firstIndexOfNumbers[val] = i;
        }
        lastIndexOfNumbers[val] = i;

        if (map[val] > maxCount) {
            maxCount = map[val];
            maxCountNumbers = [val];
        } else if (map[val] === maxCount) {
            maxCountNumbers.push(val);
        }
    })
    let minLength = Infinity;
    maxCountNumbers.forEach(num => {
        minLength = Math.min(lastIndexOfNumbers[num] - firstIndexOfNumbers[num] + 1, minLength)
    })

    return minLength;
};