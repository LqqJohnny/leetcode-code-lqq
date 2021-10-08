// https://leetcode-cn.com/problems/lucky-numbers-in-a-matrix/

//  幸运数 ： 在同一行中最小 ， 在同一列中最大
// 思路：   循环找出每一行中的最小值， 再比较 他是不是那一列中的最大值

// 优化： 已经算出的 幸运数 所在列， 记录下来， 后续的行中最小数 若在列中， 直接跳过
/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var luckyNumbers = function (matrix) {
    let result = [];
    let hasLuckyColumn = [];
    matrix.forEach((arr , index)=>{
        let minValue = arr[0];
        let minIndex = 0;
        // 找到最小值 的 列数
        for (let i = 1; i < arr.length; i++) {
            if(arr[i] < minValue){
                minValue = arr[i];
                minIndex = i;
            }
        }
        if (hasLuckyColumn.indexOf(minIndex) < 0){
            
            //  验证 在在一列中  minValue 是否是最大值
            let isMaxInColum = true;
            for (let j = 0; j < matrix.length; j++) {
                const cur = matrix[j][minIndex];
                if(cur > minValue){
                    isMaxInColum = false;
                    break;
                }
            }
                
            if (isMaxInColum){
                result.push(minValue);
                hasLuckyColumn.push(minIndex);
            }
        }
    })

    return result;
};

let matrix = [[3, 7, 8], [9, 11, 13], [15, 16, 17]];
console.log(luckyNumbers(matrix));