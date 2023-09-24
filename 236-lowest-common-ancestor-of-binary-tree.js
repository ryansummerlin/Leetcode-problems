// Given a binary tree, find the lowest common ancestor (LCA) of two given nodes in the tree.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes
// p and q as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”




// This is my original solution - I struggled a bit with figuring out the depth first search for a target and had to
// go to chat gpt but the idea, basically, is that you do a breadth first search, and at every node you do a depth
// first search for the target. If the node contains the target, then you push it to a result array and at the very end
// you just pull the last node in the result array. However, this gets terrible time complexity so I'm going to look
// online for a better soluion.


var lowestCommonAncestor = function(root, p, q) {
    let queue = [root];
    let ancestors = [root];
    const dfs = function(root, target) {
        // base case
        if (!root) return false;

        if (root.val === target.val) {
            return true;
        };

        const leftContains = dfs(root.left, target);
        const rightContains = dfs(root.right, target);

        return leftContains || rightContains;
    }

    while (queue.length) {
        let current = queue[0];
        if (dfs(current, p) && dfs(current, q)) {
            ancestors.push(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }
        queue.shift();
    }

    return ancestors[ancestors.length - 1];
};
