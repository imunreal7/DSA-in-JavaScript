// https://leetcode.com/problems/middle-of-the-linked-list/
// Middle of the linked list

// Given the head of a singly linked list, return the middle node of the linked list. If there are two middle nodes, return the second middle node.

// Example 1:
// Input: head = [1,2,3,4,5]
// Output: [3,4,5]
// Explanation: The middle node of the list is node 3.

// Example 2:
// Input: head = [1,2,3,4,5,6]
// Output: [4,5,6]
// Explanation: Since the list has two middle nodes with values 3 and 4, we return the second one.

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
//: MAIN SOLUTION
var middleNode = function (head) {
    let slow = head,
        fast = head;

    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
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

// Test case
let head = arrayToLinkedList([1, 2, 3, 4, 5]);
console.log(middleNode(head)); // Expected output: Node with value 3

