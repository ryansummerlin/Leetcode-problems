// Given the root of a binary tree, return the level order traversal of its nodes' values. (i.e., from left to right, level by level).


// This is essentially a breadth first traversal but the tricky part here is that instead of just returning all of
// the values in order in an array, it wants you to group the levels in arrays within the result array. To accomplish
// this, you need to feed values into the queue as an array of levels, and push the values to the result in the same manner.
// Time complexity here is O(n), space complexity is O(n) as well.


var levelOrder = function(root) {
    if (!root) return [];
    let result = [[root.val]];
    let queue = [[root]];
    while (queue.length) {
        let current = queue[0];
        let level = [];
        let nextQueue = [];
        for (let i = 0; i < current.length; i++) {
            if (current[i].left) {
                level.push(current[i].left.val);
                nextQueue.push(current[i].left);
            }
            if (current[i].right) {
                level.push(current[i].right.val);
                nextQueue.push(current[i].right);
            }
        }

        if (level.length) result.push(level);
        if (nextQueue.length) queue.push(nextQueue);
        queue.shift();
    }

    return result;
};
