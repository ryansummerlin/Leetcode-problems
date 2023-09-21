// Given the root of a binary tree, return its maximum depth.

// A binary tree's maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.


// Simple depth first traversal but took me a bit longer than it should have given that it's coded easy on leetcode.
// Might be good to brush up on trees and learn how to do both iterative and recursive traversals


var maxDepth = function(root) {
    if (!root) return 0;
    let max = 0;

    const traverse = function(root, vals) {
        // base case
        if (!root) return;

        vals.push(root);
        max = Math.max(max, vals.length);

        traverse(root.left, vals);
        traverse(root.right, vals);

        vals.pop();
    }

    traverse(root, []);
    return max;
};
