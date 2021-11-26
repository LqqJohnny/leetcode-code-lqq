// https://leetcode-cn.com/problems/populating-next-right-pointers-in-each-node/



function Node(val, left, right, next) {
   this.val = val === undefined ? null : val;
   this.left = left === undefined ? null : left;
   this.right = right === undefined ? null : right;
   this.next = next === undefined ? null : next;
}

// 广度优先算法 后序遍历
// 后序遍历，算出每一层 的 每一个节点的 next 。 同时将下一层的节点按照顺序放好，

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    let curNodes = [root];

    while(curNodes.length > 0){
        let nextLevelArray = [];
        let lastOne = null;
        for (let i = curNodes.length-1; i >= 0; i--) {
            const val = curNodes[i];
            if(val){
                val.next = lastOne;
                lastOne = val;
                nextLevelArray.unshift(val.right);
                nextLevelArray.unshift(val.left);
            }
        }
        curNodes = nextLevelArray;
    }


};