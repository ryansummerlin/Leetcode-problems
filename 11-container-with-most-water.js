// You are given an integer array height of length n. There are n vertical lines drawn such that the two
// endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.


// The most obvious way to do this is just to double for loop and check all of the possible pairings and take the max. However,
// the O(n^2) time complexity means this solution times out on leetcode. Instead, you can run a single iteration, starting with two pointers
// at each end of the array and work toward the middle until you have your max. Where I got caught up was the fact that the iteration
// can't quite be one to one, as in increase i, then decrease j. Instead, you have to understand that the limiting factor in the area
// calculation is the endpoint with the lower height. Thus, within the while loop, you check for the shorter line, and then increment
// that one towards the middle.

// In the end, time complexity O(n), space complexity O(1)



var maxArea = function(height) {
    const area = function(firstIdx, secondIdx, firstHeight, secondHeight) {
        return Math.min(firstHeight, secondHeight) * Math.abs(firstIdx - secondIdx);
    }

    let currentMax = area(0, height.length - 1, height[0], height[height.length - 1]);
    let currentArea;
    let i = 0;
    let j = height.length - 1;

    while (j > i) {
        currentArea = area(i, j, height[i], height[j]);
        currentMax = Math.max(currentArea, currentMax);
        if (height[i] > height[j]) {
            j--;
        } else {
            i++;
        }
    }

    return currentMax;
};
