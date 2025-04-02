/**
 * GeeksforGeeks Problem: Reverse First K Elements of Queue
 * Problem Link: https://www.geeksforgeeks.org/reversing-first-k-elements-queue/
 *
 * Problem Description:
 * Given a queue and an integer K, reverse the first K elements of the queue.
 * The rest of the queue should remain in the same order.
 *
 * Example 1:
 * Input: queue = [1, 2, 3, 4, 5], k = 3
 * Output: [3, 2, 1, 4, 5]
 *
 * Example 2:
 * Input: queue = [10, 20, 30, 40, 50, 60], k = 4
 * Output: [40, 30, 20, 10, 50, 60]
 */

class Queue {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        this.items.push(element);
    }

    dequeue() {
        return this.items.shift();
    }

    front() {
        return this.items[0];
    }

    size() {
        return this.items.length;
    }
}

function reverseFirstK(queue, k) {
    let stack = [];

    // Step 1: Dequeue first K elements and push them into the stack
    for (let i = 0; i < k; i++) {
        stack.push(queue.dequeue());
    }

    // Step 2: Pop elements from stack and enqueue them back
    while (stack.length > 0) {
        queue.enqueue(stack.pop());
    }

    // Step 3: Move remaining (N-K) elements to maintain order
    let size = queue.size();
    for (let i = 0; i < size - k; i++) {
        queue.enqueue(queue.dequeue());
    }
}

// Example usage
let q = new Queue();
let arr = [1, 2, 3, 4, 5];
let k = 3;

// Enqueue elements into queue
for (let num of arr) {
    q.enqueue(num);
}

reverseFirstK(q, k);

console.log(q.items); // Output: [3, 2, 1, 4, 5]

// Additional Test Case
let q2 = new Queue();
let arr2 = [10, 20, 30, 40, 50, 60];
let k2 = 4;

for (let num of arr2) {
    q2.enqueue(num);
}

reverseFirstK(q2, k2);

console.log(q2.items); // Output: [40, 30, 20, 10, 50, 60]

