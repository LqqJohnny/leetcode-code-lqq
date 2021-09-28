// https://leetcode-cn.com/problems/last-stone-weight/


/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
    // 1. 先对所有石头排序
    stones.sort((a, b) => b - a);

    while(stones.length>1){
        // 2. 碰撞后 删除前两个 剩下的石块 插入排序 放回数组
        let two = stones.splice(0, 2);
        let remain = two[0] - two[1];

        if (remain > 0) {
            //  将 remain 插如到 stones, 排序
            stones.push(remain);
            stones.sort((a, b) => b - a);
        }
    }
    return stones[0] || 0;
};

// console.log(lastStoneWeight([2, 7, 4, 1, 8, 1]));