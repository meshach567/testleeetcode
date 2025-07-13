// Problem:
// Merge two sorted linked lists and return it as a new sorted list.

// Input: l1 = [1, 2, 4], l2 = [1, 3, 4]
// Output: [1, 1, 2, 3, 4, 4]

function mergeTwoLists(l1, l2) {
    let dummy =  NodeList(0);
    let current = dummy;
    
    while (li !== null && l2 !== null) {
        if (l1.val < l2.val) {
            current.next = l1;
            l1 = l1.next;
        } else {
            current.next = l2;
            l2 = l2.next;
        }
        current = current.next;
    }

    current.next = l1 !== null ? l1 : l2;
    return dummy.next;
}

console.log(mergeTwoLists([1, 2, 4], [1, 3, 4])); // Output: [1, 1, 2, 3, 4, 4]