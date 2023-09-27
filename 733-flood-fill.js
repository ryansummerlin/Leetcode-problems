// An image is represented by an m x n integer grid image where image[i][j] represents the pixel value of the image.

// You are also given three integers sr, sc, and color. You should perform a flood fill on the image starting from the pixel image[sr][sc].

// To perform a flood fill, consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color), and so on. Replace the color of all of the aforementioned pixels with color.

// Return the modified image after performing the flood fill.


// This is similar to number of islands and a lot of other graph problems, in that you have a grid with some values
// and at each node you want to do a depth/breadth first traversal over values that have not already been visited.
// In this one, I create a visited grid of all false and a function to grab all valid neighbors that have not been visited.
// Every time the dfs function runs, I see if the node is valid, and if so, I set visited to true, set the color, and then
// run the dfs on all neighbors. Time complexity I think is O(n) because the visited function should prevent you from hitting
// any node more than once. Space complexity O(n) due to the recursive stack + visited grid.



var floodFill = function(image, sr, sc, color) {
    let visited = image.map(row => row.map(cell => false));
    let val = image[sr][sc];

    const getNeighbors = function(i, j) {
        let neighbors = [];
        if (i > 0 && !visited[i - 1][j]) neighbors.push([i - 1, j]);
        if (i < image.length - 1 && !visited[i + 1][j]) neighbors.push([i +1, j])
        if (j > 0 && !visited[i][j - 1]) neighbors.push([i, j - 1]);
        if (j < image[0].length - 1 && !visited[i][j + 1]) neighbors.push([i, j + 1]);

        return neighbors;
    }

    const dfs = function(i, j) {
        let cell = image[i][j];

        if (cell !== val || visited[i][j]) {
            return;
        } else {
            visited[i][j] = true;
            image[i][j] = color;
            let neighbors = getNeighbors(i, j);
            for (let i = 0; i < neighbors.length; i++) {
                let neighbor = neighbors[i];
                dfs(neighbor[0], neighbor[1]);
            }

        }

    }

    dfs(sr, sc);


    return image;
};
