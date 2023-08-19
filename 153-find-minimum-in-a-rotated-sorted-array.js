// Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example,
// the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.
// Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

// Given the sorted rotated array nums of unique elements, return the minimum element of this array.

// You must write an algorithm that runs in O(log n) time.



// O(log n) time means binary search, so that's the basic framework for the problem. Essentially, you want to find the "break" in the
// array, ie the pivot on which the array was rotated. Instead of a classic binary search for a target, the way I went about it was
// looking for the point at which the array[mid] was less than the next value, but the next value was less than the previous value.
// I actually struggled a bit with this one due to the edge cases. The most obvious edge cases occur when the array length is 1 or 2
// but there's also edge cases here when the min value is the first or the last value in the array (bc there will be either no previous
// or no next value to compare against). Time complexity is O(log n) and space complexity should just be O(1) and I was able to get the
// time complexity up to beat 97% of JS users.



var findMin = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    if (nums[low] < nums[high] || nums.length === 1) return nums[0];

    if (nums[low] < nums[high - 1]) return nums[high];

    if (nums.length === 2) return nums[1];

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        if (nums[mid + 1] < nums[mid - 1] && nums[mid] < nums[mid + 1]) {
            return nums[mid];
        } else if (nums[high] > nums[mid]) {
            high = mid;
        } else if (nums[low] < nums[mid]) {
            low = mid;
        }
    }
};
