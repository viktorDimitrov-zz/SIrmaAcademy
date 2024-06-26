function twoSmallest(arr) {
    let resultArr = [];
    resultArr.push(findSmallestElAndRemove(arr));
    resultArr.push(findSmallestElAndRemove(arr));

    console.log(resultArr.join(' '));
}

function findSmallestElAndRemove(arr) {

    let min = arr[0];
    let minIndex = 0;
    for (let index = 0; index < arr.length; index++) {
        if (min > arr[index]) {
            min = arr[index];
            minIndex = index;
        }
    }

    //remove element
    arr.splice(minIndex, 1);
//    console.log(arr.join(' '));
    return min;
    
}

twoSmallest([30, 15, 50, 5]);
twoSmallest([3, 0, 10, 4, 7, 3]);
