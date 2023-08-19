// You are given a string s and an integer k. You can choose any character of the string and change it to any other
// uppercase English character. You can perform this operation at most k times.

// Return the length of the longest substring containing the same letter you can get after performing the above operations.


// Like a lot of the other substring problems, this is a sliding window. I was really struggling at first and had to look at the solution
// but generally a mistake I've made a couple times now is that in a sliding window, the right pointer should never move backwards,
// it should be represented in the for loop. In this problem, the key insight is that the window is fine as long as the length of
// the window minus the frequency of the most common character is less than k, the number of replacements. When this is not the case,
// then the left pointer needs to move up, decrementing the frequency hash table as it goes.

// Like most of the sliding window problems, this comes out to O(n) time complexity and O(n) space complexity due to the hash table.


var characterReplacement = function(s, k) {
    let longest = 0;
    let mostCommonChar = 0;
    let hash = {};
    let start = 0;

    for (let end = 0; end < s.length; end++) {
        hash[s[end]] = hash[s[end]] + 1 || 1;

        mostCommonChar = Math.max(mostCommonChar, hash[s[end]]);

        while ((end - start + 1 - mostCommonChar) > k) {
            hash[s[start]]--;
            start++;
        }

        longest = Math.max((end - start + 1), longest);
    }

    return longest;
};
