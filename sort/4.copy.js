// 快速排序
// nlogn
// 随意取一个数作为 基准， 循环数组 ， 将比基准小的数 放在左边 ， 比基准大的数放在右边。 
// 然后递归 处理 基准左右两个区域

let array = [11, 2, 3, 13, 34, 12, 1, 31]


function quickSort(array, left = 0, right = array.length - 1) {
    if (left < right) {
        let pivot = pivotion(array, left, right);
        quickSort(array, left, pivot - 1);
        quickSort(array, pivot + 1, right);
    }
    return array;
}
// 选取一个基准 ， 对数组遍历分左右两边， 并把这个基准放到对应的位置 并返回。
// 从首尾分别开始找。
function pivotion(array, left, right) {
    let pivotVal = array[left];
    let start = left;
    let end = right;
    while (start < end) {
        while (start < end && array[end] > pivotVal) {
            end--;
        }
        while (start < end && array[start] <= pivotVal) {
            start++;
        }
        swap(array, start, end);
    }
    swap(array, left, start);

    return start;
}

function swap(array, i, j) {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}


console.log(quickSort(array));