function findSmallestOfThreeNumbers(numOne, numTwo, numThree) {
    let result = findSmaller(numOne, numTwo);
    result=findSmaller(result,numThree);
    return result;
}

function findSmaller(one, two) {
    return one < two ? one : two;
}

console.log(findSmallestOfThreeNumbers(3, 4,-2));

/*2*/

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function sumSubtractThreeNums(num1, num2, num3) {
    let result = subtract(sum(num1, num2), num3);
    console.log(result);
    return result;
}

sumSubtractThreeNums(23, 6, 10);
sumSubtractThreeNums(1, 17, 30);
sumSubtractThreeNums(42, 58, 100);

/*3*/

function findSmallestOfThreeNumbers(numOne, numTwo, numThree) {
    let result = findSmaller(numOne, numTwo);
    result=findSmaller(result,numThree);
    return result;
}

function findSmaller(one, two) {
    return one < two ? one : two;
}

console.log(findSmallestOfThreeNumbers(3, 4,-2));

/*2*/

function sum(num1, num2) {
    let result = num1 + num2;
    return result;
}

function subtract(num1, num2) {
    let result = num1 - num2;
    return result;
}

function sumSubtractThreeNums(num1, num2, num3) {
    let result = subtract(sum(num1, num2), num3);
    console.log(result);
    return result;
}

sumSubtractThreeNums(23, 6, 10);
sumSubtractThreeNums(1, 17, 30);
sumSubtractThreeNums(42, 58, 100);

/*3*/

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

/*4*/

function sum(arr) {
    let sum = 0;
    for (const el of arr) {
        sum += el;
    }

    return sum;
}
function sumOdEven(num) {
    let oddArr = [];
    let evenArr = [];

    let oddSum;
    let evenSum;

    while (num > 0) {
        let lastDigit = num % 10;
        if (lastDigit % 2 == 0) {
            evenArr.push(lastDigit);
        } else {
            oddArr.push(lastDigit);
        }

        num = Math.trunc(num / 10);
    }

    oddSum=sum(oddArr);
    evenSum=sum(evenArr);

    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

sumOdEven(1000435);
sumOdEven(3495892137259234);

/*5*/

function checkArrPalindome(arr) {
    for (const el of arr) {
        console.log(isPalindrome(el));
    }
}

function isPalindrome(num) {
    result = true;
    let numStr = num.toString();

    for (let i = 0; i < numStr.length / 2; i++) {
        if (numStr[i] !== numStr[numStr.length - 1 - i]) {
            result = false;
            break;
        }
    }
   // console.log(result);
    return result;
}

//isPalindrome(121221);

checkArrPalindome([123,323,421,121]);


/*6*/
function isValidPass(str) {

}

function checkRangeOfPass(str) {
    if ((str.length >= 6) && (str.length <= 10)) {
        return true;
    }
    console.log("Password must be between 6 and 10 characters");
    return false;

}

function checkOnlyLettersAndDigits(password) {
    let digitCount = 0;
    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')) {
            // It's a letter
            continue;
        } else if (char >= '0' && char <= '9') {
            // It's a digit
            digitCount++;
        } else {
            // It's neither a letter nor a digit
            console.log("Password must consist only of letters and digits")
            return false;
        }
    }

    return true;
}



//checkRangeOfPass('12112232331');
checkOnlyLettersAndDigits('2312mjgkl2%3j1kljlk');