// Given an m x n grid of characters board and a string word, return true if word exists in the grid.

// The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or
// vertically neighboring. The same letter cell may not be used more than once.




// Strategy here is to loop through the entire matrix and run a dfs on each square that starts with the letter of the first word
// Like a lot of these other matrix problems, you need a list of visited squares - I created an array and popped off the last one
// every time I hit a dead end on the dfs. Time complexity here is pretty ugly and I don't think this is the optimal solution.
// Something like O(m x n) where m is the number of tiles in the matrix and n is the length of the word. Space complexity is O(n)
// with n being the length of the word.

var exist = function(board, word) {
    let validWord = false;
    const dfs = function(i, j, index, visited) {
        if (index === word.length - 1) {
            validWord = true;
            return;
        }
        visited.push(`${i}, ${j}`)
        index++;

        if (i > 0 && board[i - 1][j] === word[index] && visited.indexOf(`${i - 1}, ${j}`) === -1) dfs(i - 1, j, index, visited);
        if (i < board.length - 1 && board[i + 1][j] === word[index] && visited.indexOf(`${i + 1}, ${j}`) === -1) dfs(i + 1, j, index, visited);
        if (j > 0 && board[i][j - 1] === word[index] && visited.indexOf(`${i}, ${j - 1}`) === -1) dfs(i, j - 1, index, visited);
        if (j < board[0].length - 1 && board[i][j + 1] === word[index] && visited.indexOf(`${i}, ${j + 1}`) === -1) dfs(i, j + 1, index, visited);


        visited.pop();
        index--;
        return;

    }


    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[0].length; j++) {
            if (board[i][j] === word[0]) dfs(i, j, 0, []);
            if (validWord) return true;
        }
    }

    return false;
};
