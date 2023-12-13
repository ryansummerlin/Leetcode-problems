// Given the root of a binary tree, return the zigzag level order traversal of its nodes' values.
// (i.e., from left to right, then right to left for the next level and alternate between).


// This is really similar to the level order traversal where you do a bfs and keep track of each level
// as you go down. The only difference here is to keep an even/odd counter with modulo and reverse the
// level every other time. Time complexity should be a long O(n) because of the two separate for loops
// and space complexity also O(n) because of the queue.


var zigzagLevelOrder = function(root) {
    if (!root) return [];
    let count = 0;
    let queue = [[root]];
    let result = [];
    while (queue.length) {
        let currentLevel = queue.shift();
        let nextLevel = [];
        for (let i = 0; i < currentLevel.length; i++) {
            let node = currentLevel[i];
            if (node.left) nextLevel.push(node.left);
            if (node.right) nextLevel.push(node.right);
        }

        if (count % 2 === 0) {
            let level = [];
            for (let i = 0; i < currentLevel.length; i++) {
                let node = currentLevel[i];
                level.push(node.val);
            }
            result.push(level);
        } else {
            let level = [];
            for (let i = currentLevel.length - 1; i >= 0; i--) {
                let node = currentLevel[i];
                level.push(node.val);
            }
            result.push(level);
        }
        if (nextLevel.length) queue.push(nextLevel);
        count++;
    }

    return result;
};
