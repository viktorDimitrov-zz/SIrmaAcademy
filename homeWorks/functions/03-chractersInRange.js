function printAllBetween(chrOne, charTwo) {
    let startCh = chrOne.charCodeAt(0);

    let endCh = charTwo.charCodeAt(0);
    let resultArr = [];

    if (startCh > endCh) {
        let temp = startCh;
        startCh = endCh;
        endCh = temp;
    }

    for (let i = startCh + 1; i < endCh; i++) {
        //console.log(String.fromCharCode(i));
        resultArr.push(String.fromCharCode(i));
    }

    console.log(resultArr.join(' '));
    return resultArr;
}

printAllBetween('a','d');
printAllBetween('#',':');
printAllBetween('C', '#');
