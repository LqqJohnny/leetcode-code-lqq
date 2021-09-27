// https://leetcode-cn.com/problems/shortest-distance-to-a-character/

/**
 * @param {string} s
 * @param {character} c
 * @return {number[]}
 * 
 * s = "loveleetcode", c = "e"
 * 输出：[3,2,1,0,1,0,0,1,2,2,1,0]
 */
var shortestToChar = function (s, c) {
    // 找出 所有 字母 c 的位置， 然后一个个的对比， 去最小距离
    let allCIndex = [];
    for (let i = 0; i < s.length; i++) {
        if (s[i] === c) {
            allCIndex.push(i);
        }
    }

    let shortestIndex = [];
    for (let i = 0; i < s.length; i++) {
        let nearest = s.length;
        allCIndex.forEach((cIndex) => {
            nearest = Math.min(nearest, Math.abs(cIndex - i));
        })
        shortestIndex[i] = nearest;
    }

    return shortestIndex;
};

//  * 输出：[3, 2, 1, 0, 1, 0, 0, 1, 2, 2, 1, 0]