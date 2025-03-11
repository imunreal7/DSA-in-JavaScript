// https://leetcode.com/problems/sum-of-two-integers/
// Sum of Two Integers
// Given two integers a and b, return the sum of the two integers without using the operators + and -.

// Example 1:
// Input: a = 1, b = 2
// Output: 3

var getSum = function (a, b) {
    while (b !== 0) {
        let carry = (a & b) << 1; // Compute carry
        a = a ^ b; // Sum without carry
        b = carry; // Carry is added in the next iteration
    }
    return a;
};

// Example Test Cases
console.log(getSum(2, 3)); // Output: 5
console.log(getSum(-2, 3)); // Output: 1

