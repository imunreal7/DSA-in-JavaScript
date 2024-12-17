function gcd(a, b) {
    let reminder = 1;
    while (reminder) {
        reminder = a % b;
        a = b;
        b = reminder;
    }
    return a === 1 ? console.log("Co-prime and GCD is", a) : console.log("GCD is", a);
}

gcd(9, 3);

