// https://leetcode.com/problems/remove-duplicates-from-sorted-array/
// Remove Duplicates from Sorted Array
// Given a sorted array nums, remove the duplicates in-place such that each element appears only once and returns the new length.

// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.

// Example 1:
// Input: nums = [1,1,2]
// Output: 2, nums = [1,2,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 1 and 2 respectively.
// It does not matter what you leave beyond the returned k (hence they are underscores).

const removeDuplicates = (nums) => {
    let index = 1;

    for (let i = 1; i < nums.length; i++) {
        if (nums[i] === nums[i - 1]) {
            nums[index] = nums[i]; // Replace the duplicate with the current element
            index++;
        }
    }
    return index;
};

console.log(removeDuplicates([0, 0, 1, 1, 1, 1, 2, 3, 3])); // 7

