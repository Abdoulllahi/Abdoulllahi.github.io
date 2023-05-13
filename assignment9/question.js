class Student {

    static studentIds = [];
    constructor(studentId, answers) {
        if (Student.studentIds.includes(studentId)) {
            console.log("Student id must be unique!!!");
            this.studentId = undefined;
            this.answers = undefined;
            return;
        }
        this.studentId = studentId;
        this.answers = answers;
        Student.studentIds.push(this.studentId);
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {

    static qIds = [];
    constructor(qId, answer) {
        if (Question.qIds.includes(qId)) {
            console.log("Question ids must be unique!!!");
            this.qId = undefined;
            this.answer = undefined;
            return;
        }
        this.qId = qId;
        this.answer = answer;
        Question.qIds.push(qId);
    }

    checkAnswer(answer) {
        return this.answer == answer;
    }
}

class Quiz {

    constructor(questions, students) {
        this.questions = questions;
        this.students = students;
    }

    getAverageScore() {
        
    }
}