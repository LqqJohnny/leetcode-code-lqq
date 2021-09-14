// 选择排序

/** 思路
 * 
 * 和冒泡排序的逻辑类似，
 * 选择排序是选中剩下的未排序数字中最大的数字， 把这个数字直接和未排序数组最后面的数字交换
 * 和冒泡的区别是 在内层循环中，全是比较，在比较完最后，只进行一次交换，而不是每次比较之后都交换。
 * 
 *  */

let arr = [1, 2, 3, 3, 3, 6, 7];


function selectSort(array) {
    let count = 0;
    let len = array.length;
    for (let i = len - 1; i >= 0; i--) {
        let maxIndex = 0;
        let maxVal = array[0];
        for (let j = 1; j <= i; j++) {

            count++;

            if (array[j] > maxVal) {
                maxVal = array[j]
                maxIndex = j;
            }
        }
        array[maxIndex] = array[i];
        array[i] = maxVal;
    }

    console.log('【无优化】比较次数：', count);

    return array;
}

console.log(selectSort(arr.slice()));


// 优化1 ： 双路优化 
// 上面代码在内层循环中， 找到了最大值 放在在后面， 
// 同时 可以找一个最小值，放在最前面 这样执行次数将减少一半 ， 
// 虽然复杂度 还是 O(n^2)  但是循环次数确实减小了一半 得到了优化
function selectSort2(array) {
    let count = 0;
    let len = array.length;
    for (let i = len - 1; i >= 0; i--) {
        let maxIndex = i;
        let maxVal = array[i];
        let minIndex = len - 1 -i;
        let minVal = array[minIndex];

        for (let j = len - 1 - i ; j <= i; j++) {

            count++;

            if (array[j] > maxVal) {
                maxVal = array[j]
                maxIndex = j;
            } else if (array[j] < minVal) {
                minVal = array[j];
                minIndex = j;
            }

        }

        if(maxVal === minVal){
            console.log(minIndex , maxIndex , array);
            break;
        }

        array[minIndex] = array[len - 1 - i];
        array[len - 1 - i] = minVal;

        array[maxIndex] = array[i];
        array[i] = maxVal;
    }

    console.log('【双路优化】比较次数：', count);

    return array;
}
// [1, 22, 13, 51, 43, 6, 7]
console.log(selectSort2(arr.slice()));
