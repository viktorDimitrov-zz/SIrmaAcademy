function doubleReversedOddNums(arr) {
    let resultArr = [];

    for (let i = 0; i < arr.length; i++) {

        if (i % 2 !== 0) {
            resultArr.unshift(arr[i] * 2);
        }
    }

    console.log(resultArr.join(' '));
}

doubleReversedOddNums([10, 15, 20, 25]);
doubleReversedOddNums([3, 0, 10, 4, 7, 3]);