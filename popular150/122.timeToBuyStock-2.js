// 122. 买卖股票的最佳时机||

// https://leetcode-cn.com/problems/best-time-to-buy-and-sell-stock-ii/

// 假设每天都交易 ， 把所有能赚钱的交易所得收益 汇总。 就是最佳交易策略。

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let count = 0;
    let buyPrice = null;
    for( let i = 0 ; i< prices.length ; i++ ){
        if(buyPrice === null){
            buyPrice = prices[i];
        }else if(prices[i]<buyPrice){
            buyPrice = prices[i];
        }else{
            count += prices[i] - buyPrice;
            buyPrice = prices[i];
        }
    }
    return count;
};