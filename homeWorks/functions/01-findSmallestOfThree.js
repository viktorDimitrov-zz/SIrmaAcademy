function findSmallestOfThreeNumbers(numOne, numTwo, numThree) {
    let result = findSmaller(numOne, numTwo);
    result=findSmaller(result,numThree);
    return result;
}

function findSmaller(one, two) {
    return one < two ? one : two;
}

console.log(findSmallestOfThreeNumbers(3, 4,-2));