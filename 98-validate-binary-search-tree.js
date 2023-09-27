// Given the root of a binary tree, determine if it is a valid binary search tree (BST).

// A valid BST is defined as follows:

// The left
// subtree
//  of a node contains only nodes with keys less than the node's key.
// The right subtree of a node contains only nodes with keys greater than the node's key.
// Both the left and right subtrees must also be binary search trees.


// I basically had this solution mapped out but unfortunately wasn't able to implement it and had to go to youtube.
// Need to do more work with recursion but the idea is that every time you recurse left or right, there is a minimum
// or a maximum value, which cannot be exceeded in either direction. When you go left, your node needs to be less than
// a given max and greater than the given min. Time complexity O(n), space complexity O(n).

var isValidBST = function(root) {
    const isValid = function(root, min, max) {
        if (!root) return true;
        if (root.val <= min || root.val >= max) return false;

        return isValid(root.left, min, root.val) && isValid(root.right, root.val, max);
    }

    return isValid(root, -Infinity, Infinity);

};
