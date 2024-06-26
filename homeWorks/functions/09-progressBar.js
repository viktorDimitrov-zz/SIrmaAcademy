function progressBar(num) {
    let repetition = Math.floor(num / 10);

    let resultStr = `${num}% [`;
    for (let i = 0; i < repetition; i++) {
        resultStr += '%';
    }

    for (let i = 0; i < 10 - repetition; i++) {
        resultStr += '.';

    }
    resultStr += ']';

    console.log(resultStr);
    if(num===100){
        console.log('Complete!');
    } else{
        console.log('Loading...');
    }

}

progressBar(100);