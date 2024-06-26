    function convertToJSON(name,surname,eyeColor) {
        let obj ={
            name,
            surname,
            eyeColor,
        }

        let textJSON=JSON.stringify(obj);
        return console.log(textJSON);
    }

    convertToJSON("Ivan", "Ivanov", "blue");
    convertToJSON("Maria", "Petrova", "brown");