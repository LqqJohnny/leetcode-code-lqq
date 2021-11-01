// https://leetcode-cn.com/problems/integer-to-roman/

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
    let map = [
        {value: 1000 , text: 'M' },
        { value: 900, text: 'CM' },
        { value: 500, text: 'D' },
        { value: 400, text: 'CD' },
        { value: 100, text: 'C' },
        { value: 90, text: 'XC' },
        { value: 50, text: 'L' },
        { value: 40, text: 'XL' },
        { value: 10, text: 'X' },
        { value: 9, text: 'IX' },
        { value: 5, text: 'V' },
        { value: 4, text: 'IV' },
        { value: 1, text: 'I' },
    ]

    let roman = '';
    let remain = num;
    while(remain > 0){
        for(let i= 0; i < map.length; i++){
            if(remain >= map[i].value){
                roman += map[i].text;
                remain -= map[i].value;
                break;
            }
        }
    }

    return roman;
};

console.log(intToRoman(4));