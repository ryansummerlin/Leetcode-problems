// Given a string containing digits from 2-9 inclusive, return all possible letter combinations that the number could represent.
// Return the answer in any order.

// A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.


// This is fairly similar to a lot of the other recursion problems I've done recently. Immediately, this seems like a good candidate
// for a tree/depth first search in order to grab all possible combinations. The trick here is that each of the digits maps to a 3 or
// for letter string so it helps to make a global object that can be referenced within the dfs. The other catch here is that
// you need to have both i and j counters to iterate through each digit and then through each letter of the string respectively.
// Overall, proud I was able to solve this one on my own without outside help. Time complexity on this is a bit weird. I think it's basically
// O(3^n) but there's some four letter strings mixed in as well. Space complexity is the same as you have to store all the possible
// combinations.



var letterCombinations = function(digits) {
    let obj = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    }

    let result = [];

    if (digits.length === 0) return result;

    const dfs = function(i, current) {
        // base case
        if (current.length === digits.length) {
            result.push(current.join(''));
            return;
        }

        // recursive case

        let str = obj[digits[i]];

        for (let j = 0; j < str.length; j++) {
            current.push(str[j]);
            dfs(i + 1, current);
            current.pop();
        }
    }

    dfs(0, []);
    return result;
};
