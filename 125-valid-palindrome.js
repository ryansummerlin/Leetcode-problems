// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all
// non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.


// This is an easy ranked problem. Basically, you need to pull all of the non-alphanumeric characters out of the string, and then
// check for the palindrome. I did this first with two pointers starting at the midpoint but it's actually a lot easier to have each
// pointer start at the opposite end of the string and just work inwards.

// Time complexity: O(n), space complexity: O(n) for the new t translation of the s paramater.

var isPalindrome = function(s) {
    let alphabet = 'abcdefghijklmnopqrstuvwxyz0123456789';
    s = s.toLowerCase();

    let t = '';

    for (let i = 0; i < s.length; i++) {
        if (alphabet.includes(s[i])) t += s[i];
    }

    if (t.length <= 1) return true;

    let i = 0;
    let j = t.length - 1;

    while (i <= j) {
        if (t[i] !== t[j]) {
            return false;
        }
        i++;
        j--;
    }

    return true;
};
