// 350. 两个数组的交集 II
// 给定两个数组，编写一个函数来计算它们的交集。
// 跟 349 题目类似 不过重复的 数字 不会只当成一次。
// nums1 = [1,2,2,1], nums2 = [2,2] 结果就是 [2 , 2]; 而不是 [2]

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
    let map = {};
    let result = [];
    for(let i = 0 ;i<nums1.length;i++){
        if(map[nums1[i]]){
            map[nums1[i]]++;
        }else{
            map[nums1[i]] = 1;
        }
    }
    for(let j = 0 ;j<nums2.length;j++){
        if(map[nums2[j]]){
            map[nums2[j]]--;
            result.push(nums2[j]);
        }
    }
    return result;
};

console.log(intersect([1,2,2,1] , [2,2]));