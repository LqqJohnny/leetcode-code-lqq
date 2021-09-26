// https://leetcode-cn.com/problems/sort-array-by-parity/


/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function (nums) {

    nums.sort(function(a , b){
        if(a%2!==0 && b%2===0 ){
            return 1;
        }else{
            return -1;
        }
    })

    return nums;
};
