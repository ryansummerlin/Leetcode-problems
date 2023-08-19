// Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

// You may return the answer in any order.

// I'm still struggling with a lot of these recursion problems. The key in this one that was absent in the last two is that
// you need to have the for loop in the recursive case to iterate through all the possible combinations. Time complexity on this
// is awful - O(k * C(n, k)), but it looks like they have a faster iterative solution. Generally, I think you probably need to do
// a refresher on combinations/permutations.


var combine = function(n, k) {
    let result = [];

    const dfs = (i, current) => {

        // base case
        if (current.length === k) {
            result.push([...current]);
            return;
        }

        // recursive case
        for (i; i <= n - k + current.length + 1; i++) {
            current.push(i);
            dfs(i + 1, current);
            current.pop();
        }
    }

    dfs(1, []);
    return result;
};
