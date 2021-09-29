// https://leetcode-cn.com/problems/unique-email-addresses/

// 规则 ：  . 会删除   + 后面的字符会全部去除

/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function (emails) {
    let result = [];

    emails.forEach(val=>{
        let emailArr = val.split('@');
        let front = emailArr[0].replace(/\./g, '').replace(/\+(.*)/, '');
        let shakedEmail = front + '@'+ emailArr[1];
        if(result.indexOf(shakedEmail)<0){
            result.push(shakedEmail);
        }
    })

    return result.length;
};

let test = ["test.email+alex@leetcode.com", "test.email.leet+alex@code.com"]

// console.log(numUniqueEmails(test));