function convertJSONtoObj(textJSON) {
    let obj=JSON.parse(textJSON);

    for (const key in obj) {
      console.log(key+':'+obj[key]);
    }
}

convertJSONtoObj('{"name": "Ivan", "age": 40, "town": "Sofia"}');
convertJSONtoObj( '{"firstName": "Ivan", "lastName": "Ivanov"}');


