var studentList = new StudentList();


var studentFullNameValidNode = document.querySelector("#student-name");
var studentGradeValidNode = document.querySelector("#student-grade");
var addNewSubjectNode = document.querySelector("#adding-subject");
var addStudentToPassListNode = document.querySelector("#passed-list");
var addStudentToFailListNode = document.querySelector("#failed-list");
var buttonNode = document.querySelector("#btn");


function addStudentToListHandler () {
    //create student, grade and subject (exam)
    var student = new Student (studentFullNameValidNode.value)
    var addingStudentExam = new Exam (addNewSubjectNode.value, studentFullNameValidNode.value,
        studentGradeValidNode.value);
    var checkIfStudentPassOrFail = addingStudentExam.hasPassed();
    //create li element
    var createLiElementNode = document.createElement("li");
    //check if student pass or fail the exam and put him/her in the corect list
    if(checkIfStudentPassOrFail === "Passed"){
        studentList.addStudentToPassList(addingStudentExam);
        createLiElementNode.textContent = addingStudentExam.getExamInfo();
        addStudentToPassListNode.appendChild(createLiElementNode);
        
    }else if(checkIfStudentPassOrFail === "Failed") {
        studentList.addStudentToFailList(addingStudentExam);
        createLiElementNode.textContent = addingStudentExam.getExamInfo();
        addStudentToFailListNode.appendChild(createLiElementNode);
    }

}



buttonNode.addEventListener("click", addStudentToListHandler);
// buttonNode.addEventListener("click", addStudentToListHandler);