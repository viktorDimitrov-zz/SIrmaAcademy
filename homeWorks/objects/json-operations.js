//convert object to json

let cat = {
    name: "NAcho",
    age: "5",
    isMale: "true",
}

let catJSON=JSON.stringify(cat);

console.log(catJSON);
console.log(catJSON.name);
//convert JSON to object

let catToObj=JSON.parse(catJSON);

console.log(catToObj);
console.log(catToObj.name);

