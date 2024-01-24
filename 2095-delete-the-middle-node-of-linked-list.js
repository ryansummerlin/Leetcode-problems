// You are given the head of a linked list. Delete the middle node, and return the head of the modified linked list.

// The middle node of a linked list of size n is the ⌊n / 2⌋th node from the start using 0-based indexing, where ⌊x⌋ denotes
// the largest integer less than or equal to x.

// For n = 1, 2, 3, 4, and 5, the middle nodes are 0, 1, 1, 2, and 2, respectively.



// This is fairly straightforward. Iterate through once to find the midpoint. Iterate again until you get to the node
// before the midpoint, and then shift the next value at the node before the midpoint to the node after the midoint.
// Time complexity O(n), space complexity O(1);


var deleteMiddle = function(head) {
    let length = 0;
    let current = head;
    while (current) {
        length++;
        current = current.next;
    }

    if (length === 1) return null;

    let midIndex = Math.floor(length / 2);
    current = head;

    for (let i = 0; i < midIndex - 1; i++) {
        current = current.next;
    }

    current.next = current.next.next;

    return head;
};
