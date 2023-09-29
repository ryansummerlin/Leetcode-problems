// Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.

// The distance between two adjacent cells is 1.



// Found this solution online. Basically, the idea is that you start from each zero and do a bfs, keeping in mind
// the current distance from the nearest zero. To this end, you make every "1" equal to infinity in the beginning
// so that the distance will always be less than the value in the square until you change it to the correct distance.
// I think time complexity on this should be O(n)? The code looks rough but at the end of the day it's a bfs and
// you shouldn't be revisiting squares on the grid. Space complexity is O(n) as well bc of the queue.

var updateMatrix = function(mat) {
    const getNeighbors = function(i, j) {
        let neighbors = [];
        if (i > 0) neighbors.push([i - 1, j]);
        if (i < mat.length - 1) neighbors.push([i + 1, j]);
        if (j > 0) neighbors.push([i, j - 1]);
        if (j < mat[0].length - 1) neighbors.push([i, j + 1]);

        return neighbors;
    }

    let queue = [];
    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] === 0) {
                queue.push([i, j, 0]);
            } else {
                mat[i][j] = Infinity;
            }
        }
    }

    while (queue.length) {
        let curr = queue.shift();
        let [i, j, dist] = [curr[0], curr[1], curr[2]];
        if (dist < mat[i][j]) mat[i][j] = dist;

        let neighbors = getNeighbors(i, j);
        for (let i = 0; i < neighbors.length; i++) {
            let [x, y] = [neighbors[i][0], neighbors[i][1]];
            if (mat[x][y] === Infinity) {
                queue.push([x, y, dist + 1]);
            }
        }

    }

    return mat;
};


// This solution timed out but I think it is technically correct. However, after looking online, it seems that there
// is a better solution that uses a bfs going out from each zero, instead of going out from each 1. I will attempt this solution
// above.

var updateMatrix = function(mat) {
    const result = mat.map(row => row.map(el => 0));
    const getNeighbors = function(i, j) {
        let neighbors = [];
        if (i > 0) neighbors.push([i - 1, j]);
        if (i < mat.length - 1) neighbors.push([i + 1, j]);
        if (j > 0) neighbors.push([i, j - 1]);
        if (j < mat[0].length - 1) neighbors.push([i, j + 1]);

        return neighbors;
    }

    const bfs = function(i, j) {
        let count = 1;
        let neighbors = getNeighbors(i, j);
        let queue = [neighbors];
        while (queue.length) {
            let curr = queue.shift();
            let next = [];
            for (let i = 0; i < curr.length; i++) {
                let row = curr[i][0];
                let col = curr[i][1];
                if (mat[row][col] === 0) {
                    return count;
                } else {
                    next = [...next, ...getNeighbors(row, col)];
                }
            }
            if (next.length) {
                queue.push(next);
                count++;
            }
        }
    }


    for (let i = 0; i < mat.length; i++) {
        for (let j = 0; j < mat[0].length; j++) {
            if (mat[i][j] !== 0) {
                let distance = bfs(i, j);
                result[i][j] = distance;
            }

        }
    }

    return result;
};
