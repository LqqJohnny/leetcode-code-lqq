// https://leetcode-cn.com/problems/x-of-a-kind-in-a-deck-of-cards/submissions/

/**
 * @param {number[]} deck
 * @return {boolean}
 */
var hasGroupsSizeX = function (deck) {
    if (deck.length === 1) {
        return false;
    }
    let map = {};
    deck.forEach(val => {
        if (map[val]) {
            map[val]++;
        } else {
            map[val] = 1;
        }
    })
    // 找出最大公约数 ？ 
    // 如果最大公约数 大于等于 2 则返回 true
    let timesArr = [...new Set(Object.values(map))];
    let result = 1;
    if (timesArr.length === 1) {
        return true;
    }
    for (let i = 1; i < timesArr.length; i++) {
        let gys = gcd(timesArr[i], timesArr[i - 1]);
        if (gys === 1) {
            return false;
        }
    }

    return true;
};

// 求 两个数之间的 最大公约数
function gcd(a, b) {
    if (b == 0) {
        return a;
    }
    var r = a % b;
    return gcd(b, r);
}