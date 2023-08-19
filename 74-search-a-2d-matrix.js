// You are given an m x n integer matrix matrix with the following two properties:

// Each row is sorted in non-decreasing order.
// The first integer of each row is greater than the last integer of the previous row.
// Given an integer target, return true if target is in matrix or false otherwise.

// You must write a solution in O(log(m * n)) time complexity.


// The code is a bit verbose and I had a hard time implementing it but the concept is pretty straightforward and I was
// able to recognize the pattern pretty quickly even if it took awhile to implement. Basically, you end up running two binary searches.
// The first binary search finds the array on which to run the second binary search. As with a lot of the binary search problems,
// edge cases are something to keep in mind that tripped me up a few times. Namely, when the length is either 1 or 2 you have to design
// code to capture those two cases.


var searchMatrix = function(matrix, target) {
    const bSearch = function(arr) {
        let low = 0;
        let high = arr.length - 1;

        if (arr.length <= 2) {
            if (arr[0] === target || arr[1] === target) {
                return true;
            } else {
                return false;
            }
        }


        while (low <= high) {
            let mid = Math.floor((low + high) / 2);
            if (arr[mid] === target) {
                return true;
            } else if (arr[mid] > target) {
                high = mid - 1;
            } else if (arr[mid] < target) {
                low = mid + 1;
            } else if (high === low) return false;
        }

        return false;
    }

    if (matrix.length === 1) {
        return bSearch(matrix[0]);
    } else if (matrix.length === 2) {
        let edge = [bSearch(matrix[0]), bSearch(matrix[1])];
        if (edge[0] === true || edge[1] === true) {
            return true;
        } else {
            return false;
        }
    }

    let low = 0;
    let high = matrix.length - 1;

    while (low <= high) {
        let mid = Math.floor((low + high) / 2);
        let midArr = matrix[mid];
        if (midArr[0] > target) {
            high = mid - 1;
        } else if (midArr[midArr.length - 1] < target) {
            low = mid + 1;
        } else {
            return bSearch(midArr);
        }
    }

    return false;
};
