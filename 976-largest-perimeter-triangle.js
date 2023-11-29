// Given an integer array nums, return the largest perimeter of a triangle with a non-zero area,
// formed from three of these lengths. If it is impossible to form any triangle of a non-zero area, return 0.


// rules for valid triangle is one side can't be longer than the other two sides combined. Sort in descending order
// then iteratively start checking for possible triangles and return the first one you see

var largestPerimeter = function(nums) {
    nums.sort((a, b) => (b - a));

    for (let i = 0; i < nums.length - 2; i++) {
        if (nums[i] < nums[i + 1] + nums[i + 2]) {
            return nums[i] + nums[i + 1] + nums[i + 2];
        }
    }

    return 0;
};
