class Student {
    constructor(name, grade, score) {
        this.name = name;
        this.grade = grade;
        this.score = score;
    }
}

class SchoolBook {
    #register = {};

    addStudent(student) {
        if (student.score < 3) {
            return;
        }

        student.grade++;

        const gradeName = `${student.grade} Grade`;

        if (!this.#register[gradeName]) {
            this.#register[gradeName] = [];
        }

        this.#register[gradeName].push(student);

    }

    printRegister() {
        console.log(this.#register);

        for (const grade in this.#register) {
            console.log(grade);
            const studentNames =     this.#register[grade]
                .map(student => student.name)
                .join(',');

                console.log(grade);
                console.log(`List of students: ${studentNames}`)
        }
    }
}


function solve(input) {
    const schoolBook = new SchoolBook();

    for (const line of input) {
        let studentInfo = line.split(', ');
        let name = studentInfo[0].split(': ')[1];
        let grade = Number(studentInfo[1].split(': ')[1]);
        let scode = Number(studentInfo[2].split(': ')[1]);


        const student = new Student(name, grade, scode);

        schoolBook.addStudent(student);
    }

    schoolBook.printRegister();
}

solve(
    [
        "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
        "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
        "Student name: George, Grade: 8, Graduated with an average score: 2.83",
        "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
        "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
        "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
        "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
        "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
        "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
        "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
        "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
        "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
    ]

);