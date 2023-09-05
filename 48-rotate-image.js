// You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate
// another 2D matrix and do the rotation.


// This one stumped me as well and I probably need some more practice on matrices but overall this is actually fairly simple.
// Basically, first we just reverse the rows and columns, and the result is what we desire, but the rows are in reverse order.
// After that, we can just loop through the rows and use row.reverse() to flip the rows. Time complexity is O(n), and space complexity
// is going to be O(1) because we're not creating a new matrix, just modifying the existing one in place.

var rotate = function(matrix) {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = r; c < matrix[0].length; c++) {
            [matrix[r][c], matrix[c][r]] = [matrix[c][r], matrix[r][c]];
        }
    }

    for (let r = 0; r < matrix.length; r++) {
        matrix[r].reverse();
    }
};
