function reverseNumberWithStr(num) {
    let numStr = num.toString();

    let numStrReversed = numStr.split('').reverse().join('');

    console.log(parseInt(numStrReversed));

}

function reverseNUmWithArray(num) {
    let numReversed = 0;

    while (num > 0) {
        let lastDigit = num % 10;

        numReversed = numReversed * 10 + lastDigit;
    }

    console.log(numReversed)

}

reverseNumberWithStr(123);
reverseNumberWithStr(234);