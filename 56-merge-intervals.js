// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and
// return an array of the non-overlapping intervals that cover all the intervals in the input.


// I tried to do this in a much more brute force way at first but the trick here is really just to sort the intervals
// array by the beginning value before you start trying to merge everything. Once you have the intervals array sorted
// by the first value of each interval, you just check to see if the next first value is represented in the output array.
// If so, check if the end value is greater than the existing end value in the output array. If not, then add the interval
// to the output array. Because of the sort this ends up being O(n log n) time complexity which is a little worse than O(n)
// but not too bad. Space complexity O(n) for the output array.



var merge = function(intervals) {
    intervals.sort((a,b) => a[0] - b[0]);
    let output = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        let int = intervals[i];
        let lastOutput = output[output.length - 1];
        if (int[0] >= lastOutput[0] && int[0] <= lastOutput[1]) {
            if (int[1] > lastOutput[1]) {
                lastOutput[1] = int[1];
            }
        } else {
            output.push(int);
        }
    }

    return output;

};
