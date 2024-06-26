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