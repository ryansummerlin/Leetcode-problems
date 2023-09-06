// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.

// Return true if there is a cycle in the linked list. Otherwise, return false.


// The key to this one was recognizing that if a cycle exists, you can have two pointers running, with the second running twice as
// fast as the first. If they are ever equal at any time, then there is a cycle, if not there is no cycle.


var hasCycle = function(head) {
    if (head === null || head.next === null) return false;


    let current = head;
    let faster = head;
    while (current !== null && faster !== null) {
        current = current.next;
        faster = faster.next;
        if (faster !== null) faster = faster.next;
        if (current === faster) {
            return true;
        }
    }

    return false;
};
