// You are given two binary trees root1 and root2.

// Imagine that when you put one of them to cover the other, some nodes of the two trees are overlapped while the others are not.
// You need to merge the two trees into a new binary tree. The merge rule is that if two nodes overlap, then sum node values up as
// the new value of the merged node. Otherwise, the NOT null node will be used as the node of the new tree.

// Return the merged tree.

// Note: The merging process must start from the root nodes of both trees.



// this is a fairly simple dfs function but it becomes a little bit tough because you have to dfs
// between two separate trees. Instead of creating a new tree, I used root1 as the inital tree, and
// then performed the dfs, either summing the value of nodes or adding new brancehs for the root2 merge.
// Time complexity should be O(n). Space complexity should be O(n) as well.



var mergeTrees = function(root1, root2) {
    if (!root1) return root2;
    if (!root2) return root1;

    root1.val = root1.val + root2.val;

    const dfs = function(p, q) {
        if (!p.left && !q.left && !p.right && !q.right) return;
        if (p.left && q.left) {
            p.left.val = p.left.val + q.left.val;
            dfs(p.left, q.left)
        }
        if (p.right && q.right) {
            p.right.val = p.right.val + q.right.val;
            dfs(p.right, q.right);
        }
        if (!p.left && q.left) {
            p.left = new TreeNode(q.left.val);
            dfs(p.left, q.left);
        }
        if (!p.right && q.right) {
            p.right = new TreeNode(q.right.val);
            dfs(p.right, q.right);
        }
    }

    dfs(root1, root2);
    return root1;
};
