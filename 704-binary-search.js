// Given an array of integers nums which is sorted in ascending order, and an integer target, write a function to search target
// in nums. If target exists, then return its index. Otherwise, return -1.

// You must write an algorithm with O(log n) runtime complexity.

// Very basic/explicit binary search problem. Time complexity O(log(n)). Space complexity O(1). Can refer to this as a template
// for binary search problems


var search = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;

    if (nums[0] === target) return 0;
    if (nums[1] === target) return 1;

    while (high >= low) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] > target) {
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return -1;
};
