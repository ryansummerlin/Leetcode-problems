// Implement a last-in-first-out (LIFO) stack using only two queues. The implemented stack should support all the functions of a normal stack (push, top, pop, and empty).

// Implement the MyStack class:

// void push(int x) Pushes element x to the top of the stack.
// int pop() Removes the element on the top of the stack and returns it.
// int top() Returns the element on the top of the stack.
// boolean empty() Returns true if the stack is empty, false otherwise.
// Notes:

// You must use only standard operations of a queue, which means that only push to back, peek/pop from front, size and is empty operations are valid.
// Depending on your language, the queue may not be supported natively. You may simulate a queue using a list or deque (double-ended queue) as long as you use only a queue's standard operations.


// As with a lot of these class implementation problems, the hardest part for me is just syntax. The key to the syntax is to declare
// a this.variable, and you will call all of the function prototypes on this.variable. For this one, I used this.q (queue) as the
// variable that the prototypes will act on. Javascript doesn't have a queue class so I used an array, with arr[0] being the "front"
// and the last element being the back. Pop, top, and empty are all easy to implement with shift, arr[0] and arr.length === 0 respectively.
// The harder one is push, which is more intuitive with 2 queues (which is allowed). With one queue, the way to do it is to push the
// element to the end, and then dequeue and re-add elements arr.length - 1 times (until the original element is now the first in the queue).
// This mimics the stack's behavior. In javascript this is actually terrible runtime - it's O(n^2), O(n) to shift for O(n - 1) times.
// However, queues are supposed to be able to queue and dequeue in O(1) so in practice it's probably fine.


var MyStack = function() {
    this.q = [];
};

/**
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
    this.q.push(x);
    for (let i = 0; i < this.q.length - 1; i++) {
        this.q.push(this.q.shift());
    }
};

/**
 * @return {number}
 */
MyStack.prototype.pop = function() {
    return this.q.shift();
};

/**
 * @return {number}
 */
MyStack.prototype.top = function() {
    return this.q[0];
};

/**
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
  return this.q.length === 0;
};
