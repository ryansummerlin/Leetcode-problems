// Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the
// index where it would be if it were inserted in order.

// You must write an algorithm with O(log n) runtime complexity.



// binary search algorithm. O(logn) time complexity.

var searchInsert = function(nums, target) {
    let low = 0;
    let high = nums.length - 1;
    let mid = Math.floor((low + high) / 2);

    if (target > nums[high]) return high + 1;
    if (target < nums[low]) return low;

    while (high > low) {
        mid = Math.floor((low + high) / 2);
        if (nums[mid] === target) return mid;
        if (nums[low] === target) return low;
        if (nums[high] === target) return high;
        if (target > nums[mid]) low = mid + 1;
        if (target < nums[mid]) high = mid - 1;
    }

    while (nums[mid] < target) {
        mid++;
    }

    return mid;

};
