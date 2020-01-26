/**
      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

返回 3。和等于 8 的路径有:

1.  5 -> 3
2.  5 -> 2 -> 1
3.  -3 -> 11
 */

var pathSum = function (root, sum) {
    if (!root) return 0;
    const test = (root, sum) => {
        let count = 0;
        const getNum = (node, sum) => {
            if (!node) return 0;
            if (node.val === sum) {
                count++
            } else {
                getNum(node.left, sum - node.val);
                getNum(node.right, sum - node.val);
            }
        }
        getNum(root, sum);
        return count;
    }

    return getNum(root, sum - root.val) + pathSum(root.left, sum) + pathSum(root.right, sum);
};