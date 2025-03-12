// https://leetcode.com/problems/merge-intervals/
// Merge Intervals
// Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.

// Example 1:
// Input: intervals = [[1,3],[2,6],[8,10],[15,18]]
// Output: [[1,6],[8,10],[15,18]]
// Explanation: Since intervals [1,3] and [2,6] overlap, merge them into [1,6].

// Example 2:
// Input: intervals = [[1,4],[4,5]]
// Output: [[1,5]]

var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;

    // Step 1: Sort intervals by start time
    intervals.sort((a, b) => a[0] - b[0]);

    let merged = [intervals[0]]; // Start with the first interval

    for (let i = 1; i < intervals.length; i++) {
        let lastMerged = merged[merged.length - 1];
        let current = intervals[i];

        if (current[0] <= lastMerged[1]) {
            // Merge the intervals
            lastMerged[1] = Math.max(lastMerged[1], current[1]);
        } else {
            // No overlap, add it separately
            merged.push(current);
        }
    }

    return merged;
};

// Example Test Cases
console.log(
    merge([
        [1, 3],
        [2, 6],
        [8, 10],
        [15, 18],
    ]),
); // Output: [[1,6],[8,10],[15,18]]

