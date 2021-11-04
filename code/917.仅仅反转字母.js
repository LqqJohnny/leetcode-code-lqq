// https://leetcode-cn.com/problems/reverse-only-letters/


/**
 * @param {string} s
 * @return {string}
 */
var reverseOnlyLetters = function (s) {
    // 左右双指针 
    let arr = s.split('');
    let left = 0 ; 
    let right  = s.length - 1;
    let reg = /^[A-Za-z]$/;
    while (left < right) {
        if (reg.test(s[left]) && reg.test(s[right])){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;right--;
        }else{
            if (!reg.test(s[left])) {
                left++;
            }
            if (!reg.test(s[right])) {
                right--;
            }
        }
    }
    return arr.join('');
};
let a = "Test1ng-Leet=code-Q!"
let b = "a-bC-dEf-ghIj"

console.log(reverseOnlyLetters(a));
