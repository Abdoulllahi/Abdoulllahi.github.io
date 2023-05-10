const student = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade: function (grade) {
        this.grades.push(grade)
    },
    computeAverageGrade: function () {
        return this.grades.reduce((sum, grade) => sum += grade, 0) / this.grades.length;
    }
}

const firstNames = ["Jean", "Claude", "Anna", "Isabella", "John", "Abdu"];
const lastNames = ["Smith", "Certail", "Jordan", "Dupont", "Endrics"];
const student1 = Object.create(student);
student1.firstName = 'John';
student1.lastName = 'Smith';
student1.inputNewGrade(89);
student1.inputNewGrade(45);
const student2 = Object.create(student);
const student3 = Object.create(student);
const student4 = Object.create(student);

const students = [student1, student2, student3, student4];
console.log(students)
console.log(student1.grades)
console.log(student1.computeAverageGrade())
for (let i = 0; i < 5; i++) {
    console.log(Math.round(Math.random() * 10));
}