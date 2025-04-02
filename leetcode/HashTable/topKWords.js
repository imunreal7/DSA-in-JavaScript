/**
 * LeetCode Problem: 692. Top K Frequent Words
 * Problem Link: https://leetcode.com/problems/top-k-frequent-words/
 *
 * Problem Description:
 * Given an array of strings `words` and an integer `k`, return the `k` most frequent words.
 * The answer should be sorted by frequency from highest to lowest.
 * If two words have the same frequency, then the word with the lower alphabetical order comes first.
 *
 * Example 1:
 * Input: words = ["i","love","leetcode","i","love","coding"], k = 2
 * Output: ["i","love"]
 * Explanation:
 * "i" and "love" appear twice, while "leetcode" and "coding" appear once.
 * Since frequencies are the same, we sort lexicographically.
 *
 * Example 2:
 * Input: words = ["the","day","is","sunny","the","the","the","sunny","is","is"], k = 4
 * Output: ["the","is","sunny","day"]
 * Explanation:
 * "the" appears 4 times, "is" appears 3 times, "sunny" appears 2 times, and "day" appears once.
 * The sorting follows frequency first, then lexicographical order.
 */

var topKFrequent = function (words, k) {
    let freqMap = new Map();

    // Step 1: Count the frequency of each word
    for (let word of words) {
        freqMap.set(word, (freqMap.get(word) || 0) + 1);
    }

    // Step 2: Sort words by frequency (descending), then by lexicographical order
    let sortedWords = [...freqMap.keys()].sort((a, b) => {
        if (freqMap.get(a) === freqMap.get(b)) {
            return a.localeCompare(b); // Sort alphabetically if same frequency
        }
        return freqMap.get(b) - freqMap.get(a); // Higher frequency first
    });

    // Step 3: Return top k words
    return sortedWords.slice(0, k);
};

// Example usage:
console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2));
// Output: ["i","love"]

console.log(
    topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4),
);
// Output: ["the","is","sunny","day"]

