
var studentList = new StudentList();


var studentFullNameValidNode;
var studentGradeValidNode;
var addNewSubjectNode;
var addStudentToPassListNode;
var addStudentToFailList;


function collectForm () {
    studentFullNameValidNode = document.querySelector("#student-name");
    studentGradeValidNode = document.querySelector("#student-grade");
    addNewSubjectNode = document.querySelector("#adding-subject");
    addStudentToPassListNode = document.querySelector("#passed-list");
    addStudentToFailList = document.querySelector("#failed-list");
}

function validate () {
    if(studentFullNameValidNode.value === ""){
        alert("Input name and surname is required.");
    }else if (studentFullNameValidNode.value.split(" ").length !== 2){
        alert("Input must have name and surname.");
    }else if(studentGradeValidNode.value === ""){
        alert("Input grade is required.");
    }else if(studentGradeValidNode.value < 1 || studentGradeValidNode.value > 10){
        alert("Grade must be from 1 to 10.");
    }
}
