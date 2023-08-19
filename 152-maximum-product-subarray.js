// Given an integer array nums, find a
// subarray
//  that has the largest product, and return the product.

// The test cases are generated so that the answer will fit in a 32-bit integer.


// This one is harder but similar to the max Subarray sum problem. Basically, we have to keep track of the negative numbers in this
// as well because the negative sign can flip to get to a larger product. To do this, we use two arrays, one for the max and one for the
// min value. At each iteration, we have to check against both the max value an the min value, and add the larger one to the max value.

// time complexity O(n), space complexity also O(n)


var maxProduct = function(nums) {
    let maxIdx = [nums[0]];
    let minIdx = [nums[0]];
    let maxProduct = nums[0];

    for (let i = 1; i < nums.length; i++) {
        let num = nums[i];
        maxIdx[i] = Math.max(num, num * maxIdx[i - 1], num * minIdx[i - 1]);
        minIdx[i] = Math.min(num, num * maxIdx[i - 1], num * minIdx[i - 1]);
        if (maxIdx[i] > maxProduct) maxProduct = maxIdx[i];
    }

    return maxProduct;

};
