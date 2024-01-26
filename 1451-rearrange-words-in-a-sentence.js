// Given a sentence text (A sentence is a string of space-separated words) in the following format:

// First letter is in upper case.
// Each word in text are separated by a single space.
// Your task is to rearrange the words in text such that all words are rearranged in an increasing order of their lengths.
// If two words have the same length, arrange them in their original order.

// Return the new text following the format shown above.


// This is not the most efficient way to complete this problem but it probably is the simplest. Make everything lowercase,
// split the string into an array of words, sort by length, then rejoin into a string. Finally make the first word uppercase.
// Time complexity O(nLog(n)) bc of the sort. Space complexity O(n).

// Kind of funny actually but I currently have the fastest solution in javascript lol. I guess this thing works a bit faster than
// I thought


var arrangeWords = function(text) {
    text = text.toLowerCase();
    textArr = text.split(' ');
    textArr.sort((a, b) => a.length - b.length);
    textArr[0] = textArr[0][0].toUpperCase() + textArr[0].slice(1);
    return textArr.join(' ');
};
