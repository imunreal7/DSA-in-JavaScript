const isValidParanthesis = (str) => {
    let stack = [];

    let brackets = {
        "(": ")",
        "[": "]",
        "{": "}",
    };

    for (let i = 0; i < str.length; i++) {
        if (brackets[str[i]]) {
            stack.push(brackets[str[i]]);
        } else if (str[i] !== stack.pop()) {
            return false;
        }
    }

    return stack.length === 0;
};

console.log(isValidParanthesis("({)))})"));
console.log(isValidParanthesis("({})"));

