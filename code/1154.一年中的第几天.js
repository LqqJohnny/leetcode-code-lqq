// https://leetcode-cn.com/problems/day-of-the-year/

/**
 * @param {string} date
 * @return {number}
 */
var dayOfYear = function (date) {
    let target = new Date(date);
    let year = target.getFullYear();
    let firstDay = new Date(year, 0, 0);
    // 一天是 24*60*60*1000 = 86400000 ms
    let days = (target - firstDay) / 86400000;
    return Math.floor(days);
};

console.log(dayOfYear("2004-03-01"));

