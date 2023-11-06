// Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

// You must write an algorithm that runs in O(n) time.


// This sort of feels like cheating because I believe the javascript defualt sort function is ~technically~ O(nlog(n))
// but it crushes on both time and space complexity. Basically, you just sort, and set a current length of consecutive elements
// and a max length of consecutive elements. If the current is consecutive, you increment the current by one, if its equal to the
// previous you just continue, and if it's not consecutive and not equal to the previous, then reset current to one. Each time,
// set the max length to the max of max and current, and then return max at the end. Time complexity O(nlog(n)) but we can call it
// O(n) I guess

var longestConsecutive = function(nums) {
    if (!nums.length) return 0;
    nums.sort((a, b) => a - b);
    let max = 1;
    let count = 1;
    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        let prev = nums[i - 1];
        if (num === prev + 1) {
            count++;
        } else if (num === prev) {
            continue;
        } else {
            count = 1;
        }

        max = Math.max(count, max);
    }

    return max;
};
