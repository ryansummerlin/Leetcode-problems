// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using
// all the original letters exactly once.


// Took me awhile but I was able to solve it without using outside help. Unfortunately, the time complexity is terrible and I'm in
// the 15% percentile. Going to look up online how to improve the time complexity


var groupAnagrams = function(strs) {
    let output = [];

    if (strs.length === 1) return [[strs[0]]];

    strs = strs.sort((a, b) => a.length > b.length);
    let sortedStrs = strs.map((word, i) => [word.split('').sort().join(''), i]);
    sortedStrs.sort();

    let word = sortedStrs[0][0];
    let idx = sortedStrs[0][1];

    output.push([strs[idx]]);

    for (let i = 1; i < sortedStrs.length; i++) {
        word = sortedStrs[i][0];
        idx = sortedStrs[i][1];
        if (word === sortedStrs[i - 1][0]) {
            output[output.length - 1] = [...output[output.length - 1], strs[idx]];
        } else {
            output.push([strs[idx]]);
        }
    }

    return output;
};

// Better solution from YT never sorts the full array. Instead, loop through the array, sort each word, and then set the sorted word
// as a key with the value being the actual word from the array. On future iterations, check to see if the sorted word exists as a key,
// and if so, push the new word to the value at the key, and if not, create a new key value pair. Time complexity O(n) for this one
// and you avoid the computationally expensive sort from the first solution.



var groupAnagrams = function(strs) {
    let obj = {};

    for (let i = 0; i < strs.length; i++) {
        let key = strs[i].split('').sort().join('');

        if (obj[key] === undefined) {
            obj[key] = [strs[i]];
        } else {
            obj[key].push(strs[i]);
        }
    }

    return Object.values(obj);
};
