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

