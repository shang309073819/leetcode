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
    let count = 0;
    const getPath = (node, arr, sum) => {
        if (!node) return;
        arr.push(node.val);
        console.log(arr);
        getPath(node.left, arr, sum);
        getPath(node.right, arr, sum);
    }
    getPath(root, [], sum);
    return count;
};