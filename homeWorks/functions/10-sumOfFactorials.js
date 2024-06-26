function sumFactorials(num1, num2) {
    let result = calculateFactorial(num1) / calculateFactorialRecursive(num2);
    console.log(result.toFixed(2));
}

function calculateFactorial(num) {
    if (num < 0) {
        return undefined;

    }

    let product = 1;

    for (let i = 1; i <= num; i++) {
        product *= i;

    }
    return product;
}

function calculateFactorialRecursive(num) {
    if (num < 0) {
        return undefined;
    }

    if (num === 0 || num === 1) {
        return 1;
    }

    return num * calculateFactorialRecursive(num - 1);
}

sumFactorials(5,2);
sumFactorials(6,2);