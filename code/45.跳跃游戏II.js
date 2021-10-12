// https://leetcode-cn.com/problems/jump-game-ii/

// 计算跳到数组末尾最小的步数
// 贪心算法
// 要想迈的步数最少，那迈的幅度就要尽量大。最后一步要尽量的幅度最大。
// 所以最后一步要选在能到达重点的前提下，起点要尽量靠前，
// 所以就在数组中从左往右遍历，碰到的第一个满足能一步到终点的位置，就是最后一步的起点，也就是倒数第二个落脚点
// 然后再以 这个落脚点为终点，去找倒数第三个落脚点，以此类推，直到这个落脚点为 0 ，数组的起点。统计步数

/**
 * @param {number[]} nums
 * @return {number}
 */
var jump = function (nums) {
    let step = 0;
    let len = nums.length
    let end = len - 1;

    while (end > 0) {
        for (let i = 0; i < end; i++) {
            if (i + nums[i] >= end) {
                step += 1;
                end = i;
                break;
            }
        }
    }

    return step;
};

let arr = [2, 3, 1, 1, 4];

// console.log(jump(arr));