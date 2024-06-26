function compareArrs(arrOne, ArrTwo) {
    let areEqual = true;
    let indexDif = -1;

    for (let i = 0; i < arrOne.length; i++) {

        if (arrOne[i] !== ArrTwo[i]) {
            areEqual = false
            indexDif = i;
        }
    }


    if (areEqual) {
        console.log(`Arrays are identical. Sum: ${sum(arrOne)}`)
    } else {
        console.log(`Arrays are not identical. Found difference at ${indexDif} index`)
    }
}

function sum(arr) {
    let sum = 0;
    for (const num of arr) {
        sum += Number(num);
    }
    return sum;
}


compareArrs(['10','20','30'], ['10','20','30']);
compareArrs(['1','2','3','4','5'], ['1','2','4','4','5']);
compareArrs(['1'], ['10']);
