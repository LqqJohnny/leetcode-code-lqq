// https://leetcode-cn.com/problems/majority-element-ii/
// 找出数组中出现次数超出 n/3 的数字


// hashmap 计数
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
    let map = [];
    let times = Math.ceil((nums.length+1) / 3); // +1 是为了兼容 刚好整除3 的情况
    
    nums.forEach(val=>{
        if(!map[val]){
            map[val] = 1;
        }else{
            map[val]++;
        }
    })

    let result = [];
    for (let key in map) {
        if(map[key] >= times){
            result.push(key);
        }
    }

    return result;
};