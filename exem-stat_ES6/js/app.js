
let studentList = new StudentList();

let studentFullNameValidNode = document.querySelector("#student-name");
let studentGradeValidNode = document.querySelector("#student-grade");
let addNewSubjectNode = document.querySelector("#adding-subject");
let addStudentToPassListNode = document.querySelector("#passed-list");
let addStudentToFailListNode = document.querySelector("#failed-list");
let buttonNode = document.querySelector("#btn");
let headStatOfFailNode = document.querySelector("#add-stat-fail");
let headStatOfPassNode = document.querySelector(".add-stat-pass");


let addPassed = [];
let addFailed = [];

let addStudentToListHandler = () => {
    //create student, grade and subject (exam)
    let addingStudentExam = new Exam (addNewSubjectNode.value, studentFullNameValidNode.value,
        studentGradeValidNode.value);
    let checkIfStudentPassOrFail = addingStudentExam.hasPassed();
    //create li element
    let createLiElementNode = document.createElement("li");
    //check if student pass or fail the exam and put him/her in the corect list

    if(checkIfStudentPassOrFail === "Passed"){
        addPassed.push(addingStudentExam);
        studentList.addStudentToPassList(addingStudentExam);
        createLiElementNode.textContent = `${addingStudentExam.getExamInfo()}               
        ${studentGradeValidNode.value}`;
        addStudentToPassListNode.appendChild(createLiElementNode);

        headStatOfPassNode.innerHTML = addPassed.length;
        
    }else if(checkIfStudentPassOrFail === "Failed") {
        addFailed.push(addingStudentExam);
        studentList.addStudentToFailList(addingStudentExam);
        createLiElementNode.textContent = `${addingStudentExam.getExamInfo()}           
        ${studentGradeValidNode.value}`;
        addStudentToFailListNode.appendChild(createLiElementNode);
    }
    let procentOfFail = Math.floor(addFailed.length/(addPassed.length + addFailed.length)*100) + "%";
    headStatOfFailNode.textContent = `${addFailed.length} ${procentOfFail}`;

    addNewSubjectNode.value = "JavaScript";
    studentFullNameValidNode.value = "";
    studentGradeValidNode.value = "";
}


buttonNode.addEventListener("click", addStudentToListHandler);
// buttonNode.addEventListener("click", addStudentToListHandler);