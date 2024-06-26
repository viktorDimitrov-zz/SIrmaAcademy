function nameABuilding(floors, aparts) {
    for (let f = floors; f > 0; f--) {
        let row='';
        let type;

        for (let ap = 0; ap < aparts; ap++) {
            if (f === floors) {
                type = 'L';
            } else if (f % 2 == 0 ) {
                type = 'O';
            } else {
                type = 'A';
            }
            let configStr = type + f + ap + ' ';
            row += configStr;
        }
        console.log(row);

    }
}

//nameABuilding(6, 4);
//nameABuilding(4, 4);
nameABuilding(3, 3);