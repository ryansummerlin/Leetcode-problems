// Given a string s which represents an expression, evaluate this expression and return its value.

// The integer division should truncate toward zero.

// You may assume that the given expression is always valid. All intermediate results will be in the range of [-231, 231 - 1].

// Note: You are not allowed to use any built-in function which evaluates strings as mathematical expressions, such as eval().


// Even though this solution is O(n) it is a pretty poor solution time complexity wise just because I end up looping through the array
// a total of 3 times. Basically, we need to get rid of all the spaces and separate the numbers and operands. Once that's done, I looped
// through the resulting array using a stack to perform the multiplication and divison. Then, I looped through again to perform addition
// and subtraction. From looking elsewhere online, it seems like you can do the addition/subtraction and multiplication/division
// simultaneously by just flipping the signs on the numbers being subtracted and then adding everything together at the end.
// Space complexity is also O(n) although turning s into an array is probably unnecessary if I actually wanted to cut down on space
// complexity.




var calculate = function(s) {
    let arr = [];
    let ints = '0123456789';
    for (let i = 0; i < s.length; i++) {
        let el = s[i];
        if (el === ' ') {
            continue;
        } else if (ints.includes(el) && Number.isInteger(parseInt(arr[arr.length - 1]))){
            arr[arr.length - 1] += el;
        } else {
            arr.push(el);
        }
    }
    let stack = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el === '*') {
            let first = stack.pop();
            let second = arr[i + 1];
            stack.push(first * second);
            i++;
        } else if (el === '/') {
            let first = stack.pop();
            let second = arr[i + 1];
            stack.push(Math.trunc(first / second));
            i++;
        } else if (el === '+' || el === '-') {
            stack.push(el);
        } else {
            stack.push(parseInt(el));
        }
    }

    arr = stack;
    stack = [];
    for (let i = 0; i < arr.length; i++) {
        let el = arr[i];
        if (el === '+') {
            let first = stack.pop();
            let second = arr[i + 1];
            stack.push(first + second);
            i++;
        } else if (el === '-') {
            let first = stack.pop();
            let second = arr[i + 1];
            stack.push(first - second);
            i++;
        } else {
            stack.push(el);
        }
    }

    return stack.pop();
};
