/**
 * Problem: Implement a stack using two queues.
 *
 * Implement a last-in-first-out (LIFO) stack using only two queues.
 * The implemented stack should support all the functions of a normal stack:
 * - push(x): Pushes element x to the top of the stack.
 * - pop(): Removes and returns the top element of the stack.
 * - top(): Returns the top element of the stack.
 * - empty(): Returns true if the stack is empty, false otherwise.
 *
 * Notes:
 * - You must use only standard operations of a queue: push to back, pop from front, peek, size, and isEmpty.
 * - No direct stack operations are allowed.
 */

class MyStack {
    constructor() {
        this.q1 = [];
        this.q2 = [];
    }

    /**
     * Pushes element x to the top of the stack.
     * @param {number} x
     */
    push(x) {
        this.q1.push(x);
    }

    /**
     * Removes the element on the top of the stack and returns it.
     * @return {number}
     */
    pop() {
        if (this.q1.length === 0) return null;

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        let poppedElement = this.q1.shift();
        [this.q1, this.q2] = [this.q2, this.q1]; // Swap queues
        return poppedElement;
    }

    /**
     * Returns the element on the top of the stack.
     * @return {number}
     */
    top() {
        if (this.q1.length === 0) return null;

        while (this.q1.length > 1) {
            this.q2.push(this.q1.shift());
        }

        let topElement = this.q1[0];
        this.q2.push(this.q1.shift()); // Move it back to q2
        [this.q1, this.q2] = [this.q2, this.q1]; // Swap queues
        return topElement;
    }

    /**
     * Returns true if the stack is empty, false otherwise.
     * @return {boolean}
     */
    empty() {
        return this.q1.length === 0;
    }
}

/**
 * Complexity Analysis:
 * - Push: O(1) - Direct enqueue to q1.
 * - Pop: O(n) - Move n-1 elements to q2, pop last, swap.
 * - Top: O(n) - Similar to pop but retains the last element.
 * - Empty: O(1) - Simple length check.
 */

// Example usage:
const myStack = new MyStack();
myStack.push(10);
myStack.push(20);
console.log(myStack.top()); // 20
console.log(myStack.pop()); // 20
console.log(myStack.empty()); // false
console.log(myStack.pop()); // 10
console.log(myStack.empty()); // true

