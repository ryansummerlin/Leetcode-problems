// Given an array of intervals intervals where intervals[i] = [starti, endi], return the minimum number of intervals you
// need to remove to make the rest of the intervals non-overlapping.


// I had to go to youtube for this one but the key insight here is that you want to sort the intervals by the end of the interval,
// not by the start. From there, you keep track of the furthest valid endpoint, and loop through each interval. If the interval's start
// is less than the current max endpoint, discard it. Otherwise, the interval is the new endpoint. Time complexity O(nlog(n)) I think due
// to the sort function. Space complexity should be O(1).


var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let prev = intervals[0][1];
    let count = 0;
    for (let i = 1; i < intervals.length; i++) {
        let current = intervals[i];
        if (current[0] < prev) {
            count++;
        } else {
            prev = current[1];
        }
    }

    return count;
};
