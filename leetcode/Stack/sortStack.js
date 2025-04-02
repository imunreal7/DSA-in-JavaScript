/**
 * GeeksforGeeks Problem: Sort a Stack
 * Problem Link: https://www.geeksforgeeks.org/sort-stack-using-temporary-stack/
 *
 * Problem Description:
 * Given a stack, the task is to sort it such that the smallest elements are on the top.
 *
 * The sorting should be done using only a stack (no other data structures like arrays, linked lists, etc.).
 * You can use one additional stack for temporary storage but cannot use recursion.
 *
 * Example 1:
 * Input: stack = [34, 3, 31, 98, 92, 23]
 * Output: [3, 23, 31, 34, 92, 98]
 *
 * Example 2:
 * Input: stack = [5, 2, 9, 1, 7]
 * Output: [1, 2, 5, 7, 9]
 */

function sortStack(stack) {
    let tempStack = [];

    while (stack.length > 0) {
        // Pop the top element from the original stack
        let temp = stack.pop();

        // Move elements from tempStack back to stack if they are greater than temp
        while (tempStack.length > 0 && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop());
        }

        // Push temp into its correct position in tempStack
        tempStack.push(temp);
    }

    // Transfer sorted elements back to the original stack
    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }

    return stack;
}

// Example Usage:
let stack = [34, 3, 31, 98, 92, 23];
console.log(sortStack(stack)); // Output: [3, 23, 31, 34, 92, 98]

let stack2 = [5, 2, 9, 1, 7];
console.log(sortStack(stack2)); // Output: [1, 2, 5, 7, 9]
