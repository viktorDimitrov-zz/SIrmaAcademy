function sum(arr) {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }

    return sum;
}
function sumOdEven(num) {
    let oddArr = [];
    let evenArr = [];

    let oddSum;
    let evenSum;

    while (num > 0) {
        let lastDigit = num % 10;
        if (lastDigit % 2 == 0) {
            evenArr.push(lastDigit);
        } else {
            oddArr.push(lastDigit);
        }

        num = Math.trunc(num / 10);
    }

    oddSum=sum(oddArr);
    evenSum=sum(evenArr);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

sumOdEven(1000435);
sumOdEven(3495892137259234);