// Given an m x n integer matrix matrix, if an element is 0, set its entire row and column to 0's.

// You must do it in place.


// This is the first matrix problem I've worked through and I was able to get it done without any outside assistance.
// However, my time complexity is atrocious (basically O(m^2 * n^2)). Space complexity is not much better at
// O(m * n). I'm going to work through another potential solution but might have to go to youtube for a more optimal solution.

var setZeroes = function(matrix) {
    let hash = new Map();

    const setToZero = function(i, j) {
        for (let k = 0; k < matrix[i].length; k++) {
            if (matrix[i][k] !== 0) {
                matrix[i][k] = 0;
                hash[[i, k]] = true;
            }
        }

        for (let k = 0; k < matrix.length; k++) {
            if (matrix[k][j] !== 0) {
                matrix[k][j] = 0;
                hash[[k, j]] = true;
            }
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0 && !hash[[i, j]]) {
                setToZero(i, j);
            }
        }
    }
};


// Came up with this solution on my own as well - time complexity gets a lot better on this one beating 84% of users (as opposed to 5% before)
// Basically, instead of running the setToZero function and iterating through the entire matrix on every iteration of the double for
// loop, I just iterated through the matrix once, saving all of the relevant i and j values. After that, I went and switched every
// row at i to an array of zeroes, and then iterated through the j array to switch all the columns to zero. This should have time complexity
// O(m * n), and space complexity O(m + 2n) which is pretty good. I think there might be a way to improve space complexity but I think
// time complexity is basically tapped out here.


var setZeroes = function(matrix) {
    let iArr = [];
    let jArr = [];
    let hash = new Map();

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] === 0) {
                if (iArr[iArr.length - 1] !== i) {
                    iArr.push(i);
                }

                if (!hash[j]) {
                    jArr.push(j);
                    hash[j] = true;
                }
            }
        }
    }

    for (let i = 0; i < iArr.length; i++) {
        matrix[iArr[i]] = Array(matrix[0].length).fill(0);
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < jArr.length; j++) {
            matrix[i][jArr[j]] = 0;
        }
    }
};
