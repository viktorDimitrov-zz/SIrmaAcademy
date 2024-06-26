function negativePositive(arr) {
    let resArr = [];
    let current;
    for (let index = 0; index < arr.length; index++) {
        current = arr[index];
        if (current >= 0) {
            resArr.push(current);
        } else {
            resArr.unshift(current);
        }

    }

    console.log(resArr.join(' '));
}

negativePositive([7, -2, 8, 9]);
negativePositive([3, -2, 0, -1])