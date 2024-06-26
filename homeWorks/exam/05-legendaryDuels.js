function findLegendary(str) {
    let countLeftBracket = 0;
    let countRightBracket = 0;
    let countExclamationMark = 0
    let isExclamationMarkOk = true;
    let firstExclamationMark = str.indexOf('!');
    let lastIndexExM = firstExclamationMark;
    for (let i = 0; i < str.length; i++) {
        char = str[i];

        switch (char) {
            case '(':
                countLeftBracket++;
                break;
            case ')':
                countRightBracket++;
                break;
            case '!':
                countExclamationMark++;
                if (i-lastIndexExM  > 1){
                    isExclamationMarkOk = false;

                    return  console.log('Not Legendary');;
                }else{
                    lastIndexExM=i;
                }
                        
                break;
            default:
                break;
        }


  ///  console.log(isExclamationMarkOk)
    }

    for (const char of str) {

    }

    if (countRightBracket === countLeftBracket && countExclamationMark % 2 === 0) {
        console.log('Legendary');
        
    } else {
        console.log('Not Legendary');
    }

}

//findLegendary("()()(()())");
//findLegendary("((!!)(({!!})))");
//findLegendary("((())");
//findLegendary("{!}!");
//findLegendary("({(!!}))");
