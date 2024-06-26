function reverseArrStr(arrStr) {
    for (let i = 0; i < arrStr.length / 2; i++) {
        let temp = arrStr[i];
        arrStr[i] = arrStr[arrStr.length - 1 - i];
        arrStr[arrStr.length - 1 - i] = temp;
    }

    console.log(arrStr.join(' '));
}

reverseArrStr(['a', 'b', 'c', 'd', 'e']);
reverseArrStr(['abc', 'def', 'hig', 'klm', 'nop']);
reverseArrStr(['33', '123', '0', 'dd']);