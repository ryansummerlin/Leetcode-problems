// Given the head of a singly linked list, reverse the list, and return the reversed list.

// The logic behind this is fairly simple and this is a super common interview question but the format threw me for a loop and I still
// had to look it up. Basically, you go through the linked list, declaring a prev, future and current while the current node is not null.
// At each iteration through the loop, we set the current.next to the previous, and then move everything forward. Things to keep in mind with linked
// lists: adding or deleting an item from a node is O(1). Accessing an element is O(n) because there is no indexing.

var reverseList = function(head) {
    let [prev, current] = [null, head];
    while (current !== null) {
        let future = current.next;
        current.next = prev;
        prev = current;
        current = future;
    }

    return prev;

};
