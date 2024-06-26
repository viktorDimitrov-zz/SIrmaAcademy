function findLongestAandShortest(text) {
    text = removePunctoation(text);

    let wordsArr = text.split(' ');
    let min = wordsArr[0];
    let max = wordsArr[0];
    for (const word of wordsArr) {
        if (word.trim().length !== 0) {
            if (word.trim().length > max.length) {
                max = word;
            }

            if (word.trim().length < min.length) {
                min = word;
            }
        }
    }

    console.log(`Longest->${max}`);
    console.log(`Shortest->${min}`);
}

function removePunctoation(text) {
    let resultText = '';
    const punctuationMarks = ['.', ',', '/', '#', '!', '?', '$', '%', '^', '&', '*', ';', ':', '{', '}', '=', '-', '_', '`', '~', '(', ')', '"', "'", '<', '>', '@', '[', ']', '+', '\\', '|'];

    for (const char of text) {
        if (!punctuationMarks.includes(char)) {
            resultText += char;
        }
    }
    console.log(resultText);
    return resultText;
}

function isEmptyString(str) {
    return str.trim().length === 0;
}
//removePunctoation('Hello how are you today? I hope you are fine. ');
findLongestAandShortest('Hello how are you today? I hope you are fine. ');
findLongestAandShortest('Lorem Ipsum is dummy text of the typesetting industry.');