// You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order,
// and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

// You may assume the two numbers do not contain any leading zero, except the number 0 itself.



// I initially tried to use the math functionality in javascript to finish this one and play around with reversing
// strings/parseInt etc but I ran into some NaN problems when the linked list was giving numbes like 1+e30.
// Instead, I'm just iterating through the linked lists backwards and doing the math myself. The trick here is basically
// doing the carry and keeping track of when the two ints sum to over 10. Time complexity should be O(n), space complexity
// O(n) as well



var addTwoNumbers = function(l1, l2) {
    let head = new ListNode(null, null);
    let current = head;
    let carry = 0;
    while (l1 || l2) {
        let val;
        if (l1 && l2) {
            val = l1.val + l2.val + carry;
            l1 = l1.next;
            l2 = l2.next;
        } else if (l1 && !l2) {
            val = l1.val + carry;
            l1 = l1.next;
        } else if (!l1 && l2) {
            val = l2.val + carry;
            l2 = l2.next;
        }

        current.next = new ListNode(val % 10, null);
        if (val >= 10) {
            carry = 1;
        } else {
            carry = 0;
        }
        current = current.next;
    }

    if (carry === 1) current.next = new ListNode(1, null);

    return head.next;

};
