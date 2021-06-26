var studentList = new StudentList();


var studentFullNameValidNode = document.querySelector("#student-name");
var studentGradeValidNode = document.querySelector("#student-grade");
var addNewSubjectNode = document.querySelector("#adding-subject");
var addStudentToPassListNode = document.querySelector("#passed-list");
var addStudentToFailListNode = document.querySelector("#failed-list");
var buttonNode = document.querySelector("#btn");
var headStatOfFailNode = document.querySelector("#add-stat-fail");
var headStatOfPassNode = document.querySelector(".add-stat-pass");


var addPassed = [];
var addFailed = [];

function addStudentToListHandler () {
    //create student, grade and subject (exam)
    var addingStudentExam = new Exam (addNewSubjectNode.value, studentFullNameValidNode.value,
        studentGradeValidNode.value);
    var checkIfStudentPassOrFail = addingStudentExam.hasPassed();
    //create li element
    var createLiElementNode = document.createElement("li");
    //check if student pass or fail the exam and put him/her in the corect list
    

    if(checkIfStudentPassOrFail === "Passed"){
        addPassed.push(addingStudentExam);
        studentList.addStudentToPassList(addingStudentExam);
        createLiElementNode.textContent = addingStudentExam.getExamInfo() + "    " + 
        studentGradeValidNode.value;
        addStudentToPassListNode.appendChild(createLiElementNode);

        headStatOfPassNode.innerHTML = addPassed.length;
        
    }else if(checkIfStudentPassOrFail === "Failed") {
        addFailed.push(addingStudentExam);
        studentList.addStudentToFailList(addingStudentExam);
        createLiElementNode.textContent = addingStudentExam.getExamInfo() + "    " +
        studentGradeValidNode.value;
        addStudentToFailListNode.appendChild(createLiElementNode);
        
        var procentOfFail = Math.floor(addFailed.length/(addPassed.length + addFailed.length)*100) + "%";
        headStatOfFailNode.textContent = addFailed.length + " " + procentOfFail;



    }
    addNewSubjectNode.value = "JavaScript";
    studentFullNameValidNode.value = "";
    studentGradeValidNode.value = "";
}



buttonNode.addEventListener("click", addStudentToListHandler);
// buttonNode.addEventListener("click", addStudentToListHandler);