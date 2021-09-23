// 插入排序  
// 抓扑克牌时候的排序 一样的原理， 逐个从待排序部分，取一个数字，在已排序部分去做比较，插入正确的位置。
let array = [1, 33, 21, 41, 12, 211, 33];

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

// [1,3,2,41,1,2,3]
function insertSort2(array){
    for (let i = 1; i < array.length; i++) {
        let temp = array[i];
        for(let j = i-1 ; j>=0;j--){
            if(array[j] > temp){
                array[j+1] = array[j];
            }else{
                array[j+1] = temp;
                break;
            }
        }
    }
    return array;
}

console.log(insertSort2(array.slice()));

