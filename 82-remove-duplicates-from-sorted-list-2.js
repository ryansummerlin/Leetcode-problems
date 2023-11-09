// Given the head of a sorted linked list, delete all nodes that have duplicate numbers, leaving only distinct numbers
// from the original list. Return the linked list sorted as well.


// The key to my solution here is basically just creating a hash map to keep track of the number of instances of each value
// in the linked list. After I have the hash map, I iterate through the linked list and de link any duplicate values.
// Time complexity should be O(n) and space complexity the same due to the hash map



var deleteDuplicates = function(head) {
    if (!head) return null;
    let hash = {};
    let current = head;
    while (current) {
        if (hash[current.val]) {
            hash[current.val] += 1;
        } else {
            hash[current.val] = 1;
        }

        current = current.next;
    }


    while (head && hash[head.val] > 1) {
        head = head.next;
    }
    if (!head) return null;
    current = head.next;
    let prev = head;
    while (current) {
        if (hash[current.val] > 1) {
            prev.next = current.next;
        } else {
            prev = prev.next
        }
        current = current.next;
    }

    return head;
};
