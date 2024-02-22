// Given two integer arrays inorder and postorder where inorder is the inorder traversal of a binary tree and postorder is
// the postorder traversal of the same tree, construct and return the binary tree.


// recursive function, root is always the last node of the postorder array. Once you have the root, find the index in the inorder
// array. Everything before the rootindex is to the left of the root, everything after is to the right. Split the inorder index
// into left and right. Count the number of nodes in the left index. Then, split the postorder array into left and right.
// Post order left array will start at index 0 and contain the number of nodes of the leftinorder index. Finally, call the function
// recursively for root.left with both of the left split arrays and root.right with the right split arrays and return the root.


var buildTree = function(inorder, postorder) {
    if (inorder.length === 0 || postorder.length === 0) return null;

    let rootVal = postorder[postorder.length - 1];
    let root = new TreeNode(rootVal);
    let rootIndex = inorder.indexOf(rootVal);
    let leftInOrder = inorder.slice(0, rootIndex);
    let rightInOrder = inorder.slice(rootIndex + 1);
    let leftPostOrder = postorder.slice(0, leftInOrder.length);
    let rightPostOrder = postorder.slice(leftInOrder.length, postorder.length - 1);

    root.left = buildTree(leftInOrder, leftPostOrder);
    root.right = buildTree(rightInOrder, rightPostOrder);

    return root;

};
