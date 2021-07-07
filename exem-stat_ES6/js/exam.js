//constructor for exam

class Exam {
    constructor(subject, student, grade) {
        this.subject = new Subject (subject);
        let studentNew = student.split(" ");
        this.student = new Student (studentNew[0], studentNew[1]);
        this.grade = parseInt(grade);
    }

    getExamInfo () {
        console.log(`${this.subject.getSubjectName()} ${this.student.getStudentData()}`);
    }

    hasPassed() {
        if(this.grade > 5) {
            return "Passed";
        } else {
            return "Failed";
        }
    }
}