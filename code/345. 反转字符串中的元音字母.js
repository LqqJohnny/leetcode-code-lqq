// https://leetcode-cn.com/problems/reverse-vowels-of-a-string/



/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    let arr = s.split('');
    let metaWords = {
        a: true,
        e: true,
        i: true,
        o: true,
        u: true,
        A: true,
        E: true,
        I: true,
        O: true,
        U: true,
    };

    let left = 0;
    let right = s.length-1;
    while(left < right){
        if (metaWords[arr[left]] && metaWords[arr[right]]){
            let temp = arr[left];
            arr[left] = arr[right];
            arr[right] = temp;
            left++;right--;
        } else {
            if (!metaWords[arr[left]]) {
                left++;
            }
            if (!metaWords[arr[right]]) {
                right--;
            }
        }
    }
    return arr.join('');
};

console.log(reverseVowels('leetcode'));