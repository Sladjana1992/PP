

//constructor for exam
function Exam (subject, student, grade) {
    
    this.subject = new Subject (subject);
    var studentNew = student.split(" ");
    this.student = new Student (studentNew[0], studentNew[1]);
    this.grade = parseInt(grade);
}

Exam.prototype.getExamInfo = function() {
    return this.subject.getSubjectName() + " " + this.student.getStudentData();
}

Exam.prototype.hasPassed = function () {
    if(this.grade > 5) {
        return "Passed";
    } else {
        return "Failed";
    }
}