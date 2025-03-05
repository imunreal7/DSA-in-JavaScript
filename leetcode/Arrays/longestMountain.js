/**
 * You may recall that an array arr is a mountain array if and only if:
 * - arr.length >= 3
 * - There exists some index i (0 < i < arr.length - 1) such that:
 *   - arr[0] < arr[1] < ... < arr[i]
 *   - arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
 *
 * Given an integer array arr, return the length of the longest mountain.
 * If there is no mountain, return 0.
 *
 * Example 1:
 * Input: arr = [2,1,4,7,3,2,5]
 * Output: 5
 * Explanation: The longest mountain is [1,4,7,3,2], length 5.
 *
 * Example 2:
 * Input: arr = [2,2,2]
 * Output: 0
 * Explanation: There is no mountain.
 *
 * Constraints:
 * 1 <= arr.length <= 10^4
 * 0 <= arr[i] <= 10^4
 */

var longestMountain = function (arr) {
    let maxLength = 0;
    let n = arr.length;
    let i = 1;

    while (i < n - 1) {
        // Check if arr[i] is a peak
        if (arr[i] > arr[i - 1] && arr[i] > arr[i + 1]) {
            let left = i - 1;
            let right = i + 1;

            // Expand left
            while (left > 0 && arr[left] > arr[left - 1]) {
                left--;
            }

            // Expand right
            while (right < n - 1 && arr[right] > arr[right + 1]) {
                right++;
            }

            // Calculate mountain length
            maxLength = Math.max(maxLength, right - left + 1);

            // Move `i` to `right` to avoid rechecking
            i = right;
        } else {
            i++;
        }
    }

    return maxLength;
};

// Test case
console.log(longestMountain([2, 1, 4, 7, 3, 2, 5])); // 5
