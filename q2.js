function* squareIterator(numbers) {
    for (const number of numbers) {
        yield number * number;
    }
}

// Example usage:
const numbers = [1, 2, 3, 4, 5];
const iterator = squareIterator(numbers);

for (const square of iterator) {
    console.log(square); // Output: 1, 4, 9, 16, 25
}
