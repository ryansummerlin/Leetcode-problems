// Given the head of a linked list, rotate the list to the right by k places.



// This one wasn't terribly hard but there's a handful of edge cases to keep track of. Basically, I iterate
// through the entire list first and count the number of nodes. From there I can back into the index of the node
// on which to rotate. Once I've found the pivot, I set the previous node.next to null, save the pivot, and iterate
// through the pivot to the end. At the last node, I set the next value to the original head. A couple edge cases to keep
// track of: when k > length (use modulo to get around that) and when the list is null, one, or two nodes. Time complexity
// O(n) space complexity should be O(1).

var rotateRight = function(head, k) {
    if (!head || k === 0 || !head.next) return head;
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }
    k = k % length;
    if (k === 0) return head;
    let index = length - k;
    current = head;
    for (let i = 1; i < index; i++) {
        current = current.next;
    }
    pivot = current.next;
    current.next = null;
    current = pivot;
    while (current && current.next) {
        current = current.next;
    }
    // return pivot;
    current.next = head;
    return pivot;
};
