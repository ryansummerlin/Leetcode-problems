// Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue (push, peek, pop, and empty).

// Implement the MyQueue class:

// void push(int x) Pushes element x to the back of the queue.
// int pop() Removes the element from the front of the queue and returns it.
// int peek() Returns the element at the front of the queue.
// boolean empty() Returns true if the queue is empty, false otherwise.
// Notes:

// You must use only standard operations of a stack, which means only push to top, peek/pop from top, size, and is empty operations are valid.
// Depending on your language, the stack may not be supported natively. You may simulate a stack using a list or deque (double-ended queue) as long as you use only a stack's standard operations.


// This one is a little more complicated imo than going the other way. The push and empty functions are the same across queues and stacks
// so nothing special there. To dequeue tho, you have to use two queues. First, you pop everything but the last element off of the
// original stack. Then pop that last element off and save it as a value. From there, pop everything back off the second stack and readd
// it to the first stack to preserve the original order. The tricky part for me here was in dealing with the loops - I had to set a separate
// length variable bc the adjusting of the length of each stack via pop was throwing errors as I tried to go through the loop.
// Peek is pretty similar, but since you don't alter the array at all, you can just reset this.first to a shallow copy of its original
// form after you've popped all but the first element off of the original stack. Time complexity for this is O(n), space complexity
// O(n) as well



var MyQueue = function() {
    this.first = [];
    this.second = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.first.push(x);
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    let firstLength = this.first.length;
    for (let i = 0; i < firstLength - 1; i++) {
        this.second.push(this.first.pop());
    }
    let el = this.first.pop();
    let secondLength = this.second.length;
    for (let i = 0; i < secondLength; i++) {
        this.first.push(this.second.pop());
    }
    return el;
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    let original = this.first.slice();
    let length = original.length;
    for (let i = 0; i < length - 1; i++) {
        this.second.push(original.pop());
    }
    this.second = [];
    return original.pop();
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.first.length === 0;
};
