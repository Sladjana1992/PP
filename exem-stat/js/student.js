
function StudentList () {
    this.studentPassList = [];
    this.studentFailList = [];
}

StudentList.prototype.addStudentToPassList = function(student) {
    this.studentPassList.push(student);
}

StudentList.prototype.addStudentToFailList = function(student) {
    this.studentFailList.push(student);
}
// constructor for making a student
function Student (firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

// we can read full name of student
Student.prototype.getStudentData = function() {
    return this.firstName + " " + this.lastName;
}