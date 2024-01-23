// There is a grid with n + 2 horizontal bars and m + 2 vertical bars, and initially containing 1 x 1 unit cells.

// The bars are 1-indexed.

// You are given the two integers, n and m.

// You are also given two integer arrays: hBars and vBars.

// hBars contains distinct horizontal bars in the range [2, n + 1].
// vBars contains distinct vertical bars in the range [2, m + 1].
// You are allowed to remove bars that satisfy any of the following conditions:

// If it is a horizontal bar, it must correspond to a value in hBars.
// If it is a vertical bar, it must correspond to a value in vBars.
// Return an integer denoting the maximum area of a square-shaped hole in the grid after removing some bars (possibly none).



// I think this is technically O(log(n)) because of the sort but basically O(n) with linear time bc you have to walk through
// each set of bars. Space complexity should be O(1). The key is to find the largest gap in each of the sets of bars. You walk
// through each iterating the count by 1 as long as the values move up by 1 and taking the max of result and count at each step.
// If it increases by more than one, you reset the count to two and continue on. After doing this for both sets of bars, you
// take the minimum of the two max gaps and square it to get the result.

var maximizeSquareHoleArea = function(n, m, hBars, vBars) {
    hBars.sort((a, b) => a - b);
    vBars.sort((a, b) => a - b);

    const getMax = function(bars) {
    let count = 2;
    let result = 2;
    for (let i = 1; i < bars.length; i++) {
        if (bars[i] === bars[i - 1] + 1) {
            count++;
        } else {
            count = 2;
        }
        result = Math.max(result, count);
    }

    return result;
}

    const horizontal = getMax(hBars);
    const vertical = getMax(vBars);
    const gap = Math.min(horizontal, vertical);

    return gap * gap;

};
