function evenOddSub(arrStr) {
    let sumEven = 0;
    let sumOdd = 0;
    for (const numSt of arrStr) {
        let num = Number(numSt);
        if (num % 2 === 0) {
            sumEven += num;
        } else {
            sumOdd += num;
        }
    }

    let result=sumEven-sumOdd;
    console.log(result);
}

evenOddSub([1, 2, 3, 4, 5, 6]);
evenOddSub([3, 5, 7, 9]);
evenOddSub([2, 4, 6, 8, 10]);