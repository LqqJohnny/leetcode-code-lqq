// https://leetcode-cn.com/problems/distance-between-bus-stops/

/**
 * @param {number[]} distance
 * @param {number} start
 * @param {number} destination
 * @return {number}
 */
var distanceBetweenBusStops = function (distance, start, destination) {
    // 求出 正反 距离 取最小值 
    let distance_forward = 0;
    let left = Math.min(start, destination)
    let right = Math.max(start, destination)
    for (let i = left; i < right; i++) {
        distance_forward += distance[i];
    }

    // 求出 反向的距离  就是总距离 减去 正向距离
    let distance_reverse = 0;
    distance_reverse = distance.reduce((a, b) => a + b) - distance_forward;
    return Math.min(distance_forward, distance_reverse);

};

let distance = [7, 10, 1, 12, 11, 14, 5, 0], start = 7, destination = 2;

console.log(distanceBetweenBusStops(distance, start, destination));