// Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine
// and false otherwise.

// Each letter in magazine can only be used once in ransomNote.


// This is a pretty simple hashmap problem. Basically, you loop through the magazine to create an object with possible letters
// and their respective counts, then loop through the magazine, checking each character to make sure it's viable by checking
// a) is it a value in the hash, and b) is the corresponding count greater than one. If it fails one of these tests, then you
// return false, if it gets to the end of the loop return true


var canConstruct = function(ransomNote, magazine) {
    let hash = {};
    for (let i = 0; i < magazine.length; i++) {
        let char = magazine[i];
        hash[char] = (hash[char] || 0) + 1;
    }

    for (let i = 0; i < ransomNote.length; i++) {
        let char = ransomNote[i];
        if (!hash[char] || hash[char] < 1) {
            return false;
        } else {
            hash[char]--;
        }
    }

    return true;
};
