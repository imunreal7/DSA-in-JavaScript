// https://leetcode.com/problems/excel-sheet-column-number/
// Excel Sheet Column Number

// Given a string columnTitle that represents the column title as appears in an Excel sheet, return the corresponding column number.

// For example:
// A -> 1
// B -> 2
// C -> 3
// ...
// Z -> 26
// AA -> 27
// AB -> 28
// ...

// Example 1:
// Input: columnTitle = "A"
// Output: 1

// Example 2:
// Input: columnTitle = "AB"
// Output: 28

// Example 3:
// Input: columnTitle = "ZY"
// Output: 701

var titleToNumber = function (columnTitle) {
    let result = 0;

    for (let i = 0; i < columnTitle.length; i++) {
        let value = columnTitle.charCodeAt(i) - 65 + 1;
        result = result * 26 + value;
    }

    return result;
};

console.log(titleToNumber("A")); // 1
console.log(titleToNumber("AB")); // 28
console.log(titleToNumber("ZY")); // 701

