function solve(input) {
    let cats=[];

    for (const line of input) {
        const [name, ageText] = line.split(' ');
        const age=Number(ageText);
        const cat=new Cat(name,age);
       
        cats.push(cat);
    }

    for (const cat of cats) {
        cat.meow();
    }
    
}

class Cat {
    constructor(name, age) {
        this.name = name,
            this.age = age
    }

    meow() {
        console.log(`${this.name}, age ${this.age} says meow`);
    }
}

solve(['Mellon 2', 'Tom 3']);
solve(['Branch 1', 'Poppy 3', 'Goldy 2']);