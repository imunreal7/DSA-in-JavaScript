function fibonacci(n) {
    let result = [0, 1];
    for (let i = 2; i < n; i++) {
        result[i] = result[i - 1] + result[i - 2];
    }
    return result;
}
// Big-O(n)
console.log(fibonacci(7));

function fibonacciByRecursion(n) {
    if (n < 2) return n;
    return fibonacciByRecursion(n - 2) + fibonacciByRecursion(n - 1);
}

console.log(fibonacciByRecursion(7));
// Time Complexity: O(2^n) for generating the sequence due to memoization.
