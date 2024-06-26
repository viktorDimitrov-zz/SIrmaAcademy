function isPerfectNumber(number) {
    let result = aliquotSum(number);
    if (number === result[0]) {
        console.log('Perfect number!');
        console.log(result[1].join('+'));
        return true;
    }
    else {
        console.log('It’s not so perfect.')
        return false;
    }
}


function aliquotSum(num) {
    if (num < 0) {
        return 0;
    }

    let sum = 0;
    let divisors = [];

    for (let i = 1; i <= Math.floor(num / 2); i++) {
        if (num % i === 0) {
            sum += i;
            divisors.push(i);
        }
    }
    return [sum, divisors];
}




isPerfectNumber(6);
isPerfectNumber(28);
isPerfectNumber(1236498);