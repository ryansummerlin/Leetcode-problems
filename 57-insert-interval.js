// You are given an array of non-overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti. You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

// Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).

// Return intervals after the insertion.


// I really struggled with this one and I probably need to spend more time working on intervals going forward.
// Solution courtesy of youtube
// Time complexity O(n), space complexity O(n).


var insert = function(intervals, newInterval) {
    let result = [];

    let start = 0;
    let end = 1;
    let i = 0;

    while (i < intervals.length && intervals[i][end] < newInterval[start]) {
        result.push(intervals[i]);
        i++;
    }

    while (i < intervals.length && intervals[i][start] <= newInterval[end]) {
        newInterval[start] = Math.min(newInterval[start], intervals[i][start]);
        newInterval[end] = Math.max(newInterval[end], intervals[i][end]);
        i++;
    }
    result.push(newInterval);

    while (i < intervals.length) {
        result.push(intervals[i]);
        i++;
    }

    return result;

};
