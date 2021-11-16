/** 在一个已排好序的数组中找数字 target的index ,若没有 插入的话 要插在哪里？
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 时间复杂度 O(n)

var searchInsert = function(nums, target) {
    var idx = nums.indexOf(target);
    if(idx>-1){  // 数组中存在target
        return idx;
    }else{// 若不存在 则插入并排序 在找到index  这里使用for循环的话 ，时间复杂度会低一些
        
        nums.push(target);
        nums.sort(function(a,b){return a-b})
        return nums.indexOf(target);
    }
};


// 题目要求的 时间复杂度是 O(logn)
// 使用二分法
function searchInput2(nums, target){
    let start = 0;
    let end   = nums.length - 1;
    while(start <= end){
        let center = start + Math.floor((end - start)/2);
        console.log(start, end , center);
        if (nums[center] === target){ // 找到了target 直接返回
            // 连续的重复数字，取第一个
            while (nums[center - 1] === nums[center]){
                center--;
            }
            return center;
        }else if(nums[center] > target){ // target 在 center 左边
            end = center - 1;
        }else{
            start = center + 1;
        }
    }
    let idx = Math.min(start, end);
    return nums[idx] > target ? idx : idx + 1;
}

let nums = [1, 3, 5, 6], target = 1;

console.log(searchInput2(nums, target));