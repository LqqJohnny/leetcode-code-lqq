// https://leetcode-cn.com/problems/group-anagrams/

// 对每一个 字符串中的 字母 进行排序， 拍完序之后， 异位词的顺序就一样了，可以通过===来寻找。
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
    let sortedStrs = strs.map(str=>{
        let sorted = str.split('').sort().join('')
        return sorted;
    })
    let map = {};
    sortedStrs.forEach((val, index)=>{
        if (map[val]){
            map[val].push(strs[index])
        } else {
            map[val] = [strs[index]]
        }
    })

    return Object.values(map);

};
let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
console.log(groupAnagrams(strs));