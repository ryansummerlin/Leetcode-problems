// Given the root of a binary search tree, and an integer k, return the kth smallest value (1-indexed) of all the values of
// the nodes in the tree.


// The key insight here is understanding the order of a traversal of a BST. If you run a depth first search
// and keep going left until you hit a null value, that will be your smallest value. Therefore, if you push
// that value to the array after you've gone as far left as possible, then once you've finished the dfs
// you will have an array with the values in order. From there, you just return the array at the desired index.



var kthSmallest = function(root, k) {
    let arr = [];
    const dfs = function(root) {
        if (!root) return;

        dfs(root.left);
        arr.push(root.val);
        dfs(root.right);
    }

    dfs(root);

    return arr[k - 1];
};
