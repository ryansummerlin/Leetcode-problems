// Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

// This uses the same depth first search (dfs) as the template used in 784 letter case permutation. The key difference here is that
// we have the two backtracking conditionals listed before the base case that tell the search to go back up one level if the parentheses
// so far will not be a valid set. Like the other dfs, this has O(2^n * n) time and space complexity.

var generateParenthesis = function(n) {
    let result = [];

    const dfs = function(i, n, slate, oCount, cCount) {
        // backtracking
        if (oCount > n) return;
        if (cCount > oCount) return;

        // base case
        if (slate.length === n * 2) {
            result.push(slate.join(''));
            return;
        }

        // recursive case

        slate.push('(');
        dfs(i + 1, n, slate, oCount + 1, cCount);
        slate.pop();

        slate.push(')');
        dfs(i + 1, n, slate, oCount, cCount + 1);
        slate.pop();
    }

    dfs(0, n, [], 0, 0);
    return result;
};
