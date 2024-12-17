// Iterative
function factorial(n) {
    let result = 1;
    while (n > 1) {
        result = n * result;
        n--;
    }
    return result;
}

// with recursion
function factorialRecursive(n) {
    if (n <= 1) return 1;
    return n * factorialRecursive(n - 1);
}

console.log(factorial(4)); // Big-O(n)
console.log(factorialRecursive(4)); // Big-O(n)

// Metric    	Iterative
// Time       	O(n)	         O(n)
// Space      	O(1)           O(n)

