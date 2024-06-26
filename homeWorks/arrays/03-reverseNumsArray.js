function reverseNumArr(numsOfNewArr, arr) {
    let resArr = [];
    for (let i = 0; i < numsOfNewArr; i++) {
        resArr[i]=arr[numsOfNewArr-1-i];
    }
    console.log(resArr);
    return resArr;
}

reverseNumArr(3, [10, 20, 30, 40, 50]);
reverseNumArr(4, [-1, 20, 99, 5]);
reverseNumArr(2, [66, 43, 75, 89, 47]);

