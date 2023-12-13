// Given a binary tree, find its minimum depth.

// The minimum depth is the number of nodes along the shortest path from the root node down to the nearest leaf node.

// Note: A leaf is a node with no children.


// I'm not sure this is necessarily the most efficient way of solving this but basically I just did a simple bfs.
// The wrinkle here is that you need to keep track of the depth your at and it's hard to do that in a queue when
// each entry appended isn't necessarily delineated on which level it's at. To fix this, I entered all of the nodes
// on a given level into an array within the queue, went through the entire level and checked for leaf nodes. Time
// complexity should be O(n) and space complexity should also be O(n).


var minDepth = function(root) {
    if (!root) return 0;
    let depth = 1;
    let queue = [[root]];
    while (queue.length) {
        let currentLevel = queue.shift();
        let nextLevel = [];
        for (let i = 0; i < currentLevel.length; i++) {
            let node = currentLevel[i];
            if (!node.left && !node.right) return depth;
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }
        if (nextLevel.length) queue.push(nextLevel);
        depth++;
    }
};
