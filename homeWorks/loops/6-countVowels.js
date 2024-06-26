function countVowels(word) {
    let sum=0;
    for (let index = 0; index < word.length; index++) {
        switch (word[index]) {
            case "a":
                sum+=1;
                break;
            case "e":
                sum+=2;
                break;
            case "i":
                sum+=3;
                break;
            case "o":
                sum+=4;
                break;
            case "u":
                sum+=5;
                break;
            default:
                break;
        }
    }
    console.log(sum);
}


function countVowelsMap(word){
    const vowelValues={
        'a': 1,
        'e': 2,
        'i': 3,
        'o': 4,
        'u': 5
    }

    let sum=0;

    for (let index = 0; index < word.length; index++) {
        const char=word[index].toLowerCase();

        if(vowelValues.hasOwnProperty(char)){
            sum+=vowelValues[char];
        }  
    }

    console.log(sum);
}

countVowels("hello");
countVowelsMap("hello");
countVowels("bye");
countVowelsMap("bye");