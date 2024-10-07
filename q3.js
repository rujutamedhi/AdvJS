function* primeGenerator(limit) {
    for (let num = 2; num <= limit; num++) {
        if (isPrime(num)) {
            yield num;
        }
    }
}

function isPrime(num) {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
        }
    }
    return num > 1;
}

// Example usage:
const limit = 20;
const primeGen = primeGenerator(limit);

for (const prime of primeGen) {
    console.log(prime); // Output: 2, 3, 5, 7, 11, 13, 17, 19
}
