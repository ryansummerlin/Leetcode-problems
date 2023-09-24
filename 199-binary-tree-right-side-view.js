// Given the root of a binary tree, imagine yourself standing on the right side of it, return the values of the
// nodes you can see ordered from top to bottom.


// The way they worded this problem is incredibly vague and not descriptive in the slightest. With that being said,
// the key insight here is that you want to do a breadth first traversal while keeping track of which row of the tree
// you are currently in. To do this, instead of passing individual nodes to the queue, I passed an array of each
// node in the tree to the queue. I added the right most value in each row to the result, then pushed all the values
// of the next row to the queue and operated like a standard breadth first traversal. Time complexity here should
// be O(n) bc you visit all the nodes. Space complexity O(n) in the worst case that the result is all values.


var rightSideView = function(root) {
    if (!root) return [];

    let result = [root.val];
    let queue = [[root]];

    while (queue.length) {
        let temp = [];
        for (let i = 0; i < queue[0].length; i++) {
            let node = queue[0][i];
            if (node.right) {
                temp.push(node.right);
            }

            if (node.left) {
                temp.push(node.left);
            }
        }

        if (temp.length) {
            result.push(temp[0].val);
            queue.push(temp);
        }

        queue.shift();
    }

    return result;
};
