/** zigzag Conversion
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
 var convert = function(s, numRows) {
     // 特殊情况
     if(numRows==1){
         return s;
     }
     // 先创建 numRows 个数组
     var arrs = [];
     for(var i = 0 ;i<numRows;i++){
         arrs.push([]);
     }
     var delta = 1 ; // 表示 方向的。
     var nowIndex = 0 ; // 初始存入的数组 index
     // 循环字符串 s 逐个放入数组
     for(var j = 0;j<s.length;j++){

         arrs[nowIndex].push(s[j]);
         nowIndex+=delta;
         if(nowIndex==0){delta=1};
         if(nowIndex==numRows-1){delta=-1};
     }
     var ret = "";
     arrs.forEach(function(val){
         ret+=val.join('');
     })
     return ret;
 };
