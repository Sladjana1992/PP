
class StudentList {
    constructor () {
        this.studentPassList = [];
        this.studentFailList = [];
    }

    addStudentToPassList (student) {
        this.studentPassList.push(student)
    }

    addStudentToFailList (student) {
        this.studentFailList.push(student);
    }
}


class Student {
    constructor (firstName, lastName) {
        this.firstName = firstName,
        this.lastName = lastName
    }

    getStudentData() {
        console.log(`${this.firstName} ${this.lastName}`);
    }
}

