// https://leetcode-cn.com/problems/minimum-index-sum-of-two-lists/


/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
    let minIndexCount = Infinity;
    let sameFavoriteList = [];
    list1.forEach((val, index) => {
        let indexIn2 = list2.indexOf(val);
        if (indexIn2 >= 0) {
            let curCount = indexIn2 + index;
            if (curCount < minIndexCount) {
                minIndexCount = curCount;
                sameFavoriteList = [val];
            } else if (curCount === minIndexCount) {
                sameFavoriteList.push(val);
            }

        }
    })

    return sameFavoriteList;
};