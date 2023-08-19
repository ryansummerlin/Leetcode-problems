
// Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

// Return a list of all possible strings we could create. Return the output in any order.


// This is a basic recursive template for a depth first search that I found online. Will be important to understand the fundamentals
// of how to implement this for a lot of different recursive problems. From the video, both time and space complexity O(2^n * n).
// I'm a little bit unclear on why the second * n comes in. I guess it's from the operations happening on each leaf of the tree we're
// creating although I thought that push and pop were both O(1). Regardless, will be good to refer to this template for future recursion
// problems.



var letterCasePermutation = function(s) {
    let result = [];

    const dfs = function(i, s, slate) {
        // base case
        if (i === s.length) {
            result.push(slate.join(''));
            return;
        }

        // recursive case
        let char = s[i];

        // if number
        if (Number.isInteger(parseInt(char))) {
            slate.push(char);
            dfs(i + 1, s, slate);
            slate.pop();
        } else {
            // uppercase
            slate.push(char.toUpperCase());
            dfs(i + 1, s, slate);
            slate.pop();

            // lowercase
            slate.push(char.toLowerCase());
            dfs(i + 1, s, slate);
            slate.pop();
        }

    }

    dfs(0, s, []);
    return result;
};
