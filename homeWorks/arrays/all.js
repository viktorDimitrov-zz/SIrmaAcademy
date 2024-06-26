/* 1 */
function sumFirsLastArr(nums) {
    let sum = Number(nums[0]) + Number(nums[nums.length - 1]);
    console.log(sum);
    return sum;
}

sumFirsLastArr(['20', '30', '40']);
sumFirsLastArr(['10', '17', '22', '33']);
sumFirsLastArr(['11', '58', '69']);

/* 2 */

function dayOfWeek(num) {
    let days = ['Monday', 'Thuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

    if (num > 7 || num <= 0) {
        console.log('Invalid day!')
    } else {
        console.log(days[num]);
    }
}

dayOfWeek(3);
dayOfWeek(6);
dayOfWeek(11);
dayOfWeek(- 1);

/* 3 */

function reverseNumArr(numsOfNewArr, arr) {
    let resArr = [];
    for (let i = 0; i < numsOfNewArr; i++) {
        resArr[i] = arr[numsOfNewArr - 1 - i];
    }
    console.log(resArr);
    return resArr;
}

reverseNumArr(3, [10, 20, 30, 40, 50]);
reverseNumArr(4, [-1, 20, 99, 5]);
reverseNumArr(2, [66, 43, 75, 89, 47]);

/* 4 */

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

/* 5 */

function sumEvenNums(arrStr) {
    let sum = 0;

    for (const numSt of arrStr) {
        let num = Number(numSt);
        if (num % 2 === 0) {
            sum += num;
        }
    }
    console.log(sum);
    return sum;
}

sumEvenNums(['1', '2', '3', '4', '5', '6']);
sumEvenNums(['3', '5', '7', '9']);
sumEvenNums(['2', '4', '6', '8', '10']);


/* 6 */

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

    let result = sumEven - sumOdd;
    console.log(result);
}

evenOddSub([1, 2, 3, 4, 5, 6]);
evenOddSub([3, 5, 7, 9]);
evenOddSub([2, 4, 6, 8, 10]);

/* 7 */

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

compareArrs(['10', '20', '30'], ['10', '20', '30']);
compareArrs(['1', '2', '3', '4', '5'], ['1', '2', '4', '4', '5']);
compareArrs(['1'], ['10']);

/* 8 */
function condense(arr) {

    while (arr.length > 1) {

        for (let i = 0; i < arr.length - 1; i++) {
            arr[i] = arr[i] + arr[i + 1];
        }
        arr = arr.slice(0, arr.length - 1);
    }
    console.log(arr);

}

condense([2, 10, 3]);
condense([5, 0, 4, 1, 2]);
condense([1]);

/* 9 */

function collectNthElement(arr, nth) {
    let result = [];
    let lastElement = nth * Math.floor(arr.length / nth);
    for (let i = 0; i <= lastElement; i += nth) {
        result[i] = arr[i];

    }

    console.log(result.join(' '));
}

collectNthElement(['5', '15', '31', '14', '20'], 2);
collectNthElement(['dsa', 'asd', 'demo', 'test'], 2);
collectNthElement(['1', '2', '3', '4', '5'], 6);

/* 10 */

function addRemEl(arr) {
    let resultArr = [];
    let counter = 1;
    for (let i = 0; i < arr.length; i++) {

        if (arr[i] === 'add') {
            resultArr.push(counter++);
        } else {
            resultArr.pop();
        }
    }
    if (resultArr.length > 0) {
        console.log(resultArr.join(' '));
    } else {
        console.log('Empty');
    }
}

addRemEl(['add', 'add', 'add', 'add']);
addRemEl(['add', 'add', 'remove', 'add', 'add']);
addRemEl(['remove', 'remove', 'remove']);

/* 11 */

function rotateArrSlice(arr, rotation) {

    rotation = rotation % arr.length;

    const part1 = arr.slice(-rotation);

    const part2 = arr.slice(0, arr.length - rotation);

    let result = part1.concat(part2);
    console.log(result.join(' '));
}

function rotateArrLoops(arr, rotation) {
    rotation = rotation % arr.length;

    for (let i = 0; i < rotation; i++) {
        let currentEl = arr.pop();
        arr.unshift(currentEl);
    }

    console.log(arr.join(' '));
}

rotateArrSlice(['1', '2', '3', '4'], 2);
rotateArrLoops(['1', '2', '3', '4'], 2);
rotateArrSlice(['Banana', 'Orange', 'Coconut', 'Apple'], 15);
rotateArrLoops(['Banana', 'Orange', 'Coconut', 'Apple'], 15);

/* 12 */

function nonDecreasingSequence(arr) {
    let result = [];
    let max = arr[0];
    for (const i of arr) {
        if (i >= max) {
            result.push(i);
            max = i;
        }
    }

    console.log(result.join(' '));
}

nonDecreasingSequence([1, 3, 8, 4, 10, 12, 3, 2, 24]);
nonDecreasingSequence([1, 2, 3, 4]);
nonDecreasingSequence([20, 3, 2, 15, 6, 1]);

/* 13 */

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

/* 14 */

function firstLastK(k, arr) {
    let firstK = arr.slice(0, k);
    let lastK = arr.slice(-k);

    console.log(firstK.join(' '));
    console.log(lastK.join(' '));
}

firstLastK(2, [7, 8, 9]);
firstLastK(3, [6, 7, 8, 9]);

/* 15 */

function lastKNums(n, k) {

    let result = [1];
    for (let i = 1; i < n; i++) {

        let sum = 0;

        for (let j = i - k; j < i; j++) {
            if (j >= 0) {
                sum += result[j];
            }
        }
        result.push(sum);
    }
    console.log(result.join(' '));
}

lastKNums(6, 3);
lastKNums(8, 2);

/* 16 */

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

/* 17 */

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


/* 20 */

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