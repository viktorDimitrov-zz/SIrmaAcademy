function phoneBook(arrNamePhone) {
    let phoneBook={};

    for (const record of arrNamePhone) {
        let recordArr=record.split(' ');
        let name=recordArr.shift();
        let number=recordArr.join(' ');

        phoneBook[name]=number;
    }

    for (const key in phoneBook) {
       console.log(key+'-->'+phoneBook[key]);
    }
}

phoneBook(["Peter 0888 657 212", "Bob 0899 657 212", "Peter 123123"] );
phoneBook(["Maria 123","Samantha 456","Nicole 789"]);