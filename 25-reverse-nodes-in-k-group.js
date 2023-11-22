// Given the head of a linked list, reverse the nodes of the list k at a time, and return the modified list.

// k is a positive integer and is less than or equal to the length of the linked list. If the number of nodes is not a multiple of k then left-out nodes, in the end, should remain as it is.

// You may not alter the values in the list's nodes, only nodes themselves may be changed.




// Idk what I'm doing wrong here. Really thought this would work

var reverseKGroup = function(head, k) {
    if (k === 1) return head;
    let first = true;
    let current = head;
    let length = 0;
    while (current) {
        length++;
        current = current.next;
    }

    if (length === 1 || length === 0) return head;

    let prev;
    current = head;
    let future = current.next;
    let beg;
    let last;

    const reverse = function(length) {
        beg = current;
        prev = current;
        current = future;
        future = future.next;
        for (let i = 0; i < length - 1; i++) {
            future = current.next;
            current.next = prev;
            prev = current;
            current = future;
        }
    }


    for (let i = 0; i < Math.floor(length / k); i++) {
        reverse(k);
        if (first) {
            head = prev;
            first = false;
            last = beg;
        }
        last.next = prev;
        beg.next = current;
        last = beg;
    }

    return head;

};
