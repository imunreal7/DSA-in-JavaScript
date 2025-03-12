//  https://leetcode.com/problems/reverse-linked-list-ii/
// Reverse Linked List II

// Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.

//Example 1:
// Input: head = [1,2,3,4,5], left = 2, right = 4
// Output: [1,4,3,2,5]

// Example 2:
// Input: head = [5], left = 1, right = 1
// Output: [5]

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    if (!head || left === right) return head; // Edge case: if only one node or no reversal needed

    let dummy = new ListNode(0, head); // Dummy node to handle edge cases
    let prev = dummy;

    // Step 1: Move `prev` to the node before `left`
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }

    // Step 2: Reverse the sublist from `left` to `right`
    let curr = prev.next;
    let next = null;
    let prevReversed = null;

    for (let i = left; i <= right; i++) {
        next = curr.next;
        curr.next = prevReversed;
        prevReversed = curr;
        curr = next;
    }

    // Step 3: Reconnect the reversed sublist with the remaining part of the list
    prev.next.next = curr; // Connect the last node of the reversed part to `curr`
    prev.next = prevReversed; // Connect the node before `left` to the new reversed head

    return dummy.next;
};

// Helper function to convert an array into a linked list
function arrayToLinkedList(arr) {
    let dummy = new ListNode();
    let current = dummy;
    for (let num of arr) {
        current.next = new ListNode(num);
        current = current.next;
    }
    return dummy.next;
}

// Helper function to convert a linked list back to an array for testing
function linkedListToArray(head) {
    let result = [];
    let current = head;
    while (current !== null) {
        result.push(current.val);
        current = current.next;
    }
    return result;
}

// Test cases
let head1 = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log(linkedListToArray(reverseBetween(head1, 2, 4))); // Output: [1, 4, 3, 2, 5]

let head2 = arrayToLinkedList([5]);
console.log(linkedListToArray(reverseBetween(head2, 1, 1))); // Output: [5]

