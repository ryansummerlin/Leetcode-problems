// You are given an array of strings tokens that represents an arithmetic expression in a Reverse Polish Notation.

// Evaluate the expression. Return an integer that represents the value of the expression.

// Note that:

// The valid operators are '+', '-', '*', and '/'.
// Each operand may be an integer or another expression.
// The division between two integers always truncates toward zero.
// There will not be any division by zero.
// The input represents a valid arithmetic expression in a reverse polish notation.
// The answer and all the intermediate calculations can be represented in a 32-bit integer.


// This was my first time seeing reverse polish notation so it threw me for a loop and I had to look for outside help
// but once you get the hang of it it's actually a pretty simple stack structure. Basically, you iterate through the tokens,
// adding any integers to the stack. Once you hit an operand, you pop the first two integers off the stack, evaluate them
// with the operand, and then push the new number back onto the stack. Time complexity is O(n), space complexity is O(n) as well.



var evalRPN = function(tokens) {
    let stack = [];
    for (let i = 0; i < tokens.length; i++) {
        let el = tokens[i];
        if (el === '+') {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first + second);
        } else if (el === '-') {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first - second);
        } else if (el === '*') {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(first * second);
        } else if (el === '/') {
            let second = stack.pop();
            let first = stack.pop();
            stack.push(Math.trunc(first / second));
        } else {
            stack.push(parseInt(el));
        }
    }

    return stack.pop();
};
