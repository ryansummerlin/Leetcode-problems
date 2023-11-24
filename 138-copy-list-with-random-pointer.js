// A linked list of length n is given such that each node contains an additional random pointer, which could point to any node in the list, or null.

// Construct a deep copy of the list. The deep copy should consist of exactly n brand new nodes, where each new node has its value set to the value of its corresponding original node. Both the next and random pointer of the new nodes should point to new nodes in the copied list such that the pointers in the original list and copied list represent the same list state. None of the pointers in the new list should point to nodes in the original list.

// For example, if there are two nodes X and Y in the original list, where X.random --> Y, then for the corresponding two nodes x and y in the copied list, x.random --> y.

// Return the head of the copied linked list.

// The linked list is represented in the input/output as a list of n nodes. Each node is represented as a pair of [val, random_index] where:

// val: an integer representing Node.val
// random_index: the index of the node (range from 0 to n-1) that the random pointer points to, or null if it does not point to any node.
// Your code will only be given the head of the original linked list.



// Still struggling to get this to work but I think this is more or less the correct idea. Basically, I loop through the linked list
// once and create the shallow copy, setting next to the appropriate node and leaving randoms null. All the while, I store each new node
// in a hashmap under the key of the corresponding original node. Then, when I loop through again I just set the random of each node
// to the corresponding hashmap value of the original random. Time complexity here should be O(n), same with space complexity.



var copyRandomList = function(head) {
    if (!head || !head.next) return head;
    let currentOld = head;
    let newHead = new Node(currentOld.val, null, null);
    let currentNew = newHead;
    let hash = {};
    hash[currentOld] = currentNew;
    while (currentOld && currentOld.next) {
        currentOld = currentOld.next;
        currentNew.next = new Node(currentOld.val, null, null);
        currentNew = currentNew.next;
        hash[currentOld] = currentNew;
    }

    currentNew.next = null;

    currentOld = head;
    currentNew = newHead;
    while (currentOld) {
        currentNew.random = hash[currentOld.random];
        currentNew = currentNew.next;
        currentOld = currentOld.next;
    }

    return newHead;
};
