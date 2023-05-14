class Student {

    static studentIds = []
    constructor(studentId, answers) {
        if (studentIds.includes(studentId)) {
            this.studentId = undefined;
            this.answers = undefined;
            console.log("Student ids must be unique");
            return;
        }
        this.studentId = studentId;
        this.answers = answers;
        Student.studentIds.push(studentId);
    }

    addAnswer(question) {
        this.answers.push(question);
    }
}

class Question {

    static qids = [];
    constructor(qid, answer) {
        if (qids.includes(qid)) {
            this.qid = undefined;
            this.answer = undefined;
            console.log("Questions Ids must be unique");
            return;
        }
        this.qid = qid;
        this.answer = answer;
        Question.qids.push(qid);
    }

    checkAnswer(answer) {
        return this.answer === answer;
    }
}

class Quiz {

    constructor(questionArray, students) {
        this.questions = new Map();
        questionArray.array.forEach(question => this.questions.set(question.qid, question.answer));
        this.students = students;
    }

    scoreStudent(studentId) {

        let student = this.students.filter(student => student.studentId === studentId)[0];
        return student.answers.reduce((score, currentQuestion) => {
            let questionId = currentQuestion.questionId; //find quesiton id
            let correctAnswer = this.questions.get(questionId); //get correctAnswer from Map
            let result = currentQuestion.checkAnswer(correctAnswer); //compare currentQuestion answer with correctAnswer
            if (result) {
                score = sscore + 1;
            }
            return score;
        }, 0);
    }

    getAverageScore() {
        return this.students.reduce((average, currentStudent, index, array) =>
            average + this.scoreStudent(currentStudent.studentId) / array.length, 0);

    }
}

