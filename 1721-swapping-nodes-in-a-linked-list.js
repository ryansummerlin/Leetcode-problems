// You are given the head of a linked list, and an integer k.

// Return the head of the linked list after swapping the values of the kth node from the beginning and
// the kth node from the end (the list is 1-indexed).



// Iterated through the linked list once to count the number of nodes. Used the value of k to back into the index of
// the kth node from the end of the list. Iterated through with two different pointers to find the nodes that needed to
// be swapped, then swapped their values and returned the head. Time complexity O(n), space complexity O(1).

var swapNodes = function(head, k) {
    let count = 0;
    let current = head;
    while (current) {
        count++;
        current = current.next;
    }
    let n = count - k + 1;
    let first = head;
    let second = head;
    for (let i = 1; i < k; i++) {
        first = first.next;
    }
    for (let i = 1; i < n; i++) {
        second = second.next;
    }

    [first.val, second.val] = [second.val, first.val];

    return head;
};
