// You are given the heads of two sorted linked lists list1 and list2.

// Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.

// Return the head of the merged linked list.



// This is another linked list problem. The code's a bit sloppy but most of it is dealing with edge cases. // Basically,
// while both of the current nodes on the list are not null, I want to compare the values, and add the smaller one to a new
// linked list. Once one of the lists is null, I'll add the entire other list to the merged list and return. The edge cases
// deal with situations where one or both of the lists are null, in which case you return the other one. Time complexity for this
// should be O(n + m), and space complexity should be the same.




var mergeTwoLists = function(list1, list2) {
    let merged = list1;

    if (!list1) return list2;
    if (!list2) return list1;


    if (list2.val < list1.val) {
        merged = list2;
        list2 = list2.next;
    } else {
        list1 = list1.next;
    }

    let current = merged;

    while (list1 || list2) {
        if (!list1) {
            current.next = list2;
            break;
        }

        if (!list2) {
            current.next = list1;
            break;
        }

        if (list1.val < list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    return merged;
};
