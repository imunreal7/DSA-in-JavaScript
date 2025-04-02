/**
 * LeetCode Problem: 2073. Time Needed to Buy Tickets
 * Problem Link: https://leetcode.com/problems/time-needed-to-buy-tickets/
 *
 * Problem Description:
 * There are `n` people in a queue, and the `i-th` person has `tickets[i]` tickets to buy.
 * Each person takes exactly one second to buy a ticket. They follow a round-robin approach,
 * meaning they will move to the end of the queue if they still have tickets left to buy.
 * The process stops when the person at index `k` buys all their tickets.
 *
 * Example 1:
 * Input: tickets = [2,3,2], k = 2
 * Output: 6
 * Explanation:
 * - First round: [1,2,1] (3 seconds elapsed)
 * - Second round: [0,1,0] (3 more seconds elapsed)
 * - The person at index 2 is done, total time = 6
 *
 * Example 2:
 * Input: tickets = [5,1,1,1], k = 0
 * Output: 8
 * Explanation:
 * - First round: [4,0,0,0] (4 seconds elapsed)
 * - Second round: [3,0,0,0] (1 more second elapsed)
 * - Third round: [2,0,0,0] (1 more second elapsed)
 * - Fourth round: [1,0,0,0] (1 more second elapsed)
 * - Fifth round: [0,0,0,0] (1 more second elapsed)
 * - The person at index 0 is done, total time = 8
 */

var timeRequiredToBuy = function (tickets, k) {
    let time = 0;

    for (let i = 0; tickets[k] > 0; i = (i + 1) % tickets.length) {
        if (tickets[i] > 0) {
            tickets[i]--;
            time++;
        }
    }

    return time;
};

// Alternate approach

var timeRequiredToBuy2 = function (tickets, k) {
    let ans = 0;

    // Loop through the tickets array
    for (let i = 0; i < tickets.length; i++) {
        if (i <= k) {
            ans += Math.min(tickets[i], tickets[k]);
        } else {
            ans += Math.min(tickets[i], tickets[k] - 1);
        }
    }

    return ans;
};

// Test Cases
console.log(timeRequiredToBuy([2, 3, 2], 2)); // Output: 6
console.log(timeRequiredToBuy([5, 1, 1, 1], 0)); // Output: 8

