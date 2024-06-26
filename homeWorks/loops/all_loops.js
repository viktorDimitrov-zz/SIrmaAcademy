function solve(num) {
    for (let index = 0; index <=num; index++) {
        console.log(index);
    }
}

solve(100);

//2222222222

function solve(num) {
    for (let index = num; index >=0; index--) {
        console.log(index);
    }
}

solve(10);

//33333333333333

function solve(number,step) {
    for (let index = 1; index <= number; index+=step) {
       console.log(index);
        
    }
}

solve(10,2);

//444444444444

function solve(to,step) {
    for (let index = 1; index <=to; index+=step) {     
        console.log(index);
    }
}

solve(9,2);

//555555555555

function printLettersFrom(word) {
    for (let index = 0; index < word.length; index++) {
       console.log(word[index]);  
    }
}


printLettersFrom("hello");

//66666

function countVowels(word) {
    let sum=0;
    for (let index = 0; index < word.length; index++) {
        switch (word[index]) {
            case "a":
                sum+=1;
                break;
            case "e":
                sum+=2;
                break;
            case "i":
                sum+=3;
                break;
            case "o":
                sum+=4;
                break;
            case "u":
                sum+=5;
                break;
            default:
                break;
        }
    }
    console.log(sum);
}


function countVowelsMap(word){
    const vowelValues={
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5
    }

    let sum=0;

    for (let index = 0; index < word.length; index++) {
        const char=word[index].toLowerCase();

        if(vowelValues.hasOwnProperty(char)){
            sum+=vowelValues[char];
        }  
    }

    console.log(sum);
}

countVowels("hello");
countVowelsMap("hello");
countVowels("bye");
countVowelsMap("bye");

//7777777

function solve () {
    for (let h = 0; h < 24; h++) {
        for (let m = 0; m < 60; m++) {
            let hours=h.toString().padStart(2,0);
            let minutes=m.toString().padStart(2,0);

            console.log(`${hours}:${minutes}`);
        }
    
    }
}

solve();

//88888

function multiTable(){
    for (let n = 1; n <=10; n++) {
       for (let m = 1; m <=10; m++) {
        let produkt=n*m;
        console.log(`${n} * ${m} = ${produkt} `);
       }
        
    }
}

multiTable();

//99999999
function sumEvenNums(num) {
    let sum=0;
    let index=1;
   while (num>  0) {
        if(index%2==0){
            sum+=index;  
            num--;  
        }
       
        index++;
   }
    console.log(sum);
}

sumEvenNums(3);
sumEvenNums(5);
sumEvenNums(1);
sumEvenNums(0);
sumEvenNums(10);

//10
function factorial(num) {
    result=1;
    for (let index = 1; index <= num; index++) {
        result*=index;
    }
    console.log(result);
}

function factorialRecursive(num){
    if(num<0) return undefined;
    if(num===0) return 1;
    return num*factorialRecursive(num-1);
}

factorial(5);
factorial(3);
factorial(0);
factorial(1);
factorial(10);
console.log("==========");

console.log(factorialRecursive(5));
console.log(factorialRecursive(3));

//11

function reverseNumberWithStr(num) {
    let numStr = num.toString();

    let numStrReversed = numStr.split('').reverse().join('');

    console.log(parseInt(numStrReversed));

}

function reverseNUmWithArray(num) {
    let numReversed = 0;

    while (num > 0) {
        let lastDigit = num % 10;

        numReversed = numReversed * 10 + lastDigit;
    }

    console.log(numReversed)

}

reverseNumberWithStr(123);
reverseNumberWithStr(234);

//12





function generateFirstFibunacci(num) {

    if (num <= 0) return [];
    if (num === 1) return [0];  
    if (num === 2) return [0, 1];

    let fib = [0, 1];

    for (let i = 2; i <= num; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }

    return fib;
}

function sumOfArray(arr) {
    let sum = 0;
    arr.forEach(element => {
        sum += element;
    });

    return sum;
}

let result = sumOfArray(generateFirstFibunacci(10));
console.log(result)

///13
function checkStringPalindrome(string) {

    for (let index = 0; index < string.length / 2; index++) {
        if (string[index] !== string[string.length - index-1]) {
            return 'False';
        }
    }

    return 'True';

}

console.log(checkStringPalindrome('radar'));
console.log(checkStringPalindrome('hello'));
console.log(checkStringPalindrome('racecar'));
console.log(checkStringPalindrome('java'));
console.log(checkStringPalindrome('madam'));

//14

function collatzPrint(num) {
    let result = [num];
    let index = 0;
    let current = num;
    while (current != 1) {
        if (current % 2 == 0) {
            current /= 2;
        } else if (current % 2 != 0) {
            current = current * 3 + 1;
        }
        index++;
        result[index] = current;
    }
    return result;
}

collatzPrint(6);
collatzPrint(12);
collatzPrint(9);
collatzPrint(200);
collatzPrint(15);

//16


function nameABuilding(floors, aparts) {
    for (let f = floors; f > 0; f--) {
        let row='';
        let type;

        for (let ap = 0; ap < aparts; ap++) {
            if (f === floors) {
                type = 'L';
            } else if (f % 2 == 0 ) {
                type = 'O';
            } else {
                type = 'A';
            }
            let configStr = type + f + ap + ' ';
            row += configStr;
        }
        console.log(row);

    }
}

//nameABuilding(6, 4);
//nameABuilding(4, 4);
nameABuilding(3, 3);

//a

function checkArmstrongNum(num) {
    let numStr = num.toString();
    let count = num.toString().length;
    let sum = 0;
    for (let index = 0; index < numStr.length; index++) {
        
        sum += Math.pow(parseInt(numStr[index]),count);

    }

    if(num===sum){
        console.log("Armstrong");
    } else {
        console.log("Not Armstrong" );
    }
}

checkArmstrongNum(153);
checkArmstrongNum(370);
checkArmstrongNum(123);
checkArmstrongNum(407);
checkArmstrongNum(1634);


