// Given a binary search tree (BST), find the lowest common ancestor (LCA) node of two given nodes in the BST.

// According to the definition of LCA on Wikipedia: “The lowest common ancestor is defined between two nodes p and q
// as the lowest node in T that has both p and q as descendants (where we allow a node to be a descendant of itself).”


// I had to refresh my memory on BST and breadth first search and I'm quite rusty on trees in general but the key insight here is that you
// want to do a breadth first search, and then a depth first search at each node taking advantage of the binary
// search tree structure. Time complexity should be O(nlog(n)) bc O(logn) n times for the nodes in the tree. Space complexity
// should be O(n).



var lowestCommonAncestor = function(root, p, q) {
    const search = function(root, target) {
        // base case
        if (!root) return false;

        if (root.val === target.val) {
            return true;
        } else if (target.val < root.val) {
            return search(root.left, target);
        } else if (target.val > root.val) {
            return search(root.right, target);
        }

    }

    let queue = [root];
    let result = [];

    while (queue.length) {
        let current = queue[0];
        if (search(current, p) && search(current, q)) {
            result.push(current);
            if (current.left) queue.push(current.left);
            if (current.right) queue.push(current.right);
        }

        queue.shift();
    }

    return result[result.length - 1];

};
