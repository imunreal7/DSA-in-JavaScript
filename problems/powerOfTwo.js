//Bitwise Implementation
function isPowerOfTwoBitwise(n) {
    return n > 0 && (n & (n - 1)) === 0;
}
// Explanation:
// A power of two in binary has exactly one bit set to 1 (e.g., 1 (0001), 2 (0010), 4 (0100), etc.).
// Subtracting 1 from such a number flips all bits after the first 1 (e.g., 4 - 1 = 3 (0100 - 0001 = 0011)).
// Using n & (n - 1) eliminates the only set bit, resulting in 0 if n is a power of two.
// Time Complexity: O(1)

// function isPowerOfTwo(n) {
//     if (n < 1) return false;

//     while (n > 1) {
//         if (n % 2 !== 0) return false;
//         n = n / 2;
//     }
//     return true;
// }

console.log(isPowerOfTwoBitwise(3));
// console.log(isPowerOfTwo(1));

// Big-O(log-n) as in each iteration Input size is reduced by half

