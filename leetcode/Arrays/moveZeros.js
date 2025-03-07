/**
 * Given an integer array nums, move all 0's to the end while maintaining the relative order of non-zero elements.
 *
 * This implementation uses a two-pointer approach and runs in O(n) time complexity.
 *
 * Example:
 * Input: nums = [0,1,0,3,12]
 * Output: [1,3,12,0,0]
 *
 * Constraints:
 * 1 <= nums.length <= 10^4
 * -10^4 <= nums[i] <= 10^4
 */

var moveZeroes = function (nums) {
    let i = 0;
    let j = 0;
    while (j < nums.length) {
        if (nums[j] !== 0) {
            const cur = nums[j];
            nums[j] = nums[i];
            nums[i] = cur;
            i++;
        }
        j++;
    }
};

console.log(moveZeroes([0, 1, 0, 3, 12])); // [1,3,12,0,0]

