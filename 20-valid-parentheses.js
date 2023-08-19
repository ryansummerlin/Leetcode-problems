// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.


// This is an easy rated problem and took me way longer than it really should have. Basically, the insight here is that you want
// to create a stack, and add open parentheses to the stack while popping off the last value on the stack if the closed parentheses
// matches the last open one. The order is what initially threw me off when I didn't have a stack, but just counters for open
// parentheses instead. Time/space complexity is decent here - O(n) for both. I'm beating 73% of javascript submissions for time
// complexity which is probably good enough.


var isValid = function(s) {
    let current = [];

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            current.push('(');
        } else if (s[i] === ')' && current[current.length - 1] === '(') {
            current.pop();
        } else if (s[i] === '{') {
            current.push('{');
        } else if (s[i] === '}' && current[current.length - 1] === '{') {
            current.pop();
        } else if (s[i] === '[') {
            current.push('[');
        } else if (s[i] === ']' && current[current.length - 1] === '[') {
            current.pop();
        } else {
            return false;
        }

        if (current.length > s.length / 2) return false;

    }

    if (current.length !== 0) return false;

    return true;
};
