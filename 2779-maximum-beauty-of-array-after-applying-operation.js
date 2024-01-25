// You are given a 0-indexed array nums and a non-negative integer k.

// In one operation, you can do the following:

// Choose an index i that hasn't been chosen before from the range [0, nums.length - 1].
// Replace nums[i] with any integer from the range [nums[i] - k, nums[i] + k].
// The beauty of the array is the length of the longest subsequence consisting of equal elements.

// Return the maximum possible beauty of the array nums after applying the operation any number of times.

// Note that you can apply the operation to each index only once.

// A subsequence of an array is a new array generated from the original array by deleting some elements (possibly none)
// without changing the order of the remaining elements.


// Sort and then sliding window. You have to keep the high and low value in the sliding window within k * 2 and then
// compare the length between them to the max value each time the distance between the high and low value is > k * 2.
// Time complexity O(log(n)) and space complexity the same bc of the sort.


var maximumBeauty = function(nums, k) {
    nums = nums.sort((a, b) => a - b);
    let max = 0;
    let i = 0;
    for (let j = 0; j < nums.length; j++) {
        while (nums[j] - nums[i] > (2 * k)) i++;
        max = Math.max(j - i + 1, max);
    }

    return max;

};
