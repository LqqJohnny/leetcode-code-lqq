// https://leetcode-cn.com/problems/ransom-note/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
    let magzineArr = magazine.split('');
    for (let i = 0; i < ransomNote.length; i++) {
        let index = magzineArr.indexOf(ransomNote[i]);
        if(index>=0){
            magzineArr.splice(index , 1);
        }else{
            return false;
        }
    }
    return true;
};


// 优化 ： 使用 magzine  计数法 对两个字符串出现的字符 进行计数 ，再去遍历 ransomnode， 
// 在hash中每找到一个 ，数量 - 1 ，如果找不到了，就返回false