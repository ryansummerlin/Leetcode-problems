// Given the root of a binary tree, invert the tree, and return its root.


// this is pretty straightforward with recursion. You just traverse the tree and on each node you swap the root.left and root.right.
// Time complexity O(n), space complexity O(1).

var invertTree = function(root) {
    const invert = function(root) {
        // base case
        if (!root) return

        [root.left, root.right] = [root.right, root.left];
        invert(root.left);
        invert(root.right);
    }

    invert(root);
    return root;
};
