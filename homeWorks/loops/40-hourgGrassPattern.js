function printHourg(n) {

    let line = '';
    //first row
    for (let i = 0; i < n + 2; i++) {
        line += '#';
    }
    console.log(line);

    //upper part
    let frontSpaces = 1
    let middleSpaces = n - 2;
    while (middleSpaces >= -1) {
        line = '';
        
        //add whitespaces
        for (let i = 0; i < frontSpaces; i++) {
            line += ' ';
        }

        //add letter

        line += '#';

        //add middlespace
        for (let i = 0; i < middleSpaces; i++) {
            line += ' ';
        }


        //add letter

        if (middleSpaces <= 0) {
            if (n % 2 === 0) {
                line += '#';
            }
        } else {
            line += '#';
        }


        console.log(line);

        //update
        middleSpaces -= 2;
        frontSpaces += 1;
    }

    //bottom part
    middleSpaces+=4;
    frontSpaces-=2;
    while (middleSpaces <= n - 2) {
        line = '';
        
        //add whitespaces
        for (let i = 0; i < frontSpaces; i++) {
            line += ' ';
        }

        //add letter

        line += '#';

        //add middlespace
        for (let i = 0; i < middleSpaces; i++) {
            line += ' ';
        }


        //add letter

        if (middleSpaces <= 0) {
            if (n % 2 === 0) {
                line += '#';
            }
        } else {
            line += '#';
        }


        console.log(line);

        //update
        middleSpaces += 2;
        frontSpaces -= 1;
    }

    //last row
    line = '';
    for (let i = 0; i < n + 2; i++) {
        line += '#';
    }
    console.log(line);
}

printHourg(5);
printHourg(8);
printHourg(2);
