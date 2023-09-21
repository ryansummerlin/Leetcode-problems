// Given the roots of two binary trees p and q, write a function to check if they are the same or not.

// Two binary trees are considered the same if they are structurally identical, and the nodes have the same value.


// I actually did this problem while I was working through the App Academy course but the time/space complexity is atrocious
// so I'm going to try to improve it now.



// This is much cleaner than the original. Basically, I just run a simultaneous dfs. Base case when both nodes are
// null is the same, the wrinkle comes in the second clause where you make result false if the root1 and root2 vals are
// not the same but ALSO if one is null and the other is not. Time complexity O(n), space complexity O(1).

var isSameTree = function(p, q) {
    result = true;
    const dfs = function(root1, root2) {
        if (!root1 && !root2) return;

        if ((root1 && !root2) || (root2 && !root1) || root1.val !== root2.val) {
            result = false;
            return;
        }

        dfs(root1.left, root2.left);
        dfs(root1.right, root2.right);
    }

    dfs(p, q);
    return result;
};





// Old code below. This is terrible and I can barely follow my own code. Beats 5% on time complexity.


var isSameTree = function(p, q) {

    let inOrderQ = [];
    let inOrderP = [];

    function inOrderTraversal(p, q) {

        if (p === null && q === null) {
            return true;
        } else if (p === null && q !== null) {
            inOrderQ.push(q.val);
            inOrderP.push(null);
            return false;
        } else if (q === null && p !== null) {
            inOrderQ.push(null);
            inOrderP.push(p.val);
            return false;
        }

        if ((p && p.left !== null) || (q && q.left !== null)) {
            inOrderTraversal(p.left, q.left);
        }

        if (p !== null) {
            inOrderP.push(p.val);
        } else {
            inOrderP.push(null);
        }

        if (q !== null) {
            inOrderQ.push(q.val);
        } else {
            inOrderQ.push(null);
        }

        if ((p && p.right !== null) || (q && q.right !== null)) {
            inOrderTraversal(p.right, q.right);
        }

    }

    inOrderTraversal(p, q);
    console.log(inOrderP);
    console.log(inOrderQ);

    if (inOrderP.length !== inOrderQ.length) {
        return false;
    } else {
        for (let i = 0; i < inOrderP.length; i++) {
            if (inOrderP[i] !== inOrderQ[i]) {
                return false;
            }
        }
    }

    return true;
};
