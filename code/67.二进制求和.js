// https://leetcode-cn.com/problems/add-binary/

/**
 * 
输入: a = "11", b = "1"
输出: "100"

输入: a = "1010", b = "1011"
输出: "10101"


就和 十进制的 加法一样（满10进1），每个位置上的和等于2了， 就进1 ，

 */
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
    let i = a.length-1;
    let j = b.length-1;
    let sum = '';
    let plus = 0
    while(i >= 0 || j >= 0){
        let count = (Number(a[i]) || 0) + (Number(b[j]) || 0) + plus;
        if (count >= 2){
            plus = 1;
            sum = (count-2) + sum;
        }else{
            sum = count + sum;
            plus = 0;
        }
        i--; j--;
    }

    return plus ? plus+sum : sum;
}
let a = "1111", b = "1111"
console.log(addBinary(a,b));