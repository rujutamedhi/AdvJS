function calculator(num1, num2, operation) {
    return new Promise((resolve, reject) => {
        if (operation === 'add') {
            resolve(num1 + num2);
        } else if (operation === 'subtract') {
            resolve(num1 - num2);
        } else if (operation === 'multiply') {
            resolve(num1 * num2);
        } else if (operation === 'divide') {
            if (num2 === 0) {
                reject('Error: Cannot divide by zero');
            } else {
                resolve(num1 / num2);
            }
        } else {
            reject('Error: Invalid operation');
        }
    });
}

// Example usage:
calculator(10, 5, 'add')
    .then(result => console.log('Result:', result))
    .catch(error => console.error(error));

calculator(10, 0, 'divide')
    .then(result => console.log('Result:', result))
    .catch(error => console.error(error));

calculator(10, 5, 'modulus')
    .then(result => console.log('Result:', result))
    .catch(error => console.error(error));
