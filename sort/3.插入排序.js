// 插入排序  
// 抓扑克牌时候的排序 一样的原理， 逐个从待排序部分，取一个数字，在已排序部分去做比较，插入正确的位置。
let array = [23, 14, 21, 32, 12, 44, 21, 55];

function insertSort(array) {
    for (let i = 1; i < array.length; i++) {
        let current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

console.log(insertSort(array.slice()));

