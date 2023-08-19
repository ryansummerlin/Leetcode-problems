// There is an integer array nums sorted in ascending order (with distinct values).

// Prior to being passed to your function, nums is possibly rotated at an unknown pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become [4,5,6,7,0,1,2].

// Given the array nums after the possible rotation and an integer target, return the index of target if it is in nums, or -1 if it is not in nums.

// You must write an algorithm with O(log n) runtime complexity.


// O(log(n)) complexity constraint means this is looking like a binary search. Unfortunately, the array being rotated throws a wrinkle
// into the typical binary search. Initially, I tried to do a binary search to find the zero index but not all of the arrays have a zero index
// and I was having issues using the splice function in leetcode (in hindsight I think I was screwing up on the array length zero edge case).

// Instead, I modified the binary search methodology to try to determine the index where the rotation happens (see first two if statements).
// After I've figured out the scope of my binary search, I just ran the simple binary search algo.

// Time complexity: O(log(n)),j space complexity: O(1)?

var search = function(nums, target) {
    let low = 0;
    let high = nums.length -1;
    let mid;

    if (nums.length === 1 && nums[0] === target) return 0;

    while (low < high) {
        mid = Math.round((low + high) / 2);
        if (nums[mid] === target) return mid;
        if (nums[low] === target) return low;
        if (nums[high] === target) return high;

        if (target < nums[low] && nums[mid] > nums[high]) {
            low = mid + 1;
        } else if (target > nums[high] && nums[mid] < nums[low]) {
            high = mid - 1;
        } else if (target > nums[mid]) {
            low = mid + 1;
        } else if (target < nums[mid]){
            high = mid - 1;
        }


    }

    return -1;
};
