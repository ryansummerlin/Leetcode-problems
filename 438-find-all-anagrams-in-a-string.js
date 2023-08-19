// Given two strings s and p, return an array of all the start indices of p's anagrams in s. You may return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using
// all the original letters exactly once.


// Finished this one without using any outside help and was pretty stoked about it. It's basically just a standard sliding window.
// First I have a subString object with the counts of each letter. The right pointer iterates through the first string and at each letter
// increments a currentStr object to make sure the current letter is in the substring and not over the allowable limit for an anagram.
// If it gets to the length of the substring without running into a problem, it documents the index of start, otherwise, the start moves
// up and decrements the currentObj until it gets within the bounds of the substring object.

// Time complexity O(n) because sliding window and one iteration through the loop. Space complexity O(n) - it's a bit slow because I
// ended up creating the two hash tables

var findAnagrams = function(s, p) {
    let subStrHash = {};
    for (let i = 0; i < p.length; i++) {
        subStrHash[p[i]] = (subStrHash[p[i]] || 0) + 1;
    }

    let start = 0;
    let output = [];
    let currentHash = {};

    for (let i = 0; i < s.length; i++) {
        currentHash[s[i]] = (currentHash[s[i]] || 0) + 1;
        if (currentHash[s[i]] <= subStrHash[s[i]]) {
            if (i - start + 1 === p.length) {
                output.push(start);
                currentHash[s[start]] -= 1;
                start++;
            }
        } else if (subStrHash[s[i]] === undefined) {
            start = i + 1;
            currentHash = {};
        } else {
            while (currentHash[s[i]] > subStrHash[s[i]]) {
                currentHash[s[start]] -= 1;
                start++;
            }
        }
    }

    return output;
};
