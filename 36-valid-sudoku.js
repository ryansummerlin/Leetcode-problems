// Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be validated according to the following rules:

// Each row must contain the digits 1-9 without repetition.
// Each column must contain the digits 1-9 without repetition.
// Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 without repetition.
// Note:

// A Sudoku board (partially filled) could be valid but is not necessarily solvable.
// Only the filled cells need to be validated according to the mentioned rules.


// This one wasn't super hard per se but it's a ton of code because you have to iterate through every row, column, and grid.
// Going through the rows and columns is pretty easy - created a helper function to cut back on the code but going through the
// grids is a little trickier. Basically, I have a quadruple for loop: iterating through the 3 columns and rows of the grids
// and then a helper function on each grid that goes through the grid. Time complexity here is O(n), technically O(3n), and space
// complexity is O(n) I think - the only space I'm using is for the hash map to keep track of the current values.


var isValidSudoku = function(board) {
    let current = {};
    const checkVal = function(val) {
        if (val !== '.' && current[val]) {
            return false;
        } else if (val !== '.' && !current[val]) {
            current[val] = 1;
        }

        return true;
    }

    // check rows
    for (let i = 0; i < board.length; i++) {
        current = {};
        for (let j = 0; j < board[0].length; j++) {
            if (!checkVal(board[i][j])) {
                return false;
            }
        }
    }

    // check cols
    for (let i = 0; i < board[0].length; i++) {
        current = {};
        for (let j = 0; j < board.length; j++) {
            if (!checkVal(board[j][i])) {
                return false;
            }
        }
    }

    // check grids
    const checkGrid = function(top, bottom, left, right) {
        current = {};
        for (let i = top; i <= bottom; i++) {
            for (let j = left; j <= right; j++) {
                if (!checkVal(board[i][j])) {
                    return false;
                }
            }
        }
        return true;
    }


    let left = 0;
    let top = 0;
    let right = 2;
    let bottom = 2;
    for (let k = 0; k < 3; k++) {
        left = 0;
        right = 2;
        for (let z = 0; z < 3; z++) {
            if (!checkGrid(top, bottom, left, right)) {
                return false;
            }
            left += 3;
            right += 3;
        }
        top += 3;
        bottom +=3;
    }

    return true;

};
