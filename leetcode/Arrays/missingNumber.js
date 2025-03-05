/**
 * Given an array nums containing n distinct numbers in the range [0, n],
 * return the only number in the range that is missing from the array.
 *
 * Example 1:
 * Input: nums = [3,0,1]
 * Output: 2
 * Explanation: n = 3 since there are 3 numbers, so the range is [0,3].
 * The missing number is 2.
 *
 * Example 2:
 * Input: nums = [0,1]
 * Output: 2
 * Explanation: The missing number is 2.
 *
 * Example 3:
 * Input: nums = [9,6,4,2,3,5,7,0,1]
 * Output: 8
 *
 * Constraints:
 * n == nums.length
 * 1 <= n <= 10^4
 * 0 <= nums[i] <= n
 * All the numbers of nums are unique.
 *
 * Follow up: Can you implement a solution using only O(1) extra space complexity and O(n) runtime complexity?
 */

var missingNumber = function (nums) {
    let res = nums.length; // last number is missing if not missing in the middle

    for (let i = 0; i < nums.length; i++) {
        res = res + i - nums[i];
    }
    return res;
};

// Test case
console.log(missingNumber([0, 1, 2])); // 3

