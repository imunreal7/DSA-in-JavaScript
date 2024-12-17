const reverseStringStack = (str) => {
    let stack = [];
    for (let char of str) {
        stack.push(char);
    }

    let reversedStr = "";
    while (stack.length) {
        reversedStr += stack.pop();
    }

    return reversedStr;
};

console.log(reverseStringStack("hello"));

var removeElement = function (nums, val) {
    let originalArrLength = nums.length;
    let counter = 0;
    for (let i = 0; i < originalArrLength; i++) {
        if (nums[i] === val) {
            counter++;
            nums.splice(i, 1);
        }
    }

    return nums;
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));

