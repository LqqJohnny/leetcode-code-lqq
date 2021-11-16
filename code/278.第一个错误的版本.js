// https://leetcode-cn.com/problems/first-bad-version/



/**
 * Definition for isBadVersion()
 * 
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

let isBadVersion = function (n){
    return n >=5
}


// 尽量少的调用 isBadVersion 那就是使用 二分法

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        let start = 1;
        let end = n;
        while(start <= end){
            let center = start + Math.floor((end - start)/2);
            if (isBadVersion(center)){
                // 中位数 是坏的版本， 那第一个坏版本 在中位数左边
                end = center - 1;
            }else{ // 中位数 是好版本， 则第一个坏版本 在中位数 右边
                start = center + 1;
            }
        }

        return start;
    };
};

let fn = solution(isBadVersion);
console.log(fn(90));