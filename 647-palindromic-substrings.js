// Given a string s, return the number of palindromic substrings in it.

// A string is a palindrome when it reads the same backward as forward.

// A substring is a contiguous sequence of characters within the string.




// This is definitely a suboptimal solution (beats 10% of existing solutions) but the bare bones of this is:
// loop through each character and starting from the back of the word find all characters that are the same
// as the character at your current iteration. These are potential palindromes. From here, I used a helper
// function to loop through each substring and check if it is a palindrome, iterating the count by one for
// each palindrome. Finally, I returned the count. Time complexity here is terrible (I think O(n^3)). Space complexity
// isn't terrible but it's not great either - should be O(n)

var countSubstrings = function(s) {
    const checkPalindrome = function(str) {
      let start = 0;
      let end = str.length - 1;
      while (end > start) {
        if (str[start] !== str[end]) return false;
        start++;
        end--;
      }

      return true;
    }

    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let words = [];
        for (let j = s.length - 1; j >= i; j--) {
          if (s[j] === s[i]) words.push(s.slice(i, j + 1));
        }
        words.forEach(word => {
          if (checkPalindrome(word)) count++;
        });
    }

    return count;
};
