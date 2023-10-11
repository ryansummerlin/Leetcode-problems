// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.


var rotate = function(nums, k) {
    let arr = [];

    k = k % nums.length;

    for (let i = nums.length - k; i < nums.length; i++) arr.push(nums[i]);

    for (let i = 0; i < nums.length - k; i++) arr.push(nums[i]);

    for (let i = 0; i < nums.length; i++) nums[i] = arr[i];
};
