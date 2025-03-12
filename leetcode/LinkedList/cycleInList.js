// https://leetcode.com/problems/linked-list-cycle/description/
// Linked List Cycle

// Given head, the head of a linked list, determine if the linked list has a cycle in it.

// There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to. Note that pos is not passed as a parameter.
// Return true if there is a cycle in the linked list. Otherwise, return false.

// Example 1:
// Input: head = [3,2,0,-4], pos = 1
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 1st node (0-indexed).

// Example 2:
// Input: head = [1,2], pos = 0
// Output: true
// Explanation: There is a cycle in the linked list, where the tail connects to the 0th node.

// Example 3:
// Input: head = [1], pos = -1
// Output: false
// Explanation: There is no cycle in the linked list.

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {boolean}
 */

// MAIN SOLUTION
var hasCycle = function (head) {
    if (!head || !head.next) {
        return false;
    }

    let fast = head;
    let slow = head;

    while (fast && fast.next) {
        fast = fast.next.next;
        slow = slow.next;
        if (slow === fast) {
            return true;
        }
    }
    return false;
};

// Helper function to convert an array into a linked list and create a cycle
function createLinkedList(arr, pos) {
    if (arr.length === 0) return null;

    let head = new ListNode(arr[0]);
    let current = head;
    let cycleNode = null;

    for (let i = 1; i < arr.length; i++) {
        current.next = new ListNode(arr[i]);
        current = current.next;

        // Store the cycle position node
        if (i === pos) {
            cycleNode = current;
        }
    }

    // Create cycle if pos is valid
    if (pos !== -1) {
        current.next = cycleNode;
    }

    return head;
}

// Test cases
let head1 = createLinkedList([3, 2, 0, -4], 1);
console.log(hasCycle(head1)); // Output: true

let head2 = createLinkedList([1, 2], 0);
console.log(hasCycle(head2)); // Output: true

let head3 = createLinkedList([1], -1);
console.log(hasCycle(head3)); // Output: false

