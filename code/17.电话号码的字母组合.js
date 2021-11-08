/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
    if (!digits){
        return [];
    }
    let  map = {
        2:'abc',
        3:'def',
        4:'ghi',
        5:'jkl',
        6:'mno',
        7:'pqrs',
        8:'tuv',
        9:'wxyz',
    }

    let words = [];
    for (let i = 0; i < digits.length; i++) {
        words.push(map[digits[i]]);
    }
    function getCombines(array){
        let result = [];
        if(array.length===1){
            return array[0].split('');
        }
        let cur = array[0];
        let othersCombines = getCombines(array.slice(1));

        for (let i = 0; i < cur.length ; i++){
            const word = cur[i];
            othersCombines.forEach(val=>{
                result.push(word+val);
            })
        }
        return result;
    }

    return getCombines(words);

};

console.log(letterCombinations('2'));
// abc  def 