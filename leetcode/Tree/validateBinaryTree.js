/**
 * Determines if a given binary tree is a valid Binary Search Tree (BST).
 * Uses an in-order traversal approach with a stack.
 * Runs in O(n) time complexity.
 *
 * Example:
 * Input: root = [2,1,3]
 * Output: true
 *
 * Constraints:
 * The number of nodes in the tree is in the range [1, 10^4].
 * -2^31 <= Node.val <= 2^31 - 1
 */

function isValidBST(root) {
    let stack = [];
    let prev = -Infinity;

    while (stack.length > 0 || root !== null) {
        while (root !== null) {
            stack.push(root);
            root = root.left;
        }

        root = stack.pop();

        // If current value is not greater than previous, return false
        if (root.val <= prev) return false;
        prev = root.val;
        root = root.right;
    }
    return true;
}

console.log(isValidBST([5, 1, 4, null, null, 3, 6]));

