// Given the head of a sorted linked list, delete all duplicates such that each element appears only once.
// Return the linked list sorted as well.


// Traverse the linked list and add each value as you go to a hash map. If the next value in the traversal is true on the hash
// map, then set the current.next to the node after the next. If not, go on to the next node. Time complexity O(n), space complexity
// O(n) as well.


var deleteDuplicates = function(head) {
    if (!head) return null
    let hash = {};
    let current = head;
    hash[current.val] = true;
    while (current && current.next) {
        if (hash[current.next.val]) {
            current.next = current.next.next;
        } else {
            hash[current.next.val] = true;
            current = current.next;
        }
    }

    return head;
};
