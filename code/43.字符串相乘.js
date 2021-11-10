// https://leetcode-cn.com/problems/multiply-strings/


/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    let len1 = num1.length;
    let len2 = num2.length;


    let numArr = [];
    let addOne = 0;
    for (let i = len1-1; i >= 0; i--) {
        const curNum1 = num1[i];
        let productStr = '';
        for (let j = len2-1; j >=0 ; j--) {
            const curNum2 = num2[j];
            let sum = Number(curNum1) * Number(curNum2) + addOne;
            if (sum >= 10){
                addOne = 1;
                productStr = (sum - 10) + productStr;
            }else{
                addOne = 0;
                productStr = sum + productStr;
            }
        }
        // addOne 可能还有 进1
        if (addOne===1){
            productStr = '1' + productStr;
            addOne = 0;
        }
        // 得到了一个 乘积
        numArr.push(productStr);
    }
    console.log(numArr);

    let resultArr = [];
    let n = 1;
    while (n > 0){
        let count = 0;
        for(let i = 0;i < n ; i++){
            count += Number(numArr[numArr.length - n + i]) || 0;
        }
        console.log(count);
        if(count === 0){
            break;
        }
        resultArr.unshift(count);
        count = 0;
        n++;
    }

    return resultArr.join('');
};


let num1 = "123", num2 = "456"
console.log(multiply(num1 , num2));
/**
 *  输入: num1 = "1231121323123123123123123123123", num2 = "456123123123123123123123123123143"

    123 
    456
    -----
    738
    888
    888
    ***
    ***
    ***
 */