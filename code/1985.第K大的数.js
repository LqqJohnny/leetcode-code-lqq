// https://leetcode-cn.com/problems/find-the-kth-largest-integer-in-the-array/

// 排序 快速排序 ， 当较大数组的长度 大于K 了， 较小数组就不需要排序了

/**
 * @param {string[]} nums
 * @param {number} k
 * @return {string}
 */
var kthLargestNumber = function (nums, k) {
        let lefts = [];
        let same = [];
        let rights = [];
        let pivot = nums[0];
        
        for(let i = 0 ;i < nums.length ; i++){
            if (Number(nums[i]) > Number(pivot)){
                rights.push(nums[i]);
            } else if (Number(nums[i]) < pivot){
                lefts.push(nums[i]);
            }else{
                same.push(pivot);
            }
        }
        console.log(lefts , same , rights , k);
        //  判断 第k大的数 在哪个区间 
        if (rights.length < k){
            if(rights.length + same.length < k){
                let remain = k - rights.length - same.length;
                return kthLargestNumber(lefts, remain);
            }else{
                return pivot;
            }
        } else {
            // 刚好取rights 里 最小的数字 就是 第K大
            return kthLargestNumber(rights, k);
        }
};


let nums = ["0", "1", "1"], k = 1
console.log(kthLargestNumber(nums , k)); // 3