// https://leetcode-cn.com/problems/valid-palindrome-ii/

// 注意 ： substring（a,b） 不包含 b位置的 字母 ， 

/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s,hasDeleted=false) {
    let left = 0;
    let right = s.length-1;
    while(left < right){
        if(s[left] === s[right]){
            left++;right--;
        } else if (!hasDeleted){
            return  validPalindrome(s.substring(left+1 , right+1) , true)
                    ||
                    validPalindrome(s.substring(left, right), true)
        }else{
            return false;
        }
    }
    return true;
};

console.log(validPalindrome("deeee"));