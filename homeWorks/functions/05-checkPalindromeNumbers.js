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