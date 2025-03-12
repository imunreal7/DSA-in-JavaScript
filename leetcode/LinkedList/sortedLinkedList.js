// https://leetcode.com/problems/sort-list/
// Sort Linked List

// Given the head of a linked list, return the list after sorting it in ascending order.

// Example 1:
// Input: head = [4,2,1,3]
// Output: [1,2,3,4]

// Example 2:
// Input: head = [-1,5,3,4,0]
// Output: [-1,0,3,4,5]

// Example 3:
// Input: head = []
// Output: []
function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    if (!head || !head.next) return head; // Base case

    // Step 1: Find the middle of the list
    let slow = head,
        fast = head,
        prev = null;
    while (fast && fast.next) {
        prev = slow;
        slow = slow.next;
        fast = fast.next.next;
    }

    prev.next = null; // Split the list into two halves

    // Step 3: Merge the two sorted halves
    return merge(sortList(head), sortList(slow));
};

// Merge function (Same as merging two sorted lists)
function merge(list1, list2) {
    let dummy = new ListNode(-1);
    let current = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            current.next = list1;
            list1 = list1.next;
        } else {
            current.next = list2;
            list2 = list2.next;
        }
        current = current.next;
    }

    if (list1 !== null) current.next = list1;
    if (list2 !== null) current.next = list2;

    return dummy.next;
}

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

// Helper function to print a linked list
function printLinkedList(head) {
    let result = [];
    while (head) {
        result.push(head.val);
        head = head.next;
    }
    console.log(result);
}

// Test cases
let head1 = arrayToLinkedList([4, 2, 1, 3]);
let sorted1 = sortList(head1);
printLinkedList(sorted1); // Output: [1,2,3,4]

let head2 = arrayToLinkedList([-1, 5, 3, 4, 0]);
let sorted2 = sortList(head2);
printLinkedList(sorted2); // Output: [-1,0,3,4,5]

let head3 = arrayToLinkedList([]);
let sorted3 = sortList(head3);
printLinkedList(sorted3); // Output: []

