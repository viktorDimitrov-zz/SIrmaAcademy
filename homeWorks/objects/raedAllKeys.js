function solve(text) {

    let data = JSON.parse(text);

    for (let key in data) {

        console.log(key + ':' + data[key]);


    }
}


solve('{"name":"NAcho","age":"5","isMale":"true"}');