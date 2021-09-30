// https://leetcode-cn.com/problems/unique-number-of-occurrences/

/**
 * @param {number[]} arr
 * @return {boolean}
 */
// 对字母出现的次数做 统计 为 map , 再查看是否存在相同的次数

var uniqueOccurrences = function (arr) {
    let map = {};
    arr.forEach(val=>{
        if (map[val]){
            map[val]++;
        }else{
            map[val] = 1;
        }
    })

    let times = Object.values(map);
    let duplitedTimes = [...new Set(times)];

    return times.length === duplitedTimes.length;
};

console.log(uniqueOccurrences([1, 2, 2, 1, 1, 3]));