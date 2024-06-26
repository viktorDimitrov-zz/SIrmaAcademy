function decriptMessage(messageStr, shift) {
    let decriptedText = '';

    for (let i = 0; i < messageStr.length; i++) {
        let current = messageStr[i];

        if (current >= 'a' && current <= 'z') {
            let newCurrent = current.charCodeAt(0) - shift;
            if (newCurrent < 'a'.charCodeAt(0)) {
                newCurrent += 26;
            }
            decriptedText += String.fromCharCode(newCurrent);

        } else if(current >= 'A' && current <= 'Z'){
            let newCurrent = current.charCodeAt(0) - shift;
            if (newCurrent < 'A'.charCodeAt(0)) {
                newCurrent += 26;
            }
            decriptedText += String.fromCharCode(newCurrent);

        } else{
            decriptedText += String.fromCharCode(current.charCodeAt(0) -shift);
        }

    }

    console.log(decriptedText)
}


//decriptMessage('Uifsf!jt!b!tfdsfu"', 1);
//decriptMessage('Wkurz#lw#lq#wkh#iluh$', 3);
//decriptMessage("Fwfltws", 5);

