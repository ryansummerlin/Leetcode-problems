// I had a lot of problems with this one and I still don't fully understand the solution. I guess essentially you're trying to triangulate
// and in theory you can sort of just knock this off with a triple for loop. The key to this one though and the real takeaway is that
// when you have crazy time complexity, it makes sense to sort the array before doing anything else. That really is the key here.

// Because the solution already has O(n^2) complexity adding the O(n Log(n)) doesn't make a difference.


var threeSum = function(nums) {
    let triplets = [];
    if (nums.length < 3) return triplets;

    nums = nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] === nums[i - 1]) continue;
        let left = i + 1;
        let right = nums.length - 1;

        while (left < right) {
            let sum = nums[i] + nums[left] + nums[right];
            if (sum < 0) {
                left++;
            } else if (sum > 0) {
                right--;
            } else {
                triplets.push([nums[i], nums[left], nums[right]]);
                left++;
                while (nums[left] === nums[left - 1] && left < right) {
                    left++;
                }
            }
        }
    }

    return triplets;
};
