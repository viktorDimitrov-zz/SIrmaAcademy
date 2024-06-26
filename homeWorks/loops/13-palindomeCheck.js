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
