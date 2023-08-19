// Given an integer array nums of unique elements, return all possible subsets (the power set).

// The solution set must not contain duplicate subsets. Return the solution in any order.

// This is really similar to the combinations problem #77. The key insight here is that you need to push all combinations that
// are less than the length of the original array, not just ones that match the length of the array. To do this, I switched my base case
// to be the last element in current = last element in original array, and every current array gets pushed at the beginning of the
// recursive function. I'm a little unclear on the time complexity here because it's not quite pure combinations. Regardless, I'm proud
// that I was able to solve this one without outside assistance.


var subsets = function(nums) {
    let result = [];

    const dfs = (i, current) => {
        result.push([...current]);

        // base case
        if (current[current.length - 1] === nums[nums.length - 1]) {
            return;
        }

        for (i; i < nums.length; i++) {
            current.push(nums[i]);
            dfs(i + 1, current);
            current.pop();
        }
    }

    dfs(0, []);
    return result;
};
