// https://leetcode.com/problems/valid-parentheses/
// Valid Parentheses
// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:
// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.

// Example 1:
// Input: s = "()"
// Output: true

// Example 2:
// Input: s = "()[]{}"
// Output: true

const isValidParanthesis = (str) => {
    let stack = [];

    let brackets = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < str.length; i++) {
        if (brackets[str[i]]) {
            stack.push(brackets[str[i]]);
        } else if (str[i] !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValidParanthesis("({)))})")); // false
console.log(isValidParanthesis("({})")); // true

