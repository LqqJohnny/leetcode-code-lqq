// https://leetcode-cn.com/problems/relative-ranks/

// 思路： 首先这是一个排序。 对分数进行从大到小排序， 然后把原先的分数替换成 名次字符。
// 使用 选择排序的思路 ， 每一次遍历找到剩下分数中的最大值和他的 index ， 把 原数组的 index 的值换成 名次字符。 
// 然后把当前遍历数组中的index的值 改成-1  ， 下一轮遍历才能找到下一个最大的值。

/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
    let scores = score.slice(); // 复制一份 ， 避免操作修改了原数组
    let order = 1;
    let orderThreeText = { 1: "Gold Medal", 2: "Silver Medal", 3: "Bronze Medal" };
    let result = [];
    for (let i = 0; i < scores.length; i++) {
        // 每次循环都找到最大值 
        let maxVal = scores[0];
        let maxIndex = 0;
        for (let j = 1; j < scores.length; j++) {
            if (scores[j] > maxVal) {
                maxVal = scores[j];
                maxIndex = j;
            }
        }
        // 得到 当前循环 最大的值 和 位置
        let orderText = orderThreeText[order] || String(order);
        result[maxIndex] = orderText;
        order++; // 找下一个
        // 把最大数的值变为0 不然每次找到的最大数都是他 ， 但是不能删除，会破坏原有的顺序
        scores[maxIndex] = -1;
    }

    return result;
};