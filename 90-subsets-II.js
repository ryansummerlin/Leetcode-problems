// Given an integer array nums that may contain duplicates, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// This is really similar to the first subsets problem at first glance, the only difference being this one potentially has
// duplicate numbers in the provided array. This throws a bit of a wrinkle into the problem solving aspect. On the first subsets,
// the base case was whenever the last value of current = the last value of the given array. However, that doesn't work when you have duplicates.
// Instead, I added 'a' to the end of the nums array to keep a similar base case. However, the additional wrinkle here is that
// you can't provide duplicate sets: (1, 4, 4) and (4, 4, 1) count as the same set. To get around this, I created a hash map that used
// the joined string of the current variable as keys, and I sorted the nums array before starting to avoid the situation above with
// duplicates. I'm not exactly sure what the time complexity on this is: maybe O(n!) ? It's going to be basically the same for space
// complexity.


var subsetsWithDup = function(nums) {
    let result = [];
    let hash = {};
    nums.sort();
    nums.push('a');

    const dfs = function(i, current) {
        // base case
        if (current[current.length - 1] === 'a') {
            current.pop();
            if (!hash[current.join('')]) {
                result.push([...current]);
                hash[current.join('')] = 1;
            }
            return;
        } else {
            if (!hash[current.join('')]) {
                result.push([...current]);
                hash[current.join('')] = 1;
            }
        }

        // recursive case
        for (i; i < nums.length - 1; i++) {
            current.push(nums[i]);
            dfs(i + 1, current);
            current.pop();
        }
    }

    dfs(0, []);
    return result;
};
