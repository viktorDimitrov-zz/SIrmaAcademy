function sumEvenNums(arrStr) {
    let sum = 0;

    for (const numSt of arrStr) {
        let num = Number(numSt);
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
    return sum;
}

sumEvenNums(['1','2','3','4','5','6']);
sumEvenNums(['3','5','7','9']);
sumEvenNums(['2','4','6','8','10']);
