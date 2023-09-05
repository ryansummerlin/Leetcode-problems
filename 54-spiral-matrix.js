// Given an m x n matrix, return all elements of the matrix in spiral order.

// This one stumped me and I had to look for the solution online but it's fairly intuitive once you see it. Basically,
// you need to keep track of left, right, top, and bottom and increment each one of the values accordingly every time
// you perform a loop of the spiral. Also, the trigger to stop iterating through is when the output is equal to the
// number of squares in the matrix - this is the key that I was missing before in my previous attempts. Time complexity
// here should be O(n) - ideally you end up performing the push operation exactly the number of times that the matrix has
// squares. Space complexity is the same.

var spiralOrder = function(matrix) {
    let top = 0;
    let left = 0;
    let bottom = matrix.length - 1;
    let right = matrix[0].length - 1;
    let output = [];
    let size = matrix.length * matrix[0].length;

    while (output.length < size) {
        for (let i = left; i <= right && output.length < size; i++) {
            output.push(matrix[top][i]);
        }
        top++;

        for (let i = top; i <= bottom && output.length < size; i++) {
            output.push(matrix[i][right]);
        }
        right--;

        for (let i = right; i >= left && output.length < size; i--) {
            output.push(matrix[bottom][i])
        }
        bottom--;

        for (let i = bottom; i >= top && output.length < size; i--) {
            output.push(matrix[i][left]);
        }
        left++;
    }

    return output;

};
