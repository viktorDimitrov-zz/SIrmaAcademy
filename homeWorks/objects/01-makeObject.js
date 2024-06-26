function solve(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age
    }

    return person;
}

let result = solve('Ivan', 'Ivanov', '22');
console.log(result);