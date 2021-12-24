// https://leetcode-cn.com/problems/hamming-distance/


// 先转 二进制 再比较 
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
    let xStr = x.toString(2);
    let yStr = y.toString(2);
    console.log(xStr, yStr);
    let len = Math.max(xStr.length, yStr.length);
    let count = 0;
    let i = xStr.length - 1;
    let j = yStr.length - 1;
    while(i>=0 || j>=0){
        let xword = xStr[i] || '0';
        let yword = yStr[j] || '0';
        if (xword !== yword) {
            count++;
        }
        
        i--;
        j--;
    }

    return count;
};

console.log(hammingDistance(1,4));