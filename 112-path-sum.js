// Given the root of a binary tree and an integer targetSum, return true if the tree has a root-to-leaf path such
// that adding up all the values along the path equals targetSum. A leaf is a node with no children.


// simple dfs. If node = null, return false. Otherwise, check if it's a leaf node and the sum is equal and return true.
// If one of those conditions is false, run the dfs on the next two nodes. Time complexity O(n). Space complexity O(1).


var hasPathSum = function(root, targetSum) {
    if (!root) return false;
    let sum = 0;
    const dfs = function(node, sum) {
        // base case
        if (!node) return false;

        if (sum + node.val === targetSum && !node.right && !node.left) return true;

        return dfs(node.right, sum + node.val) || dfs(node.left, sum + node.val);
    }

    return dfs(root, sum);
};


// Refactored the code down here to make it a bit cleaner. Got rid of the dfs inside the function, added a sum variable
// and then made the original function the dfs. It actually runs slower on leetcode after doing this lol but I think it
// looks a bit cleaner.

var hasPathSum = function(root, targetSum, sum = 0) {
    if (!root) return false;

    if (!root.left && !root.right && root.val + sum === targetSum) return true;

    return hasPathSum(root.left, targetSum, sum + root.val) || hasPathSum(root.right, targetSum, sum + root.val);
};
