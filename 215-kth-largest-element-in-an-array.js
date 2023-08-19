// Given an integer array nums and an integer k, return the kth largest element in the array.

// Note that it is the kth largest element in the sorted order, not the kth distinct element.

// Can you solve it without sorting?


// This is a pure brute force way of doing things but it does work. However, the time complexity at O(n * k) is terrible and there
// is almost certainly a better way to do this. I will revisit this later.


var findKthLargest = function(nums, k) {
    let largest = nums[0];
    let idx = 0;
    for (let i = 0; i < k; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (nums[j] >= largest) {
                largest = nums[j];
                idx = j;
            }
        }
        if (i !== k - 1) {
            nums[idx] = -10000;
            largest = nums[0];
            idx = 0;
        } else {
            return largest;
        }
    }

};


// Sort of dumb but this is the way to do it with sorting and it actually has a pretty decent runtime but feels like cheating
// bc the problem asks you not to sort.


var findKthLargest = function(nums, k) {
    nums = nums.sort((a,b) => a - b);
    return nums[nums.length - k];

};
