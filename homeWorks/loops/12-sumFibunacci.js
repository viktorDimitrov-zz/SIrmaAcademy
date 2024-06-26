



function generateFirstFibunacci(num) {

    if (num <= 0) return [];
    if (num === 1) return [0];  
    if (num === 2) return [0, 1];

    let fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

function sumOfArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum;
}

let result = sumOfArray(generateFirstFibunacci(10));
console.log(result)