// Given an n x n matrix where each of the rows and columns is sorted in ascending order, return the kth smallest element in the matrix.

// Note that it is the kth smallest element in the sorted order, not the kth distinct element.

// You must find a solution with a memory complexity better than O(n2).


// There is a much faster way to do this using a binary search while keeping track of the elements less than the current target
// but I'm a little fuzzy on the details and this performed ok. I'll paste the chat GPT answer below - to refer to later.



var kthSmallest = function(matrix, k) {
    matrix = matrix.flat();
    matrix.sort((a, b) => a - b);
    return matrix[k - 1];
};



function kthSmallest(matrix, k) {
    const n = matrix.length;
    let low = matrix[0][0];
    let high = matrix[n - 1][n - 1];

    while (low < high) {
        const mid = Math.floor((low + high) / 2);
        const count = countLessOrEqual(matrix, mid);

        if (count < k) {
            low = mid + 1;
        } else {
            high = mid;
        }
    }

    return low;
}

function countLessOrEqual(matrix, target) {
    let count = 0;
    const n = matrix.length;
    let row = n - 1;
    let col = 0;

    while (row >= 0 && col < n) {
        if (matrix[row][col] <= target) {
            count += row + 1; // All elements in this column are less than or equal to target
            col++;
        } else {
            row--;
        }
    }

    return count;
}
