// You are given the head of a singly linked-list. The list can be represented as:

// L0 → L1 → … → Ln - 1 → Ln
// Reorder the list to be on the following form:

// L0 → Ln → L1 → Ln - 1 → L2 → Ln - 2 → …
// You may not modify the values in the list's nodes. Only nodes themselves may be changed.


// Just want to mention I solved this on my own and have the best submission runtime of all time ("beats 100.00% of javascript users")
// Basically, you need to reorder the list to alternate between the first and last nodes of the list until you get to the center.
// I started by counting how long the list is because the next step will be to reverse the second half of the list. Once I've split
// the initial list into two lists (the original first half and the second half reversed), I just run a for loop for the length of the
// list and traverse both lists, alternating the current values on each to get the desired solution. Runtime for this should be O(n).
// I go through the list 3 times basically, and space complexity is O(1) - just a few node variables but I don't actually create a new
// list at all.


var reorderList = function(head) {
    if (!head.next) return;

    let length = 0;
    let current = head;
    while (current !== null) {
        current = current.next;
        length++;
    }

    current = head;
    let prev = null;
    let count = 0;
    while (current !== null) {
        count++;
        let future = current.next;
        if (count > length / 2) {
            current.next = prev;
        }
        prev = current;
        current = future;
        if (count === length / 2 && length % 2 === 0) prev.next = null;
        else if (count === Math.floor(length / 2) + 1 && length % 2 === 1) prev.next = null;
    }

    let tail = prev;
    current = head;
    count = 0;

    while (count < length) {
        let futureHead = current.next;
        let futureTail = tail.next;
        current.next = tail;
        count++;
        tail.next = futureHead;
        count++;
        current = futureHead;
        tail = futureTail;
    }


};
