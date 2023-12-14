// Given an integer array nums where the elements are sorted in ascending order, convert it to a height-balanced binary search tree.



// I struggled with this one more than I should have and had to look up the solution but it ends up being a very simple
// recursive function. The key to understanding how to do this is the fact that the tree has to be balanced. Since
// the array is already sorted, you take the midpoint of the array as the root, and can complete the tree by doing this over
// and over again until you have the entire tree. Time complexity O(n), space complexity O(n).



var sortedArrayToBST = function(nums) {
    if (!nums.length) return null;
    let mid = Math.floor(nums.length / 2);
    let node = new TreeNode(nums[mid]);
    node.left = sortedArrayToBST(nums.slice(0, mid));
    node.right = sortedArrayToBST(nums.slice(mid + 1, nums.length));
    return node;
};
