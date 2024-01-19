// You are given a 0-indexed string s and a 0-indexed integer array spaces that describes the indices in the original string
// where spaces will be added. Each space should be inserted before the character at the given index.

// For example, given s = "EnjoyYourCoffee" and spaces = [5, 9], we place spaces before 'Y' and 'C', which are at indices 5 and 9
// respectively. Thus, we obtain "Enjoy Your Coffee".
// Return the modified string after the spaces have been added.


// Two pointers walk through the string and add a space at each desired index. Time complexity O(n), space complexity O(n)




var addSpaces = function(s, spaces) {
    let left = 0;
    let right = 0;
    let temp = "";
    let count = 0;

    while (right < s.length) {
        if (right === spaces[count]) {
            temp += s.slice(left, right) + " ";
            left = right;
            count++;
        }
        right++;
    }

    temp += s.slice(left, right);
    return temp;
};
