// Given the roots of two binary trees root and subRoot, return true if there is a subtree of root with the same structure
// and node values of subRoot and false otherwise.

// A subtree of a binary tree tree is a tree that consists of a node in tree and all of this node's descendants. The tree
// tree could also be considered as a subtree of itself.


// I solved this by going through the main tree with a breadth first search and when I reached a node with the same value
// as the root of the subtree, then I ran a depth first search function to check if the subtree at that node was equal
// to the specified subtree. Time complexity O(n), space complexity O(n) as well due to DFS. Note to self - I'm still
// struggling a bit with DFS and recursion generally - probably a good area to brush up on.



var isSubtree = function(root, subRoot) {
    const same = function(p, q) {
        // base case
        if (!p && !q) return true;

        if (p && !q || !p && q || p.val !== q.val) return false;

        const left = same(p.left, q.left);
        const right = same(p.right, q.right);

        return left && right;
    }


    let queue = [root];
    while (queue.length) {
        let node = queue[0];
        if (node.val === subRoot.val && same(subRoot, node)) return true;
        if (node.left) queue.push(node.left);
        if (node.right) queue.push(node.right);
        queue.shift();
    }

    return false;
};
