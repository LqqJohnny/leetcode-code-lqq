// 冒泡排序
/**  思路 
 * 双层循环
 * 每一次遍历都找到当前剩余的数中最大的值，往最后面排

 * 时间复杂度：  O(n^2) 
*/
let arr = [1, 2, 3, 5, 4, 6, 7];

function bubbleSort(array) {
    //  对比较次数的计数 用来直观的比较 【优化函数】 的效果
    let count = 0;

    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length-1-i ;j++){

            count++;

            if (array[j] > array[j+1]){
                var temp = array[j];
                array[j] = array[j+1];
                array[j+1] = temp;
            }
        }
    }

    console.log('【无优化】比较次数： ' + count);
    
    return array;
}

console.log(bubbleSort(arr.slice()));


// 2. 外层循环优化
// 若某一趟外层循环 ， 没有发生数字的交换 ， 则说明剩下的所有数字 都已经满足 从小到大排序 ， 不需要在进行下一趟外层循环， 
// 用flag 标记，避免多余循环
function bubbleSort2(array) {
    //  对比较次数的计数 用来直观的比较 【优化函数】 的效果
    let count = 0 ;

    for (let i = 0; i < array.length; i++) {
        let changeFlag = false;
        for (let j = 0; j < array.length - 1 - i; j++) {

            count++;

            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                changeFlag = true;
            }
        }

        if (!changeFlag){
            break;
        }
    }

    console.log('【外层循环优化】比较次数： '+count);

    return array;
}
console.log(bubbleSort2(arr.slice()));




// 3. 内层循环优化
// 在 优化2 的基础上， 进一步对内层循环做优化 ， 记录上一次内存循环中 最后一次交换数字的地方， 下一次内层循环直接到那里就截止了，
// 因为在那之后的数字都是不需要交换的。 

function bubbleSort3(array) {
    //  对比较次数的计数 用来直观的比较 【优化函数】 的效果
    let count = 0;
    let lastChangeIndex = array.length - 1;
    let tempIndex = 0;

    for (let i = 0; i < array.length; i++) {
        let changeFlag = false;

        for (let j = 0; j < lastChangeIndex; j++) {

            count++;

            if (array[j] > array[j + 1]) {
                var temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
                changeFlag = true;
                tempIndex = j;
            }
        }

        lastChangeIndex = tempIndex;
        if (!changeFlag) {
            break;
        }
    }

    console.log('【外层+内层循环优化】比较次数： ' + count);

    return array;
}
console.log(bubbleSort3(arr.slice()));



// 总结 :  优化 思维 就是 尽可能的 减少没必要的/重复的 比较步骤， 但是算法复杂度还是 O(n^2)
