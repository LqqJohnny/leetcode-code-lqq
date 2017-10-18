/**  找出数组中所有 4个值的和等于target的组合
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function(nums, target) {
    var ret = [];
    var retString = []; // 用于判断是否 已存在
    for(let a = 0;a<nums.length-3;a++){
       var aa = nums[a]
       for(let b = a+1;b<nums.length-2;b++){
           var bb = nums[b];
            for(let c = b+1;c<nums.length-1;c++){
                var cc = nums[c];
                for(let d= c+1;d<nums.length;d++){
                    var dd = nums[d];
                    if(aa+bb+cc+dd === target){
                        var arr = [aa,bb,cc,dd];
                        arr.sort(function(a,b){return a-b});
                        if(retString.indexOf(arr.join(''))<0){
                            ret.push(arr);
                            retString.push(arr.join(''));
                        }
                    }
                }
            }
        }
   }
    return ret;
};
//  这个方法的耗时比较长 在leetcode上面跑回报超时  待改进

//  改进方法  网上找的
var fourSum = function(nums, target) {
    nums.sort(function(a,b){
        return a-b;
    });
    var len=nums.length,result=[];
    for(var i=0;i<len-3;i++){
        if(nums[i]===nums[i-1]){
            continue;
        }
        for(var j=i+1;j<len-2;j++){
            if(nums[j]===nums[j-1]&&j!==i+1){
                continue;
            }
            var low=j+1,high=len-1;
            while(low<high){
                var sum=nums[i]+nums[j]+nums[low]+nums[high];
                if(sum===target){
                    result.push([nums[i],nums[j],nums[low],nums[high]]);
                    do{
                     low++;
                    }while(nums[low]===nums[low-1]);
                }
                else if(sum<target){
                    low++;
                }
                else{
                    high--;
                }
            }
        }
    }
    return result;
};
