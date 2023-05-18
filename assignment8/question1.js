const studentObj = {
    firstName: "",
    lastName: "",
    grades: [],
    inputNewGrade(grade) {
        this.grades.push(grade)
    },
    computeAverageGrade() {
        return this.grades.reduce((sum, grade) => sum += grade, 0) / this.grades.length;
    }
}

const firstNames = ["John", "Jane", "Alice", "Bob"];
const lastNames = ["Doe", "Smith", "Johnson", "Williams"];

function createStudents(firstNames, lastNames) {
    const students = [];
    for (let i = 0; i < firstNames.length; i++) {
      const student = Object.create(studentObj);
      student.firstName = firstNames[i];
      student.lastName = lastNames[i];
      student.grades = [];
      for (let j = 0; j < 5; j++) {
        student.inputNewGrade(generateRandomGrade());
      }
      students.push(student);
    }
    return students;
}

function generateRandomGrade() {
    return Math.floor(Math.random() * 26) + 75;
}
  
const students = createStudents(firstNames, lastNames);
const averageGrade = students.reduce(
    (total, student) => total + student.computeAverageGrade(),
    0
  ) / students.length;
console.log(students)
console.log(averageGrade
)
// const student1 = Object.create(student);
// student1.firstName = 'John';
// student1.lastName = 'Smith';
// student1.inputNewGrade(89);
// student1.inputNewGrade(45);
// const student2 = Object.create(student);
// const student3 = Object.create(student);
// const student4 = Object.create(student);

// const students = [student1, student2, student3, student4];
// console.log(students)
// console.log(student1.grades)
// console.log(student1.computeAverageGrade())
// for (let i = 0; i < 5; i++) {
//     console.log(Math.round(Math.random() * 10));
// }

// function creatArrayofStudents() {

// }