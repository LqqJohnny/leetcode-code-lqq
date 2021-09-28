// https://leetcode-cn.com/problems/height-checker/


/**
 * @param {number[]} heights
 * @return {number}
 */

// 排序后 再比较每一个位置上的数字是否相同 
var heightChecker = function (heights) {
    let expected = heights.slice().sort((a, b) => a - b);
    let count = 0;

    expected.forEach((val, index) => {
        if (val !== heights[index]) {
            count++;
        }
    })

    return count;
};


// 按照算法复杂度 来看 ， 方法2 是要好一点， 但是实际上， js中 数组的 slice 和 sort 性能很好， 
// 当数据量比较少的时候， 方法1 的耗时其实是更短的

// 优化 ： 数字不同， 说明该数字和其他数字交换过，而排序算法中的 选择排序就是会选中一个最大值 ， 去交换位置
var heightChecker2 = function (heights) {
    let changedIndex = new Set();
    // 选择排序算法
    let len = heights.length;
    for (let i = len - 1; i >= 0; i--) {
        let maxIndex = 0;
        let maxVal = heights[0];
        for (let j = 1; j <= i; j++) {

            if (heights[j] > maxVal) {
                maxVal = heights[j]
                maxIndex = j;
            }
        }
        if (maxIndex !== i && maxVal > heights[i]) {
            changedIndex.add(maxIndex);
            changedIndex.add(i);
        }

        heights[maxIndex] = heights[i];
        heights[i] = maxVal;
    }

    return changedIndex.size;
};