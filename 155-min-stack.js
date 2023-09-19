// Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

// Implement the MinStack class:

// MinStack() initializes the stack object.
// void push(int val) pushes the element val onto the stack.
// void pop() removes the element on the top of the stack.
// int top() gets the top element of the stack.
// int getMin() retrieves the minimum element in the stack.
// You must implement a solution with O(1) time complexity for each function.



// Solved this one on my own and wasn't actually sure that it was going to work when I hit submit. Basically, the key insight
// here is to have two stacks - one as the "official" stack and one as the minimum stack. You obviously want to keep track of
// the minimum value but if you use an int you run into trouble whenever the min value gets popped off the main stack. However,
// you can fix this by making your "min" variable a second stack. Whenever you pop something off of the main stack, you check
// to see if that was the current value on top of the min stack. If so, then pop the value off of the min stack and the previous min
// is now at the top of the stack. This is O(1) time complexity for everything and O(n) space complexity for the two stacks.


var MinStack = function() {
    this.stack = [];
    this.min = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.stack.push(val);
    if (this.min.length === 0) {
        this.min.push(val)
    } else if (val <= this.min[this.min.length - 1]) {
        this.min.push(val);
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    let el = this.stack.pop();
    if (this.min[this.min.length - 1] === el) this.min.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1];
};
