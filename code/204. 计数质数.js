// https://leetcode-cn.com/problems/count-primes/

// 埃式筛选法
// 等差数列

/**
 * @param {number} n
 * @return {number}
 */
var countPrimes = function (n) {
    let arr = new Array(n).fill(true); //  true 表示是质数
    let count = 0;
    for (let i = 2; i < n ; i++) {
        if(arr[i]){ // 当前 数字 质数
            count++;
            // 将质数的所有倍数 都 变成 false
            for (let j = 2*i; j < n; j+=i) {
                arr[j] = false;
            }
        }
    }
    return count;
};

console.log(countPrimes(22));

