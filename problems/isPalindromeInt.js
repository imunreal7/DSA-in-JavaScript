var isPalindrome = function (n) {
    let reversedNumber = 0;
    let originalNum = n;
    while (n >= 1) {
        reversedNumber = reversedNumber * 10 + (n % 10);
        n = Math.floor(n / 10);
    }
    return originalNum === reversedNumber;
};

function isPalindrome2(integer) {
    let str = integer.toString();
    return integer === parseInt(str.split("").reverse().join(""));
}

console.log(isPalindrome2(1098801));

