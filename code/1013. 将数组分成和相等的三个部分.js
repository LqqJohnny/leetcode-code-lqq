// https://leetcode-cn.com/problems/partition-array-into-three-parts-with-equal-sum/


/**
 * @param {number[]} arr
 * @return {boolean}
 */
var canThreePartsEqualSum = function (arr) {
    // 所有数字的总和
    let allSum = arr.reduce((last,cur)=>{
        return last+cur;
    });
    if (allSum % 3 !== 0){ //  如果不能平分三等分 直接返回false
        return false;
    }
    let sum = allSum / 3;
    let temp = 0;
    let count = 0;
    arr.forEach(val=>{
        temp += val;
        if(temp === sum){
            count++;
            temp=0;
        }
    })
    return count>=3; // 数组里全是0 的时候 ，会出现大于3个的情况
};

let arr = [0, 0, 0, 0]

console.log(canThreePartsEqualSum(arr));