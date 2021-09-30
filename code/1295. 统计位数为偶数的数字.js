// https://leetcode-cn.com/problems/find-numbers-with-even-number-of-digits/


/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
    let  count  = 0;
    nums.forEach(val=>{
        if(String(val).length%2 === 0){
            count++;
        }
    })

    return count;
};