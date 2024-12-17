// Function to find the longest substring without repeating characters
function findLongestSubstring(s) {
    let maxLength = 0; // Store the maximum length of substring
    let start = 0; // Start index of the current substring
    let charIndexMap = {}; // Map to store the last index of each character
    let longestSubstring = ""; // To keep track of the actual substring

    for (let end = 0; end < s.length; end++) {
        const char = s[end];

        // If the character is already in the map, move the start pointer
        // to the right of the same character's last known position
        if (char in charIndexMap && charIndexMap[char] >= start) {
            start = charIndexMap[char] + 1;
        }

        // Update the last seen index of the current character
        charIndexMap[char] = end;

        // Update the maximum length and the substring if needed
        if (end - start + 1 > maxLength) {
            maxLength = end - start + 1;
            longestSubstring = s.slice(start, end + 1);
        }
    }

    return { maxLength, longestSubstring };
}

// Example usage
const inputString = "abcbabcbb";
const result = findLongestSubstring(inputString);
console.log("Input String:", inputString);
console.log("Longest Substring:", result.longestSubstring);
console.log("Length of Longest Substring:", result.maxLength);

