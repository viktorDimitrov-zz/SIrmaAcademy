function isValidPass(password) {
    let isValid=true;
    if(!checkRangeOfPass(password)){
        isValid=false;
        console.log("Password must be between 6 and 10 characters");
    }

    if(!checkOnlyLettersAndDigits(password)){
        isValid=false;
        console.log("Password must consist only of letters and digits")
    }

    if(!hasTwoDigits(password)){
        isValid=false;
        console.log("Password must contains at least two digits")
    }

    if(isValid){
        console.log('Password is valid');
    }
}

function checkRangeOfPass(str) {
    if ((str.length >= 6) && (str.length <= 10)) {
        return true;
    }  
    return false;

}

function checkOnlyLettersAndDigits(password) {

    for (let i = 0; i < password.length; i++) {
        let char = password[i];
        if ((char >= 'a' && char <= 'z') || (char >= 'A' && char <= 'Z')|| (char >= '0' && char <= '9')) {
            continue;
        } else {
            // It's neither a letter nor a digit
       
            return false;
        }
    }

    return true;
}

function hasTwoDigits(pass) {
    let digitsCount = 0;
    for (const char of pass) {
        let digit = Number(char);
        if (Number.isInteger(digit)) {
            digitsCount++;
        }
    }
    let isValid=digitsCount>=2;

    return isValid;
}

//checkRangeOfPass('12112232331');
//checkOnlyLettersAndDigits('2312mjgkl2%3j1kljlk');
//isValidPass('pass');
isValidPass('APass123');
//isValidPass('Pa$s$s');
