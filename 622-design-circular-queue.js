// Design your implementation of the circular queue. The circular queue is a linear data structure in which the operations are performed based on FIFO (First In First Out) principle, and the last position is connected back to the first position to make a circle. It is also called "Ring Buffer".

// One of the benefits of the circular queue is that we can make use of the spaces in front of the queue. In a normal queue, once the queue becomes full, we cannot insert the next element even if there is a space in front of the queue. But using the circular queue, we can use the space to store new values.

// Implement the MyCircularQueue class:

// MyCircularQueue(k) Initializes the object with the size of the queue to be k.
// int Front() Gets the front item from the queue. If the queue is empty, return -1.
// int Rear() Gets the last item from the queue. If the queue is empty, return -1.
// boolean enQueue(int value) Inserts an element into the circular queue. Return true if the operation is successful.
// boolean deQueue() Deletes an element from the circular queue. Return true if the operation is successful.
// boolean isEmpty() Checks whether the circular queue is empty or not.
// boolean isFull() Checks whether the circular queue is full or not.
// You must solve the problem without using the built-in queue data structure in your programming language.



// This one took me awhile but I did manage to solve it without outside help. Basically, the idea is that you create an empty array of
// size k, and every time you add an element, you shift all the elements one spot over to the left and push the latest one to the end
// to keep a bunch of empty spaces in front of the first element. What really threw me here and a good note in general is that
// 0 is coded as false. So if it inserts a zero, you can't use !el because it will see the zero and think it's actually empty. Time
// complexity on all functions should be O(n) just to loop through and then shift once you find the empty element. Space complexity
// should be O(1) beyond the initial array.



var MyCircularQueue = function(k) {
    this.q = new Array(k);
};

/**
 * @param {number} value
 * @return {boolean}
 */
MyCircularQueue.prototype.enQueue = function(value) {
    let i = this.q.length - 1;
    while (i >= 0) {
        let el = this.q[i];
        if (el === undefined || el === null) {
            this.q.push(value);
            this.q.shift();
            return true;
        }
        i--;
    }

    return false;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.deQueue = function() {
    let i = 0;
    while (i < this.q.length) {
        let el = this.q[i];
        if (el !== undefined && el !== null) {
            this.q[i] = null;
            return true;
        }
        i++;
    }

    return false;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Front = function() {
    for (let i = 0; i < this.q.length; i++) {
        let el = this.q[i];
        if (el !== null && el !== undefined) return el;
    }

    return -1;
};

/**
 * @return {number}
 */
MyCircularQueue.prototype.Rear = function() {
    let rear = this.q[this.q.length - 1];
    if (rear !== undefined && rear !== null) {
        return rear;
    } else {
        return -1;
    }

};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isEmpty = function() {
    for (let i = 0; i < this.q.length; i++) {
        let el = this.q[i];
        if (el) return false;
    }

    return true;
};

/**
 * @return {boolean}
 */
MyCircularQueue.prototype.isFull = function() {
    for (let i = 0; i < this.q.length; i++) {
        let el = this.q[i];
        if (!el) return false;
    }

    return true;
};
