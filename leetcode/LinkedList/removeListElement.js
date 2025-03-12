// https://leetcode.com/problems/remove-linked-list-elements/
// Remove Linked List Elements

// Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.

//Example 1:
// Input: head = [1,2,6,3,4,5,6], val = 6
// Output: [1,2,3,4,5]

// Example 2:
// Input: head = [], val = 1
// Output: []

// Example 3:
// Input: head = [7,7,7,7], val = 7
// Output: []

function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    // Handle leading nodes with the target value
    while (head !== null && head.val === val) {
        head = head.next;
    }

    let current = head;

    while (current !== null && current.next !== null) {
        if (current.next.val === val) {
            current.next = current.next.next; // Skip the node with val
        } else {
            current = current.next; // Move forward
        }
    }

    return head;
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
let head1 = arrayToLinkedList([1, 2, 6, 3, 4, 5, 6]);
console.log(linkedListToArray(removeElements(head1, 6))); // Output: [1, 2, 3, 4, 5]

let head2 = arrayToLinkedList([]);
console.log(linkedListToArray(removeElements(head2, 1))); // Output: []

