// There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

// The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

// The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

// Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.



// I'm stuck on this one unfortunately. I think the idea is that you're going to have to make some sort of dfs on each square in the
// grid but I'm getting an infinite loop whenever I try to pull the neighbors. There's probably some element of a mirror "visited" grid
// but it's just a little tricky bc "visited" depends on which way you're coming from. Will probably look this one up and copy in
// a solution online. These graph problems are kicking by butt though


var pacificAtlantic = function(heights) {
    let visited = heights.map(row => row.map(el => false));
    const getNeighbors = function(i, j) {
        let neighbors = [];
        if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j]);
        if (i < heights.length - 1 && !visited[i + 1][j]) neighbors.push([i + 1, j]) ;
        if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1]);
        if (j < heights[0].length - 1 && !visited[i][j + 1]) neighbors.push([i, j + 1]);

        return neighbors;
    }


    const dfs = function(i, j, val) {
        if (heights[i][j] > val) {
            visited[i][j] = true;
            return;
        }
        if (i === 0 || j === 0) pacific = true;
        if (i === heights.length - 1 || j === heights[0].length - 1) atlantic = true;

        if (pacific && atlantic) return true;

        let neighbors = getNeighbors(i, j);
        for (let i = 0; i < neighbors.length; i++) {
            let neighbor = neighbors[i];
            dfs(neighbor[0], neighbor[1], heights[i][j]);
        }

        if (pacific && atlantic) result.push([i, j]);
    }

    let result = [];
    let pacific;
    let atlantic;

    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            pacific = false;
            atlantic = false;
            dfs(i, j, heights[i][j]);
        }
    }

    return result;

};


// This one is still tripping me up even after looking at the solution online. I hate graph problems!!

var pacificAtlantic = function(heights) {
    let pacific = heights.map(row => row.map(el => false));
    let atlantic = heights.map(row => row.map(el => false));

    const getNeighbors = function(i, j, grid) {
        let neighbors = [];
        let val = heights[i][j];
        if (i > 0 && heights[i - 1][j] <= val && !grid[i - 1][j]) neighbors.push([i - 1, j]);
        if (i < heights.length - 1 && heights[i + 1][j] <= val && !grid[i + 1][j]) neighbors.push([i + 1, j]);
        if (j > 0 && heights[i][j - 1] <= val && !grid[i][j - 1]) neighbors.push([i, j - 1]);
        if (j < heights[0].length - 1 && heights[i][j + 1] <= val && !grid[i][j + 1]) neighbors.push([i, j + 1]);

        return neighbors;
    }

    const atlanticBFS = function() {
        let queue = [];
        for (let i = 0; i < heights.length; i++) {
            queue.push([i, heights[0].length - 1]);
        }
        for (let j = 0; j < heights[0].length; j++) {
            queue.push([heights.length - 1, j]);
        }
        while (queue.length) {
            let square = queue.shift();
            let [i, j] = [square[0], square[1]];
            atlantic[i][j] = true;
            let neighbors = getNeighbors(i, j, atlantic);
            for (let i = 0; i < neighbors.length; i++) {
                queue.push(neighbors[i]);
            }
        }
    }


    const pacificBFS = function() {
        let queue = [];
        for (let i = 0; i < heights.length; i++) {
            queue.push([i, 0]);
        }
        for (let j = 0; j < heights[0].length; j++) {
            queue.push([0, j]);
        }
        while (queue.length) {
            let square = queue.shift();
            let [i, j] = [square[0], square[1]];
            pacific[i][j] = true;
            let neighbors = getNeighbors(i, j, pacific);
            for (let i = 0; i < neighbors.length; i++) {
                queue.push(neighbors[i]);
            }
        }
    }

    atlanticBFS();
    pacificBFS();

    let result = [];
    for (let i = 0; i < heights.length; i++) {
        for (let j = 0; j < heights[0].length; j++) {
            if (pacific[i][j] && atlantic[i][j]) result.push([i, j]);
        }
    }

    return result;

};
