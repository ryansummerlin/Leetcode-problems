// Given a string s, find the length of the longest substring without repeating characters.

// Apparently my solution is terrible but I basically had this thing iterate through the string while keeping a hash map of the characters
// in the current string. Whenever I hit a repeated character, I reset i to the the first instance of the repeated character + 1, then
// set the hash map to empty, and start the process again.

// I think this has time complexity O(n) and space complexity O(n) as well but maybe the going back and forth on the while loop is
// causing the poor runtime? I think also KMP is the correct algo to use here


// My original code (not quite brute force but beats 13% of javascript users on time complexity lol)

var lengthOfLongestSubstring = function(s) {
    let longestStr = 0;
    let currentStr = 0;
    let currentChars = {};
    let i = 0;

    while (i < s.length) {
        let char = s[i];
        if (currentChars[char] === undefined) {
            currentStr++;
            currentChars[char] = i;
            longestStr = Math.max(longestStr, currentStr);
            i++;
        } else {
            currentStr = 0;
            i = currentChars[char] + 1;
            currentChars = {};
        }
    }

    return longestStr;
};


// I did this problem again using sliding window and the space complexity still sucks but I'm above 90th percentile for time complexity
// so we'll call it a win. I think time complexity is O(n), space complexity is O(n).

var lengthOfLongestSubstring2 = function(s) {
    let longestStr = 0;
    let currentStr = 0;
    let currentChars = {};
    let newStart;
    let i = 0;
    let j = 0;

    while (j < s.length) {
        if (currentChars[s[j]] === undefined) {
            currentChars[s[j]] = j;
            currentStr = j - i + 1;
            longestStr = Math.max(currentStr, longestStr);
            j++;
        } else {
            newStart = currentChars[s[j]] + 1;
            while (i < newStart) {
                delete currentChars[s[i]];
                i++;
            }
        }
    }

    return longestStr;
};
