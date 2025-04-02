/**
 * LeetCode Problem: 150. Evaluate Reverse Polish Notation
 * Problem Link: https://leetcode.com/problems/evaluate-reverse-polish-notation/
 *
 * Problem Description:
 * Evaluate the value of an arithmetic expression in Reverse Polish Notation.
 *
 * Valid operators are +, -, *, and /. Each operand may be an integer or another expression.
 *
 * Note that division between two integers should truncate toward zero.
 *
 * Example 1:
 * Input: tokens = ["2","1","+","3","*"]
 * Output: 9
 * Explanation: ((2 + 1) * 3) = 9
 *
 * Example 2:
 * Input: tokens = ["4","13","5","/","+"]
 * Output: 6
 * Explanation: (4 + (13 / 5)) = 6
 *
 * Example 3:
 * Input: tokens = ["10","6","9","3","/","-","11","*","/","17","+","5","+"]
 * Output: 22
 */

var evalRPN = function (tokens) {
    let stack = [];

    for (let token of tokens) {
        if (!isNaN(token)) {
            stack.push(Number(token)); // Push number to stack
        } else {
            let b = stack.pop(); // Second operand
            let a = stack.pop(); // First operand

            if (token === "+") stack.push(a + b);
            else if (token === "-") stack.push(a - b);
            else if (token === "*") stack.push(a * b);
            else if (token === "/") stack.push(Math.trunc(a / b)); // Truncate division
        }
    }
    return stack.pop(); // Final result
};

// Test Cases
console.log(evalRPN(["2", "1", "+", "3", "*"])); // Output: 9
console.log(evalRPN(["4", "13", "5", "/", "+"])); // Output: 6
console.log(evalRPN(["10", "6", "9", "3", "/", "-", "11", "*", "/", "17", "+", "5", "+"])); // Output: 22

