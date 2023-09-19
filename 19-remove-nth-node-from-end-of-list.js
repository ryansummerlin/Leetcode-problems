// Given the head of a linked list, remove the nth node from the end of the list and return its head.

// Was actually able to solve this one on my own after taking about a week and a half off from leetcode.
// Basically, we loop through the entire linked list and count the length of the list, in order to find
// the correct index to alter the list at. Once we have the length, we subtract n to get the index, and then
// use a for loop to find the node before the one we want to remove. From there, we set current.next to current.next.next
// to remove the desired node, and then just return the head. Tricky part is edge cases - when the linked list is length 1
// or when the node to be removed is the first node. Time complexity should be O(n) - we need to loop through the entire list
// once (or twice max) and then removing the node is just O(1). Space complexity should be O(1) - we're altering the original
// list in place



var removeNthFromEnd = function(head, n) {
    if (!head.next) return null;

    let current = head;
    let length = 0;
    while (current !== null) {
        current = current.next;
        length++;
    }

    if (length === n) return head.next;

    let index = length - n;
    current = head;
    for (let i = 1; i < index; i++) {
        current = current.next;
    }

    current.next = current.next.next;

    return head;
};
