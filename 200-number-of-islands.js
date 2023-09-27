// Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

// An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically.
// You may assume all four edges of the grid are all surrounded by water.




// I actually completed this problem during App Academy - terrible time complexity and this code looks pretty ugly so I'll try
// to improve it but wanted to keep the original solution here for posterity.

var numIslands = function(grid) {
    const getNeighbors = function(row, col, grid) {
        let neighbors = [];
        const nonZero = function(row, col, grid) {
            row = parseInt(row);
            col = parseInt(col);
            if (grid[row][col] === "1") {
                neighbors.push([row, col]);
            }
        }
        // up
        if (row > 0) {
            nonZero(row - 1, col, grid);
        }
        // down
        if (row < grid.length - 1) {
            nonZero(row + 1, col, grid);
        }
        // left
        if (col > 0) {
            nonZero(row, col - 1, grid);
        }
        // right
        if (col < grid[0].length - 1) {
            nonZero(row, col + 1, grid);
        }

        return neighbors;
    }

    let visited = new Set();
    let islandCount = 0;

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (!visited.has([i, j].join(',')) && grid[i][j] === "1") {
                let stack = [[i, j]];
                islandCount++;
                while (stack.length !== 0) {
                    let currentNode = stack.pop();
                    visited.add([currentNode[0], currentNode[1]].join(','));
                    let neighbors = getNeighbors(currentNode[0], currentNode[1], grid);
                    neighbors.forEach(neighbor => {
                        if (!visited.has(neighbor.join(','))) {
                            stack.push(neighbor);
                        }
                    });
                }
            }
        }
    }

    return islandCount;
};
