// Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

// This one took me awhile to think through and figure out. What threw me on this one is that you basically need to iterate through
// the entire list of nums each time you run the next recursion, so the recursion in previous problems where you call dfs(i + 1, current)
// doesn't really apply here. Instead, you end up recursively calling dfs(current) and it loops through the entire nums array on each
// recursive call. Time complexity here is O(n * n permutations). Space complexity is O(n permutations).


var permute = function(nums) {
    let result = [];
    let hash = {}

    const dfs = function(current) {
        // base case
        if (current.length === nums.length) {
            result.push([...current]);
            return;
        }

        // recursive case
        for (let j = 0; j < nums.length; j++) {
            let el = nums[j];
            if (!hash[el]) {
                current.push(el);
                hash[el] = 1;
                dfs(current);
                delete hash[el];
                current.pop();
            }
        }
    }

    dfs([]);

    return result;
};
