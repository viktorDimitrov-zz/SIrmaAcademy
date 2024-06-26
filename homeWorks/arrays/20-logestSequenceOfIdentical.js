function findLongestIdentical(arr) {
    let maxElement = arr[0];
    let maxSequense = 1;
    let currentSeq = 1;
    let result = [];

    for (let index = 0; index < arr.length - 1; index++) {
        if (arr[index] === arr[index + 1]) {
            currentSeq++;
        }
        else {
            if (currentSeq > maxSequense) {
                maxSequense = currentSeq;
                maxElement = arr[index];
                currentSeq = 1;
            } else {
                currentSeq = 1;
            }
        }
    }

    for (let i = 0; i < maxSequense; i++) {
        result.push(maxElement);

    }

    console.log(result.join(' '));
}

findLongestIdentical([2, 2, 1, 2, 2, 3, 4, 4, 4, 2, 2, 2, 1]);
