function isPrime(n) {
    if (n < 2) return false;
    if (n === 2) return true; // 2 is a prime number
    if (n % 2 === 0) return false; // Exclude even numbers

    for (let i = 3; i <= Math.sqrt(n); i += 2) {
        // Check odd numbers only
        if (n % i === 0) {
            return false;
        }
    }
    return true;
}

console.log(isPrime(8));
console.log(isPrime(7));

// Big-O(sqrt(n))

