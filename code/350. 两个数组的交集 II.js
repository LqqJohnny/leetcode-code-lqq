// https://leetcode-cn.com/problems/intersection-of-two-arrays-ii/


/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let result = [];

    // 对两个数组进行 计数
    let map1 = getNumberMap(nums1);
    let map2 = getNumberMap(nums2);
    
    for(let num in map1){
        if( map2[num] ){
            let count = Math.min(map1[num] , map2[num]);
            result.push(...Array(count).fill(num));
        }
    }

    return result;
    
    function getNumberMap(array){
        let map = {};
        array.froEach(val=>{
            if(map[val]){
                map[val]++;
            }else{
                map[val] = 1;
            }
        })
        return map;
    }
};