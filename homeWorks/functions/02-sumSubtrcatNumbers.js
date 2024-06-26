function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function sumSubtractThreeNums(num1, num2, num3) {
    let result = subtract(sum(num1, num2), num3);
    console.log(result);
    return result;
}

sumSubtractThreeNums(23, 6, 10);
sumSubtractThreeNums(1, 17, 30);
sumSubtractThreeNums(42, 58, 100);

