// https://leetcode-cn.com/problems/permutation-in-string/

// 滑动窗口 
/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    // 先对 s1 进行 map 计数
    let need = {};
    for (let i = 0; i < s1.length; i++) {
        need[s1[i]] = (need[s1[i]] || 0) + 1;
    }
    // 用移动窗口法 在s2中寻找 和 map1 里面的次数相同的 子串
    let left = 0;
    let right = 0;
    let win = {};
    let valid = 0; // 已经足数的字母个数
    // 窗口加入新元素
    while(right < s2.length){
        let addedWord = s2[right];
        right++;
        if (need[addedWord]){
            win[addedWord] = (win[addedWord] || 0) + 1;
            if (win[addedWord] === need[addedWord]){
                valid++;
            }
        }
        // 当向窗口中加入的字母个数超过了 s1 的长度， 说明有可能已经满足了，现在缩减掉左边多余的，然后比较满不满足
        if(right - left >= s1.length){
            // 如果匹配的字母个数 和需要的刚好相等了， 说明刚好找到。
            if(valid === Object.keys(need).length){
                return true;
            }
            // 说明多了，需要移除掉left边一些多余的字母
            let deleteWord = s2[left];
            left++;
            if(need[deleteWord]){
                if (need[deleteWord] === win[deleteWord]) {
                    valid--;
                }
                win[deleteWord]--;
            }
            
        }
    }

    return false;
};