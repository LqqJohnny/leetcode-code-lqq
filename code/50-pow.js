/** 计算 x 的 n次方
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
// 使用js 自带的 Math 方法
var myPow = function(x, n) {
    return Math.pow(x,n);
};



/**
 * 不适用 Math.pow
 * 若 n = 0 返回 1
 * 若 n < 0 也就是求 1/x 的 |n| 次方 所以 x=1/x  n=-n;
 * 最后 用一个小技巧 极大的减少时间复杂度。
 *  x^10 --> (x^2)^5 --> (x^4)^2*(x^2)
 * 类似于上面的例子 本来需要 10 次的循环 现在只需要 3 次
 * 这个 小技巧 是重点
 */

var myPow2 = function(x, n) {
    if(n==0){return 1;}
    if(n<0){
        x=1/x;
        n=-n;
    }
    var res = 1;
    while(n > 0){
       if(n%2==1){
           res*=x;
       }
        x*=x;
        n=Math.floor(n/2);
    }
    return res;
};
