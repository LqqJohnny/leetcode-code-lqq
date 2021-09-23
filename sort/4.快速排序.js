// 快速排序
// nlogn
// 随意取一个数作为 基准， 循环数组 ， 将比基准小的数 放在左边 ， 比基准大的数放在右边。 
// 然后递归 处理 基准左右两个区域

let array = [11, 2, 3, 13, 34, 12, 1, 31]


// 简单易懂 ， 但是效率不高，时间复杂度稍高
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let middle = Math.floor(array.length / 2);
    let middleValue = array.splice(middle, 1)[0];
    let leftArray = [];
    let rightArray = [];

    array.forEach(val => {
        if (val >= middleValue) {
            rightArray.push(val)
        } else {
            leftArray.push(val)
        }
    })

    return quickSort(leftArray).concat([middleValue], quickSort(rightArray));
}

// console.log(quickSort(array.slice()));






// 优化  
function quickSort2(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivot = patition(array, left, right);
        quickSort2(array, left, pivot - 1);
        quickSort2(array, pivot + 1, right);
    }

    return array;
}

function patition(array, left, right) {
    let pivot = array[left]
    let i = left, j = right;

    while (i < j) {
        while (array[j] > pivot && i < j) {
            j--
        }
        while (array[i] <= pivot && i < j) {
            i++
        }
        swap(array, i, j);
    }
    swap(array, left, i);

    return i;
}

console.log(quickSort2(array.slice()));


// 工具函数 -- 交换位置
function swap(A, i, j) {
    const t = A[i];
    A[i] = A[j];
    A[j] = t;
}