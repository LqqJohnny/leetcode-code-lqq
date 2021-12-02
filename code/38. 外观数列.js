// https://leetcode-cn.com/problems/count-and-say/


/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let dp = ['1'];
    for(let i = 1 ; i < n ; i++){
        let lastOneStr = dp[i - 1]; // 1211
        let num = '';
        let count = 0;
        let curStr = '';
        for (let j = 0; j < lastOneStr.length; j++){
            if(num === ''){
                num = lastOneStr[j];
                count++;
            }else{
                if (num === lastOneStr[j]){
                    count++;
                }else{
                    curStr+= count+''+num;
                    count = 1; num = lastOneStr[j];
                }
            }
        }
        if(count>0){
            curStr += (count + '' + num);
        }
        dp[i] = curStr;
    }
    return dp[dp.length-1];
};

console.log(countAndSay(5));