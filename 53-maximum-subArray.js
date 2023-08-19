// Given an integer array nums, find the
// subarray
//  with the largest sum, and return its sum.


// This one stumped me because the brute force way with the double for loop timed out. At each point in the for loop, you need to
// check whether the preceding subArray is greater than zero or not. If greater than zero, add the preceding subarray, if less then
// start new. Time complexity O(n), space complexity O(1).

var maxSubArray = function(nums) {
    let maxSum = nums[0];

    for (let i = 1; i < nums.length; i++) {
        nums[i] = Math.max(0, nums[i - 1]) + nums[i];
        if (nums[i] > maxSum) maxSum = nums[i];
    }

    return maxSum;
};
