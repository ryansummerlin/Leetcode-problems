// Given two strings s and t, return true if t is an anagram of s, and false otherwise.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase,
// typically using all the original letters exactly once.


// This one is pretty simple. You just sort each string and then run a for loop checking for non-matches.
// Tiime complexity O(nlogN) - not quite sure but I think the sort makes it slower than O(n),
// space complexity O(n) for making the two sorted arrays.


var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;

    sArr = s.split('');
    tArr = t.split('');

    sArr.sort();
    tArr.sort();

    for (let i = 0; i < sArr.length; i++) {
        if (sArr[i] !== tArr[i]) return false;
    }

    return true;
};
