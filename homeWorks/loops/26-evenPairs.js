function checkIsPrime(num) {
    if (num <= 1) return false;
    if (num === 2) return true;
    if (num % 2 === 0) return false;

    for (let index = 3; index <= Math.sqrt(num); index += 2) {
        if (num % index === 0) {
            return false;
        }
    }
    return true;
}


function solve(numOne, numTwo, difOne, difTwo) {
    for (let i = numOne; i <= numOne + difOne; i++) {
        for (let j = numTwo; j <= numTwo + difTwo; j++) {
            if(checkIsPrime(i)&&checkIsPrime(j)){
                console.log(i.toString()+j);
            }
        }
    }
}   

solve(10,20,5,5);
solve(10, 30, 9, 6);
 

