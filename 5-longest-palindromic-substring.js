// Given a string s, return the longest palindromic substring in s

// This one took me awhile and I was fairly close to giving up a couple times but finally got it without outside assistance.
// Basically, you need to iterate through the for loop, and check to see if each character is the center of a palindrome. When I
// started at first, I was trying to distinguish between palindromes with one center letter, and palindromes with two center letters
// but the key insight that helped me solve the problem was understanding that I can just run a while loop on each iteration to keep adding
// the next char to the current string if it's the same value as the current char. After that, then I start going outwards on left and
// right.

// In worst case, this is O(n^2) - in the case that the string is the same letter repeated over and over again, you'd loop through the
// entire string on every iteration. The memory for this should be O(n), in that same case where you're creating a "longest" substring
// that equals the entire original string.

var longestPalindrome = function(s) {
    let longest = s[0];
    let current = '';

    for (let i = 0; i < s.length; i++) {
        current = s[i];
        let j = i;
        let k = i - 1

        while (s[i] === s[j + 1]) {
            current += s[j + 1];
            j++;
        }
        j++;

        while (s[k] === s[j] && s[j]) {
            current = s[k] + current + s[j];
            k--;
            j++;
        }

        if (current.length > longest.length) longest = current;
    }

    return longest;
};


// Note: after watching a video on this to confirm my answer, it looks like you can improve both time and space complexity incrementally
// by keeping the "current" as a two value of array of [min, max] instead of the substring itself. Then, at the end you just end up
// slicing the original string at the indices. But fuck em I like my way better.
