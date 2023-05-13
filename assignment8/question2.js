
function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    this.inputNewGrade = function (newGrade) {
        this.grades.push(newGrade);
    };

    this.computeAverageGrade = function () {
        const sum = this.grades.reduce((total, grade) => total + grade, 0);
        return sum / this.grades.length;
    };
}

const students = [
    new Student("John", "Doe"),
    new Student("Jane", "Smith"),
    new Student("Bob", "Johnson"),
];

students[0].inputNewGrade(85);
students[0].inputNewGrade(90);
students[0].inputNewGrade(92);

students[1].inputNewGrade(75);
students[1].inputNewGrade(80);
students[1].inputNewGrade(88);

students[2].inputNewGrade(95);
students[2].inputNewGrade(87);
students[2].inputNewGrade(90);

const averageGrade = students.reduce((total, student) => total + student.computeAverageGrade(), 0) / students.length;

console.log("Average grade for all students:", averageGrade);

Array.prototype.sortArray = function () {
    return this.slice().sort((a, b) => a - b);
};

const numbers = [5, 2, 8, 1, 9];
const sortedNumbers = numbers.sortArray();

console.log(sortedNumbers)

