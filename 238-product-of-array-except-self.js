// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.


// The two obvious solutions, double for loop and totalProduct divide by each index are both off the table per the description.

// Create two new arrays, one for previous product and one for product after the index, use the last for loop to create the desired array.
// Time complexity O(n), space complexity O(n) as well.


var productExceptSelf = function(nums) {
    let prevProduct = [1];
    let postProduct = Array.from(nums);
    postProduct[postProduct.length - 1] = 1;
    let returnArr = [];

    for (let i = 0; i < nums.length - 1; i++) {
        prevProduct.push(nums[i] * prevProduct[i]);
    }

    for (let i = nums.length - 1; i > 0; i--) {
        postProduct[i - 1] = (nums[i] * postProduct[i]);
    }

    for (let i = 0; i < nums.length; i ++) {
        returnArr.push(prevProduct[i] * postProduct[i]);
    }

    return returnArr;
};
