// Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.

// Do not modify the linked list.


// This solution uses the same fast/slow method to detect a cycle. Once you've confirmed that a cycle exists, you want to
// keep the slow pointer in position, and then start a new pointer from the beginning. When they intersect, they will intersect
// at the start of the cycle (not quite sure why?). Time complexity should be O(n).



var detectCycle = function(head) {
    if (!head || !head.next) return null;
    let fast = head;
    let slow = head;
    let pointer = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (fast === slow) break;
    }

    if (fast !== slow) return null;

    while (slow !== pointer) {
        pointer = pointer.next;
        slow = slow.next;
    }

    return pointer;

};
