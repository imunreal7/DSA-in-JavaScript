/**
 * Given an array nums, return an array where each element at index i represents
 * how many numbers in nums are smaller than nums[i].
 *
 * Example 1:
 * Input: nums = [8,1,2,2,3]
 * Output: [4,0,1,1,3]
 *
 * Example 2:
 * Input: nums = [6,5,4,8]
 * Output: [2,1,0,3]
 *
 * Constraints:
 * 2 <= nums.length <= 500
 * 0 <= nums[i] <= 100
 */

var smallerNumbersThanCurrent = function (nums) {
    let sorted = [...nums].sort((a, b) => a - b);
    let map = {};

    for (let i = 0; i < sorted.length; i++) {
        if (map[sorted[i]] === undefined) {
            map[sorted[i]] = i;
        }
    }

    return nums.map((num) => map[num]);
};

// Test case
console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3])); // [4, 0, 1, 1, 3]

