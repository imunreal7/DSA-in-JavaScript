/**
 * Given an array, rotate the array to the right by k steps, where k is non-negative.
 *
 * This implementation uses a three-step reverse approach, achieving O(n) time complexity.
 *
 * Example:
 * Input: nums = [1,2,3,4,5,6,7], k = 3
 * Output: [5,6,7,1,2,3,4]
 *
 * Constraints:
 * 1 <= nums.length <= 10^5
 * -10^4 <= nums[i] <= 10^4
 * 0 <= k <= 10^5
 */

var rotate = function (nums, k) {
    k = k % nums.length;

    // Reverse the entire array.
    reverse(nums, 0, nums.length - 1);
    // Reverse the first k elements.
    reverse(nums, 0, k - 1);
    // Reverse the rest of the array.
    reverse(nums, k, nums.length - 1);
};

function reverse(arr, start, end) {
    while (start < end) {
        let temp = arr[start];
        arr[start] = arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); // [5,6,7,1,2,3,4]

