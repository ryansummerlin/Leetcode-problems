// Given two integer arrays preorder and inorder where preorder is the preorder traversal of a binary tree and
// inorder is the inorder traversal of the same tree, construct and return the binary tree.


// This one is tricky and I had to go online to find the answer but I was actually grasping in the correct direction
// initially even though I wasn't able to code it out on my own. Basically, the insight is understanding that
// pre order goes root -> left -> right and inorder goes left -> root -> right. The first value in pre order
// is going to be the root, and you can figure out how many values are going on the left branch by using the indexOf
// the in order traversal and calling a recursive function. The code is probably more intuitive than this explanation
// and this is a good question/solution to come back to in reference for navigating trees.


var buildTree = function(preorder, inorder) {
    // base case
    if (!preorder.length || !inorder.length) return null

    const root = new TreeNode(preorder[0]);
    const mid = inorder.indexOf(root.val);

    root.left = buildTree(preorder.slice(1, mid + 1), inorder.slice(0, mid));
    root.right = buildTree(preorder.slice(mid + 1), inorder.slice(mid + 1));

    return root;
};
