// You are given an m x n grid where each cell can have one of three values:

// 0 representing an empty cell,
// 1 representing a fresh orange, or
// 2 representing a rotten orange.
// Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

// Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.



// This code looks pretty ugly, but essentially it's just a breadth first search. First, I loop through each square in the grid
// and alter the values. Rotted oranges become zero and get added to the queue, ripe oranges become Infinity, and empty squares
// become negative Infinity. Next, we do the bfs, and change all ripe neighbors to the value in the rotten square + 1 if the value
// in the new square is greater than the current value. This value will represent the number of minutes. Once the queue is empty,
// we loop through the grid again. If any ripe oranges still exist, we return -1. Otherwise, we return the maximum time from
// the grid. Time complexity on this actually is just O(m * n) I think. Space complexity is also O(m * n) because of the queue.


var orangesRotting = function(grid) {
    const getNeighbors = function(i, j) {
        let neighbors = [];
        if (i > 0) neighbors.push([i - 1, j]);
        if (i < grid.length - 1) neighbors.push([i + 1, j]);
        if (j > 0) neighbors.push([i, j - 1]);
        if (j < grid[0].length) neighbors.push([i, j + 1]);

        return neighbors;
    }


    let queue = [];
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j]);
                grid[i][j] = 0;
            } else if (grid[i][j] === 1) {
                grid[i][j] = Infinity;
            } else if (grid[i][j] === 0) {
                grid[i][j] = -Infinity;
            }
        }
    }

    while (queue.length) {
        let [row, col] = queue.shift();
        let time = grid[row][col] + 1;
        let neighbors = getNeighbors(row, col);
        for (let i = 0; i < neighbors.length; i++) {
            let [x, y] = [neighbors[i][0], neighbors[i][1]];
            if (time < grid[x][y]) {
                grid[x][y] = time;
                queue.push([x, y]);
            }
        }
    }

    let max = 0;
    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === Infinity) return -1;
            if (grid[i][j] > max) max = grid[i][j];
        }
    }

    return max;
};
